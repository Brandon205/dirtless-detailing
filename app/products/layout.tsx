export const metadata = {
  title: "Recommended Products",
  description: "Links to the products that we recommend for maintaining your vehicle, with our recommended methods for using those products.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/products" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/products",
    images: [
      {
        url: "/assets/images/showcase/worktruckGriots.jpg",
        width: 1200,
        height: 630,
        alt: "Our work truck in front of the Griots Garage Store in Tacoma, WA"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
