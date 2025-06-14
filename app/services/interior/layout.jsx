export const metadata = {
  title: "Full Interior Detail",
  description: "Our Full Interior cleaning is our most sought after service, and for good reason, it will completely renew your cars interior!",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/interior" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/interior",
    images: [
      {
        url: "/assets/images/interior/driver16.jpg",
        width: 1200,
        height: 630,
        alt: "The drivers side interior of a car after our Full Interior Detail service"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
