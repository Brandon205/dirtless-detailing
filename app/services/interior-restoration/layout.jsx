export const metadata = {
  title: "Interior Restoration",
  description:
    "For neglected interiors beyond a standard detail. We tackle heavy odors, mold, pet hair, and extreme grime to bring your vehicle back to clean.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/interior-restoration" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/interior-restoration",
    images: [
      {
        url: "/assets/images/before&afters/badInteriorBA.png",
        alt: "Before and after of a vehicle's interior restoration"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
