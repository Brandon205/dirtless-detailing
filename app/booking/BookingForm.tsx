"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarDays, Car, Check, ChevronLeft, ChevronRight, Loader2, MapPin, Sailboat, Store, Truck } from "lucide-react";
import type { AddressSuggestion, Catalog, DaySlots, Service } from "../../utils/crm";
import { cn } from "../../utils/cn";
import { Turnstile } from "../components/Turnstile";
import { getAvailability, releaseBooking, submitBooking, suggestAddresses } from "./actions";

// The online booking form. Prices shown here are estimates for the customer; the CRM prices the
// booking again on submit, checks the time is still open, and takes the deposit through Stripe.

type Kind = "car" | "rv" | "boat";
const TZ = "America/Los_Angeles";
const money = (cents: number) => `$${(cents / 100).toLocaleString("en-US", { minimumFractionDigits: cents % 100 ? 2 : 0, maximumFractionDigits: 2 })}`;
const HEARD = ["Google", "Facebook", "Instagram", "A friend or family member", "Drove by the shop", "Returning customer", "Other"];

function todayKey() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
}
function addMonths(month: string, n: number) {
  const [y, m] = month.split("-").map(Number);
  const d = new Date(Date.UTC(y!, m! - 1 + n, 1));
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}
const monthTitle = (month: string) => new Date(`${month}-15T12:00:00Z`).toLocaleString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });
const dayTitle = (day: string) => new Date(`${day}T12:00:00Z`).toLocaleString("en-US", { weekday: "long", month: "long", day: "numeric", timeZone: "UTC" });

function priceOf(s: Service, sizeClassId: string | null, lengthFt: number | null) {
  if (s.priceType === "by_size") {
    const p = sizeClassId ? s.prices.find((x) => x.sizeClassId === sizeClassId) : undefined;
    return p ? { cents: p.cents, durationMin: p.durationMin ?? s.durationMin ?? 0 } : null;
  }
  const p = s.prices.find((x) => x.sizeClassId === null) ?? s.prices[0];
  if (!p) return null;
  if (s.priceType === "per_foot") return lengthFt ? { cents: Math.round(p.cents * lengthFt), durationMin: p.durationMin ?? s.durationMin ?? 0 } : null;
  return { cents: p.cents, durationMin: p.durationMin ?? s.durationMin ?? 0 };
}

export default function BookingForm({ catalog, canceledRef }: { catalog: Catalog; canceledRef: string | null }) {
  const { sizes, services, rules, settings } = catalog;
  const [kind, setKind] = useState<Kind>("car");
  const [sizeId, setSizeId] = useState<string | null>(null);
  const [length, setLength] = useState("");
  const [picked, setPicked] = useState<string[]>([]);
  const [where, setWhere] = useState<"shop" | "mobile">("shop");
  const [address, setAddress] = useState({ line1: "", city: "", zip: "" });
  const [month, setMonth] = useState(todayKey().slice(0, 7));
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [contact, setContact] = useState({ name: "", phone: "", email: "", vehicle: "", heardAbout: "", notes: "" });
  const [token, setToken] = useState("");
  const [tokenKey, setTokenKey] = useState(0);
  const [error, setError] = useState<{ message: string; field?: string } | null>(null);
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  // Back from Stripe without paying: free the time they were holding.
  useEffect(() => {
    if (!canceledRef) return;
    releaseBooking(canceledRef).then(() => setNotice("No deposit was taken and that time is free again. Pick your services and a time below to try again."));
  }, [canceledRef]);

  const lengthFt = kind === "car" ? null : Number(length) || null;
  const basis = { sizeClassId: kind === "car" ? sizeId : null, lengthFt };
  const vehicleReady = kind === "car" ? !!sizeId : !!lengthFt;
  // RVs and boats only see the per-foot services; cars only see the rest.
  const forVehicle = services.filter((s) => (kind === "car" ? s.priceType !== "per_foot" : s.priceType !== "by_size"));
  const mains = forVehicle.filter((s) => !s.isAddon);
  const pickedMains = picked.filter((id) => mains.some((m) => m.id === id));
  const addonState = (id: string) => {
    if (pickedMains.length === 0) return "hidden";
    const relevant = rules.filter((r) => r.addonId === id && pickedMains.includes(r.serviceId));
    if (relevant.some((r) => r.included)) return "included";
    return relevant.length ? "available" : "hidden";
  };
  const addons = forVehicle.filter((s) => s.isAddon && addonState(s.id) !== "hidden");

  const lines = picked
    .map((id) => services.find((s) => s.id === id))
    .filter((s): s is Service => !!s && (!s.isAddon || addonState(s.id) === "available"))
    .map((s) => ({ service: s, price: priceOf(s, basis.sizeClassId, basis.lengthFt) }))
    .filter((l): l is { service: Service; price: { cents: number; durationMin: number } } => !!l.price);
  const fee = where === "mobile" ? settings.mobileFeeCents : 0;
  const subtotal = lines.reduce((s, l) => s + l.price.cents, 0) + fee;
  const durationMin = lines.reduce((s, l) => s + (l.price.durationMin || 0), 0);

  // Changing the vehicle drops services it can't have.
  useEffect(() => {
    setPicked((p) => p.filter((id) => forVehicle.some((s) => s.id === id)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kind]);

  // Open times for the month shown.
  const [slots, setSlots] = useState<{ key: string; days: DaySlots } | null>(null);
  const [slotsError, setSlotsError] = useState<string | null>(null);
  const slotsKey = `${month}|${where}|${Math.round(durationMin / 30)}`;
  useEffect(() => {
    if (!lines.length) return;
    let stale = false;
    getAvailability(month, where, durationMin || 60).then((r) => {
      if (stale) return;
      if (r.ok) {
        setSlots({ key: slotsKey, days: r.data.days });
        setSlotsError(null);
      } else setSlotsError(r.error);
    });
    return () => {
      stale = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slotsKey, lines.length > 0]);
  const days = slots?.key === slotsKey ? slots.days : null;
  const daySlots = day && days?.[day] ? days[day]! : [];
  useEffect(() => {
    // A day or time that's no longer open (location or services changed) is cleared.
    if (time && days && day && !days[day]?.some((s) => s.time === time && s.state === "open")) setTime("");
  }, [days, day, time]);

  async function submit() {
    setError(null);
    if (!lines.length) return setError({ message: "Pick at least one service.", field: "services" });
    if (!day || !time) return setError({ message: "Pick a day and time.", field: "time" });
    if (where === "mobile" && !address.line1.trim()) return setError({ message: "Enter the address for your mobile detail.", field: "address" });
    if (!contact.name.trim() || !contact.phone.trim() || !contact.email.trim()) return setError({ message: "Fill in your name, phone and email.", field: "customer" });
    if (!contact.vehicle.trim()) return setError({ message: "Tell us about the vehicle, e.g. 2019 white Tacoma.", field: "vehicle" });
    if (!token) return setError({ message: "Please finish the security check above the button.", field: "turnstile" });
    setSending(true);
    const r = await submitBooking({
      turnstileToken: token,
      customer: { name: contact.name, phone: contact.phone, email: contact.email },
      vehicle: { kind, name: contact.vehicle, sizeClassId: basis.sizeClassId, lengthFt },
      serviceIds: lines.map((l) => l.service.id),
      locationType: where,
      address: where === "mobile" ? address : null,
      day,
      time,
      heardAbout: contact.heardAbout,
      notes: contact.notes,
    });
    if (r.ok) {
      window.location.href = r.data.url;
      return;
    }
    setSending(false);
    setError({ message: r.error, field: r.field });
    // A token works once; get a new one for the next try.
    setToken("");
    setTokenKey((k) => k + 1);
    if (r.field === "time") {
      setTime("");
      setSlots(null);
    }
  }

  const step = (n: number, title: string, done: boolean) => (
    <h2 className="flex items-center gap-3 font-heading text-2xl font-bold">
      <span className={cn("flex size-9 shrink-0 items-center justify-center rounded-full text-lg", done ? "bg-primary text-zinc-950" : "border-2 border-zinc-500 text-zinc-300")}>
        {done ? <Check size={20} /> : n}
      </span>
      {title}
    </h2>
  );

  return (
    <div className="flex flex-col gap-6">
      {notice && <p className="rounded-lg border border-primary bg-primary/10 p-4 text-lg">{notice}</p>}

      {/* 1. Vehicle */}
      <Section>
        {step(1, "Your vehicle", vehicleReady)}
        <div className="grid grid-cols-3 gap-3">
          {(
            [
              { value: "car", label: "Car, truck or SUV", icon: <Car /> },
              { value: "rv", label: "RV or trailer", icon: <Truck /> },
              { value: "boat", label: "Boat", icon: <Sailboat /> },
            ] as const
          ).map((o) => (
            <Choice key={o.value} selected={kind === o.value} onClick={() => setKind(o.value)} className="flex-col items-center gap-2 text-center">
              {o.icon}
              <span>{o.label}</span>
            </Choice>
          ))}
        </div>
        {kind === "car" ? (
          <div className="flex flex-col gap-2">
            <Label>Size</Label>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {sizes.map((s) => (
                <Choice key={s.id} selected={sizeId === s.id} onClick={() => setSizeId(s.id)}>
                  {s.name}
                </Choice>
              ))}
            </div>
          </div>
        ) : (
          <Field label="Length (feet)">
            <Input inputMode="decimal" value={length} onChange={(e) => setLength(e.target.value)} placeholder="e.g. 32" className="max-w-40" />
          </Field>
        )}
      </Section>

      {/* 2. Services */}
      <Section dim={!vehicleReady}>
        {step(2, "Services", lines.length > 0)}
        {!vehicleReady && <p className="text-gray-400">Pick your vehicle {kind === "car" ? "size" : "length"} first to see prices.</p>}
        {vehicleReady && (
          <>
            {groupBy(mains).map(([category, list]) => (
              <div key={category} className="flex flex-col gap-2">
                <Label>{category}</Label>
                {list.map((s) => (
                  <ServiceRow key={s.id} service={s} price={priceOf(s, basis.sizeClassId, basis.lengthFt)} selected={picked.includes(s.id)} onToggle={() => toggle(s.id)} />
                ))}
              </div>
            ))}
            {pickedMains.length > 0 && addons.length > 0 && (
              <div className="flex flex-col gap-2">
                <Label>Add-ons</Label>
                {addons.map((s) =>
                  addonState(s.id) === "included" ? (
                    <div key={s.id} className="flex items-center justify-between rounded-lg border-2 border-zinc-700 px-4 py-3 text-gray-400">
                      <span>{s.name}</span>
                      <span className="text-sm">Included</span>
                    </div>
                  ) : (
                    <ServiceRow key={s.id} service={s} price={priceOf(s, basis.sizeClassId, basis.lengthFt)} selected={picked.includes(s.id)} onToggle={() => toggle(s.id)} />
                  ),
                )}
              </div>
            )}
          </>
        )}
      </Section>

      {/* 3. Where */}
      <Section dim={!lines.length}>
        {step(3, "Where", where === "shop" || !!address.line1.trim())}
        <div className="grid grid-cols-2 gap-3">
          <Choice selected={where === "shop"} onClick={() => setWhere("shop")} className="flex-col items-start gap-1">
            <span className="flex items-center gap-2 font-semibold">
              <Store size={20} /> At our shop
            </span>
            <span className="text-sm text-gray-400">Buckley Business Park, 28120 WA-410, Unit C6</span>
          </Choice>
          <Choice selected={where === "mobile"} onClick={() => setWhere("mobile")} className="flex-col items-start gap-1">
            <span className="flex items-center gap-2 font-semibold">
              <MapPin size={20} /> We come to you
            </span>
            <span className="text-sm text-gray-400">
              +{money(settings.mobileFeeCents)} mobile fee, within {settings.serviceRadiusMiles} miles of Buckley
            </span>
          </Choice>
        </div>
        {where === "mobile" && (
          <div className="grid grid-cols-6 gap-3">
            <div className="col-span-6">
              <AddressField value={address.line1} onChange={(line1) => setAddress((a) => ({ ...a, line1 }))} onPick={(a) => setAddress({ line1: a.line1, city: a.city ?? "", zip: a.zip ?? "" })} invalid={error?.field === "address"} />
            </div>
            <Field label="City" className="col-span-4">
              <Input value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} autoComplete="address-level2" />
            </Field>
            <Field label="ZIP" className="col-span-2">
              <Input inputMode="numeric" value={address.zip} onChange={(e) => setAddress({ ...address, zip: e.target.value })} autoComplete="postal-code" />
            </Field>
          </div>
        )}
      </Section>

      {/* 4. When */}
      <Section dim={!lines.length}>
        {step(4, "When", !!day && !!time)}
        {!lines.length ? (
          <p className="text-gray-400">Pick your services first; how long they take decides which times are open.</p>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <button type="button" aria-label="Previous month" onClick={() => setMonth(addMonths(month, -1))} disabled={month <= todayKey().slice(0, 7)} className="rounded-md p-2 hover:bg-zinc-700 disabled:opacity-30">
                <ChevronLeft />
              </button>
              <span className="font-heading text-xl font-bold">{monthTitle(month)}</span>
              <button type="button" aria-label="Next month" onClick={() => setMonth(addMonths(month, 1))} className="rounded-md p-2 hover:bg-zinc-700">
                <ChevronRight />
              </button>
            </div>
            {slotsError && <p className="text-red-400">{slotsError}</p>}
            {!days && !slotsError && (
              <p className="flex items-center gap-2 text-gray-400">
                <Loader2 className="animate-spin" size={18} /> Checking open times…
              </p>
            )}
            {days && <MonthGrid month={month} days={days} selected={day} onSelect={(d) => (setDay(d), setTime(""))} />}
            {day && (
              <div className="flex flex-col gap-2">
                <Label>{dayTitle(day)}</Label>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {daySlots.map((s) => (
                    <Choice key={s.time} selected={time === s.time} disabled={s.state !== "open"} onClick={() => setTime(s.time)} className="flex-col items-center">
                      <span className={cn("text-lg font-semibold", s.state !== "open" && "line-through")}>{s.label}</span>
                      <span className="text-sm text-gray-400">{s.state === "open" ? (where === "shop" ? "Drop-off" : "Arrival") : s.state === "booked" ? "Booked" : "Not available"}</span>
                    </Choice>
                  ))}
                  {daySlots.length === 0 && <p className="text-gray-400">We're closed for online booking that day.</p>}
                </div>
              </div>
            )}
          </>
        )}
      </Section>

      {/* 5. Contact */}
      <Section dim={!time}>
        {step(5, "Your details", !!(contact.name && contact.phone && contact.email && contact.vehicle))}
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Name" className="sm:col-span-2">
            <Input value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} autoComplete="name" />
          </Field>
          <Field label="Mobile phone (we text to confirm)">
            <Input type="tel" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} autoComplete="tel" />
          </Field>
          <Field label="Email (for your receipt)">
            <Input type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} autoComplete="email" />
          </Field>
          <Field label="Vehicle (year, color, make and model)" className="sm:col-span-2">
            <Input value={contact.vehicle} onChange={(e) => setContact({ ...contact, vehicle: e.target.value })} placeholder="e.g. 2019 white Toyota Tacoma" />
          </Field>
          <Field label="How did you hear about us?" className="sm:col-span-2">
            <select value={contact.heardAbout} onChange={(e) => setContact({ ...contact, heardAbout: e.target.value })} className={inputClass}>
              <option value="">Choose one (optional)</option>
              {HEARD.map((h) => (
                <option key={h}>{h}</option>
              ))}
            </select>
          </Field>
          <Field label="Anything we should know? (optional)" className="sm:col-span-2">
            <textarea rows={3} value={contact.notes} onChange={(e) => setContact({ ...contact, notes: e.target.value })} placeholder="Pet hair, stains, gate code…" className={inputClass} />
          </Field>
        </div>
      </Section>

      {/* 6. Review and deposit */}
      <Section>
        {step(6, "Review and pay deposit", false)}
        {lines.length === 0 ? (
          <p className="text-gray-400">Your services and total show up here.</p>
        ) : (
          <div className="flex flex-col gap-1 text-lg">
            {lines.map((l) => (
              <Row key={l.service.id} label={l.service.name} value={money(l.price.cents)} />
            ))}
            {fee > 0 && <Row label="Mobile fee" value={money(fee)} />}
            <div className="mt-2 border-t border-zinc-600 pt-2">
              <Row label={<strong>Estimated total</strong>} value={<strong>{money(subtotal)}</strong>} />
            </div>
            <p className="text-sm text-gray-400">Plus WA sales tax. Final price may change if the vehicle needs more work than expected.</p>
          </div>
        )}
        {day && time && (
          <p className="flex items-center gap-2 text-lg">
            <CalendarDays className="text-primary" /> {dayTitle(day)} at {daySlots.find((s) => s.time === time)?.label}, {where === "shop" ? "at our shop" : "at your address"}
          </p>
        )}
        <div className="rounded-lg bg-zinc-900 p-4 text-gray-300">
          A <strong className="text-white">{settings.depositPercent}% deposit</strong> holds your spot; you&apos;ll see the exact amount on the secure Stripe payment page. The rest is due
          after the detail. Cancel at least {settings.depositRefundDays} days ahead for a full deposit refund. We&apos;ll text you to confirm.
        </div>
        <Turnstile onToken={setToken} resetKey={tokenKey} />
        {error && (
          <p role="alert" className="rounded-lg border border-red-500 bg-red-500/10 p-3 text-red-300">
            {error.message}
          </p>
        )}
        <button
          type="button"
          onClick={submit}
          disabled={sending}
          className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-xl font-bold text-zinc-950 transition-colors hover:bg-accent-darker disabled:opacity-60"
        >
          {sending && <Loader2 className="animate-spin" />}
          {sending ? "Saving your booking…" : "Continue to deposit"}
        </button>
      </Section>
    </div>
  );

  function toggle(id: string) {
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  }
}

function groupBy(list: Service[]): [string, Service[]][] {
  const m = new Map<string, Service[]>();
  for (const s of list) m.set(s.categoryName ?? "Services", [...(m.get(s.categoryName ?? "Services") ?? []), s]);
  return [...m];
}

function ServiceRow({ service: s, price, selected, onToggle }: { service: Service; price: { cents: number } | null; selected: boolean; onToggle: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("rounded-lg border-2 transition-colors", selected ? "border-primary bg-primary/10" : "border-zinc-600")}>
      <button type="button" onClick={onToggle} disabled={!price} aria-pressed={selected} className="flex w-full items-center gap-3 px-4 py-3 text-left disabled:opacity-50">
        <span className={cn("flex size-6 shrink-0 items-center justify-center rounded border-2", selected ? "border-primary bg-primary text-zinc-950" : "border-zinc-500")}>
          {selected && <Check size={16} />}
        </span>
        <span className="flex-1 text-lg font-semibold">{s.name}</span>
        <span className="text-lg font-semibold text-primary">{price ? money(price.cents) : "Call for price"}</span>
      </button>
      {s.description && (
        <div className="px-4 pb-3 pl-13">
          <button type="button" onClick={() => setOpen((o) => !o)} className="text-sm text-gray-400 underline">
            {open ? "Hide details" : "What's included"}
          </button>
          {open && <p className="mt-2 whitespace-pre-line text-sm text-gray-300">{s.description}</p>}
        </div>
      )}
    </div>
  );
}

function MonthGrid({ month, days, selected, onSelect }: { month: string; days: DaySlots; selected: string; onSelect: (day: string) => void }) {
  const keys = Object.keys(days);
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-7 gap-1 text-center text-sm font-semibold text-gray-400">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {keys.map((d) => {
          const states = days[d]!.map((s) => s.state);
          const open = states.filter((s) => s === "open").length;
          const inMonth = d.startsWith(month);
          const picked = d === selected;
          return (
            <button
              key={d}
              type="button"
              disabled={open === 0 || !inMonth}
              onClick={() => onSelect(d)}
              aria-pressed={picked}
              aria-label={`${dayTitle(d)}: ${open ? `${open} open` : "nothing open"}`}
              className={cn(
                "flex h-14 flex-col items-center justify-center gap-1 rounded-md transition-colors",
                picked ? "bg-primary text-zinc-950" : open ? "bg-zinc-900 hover:bg-zinc-700" : "text-zinc-600",
                !inMonth && "invisible",
              )}
            >
              <span className="text-lg font-semibold leading-none">{Number(d.slice(8))}</span>
              {inMonth && states.some((s) => s === "open" || s === "booked") && (
                <span aria-hidden className="flex gap-0.5">
                  {states.map((s, i) =>
                    s === "open" || s === "booked" ? (
                      <span
                        key={i}
                        className={cn("h-1.5 w-2.5 rounded-full", s === "open" ? (picked ? "bg-zinc-950" : "bg-green-400") : picked ? "border border-zinc-950" : "border border-zinc-500")}
                      />
                    ) : null,
                  )}
                </span>
              )}
            </button>
          );
        })}
      </div>
      <div className="flex gap-4 text-sm text-gray-400">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-2.5 rounded-full bg-green-400" /> Open
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-2.5 rounded-full border border-zinc-500" /> Booked
        </span>
      </div>
    </div>
  );
}

function AddressField({ value, onChange, onPick, invalid }: { value: string; onChange: (v: string) => void; onPick: (a: AddressSuggestion) => void; invalid?: boolean }) {
  const [list, setList] = useState<AddressSuggestion[]>([]);
  const [open, setOpen] = useState(false);
  const typed = useRef(false);
  useEffect(() => {
    if (!typed.current || value.trim().length < 4) return;
    let stale = false;
    const t = setTimeout(() => suggestAddresses(value).then((r) => !stale && (setList(r), setOpen(true))), 300);
    return () => {
      stale = true;
      clearTimeout(t);
    };
  }, [value]);
  return (
    <Field label="Street address">
      <div className="relative">
        <Input
          value={value}
          onChange={(e) => {
            typed.current = true;
            onChange(e.target.value);
          }}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          autoComplete="off"
          className={invalid ? "border-red-500" : ""}
        />
        {open && list.length > 0 && (
          <ul className="absolute inset-x-0 top-full z-20 mt-1 overflow-hidden rounded-md border border-zinc-600 bg-zinc-900 shadow-lg">
            {list.map((a) => (
              <li key={a.label}>
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => {
                    typed.current = false;
                    onPick(a);
                    setOpen(false);
                  }}
                  className="flex w-full items-center gap-2 px-3 py-3 text-left hover:bg-zinc-700"
                >
                  <MapPin size={16} className="shrink-0 text-gray-400" />
                  {a.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Field>
  );
}

const inputClass = "w-full rounded-md border border-zinc-600 bg-zinc-900 px-3 py-3 text-lg text-white outline-none focus:border-primary";

function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(inputClass, className)} />;
}

function Field({ label, className, children }: { label: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={cn("flex flex-col gap-1.5", className)}>
      <Label>{label}</Label>
      {children}
    </label>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="text-sm font-semibold uppercase tracking-wide text-gray-400">{children}</span>;
}

function Section({ children, dim }: { children: React.ReactNode; dim?: boolean }) {
  return <section className={cn("flex w-full flex-col gap-4 rounded-xl bg-zinc-800 p-5 transition-opacity", dim && "opacity-60")}>{children}</section>;
}

function Choice({ selected, disabled, onClick, className, children }: { selected: boolean; disabled?: boolean; onClick: () => void; className?: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "flex min-h-12 items-center rounded-lg border-2 px-4 py-3 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-40",
        selected ? "border-primary bg-primary/15" : "border-zinc-600 hover:border-zinc-400",
        className,
      )}
    >
      {children}
    </button>
  );
}

function Row({ label, value }: { label: React.ReactNode; value: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-4">
      <span>{label}</span>
      <span className="tabular-nums">{value}</span>
    </div>
  );
}

