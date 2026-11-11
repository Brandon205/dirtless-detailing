import type { Metadata } from "next";
import Link from "next/link";
import { CallLink } from "../components/CallTracking";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { crmCatalog } from "../../utils/crm";
import InquiryForm from "./InquiryForm";

export const metadata: Metadata = {
  title: "Ask a Question",
  description: "Questions about a detail, ceramic coating or pricing? Send us a message and we'll get back to you, usually the same day.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/inquiry" },
};

// Refresh the service list every five minutes.
export const revalidate = 300;

const linkClass = "font-semibold text-accent-hover hover:underline";

export default async function InquiryPage() {
  const catalog = await crmCatalog();
  // Main services only: add-ons would make the list long for a question form.
  const services = catalog?.services.filter((s) => !s.isAddon).map((s) => s.name) ?? [];
  return (
    <Section className="border-t-0 pt-32 md:pt-40" containerClassName="max-w-3xl 2xl:max-w-3xl">
      <SectionHeader
        as="h1"
        eyebrow="Send an inquiry"
        title="Ask us anything"
        className="mb-8"
        lead={
          <>
            In-shop services, pricing quotes or general questions. Rather talk? <CallLink className={linkClass}>Call or text (253) 252-9758</CallLink>. Ready
            to go?{" "}
            <Link href="/booking" className={linkClass}>
              Book online
            </Link>
            .
          </>
        }
      />
      <InquiryForm services={[...new Set(services)]} />
    </Section>
  );
}
