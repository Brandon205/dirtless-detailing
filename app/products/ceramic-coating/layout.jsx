export const metadata = {
  title: "The Best Ceramic Maintenance Products",
  description: "See our top picks/recommendations for the products and methods that you should be using to wash your car easily while staying in budget!",
  alternates: { canonical: "https://www.dirtlessdetailing.com/products/ceramic-coating" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/products/ceramic-coating",
    images: [
      {
        url: "/assets/images/correction/teslafoam.jpg",
        width: 1200,
        height: 630,
        alt: "A Tesla Model 3 with a nice layer of foam on it while getting washed"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
