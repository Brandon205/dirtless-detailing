export const metadata = {
  title: "Paint Polish & Ceramic Coating in Buckley & Bonney Lake",
  description:
    "Experience a showroom shine and unparalleled protection with our Polish & Coat, ensuring your car gleams like new while safeguarding its finish.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/polish" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/polish",
    images: [
      {
        url: "/assets/images/correction/teslaclean.jpg",
        alt: "A clean Tesla Model 3 after our Polish & Coat service"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
