export const metadata = {
  title: "Car Wash Gallery",
  description: "See our top picks/recommendations for the products and methods that you should be using to wash your car easily while staying in budget!",
  alternates: { canonical: "https://www.dirtlessdetailing.com/gallery/exterior" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/gallery/exterior",
    image: "/assets/images/exterior/sideofsilverram.jpg"
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
