import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import cover from '../../public/imgs/FB_IMG_1590172619153.jpg';

const steps = [
  ["Wash Vehicle", "Thorough strip wash top to bottom using 2 bucket method or equivalent, including gas door."],
  ["Wheel Cleaning", "Clean wheels, wheel wells, and wheel barrels."],
  ["Correction Prep - Clay Bar", "Clay bar the entire vehicle to remove contaminants and leave the paint smooth."],
  ["Correction Prep - Iron Decontamination", "Iron decontamination to get rid of the rest of the embedded iron particles in your paint."],
  ["Remove tar and sap", "Remove any and all tar and sap from the exterior."],
  ["Dry Vehicle", "Dry the whole vehicle with clean towels and air blowers."],
  ["Tape Off areas", "Tape off trim and sensitive areas (Some detailers skip this step)."],
  ["Paint Correction", "Complete Single Stage paint correction using Griots products removing 65-80% of scratches and swirls."],
  ["Remove Polishing Compound", "Remove polishing compound residue from cracks, crevices, etc."],
  ["Protect Paint", "Protect paint with ceramic spray or ceramic coating."],
  ["Door Jambs", "Clean door jambs."],
  ["Dress Vehicle", "Dress all plastics, wheel wells, and tires."]
]

export default function SinglePC() {
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
        <title>Dirt-Less Detailing | Single Stage</title>
        <meta property="og:description" content="Single Stage Paint Correction should fix most of your Paint Correction needs!" />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/services/SinglePC" />
      </Head>
      <div className="cover">
        <Image src={cover} alt="Vehicle after a Single Stage Paint Correction" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>Single Stage Paint Correction</h1>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
      </div>

      <div className='main-content-container'>
        <div className="process-container">
          <div>
            <h2 className='cleaning-process-title'>Our Single Stage Paint Correction Process</h2>
            <ol className='list'>
              {content}
            </ol>
          </div>

          <div>
            <div className='aside-container'>
              <div className='service-aside'>
                <p className='extra-addons'>Other Correction Pages</p>
                <hr className="contact-border" style={{marginBottom: 16}} />
                <div className="aside-links">
                  <a href="/services/SinglePC" style={{color: href.endsWith('SinglePC') ? 'dodgerblue' : 'white'}} className="service-link">{href.endsWith('SinglePC') ? '> ' : ''} Single Stage Paint Correction</a>
                  <a href="/services/TwoPC" style={{color: href.endsWith('TwoPC') ? 'dodgerblue' : 'white'}} className="service-link">{href.endsWith('TwoPC') ? '> ' : ''} Two Stage Paint Correction</a>
                  <a href="/gallery/PaintCorrectionGallery" className="service-link">Paint Correction Gallery</a>
                </div>
              </div>
            </div>

            <div className='aside-container'>
              <div className='service-aside addons-aside'>
                <a href="/services/Addons" className='extra-addons'>Extra Add-ons</a>
                <hr className="contact-border" style={{marginBottom: 16}} />
                <div className="aside-links">
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/Addons" className='text-blue'>Glass Polishing</a></p>
                    <p className='m-0'><span className="bold special-package">$80</span>/hour</p>
                    <p className="addon-subtext">Gives you crystal clear windows.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div>
          <h3>Our Single Stage Paint Correction Pricing</h3>
          <h4>Our basic prices are shown below. Final pricing may vary based on your vehicle size.</h4>
          <div className="pricing-container">
          <div className="pricing-card">
              <h4 className="size">Small</h4>
              <p className="example-vehicle">(Most Cars and Smaller Trucks)</p>
              <p className="pricing-price">$300 - $450</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">Medium</h4>
              <p className="example-vehicle">(Mid-Size SUV's, and Most Wagons)</p>
              <p className="pricing-price">$450 - $600</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">Large</h4>
              <p className="example-vehicle">(Large SUV's and Large Trucks)</p>
              <p className="pricing-price">$600 - $850</p>
            </div>
          </div>

          <h4>Interested? Get in touch with us here, and let us know what we can do to help you!</h4>
          <a href="/Contact" className="quote-btn main-quote-btn">Contact Us</a>

        </div>
      </div>
    </section>
  )
}
