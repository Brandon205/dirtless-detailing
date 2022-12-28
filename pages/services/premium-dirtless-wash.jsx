import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import createSchema from '../../utils/Schema';

import cover from '../../public/imgs/PDLWashCover.webp';

const steps = [
  ["Wash Vehicle", "Thorough strip wash top to bottom, including the gas door with the 2 bucket method or equivalent."],
  ["Wheel Cleaning", "Clean wheels, wheel wells, and wheel barrels."],
  ["Remove tar and sap", "Remove any and all tar and sap from the exterior."],
  ["Wax Prep - Clay Bar", "Clay bar the whole vehicle so sealant properly adheres and paint is left smooth."],
  ["Wax Prep - Iron Decontamination", "Decontaminate the vehicle to make sure all microscopic iron contaminants are off of the paint. These are things that the clay bar won't get. This will improve wax adhesion as well."],
  ["Dry Vehicle", "Dry the whole vehicle with clean towels and air blowers."],
  ["Apply Wax", "Apply sealant."],
  ["Door Jambs", "Clean door jambs."],
  ["Dress Vehicle", "Dress all plastics, wheel wells, and tires."]
]

export default function PDLWash() {
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
        </div>
      </li>
    )
  })

  return (
    <section className='service-content-container'>
      <Head>
        <title>Premium Car Wash | Dirt-Less Detailing</title>
        <meta property="og:title" content="Premium Car Wash | Dirt-Less Detailing" />
        <meta name="description" content="Our Premium Dirt-Less Wash will go above and beyond what our base tier offers, and is sure to get everything off your vehicles exterior!" />
        <meta property="og:description" content="Our Premium Dirt-Less Wash will go above and beyond what our base tier offers, and is sure to get everything off your vehicles exterior!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dirtlessdetailing.com/services/premium-dirtless-wash" />
        <meta property="og:image" content={cover.src} />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/services/premium-dirtless-wash" />
        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={createSchema({
          name: 'Premium Dirt-Less Wash',
          image: cover.src,
          description: "At Dirt-Less Detailing, our team uses top-of-the-line equipment and environmentally friendly products to provide a thorough wash and wax, leaving your car shining and protected.",
          url: '/services/premium-dirtless-wash',
          minPrice: '150',
          maxPrice: '275',
          mobility: 'dynamic'
        })} />
      </Head>
      <div className="cover">
        <Image src={cover} alt="Vehicle after a Premium Dirt-Less Wash" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>Premium Dirt-Less Wash</h1>
        <h2 className='page-subheading'>Our Premium Wash goes above and beyond removing all contaminants from your vehicles paint</h2>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
        <p className='inline text-small'>
          Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
        </p>
      </div>

      <div className='main-content-container'>
        <div className="process-container">
          <div>
            <main className="service-main">
              <h2 className='text-large mt-0'>Premium Dirt-Less Wash</h2>
              <div className="text-left">
                <p>Not only will you see a humongous difference in the appearance, but you will also be able to feel the smoothness and slickness of the paint once we're done with this service.</p>
                <p>Both of our Dirt-Less Wash services go very in depth, cleaning areas that you won't even see on a day to day basis. Our Premium package goes even further than that by using a clay bar and iron decontamination products on the whole vehicle to remove any contaminants.</p>
                <p>A lot of our customers love this service since it doesn't take much time to perform, but the results that you get are stellar!</p>
                <p>Want to compare our Premium and non-premium washes? Check out our <a href='/detailing/car-washes' className='aside-link'>comparison</a> page for more details.</p>
              </div>

              <br className='extra-space' />
            </main>
            <h2 className='cleaning-process-title'>Our Premium Dirt-Less Wash Process*</h2>
            <ol className='list'>
              {content}
            </ol>
            <p style={{ marginTop: 0 }}>*Truck Bed cleaning offered as an extra add-on if needed.</p>
          </div>

          <div>
            <div className='aside-container'>
              <div className='service-aside'>
                <p className='extra-addons text-large'>Other Exterior Pages</p>
                <hr className="contact-border" style={{ marginBottom: 16 }} />
                <div className="aside-links">
                  <a href="/services/dirtless-wash" style={{ color: href.endsWith('/dirtless-wash') ? 'dodgerblue' : 'white' }} className="service-link">{href.endsWith('/dirtless-wash') ? '> ' : ''} Dirt-Less Wash</a><br />
                  <a href="#" style={{ color: href.endsWith('premium-dirtless-wash') ? 'dodgerblue' : 'white' }} className="service-link">{href.endsWith('premium-dirtless-wash') ? '> ' : ''} Premium Dirt-Less Wash</a><br />
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
                    <p className="addon-subtext">Add-on to get your truck bed cleaned.</p>
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

        <div className="combo-container">
          <h3 className="text-white">Get a <span className='special-package'>FREE</span> Engine cleaning!</h3>
          <p className="subtext">Check out our Current <a className='aside-link' href="/services/interior-exterior-detailing-combo">Combo</a> deal that combines this Premium Dirt-Less Wash, our <a className='aside-link' href="/services/full-interior-detail">Full Interior Cleaning</a>, and gives you an Engine Bay Cleaning totally on us!  </p>
        </div>

        <br className='extra-space' />

        <div>
          <h3 className='pricing-title'>Premium Dirt-Less Wash Pricing</h3>
          <strong className='pricing-subtext'>*Final pricing may vary based on your vehicle condition and size.</strong>
          <div className="pricing-container">
            <div className="pricing-card">
              <strong className='size'>Small</strong>
              <p className="pricing-price pricing-border">$150</p>
              <p className="example-vehicle pricing-border">Smaller Trucks</p>
              <p className="example-vehicle pricing-border">Most Cars</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
            <div className="pricing-card">
              <strong className='size'>Medium</strong>
              <p className="pricing-price pricing-border">$200</p>
              <p className="example-vehicle pricing-border">Mid-Size SUV's</p>
              <p className="example-vehicle pricing-border">Most Wagons</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
            <div className="pricing-card">
              <strong className='size'>Large</strong>
              <p className="pricing-price pricing-border">$250</p>
              <p className="example-vehicle pricing-border">Large SUV's</p>
              <p className="example-vehicle pricing-border">Some Trucks</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
            <div className="pricing-card">
              <strong className='size'>Extra Large</strong>
              <p className="pricing-price pricing-border">$275</p>
              <p className="example-vehicle pricing-border">Larger trucks</p>
              <p className="example-vehicle pricing-border">Extra Large Vehicles</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
