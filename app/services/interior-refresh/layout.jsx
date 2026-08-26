export const metadata = {
  title: "Interior Refresh Service",
  description:
    "Maintenance-focused interior car detailing in Buckley and Pierce County. Thorough dusting, vacuuming, wipe-down, and conditioning for vehicles in good condition.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/interior-refresh" },
  openGraph: {
    type: "website",
    title: "Interior Refresh Service | Dirt-Less Detailing",
    description:
      "Maintenance-focused interior car detailing in Buckley and Pierce County. Thorough dusting, vacuuming, wipe-down, and conditioning for vehicles in good condition.",
    url: "https://www.dirtlessdetailing.com/services/interior-refresh",
    images: [
      {
        url: "/assets/images/interior/driver15.jpg",
        width: 1200,
        height: 630,
        alt: "Driver side interior of a car after our Interior Refresh service"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Refresh Service | Dirt-Less Detailing",
    description:
      "Maintenance-focused interior car detailing in Buckley and Pierce County. Thorough dusting, vacuuming, wipe-down, and conditioning for vehicles in good condition.",
    images: ["/assets/images/interior/driver15.jpg"]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
