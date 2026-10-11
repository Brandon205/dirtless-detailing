export const metadata = {
  title: "Links",
  description: "All the links to our social media pages, products we've showcased, our ceramic maintenance page, and more.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/links" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/links",
    images: [
      {
        url: "/assets/images/interior/driverTesla.jpg",
        alt: "A Tesla Model 3 driver side interior"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
