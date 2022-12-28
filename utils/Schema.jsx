import React from 'react';

export default function Schema() {
    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={
          {
            "@context":"https://schema.org/",
            "@type":"LocalBusiness",
            "currenciesAccepted": "USD",
            "openingHours": ["Mo-Su 7:00-19:00"],
            "paymentAccepted": "Cash, Credit/Debit Card, Facebook Pay",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bonney Lake",
              "addressRegion": "WA",
              "postalCode": "99391",
              "streetAddress": "9305 205th Ave E"
            },
            "email": "brenden@dirtlessdetailing.com",
            "telephone": "(253) 252-9758",
            "makesOffer": {
              "@type": "Offer",
              "itemOffered": {
                  "@type": "Service",
                  "name": "Full Interior Detail"
              }
            }
          }
        } />
    )
}