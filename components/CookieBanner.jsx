"use client";
import { useState, useEffect } from "react";

import posthog from "posthog-js";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false); //TODO CHANGE THIS BACK TO TRUE

  useEffect(() => {
    if (posthog.has_opted_in_capturing()) {
      setShowBanner(false);
    }
  }, []);

  function acceptCookies() {
    posthog.opt_in_capturing();
    setShowBanner(false);
  }

  function declineCookies() {
    posthog.opt_out_capturing();
    setShowBanner(false);
  }

  return (
    <div>
      {showBanner && (
        <div className="cookie-container">
          <p>We use cookies to analyze our site performance and make it better for everyone!</p>
          <button className="cookie-button" onClick={() => acceptCookies()}>
            Accept Cookies
          </button>
          <button className="cookie-button" onClick={() => declineCookies()}>
            Decline Cookies
          </button>
        </div>
      )}
    </div>
  );
}
