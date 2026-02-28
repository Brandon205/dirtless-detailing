export const metadata = {
  title: "Interior + Spill Guard",
  description: "Our Full Interior cleaning process with an interior ceramic coating, perfect for protecting all surfaces in your vehicle.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/interior-spill" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/interior-spill",
    images: [
      {
        url: "/assets/images/showcase/ceramic1285.jpg",
        width: 1200,
        height: 630,
        alt: "The seat of an Infiniti after putting out interior ceramic coating on it"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
