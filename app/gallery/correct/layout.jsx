export const metadata = {
  title: "Ceramic Coating Gallery",
  description: "A gallery of photos that we have taken showing off some of the vehicles that we have coated and protected!",
  alternates: { canonical: "https://www.dirtlessdetailing.com/gallery/correct" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/gallery/correct",
    image: "/assets/images/correction/ceramicBeads1.jpg"
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
