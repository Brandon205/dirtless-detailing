export const metadata = {
  title: "Exterior Correct & Coat",
  description:
    "Multi-stage paint correction and 3-year ceramic coating in Buckley & Bonney Lake, WA. Removes 70-95% of swirls and scratches for a flawless mirror finish.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/correct" },
  openGraph: {
    type: "website",
    title: "Exterior Correct & Coat | Dirt-Less Detailing",
    description:
      "Multi-stage paint correction and 3-year ceramic coating in Buckley & Bonney Lake, WA. Removes 70-95% of swirls and scratches for a flawless mirror finish.",
    url: "https://www.dirtlessdetailing.com/services/correct",
    images: [
      {
        url: "/assets/images/correction/genesis2.jpeg",
        width: 1200,
        height: 630,
        alt: "Genesis after our Correct & Coat paint correction and ceramic coating"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Exterior Correct & Coat | Dirt-Less Detailing",
    description:
      "Multi-stage paint correction and 3-year ceramic coating in Buckley & Bonney Lake, WA. Removes 70-95% of swirls and scratches for a flawless mirror finish.",
    images: ["/assets/images/correction/genesis2.jpeg"]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
