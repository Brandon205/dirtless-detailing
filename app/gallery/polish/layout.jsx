export const metadata = {
  title: "Exterior Polish & Coat Gallery",
  description:
    "See before-and-after photos and finished gloss from our Exterior Polish & Coat enhancement polishing service.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/gallery/polish" },
  openGraph: {
    type: "website",
    title: "Exterior Polish & Coat Gallery | Dirt-Less Detailing",
    description:
      "See before-and-after photos and finished gloss from our Exterior Polish & Coat enhancement polishing service.",
    url: "https://www.dirtlessdetailing.com/gallery/polish",
    images: [
      {
        url: "/assets/images/polish/36 plymouth.jpg",
        width: 1200,
        height: 630,
        alt: "A beautiful red 1936 Plymouth after our Polish & Coat Service"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Exterior Polish & Coat Gallery | Dirt-Less Detailing",
    description:
      "See before-and-after photos and finished gloss from our Exterior Polish & Coat enhancement polishing service.",
    images: ["/assets/images/polish/36 plymouth.jpg"]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
