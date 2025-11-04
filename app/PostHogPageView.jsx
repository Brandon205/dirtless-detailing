"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { usePostHog } from "posthog-js/react";

export default function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();
  // Track pageviews
  useEffect(() => {
    // Only capture pageviews if posthog has been initialized/loaded. The
    // posthog instance is provided via context even when not initialized, so
    // checking for posthog.__loaded prevents capturing before consent/init.
    if (pathname && posthog && posthog.__loaded) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      posthog.capture("$pageview", {
        $current_url: url
      });
    }
  }, [pathname, searchParams, posthog]);

  return null;
}
