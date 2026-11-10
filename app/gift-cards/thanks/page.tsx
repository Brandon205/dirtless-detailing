import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Section } from "../../components/ui/Section";
import { crmPost } from "../../../utils/crm";

export const metadata: Metadata = { title: "Thank you", robots: { index: false, follow: false } };

type Summary = { title: string; valueCents: number; paid: boolean; recipientName: string | null; sentTo: string | null };

/** Stripe sends buyers here: the CRM activates the card (if the webhook hasn't yet) and says where it went. */
export default async function GiftCardThanks({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id } = await searchParams;
  const r = session_id ? await crmPost<Summary>("/gift-cards/confirm", { sessionId: session_id }) : null;
  const s = r?.ok ? r.data : null;
  return (
    <Section className="pt-32 md:pt-40" containerClassName="max-w-2xl 2xl:max-w-2xl">
      <div className="flex flex-col items-center gap-4 rounded-xl border border-line bg-surface p-8 text-center">
        <CheckCircle2 className="size-14 text-accent" aria-hidden />
        <h1 className="text-title-sm font-bold text-ink md:text-title">Thank you!</h1>
        {s ? (
          <p className="text-lg text-ink">
            Your {s.title}
            {s.recipientName ? ` for ${s.recipientName}` : ""} is{" "}
            {s.paid ? (s.sentTo ? `on its way to ${s.sentTo}.` : "ready. We'll email it shortly.") : "being confirmed with the bank. It's emailed as soon as it clears."}
          </p>
        ) : (
          <p className="text-lg text-ink">Your gift card is on its way by email. If it doesn&apos;t arrive in a few minutes, check spam or give us a call.</p>
        )}
        <p className="text-muted">A receipt from Stripe is in your inbox too.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/gift-cards" variant="secondary">
            Buy another
          </Button>
        </div>
      </div>
    </Section>
  );
}
