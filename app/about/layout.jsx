export const metadata = {
  title: "About Us & FAQ",
  description:
    "Learn about Dirt-Less Detailing, our story, and our passion for auto care. Read our FAQ for answers on mobile and shop detailing in Pierce County, WA.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/about" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/about",
    images: [{ url: "/assets/images/showcase/homepage-main.webp", alt: "The Dirt-Less Detailing team in front of the truck that won at the Goodguys car show" }]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
