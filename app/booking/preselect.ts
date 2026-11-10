import type { Catalog } from "../../utils/crm";
import { addons as siteAddons, serviceBySlug, sizeIdForName } from "../../utils/services";

export type Preselect = { sizeId: string | null; picked: string[]; notes: string };

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

/**
 * Turns the estimator's link (?service=polish&size=sedan&addons=engineBay,debadging) into CRM ids
 * the booking form can start with. Services and add-ons match the CRM by name; sizes match the
 * same way the CRM's import does. Anything that doesn't match is ignored, so a bad or old link
 * just opens the normal form.
 */
export function preselectFromParams(catalog: Catalog, params: { service?: string; size?: string; addons?: string }): Preselect | null {
  const site = params.service ? serviceBySlug(params.service) : undefined;
  if (!site) return null;
  const main = catalog.services.find((s) => !s.isAddon && norm(s.name) === norm(site.name));
  if (!main) return null;

  const sizeId = catalog.sizes.find((s) => sizeIdForName(s.name) === params.size)?.id ?? null;

  const picked = [main.id];
  const hourly: string[] = [];
  for (const id of (params.addons ?? "").split(",").filter((a) => site.addons?.includes(a))) {
    const addon = siteAddons[id];
    if (addon.hourly) {
      hourly.push(addon.name);
      continue;
    }
    const crm = catalog.services.find((s) => s.isAddon && norm(s.name) === norm(addon.name));
    // Only add-ons the CRM offers with this service (and doesn't already include).
    const rule = crm && catalog.rules.find((r) => r.addonId === crm.id && r.serviceId === main.id);
    if (crm && rule && !rule.included) picked.push(crm.id);
  }

  return { sizeId, picked, notes: hourly.length ? `Interested in: ${hourly.join(", ")} (hourly, quoted at drop-off)` : "" };
}
