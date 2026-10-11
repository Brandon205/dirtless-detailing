export const metadata = {
  title: "Boat, RV, Trailer & ORV Detailing in Buckley & Bonney Lake",
  description:
    "Mobile and shop detailing for RVs, travel trailers, boats, and off-road vehicles (ORVs) across Pierce County and South King County, WA.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/recreational" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/recreational",
    images: [{ url: "/assets/images/polish/rv-finished.jpg", alt: "RV after wash and ceramic spray sealant" }]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
