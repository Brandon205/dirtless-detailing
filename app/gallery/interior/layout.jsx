export const metadata = {
  title: "Full Interior Detailing Gallery",
  description:
    "Browse before-and-after photos of our deep interior detailing, stain extraction, pet hair removal, and leather conditioning results.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/gallery/interior" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/gallery/interior",
    images: [{ url: "/assets/images/interior/driverNewLexus.jpg", alt: "Driver side interior of a Lexus detailed by Dirt-Less Detailing" }]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
