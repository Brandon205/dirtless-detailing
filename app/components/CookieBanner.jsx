"use client";
import { useState, useEffect } from "react";

import posthog from "posthog-js";

const PH_OPT_KEY = "__ph_opt_in_out_phc_6zuVgx7MjpPq3Jlr4QEi2kLjG2LCDRufmT2PhYVfF9i";

function initPosthogIfNeeded() {
  try {
    // Avoid initializing multiple times
    if (typeof window === "undefined") return;
    // posthog.__loaded is set by posthog when init completes; guard on it
    if (posthog && posthog.__loaded) return;

    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
      loaded: (ph) => {
        if (process.env.NODE_ENV === "development") {
          ph.debug(false);
        }
      },
      capture_pageleave: false,
      capture_pageview: false // we'll capture pageview manually when appropriate
    });
  } catch (e) {
    // swallow errors to avoid breaking the UI
    // console.warn("PostHog init failed:", e);
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    function getLsData() {
      try {
        const lsCookies = localStorage.getItem(PH_OPT_KEY);
        if (lsCookies === "true") {
          // user previously accepted -> init and opt in
          initPosthogIfNeeded();
          // ensure capturing is enabled
          if (posthog && typeof posthog.opt_in_capturing === "function") posthog.opt_in_capturing();
          setShowBanner(false);
        } else if (lsCookies === "false") {
          // user previously declined -> ensure opt out and don't init
          if (posthog && typeof posthog.opt_out_capturing === "function") posthog.opt_out_capturing();
          setShowBanner(false);
        } else {
          // no preference yet -> show banner
          setShowBanner(true);
        }
      } catch (e) {
        setShowBanner(true);
      }
    }

    getLsData();
  }, []);

  function acceptCookies() {
    // initialize posthog and opt in
    initPosthogIfNeeded();
    if (posthog && typeof posthog.opt_in_capturing === "function") posthog.opt_in_capturing();
    try {
      localStorage.setItem(PH_OPT_KEY, "true");
    } catch (e) {}
    setShowBanner(false);
  }

  function declineCookies() {
    // ensure opt out (no init)
    if (posthog && typeof posthog.opt_out_capturing === "function") posthog.opt_out_capturing();
    try {
      localStorage.setItem(PH_OPT_KEY, "false");
    } catch (e) {}
    setShowBanner(false);
  }

  if (!showBanner) return null;
  return (
    <div
      role="region"
      aria-label="Cookie preferences"
      className="fixed inset-x-3 bottom-3 z-40 flex flex-col gap-3 rounded-2xl border border-line bg-surface/95 p-4 text-sm text-zinc-300 shadow-2xl backdrop-blur sm:inset-x-auto sm:left-4 sm:max-w-sm"
    >
      <p>We use cookies to analyze our site performance and make it better for everyone.</p>
      <div className="flex gap-2">
        <button type="button" onClick={acceptCookies} className="flex-1 rounded-lg bg-accent px-3 py-2 font-semibold text-on-accent transition-colors hover:bg-accent-hover">
          Accept
        </button>
        <button
          type="button"
          onClick={declineCookies}
          className="flex-1 rounded-lg border border-line-strong px-3 py-2 font-semibold text-ink transition-colors hover:border-zinc-500"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
