import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import cover from '../../public/imgs/FB_IMG_1590172619153.jpg';

const steps = [
  ["Wash Vehicle", "Thorough strip wash top to bottom using 2 bucket method or equivalent, including gas door."],
  ["Wheel Cleaning", "Clean wheels, wheel wells, and wheel barrels."],
  ["Remove tar and sap", "Remove any and all tar and sap from the exterior."],
  ["Correction Prep - Clay Bar", "Clay bar the entire vehicle to remove contaminants and leave the paint smooth."],
  ["Correction Prep - Iron Decontamination", "Iron decontamination to get rid of the rest of the embedded iron particles in your paint."],
  ["Dry Vehicle", "Dry the whole vehicle with clean towels and air blowers."],
  ["Tape Vehicle", "Tape off trim and sensitive areas (some detailers skip this step)."],
  ["Paint Correction", "Complete Single Stage paint correction using Griots products removing 65-80% of scratches and swirls."],
  ["Remove Polishing Compound", "Remove polishing compound residue from cracks, crevices, etc."],
  ["Protect Paint", "Protect paint with ceramic spray or "],
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
          {id === 9 ? <a className='aside-link' href="/services/ExtCoatings">ceramic coating.</a> : ''}
        </div>
      </li>
    )
  })

  return (
    <section className='service-content-container'>
      <Head>
        <title>Single Stage Paint Correction | Dirt-Less Detailing</title>
        <meta property="og:title" content="Single Stage Paint Correction | Dirt-Less Detailing" />
        <meta property="description" content="Our Single Stage Paint Correction should fix most of your Paint Correction needs, leaving your paint nearly scratch free!" />
        <meta property="og:description" content="Our Single Stage Paint Correction should fix most of your Paint Correction needs, leaving your paint nearly scratch free!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dirtlessdetailing.com/services/SinglePC" />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/services/SinglePC" />
      </Head>
      <div className="cover">
        <Image src={cover} alt="Vehicle after a Single Stage Paint Correction" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>Single Stage Paint Correction</h1>
        <h2 className='page-subheading'>Restore your vehicles paint by removing scratches and swirls</h2>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
        <p className='inline text-small'>
          Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
        </p>
      </div>

      <div className='main-content-container'>
        <div className="process-container">
          <div>
            <main className="service-main">
              <h2 className='text-large'>Single Stage Paint Correction</h2>
              <div className="text-left">
                <p>Have you looked at your paint under the sun and saw a web of swirls and scratches?</p>
                <p>These are called swirl marks. How did they get there in the first place? The biggest culprit is usually improper washing and drying methods. Automatic car washes and using low-quality towels or wash mitts can all lead to abrading your paint and leaving imperfections.</p>
                <p>With our <a href='/services/SinglePC' className='aside-link'>Single Stage Paint Correction</a> service, you can remove 60% to 70% of imperfections to reveal a great shine. This is a fantastic service for vehicles that you want to restore their shine without going “all in” like we do with our 2 stage paint correction service.</p>
                <p>Unlike some of our other services that can be done in just a few hours, this service requires more time and better lighting to achieve the proper results. This is why we require you to drop off the vehicle at our <a href='/correction/bonney-lake' className='aside-link'>shop</a> location.</p>
              </div>
            </main>

            <br className='extra-space' />

            <h2 className='cleaning-process-title'>Our Single Stage Paint Correction Process</h2>
            <ol className='list'>
              {content}
            </ol>
          </div>

          <div>
            <div className='aside-container'>
              <div className='service-aside'>
                <p className='extra-addons'>Other Correction Pages</p>
                <hr className="contact-border" style={{ marginBottom: 16 }} />
                <div className="aside-links">
                  <a href="/services/SinglePC" style={{ color: href.endsWith('SinglePC') ? 'dodgerblue' : 'white' }} className="service-link">{href.endsWith('SinglePC') ? '> ' : ''} Single Stage Paint Correction</a>
                  <a href="/services/TwoPC" style={{ color: href.endsWith('TwoPC') ? 'dodgerblue' : 'white' }} className="service-link">{href.endsWith('TwoPC') ? '> ' : ''} Two Stage Paint Correction</a>
                  <a href="/gallery/PaintCorrectionGallery" className="service-link">Paint Correction Gallery</a>
                </div>
              </div>
            </div>

            <div className='aside-container'>
              <div className='service-aside addons-aside'>
                <a href="/services/Addons" className='extra-addons'>Extra Add-ons</a>
                <hr className="contact-border" style={{ marginBottom: 16 }} />
                <div className="aside-links">
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/Addons/#glass" className='text-blue'>Glass Polishing</a></p>
                    <p className='m-0'><span className="bold special-package">$80</span>/hour</p>
                    <p className="addon-subtext">Gives you crystal clear windows.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div>
          <h3 className='pricing-title'>Our Single Stage Paint Correction Pricing</h3>
          <h4 className='pricing-subtext'>*Final pricing may vary based on your vehicle condition and size.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <strong className='size'>Small</strong>
              <p className="pricing-price pricing-border">$300- $450</p>
              <p className="example-vehicle pricing-border">Smaller Trucks</p>
              <p className="example-vehicle pricing-border">Most Cars</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
            <div className="pricing-card">
              <strong className='size'>Medium</strong>
              <p className="pricing-price pricing-border">$450- $600</p>
              <p className="example-vehicle pricing-border">Mid-Size SUV's</p>
              <p className="example-vehicle pricing-border">Most Wagons</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
            <div className="pricing-card">
              <strong className='size'>Large</strong>
              <p className="pricing-price pricing-border">$600- $850</p>
              <p className="example-vehicle pricing-border">Large SUV's</p>
              <p className="example-vehicle pricing-border">Trucks</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
