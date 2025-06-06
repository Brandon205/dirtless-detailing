export const metadata = {
  title: "Boats/RV's & Trailer Detailing",
  description: "At Dirt-Less Detailing we aren't limited to just cars and trucks! Book any of your recreational vehicles for a detail today!",
  alternates: { canonical: "https://www.dirtlessdetailing.com/services/recreational" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/services/recreational",
    image: "/assets/images/sealshine/rv-finished.jpg"
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
