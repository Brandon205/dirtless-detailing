import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { scrollWithOffset } from '../helpers/ScrollToTop';

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

          <HashLink smooth to="/#contact" className="quote-btn service-page-quote-btn" scroll={el => scrollWithOffset(el)}>Get Started</HashLink>

          <div className='aside-container'>
            <div className='service-aside'>
              <h3>Other Exterior Services</h3>
              <div className="aside-links">
                <Link to="/dl-wash" style={{color: window.location.href.endsWith('dl-wash') ? 'blue' : 'black'}} className='service-link'>{window.location.href.endsWith('dl-wash') ? '> ' : ''} Dirt-Less Wash</Link><br />
                <Link to="/premium-dl-wash" style={{color: window.location.href.endsWith('premium-dl-wash') ? 'blue' : 'black'}} className='service-link'>{window.location.href.endsWith('premium-dl-wash') ? '> ' : ''} Premium Dirt-Less Wash</Link><br />
                <Link to="/engine" style={{color: window.location.href.endsWith('engine') ? 'blue' : 'black'}} className={'service-link'}>{window.location.href.endsWith('engine') ? '> ' : ''} Engine Bay</Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2>PRICING</h2>
          <h4>Our basic prices for this service are shown below</h4>
          <div className="pricing-container">
            <div className="pricing-card large-card">
              <p className="example-vehicle small-card-text">ANY SIZE VEHICLE</p>
              <p className="pricing-price small-card-text">$80</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
