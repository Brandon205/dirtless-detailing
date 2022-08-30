import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import cover from '../../assets/imgs/fullIntExCover.jpg';

const steps = [
  ["Wash Vehicle", "Thorough strip wash top to bottom using 2 bucket method or foam wash, including gas door."],
  ["Wheel Cleaing", "Clean wheels, wheel wells, wheel barrels."],
  ["Correction Prep - Clay Bar", "Clay bar the entire vehicle to remove contaminants, and leave the paint smooth."],
  ["Correction Prep - Iron Decontamination", "Iron decontamination to get rid of the rest of the embeded particles in your paint."],
  ["Dry Vehicle", "Dry the whole vehicle with clean towels and air blowers."],
  ["Tape Off Areas", "Tape off trim and sensitive areas (Some detailers skip this step)."],
  ["Paint Correction", "Complete Two Stage paint correction using Griots products removing all scratches and swirls we possibly can while staying safe for clear coat thickness."],
  ["Protect Paint", "Protect paint with ceramic spray or coating."],
  ["Door Jambs", "Clean door jambs."],
  ["Dress Vehicle", "Dress all plastics, wheel wells, tires."]
]

export default function TwoPC() {
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
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}></div>
      <h1 className='servicepage-header'>Two Stage Paint Correction</h1>

      <div className='main-content-container'>
        <div className="process-container">
          <div>
            <h2>Our Paint Correction Process</h2>
            <ol className='list'>
              {content}
            </ol>
          </div>

          <div className='aside-container'>
            <div className='service-aside'>
              <h3>Other Correction Services</h3>
              <div className="aside-links">
                <Link to="/single-paint-correction" style={{color: window.location.href.endsWith('single-paint-correction') ? 'blue' : 'black'}} className='service-link'>{window.location.href.endsWith('single-paint-correction') ? '> ' : ''} Single Stage Paint Correction</Link><br />
                <Link to="/two-paint-correction" style={{color: window.location.href.endsWith('two-paint-correction') ? 'blue' : 'black'}} className='service-link'>{window.location.href.endsWith('two-paint-correction') ? '> ' : ''} Two Stage Paint Correction</Link><br />
                <Link to="/glass" style={{color: window.location.href.endsWith('glass') ? 'blue' : 'black'}} className={'service-link'}>{window.location.href.endsWith('glass') ? '> ' : ''} Glass Polishing</Link>
                <Link to="/waterspot" style={{color: window.location.href.endsWith('waterspot') ? 'blue' : 'black'}} className={'service-link'}>{window.location.href.endsWith('waterspot') ? '> ' : ''} Overspray/Waterspot</Link>
              </div>
            </div>
            <HashLink smooth to="/#contact" className="quote-btn top-quote-btn service-page-quote-btn">Contact Us</HashLink>
          </div>
        </div>

        <div>
          <h2>Two Stage Paint Correction Pricing</h2>
          <h4>Our basic prices are shown below, actual prices will be based on your vehicle size.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">Small</h4>
              <p className="example-vehicle">Small cars and mini trucks</p>
              <p className="pricing-price">$450-600</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">Medium</h4>
              <p className="example-vehicle">Mid size SUV's, and most Wagons</p>
              <p className="pricing-price">$600-$850</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">Large</h4>
              <p className="example-vehicle">Big SUV's and Big trucks</p>
              <p className="pricing-price">$800-$1,100</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
