export const metadata = {
  title: "Dirt-Less Detailing - Links to everything you need",
  description: "All the links to our socials media pages, products we've showcased, our ceramic maintenance page, and more.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/links" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/links",
    images: [
      {
        url: "/assets/images/interior/driverTesla.jpg",
        width: 1200,
        height: 630,
        alt: "A Tesla Model 3 driver side interior"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
