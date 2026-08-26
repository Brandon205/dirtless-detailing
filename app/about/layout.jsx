export const metadata = {
  title: "About Us & FAQ",
  description:
    "Learn about Dirt-Less Detailing, our story, and our passion for auto care. Read our FAQ for answers on mobile and shop detailing in Pierce County, WA.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/about" },
  openGraph: {
    type: "website",
    title: "About Dirt-Less Detailing | Our Story & Detailing FAQ",
    description:
      "Learn about Dirt-Less Detailing, our story, and our passion for auto care. Read our FAQ for answers on mobile and shop detailing in Pierce County, WA.",
    url: "https://www.dirtlessdetailing.com/about",
    images: [
      {
        url: "/assets/images/showcase/homepage-main.webp",
        width: 1200,
        height: 630,
        alt: "Dirt-Less Detailing owner with award-winning truck detail"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Dirt-Less Detailing",
    description:
      "Learn about Dirt-Less Detailing, our story, and our passion for auto care. Read our FAQ for answers on mobile and shop detailing in Pierce County, WA.",
    images: ["/assets/images/showcase/homepage-main.webp"]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
