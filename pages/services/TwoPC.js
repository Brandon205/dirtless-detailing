import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import cover from '../../public/imgs/pageimgs/paintCorrection/IMG_20210517_111523.jpg';

const steps = [
  ["Wash Vehicle", "Thorough strip wash top to bottom using 2 bucket method or equivalent, including gas door."],
  ["Wheel Cleaning", "Clean wheels, wheel wells, wheel barrels."],
  ["Correction Prep - Clay Bar", "Clay bar the entire vehicle to remove contaminants, and leave the paint smooth."],
  ["Correction Prep - Iron Decontamination", "Iron decontamination to get rid of the rest of the embedded iron particles in your paint."],
  ["Remove tar and sap", "Remove any and all tar and sap from the exterior."],
  ["Dry Vehicle", "Dry the whole vehicle with clean towels and air blowers."],
  ["Tape Off Areas", "Tape off trim and sensitive areas (Some detailers skip this step)."],
  ["Paint Correction", "Complete Two Stage paint correction using Griots products removing all scratches and swirls we possibly can while staying safe for vehicle specific clear coat thickness."],
  ["Protect Paint", "Protect paint with ceramic spray or ceramic coating."],
  ["Door Jambs", "Clean door jambs."],
  ["Dress Vehicle", "Dress all plastics, wheel wells, tires."]
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
        </div>
      </li>
    )
  })
  return (
    <section className='service-content-container'>
      <Head>
        <title>Dirt-Less Detailing | Two Stage</title>
      </Head>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="Vehicle after a Two Stage Paint Correction" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>Two Stage Paint Correction</h1>
        <a href="/#contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
      </div>

      <div className='main-content-container'>
        <div className="process-container">
          <div>
            <h2>Our Paint Correction Process</h2>
            <ol className='list'>
              {content}
            </ol>
          </div>

          <div>
            <div className='aside-container'>
              <div className='service-aside'>
                <h3>Other Correction Services</h3>
                <div className="aside-links">
                  <a href="/services/SinglePC" style={{color: href.endsWith('SinglePC') ? 'blue' : 'black'}} className="service-link">{href.endsWith('SinglePC') ? '> ' : ''} Single Stage Paint Correction</a>
                  <a href="/services/TwoPC" style={{color: href.endsWith('TwoPC') ? 'blue' : 'black'}} className="service-link">{href.endsWith('TwoPC') ? '> ' : ''} Two Stage Paint Correction</a>
                </div>
              </div>
            </div>

            <div className='aside-container'>
              <div className='service-aside addons-aside'>
              <h3><a href="/services/Addons" style={{color: 'black'}}>Extra Addons</a></h3>
                <div className="aside-links">
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/Addons/#glass" style={{color: 'blue'}} scroll={el => scrollWithOffset(el)}>Glass Polishing</a> - <span className="bold">$70</span>/hour</p>
                    <p className="subtext">Gives you crystal clear windows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div>
          <h2>Our Pricing</h2>
          <h4>Our basic prices are shown below, final pricing may vary based on your vehicle size.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">Small</h4>
              <p className="example-vehicle">(Most Cars and Smaller Trucks)</p>
              <p className="pricing-price">$450 - $600</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">Medium</h4>
              <p className="example-vehicle">(Mid-Size SUV's, and most Wagons)</p>
              <p className="pricing-price">$600 - $850</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">Large</h4>
              <p className="example-vehicle">(Large SUV's and Large Trucks)</p>
              <p className="pricing-price">$800 - $1,100</p>
            </div>
          </div>

          <h4>Interested? Click "Get Started" in the Navigation to get in touch!</h4>

        </div>
      </div>
    </section>
  )
}
