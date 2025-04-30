export const metadata = {
  title: "Contact Us",
  description: "Contact us here! Let us know any additional information we may need to know before your detail. Feel free to reach out with any questions!",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Contact Dirt-Less Detailing - Get a Free Quote Today",
    description: "Contact us here! Let us know any additional information we may need to know before your detail. Feel free to reach out with any questions!",
    url: "https://www.dirtlessdetailing.com/contact",
    images: [
      {
        url: "/assets/images/showcase/homepage-main.webp", // Consider using office or branded image
        width: 1200,
        height: 630,
        alt: "Our shop is located in Buckley, Wa"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Dirt-Less Detailing",
    description: "Reach out for any questions or to book your detail today!",
    images: ["/assets/images/showcase/homepage-main.webp"]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
