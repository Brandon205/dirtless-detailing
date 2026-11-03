import { crmPost, type BookingSummary } from "../../utils/crm";
import ConfirmationView from "./ConfirmationView";

/** Stripe sends customers here after the deposit (?session_id=), recording it and showing what was booked. */
export default async function ConfirmationPage({ searchParams }: { searchParams: Promise<{ session_id?: string; booking?: string }> }) {
  const { session_id, booking } = await searchParams;
  const summary =
    session_id || booking
      ? await crmPost<BookingSummary>("/bookings/confirm", session_id ? { sessionId: session_id } : { ref: booking })
      : null;
  return <ConfirmationView booking={summary?.ok ? summary.data : null} />;
}
