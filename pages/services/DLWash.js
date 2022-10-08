import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import { scrollWithOffset } from '../helpers/ScrollToTop';

import cover from '../../public/imgs/DLWashCover.webp';

const steps = [
  ["Wash Vehicle", "Thorough 2 bucket or equivalent top to bottom wash including the gas door."],
  ["Wheel Cleaning", "Clean wheels, wheel wells, wheel barrels."],
  ["Dry Vehicle", "Dry the whole vehicle with clean towels and air blowers."],
  ["Wax", "Apply Spray Wax."],
  ["Dress Vehicle", "Dress tires, wheel wells, plastics."],
]

export default function DLWash() {
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
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}></div>
      <h1 className='servicepage-header'>Dirt-Less Wash</h1>

      <div className='main-content-container'>
        <div className="process-container">
          <div>
            <h2>Our Exterior Cleaning Process</h2>
            <ol className='list'>
              {content}
            </ol>
          </div>

          <Link href="/#contact" className="quote-btn service-page-quote-btn">Get Started</Link>

          <div>
            <div className='aside-container'>
              <div className='service-aside'>
                <h3>Other Exterior Services</h3>
                <div className="aside-links">
                  {/* <Link href="/dl-wash" style={{color: href.endsWith('dl-wash') ? 'blue' : 'black'}} className='service-link'>{href.endsWith('dl-wash') ? '> ' : ''} Dirt-Less Wash</Link><br />
                  <Link href="/premium-dl-wash" style={{color: href.endsWith('premium-dl-wash') ? 'blue' : 'black'}} className='service-link'>{href.endsWith('premium-dl-wash') ? '> ' : ''} Premium Dirt-Less Wash</Link><br />
                  <Link href="/engine" style={{color: href.endsWith('engine') ? 'blue' : 'black'}} className={'service-link'}>{href.endsWith('engine') ? '> ' : ''} Single Stage Paint Correction</Link> */}
                </div>
              </div>
            </div>

            <div className='aside-container'>
              <div className='service-aside'>
              <h3><Link href="/addons" style={{color: 'black'}}>Extra Addons</Link></h3>
                <div className="aside-links">
                  <div className="addon-container">
                    <p className='addon-title'><Link href="/addons/#glass" style={{color: 'blue'}}>Glass Polishing</Link> - <span className="bold">$70</span>/hour</p>
                    <p className="subtext">Gives you crystal clear windows</p>
                  </div>
                  <div className="addon-container">
                    <p className='addon-title'><Link href="/addons/#waterspot" style={{color: 'blue'}}>Waterspot/Overspray</Link> - <span className="bold">$60</span>/hour</p>
                    <p className="subtext">Remove Overspray and Waterspots from your vehicle</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div>
          <h2 className='pricing-title'>Our Pricing</h2>
          <h4 className='subtext'>Our basic prices are shown below, final pricing may vary based on your vehicle size.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">Small Vehicles</h4>
              <p className="example-vehicle">(Most Cars and Smaller Trucks)</p>
              <p className="pricing-price">$75</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">Medium</h4>
              <p className="example-vehicle">(Mid-Size SUV's, and Most Wagons)</p>
              <p className="pricing-price">$100</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">Large</h4>
              <p className="example-vehicle">(Large SUV's and Large trucks)</p>
              <p className="pricing-price">$125</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">Extra Large</h4>
              <p className="example-vehicle">(Extra Large Vehicles)</p>
              <p className="pricing-price">$150</p>
            </div>
          </div>

          <h4>Interested? Click "Get Started" on the bottom right of your screen to get in touch!</h4>

        </div>
      </div>
    </section>
  )
}
