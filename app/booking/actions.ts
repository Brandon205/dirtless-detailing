"use server";

import { crmPost, siteOrigin, type AddressSuggestion, type DaySlots } from "../../utils/crm";

/** Open start times for each day of a month. */
export async function getAvailability(month: string, locationType: "shop" | "mobile", durationMin: number) {
  return crmPost<{ days: DaySlots }>("/availability", { month, locationType, durationMin: Math.round(durationMin) });
}

/** Address suggestions as the street is typed (mobile details). */
export async function suggestAddresses(q: string): Promise<AddressSuggestion[]> {
  if (q.trim().length < 4) return [];
  const r = await crmPost<{ suggestions: AddressSuggestion[] }>("/address-suggest", { q: q.slice(0, 200) });
  return r.ok ? r.data.suggestions : [];
}

export type BookingRequest = {
  turnstileToken: string;
  customer: { name: string; phone: string; email: string };
  vehicle: { kind: "car" | "rv" | "boat"; name: string; sizeClassId: string | null; lengthFt: number | null };
  serviceIds: string[];
  locationType: "shop" | "mobile";
  address: { line1: string; city: string; zip: string } | null;
  day: string;
  time: string;
  heardAbout: string;
  notes: string;
};

/** Sends the booking to the CRM; on success, the deposit page on Stripe to send them to. */
export async function submitBooking(b: BookingRequest) {
  return crmPost<{ url: string }>("/bookings", { ...b, returnOrigin: await siteOrigin() });
}

/** They came back from Stripe without paying: free the time they were holding. */
export async function releaseBooking(ref: string) {
  return crmPost<{ released: boolean }>("/bookings/cancel", { ref });
}
