"use client";
import { useEffect, useSyncExternalStore } from "react";

// Google Ads "Calls from website" conversion. Paste the label from Google Ads
// (the part after the slash in AW-11020140573/XXXXXXX). Leave empty to disable.
const ADS_ID = "AW-11020140573";
const CALL_CONVERSION_LABEL = "";

// Must match the number entered in the Google Ads conversion action.
export const REAL_PHONE_DISPLAY = "(253) 252-9758";
const REAL_PHONE_TEL = "tel:+12532529758";

// Shared store so every CallLink updates when Google hands us a forwarding number.
let callHref = REAL_PHONE_TEL;
const listeners = new Set();

function setCallHref(href) {
  callHref = href;
  listeners.forEach((listener) => listener());
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// Mounted once in the root layout. Uses the callback option instead of letting
// Google rewrite the DOM, so React stays in control and the displayed number
// (which people may copy to text) is always the real one.
export function CallTracking() {
  useEffect(() => {
    if (!CALL_CONVERSION_LABEL) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer.push(arguments);
      };
    window.gtag("config", `${ADS_ID}/${CALL_CONVERSION_LABEL}`, {
      phone_conversion_number: REAL_PHONE_DISPLAY,
      phone_conversion_callback: (formattedNumber, mobileNumber) => {
        const digits = (mobileNumber || formattedNumber || "").replace(/[^\d+]/g, "");
        if (digits) setCallHref(`tel:${digits}`);
      }
    });
  }, []);

  return null;
}

// Drop-in replacement for <a href="tel:..."> — pass `as={motion.a}` for animated buttons.
// Only the href changes to the forwarding number; the children (displayed number) don't.
/** @param {{ as?: import("react").ElementType, children?: import("react").ReactNode, [key: string]: any }} props */
export function CallLink({ as: Component = "a", children, ...props }) {
  const href = useSyncExternalStore(subscribe, () => callHref, () => REAL_PHONE_TEL);
  return (
    <Component {...props} href={href}>
      {children}
    </Component>
  );
}
