import React from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';

export default function Addons() {
  return (
    <section className='service-content-container bg-contact'>
      <Head>
        <title>Dirt-Less Add-ons | Dirt-Less Detailing</title>
        <Metatags
          title='Dirt-Less Add-ons | Dirt-Less Detailing'
          description='Glass Polishing • Waterspot / Overspray Removal • Ozone Treatment • Truck Bed Cleaning • Debadging • Headliners • Engine Bay Cleaning.'
          image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ddb3cc29-1d60-4676-48d8-f86bdcfc5c00/public'
          canonical='/services/add-ons'
        />
        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "Dirt-Less Add-ons",
            "brand": "Dirt-Less Detailing",
            "description": "Our currently offered Add-ons for our various detailing services.",
            "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ddb3cc29-1d60-4676-48d8-f86bdcfc5c00/public",
            "url": "https://www.dirtlessdetailing.com/services/add-ons/",
            "offers": [
              {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": "25",
                "availability": "http://schema.org/InStock",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Truck Bed Washing Service",
                  "serviceType": "Truck Bed Wash",
                  "providerMobility": "dynamic"
                }
              },
              {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": "80",
                "availability": "http://schema.org/InStock",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Engine Bay Washing Service",
                  "serviceType": "Engine Bay Wash",
                  "providerMobility": "dynamic"
                }
              },
              {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": "80",
                "availability": "http://schema.org/InStock",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Glass Polishing Service",
                  "serviceType": "Glass Polish",
                  "providerMobility": "dynamic"
                }
              },
              {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": "80",
                "availability": "http://schema.org/InStock",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Waterspot/Overspray Removal Service",
                  "serviceType": "Waterspot/Overspray Removal",
                  "providerMobility": "dynamic"
                }
              },
              {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": "80",
                "availability": "http://schema.org/InStock",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Debadging Service",
                  "serviceType": "Vehicle Debadging",
                  "providerMobility": "dynamic"
                }
              },
              {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": "40",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "USD",
                  "price": "40",
                  "minPrice": "40",
                  "maxPrice": "80"
                },
                "availability": "http://schema.org/InStock",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Headliner Cleaning Service",
                  "serviceType": "Headliner Cleaning",
                  "providerMobility": "dynamic"
                }
              },
              {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": "100",
                "availability": "http://schema.org/InStock",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Ozone Treatment Service",
                  "serviceType": "Ozone Treatment",
                  "providerMobility": "dynamic"
                }
              }
            ]
          }`,
        }} />
      </Head>
      <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ddb3cc29-1d60-4676-48d8-f86bdcfc5c00/public')`}}></div>
      <div className="servicepage-header">
        <h1>Dirt-Less Detailing Add-ons</h1>
        <h2 className='page-subheading'>Glass Polishing • Waterspot / Overspray Removal • Ozone Treatment • Truck Bed Cleaning • Debadging • Headliners • Engine Bay Cleaning.</h2>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
        <p className='inline text-small'>
          Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
        </p>
      </div>

      <h3 style={{ fontSize: 40 }}>Our Currently Offered Add-ons:</h3>
      <div className="addon-content-container">

        <h3 className='addons-subheading' id='exterior'>Exterior Add-ons:</h3>
        <div className="feature-section" id="truck">
          <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/546a9fca-8e03-4f4e-eb3d-0885817bb500/public')`}}></div>
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Truck Bed Cleaning</p>
            <p className="secondary-text"><span>$25</span></p>
            <p className="service-desc text-white">This is our add-on to get your truck bed cleaned out. Can be added to either of our Dirt-Less Washes.</p>
            <div className='internal-links'>
              <a href="/services/dirtless-wash" className="readmore">Dirt-Less Wash</a>
              <a href="/services/premium-dirtless-wash" className="readmore">Premium Dirt-Less Wash</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />

        <div className="feature-section" id="engine">
          <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/8ae09f8b-9ace-4f48-265a-5ac051eaf400/public')`}}></div>

          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Engine Bay Cleaning</p>
            <p className="secondary-text"><span>$80</span></p>
            <p className="service-desc text-white">We will cover sensitive/electronic areas in the bay, clean and wash, then dress the engine bay to have it looking like new!</p>
            <div className='internal-links'>
              <a href="/services/dirtless-wash" className="readmore">Dirt-Less Wash</a>
              <a href="/services/premium-dirtless-wash" className="readmore">Premium Dirt-Less Wash</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />

        <div className="feature-section" id="glass">
          <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/53e8e9dc-6fa4-4187-24cd-ccbb08099400/public')`}}></div>
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Glass Polishing</p>
            <p className="secondary-text"><span>$80/hour</span></p>
            <p className="service-desc text-white">Remove all scratches, etching, and watermarks possible. Can be added to any of our Paint Correction Services when contacting us.</p>
            <div className='internal-links'>
              <a href="/services/single-stage-correction" className="readmore">Single Stage Paint Correction</a>
              <a href="/services/two-stage-correction" className="readmore">Two Stage Paint Correction</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />

        <div className="feature-section" id="waterspot">
          <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/1e326db9-1061-4626-3e94-f1333c4a2a00/public')`}}></div>
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Waterspot/Overspray Removal</p>
            <p className="secondary-text"><span>$80/hour</span></p>
            <p className="service-desc text-white">Remove all overspray and waterspots we can. This can be added onto any of our Exterior Washes or either of our Paint Correction Services when contacting us.</p>
            <div className='internal-links'>
              <a href="/services/dirtless-wash" className="readmore">Dirt-Less Wash</a>
              <a href="/services/premium-dirtless-wash" className="readmore">Premium Dirt-Less Wash</a>
              <a href="/services/single-stage-correction" className="readmore">Single Stage Paint Correction</a>
              <a href="/services/two-stage-correction" className="readmore">Two Stage Paint Correction</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />

        <div className="feature-section" id="debadge">
          <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/8e6cf3a2-f7da-4ce0-7bd7-00b002b22500/public')`}}></div>
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Debadging</p>
            <p className="secondary-text"><span>$80/hour</span></p>
            <p className="service-desc text-white">Remove any vehicle badging including any residue left behind after removal</p>
            <div className='internal-links'>
              <a href="/services/dirtless-wash" className="readmore">Dirt-Less Wash</a>
              <a href="/services/premium-dirtless-wash" className="readmore">Premium Dirt-Less Wash</a>
              <a href="/services/single-stage-correction" className="readmore">Single Stage Paint Correction</a>
              <a href="/services/two-stage-correction" className="readmore">Two Stage Paint Correction</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />

        <h3 className='addons-subheading' id='interior'>Interior Add-ons:</h3>
        <div className="feature-section" id="headliners">
          <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d9975368-5cef-4bcb-4646-75b2783c8900/public')`}}></div>
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Headliner Cleaning</p>
            <p className="secondary-text"><span>$40-$80</span></p>
            <p className="service-desc text-white">We will perform cleaning methods specific to your vehicles headliner material. We do this to prevent sagging and damage to the headliners. (Results may vary).</p>
            <div className='internal-links'>
              <a href="/services/full-interior-detail" className="readmore">Full Interior Cleaning</a>
              <a href="/services/biohazard-cleaning" className="readmore">Biohazard Cleaning</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />

        <div className="feature-section" id="ozone">
          <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/1da88e3b-77d3-43da-6f00-e7af4b914000/public')`}}></div>
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Ozone Treatment</p>
            <p className="secondary-text"><span>$100</span></p>
            <p className="service-desc text-white">Ozone treatment is the use of O3 (gas ozone) to remove bacteria, viruses, and odors from your vehicle. This can be added to any of our Interior cleanings when contacting us.</p>
            <div className='internal-links'>
              <a href="/services/full-interior-detail" className="readmore">Full Interior Cleaning</a>
              <a href="/services/biohazard-cleaning" className="readmore">Biohazard Cleaning</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
