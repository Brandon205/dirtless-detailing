import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { scrollWithOffset } from '../helpers/ScrollToTop';

import cover from '../../assets/imgs/2PCCover.jpg';

const steps = [
  ["Wash Vehicle", "Thorough strip wash top to bottom using 2 bucket method or equivalent, including gas door."],
  ["Wheel Cleaing", "Clean wheels, wheel wells, wheel barrels."],
  ["Correction Prep - Clay Bar", "Clay bar the entire vehicle to remove contaminants, and leave the paint smooth."],
  ["Correction Prep - Iron Decontamination", "Iron decontamination to get rid of the rest of the embeded iron particles in your paint."],
  ["Remove tar and sap", "Remove any and all tar and sap from the exterior."],
  ["Dry Vehicle", "Dry the whole vehicle with clean towels and air blowers."],
  ["Tape Off Areas", "Tape off trim and sensitive areas (Some detailers skip this step)."],
  ["Paint Correction", "Complete Two Stage paint correction using Griots products removing all scratches and swirls we possibly can while staying safe for vehicle specific clear coat thickness."],
  ["Protect Paint", "Protect paint with ceramic spray or ceramic coating."],
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

          <HashLink smooth to="/#contact" className="quote-btn service-page-quote-btn" scroll={el => scrollWithOffset(el)}>Get Started</HashLink>

          <div>
            <div className='aside-container'>
              <div className='service-aside'>
                <h3>Other Correction Services</h3>
                <div className="aside-links">
                  <Link to="/single-paint-correction" style={{color: window.location.href.endsWith('single-paint-correction') ? 'blue' : 'black'}} className='service-link'>{window.location.href.endsWith('single-paint-correction') ? '> ' : ''} Single Stage Paint Correction</Link><br />
                  <Link to="/two-paint-correction" style={{color: window.location.href.endsWith('two-paint-correction') ? 'blue' : 'black'}} className='service-link'>{window.location.href.endsWith('two-paint-correction') ? '> ' : ''} Two Stage Paint Correction</Link><br />
                </div>
              </div>
            </div>

            <div className='aside-container'>
              <div className='service-aside'>
                <h3>Extra Addons</h3>
                <div className="aside-links">
                  <div className="addon-container">
                    <p className='addon-title'>Glass Polishing - <span className="bold">$70</span>/hour</p>
                    <p className="subtext">We'll give you crystal clear windows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div>
          <h2>PRICING</h2>
          <h4>Our basic prices are shown below, actual prices will be based on your vehicle size.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">SMALL</h4>
              <p className="example-vehicle">Small cars and mini trucks</p>
              <p className="pricing-price">$450-600</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">MEDIUM</h4>
              <p className="example-vehicle">Mid size SUV's, and most Wagons</p>
              <p className="pricing-price">$600-$850</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">LARGE</h4>
              <p className="example-vehicle">Big SUV's and Big trucks</p>
              <p className="pricing-price">$800-$1,100</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
