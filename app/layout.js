import "./App.scss";
import { PHProvider } from "./providers";
import Nav from "./Nav";
import Footer from "./Footer";
import CookieBanner from "./components/CookieBanner";
import PostHogPageView from "./PostHogPageView";
import { Suspense } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import { Titillium_Web, Montserrat } from "next/font/google";
import { MetaPixel } from "./components/MetaPixel";

const titillium = Titillium_Web({ weight: ["400", "600", "700"], subsets: ["latin"], variable: "--font-titillium-web" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata = {
  metadataBase: new URL("https://www.dirtlessdetailing.com"),
  title: {
    default: "Dirt-Less Detailing | Official Site",
    template: "%s | Dirt-Less Detailing"
  },
  description: "Bonney Lake and Pierce County's Auto Detailing & Ceramic Coating Specialists. Book with us today to make your car look like new!",
  alternates: { canonical: "https://www.dirtlessdetailing.com/" },
  twitter: {
    card: "summary_large_image"
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/"
  },
  verification: {
    google: "sq8uUuD_CLtkO1bg33IWhAVFjproB_N6s2Qqll0IxUo"
  },
  keywords: [
    "Dirt-Less Detailing",
    "Auto Detailing",
    "Ceramic Coating",
    "Bonney Lake",
    "Pierce County",
    "Paint Correction",
    "Mobile Detailing",
    "Interior Detailing"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${titillium.variable} ${montserrat.variable}`}>
      <GoogleTagManager gtmId="GTM-5L5ZZN88" />
      <GoogleTagManager gtmId="AW-11020140573" />
      <PHProvider>
        <Suspense>
          <PostHogPageView />
          <MetaPixel />
        </Suspense>
        <body>
          <Nav />
          {children}
          <Footer />
          <CookieBanner />
        </body>
      </PHProvider>
    </html>
  );
}
