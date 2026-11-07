"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { cn } from "../../utils/cn";
import { Turnstile } from "../components/Turnstile";
import { submitInquiry } from "./actions";

const inputClass = "w-full rounded-md border border-zinc-600 bg-zinc-900 px-3 py-3 text-lg text-white outline-none focus:border-primary";

/** Ask a question without calling or texting. Lands in the Inbox in our CRM. */
export default function InquiryForm({ services }: { services: string[] }) {
  const [f, setF] = useState({ name: "", phone: "", email: "", vehicle: "", message: "" });
  const [picked, setPicked] = useState<string[]>([]);
  const [token, setToken] = useState("");
  const [tokenKey, setTokenKey] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!f.name.trim()) return setError("Enter your name.");
    if (!f.phone.trim() && !f.email.trim()) return setError("Leave a phone number or an email so we can get back to you.");
    if (!token) return setError("Please finish the security check above the button.");
    setSending(true);
    const r = await submitInquiry({ ...f, services: picked, turnstileToken: token });
    setSending(false);
    if (r.ok) return setSent(true);
    setError(r.error);
    setToken("");
    setTokenKey((k) => k + 1);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl bg-zinc-800 p-8 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-primary text-zinc-950">
          <Check size={32} />
        </span>
        <h2 className="font-heading text-2xl font-bold">Thanks, {f.name.split(" ")[0]}!</h2>
        <p className="text-lg text-zinc-300">We got your message and will get back to you soon, usually the same day.</p>
        <a href="/booking" className="mt-2 rounded-lg bg-primary px-6 py-3 text-lg font-bold text-zinc-950 hover:bg-accent-darker">
          See prices and book online
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4 rounded-xl bg-zinc-800 p-5 text-left">
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Name" className="sm:col-span-2">
          <input value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} autoComplete="name" className={inputClass} />
        </Field>
        <Field label="Phone">
          <input type="tel" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} autoComplete="tel" className={inputClass} />
        </Field>
        <Field label="Email">
          <input type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} autoComplete="email" className={inputClass} />
        </Field>
        <Field label="Vehicle" className="sm:col-span-2">
          <input value={f.vehicle} onChange={(e) => setF({ ...f, vehicle: e.target.value })} placeholder="e.g. 2019 white Toyota Tacoma" className={inputClass} />
        </Field>
      </div>
      {services.length > 0 && (
        <fieldset className="flex flex-col gap-2">
          <legend className="mb-1.5 text-sm font-semibold uppercase tracking-wide text-zinc-400">Services you&apos;re interested in</legend>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => {
              const on = picked.includes(s);
              return (
                <button
                  key={s}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setPicked((p) => (on ? p.filter((x) => x !== s) : [...p, s]))}
                  className={cn("rounded-lg border-2 px-3 py-2 transition-colors", on ? "border-primary bg-primary/15" : "border-zinc-600 hover:border-zinc-400")}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </fieldset>
      )}
      <Field label="Questions or anything else we should know">
        <textarea rows={5} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} className={inputClass} />
      </Field>
      <Turnstile onToken={setToken} resetKey={tokenKey} />
      {error && (
        <p role="alert" className="rounded-lg border border-red-500 bg-red-500/10 p-3 text-red-300">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={sending}
        className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-xl font-bold text-zinc-950 transition-colors hover:bg-accent-darker disabled:opacity-60"
      >
        {sending && <Loader2 className="animate-spin" />}
        {sending ? "Sending…" : "Send"}
      </button>
    </form>
  );
}

function Field({ label, className, children }: { label: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={cn("flex flex-col gap-1.5", className)}>
      <span className="text-sm font-semibold uppercase tracking-wide text-zinc-400">{label}</span>
      {children}
    </label>
  );
}
