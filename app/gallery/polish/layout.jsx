export const metadata = {
  title: "Exterior Polish & Coat Gallery",
  description: "See before-and-after photos and finished gloss from our Exterior Polish & Coat enhancement polishing service.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/gallery/polish" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/gallery/polish",
    images: [{ url: "/assets/images/polish/36 plymouth.jpg", alt: "A beautiful red 1936 Plymouth after our Polish & Coat Service" }]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
