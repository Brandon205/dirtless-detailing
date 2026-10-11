export const metadata = {
  title: "Exterior Decon Wash in Buckley & Bonney Lake",
  description:
    "Get a car wash like never before with our Exterior Decontamination Wash. Where we go in depth to get all corners and remove any paint contaminants.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/exterior" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/exterior",
    images: [
      {
        url: "/assets/images/exterior/subaruWashed.jpeg",
        alt: "Shiny black subaru WRX after a decontamination wash"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
