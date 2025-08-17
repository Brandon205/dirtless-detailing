export const metadata = {
  title: "About Us & FAQ",
  description: "Learn more about us and why Dirt-Less Detailing was founded, and check out our FAQ for to get answers to our most frequently asked questions.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/about" },
  openGraph: {
    title: "About Dirt-Less Detailing - Our Story & Small Team",
    description:
      "Learn more about us and why Dirt-Less Detailing was founded, and check out our FAQ for to get answers to our most frequently asked questions.",
    url: "https://www.dirtlessdetailing.com/about",
    images: [
      {
        url: "/assets/images/showcase/homepage-main.webp",
        width: 1200,
        height: 630,
        alt: "A photo in front of the truck that won at Good Guys Car Show that year"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Dirt-Less Detailing",
    description:
      "Learn more about us and why Dirt-Less Detailing was founded, and check out our FAQ for to get answers to our most frequently asked questions.",
    images: ["/assets/images/showcase/homepage-main.webp"]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
