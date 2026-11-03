import { headers } from "next/headers";

// The website's only link to the CRM (app.dirtlessdetailing.com). Runs on the server: the key
// below is never sent to the browser. The CRM checks it, re-prices everything, checks the slot
// and the service area, and handles the deposit through Stripe.

const CRM_API_URL = (process.env.CRM_API_URL || "https://app.dirtlessdetailing.com").trim().replace(/\/$/, "");
const CRM_API_KEY = (process.env.CRM_API_KEY || "").trim();

/** `data` is set when ok; `error` (and maybe the `field` to fix) when not. */
export type CrmResult<T> = { ok: boolean; data?: T; error?: string; field?: string };

async function visitor() {
  const h = await headers();
  const ip = (h.get("x-forwarded-for")?.split(",")[0] || h.get("x-real-ip") || "").trim();
  const host = h.get("x-forwarded-host") || h.get("host") || "www.dirtlessdetailing.com";
  const proto = h.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https");
  return { ip, origin: `${proto}://${host}` };
}

/** POSTs to the CRM's public API as this website, passing along the visitor's address for rate limits. */
export async function crmPost<T>(path: string, body: unknown): Promise<CrmResult<T>> {
  if (!CRM_API_KEY) return { ok: false, error: "Online booking isn't set up yet. Please call or text us." };
  const { ip } = await visitor();
  try {
    const res = await fetch(`${CRM_API_URL}/api/public${path}`, {
      method: "POST",
      headers: { "content-type": "application/json", "x-dirtless-key": CRM_API_KEY, "x-client-ip": ip },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      // Shows in Vercel's logs; 401 means CRM_API_KEY doesn't match the CRM's BOOKING_API_KEY.
      console.error(`CRM ${path} answered ${res.status}:`, json.error);
      if (res.status === 401) return { ok: false, error: "Online booking isn't connected right now. Please call or text us." };
      return { ok: false, error: json.error || "Something went wrong. Please call or text us.", field: json.field };
    }
    return { ok: true, data: json as T };
  } catch {
    return { ok: false, error: "We couldn't reach our booking system. Please try again, or call or text us." };
  }
}

/** Services, prices and booking settings (cached for five minutes). */
export async function crmCatalog(): Promise<Catalog | null> {
  if (!CRM_API_KEY) return null;
  try {
    const res = await fetch(`${CRM_API_URL}/api/public/catalog`, { headers: { "x-dirtless-key": CRM_API_KEY }, next: { revalidate: 300 } });
    if (!res.ok) console.error(`CRM catalog answered ${res.status} (401 means CRM_API_KEY doesn't match the CRM's BOOKING_API_KEY)`);
    return res.ok ? ((await res.json()) as Catalog) : null;
  } catch (e) {
    console.error("Couldn't reach the CRM at", CRM_API_URL, e);
    return null;
  }
}

/** Where Stripe should send customers back to (this site, including Vercel preview deployments). */
export async function siteOrigin() {
  return (await visitor()).origin;
}

export type Price = { sizeClassId: string | null; cents: number; durationMin: number | null };
export type Service = {
  id: string;
  name: string;
  description: string | null;
  priceType: "by_size" | "per_foot" | "fixed";
  isAddon: boolean;
  durationMin: number | null;
  categoryName: string | null;
  prices: Price[];
};
export type Catalog = {
  business: { name: string; phone: string | null };
  sizes: { id: string; name: string }[];
  services: Service[];
  rules: { addonId: string; serviceId: string; included: boolean }[];
  settings: { depositPercent: number; depositRefundDays: number; mobileFeeCents: number; serviceRadiusMiles: number; minLeadDays: number };
};
export type SlotState = "open" | "booked" | "too_soon" | "off";
export type DaySlots = Record<string, { time: string; label: string; state: SlotState }[]>;
export type AddressSuggestion = { label: string; line1: string; city: string | null; state: string; zip: string | null };
export type BookingSummary = {
  number: number;
  day: string;
  time: string;
  locationType: string;
  services: string[];
  depositCents: number;
  depositPaid: boolean;
  status: "paid" | "pending" | "missing";
};
