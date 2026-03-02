export const metadata = {
  title: "Interior Restoration",
  description:
    "Our Interior Restoration service is a service designed for vehicles that have been neglected beyond what our Full Interior Detail can handle. If your interior has heavy odors, mold, or is extremely dirty, and you need it back to acceptable, this is the service for you.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/interior-restoration" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/interior-restoration",
    images: [
      {
        url: "/assets/images/before&afters/badInteriorBA.png",
        width: 1200,
        height: 630,
        alt: "Before and after of a vehicle's interior restoration"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
