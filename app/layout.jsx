import React from "react";
import CookieBanner from "../components/CookieBanner";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import Nav from "./Nav";
import Footer from "./Footer";

export const metadata = {
  title: {
    default: "Dirt-Less Detailing",
    template: "%s | Dirt-Less Detailing",
  },
  description: "Bonney Lakes Auto Detailing & Ceramic Coating Specialists",
  alternates: { canonical: "https://www.dirtlessdetailing.com/" },
  twitter: {
    card: "summary_large_image",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
    // Enable debug mode in development
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") {
        posthog.debug();
      }
    },
    capture_pageleave: false,
    capture_pageview: true,
  });
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo192.png" />

        <Script id='google-tag-manager' strategy='afterInteractive'>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5L5ZZN88');
          `}
        </Script>
        <meta name="google-site-verification" content="sq8uUuD_CLtkO1bg33IWhAVFjproB_N6s2Qqll0IxUo" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&family=Oswald:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700;900&display=swap" rel="stylesheet" />

        <meta name="theme-color" content="#c83f03" />
      </Head> */}
      <PostHogProvider client={posthog}>
        <Nav />

        <body>{children}</body>

        <Footer />

        <CookieBanner />
      </PostHogProvider>
    </html>
  );
}
