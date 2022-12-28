export default function createSchema(props) {
    console.log(props)

    return {
        __html: `{
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": "${props.name}",
            "description": "${props.description}",
            "url": "https://www.dirtlessdetailing.com${props.url}",
            "offers": {
                "@type": "Offer",
                "priceCurrency": "USD",
                "priceSpecification": {
                    "@type": "PriceSpecification",
                    "priceCurrency": "USD",
                    "minPrice": "${props.minPrice}",
                    "maxPrice": "${props.maxPrice}"
                },
                "availability": "http://schema.org/InStock",
                "itemOffered": {
                    "@type": "Service",
                    "name": "${props.name} Service",
                    "serviceType": "${props.name}",
                    "image": "${props.image}",
                    "providerMobility": "${props.mobility}"
                }
            }
        }`,
    }
}