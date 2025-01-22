export const metadata = {
  title: "Full Interior Gallery",
  description:
    "Our Full Interior Gallery shows off some of our hard work cleaning vehicle interiors. We've cleaned everything from spilled drinks to crumbs everywhere!",
  alternates: { canonical: "https://www.dirtlessdetailing.com/gallery/interior" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/gallery/interior",
    image: "/assets/images/interior/driverNewLexus.jpg"
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
