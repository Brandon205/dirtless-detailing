export const metadata = {
  title: "Wash & Ceramic Coating in Buckley & Bonney Lake",
  description:
    "Ceramic coating protection without the cost of paint correction: a full decon wash and paint prep, then a 1-year ceramic coating for deep gloss.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/wash-coat" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/wash-coat",
    images: [
      {
        url: "/assets/images/exterior/crTesla.jpg",
        alt: "Shiny black Tesla after a decontamination wash and ceramic coating application"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
