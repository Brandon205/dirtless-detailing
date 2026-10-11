export const metadata = {
  title: "Recommended Products & Car Care Supplies",
  description:
    "Recommended auto detailing products, ceramic coating maintenance supplies, and wash equipment curated and tested by Dirt-Less Detailing.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/products" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/products",
    images: [{ url: "/assets/images/showcase/worktruckGriots.jpg", alt: "Our work truck in front of Griot's Garage store" }]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
