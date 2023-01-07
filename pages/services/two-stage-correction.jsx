import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import cover from '../../public/imgs/TwoStageCover.webp';
import paintDefects from '../../public/imgs/pageimgs/homepage/paintDefects.png';

const steps = [
  ["Wash Vehicle", "Thorough strip wash top to bottom using 2 bucket method or equivalent, including gas door."],
  ["Wheel Cleaning", "Clean wheels, wheel wells, and wheel barrels."],
  ["Remove tar and sap", "Remove any and all tar and sap from the exterior."],
  ["Correction Prep - Clay Bar", "Clay bar the entire vehicle to remove contaminants and leave the paint smooth."],
  ["Correction Prep - Iron Decontamination", "Iron decontamination to get rid of the rest of the embedded iron particles in your paint."],
  ["Dry Vehicle", "Dry the whole vehicle with clean towels and air blowers."],
  ["Tape Vehicle", "Tape off trim and sensitive areas (some detailers skip this step)."],
  ["Paint Correction", "Complete Two Stage paint correction using Griots products removing all scratches and swirls we possibly can while staying safe for vehicle specific clear coat thickness."],
  ["Remove Polishing Compound", "Remove polishing compound residue from cracks, crevices, etc."],
  ["Protect Paint", "Protect paint with ceramic spray or "],
  ["Door Jambs", "Clean door jambs."],
  ["Dress Vehicle", "Dress all plastics, wheel wells, and tires."]
]

export default function TwoPC() {
  const [href, setHref] = useState('');

  useEffect(() => {
    setHref(window.location.href)
  }, []);

  const content = steps.map((item, id) => {
    return (
      <li key={id} className="item">
        <div className="step-number-container">
          <h3 className='step-number'>{id + 1}</h3><div className="vertical-rule"></div>
        </div>
        <div className="step-container">
          <h4 className="step-title">{item[0]}</h4>
          <p className='step-desc'>{item[1]}</p>
          {id === 9 ? <a className='aside-link' href="/services/exterior-ceramic-coating">ceramic coating.</a> : ''}
        </div>
      </li>
    )
  })
  return (
    <section className='service-content-container'>
      <Head>
        <title>Two Stage Paint Correction | Dirt-Less Detailing</title>
        <meta property="og:title" content="Two Stage Paint Correction | Dirt-Less Detailing" />
        <meta name="description" content="Our Two Stage Paint Correction is for vehicles that are to be spotless and have a beautiful shine. This service will get them there." />
        <meta property="og:description" content="Our Two Stage Paint Correction is for vehicles that are to be spotless and have a beautiful shine. This service will get them there." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dirtlessdetailing.com/services/two-stage-correction" />
        <meta property="og:image" content={cover.src} />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/services/two-stage-correction" />
        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "Two Stage Paint Correction",
            "brand": "Dirt-Less Detailing",
            "description": "Revive the shine and clarity of your vehicle's paint with our professional paint correction service. Our team at Dirt-Less Detailing uses advanced techniques and products to remove defects and imperfections, leaving your car with a smooth and flawless finish. Contact us to learn more and schedule your paint correction service today.",
            "image": "${cover.src}",
            "url": "https://www.dirtlessdetailing.com/services/two-stage-correction/",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "450",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "USD",
                "price": "450",
                "minPrice": "450",
                "maxPrice": "1100"
              },
              "availability": "http://schema.org/InStock",
              "itemOffered": {
                "@type": "Service",
                "name": "Two Stage Paint Correction Service",
                "serviceType": "Paint Correction",
                "areaServed": {
                  "@type": "Place",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Bonney Lake",
                    "addressRegion": "WA",
                    "postalCode": "99391",
                    "streetAddress": "9305 205th Ave E"
                  }
                },
                "providerMobility": "static"
              }
            }
          }`,
        }} />
      </Head>
      <div className="cover">
        <Image src={cover} alt="Vehicle after a Two Stage Paint Correction" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>Two Stage Paint Correction</h1>
        <h2 className='page-subheading'>Go the extra mile and remove years of scratches and swirls with this 2 stage correction</h2>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
        <p className='inline text-small'>
          Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
        </p>
      </div>

      <div className='main-content-container bg-contact'>
        <div className="process-container">
          <div>
            <main className="service-main">
              <h2 className='text-large mt-0'>Two Stage Paint Correction</h2>
              <div className="text-left">
                <p>Our <a href="/services/two-stage-correction" className='aside-link'>Two Stage Paint Correction</a> service is aimed to remove as many swirls, scratches, and imperfections from your paint as possible. This is where we do an intense cutting and polishing step, called a 2-step correction, to get the most gloss and clarity from your paintwork.</p>
                <p>Depending on the condition, whether the vehicle is new or not, some scratches won't come all the way out. It could be the scratches are too deep to remove safely, or the clear coat itself is thinning out. (We'll take paint measurements before we start.)</p>
                <p>This is where we'll make the call on what we can safely remove from your paint. It's not just about removing as many imperfections as possible. It's also knowing when enough is enough to keep the integrity of the paint healthy.</p>
                <p>The Level 2 paint correction is a commitment that you are making to your vehicle. If you'd like to keep the shine on your paint, you have to properly maintain the vehicle after the service is complete. If you don't properly wash and dry the vehicle, you can easily put all those swirls and scratches back into your paint after just a few washes.</p>
                <p>This is one of our most involved services that we offer so we'll need to perform it at our <a href='/correction/bonney-lake' className='aside-link'>shop</a> location in Bonney Lake.</p>
                <p>Want to compare this to our Single Stage Paint Correction? Check out our <a href='/detailing/correction' className='aside-link'>comparison</a> page for more details.</p>
              </div>
            </main>

            <br className='extra-space' />

            <h2 className='cleaning-process-title'>Our Two Stage Paint Correction Process</h2>
            <ol className='list'>
              {content}
            </ol>

            <br className='extra-space' />

            <div>
              <h3 className='pricing-title text-white'>Our Two Stage Paint Correction Pricing</h3>
              <p className='subtext'>*Final pricing may vary based on your vehicle condition and size.</p>
              <div className="pricing-container">
                <div className="pricing-card text-black">
                  <strong className='size'>Small</strong>
                  <p className="pricing-price pricing-border">$450- $600</p>
                  <p className="example-vehicle pricing-border">Smaller Trucks</p>
                  <p className="example-vehicle pricing-border">Most Cars</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size'>Medium</strong>
                  <p className="pricing-price pricing-border">$600- $850</p>
                  <p className="example-vehicle pricing-border">Mid-Size SUV's</p>
                  <p className="example-vehicle pricing-border">Most Wagons</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size'>Large</strong>
                  <p className="pricing-price pricing-border">$800- $1,100</p>
                  <p className="example-vehicle pricing-border">Large SUV's</p>
                  <p className="example-vehicle pricing-border">Trucks</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
              </div>

              <br className='extra-space' />

              <h4 className='text-large'>Visual example of different paint defects:</h4>
              <p className='subtext'>This gives an example of why deeper scratches aren't removable without repainting.</p>
              <div className='examples-container'>
                <div className='example-img'>
                  <Zoom>
                    <Image src={paintDefects} alt="What IGL coatings protect from circle" placeholder='blur' />
                  </Zoom>
                </div>
              </div>
            </div>

            <br className='extra-space' />

            <div>
              <strong className='text-medium'>We'll help customers from all over get a paint correction on their vehicle, however, most of our customers come to our shop from these areas:</strong>
              <div style={{ display: 'grid', placeItems: 'center' }}>
                <ul className='cities-ul'>
                  <li><a href='/correction/bonney-lake' className='aside-link'>Bonney Lake</a></li>
                  <li><a href='/correction/buckley' className='aside-link'>Buckley</a></li>
                  <li><a href='/correction/sumner' className='aside-link'>Sumner</a></li>
                  <li><a href='/correction/enumclaw' className='aside-link'>Enumclaw</a></li>
                  <li><a href='/correction/puyallup' className='aside-link'>Puyallup</a></li>
                  <li><a href='/correction/federal-way' className='aside-link'>Federal Way</a></li>
                  <li><a href='/correction/orting' className='aside-link'>Orting</a></li>
                  <li><a href='/correction/south-prairie' className='aside-link'>South Prairie</a></li>
                  <li><a href='/correction/black-diamond' className='aside-link'>Black Diamond</a></li>
                  <li><a href='/correction/milton' className='aside-link'>Milton</a></li>
                  <li><a href='/correction/edgewood' className='aside-link'>Edgewood</a></li>
                  <li><a href='/correction/graham' className='aside-link'>Graham</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className='aside-container'>
              <div className='service-aside'>
                <p className='extra-addons text-large'>Other Correction Pages</p>
                <hr className="contact-border" style={{ marginBottom: 16 }} />
                <div className="aside-links">
                  <a href="/services/single-stage-correction" style={{ color: href.endsWith('single-stage-correction') ? 'dodgerblue' : 'white' }} className="service-link">{href.endsWith('single-stage-correction') ? '> ' : ''} Single Stage Paint Correction</a><br />
                  <a href="#" style={{ color: href.endsWith('two-stage-correction') ? 'dodgerblue' : 'white' }} className="service-link">{href.endsWith('two-stage-correction') ? '> ' : ''} Two Stage Paint Correction</a><br />
                  <a href="/gallery/paint-correction-gallery" className="service-link">Paint Correction Gallery</a>
                </div>
              </div>
              <div className='service-aside addons-aside'>
                <p className='extra-addons text-large'>Extra Add-ons</p>
                <hr className="contact-border" style={{ marginBottom: 16 }} />
                <div className="aside-links">
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/add-ons#glass" className='text-blue'>Glass Polishing</a></p>
                    <p className='m-0'><span className="bold special-package">$80</span>/hour</p>
                    <p className="addon-subtext">Gives you crystal clear windows.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        <br className='extra-space' />
      </div>
    </section>
  )
}
