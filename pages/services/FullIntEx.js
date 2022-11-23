import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import cover from '../../public/imgs/pageimgs/interior/fullIntExCover.webp';

const steps = [
  ["Expose Hidden Dirt", "Use our Tornador Vortex blowgun which uses compressed air to blow out every spot a vacuum can't reach. It also extracts sand and loose soil from carpeting."],
  ["Hot Water Extraction", "We use a professional hot water extractor and professional flex stain remover and alkaline floor rinse to keep floors at a neutral PH level. We will be sure to get all carpets, floor mats, and cloth seats."],
  ["Vacuum Vehicle", "Thoroughly vacuum every crack and crevice of the vehicle."],
  ["Clean Plastics and Leathers", "Clean, steam, and degrease all plastics and leather seats."],
  ["Dress Interior", "Dress all vinyl and leather (if requested)."],
  ["Door Jambs", "Clean all of the door jambs."],
  ["Window Cleaning", "Clean windows."]
]

export default function FullIntEx() {
  const [href, setHref] = useState('');

  useEffect(() => {
    setHref(window.location.href)
  }, []);

  const content = steps.map((item, id) => {
    return (
      <li key={id} className="item">
        <div className='step-number-container'>
          <h3 className='step-number'>{id + 1}</h3><div className="vertical-rule"></div>
        </div>
        <div className='step-container'>
          <h4 className="step-title">{item[0]}{id === 1 ? <span className='special-package'>*</span> : ""}</h4>
          <p className='step-desc'>{item[1]}</p>
        </div>
      </li>
    )
  })

  return (
    <section className='service-content-container'>
      <Head>
        <title>Dirt-Less Detailing | Full Interior</title>
        <meta property="og:description" content="The Full Interior cleaning is our most sought after service, and for good reason, it will completely renew your cars interior!" />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/services/FullIntEx" />
      </Head>
      <div className="cover">
        <Image src={cover} alt="Vehicle after a Full Interior Cleaning" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>Full Interior Cleaning</h1>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
      </div>

      <div className='main-content-container'>
        <div className='process-container'>
          <div>
            <h2 className='cleaning-process-title'>Our Interior Cleaning Process*</h2>
            <ol className='list'>
              {content}
            </ol>
            <p style={{marginTop: 0}}>*Headliners offered as an add-on</p>
            <p><span className='special-package'>*Extraction</span> Package Only</p>
          </div>

          <div className='aside-container'>
            <div className='service-aside'>
              <p className='extra-addons'>Other Interior Pages</p>
              <hr className="contact-border" style={{marginBottom: 16}} />
              <div className="aside-links">
                <a href="/services/FullIntEx" style={{color: href.endsWith('FullIntEx') ? 'dodgerblue' : 'white'}} className="service-link">{href.endsWith('FullIntEx') ? '> ' : ''} Full Interior Cleaning</a>
                <a href="/services/Bio" style={{color: href.endsWith('Bio') ? 'dodgerblue' : 'white'}} className="service-link">{href.endsWith('Bio') ? '> ' : ''} Biohazard Cleaning</a>
                <a href="/gallery/FullIntGallery" className="service-link">Full Interior Gallery</a>
              </div>
            </div>

          <div className='aside-container'>
            <div className='service-aside addons-aside'>
              <a href="/services/Addons" className='extra-addons'>Extra Add-ons</a>
              <hr className="contact-border" style={{marginBottom: 16}} />
              <div className="aside-links">
                <div className="addon-container">
                  <p className='addon-title'><a href="/services/Addons" className='text-blue'>Ozone Treatment</a></p>
                  <p className='m-0'><span className="bold special-package">$100</span></p>
                  <p className="addon-subtext">Treats your vehicle to get rid of any viruses, bacteria, and odors</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

        <div className="combo-container">
          <h3>Get a <span className='special-package'>FREE</span> Engine cleaning!</h3>
          <p className="subtext">Check out our Current <a className='aside-link' href="/services/Combo">Combo</a> deal that combines this Full Interior Cleaning, our <a className='aside-link' href="/services/PDLWash">Premium Dirt-Less Wash</a>, and gives you an Engine Bay Cleaning totally on us!  </p>
        </div>

        <div>
          <h3 className='pricing-title'>Our Full Interior Cleaning Pricing</h3>
          <h4 className='subtext'>*Final pricing may vary based on vehicle size/condition*</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">SMALL</h4>
              <p className="example-vehicle">(2 Door Coupes, Single and Extended Cabs)</p>
              <div className='fullInt-pricing-container'>
                <div className='pricing-outline'>
                  <p className='white-text'>No Extraction</p>
                  <p className="pricing-price">$200</p>
                </div>
                <div className='pricing-outline'>
                  <p className='white-text'>With <span className="special-package">Extraction</span></p>
                  <p className="pricing-price">$250</p>
                </div>
              </div>
            </div>
            <div className="pricing-card">
              <h4 className="size">MEDIUM</h4>
              <p className="example-vehicle">(4 Door Sedans, 4 Door Trucks, Smaller SUV's)</p>
              <div className='fullInt-pricing-container'>
                <div className='pricing-outline'>
                  <p className='white-text'>No Extraction</p>
                  <p className="pricing-price">$250</p>
                </div>
                <div className='pricing-outline'>
                  <p className='white-text'>With <span className="special-package">Extraction</span></p>
                  <p className="pricing-price">$300</p>
                </div>
              </div>
            </div>
            <div className="pricing-card">
              <h4 className="size">LARGE</h4>
              <p className="example-vehicle">(All Large SUV's and any 3 Row SUV's)</p>
              <div className='fullInt-pricing-container'>
                <div className='pricing-outline'>
                  <p className='white-text'>No Extraction</p>
                  <p className="pricing-price">$300</p>
                </div>
                <div className='pricing-outline'>
                  <p className='white-text'>With <span className="special-package">Extraction</span></p>
                  <p className="pricing-price">$350</p>
                </div>
              </div>
            </div>
          </div>

          <h4>Interested? Get in touch with us here, and let us know what we can do to help you!</h4>
          <a href="/Contact" className="quote-btn main-quote-btn">Contact Us</a>
          
        </div>
      </div>
    </section>
  )
}
