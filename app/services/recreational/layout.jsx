export const metadata = {
  title: "Boat, RV & Trailer Detailing",
  description: "At Dirt-Less Detailing we aren't limited to just cars and trucks! Book your boat, RV, trailer, or ORV for a detail today!",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/recreational" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/recreational",
    images: [
      {
        url: "/assets/images/polish/rv-finished.jpg",
        alt: "A nice clean RV after giving it a nice wash and ceramic spray"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
