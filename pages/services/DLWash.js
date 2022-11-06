import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import cover from '../../public/imgs/pageimgs/exterior/IMG_20221007_130059.jpg';

const steps = [
  ["Wash Vehicle", "Thorough 2 bucket or equivalent top to bottom wash including the gas door."],
  ["Wheel Cleaning", "Clean wheels, wheel wells, wheel barrels."],
  ["Dry Vehicle", "Dry the whole vehicle with clean towels and air blowers."],
  ["Wax", "Apply Spray Wax."],
  ["Dress Vehicle", "Dress tires, wheel wells, plastics."]
]

export default function DLWash() {
  const [href, setHref] = useState('');

  useEffect(() => {
    setHref(window.location.href)
  }, []);

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
      <Head>
        <title>Dirt-Less Detailing | Dirt-Less Wash</title>
        <meta name="description" content="The Dirt-Less Wash is our base tier exterior cleaning service, complete with a spray wax to protect your vehicle." />\
        <link rel="canonical" href="https://dirtless-detailing.vercel.app/services/DLWash" />
      </Head>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="Vehicle after a Dirt-Less Wash" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>Dirt-Less Wash</h1>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
      </div>

      <div className='main-content-container'>
        <div className="process-container">
          <div>
            <h2>Our Exterior Cleaning Process*</h2>
            <ol className='list'>
              {content}
            </ol>
          </div>

          <div>
            <div className='aside-container'>
              <div className='service-aside'>
                <h3>Other Exterior Services</h3>
                <div className="aside-links">
                  <a href="/services/DLWash" style={{color: href.endsWith('DLWash') ? 'blue' : 'black'}} className="service-link">{href.endsWith('DLWash') ? '> ' : ''} Dirt-Less Wash</a>
                  <a href="/services/PDLWash" style={{color: href.endsWith('PDLWash') ? 'blue' : 'black'}} className="service-link">{href.endsWith('PDLWash') ? '> ' : ''} Premium Dirt-Less Wash</a>
                  <a href="/services/Engine" style={{color: href.endsWith('Engine') ? 'blue' : 'black'}} className="service-link">{href.endsWith('Engine') ? '> ' : ''} Engine Bay Cleaning</a>                </div>
              </div>
            </div>

            <div className='aside-container'>
              <div className='service-aside addons-aside'>
              <h3><a href="/services/Addons" style={{color: 'black'}}>Extra Addons</a></h3>
                <div className="aside-links">
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/Addons" style={{color: 'blue'}}>Glass Polishing</a> - <span className="bold">$70</span>/hour</p>
                    <p className="subtext">Gives you crystal clear windows</p>
                  </div>
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/Addons" style={{color: 'blue'}}>Waterspot/Overspray</a> - <span className="bold">$60</span>/hour</p>
                    <p className="subtext">Remove Overspray and Waterspots from your vehicle</p>
                  </div>
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/Addons" style={{color: 'blue'}}>Truck Bed Cleaning</a> - <span className="bold">$25</span></p>
                    <p className="subtext">Addon to get your truck bed cleaned.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div>
          <h3 className='pricing-title'>Our Dirt-Less Wash Pricing</h3>
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

          <h4>Interested? Click "Get Started" in the Navigation to get in touch!</h4>

        </div>
      </div>
    </section>
  )
}
