import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import cover from '../../public/imgs/PDLWashCover.webp';

const steps = [
  ["Wash Vehicle", "Thorough strip wash top to bottom, including the gas door with the 2 bucket method or equivalent."],
  ["Wheel Cleaning", "Clean wheels, wheel wells, and wheel barrels."],
  ["Wax Prep - Clay Bar", "Clay bar the whole vehicle so sealant properly adheres and paint is left smooth."],
  ["Wax Prep - Iron Decontamination", "Decontaminate the vehicle to make sure all microscopic iron contaminants are off of the paint. These are things that the clay bar won't get. This will improve wax adhesion as well."],
  ["Remove tar and sap", "Remove any and all tar and sap from the exterior."],
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
        <title>Dirt-Less Detailing | Premium Wash</title>
        <meta property="og:description" content="Our Premium Dirt-Less Wash will go above and beyond what our base tier offers, and is sure to get everything off your vehicles exterior!" />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/services/PDLWash" />
      </Head>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="Vehicle after a Premium Dirt-Less Wash" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>Premium Dirt-Less Wash</h1>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
      </div>

      <div className='main-content-container'>
        <div className="process-container">
          <div>
            <h2 className='cleaning-process-title'>Our Premium Dirt-Less Wash Process*</h2>
            <ol className='list'>
              {content}
            </ol>
            <p style={{marginTop: 0}}>*Truck Bed cleaning offered as an extra add-on if needed.</p>
          </div>

          <div>
            <div className='aside-container'>
              <div className='service-aside'>
                <p className='extra-addons'>Other Exterior Pages</p>
                <hr className="contact-border" style={{marginBottom: 16}} />
                <div className="aside-links">
                  <a href="/services/DLWash" style={{color: href.endsWith('/DLWash') ? 'dodgerblue' : 'white'}} className="service-link">{href.endsWith('/DLWash') ? '> ' : ''} Dirt-Less Wash</a>
                  <a href="/services/PDLWash" style={{color: href.endsWith('PDLWash') ? 'dodgerblue' : 'white'}} className="service-link">{href.endsWith('PDLWash') ? '> ' : ''} Premium Dirt-Less Wash</a>
                  <a href="/gallery/ExteriorWashGallery" className="service-link">Exterior Wash Gallery</a>
                </div>
              </div>
            </div>

            <div className='aside-container'>
              <div className='service-aside addons-aside'>
                <a href="/services/Addons" className='extra-addons'>Extra Add-ons</a>
                <hr className="contact-border" style={{marginBottom: 16}} />
                <div className="aside-links"> 
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/Addons" className='text-blue'>Truck Bed Cleaning</a></p>
                    <p className='m-0'><span className="bold special-package">$25</span></p>
                    <p className="addon-subtext">Add-on to get your truck bed cleaned.</p>
                  </div>
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/Addons" className='text-blue'>Glass Polishing</a></p>
                    <p className='m-0'><span className="bold special-package">$80</span>/hour</p>
                    <p className="addon-subtext">Gives you crystal clear windows.</p>
                  </div>
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/Addons" className='text-blue'>Waterspot/Overspray Removal</a></p>
                    <p className='m-0'><span className="bold special-package">$80</span>/hour</p>
                    <p className="addon-subtext">Remove any Overspray and Waterspots from your vehicle.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="combo-container">
          <h3>Get a <span className='special-package'>FREE</span> Engine cleaning!</h3>
          <p className="subtext">Check out our Current <a className='aside-link' href="/services/Combo">Combo</a> deal that combines this Premium Dirt-Less Wash, our <a className='aside-link' href="/services/FullIntEx">Full Interior Cleaning</a>, and gives you an Engine Bay Cleaning totally on us!  </p>
        </div>

        <div>
          <h3>Our Premium Dirt-Less Wash Pricing</h3>
          <h4>Our basic prices are shown below. Final pricing may vary based on your vehicle size.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">SMALL</h4>
              <p className="example-vehicle">(Most Cars and Smaller Trucks)</p>
              <p className="pricing-price">$150</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">MEDIUM</h4>
              <p className="example-vehicle">(Mid-Size SUV's, and Most Wagons)</p>
              <p className="pricing-price">$200</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">LARGE</h4>
              <p className="example-vehicle">(Large SUV's and Large trucks)</p>
              <p className="pricing-price">$250</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">EXTRA LARGE</h4>
              <p className="example-vehicle">(Extra Large Vehicles)</p>
              <p className="pricing-price">$275</p>
            </div>
          </div>

          <h4>Interested? Get in touch with us here, and let us know what we can do to help you!</h4>
          <a href="/Contact" className="quote-btn main-quote-btn">Contact Us</a>

        </div>
      </div>
    </section>
  )
}
