export const metadata = {
  title: "Full Interior Detailing Gallery",
  description:
    "Browse before-and-after photos of our deep interior detailing, stain extraction, pet hair removal, and leather conditioning results.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/gallery/interior" },
  openGraph: {
    type: "website",
    title: "Full Interior Detailing Gallery | Dirt-Less Detailing",
    description:
      "Browse before-and-after photos of our deep interior detailing, stain extraction, pet hair removal, and leather conditioning results.",
    url: "https://www.dirtlessdetailing.com/gallery/interior",
    images: [
      {
        url: "/assets/images/interior/driverNewLexus.jpg",
        width: 1200,
        height: 630,
        alt: "Driver side interior of a Lexus detailed by Dirt-Less Detailing"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Interior Detailing Gallery | Dirt-Less Detailing",
    description:
      "Browse before-and-after photos of our deep interior detailing, stain extraction, pet hair removal, and leather conditioning results.",
    images: ["/assets/images/interior/driverNewLexus.jpg"]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
