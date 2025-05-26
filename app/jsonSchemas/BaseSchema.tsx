import React from "react";
import Script from "next/script";

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
  serviceImage = "/assets/images/archCoTruck.webp",
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
    "image": serviceImage,
    "telephone": "+12532529758",
    "email": "brenden@dirtlessdetailing.com",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
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
    ],
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Gentry Stretz."
        },
        "datePublished": "2025-02-07",
        "reviewBody":
          "Scratched the heck out of my GMC truck taking it down jeep trails this past hunting season over in Entiat. I contacted Brenden to see what he thought he'd be able to do. He was confident he could remove most all the scratches and make it look good again. He definitely did! It looks great. Very impressed with his knowledge, skill and customer service. I highly recommend Brenden and Dirt-Less Detailing."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Kyle R."
        },
        "datePublished": "2024-02-02",
        "reviewBody":
          "Could not be happier with the job Brenden and his team did with my truck. Had it looking like it just came off the showroom floor. Interior/exterior and engine bay looked phenomenal. I can tell he takes pride in what he does with the level of detail displayed. Great customer service and reasonably priced. Highly recommend!!"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Kayla H."
        },
        "datePublished": "2024-02-01",
        "reviewBody":
          "I had an amazing experience at Dirt-Less Detailing I had a pee stain on my car seat that I thought would never come out, but they worked wonders! They shampooed the seat and completely got rid of the smell. The service was incredibly professional, and the staff was friendly and helpful. They went above and beyond to make sure I was satisfied with the results. I would highly recommend them to anyone in need of car detailing services. I’ll definitely be back!"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "41",
      "bestRating": "5",
      "worstRating": "5"
    }
  };

  return <Script id="schema-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />;
}
