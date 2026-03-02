export const metadata = {
  title: "Exterior Polish & Coat",
  description:
    "Experience a showroom shine and unparalleled protection with our Polish & Coat, ensuring your car gleams like new while safeguarding its finish.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/polish" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/polish",
    images: [
      {
        url: "/assets/images/correction/teslaclean.jpg",
        width: 1200,
        height: 630,
        alt: "A clean Tesla Model 3 after our Polish & Coat service"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
