export const metadata = {
  title: "Contact Us & Book Online",
  description:
    "Get a free auto detailing quote or book online 24/7. Mobile and shop detailing in Buckley, Bonney Lake, and Pierce County.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/contact" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/contact",
    images: [{ url: "/assets/images/showcase/homepage-main.webp", alt: "The Dirt-Less Detailing team in front of a classic Chevy truck" }]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
