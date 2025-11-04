"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

// Do NOT initialize PostHog here. Initialization will happen only after the user
// explicitly accepts cookies (see CookieBanner). We still provide the posthog
// instance to the React provider so hooks like usePostHog return the client, but
// the client will not be initialized until consent is given.
export function PHProvider({ children }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
