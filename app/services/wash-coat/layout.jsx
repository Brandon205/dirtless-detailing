export const metadata = {
  title: "Wash & Coat",
  description:
    "Professional decontamination wash and 3-year ceramic coating without the expense of paint correction. Long-lasting shine and protection in Pierce County, WA.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/wash-coat" },
  openGraph: {
    type: "website",
    title: "Wash & Coat Ceramic Protection | Dirt-Less Detailing",
    description:
      "Professional decontamination wash and 3-year ceramic coating without the expense of paint correction. Long-lasting shine and protection in Pierce County, WA.",
    url: "https://www.dirtlessdetailing.com/services/wash-coat",
    images: [
      {
        url: "/assets/images/exterior/crTesla.jpg",
        width: 1200,
        height: 630,
        alt: "Black Tesla after decontamination wash and ceramic coating"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Wash & Coat | Dirt-Less Detailing",
    description:
      "Professional decontamination wash and 3-year ceramic coating without the expense of paint correction. Long-lasting shine and protection in Pierce County, WA.",
    images: ["/assets/images/exterior/crTesla.jpg"]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
