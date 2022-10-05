import React from 'react';
import Link from 'next/link';
import { HashLink } from 'react-router-hash-link';
import { scrollWithOffset } from '../../src/components/helpers/ScrollToTop';

import cover from '../../assets/imgs/EngineCover.webp';

const steps = [
  ["Preemptive Measures", "Cover all sensitive areas, like air intakes, and any exposed electronics."],
  ["Initial Wash", "Steam clean, degrease, and use specialized brushes to get in every crack and crevice."],
  ["Dry", "Dry with air blowers and towels."],
  ["Dress Engine Bay", "Dress with water based dressing."]
]

export default function Engine() {
  const content = steps.map((item, id) => {
    return (
      <li key={id} className="item">
        <div className="step-number-container">
          <h3 className='step-number'>{id + 1}</h3><div className="vertical-rule"></div>        </div>
        <div className="step-container">
          <h4 className="step-title">{item[0]}</h4>
          <p className='step-desc'>{item[1]}</p>
        </div>
      </li>
    )
  })
  return (
    <section className='service-content-container'>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}></div>
      <h1 className='servicepage-header'>Engine Bay Cleaning</h1>

      <div className='main-content-container'>
        <div className="process-container">
          <div>
            <h2>Our Engine Bay Cleaning Process</h2>
            <ol className='list'>
              {content}
            </ol>
          </div>

          <HashLink smooth href="/#contact" className="quote-btn service-page-quote-btn" scroll={el => scrollWithOffset(el)}>Get Started</HashLink>

          <div className='aside-container'>
            <div className='service-aside'>
              <h3>Other Exterior Services</h3>
              <div className="aside-links">
                <Link href="/dl-wash" style={{color: window.location.href.endsWith('dl-wash') ? 'blue' : 'black'}} className='service-link'>{window.location.href.endsWith('dl-wash') ? '> ' : ''} Dirt-Less Wash</Link><br />
                <Link href="/premium-dl-wash" style={{color: window.location.href.endsWith('premium-dl-wash') ? 'blue' : 'black'}} className='service-link'>{window.location.href.endsWith('premium-dl-wash') ? '> ' : ''} Premium Dirt-Less Wash</Link><br />
                <Link href="/engine" style={{color: window.location.href.endsWith('engine') ? 'blue' : 'black'}} className={'service-link'}>{window.location.href.endsWith('engine') ? '> ' : ''} Engine Bay</Link>
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
