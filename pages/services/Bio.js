import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import cover from '../../public/imgs/BioCover.webp';

const steps = [
  ["Determine Products", "We will first determine what products will need to be used to best suit the situation."],
  ["Disinfect", "Fully disinfect every single surface in the vehicle before we even get started."],
  ["Full Interior Cleaning", "Then we will perform our Full Interior Cleaning Process on the vehicle."],
  ["Ozone Treatment", "Then we will perform Ozone Air treatment to fill all bacteria, mold spores, and get rid of smells where it's impossible to get to conventionally."]
]

export default function Bio() {
  const [href, setHref] = useState('');

  useEffect(() => {
    setHref(window.location.href)
  }, [])

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
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="biohazard cleaning cover" layout="fill" objectFit='cover' />
      </div>
      <h1 className='servicepage-header'>Smoke/Biohazard/Odor Removal</h1>

      <div className='main-content-container'>
        <div className='process-container'>
          <div>
            <h2>Our Biohazard Cleaning Process</h2>
            <ol className='list'>
              {content}
            </ol>
          </div>
          
          <a href="/#contact" className="quote-btn service-page-quote-btn">Get Started</a>

          <div className='aside-container'>
            <div className='service-aside'>
              <h3>Other Interior Services</h3>
              <div className="aside-links">
                <a href="/services/FullIntEx" style={{color: href.endsWith('FullIntEx') ? 'blue' : 'black'}} className="service-link">{href.endsWith('FullIntEx') ? '> ' : ''} Full Interior Cleaning</a>
                <a href="/services/Bio" style={{color: href.endsWith('Bio') ? 'blue' : 'black'}} className="service-link">{href.endsWith('Bio') ? '> ' : ''} Biohazard Cleaning</a>
                <a href="/services/Headliners" style={{color: href.endsWith('Headliners') ? 'blue' : 'black'}} className="service-link">{href.endsWith('Headliners') ? '> ' : ''} Headliners</a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className='pricing-title'>Our Pricing</h2>
          <h4 className='subtext'>Our basic prices are shown below, final pricing may vary based on your vehicle size and condition.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
            <h4 className="size">All Vehicles</h4>
              <p className="example-vehicle">(Any Size)</p>
              <p className="pricing-price">$400-$800</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
