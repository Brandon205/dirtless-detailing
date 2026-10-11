import React from "react";

interface MakesOffer {
  "@type": "Offer";
  "itemOffered": {
    "@type": "Service";
    "name": string;
    "description": string;
    "areaServed": string;
    "serviceType": string;
  };
}

export default function BaseSchema({
  serviceImage = "/assets/images/exterior/archCoTruck.jpg",
  makesOffer,
  url = "https://www.dirtlessdetailing.com"
}: {
  serviceImage?: string;
  makesOffer: MakesOffer;
  url?: string;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dirt-Less Detailing",
    "url": url,
    "image": new URL(serviceImage, "https://www.dirtlessdetailing.com").href,
    "telephone": "+12532529758",
    "email": "brenden@dirtlessdetailing.com",
    "priceRange": "$$$",
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
      "latitude": "47.1580",
      "longitude": "-122.0527"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "47.1580",
        "longitude": "-122.0527"
      },
      "geoRadius": "35000" // Service radius in meters (35km)
    },
    // Service-specific information
    "makesOffer": makesOffer,
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Check",
    // Credentials when applicable
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Insurance",
        "value": "Fully Insured"
      }
    ]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />;
}
