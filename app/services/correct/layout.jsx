export const metadata = {
  title: "Exterior Correct & Coat",
  description: "Elevate your vehicle's appearance and protection with our Correct & Coat service, leaving your car with a mirror-like shine and defense.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/correct" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/correct",
    images: [
      {
        url: "/assets/images/correction/genesis2.jpeg",
        width: 1200,
        height: 630,
        alt: "A beautiful Genesis after our Correct & Coat service"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
