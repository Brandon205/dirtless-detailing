export const metadata = {
  title: "Contact Us & Free Quote",
  description:
    "Get in touch with Dirt-Less Detailing for a free auto detailing quote or book online 24/7. Mobile and shop services available in Buckley, Bonney Lake, and Pierce County.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/contact" },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    title: "Contact Dirt-Less Detailing | Free Auto Detailing Quote",
    description:
      "Get in touch with Dirt-Less Detailing for a free auto detailing quote or book online 24/7. Mobile and shop services available in Buckley, Bonney Lake, and Pierce County.",
    url: "https://www.dirtlessdetailing.com/contact",
    images: [
      {
        url: "/assets/images/showcase/homepage-main.webp",
        width: 1200,
        height: 630,
        alt: "Dirt-Less Detailing - Buckley, WA auto detailing shop"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us & Free Quote | Dirt-Less Detailing",
    description:
      "Get in touch with Dirt-Less Detailing for a free auto detailing quote or book online 24/7. Mobile and shop services available in Buckley, Bonney Lake, and Pierce County.",
    images: ["/assets/images/showcase/homepage-main.webp"]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
