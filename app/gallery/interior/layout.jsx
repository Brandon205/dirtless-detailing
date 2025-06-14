export const metadata = {
  title: "Full Interior Gallery",
  description:
    "Our Full Interior Gallery shows off some of our hard work cleaning vehicle interiors. We've cleaned everything from spilled drinks to crumbs everywhere!",
  alternates: { canonical: "https://www.dirtlessdetailing.com/gallery/interior" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/gallery/interior",
    images: [
      {
        url: "/assets/images/interior/driverNewLexus.jpg",
        width: 1200,
        height: 630,
        alt: "The drivers side interior of a new Lexus."
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
