"use client";

import { useEffect, useRef } from "react";

// Cloudflare Turnstile, the "not a robot" check on the booking and inquiry forms. Usually it
// passes on its own; it only asks the visitor to click when something looks off.

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      remove: (id: string) => void;
      reset: (id: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

const SCRIPT = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad";
const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

let loading: Promise<void> | null = null;
function loadScript() {
  if (window.turnstile) return Promise.resolve();
  loading ??= new Promise<void>((resolve) => {
    window.onTurnstileLoad = () => resolve();
    const s = document.createElement("script");
    s.src = SCRIPT;
    s.async = true;
    s.defer = true;
    document.head.appendChild(s);
  });
  return loading;
}

/** Calls onToken with a fresh token, or "" when it expires. Change `resetKey` to ask for a new one. */
export function Turnstile({ onToken, resetKey = 0 }: { onToken: (token: string) => void; resetKey?: number }) {
  const el = useRef<HTMLDivElement>(null);
  const cb = useRef(onToken);
  useEffect(() => {
    cb.current = onToken;
  }, [onToken]);

  useEffect(() => {
    if (!SITE_KEY) return;
    let id: string | null = null;
    let gone = false;
    loadScript().then(() => {
      if (gone || !el.current || !window.turnstile) return;
      id = window.turnstile.render(el.current, {
        sitekey: SITE_KEY,
        theme: "dark",
        callback: (t: string) => cb.current(t),
        "expired-callback": () => cb.current(""),
        "error-callback": () => cb.current(""),
      });
    });
    return () => {
      gone = true;
      if (id && window.turnstile) window.turnstile.remove(id);
      cb.current("");
    };
  }, [resetKey]);

  if (!SITE_KEY) return <p className="text-sm text-red-400">The security check isn't set up yet (NEXT_PUBLIC_TURNSTILE_SITE_KEY).</p>;
  return <div ref={el} className="min-h-[65px]" />;
}
