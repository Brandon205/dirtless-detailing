import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import cover from '../../public/imgs/DLWashCover.webp';

const steps = [
  ["Wash Vehicle", "Thorough 2 bucket or equivalent top to bottom wash including the gas door."],
  ["Wheel Cleaning", "Clean wheels, wheel wells, and wheel barrels."],
  ["Dry Vehicle", "Dry the whole vehicle with clean towels and air blowers."],
  ["Wax", "Apply spray wax."],
  ["Dress Vehicle", "Dress tires, wheel wells, and plastics."]
]

export default function DLWash() {
  const [href, setHref] = useState('');

  useEffect(() => {
    setHref(window.location.href)
  }, []);

  const content = steps.map((item, id) => {
    return (
      <li key={id} className="item">
        <div className="step-number-container">
          <h3 className='step-number'>{id + 1}</h3><div className='vertical-rule'></div>
        </div>
        <div className="step-container">
          <h4 className="step-title">{item[0]}</h4>
          <p className='step-desc'>{item[1]}</p>
        </div>
      </li>
    )
  });

  return (
    <section className='service-content-container'>
      <Head>
        <title>Dirt-Less Car Wash | Dirt-Less Detailing</title>
        <meta property="og:title" content="Dirt-Less Car Wash | Dirt-Less Detailing" />
        <meta name="description" content="The Dirt-Less Wash is our base tier exterior car wash service, complete with a spray wax to protect your vehicle." />
        <meta property="og:description" content="The Dirt-Less Wash is our base tier exterior car wash service, complete with a spray wax to protect your vehicle." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dirtlessdetailing.com/services/dirtless-wash" />
        <meta property="og:image" content={cover.src} />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/services/dirtless-wash" />
        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": "Dirt-Less Wash",
            "description": "At Dirt-Less Detailing, we offer a comprehensive car wash service to keep your vehicle looking its best.",
            "url": "https://www.dirtlessdetailing.com/services/dirtless-wash",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "priceSpecification": {
              	"@type": "PriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "75",
                "maxPrice": "150"
              },
              "availability": "http://schema.org/InStock",
              "itemOffered": {
                "@type": "Service",
                "name": "Dirt-Less Wash Service",
                "serviceType": "Car Wash",
                "image": "${cover.src}",
                "providerMobility": "dynamic"
              }
            }
          }`,
        }} />
      </Head>
      <div className="cover">
        <Image src={cover} alt="Subaru after a Dirt-Less Wash" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>Dirt-Less Wash</h1>
        <h2 className='page-subheading'>Get a Dirt-Less Wash and have your vehicle shine like never before!</h2>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
        <p className='inline text-small'>
          Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
        </p>
      </div>

      <div className='main-content-container'>
        <div className="process-container">
          <div>
            <main className="service-main">
              <h2 className='text-large mt-0'>Dirt-Less Wash</h2>
              <div className="text-left">
                <p>You don't have to go to Harvard University to wash a car, but there are methods of washing that produce infinitely better results than your typical tunnel car wash. Our methods are also way safer.</p>
                <p>If you're looking for a fast and cheap option to get your car washed in Bonney Lake or the surrounding areas, we most likely won't be a great fit for you. We go very in-depth in our washing process to provide the highest quality level of service and results your money can buy.</p>
                <p>Want to go a step further than our Dirt-Less wash? Check out our <a href='/detailing/car-washes' className='aside-link'>comparison</a> page to see the differences between our this service and the <a href='/services/premium-dirtless-wash' className='aside-link'>Premium</a> version.</p>
              </div>

              <br className='extra-space' />
            </main>
            <h2 className='cleaning-process-title'>Our Dirt-Less Wash Process*</h2>
            <ol className='list'>
              {content}
            </ol>
            <h4 style={{ marginTop: 0 }}>*Truck Bed cleaning offered as an extra add-on if needed.</h4>
          </div>

          <div>
            <div className='aside-container'>
              <div className='service-aside'>
                <p className='extra-addons text-large'>Other Exterior Pages</p>
                <hr className="contact-border" style={{ marginBottom: 16 }} />
                <div className="aside-links">
                  <a href="#" style={{ color: href.endsWith('/dirtless-wash') ? 'dodgerblue' : 'white' }} className="service-link">{href.endsWith('/dirtless-wash') ? '> ' : ''} Dirt-Less Wash</a><br />
                  <a href="/services/premium-dirtless-wash" style={{ color: href.endsWith('premium-dirtless-wash') ? 'dodgerblue' : 'white' }} className="service-link">{href.endsWith('premium-dirtless-wash') ? '> ' : ''} Premium Dirt-Less Wash</a><br />
                  <a href="/gallery/dirtless-wash-gallery" className="service-link">Exterior Wash Gallery</a>
                </div>
              </div>
            </div>

            <div className='aside-container'>
              <div className='service-aside addons-aside'>
                <p className='extra-addons text-large'>Extra Add-ons</p>
                <hr className="contact-border" style={{ marginBottom: 16 }} />
                <div className="aside-links">
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/add-ons#truck" className='text-blue'>Truck Bed Cleaning</a></p>
                    <p className='m-0'><span className="bold special-package">$25</span></p>
                    <p className="addon-subtext">Add-ons to get your truck bed cleaned.</p>
                  </div>
                  <hr className='aside-border' />
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/add-ons#glass" className='text-blue'>Glass Polishing</a></p>
                    <p className='m-0'><span className="bold special-package">$80</span>/hour</p>
                    <p className="addon-subtext">Gives you crystal clear windows.</p>
                  </div>
                  <hr className='aside-border' />
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/add-ons#waterspot" className='text-blue'>Waterspot/Overspray Removal</a></p>
                    <p className='m-0'><span className="bold special-package">$80</span>/hour</p>
                    <p className="addon-subtext">Remove any Overspray and Waterspots from your vehicle.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <br className='extra-space' />

        <div>
          <h3 className='pricing-title'>Dirt-Less Wash Pricing</h3>
          <strong className='pricing-subtext'>*Final pricing may vary based on your vehicle condition and size.</strong>
          <div className="pricing-container">
            <div className="pricing-card">
              <strong className='size'>Small</strong>
              <p className="pricing-price pricing-border">$75</p>
              <p className="example-vehicle pricing-border">Smaller Trucks</p>
              <p className="example-vehicle pricing-border">Most Cars</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
            <div className="pricing-card">
              <strong className='size'>Medium</strong>
              <p className="pricing-price pricing-border">$100</p>
              <p className="example-vehicle pricing-border">Mid-Size SUV's</p>
              <p className="example-vehicle pricing-border">Most Wagons</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
            <div className="pricing-card">
              <strong className='size'>Large</strong>
              <p className="pricing-price pricing-border">$125</p>
              <p className="example-vehicle pricing-border">Large SUV's</p>
              <p className="example-vehicle pricing-border">Trucks</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
            <div className="pricing-card">
              <strong className='size'>Extra Large</strong>
              <p className="pricing-price pricing-border">$150</p>
              <p className="example-vehicle pricing-border">Larger Trucks</p>
              <p className="example-vehicle pricing-border">Extra Large Vehicles</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
