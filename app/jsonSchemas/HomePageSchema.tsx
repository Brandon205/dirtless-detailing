import Script from "next/script";

export default function HomePageSchema() {
  return (
    <Script
      id="json-ld-homepage"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness", // or more specific: HomeAndConstructionBusiness, ProfessionalService, etc.
          "name": "Dirt-Less Detailing",
          "image": "/assets/icons/logoCircle.png",
          "@id": "https://www.dirtlessdetailing.com",
          "url": "https://www.dirtlessdetailing.com",
          "telephone": "+1-253-252-9758",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "28120 WA-410 C6",
            "addressLocality": "Buckley",
            "addressRegion": "WA",
            "postalCode": "98321",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 47.158,
            "longitude": -122.0527
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "07:00",
            "closes": "19:00"
          },
          "sameAs": [
            "https://www.facebook.com/DirtLessDetailing",
            "https://www.instagram.com/dirt_less_detailing",
            "https://www.youtube.com/channel/UCsoqP5s4hwkQd_Sd-TVv-jg"
          ]
        })
      }}
    />
  );
}
