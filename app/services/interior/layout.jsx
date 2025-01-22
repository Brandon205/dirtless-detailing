export const metadata = {
  title: "Full Interior Detail",
  description: "Our Full Interior cleaning is our most sought after service, and for good reason, it will completely renew your cars interior!",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/interior" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/interior",
    image: "/assets/images/interior/driver16.jpg"
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
