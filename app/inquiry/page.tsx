import type { Metadata } from "next";
import { CallLink } from "../components/CallTracking";
import { crmCatalog } from "../../utils/crm";
import InquiryForm from "./InquiryForm";

export const metadata: Metadata = {
  title: "Ask a Question",
  description: "Questions about a detail, ceramic coating or pricing? Send us a message and we'll get back to you, usually the same day.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/inquiry" },
};

// Refresh the service list every five minutes.
export const revalidate = 300;

export default async function InquiryPage() {
  const catalog = await crmCatalog();
  // Main services only: add-ons would make the list long for a question form.
  const services = catalog?.services.filter((s) => !s.isAddon).map((s) => s.name) ?? [];
  return (
    <section className="mx-auto w-full max-w-2xl px-4 pt-32 pb-16 text-white lg:pt-44">
      <h1 className="font-heading text-center text-4xl font-bold">Ask Us Anything</h1>
      <p className="mt-2 mb-8 text-center text-lg text-gray-300">
        In-shop services, pricing quotes or general questions. Rather talk? <CallLink className="text-primary underline">Call or text (253) 252-9758</CallLink>.
      </p>
      <InquiryForm services={[...new Set(services)]} />
    </section>
  );
}
