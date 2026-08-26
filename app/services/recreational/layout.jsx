export const metadata = {
  title: "Boat, RV, Trailer & ORV Detailing",
  description:
    "Mobile and shop detailing for RVs, travel trailers, boats, and off-road vehicles (ORVs) across Pierce County and South King County, WA.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/recreational" },
  openGraph: {
    type: "website",
    title: "Boat, RV, Trailer & ORV Detailing | Dirt-Less Detailing",
    description:
      "Mobile and shop detailing for RVs, travel trailers, boats, and off-road vehicles (ORVs) across Pierce County and South King County, WA.",
    url: "https://www.dirtlessdetailing.com/services/recreational",
    images: [
      {
        url: "/assets/images/polish/rv-finished.jpg",
        width: 1200,
        height: 630,
        alt: "RV after wash and ceramic spray sealant"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Boat, RV, Trailer & ORV Detailing | Dirt-Less Detailing",
    description:
      "Mobile and shop detailing for RVs, travel trailers, boats, and off-road vehicles (ORVs) across Pierce County and South King County, WA.",
    images: ["/assets/images/polish/rv-finished.jpg"]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
