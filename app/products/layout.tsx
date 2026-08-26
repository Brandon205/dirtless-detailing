export const metadata = {
  title: "Recommended Products & Car Care Supplies",
  description:
    "Recommended auto detailing products, ceramic coating maintenance supplies, and wash equipment curated and tested by Dirt-Less Detailing.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/products" },
  openGraph: {
    type: "website",
    title: "Recommended Products & Car Care Supplies | Dirt-Less Detailing",
    description:
      "Recommended auto detailing products, ceramic coating maintenance supplies, and wash equipment curated and tested by Dirt-Less Detailing.",
    url: "https://www.dirtlessdetailing.com/products",
    images: [
      {
        url: "/assets/images/showcase/worktruckGriots.jpg",
        width: 1200,
        height: 630,
        alt: "Our work truck in front of Griot's Garage store"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Recommended Products & Car Care Supplies | Dirt-Less Detailing",
    description:
      "Recommended auto detailing products, ceramic coating maintenance supplies, and wash equipment curated and tested by Dirt-Less Detailing.",
    images: ["/assets/images/showcase/worktruckGriots.jpg"]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
