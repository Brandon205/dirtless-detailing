import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import cover from '../../public/imgs/PDLWashCover.webp';

const steps = [
  ["Wash Vehicle", "Thorough strip wash top to bottom including the gas door with the 2 bucket method or equivalent."],
  ["Wheel Cleaning", "Clean wheels, wheel wells, wheel barrels."],
  ["Wax Prep - Clay Bar", "Clay bar the whole vehicle so sealant properly adheres and paint is smooth."],
  ["Wax Prep - Iron Decontamination", "Iron Decontamination to make sure all microscopic iron contaminants are off of the paint, these are things that the clay bar won't get, this improves wax adhesion as well."],
  ["Remove tar and sap", "Remove any and all tar and sap from the exterior."],
  ["Dry Vehicle", "Dry the whole vehicle with clean towels and Air blowers."],
  ["Wax On", "Apply 6 month or more sealant."],
  ["Door Jambs", "Clean Door Jambs."],
  ["Dress Vehicle", "Dress all plastics, wheel wells, tires."]
]

export default function PDLWash() {
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
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="Premium Dirt-Less wash cover" layout="fill" objectFit='cover' />
      </div>
      <h1 className='servicepage-header'>Premium Dirt-Less Wash</h1>

      <div className='main-content-container'>
        <div className="process-container">
          <div>
            <h2>Our Exterior Cleaning Process</h2>
            <ol className='list'>
              {content}
            </ol>
          </div>

          <a href="/#contact" className="quote-btn service-page-quote-btn">Get Started</a>

          <div>
            <div className='aside-container'>
              <div className='service-aside'>
                <h3>Other Exterior Services</h3>
                <div className="aside-links">
                  <a href="/services/DLWash" style={{color: href.endsWith('/DLWash') ? 'blue' : 'black'}} className="service-link">{href.endsWith('/DLWash') ? '> ' : ''} Dirt-Less Wash</a>
                  <a href="/services/PDLWash" style={{color: href.endsWith('PDLWash') ? 'blue' : 'black'}} className="service-link">{href.endsWith('PDLWash') ? '> ' : ''} Premium Dirt-Less Wash</a>
                  <a href="/services/Engine" style={{color: href.endsWith('Engine') ? 'blue' : 'black'}} className="service-link">{href.endsWith('Engine') ? '> ' : ''} Engine Bay Cleaning</a>
                </div>
              </div>
            </div>

            <div className='aside-container'>
              <div className='service-aside'>
              <h3><a href="/addons" style={{color: 'black'}}>Extra Addons</a></h3>
                <div className="aside-links"> 
                  <div className="addon-container">
                    <p className='addon-title'><a href="/addons/#glass" style={{color: 'blue'}}>Glass Polishing</a> - <span className="bold">$70</span>/hour</p>
                    <p className="subtext">Gives you crystal clear windows</p>
                  </div>
                  <div className="addon-container">
                    <p className='addon-title'><a href="/addons/#waterspot" style={{color: 'blue'}}>Waterspot/Overspray</a> - <span className="bold">$60</span>/hour</p>
                    <p className="subtext">Remove Overspray and Waterspots from your vehicle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="combo-container">
          <h2>Get a <span className='special-package'>free</span> Engine cleaning!</h2>
          <p className="subtext">When you book this Premium Exterior Cleaning and a <a href="/services/FullIntEx">Full Interior Cleaning</a> together we will clean out your engine bay at no extra cost. (Click the Get Started button below to begin).</p>
        </div>

        <div>
          <h2>Our Pricing</h2>
          <h4>Our basic prices are shown below, final pricing may vary based on your vehicle size.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">Small</h4>
              <p className="example-vehicle">(Most Cars and Smaller Trucks)</p>
              <p className="pricing-price">$150</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">Medium</h4>
              <p className="example-vehicle">(Mid-Size SUV's, and Most Wagons)</p>
              <p className="pricing-price">$200</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">Large</h4>
              <p className="example-vehicle">(Large SUV's and Large trucks)</p>
              <p className="pricing-price">$250</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">Extra Large</h4>
              <p className="example-vehicle">(Extra Large Vehicles)</p>
              <p className="pricing-price">$275</p>
            </div>
          </div>

          <h4>Interested? Click "Get Started" on the bottom right of your screen to get in touch!</h4>

        </div>
      </div>
    </section>
  )
}
