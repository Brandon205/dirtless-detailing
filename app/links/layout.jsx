export const metadata = {
  title: "Quick Links & Resources",
  description:
    "All official Dirt-Less Detailing links in one place: online booking, recommended car care products, YouTube videos, maintenance guides, and social media channels.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/links" },
  openGraph: {
    type: "website",
    title: "Quick Links & Resources | Dirt-Less Detailing",
    description:
      "All official Dirt-Less Detailing links in one place: online booking, recommended car care products, YouTube videos, maintenance guides, and social media channels.",
    url: "https://www.dirtlessdetailing.com/links",
    images: [
      {
        url: "/assets/images/interior/driverTesla.jpg",
        width: 1200,
        height: 630,
        alt: "Dirt-Less Detailing quick links and detailing resources"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Quick Links & Resources | Dirt-Less Detailing",
    description:
      "All official Dirt-Less Detailing links in one place: online booking, recommended car care products, YouTube videos, maintenance guides, and social media channels.",
    images: ["/assets/images/interior/driverTesla.jpg"]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
