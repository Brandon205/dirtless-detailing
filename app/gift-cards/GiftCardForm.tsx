"use client";

import { useState } from "react";
import { Check, Gift, Loader2 } from "lucide-react";
import type { Catalog } from "../../utils/crm";
import { cn } from "../../utils/cn";
import { Turnstile } from "../components/Turnstile";
import { buyGiftCard } from "./actions";

// Buying a gift card. The CRM prices service cards again and takes payment through Stripe; the card
// is emailed to the recipient (or to the buyer to pass on).

const AMOUNTS = [5000, 10000, 15000, 20000, 30000];
const money = (cents: number) => `$${(cents / 100).toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
const inputClass = "w-full rounded-lg border border-line-strong bg-page px-3 py-3 text-lg text-ink outline-none focus:border-accent";

export default function GiftCardForm({ catalog }: { catalog: Catalog }) {
  const services = catalog.services.filter((s) => !s.isAddon && s.priceType !== "per_foot" && s.prices.length > 0);
  const [kind, setKind] = useState<"amount" | "service">("amount");
  const [amount, setAmount] = useState<number | "custom">(10000);
  const [custom, setCustom] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [sizeId, setSizeId] = useState("");
  const [toMe, setToMe] = useState(false);
  const [f, setF] = useState({ buyerName: "", buyerEmail: "", buyerPhone: "", recipientName: "", recipientEmail: "", message: "" });
  const [token, setToken] = useState("");
  const [tokenKey, setTokenKey] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const service = services.find((s) => s.id === serviceId);
  const bySize = service?.priceType === "by_size";
  const servicePrice = service ? (bySize ? service.prices.find((p) => p.sizeClassId === sizeId)?.cents : service.prices.find((p) => p.sizeClassId === null)?.cents) : undefined;
  const customCents = Math.round(Number(custom.replace(/[$,]/g, "")) * 100);
  const valueCents = kind === "service" ? (servicePrice ?? 0) : amount === "custom" ? (Number.isFinite(customCents) ? customCents : 0) : amount;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (kind === "amount" && (valueCents < 2500 || valueCents > 100000)) return setError("Pick an amount from $25 to $1,000.");
    if (kind === "service" && !servicePrice) return setError(bySize ? "Pick the service and the vehicle size." : "Pick a service.");
    if (!f.buyerName.trim() || !f.buyerEmail.trim()) return setError("Enter your name and email.");
    if (!toMe && !f.recipientEmail.trim()) return setError("Enter their email, or choose to have it sent to you.");
    if (!token) return setError("Please finish the security check above the button.");
    setSending(true);
    const r = await buyGiftCard({
      turnstileToken: token,
      kind,
      ...(kind === "amount" ? { amountCents: valueCents } : { serviceId, sizeClassId: bySize ? sizeId : null }),
      buyer: { name: f.buyerName, email: f.buyerEmail, phone: f.buyerPhone },
      recipient: { name: f.recipientName, email: toMe ? "" : f.recipientEmail },
      message: f.message,
    });
    if (r.ok && r.data) {
      window.location.href = r.data.url;
      return;
    }
    setSending(false);
    setError(r.error ?? "Something went wrong. Please try again.");
    setToken("");
    setTokenKey((k) => k + 1);
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-6">
      <Panel title="1. Pick the gift">
        <div className="grid grid-cols-2 gap-3">
          <Choice selected={kind === "amount"} onClick={() => setKind("amount")}>
            <span className="font-bold">A dollar amount</span>
            <span className="text-sm text-muted">Use it on any service</span>
          </Choice>
          <Choice selected={kind === "service"} onClick={() => setKind("service")}>
            <span className="font-bold">A specific detail</span>
            <span className="text-sm text-muted">Covers it in full, tax included</span>
          </Choice>
        </div>
        {kind === "amount" ? (
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
              {AMOUNTS.map((a) => (
                <Choice key={a} selected={amount === a} onClick={() => setAmount(a)} className="items-center">
                  <span className="text-lg font-bold">{money(a)}</span>
                </Choice>
              ))}
              <Choice selected={amount === "custom"} onClick={() => setAmount("custom")} className="items-center">
                <span className="text-lg font-bold">Other</span>
              </Choice>
            </div>
            {amount === "custom" && (
              <Field label="Amount ($25 to $1,000)">
                <input inputMode="decimal" autoFocus value={custom} onChange={(e) => setCustom(e.target.value)} placeholder="$75" className={cn(inputClass, "max-w-48")} />
              </Field>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <Field label="Service">
              <select value={serviceId} onChange={(e) => (setServiceId(e.target.value), setSizeId(""))} className={inputClass}>
                <option value="">Choose a service…</option>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </Field>
            {service && bySize && (
              <Field label="Their vehicle size">
                <select value={sizeId} onChange={(e) => setSizeId(e.target.value)} className={inputClass}>
                  <option value="">Choose a size…</option>
                  {catalog.sizes
                    .filter((z) => service.prices.some((p) => p.sizeClassId === z.id))
                    .map((z) => (
                      <option key={z.id} value={z.id}>
                        {z.name} · {money(service.prices.find((p) => p.sizeClassId === z.id)!.cents)}
                      </option>
                    ))}
                </select>
              </Field>
            )}
          </div>
        )}
      </Panel>

      <Panel title="2. Who it's for">
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Their name">
            <input value={f.recipientName} onChange={(e) => setF({ ...f, recipientName: e.target.value })} className={inputClass} />
          </Field>
          {!toMe && (
            <Field label="Their email (we send the card here)">
              <input type="email" value={f.recipientEmail} onChange={(e) => setF({ ...f, recipientEmail: e.target.value })} className={inputClass} />
            </Field>
          )}
        </div>
        <label className="flex min-h-11 cursor-pointer items-center gap-3 text-ink">
          <input type="checkbox" checked={toMe} onChange={(e) => setToMe(e.target.checked)} className="size-5 accent-amber-500" />
          Send it to me instead, so I can give it to them
        </label>
        <Field label="Message on the card (optional)">
          <textarea rows={3} maxLength={500} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} placeholder="Happy birthday!" className={inputClass} />
        </Field>
      </Panel>

      <Panel title="3. Your details">
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Your name">
            <input value={f.buyerName} onChange={(e) => setF({ ...f, buyerName: e.target.value })} autoComplete="name" className={inputClass} />
          </Field>
          <Field label="Your email (for the receipt)">
            <input type="email" value={f.buyerEmail} onChange={(e) => setF({ ...f, buyerEmail: e.target.value })} autoComplete="email" className={inputClass} />
          </Field>
          <Field label="Phone (optional)">
            <input type="tel" value={f.buyerPhone} onChange={(e) => setF({ ...f, buyerPhone: e.target.value })} autoComplete="tel" className={inputClass} />
          </Field>
        </div>
      </Panel>

      <div className="flex flex-col gap-4 rounded-xl border border-line bg-surface p-5">
        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-2 text-lg text-ink">
            <Gift className="text-accent" />
            {kind === "service" ? (service ? service.name : "Pick a service") : "Gift card"}
          </span>
          <span className="text-2xl font-extrabold text-ink tabular-nums">{valueCents ? money(valueCents) : "—"}</span>
        </div>
        <p className="text-sm text-muted">No sales tax on gift cards. The card is emailed right after payment with a code and a QR code, and never expires.</p>
        <Turnstile onToken={setToken} resetKey={tokenKey} />
        {error && (
          <p role="alert" className="rounded-lg border border-danger bg-danger/10 p-3 text-danger">
            {error}
          </p>
        )}
        <button type="submit" disabled={sending} className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-accent px-7 py-4 text-lg font-bold text-on-accent transition-colors hover:bg-accent-hover disabled:opacity-60">
          {sending && <Loader2 className="animate-spin" />}
          {sending ? "Opening secure checkout…" : `Continue to payment${valueCents ? ` · ${money(valueCents)}` : ""}`}
        </button>
      </div>
    </form>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-line bg-surface p-5">
      <h2 className="text-xl font-bold text-ink">{title}</h2>
      {children}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-semibold uppercase tracking-wide text-muted">{label}</span>
      {children}
    </label>
  );
}

function Choice({ selected, onClick, className, children }: { selected: boolean; onClick: () => void; className?: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        "relative flex min-h-14 flex-col items-start justify-center gap-0.5 rounded-lg border-2 px-4 py-3 text-left text-ink transition-colors",
        selected ? "border-accent bg-accent/15" : "border-line-strong hover:border-zinc-400",
        className,
      )}
    >
      {selected && <Check aria-hidden className="absolute right-2 top-2 size-4 text-accent" />}
      {children}
    </button>
  );
}
