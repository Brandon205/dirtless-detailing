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
        <title>Dirt-Less Detailing | Dirt-Less Wash</title>
        <meta property="og:description" content="The Dirt-Less Wash is our base tier exterior cleaning service, complete with a spray wax to protect your vehicle." />\
        <link rel="canonical" href="https://www.dirtlessdetailing.com/services/DLWash" />
      </Head>
      <div className="cover">
        <Image src={cover} alt="Vehicle after a Dirt-Less Wash" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>Dirt-Less Wash</h1>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
      </div>

      <div className='main-content-container'>
        <div className="process-container">
          <div>
            <h2 className='cleaning-process-title'>Our Dirt-Less Wash Process*</h2>
            <ol className='list'>
              {content}
            </ol>
            <h4 style={{marginTop: 0}}>*Truck Bed cleaning offered as an extra add-on if needed.</h4>
          </div>

          <div>
            <div className='aside-container'>
              <div className='service-aside'>
                <p className='extra-addons'>Other Exterior Pages</p>
                <hr className="contact-border" style={{marginBottom: 16}} />
                <div className="aside-links">
                  <a href="/services/DLWash" style={{color: href.endsWith('DLWash') ? 'dodgerblue' : 'white'}} className="service-link">{href.endsWith('DLWash') ? '> ' : ''} Dirt-Less Wash</a>
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
                    <p className="addon-subtext">Add-ons to get your truck bed cleaned.</p>
                  </div>
                  <hr className='aside-border' />
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/Addons" className='text-blue'>Glass Polishing</a></p>
                    <p className='m-0'><span className="bold special-package">$80</span>/hour</p>
                    <p className="addon-subtext">Gives you crystal clear windows.</p>
                  </div>
                  <hr className='aside-border' />
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

        <div>
          <h3 className='pricing-title'>Dirt-Less Wash Pricing</h3>
          <h4 className='pricing-subtext'>*Final pricing may vary based on your vehicle condition and size.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">Small</h4>
              <p className="pricing-price pricing-border">$75</p>
              <p className="example-vehicle pricing-border">Smaller Trucks</p>
              <p className="example-vehicle pricing-border">Most Cars</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
            <div className="pricing-card">
              <h4 className="size">Medium</h4>
              <p className="pricing-price pricing-border">$100</p>
              <p className="example-vehicle pricing-border">Mid-Size SUV's</p>
              <p className="example-vehicle pricing-border">Most Wagons</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
            <div className="pricing-card">
              <h4 className="size">Large</h4>
              <p className="pricing-price pricing-border">$125</p>
              <p className="example-vehicle pricing-border">Large SUV's</p>
              <p className="example-vehicle pricing-border">Trucks</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
            <div className="pricing-card">
              <h4 className="size">Extra Large</h4>
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
