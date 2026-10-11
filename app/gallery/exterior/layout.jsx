export const metadata = {
  title: "Exterior Decon Wash Gallery",
  description: "Before and after photos from our Exterior Decon Wash: deep-cleaned paint, wheels, door jambs, and engine bays on cars and trucks we've detailed.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/gallery/exterior" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/gallery/exterior",
    images: [
      {
        url: "/assets/images/exterior/sideofsilverram.jpg",
        alt: "A silver dodge ram truck parked on a driveway, showing off the shine from a wash and wax."
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
