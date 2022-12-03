import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import cover from '../../public/imgs/pageimgs/interior/fullIntExCover.webp';

const steps = [
  ["Expose Hidden Dirt", "Use our Tornador Vortex blowgun which uses compressed air to blow out every spot a vacuum can't reach. It also extracts sand and loose soil from carpeting."],
  ["Vacuum Vehicle", "Thoroughly vacuum every crack and crevice of the vehicle."],
  ["Hot Water Extraction", "We use a professional hot water extractor and professional flex stain remover and alkaline floor rinse to keep floors at a neutral PH level. We will be sure to get all carpets, floor mats, and cloth seats."],
  ["Clean Plastics and Leathers", "Clean, steam, and degrease all plastics and leather seats."],
  ["Dress Interior", "Dress or "],
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
          <h4 className="step-title">{item[0]}{id === 2 ? <span className='special-package'>*</span> : ""}</h4>
          <p className='step-desc'>{item[1]}</p>
          {id === 4 ? <a className='aside-link' href="/services/IntCoatings">coat interior.</a> : ''}
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
            <p style={{marginTop: 0}}>*Headliners offered as a separate add-on</p>
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
                  <p className='addon-title'><a href="/services/Addons" className='text-blue'>Fabric Coating</a></p>
                  <p className='m-0'><span className="bold special-package">$75</span></p>
                  <p className="addon-subtext">The best protection for the fabric inside of your vehicle.</p>
                </div>
                <hr className='aside-border' />
                <div className="addon-container">
                  <p className='addon-title'><a href="/services/Addons" className='text-blue'>Leather Coating</a></p>
                  <p className='m-0'><span className="bold special-package">$150</span></p>
                  <p className="addon-subtext">The longest lasting protection for your vehicles leather.</p>
                </div>
                <hr className='aside-border' />
                <div className="addon-container">
                  <p className='addon-title'><a href="/services/Addons" className='text-blue'>Headliners</a></p>
                  <p className='m-0'><span className="bold special-package">$40-$80</span>/hour</p>
                  <p className="addon-subtext">Clean your vehicles headliners.</p>
                </div>
                <hr className='aside-border' />
                <div className="addon-container">
                  <p className='addon-title'><a href="/services/Addons" className='text-blue'>Ozone Treatment</a></p>
                  <p className='m-0'><span className="bold special-package">$100</span></p>
                  <p className="addon-subtext">Treats your vehicle to get rid of any viruses, bacteria, and odors.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

        <div className="combo-container">
          <h3 className='text-white'>Get a <span className='special-package'>FREE</span> Engine cleaning!</h3>
          <p className="subtext">Check out our Current <a className='aside-link' href="/services/Combo">Combo</a> deal that combines this Full Interior Cleaning, our <a className='aside-link' href="/services/PDLWash">Premium Dirt-Less Wash</a>, and gives you an Engine Bay Cleaning totally on us!  </p>
        </div>

        <div>
          <h3 className='pricing-title'>Our Full Interior Cleaning Pricing</h3>
          <h4 className='pricing-subtext'>*Final pricing may vary based on your vehicle condition and size.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size" style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Small</h4>
              <h4 className="size">Without Extraction</h4>
              <p className="pricing-price pricing-border">$200</p>
              <h4 className="size">With Extraction</h4>
              <p className="pricing-price pricing-border">$250</p>
              <p className="example-vehicle pricing-border">2-Door Coupes</p>
              <p className="example-vehicle pricing-border">Single/Extended Cabs</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
            <div className="pricing-card">
              <h4 className="size" style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Medium</h4>
              <h4 className="size">Without Extraction</h4>
              <p className="pricing-price pricing-border">$250</p>
              <h4 className="size">With Extraction</h4>
              <p className="pricing-price pricing-border">$300</p>
              <p className="example-vehicle pricing-border">4 Door Vehicles</p>
              <p className="example-vehicle pricing-border">Smaller SUV's</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
            <div className="pricing-card">
              <h4 className="size" style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Large</h4>
              <h4 className="size">Without Extraction</h4>
              <p className="pricing-price pricing-border">$300</p>
              <h4 className="size">With Extraction</h4>
              <p className="pricing-price pricing-border">$350</p>
              <p className="example-vehicle pricing-border">Larger Trucks</p>
              <p className="example-vehicle pricing-border">Extra Large SUV's</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
