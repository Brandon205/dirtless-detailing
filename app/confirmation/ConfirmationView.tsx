import Image from "next/image";
import { CalendarCheck, Check } from "lucide-react";
import { CallLink } from "../components/CallTracking";
import { Button, buttonClasses } from "../components/ui/Button";
import { containerClass } from "../components/ui/Section";
import { cn } from "../../utils/cn";
import type { BookingSummary } from "../../utils/crm";

const money = (cents: number) => `$${(cents / 100).toFixed(2)}`;

/** After booking. With `booking` (back from the deposit page), shows what was booked. */
export default function ConfirmationView({ booking }: { booking: BookingSummary | null }) {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-page text-ink">
      <Image src="/assets/images/exterior/range-rover-right.jpg" priority alt="" fill sizes="100vw" className="-z-10 object-cover opacity-20" />
      <div className={cn(containerClass, "max-w-2xl pb-20 pt-32 text-center md:pt-40 2xl:max-w-2xl")}>
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent text-on-accent">
          <Check aria-hidden="true" className="size-8" />
        </span>
        <h1 className="mt-6 text-balance text-hero-sm font-extrabold md:text-hero">Thanks for booking with us!</h1>

        {booking && (
          <div className="mt-8 rounded-2xl border border-line bg-surface/95 p-6 text-left">
            <p className="flex items-center gap-3 text-2xl font-bold">
              <CalendarCheck aria-hidden="true" className="size-7 shrink-0 text-accent" />
              {booking.day} at {booking.time}
            </p>
            <p className="mt-3 text-lg">{booking.locationType === "mobile" ? "At your address" : "At our shop: Buckley Business Park, 28120 WA-410, Unit C6"}</p>
            <p className="mt-1 text-zinc-300">{booking.services.join(", ")}</p>
            <p className="mt-4 border-t border-line pt-4 text-sm text-muted">
              Booking #{booking.number}
              {booking.depositCents > 0 &&
                (booking.depositPaid
                  ? ` · Deposit of ${money(booking.depositCents)} paid. Your receipt is on its way by email.`
                  : ` · We're confirming your ${money(booking.depositCents)} deposit with the bank.`)}
            </p>
          </div>
        )}

        <p className="mt-8 text-lead text-zinc-200">
          We&apos;ll confirm your appointment soon, and you can expect a text from us the night before to make sure the date still works. Questions in the
          meantime? Give us a call or text.
        </p>
        <p className="mt-4 rounded-xl border border-line bg-page/70 p-4 text-zinc-300">
          <span className="font-bold text-accent">Note: </span>
          We have a 72 hour cancellation policy. Get a full refund on your deposit if you let us know at least 3 days before your appointment.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Back to home
          </Button>
          <CallLink className={buttonClasses({ variant: "secondary", size: "lg" })}>Call or text (253) 252-9758</CallLink>
        </div>
      </div>
    </section>
  );
}
