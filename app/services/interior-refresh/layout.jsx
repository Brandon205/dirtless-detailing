export const metadata = {
  title: "Interior Refresh Detail in Buckley & Bonney Lake",
  description:
    "Maintenance-focused interior car detailing in Buckley and Pierce County. Thorough dusting, vacuuming, wipe-down, and conditioning for vehicles in good condition.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/interior-refresh" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/interior-refresh",
    images: [{ url: "/assets/images/interior/driver15.jpg", alt: "Driver side interior of a car after our Interior Refresh service" }]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
