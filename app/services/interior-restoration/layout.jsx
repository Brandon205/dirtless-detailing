export const metadata = {
  title: "Interior Restoration",
  description:
    "Heavy-duty vehicle interior restoration in Buckley & Bonney Lake. Specialized cleaning for mold removal, smoke odor elimination, severe stains, and biohazards.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/interior-restoration" },
  openGraph: {
    type: "website",
    title: "Interior Restoration | Dirt-Less Detailing",
    description:
      "Heavy-duty vehicle interior restoration in Buckley & Bonney Lake. Specialized cleaning for mold removal, smoke odor elimination, severe stains, and biohazards.",
    url: "https://www.dirtlessdetailing.com/services/interior-restoration",
    images: [
      {
        url: "/assets/images/before&afters/badInteriorBA.png",
        width: 1200,
        height: 630,
        alt: "Before and after of a vehicle interior restoration"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Restoration | Dirt-Less Detailing",
    description:
      "Heavy-duty vehicle interior restoration in Buckley & Bonney Lake. Specialized cleaning for mold removal, smoke odor elimination, severe stains, and biohazards.",
    images: ["/assets/images/before&afters/badInteriorBA.png"]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
