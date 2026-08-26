export const metadata = {
  title: "Exterior Decon Wash Gallery",
  description:
    "View before-and-after photos and finished results from our Exterior Decon Wash details across Buckley, Bonney Lake, and Pierce County.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/gallery/exterior" },
  openGraph: {
    type: "website",
    title: "Exterior Decon Wash Gallery | Dirt-Less Detailing",
    description:
      "View before-and-after photos and finished results from our Exterior Decon Wash details across Buckley, Bonney Lake, and Pierce County.",
    url: "https://www.dirtlessdetailing.com/gallery/exterior",
    images: [
      {
        url: "/assets/images/exterior/sideofsilverram.jpg",
        width: 1200,
        height: 630,
        alt: "Silver Dodge Ram showing clean finish after Exterior Decon Wash"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Exterior Decon Wash Gallery | Dirt-Less Detailing",
    description:
      "View before-and-after photos and finished results from our Exterior Decon Wash details across Buckley, Bonney Lake, and Pierce County.",
    images: ["/assets/images/exterior/sideofsilverram.jpg"]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
