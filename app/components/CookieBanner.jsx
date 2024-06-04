"use client";
import { useState, useEffect } from "react";

import posthog from "posthog-js";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    async function getLsData() {
      let lsCookies = await localStorage.getItem("__ph_opt_in_out_phc_6zuVgx7MjpPq3Jlr4QEi2kLjG2LCDRufmT2PhYVfF9i");
      if (lsCookies !== null) {
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }
    }

    getLsData();
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
