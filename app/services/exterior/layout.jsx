export const metadata = {
  title: "Exterior Decon Wash",
  description:
    "Thorough hand wash, iron decontamination, tar removal, wheel cleaning, door jambs, and 3-month ceramic protection in Pierce County, WA.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/exterior" },
  openGraph: {
    type: "website",
    title: "Exterior Decon Wash | Dirt-Less Detailing",
    description:
      "Thorough hand wash, iron decontamination, tar removal, wheel cleaning, door jambs, and 3-month ceramic protection in Pierce County, WA.",
    url: "https://www.dirtlessdetailing.com/services/exterior",
    images: [
      {
        url: "/assets/images/exterior/subaruWashed.jpeg",
        width: 1200,
        height: 630,
        alt: "Subaru WRX after our Exterior Decon Wash"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Exterior Decon Wash | Dirt-Less Detailing",
    description:
      "Thorough hand wash, iron decontamination, tar removal, wheel cleaning, door jambs, and 3-month ceramic protection in Pierce County, WA.",
    images: ["/assets/images/exterior/subaruWashed.jpeg"]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
