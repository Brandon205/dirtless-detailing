export const metadata = {
  title: "Exterior Decon Wash Gallery",
  description:
    "View before-and-after photos and finished results from our Exterior Decon Wash details across Buckley, Bonney Lake, and Pierce County.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/gallery/exterior" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/gallery/exterior",
    images: [{ url: "/assets/images/exterior/sideofsilverram.jpg", alt: "Silver Dodge Ram showing clean finish after Exterior Decon Wash" }]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
