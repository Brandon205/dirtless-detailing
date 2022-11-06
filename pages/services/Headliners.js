import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import cover from '../../public/imgs/pageimgs/addons/headlinersCover.webp';

const steps = [
  ["Determine Method", "We have an array of gentle products available, the materials of your headliner will tell us what to use."],
  ["Clean Headliners", "We will perform the cleaning methods found from the first step, we do this to prevent sagging and damage to the headliners (Results may vary)."]
]

export default function Headliners() {
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
      <Head>
        <title>Dirt-Less Detailing | Headliners</title>
        <meta name="description" content="Dirty or stained headliners? We are here to help with plenty of solutions to best suit your headliners needs." />
        <link rel="canonical" href="https://dirtless-detailing.vercel.app/services/Headliners" />
      </Head>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="Clean headliners" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>Headliners</h1>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
      </div>

      <div className='main-content-container'>
        <div className="process-container">
          <div>
            <h2>Our Headliner Cleaning Process</h2>
            <ol className='list'>
              {content}
            </ol>
          </div>

          <div className='aside-container'>
            <div className='service-aside'>
              <h3>Our Other Interior Services</h3>
              <div className="aside-links">
                <a href="/services/FullIntEx" style={{color: href.endsWith('FullIntEx') ? 'blue' : 'black'}} className="service-link">{href.endsWith('FullIntEx') ? '> ' : ''} Full Interior Cleaning</a>
                <a href="/services/Bio" style={{color: href.endsWith('Bio') ? 'blue' : 'black'}} className="service-link">{href.endsWith('Bio') ? '> ' : ''} Biohazard Cleaning</a>
                <a href="/services/Headliners" style={{color: href.endsWith('Headliners') ? 'blue' : 'black'}} className="service-link">{href.endsWith('Headliners') ? '> ' : ''} Headliners</a>
              </div>
            </div>

            <div className='aside-container'>
              <div className='service-aside addons-aside'>
              <h3><a href="/services/Addons" style={{color: 'black'}}>Extra Addons</a></h3>
                <div className="aside-links">
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/Addons" style={{color: 'blue'}}>Ozone Treatment</a> - <span className="bold">$100</span></p>
                    <p className="subtext">Treats your vehicle to get rid of any viruses, bacteria, and odors</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div>
          <h2>Our Pricing</h2>
          <h4>Our basic prices are shown below, final pricing may vary based on your vehicle size.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">All Vehicles</h4>
              <p className="example-vehicle">(Any Size)</p>
              <p className="pricing-price">$40 - $80</p>
            </div>
          </div>

          <h4>Interested? Click "Get Started" in the Navigation to get in touch!</h4>

        </div>
      </div>
    </section>
  )
}
