import type { Metadata } from "next";
import { CallLink } from "../components/CallTracking";
import { crmCatalog } from "../../utils/crm";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title: "Book Online",
  description: "Book your auto detail online 24/7: pick your services, see real prices and open times, and hold your spot with a small deposit.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/booking" },
};

export default async function BookingPage({ searchParams }: { searchParams: Promise<{ canceled?: string }> }) {
  const [catalog, { canceled }] = await Promise.all([crmCatalog(), searchParams]);
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pt-32 pb-16 text-white lg:pt-44">
      <h1 className="font-heading text-center text-4xl font-bold">Book Your Detail</h1>
      <p className="mt-2 mb-8 text-center text-lg text-gray-300">
        Pick your vehicle and services, choose an open time, and hold it with a small deposit. Questions first?{" "}
        <a href="/inquiry" className="text-primary underline">
          Ask us here
        </a>{" "}
        or <CallLink className="text-primary underline">call or text (253) 252-9758</CallLink>.
      </p>
      {catalog ? (
        <BookingForm catalog={catalog} canceledRef={canceled ?? null} />
      ) : (
        <p className="rounded-xl bg-zinc-800 p-6 text-center text-lg">
          Online booking is down for a moment. Please <CallLink className="text-primary underline">call or text (253) 252-9758</CallLink> and we&apos;ll get you scheduled.
        </p>
      )}
    </div>
  );
}
