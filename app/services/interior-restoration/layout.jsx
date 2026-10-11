export const metadata = {
  title: "Interior Restoration in Buckley & Bonney Lake",
  description:
    "Heavy-duty vehicle interior restoration in Buckley & Bonney Lake. Specialized cleaning for mold removal, smoke odor elimination, severe stains, and biohazards.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/interior-restoration" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/interior-restoration",
    images: [{ url: "/assets/images/before&afters/badInteriorBA.png", alt: "Before and after of a vehicle interior restoration" }]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
