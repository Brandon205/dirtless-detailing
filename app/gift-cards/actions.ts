"use server";

import { crmPost, siteOrigin } from "../../utils/crm";

export type GiftCardRequest = {
  turnstileToken: string;
  kind: "amount" | "service";
  amountCents?: number;
  serviceId?: string;
  sizeClassId?: string | null;
  buyer: { name: string; email: string; phone: string };
  recipient: { name: string; email: string };
  message: string;
};

/** Sends the order to the CRM; on success, Stripe's payment page to send them to. */
export async function buyGiftCard(g: GiftCardRequest) {
  return crmPost<{ url: string }>("/gift-cards", { ...g, returnOrigin: await siteOrigin() });
}
