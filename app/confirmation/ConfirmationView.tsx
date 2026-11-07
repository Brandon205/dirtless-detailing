"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { topBtnVariant } from "../../utils/animationVariations";
import { House, PhoneCall } from "lucide-react";
import { CallLink } from "../components/CallTracking";
import type { BookingSummary } from "../../utils/crm";

const money = (cents: number) => `$${(cents / 100).toFixed(2)}`;

/** After booking. With `booking` (back from the deposit page), shows what was booked. */
export default function ConfirmationView({ booking }: { booking: BookingSummary | null }) {
  return (
    <div className="confirmation-container">
      <Image src="/assets/images/exterior/range-rover-right.jpg" priority alt="" fill sizes="100vw" className="object-cover opacity-25 z-[-5]" />
      <div className="confirmation-subcontainer">
        <h1 className="confirmation-title">Thank You for Booking With Us!</h1>
        {booking && (
          <div className="confirmation-message mx-auto mb-4 max-w-xl rounded-xl bg-zinc-800/90 p-5 text-left text-lg">
            <p className="text-2xl font-bold">
              {booking.day} at {booking.time}
            </p>
            <p>{booking.locationType === "mobile" ? "At your address" : "At our shop: Buckley Business Park, 28120 WA-410, Unit C6"}</p>
            <p className="text-zinc-300">{booking.services.join(", ")}</p>
            <p className="mt-2 text-zinc-300">
              Booking #{booking.number}
              {booking.depositCents > 0 &&
                (booking.depositPaid
                  ? ` · Deposit of ${money(booking.depositCents)} paid. Your receipt is on its way by email.`
                  : ` · We're confirming your ${money(booking.depositCents)} deposit with the bank.`)}
            </p>
          </div>
        )}
        <p className="confirmation-message text-xl tracking-wide leading-8">
          We will confirm your appointment soon! Expect a text from us the night before to confirm the date you selected still works! Feel free to give us a
          call or text if you have more questions.
        </p>
        <p className="confirmation-message">
          <span className="special-package">NOTE:</span> We have a 72 hour cancellation policy, get a full refund on your deposit if we're notified 3 days
          before your appointment.
        </p>
        <div className="header-link-container">
          <motion.a href="/" className="top-quote-btn" variants={topBtnVariant} whileHover="hover" transition={{ duration: 0.25 }}>
            <House color="#ffffff" className="mr-2" size={36} /> Return Home
          </motion.a>
          <CallLink as={motion.a} className="top-quote-btn btn-secondary" variants={topBtnVariant} whileHover="hover" transition={{ duration: 0.25 }}>
            <PhoneCall color="#ffffff" className="mr-2" size={36} />
            (253) 252-9758
          </CallLink>
        </div>
      </div>
    </div>
  );
}
