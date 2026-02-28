export const metadata = {
  title: "Interior Refresh Service",
  description:
    "Our Interior Refresh service is designed for those who have had our interior service within the past year, or for cars that don't need our Full Interior service. We'll give it a quick refresh to get it back to that like-new feel.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/interior-refresh" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/interior-refresh",
    images: [
      {
        url: "/assets/images/interior/driver15.jpg",
        width: 1200,
        height: 630,
        alt: "Driver side interior of a car after an interior refresh service"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
