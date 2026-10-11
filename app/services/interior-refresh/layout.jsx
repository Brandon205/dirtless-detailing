export const metadata = {
  title: "Interior Refresh Service",
  description:
    "A maintenance interior detail for cars that are already fairly clean or were detailed by us in the past year, restoring that like-new feel.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/interior-refresh" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/interior-refresh",
    images: [
      {
        url: "/assets/images/interior/driver15.jpg",
        alt: "Driver side interior of a car after an interior refresh service"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
