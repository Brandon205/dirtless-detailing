export const metadata = {
  title: "Full Interior Detail",
  description:
    "Comprehensive interior auto detailing in Pierce County. Shampoo and steam extraction, stain removal, leather conditioning, and thorough odor elimination.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/interior" },
  openGraph: {
    type: "website",
    title: "Full Interior Detail | Dirt-Less Detailing",
    description:
      "Comprehensive interior auto detailing in Pierce County. Shampoo and steam extraction, stain removal, leather conditioning, and thorough odor elimination.",
    url: "https://www.dirtlessdetailing.com/services/interior",
    images: [
      {
        url: "/assets/images/interior/driver16.jpg",
        width: 1200,
        height: 630,
        alt: "Car driver interior after our Full Interior Detail service"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Interior Detail | Dirt-Less Detailing",
    description:
      "Comprehensive interior auto detailing in Pierce County. Shampoo and steam extraction, stain removal, leather conditioning, and thorough odor elimination.",
    images: ["/assets/images/interior/driver16.jpg"]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
