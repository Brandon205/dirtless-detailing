"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "../../utils/cn";
import salePrices from "../../utils/SalePrices";
import {
  DEFAULT_SIZE,
  addonPrice,
  addons as allAddons,
  bookingHref,
  formatPrice,
  priceFor,
  serviceBySlug,
  sizeById,
  vehicleSizes,
  type VehicleSize
} from "../../utils/services";
import { CallLink, REAL_PHONE_DISPLAY } from "./CallTracking";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";

// Same key and format (size index 0-4) as the old estimator, so returning visitors keep their size.
const STORAGE_KEY = "dirtlessdetailing-size";

/** Animates a number to its new value in ~200ms; jumps straight there when reduced motion is on. */
function useTween(value: number) {
  const [shown, setShown] = useState(value);
  const from = useRef(value);
  useEffect(() => {
    const start = from.current;
    if (start === value || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      from.current = value;
      setShown(value);
      return;
    }
    const t0 = performance.now();
    let frame = 0;
    const step = (now: number) => {
      const p = Math.min((now - t0) / 200, 1);
      const v = Math.round(start + (value - start) * (1 - (1 - p) ** 3));
      from.current = v;
      setShown(v);
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [value]);
  return shown;
}

export function PricingEstimator({ slug }: { slug: string }) {
  const service = serviceBySlug(slug);
  const [sizeId, setSizeId] = useState<VehicleSize["id"]>(DEFAULT_SIZE);
  const [checked, setChecked] = useState<string[]>([]);

  // Restore the size picked last (on any service page) after the first render.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const saved = raw === null ? undefined : vehicleSizes[Number(raw)];
      if (saved) setSizeId(saved.id);
    } catch {}
  }, []);

  const size = sizeById(sizeId) ?? vehicleSizes[1];
  const base = service ? (priceFor(service, size) ?? 0) : 0;
  const offered = (service?.addons ?? []).map((id) => ({ id, ...allAddons[id], price: addonPrice(id) }));
  const picked = offered.filter((a) => checked.includes(a.id));
  const total = base + picked.reduce((sum, a) => sum + (a.price ?? 0), 0);
  const hasHourly = picked.some((a) => a.hourly);
  const shown = useTween(total);

  if (!service) return null;

  const pickSize = (s: VehicleSize) => {
    setSizeId(s.id);
    try {
      localStorage.setItem(STORAGE_KEY, String(vehicleSizes.indexOf(s)));
    } catch {}
  };
  const toggle = (id: string) => setChecked((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]));

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px] xl:gap-12">
      <div className="space-y-10">
        <fieldset>
          <legend className="mb-4 text-lg font-bold text-ink">
            <span className="mr-2 text-accent">1</span>Vehicle size
          </legend>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3">
            {vehicleSizes.map((s) => {
              const on = s.id === sizeId;
              const from = priceFor(service, s);
              return (
                <label
                  key={s.id}
                  className={cn(
                    "relative flex cursor-pointer flex-col gap-1 rounded-xl border p-3.5 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent",
                    on ? "border-2 border-accent bg-accent/[0.08] p-[13px]" : "border-line-strong hover:border-zinc-500"
                  )}
                >
                  <input type="radio" name={`size-${slug}`} value={s.id} checked={on} onChange={() => pickSize(s)} className="sr-only" />
                  <span
                    aria-hidden="true"
                    className={cn("absolute right-2.5 top-2.5 flex size-5 items-center justify-center rounded-full border", on ? "border-accent bg-accent text-on-accent" : "border-zinc-600")}
                  >
                    {on && <Check className="size-3.5" strokeWidth={3} />}
                  </span>
                  <span className="pr-6 text-[15px] font-bold leading-snug text-ink">{s.name}</span>
                  <span className="text-sm text-muted">{s.examples}</span>
                  {from !== null && <span className="mt-2 text-sm font-semibold text-zinc-200">from {formatPrice(from)}</span>}
                </label>
              );
            })}
          </div>
        </fieldset>

        {offered.length > 0 && (
          <fieldset>
            <legend className="mb-4 text-lg font-bold text-ink">
              <span className="mr-2 text-accent">2</span>Add-ons <span className="font-normal text-muted">(optional)</span>
            </legend>
            <div className="space-y-3">
              {offered.map((a) => {
                const on = checked.includes(a.id);
                return (
                  <label
                    key={a.id}
                    className={cn(
                      "flex cursor-pointer items-start gap-4 rounded-xl border p-4 transition-colors",
                      on ? "border-accent bg-accent/[0.06]" : "border-line-strong hover:border-zinc-500"
                    )}
                  >
                    <input type="checkbox" checked={on} onChange={() => toggle(a.id)} className="mt-1 size-5 shrink-0 accent-accent" />
                    <span className="flex-1">
                      <span className="block font-bold text-ink">{a.name}</span>
                      <span className="block text-sm text-muted">{a.description}</span>
                    </span>
                    <span className="shrink-0 font-semibold text-zinc-200">{a.hourly ? `$${a.hourly}/hr` : `+${formatPrice(a.price ?? 0)}`}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        )}
      </div>

      <aside className="overflow-hidden rounded-2xl border border-line bg-surface lg:sticky lg:top-6" aria-label="Your estimate">
        <div className="relative aspect-[16/10] bg-page">
          <Image src={size.image} alt={`Example ${size.name.toLowerCase()}`} fill sizes="(min-width: 1024px) 340px, 100vw" className="object-cover" />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between gap-3">
            <p className="text-eyebrow font-bold uppercase text-muted">Estimated starting price</p>
            {salePrices.active && <Badge variant="new">{salePrices.saleName}</Badge>}
          </div>
          <p className="mt-1 text-5xl font-extrabold text-ink" aria-live="polite" aria-atomic="true">
            <span className="sr-only">{formatPrice(total)}</span>
            <span aria-hidden="true">{formatPrice(shown)}</span>
          </p>
          {hasHourly && <p className="mt-1 text-sm text-muted">+ hourly add-ons, quoted at drop-off</p>}

          <ul className="mt-5 space-y-2 border-t border-line pt-5 text-sm">
            <li className="flex justify-between gap-4">
              <span className="text-zinc-300">
                {service.name} · {size.name}
              </span>
              <span className="font-semibold">{formatPrice(base)}</span>
            </li>
            {picked.map((a) => (
              <li key={a.id} className="flex justify-between gap-4">
                <span className="text-zinc-300">{a.name}</span>
                <span className="font-semibold">{a.hourly ? `$${a.hourly}/hr` : formatPrice(a.price ?? 0)}</span>
              </li>
            ))}
          </ul>

          <Button href={bookingHref(service, { size: size.id, addons: checked })} size="lg" className="mt-6 w-full">
            Book {service.name}
          </Button>

          <p className="mt-5 text-sm leading-relaxed text-muted">
            Estimates are a starting point; heavy contamination or damage can change the final price.
            {service.correctionNote && " Additional correction (wet sanding, touch-up paint) is available at $150/hour."}
          </p>
          <p className="mt-3 text-sm text-muted">
            Questions? Call or text{" "}
            <CallLink className="font-semibold text-accent-hover hover:underline">{REAL_PHONE_DISPLAY}</CallLink>
          </p>
        </div>
      </aside>
    </div>
  );
}
