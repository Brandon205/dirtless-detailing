import type { Metadata } from "next";
import Link from "next/link";
import { Gift } from "lucide-react";
import { CallLink } from "../components/CallTracking";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { crmCatalog } from "../../utils/crm";
import BookingForm from "./BookingForm";
import { preselectFromParams } from "./preselect";

export const metadata: Metadata = {
  title: "Book Online",
  description: "Book your auto detail online 24/7: pick your services, see real prices and open times, and hold your spot with a small deposit.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/booking" },
};

type Params = { canceled?: string; service?: string; size?: string; addons?: string };

const linkClass = "font-semibold text-accent-hover hover:underline";

export default async function BookingPage({ searchParams }: { searchParams: Promise<Params> }) {
  const [catalog, params] = await Promise.all([crmCatalog(), searchParams]);
  return (
    <Section className="border-t-0 pt-32 md:pt-40" containerClassName="max-w-3xl 2xl:max-w-3xl">
      <SectionHeader
        as="h1"
        eyebrow="Book online"
        title="Book your detail"
        className="mb-6"
        lead={
          <>
            Pick your vehicle and services, choose an open time, and hold it with a small deposit. Questions first?{" "}
            <Link href="/inquiry" className={linkClass}>
              Send us an inquiry
            </Link>{" "}
            or <CallLink className={linkClass}>call or text (253) 252-9758</CallLink>.
          </>
        }
      />
      <p className="mb-8 flex items-center gap-2 text-muted">
        <Gift aria-hidden="true" className="size-5 shrink-0 text-accent" />
        <span>
          Buying for someone else?{" "}
          <Link href="/gift-cards" className={linkClass}>
            Get a gift card
          </Link>
        </span>
      </p>
      {catalog ? (
        <BookingForm catalog={catalog} canceledRef={params.canceled ?? null} preselect={preselectFromParams(catalog, params)} />
      ) : (
        <p className="rounded-2xl border border-line bg-surface p-6 text-center text-lg">
          Online booking is down for a moment. Please <CallLink className={linkClass}>call or text (253) 252-9758</CallLink> and we&apos;ll get you scheduled.
        </p>
      )}
    </Section>
  );
}
