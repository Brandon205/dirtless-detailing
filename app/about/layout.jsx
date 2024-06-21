export const metadata = {
  title: "About Us & FAQ",
  description: "Learn more about us and why Dirt-Less Detailing was founded, and check out our FAQ for to get answers to our most frequently asked questions.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/about" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/about"
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
