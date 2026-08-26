export const metadata = {
  title: "Exterior Polish & Coat",
  description:
    "Single-stage paint enhancement polishing and 3-year ceramic coating in Pierce County. Removes light swirls, restores paint depth, and delivers durable protection.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/polish" },
  openGraph: {
    type: "website",
    title: "Exterior Polish & Coat | Dirt-Less Detailing",
    description:
      "Single-stage paint enhancement polishing and 3-year ceramic coating in Pierce County. Removes light swirls, restores paint depth, and delivers durable protection.",
    url: "https://www.dirtlessdetailing.com/services/polish",
    images: [
      {
        url: "/assets/images/correction/teslaclean.jpg",
        width: 1200,
        height: 630,
        alt: "Tesla Model 3 after our Polish & Coat service"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Exterior Polish & Coat | Dirt-Less Detailing",
    description:
      "Single-stage paint enhancement polishing and 3-year ceramic coating in Pierce County. Removes light swirls, restores paint depth, and delivers durable protection.",
    images: ["/assets/images/correction/teslaclean.jpg"]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
