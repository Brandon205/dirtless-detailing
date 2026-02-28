export const metadata = {
  title: "Wash & Coat",
  description:
    "Get the advantages of a full exterior ceramic coating without the cost of a paint correction. Our Wash & Coat service includes a thorough decontamination wash, a full paint prep procedure, followed by the application of our high-quality ceramic coating to protect your paint and give it a deep, glossy shine.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/wash-coat" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/wash-coat",
    images: [
      {
        url: "/assets/images/exterior/crTesla.jpg",
        width: 1200,
        height: 630,
        alt: "Shiny black Tesla after a decontamination wash and ceramic coating application"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
