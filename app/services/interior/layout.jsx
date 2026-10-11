export const metadata = {
  title: "Full Interior Detailing in Buckley & Bonney Lake",
  description:
    "Comprehensive interior auto detailing in Pierce County. Shampoo and steam extraction, stain removal, leather conditioning, and thorough odor elimination.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/interior" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/interior",
    images: [{ url: "/assets/images/interior/driver16.jpg", alt: "Car driver interior after our Full Interior Detail service" }]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
