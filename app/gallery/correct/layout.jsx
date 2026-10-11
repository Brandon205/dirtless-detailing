export const metadata = {
  title: "Paint Correction & Ceramic Coating Gallery",
  description:
    "Explore results from our multi-stage paint correction and 3-year ceramic coating services. See real swirl removal, deep gloss, and hydrophobic water beading.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/gallery/correct" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/gallery/correct",
    images: [{ url: "/assets/images/correction/ceramicBeads1.jpg", alt: "Hydrophobic water beading on a ceramic coated car" }]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
