import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import cover from '../../public/imgs/EngineCover.webp';

const steps = [
  ["Preemptive Measures", "Cover all sensitive areas, like air intakes, and any exposed electronics."],
  ["Initial Wash", "Steam clean, degrease, and use specialized brushes to get in every crack and crevice."],
  ["Dry", "Dry with air blowers and towels."],
  ["Dress Engine Bay", "Dress with water based dressing."]
]

export default function Engine() {
  const [href, setHref] = useState('');

  useEffect(() => {
    setHref(window.location.href)
  }, [])
  
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
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="Engine cleaning cover" layout="fill" objectFit='cover' priority />
      </div>
      <h1 className='servicepage-header'>Engine Bay Cleaning</h1>

      <div className='main-content-container'>
        <div className="process-container">
          <div>
            <h2>Our Engine Bay Cleaning Process</h2>
            <ol className='list'>
              {content}
            </ol>
          </div>

          <div className='aside-container'>
            <div className='service-aside'>
              <h3>Other Exterior Services</h3>
              <div className="aside-links">
                <a href="/services/DLWash" style={{color: href.endsWith('DLWash') ? 'blue' : 'black'}} className="service-link">{href.endsWith('DLWash') ? '> ' : ''} Dirt-Less Wash</a>
                <a href="/services/PDLWash" style={{color: href.endsWith('PDLWash') ? 'blue' : 'black'}} className="service-link">{href.endsWith('PDLWash') ? '> ' : ''} Premium Dirt-Less Wash</a>
                <a href="/services/Engine" style={{color: href.endsWith('Engine') ? 'blue' : 'black'}} className="service-link">{href.endsWith('Engine') ? '> ' : ''} Engine Bay Cleaning</a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2>Our Pricing</h2>
          <h4>Our simple price for this service is shown below.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">All Vehicles</h4>
              <p className="example-vehicle">(Any Size)</p>
              <p className="pricing-price">$80</p>
            </div>
          </div>

          <h4>Interested? Click "Get Started" on the bottom right of your screen to get in touch!</h4>

        </div>
      </div>
    </section>
  )
}
