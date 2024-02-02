import { Montserrat } from "next/font/google";
import "./App.scss";
import { PHProvider } from "./providers";
import Nav from "./Nav";
import Footer from "./Footer";
import CookieBanner from "./components/CookieBanner";
import PostHogPageView from "./PostHogPageView";
import { Suspense } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.dirtlessdetailing.com"),
  title: {
    default: "Dirt-Less Detailing | Official Site",
    template: "%s | Dirt-Less Detailing",
  },
  description: "Bonney Lakes Auto Detailing & Ceramic Coating Specialists",
  alternates: { canonical: "https://www.dirtlessdetailing.com/" },
  twitter: {
    card: "summary_large_image",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="sq8uUuD_CLtkO1bg33IWhAVFjproB_N6s2Qqll0IxUo" />
      </Head>
      <PHProvider>
        <Suspense>
          <PostHogPageView />
        </Suspense>
        <body className={montserrat.className}>
          <Nav />
          {children}
          <Footer />
          <CookieBanner />
        </body>
        <GoogleTagManager gtmId="GTM-5L5ZZN88" />
      </PHProvider>
    </html>
  );
}
