import { Inter } from "next/font/google";
import "./App.scss";
import { PHProvider } from "./providers";
import Nav from "./Nav";
import Footer from "./Footer";
import CookieBanner from "./components/CookieBanner";
import PostHogPageView from "./PostHogPageView";
import { Suspense } from "react";
// import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.dirtlessdetailing.com"),
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

// const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
//   ssr: false,
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PHProvider>
        <Suspense>
          <PostHogPageView />
        </Suspense>
        <body className={inter.className}>
          <Nav />
          {children}
          <Footer />
          <CookieBanner />
        </body>
      </PHProvider>
    </html>
  );
}
