"use server";

import { crmPost } from "../../utils/crm";

export type InquiryRequest = {
  turnstileToken: string;
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  services: string[];
  message: string;
};

/** Sends a question to the CRM's Inbox. */
export async function submitInquiry(q: InquiryRequest) {
  return crmPost<{ ok: true }>("/inquiries", q);
}
