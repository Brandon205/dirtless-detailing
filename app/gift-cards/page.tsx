import type { Metadata } from "next";
import { CallLink } from "../components/CallTracking";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { crmCatalog } from "../../utils/crm";
import GiftCardForm from "./GiftCardForm";

export const metadata: Metadata = {
  title: "Gift Cards",
  description: "Give a detail: Dirt-Less Detailing gift cards for any amount or a specific service, emailed instantly with a code and QR code.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/gift-cards" },
};

// Refresh services and prices every five minutes.
export const revalidate = 300;

export default async function GiftCardsPage() {
  const catalog = await crmCatalog();
  return (
    <Section className="pt-32 md:pt-40" containerClassName="max-w-3xl 2xl:max-w-3xl">
      <SectionHeader
        as="h1"
        eyebrow="Gift cards"
        title="Give a detail"
        lead="A dollar amount for anything we do, or a specific detail covered in full. Emailed right away with a code and a QR code."
      />
      {catalog ? (
        <GiftCardForm catalog={catalog} />
      ) : (
        <p className="rounded-xl border border-line bg-surface p-6 text-lg text-ink">
          Online gift cards are down for a moment. Please <CallLink className="text-accent underline">call or text (253) 252-9758</CallLink> and we&apos;ll set one up.
        </p>
      )}
    </Section>
  );
}
