export const metadata = {
  title: "Paint Correction & Ceramic Coating Gallery",
  description:
    "Explore results from our multi-stage paint correction and 3-year ceramic coating services. See real swirl removal, deep gloss, and hydrophobic water beading.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/gallery/correct" },
  openGraph: {
    type: "website",
    title: "Paint Correction & Ceramic Coating Gallery | Dirt-Less Detailing",
    description:
      "Explore results from our multi-stage paint correction and 3-year ceramic coating services. See real swirl removal, deep gloss, and hydrophobic water beading.",
    url: "https://www.dirtlessdetailing.com/gallery/correct",
    images: [
      {
        url: "/assets/images/correction/ceramicBeads1.jpg",
        width: 1200,
        height: 630,
        alt: "Hydrophobic water beading on a ceramic coated car"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Paint Correction & Ceramic Coating Gallery | Dirt-Less Detailing",
    description:
      "Explore results from our multi-stage paint correction and 3-year ceramic coating services. See real swirl removal, deep gloss, and hydrophobic water beading.",
    images: ["/assets/images/correction/ceramicBeads1.jpg"]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
