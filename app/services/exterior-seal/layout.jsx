export const metadata = {
  title: "Exterior Seal & Shine",
  description:
    "Experience a showroom shine and unparalleled protection with our Exterior Seal and Shine, ensuring your car gleams like new while safeguarding its finish.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/exterior-seal" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/exterior-seal",
    images: [
      {
        url: "/assets/images/correction/teslaclean.jpg",
        width: 1200,
        height: 630,
        alt: "A clean Tesla Model 3 after our Exterior Seal and Shine service"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
