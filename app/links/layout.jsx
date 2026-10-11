export const metadata = {
  title: "Quick Links & Resources",
  description:
    "All official Dirt-Less Detailing links in one place: online booking, recommended car care products, YouTube videos, maintenance guides, and social media channels.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/links" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/links",
    images: [{ url: "/assets/images/interior/driverTesla.jpg", alt: "Dirt-Less Detailing quick links and detailing resources" }]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
