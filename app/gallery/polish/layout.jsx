export const metadata = {
  title: "Paint Correction Gallery",
  description: "Paint correction photos from our single-stage Polish & Coat and two-stage Correct & Coat services, including before and afters.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/gallery/polish" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/gallery/polish",
    images: [
      {
        url: "/assets/images/polish/36 plymouth.jpg",
        alt: "A beautiful red 1936 Plymouth after our Polish & Coat Service."
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
