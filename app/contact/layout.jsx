export const metadata = {
  title: "Contact Us & Book Online",
  description: "Contact us here! Let us know any additional information we may need to know before your detail. Feel free to reach out with any questions!",
  alternates: { canonical: "https://www.dirtlessdetailing.com/contact" },
  openGraph: {
    title: "Contact Dirt-Less Detailing - Get a Free Quote Today",
    description: "Contact us here! Let us know any additional information we may need to know before your detail. Feel free to reach out with any questions!",
    url: "https://www.dirtlessdetailing.com/contact",
    images: [
      {
        url: "/assets/images/showcase/homepage-main.webp",
        alt: "The Dirt-Less Detailing team in front of a classic Chevy truck"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Dirt-Less Detailing - Get a Free Quote Today",
    description: "Reach out for any questions or to book your detail today!",
    images: ["/assets/images/showcase/homepage-main.webp"]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
