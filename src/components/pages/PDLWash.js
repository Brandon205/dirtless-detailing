import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { scrollWithOffset } from '../helpers/ScrollToTop';

import cover from '../../assets/imgs/PDLWashCover.jpg';

const steps = [
  ["Wash Vehicle", "Thorough strip wash top to bottom including the gas door with the 2 bucket method or equivalent."],
  ["Wheel Cleaning", "Clean wheels, wheel wells, wheel barrels."],
  ["Wax Prep - Clay Bar", "Clay bar the whole vehicle so sealent properly adheres and paint is smooth."],
  ["Wax Prep - Iron Decontamination", "Iron Decontamination to make sure all microscopic iron contaminents are off of the paint, these are things that the clay bar won't get, this improves wax adhesion as well."],
  ["Remove tar and sap", "Remove any and all tar and sap from the exterior."],
  ["Dry Vehicle", "Dry the whole vehicle with clean towels and Air blowers."],
  ["Wax On", "Apply 6 month or more sealant."],
  ["Door Jambs", "Clean Door Jambs."],
  ["Dress Vehicle", "Dress all plastics, wheel wells, tires."]
]

export default function PDLWash() {
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
      <h1 className='servicepage-header'>Premium Dirt-Less Wash</h1>

      <div className='main-content-container'>
        <div className="process-container">
          <div>
            <h2>Our Exterior Cleaning Process</h2>
            <ol className='list'>
              {content}
            </ol>
          </div>

          <HashLink smooth to="/#contact" className="quote-btn service-page-quote-btn" scroll={el => scrollWithOffset(el)}>Get Started</HashLink>

          <div>
            <div className='aside-container'>
              <div className='service-aside'>
                <h3>Other Exterior Services</h3>
                <div className="aside-links">
                  <Link to="/dl-wash" style={{color: window.location.href.endsWith('/dl-wash') ? 'blue' : 'black'}} className='service-link'>{window.location.href.endsWith('/dl-wash') ? '> ' : ''} Dirt-Less Wash</Link><br />
                  <Link to="/premium-dl-wash" style={{color: window.location.href.endsWith('premium-dl-wash') ? 'blue' : 'black'}} className='service-link'>{window.location.href.endsWith('premium-dl-wash') ? '> ' : ''} Premium Dirt-Less Wash</Link><br />
                  <Link to="/engine" style={{color: window.location.href.endsWith('engine') ? 'blue' : 'black'}} className={'service-link'}>{window.location.href.endsWith('engine') ? '> ' : ''} Engine Bay Cleaning</Link>
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
                  <div className="addon-container">
                    <p className='addon-title'>Waterspot/Overspray Removal - <span className="bold">$60</span>/hour</p>
                    <p className="subtext">We'll remove overspray and waterspots from your vehicle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div>
          <h2>Premium Dirt-Less Wash Pricing</h2>
          <h4>Our basic prices are shown below, actual prices will be based on your vehicle size.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">SMALL</h4>
              <p className="example-vehicle">Small cars and mini trucks</p>
              <p className="pricing-price">$150</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">MEDIUM</h4>
              <p className="example-vehicle">Mid size SUV's, and most Wagons</p>
              <p className="pricing-price">$200</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">LARGE</h4>
              <p className="example-vehicle">Big SUV's and Big trucks</p>
              <p className="pricing-price">$250</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">EXTRA LARGE</h4>
              <p className="example-vehicle">Massive trucks and above</p>
              <p className="pricing-price">$275</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
