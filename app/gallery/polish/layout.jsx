export const metadata = {
  title: "Paint Correction Gallery",
  description: "Paint Correction Photos • Here are some examples from both our Single and Two Stage Paint Correction services!",
  alternates: { canonical: "https://www.dirtlessdetailing.com/gallery/polish" },
  openGraph: {
    type: "website",
    url: "https://www.dirtlessdetailing.com/gallery/polish",
    images: [
      {
        url: "/assets/images/polish/36 plymouth.jpg",
        width: 1200,
        height: 630,
        alt: "A beautiful red 1936 Plymouth after our Polish & Coat Service."
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return <div>{children}</div>;
}
