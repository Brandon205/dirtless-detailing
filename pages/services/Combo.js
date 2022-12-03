import React from 'react';
import Zoom from 'react-medium-image-zoom';
import Image from 'next/image';
import Head from 'next/head';
import 'react-medium-image-zoom/dist/styles.css';

import cover from '../../public/imgs/pageimgs/exterior/IMG_20220121_153440.jpg';
import exterior from '../../public/imgs/pageimgs/exterior/IMG_20220524_163118.jpg';
import engine from '../../public/imgs/pageimgs/engine/IMG_20220524_144623.jpg';
import interior from '../../public/imgs/pageimgs/interior/IMG_20220524_140445.jpg';

export default function Combo() {

  return (
    <section className='service-content-container'>
      <Head>
        <title>Dirt-Less Detailing | Combo Deals</title>
        <meta property="og:description" content="Full Interior Cleaning + Premium Dirt-Less Wash Combo. Get a FREE engine bay cleaning when booking this Combo Deal!" />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/services/Combo" />
      </Head>
      <div className="cover">
        <Image src={cover} alt="Vehicle after a Combo Wash" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>Full Interior and Exterior Combo</h1>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
      </div>

      <div className='main-content-container'>
        <div className="process-container" id="combo-process">
          <div>
            <div>
              <h2 className='cleaning-process-title'>Our Combo Cleaning Process</h2>
              <ol className='list'>
                <li className="item">
                  <div className="step-number-container">
                    <h3 className='step-number'>1</h3><div className="vertical-rule"></div>
                  </div>
                  <div className="step-container">
                    <h4 className="step-title">Full Interior Cleaning</h4>
                    <p className='step-desc'>We will start by cleaning out the interior of the vehicle so that anything we blow out doesn't end up on the cleaned exterior. For more details on our exact full interior methods, check out our <a href='/services/FullIntEx' className='special-package'>Full Interior</a> page.</p>
                  </div>
                </li>
                
                <li className="item">
                  <div className="step-number-container">
                    <h3 className='step-number'>2</h3><div className="vertical-rule"></div>
                  </div>
                  <div className="step-container">
                    <h4 className="step-title">Engine Bay Cleaning</h4>
                    <p className='step-desc'>We will then clean out the engine bay, continuing to clean from the inside of the vehicle out, so that the exterior will be spotless at the end. More information for the engine cleaning is posted <a href='/services/Addons' className='special-package'>here</a>.</p>
                  </div>
                </li>

                <li className="item">
                  <div className="step-number-container">
                    <h3 className='step-number'>3</h3><div className="vertical-rule"></div>
                  </div>
                  <div className="step-container">
                    <h4 className="step-title">Premium Dirt-Less Wash</h4>
                    <p className='step-desc'>After cleaning and dressing the engine bay, we will finally move onto the exterior as the last step. We will perform our Premium Dirt-Less Wash procedure on your vehicle. For more details check out our <a href='/services/PDLWash' className='special-package'>Premium Dirt-Less Wash</a> page.</p>
                  </div>
                </li>
              </ol>
            </div>

          </div>

          <div>

            <div className='aside-container'>
              <div className='service-aside addons-aside'>
                <a href="/services/Addons" className='extra-addons'>Extra Add-ons</a>
                <hr className="contact-border" style={{marginBottom: 16}} />
                <div className="aside-links"> 
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/Addons" className='text-blue'>Glass Polishing</a></p>
                    <p className='m-0'><span className="bold special-package">$80</span>/hour</p>
                    <p className='addon-subtext'>Gives you crystal clear windows.</p>
                  </div>
                  <hr className="contact-border" style={{marginBottom: 16}} />
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/Addons" className='text-blue'>Waterspot/Overspray Removal</a></p>
                    <p className='m-0'><span className="bold special-package">$80</span>/hour</p>
                    <p className='addon-subtext'>Remove any Overspray and Waterspots from your vehicle.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='aside-container'>
              <div className='service-aside'>
                <p className='extra-addons'>Combo Deal</p>
                <hr className="contact-border" style={{marginBottom: 16}} />
                <div className="aside-links"> 
                  <h3>You get an <span className='special-package'>INCLUDED</span> Engine Cleaning with this order!</h3>
                  <p style={{color: 'lightgray'}} className="subtext">This special deal combines our <a className='aside-link text-blue' href="/services/PDLWash">Premium Dirt-Less Wash</a>, our best exterior wash service. Our <a className='aside-link text-blue' href="/services/FullIntEx">Full Interior Cleaning</a>, the most complete interior cleaning we provide, and we'll give you an Engine Bay Cleaning <span className='special-package bold'>ON US!</span></p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="examples-container">
          <div className="example-img">
            <Zoom>
              <Image style={{borderRadius: 16}} src={interior} alt="seat mold before and after" layout="responsive" objectFit='cover' placeholder='blur' quality={25} />
            </Zoom>
          </div>
          <div className="example-img">
            <Zoom>
              <Image style={{borderRadius: 16}} src={engine} alt="seatbelt mold before and after" layout="responsive" objectFit='cover' placeholder='blur' quality={25} />
            </Zoom>
          </div>
          <div className="example-img">
            <Zoom>
              <Image style={{borderRadius: 16}} src={exterior} alt="mesh net mold before and after" layout="responsive" objectFit="cover" placeholder='blur' quality={25} />
            </Zoom>
          </div>
        </div>

      </div>

        <div>
          <h3 className='pricing-title'>Our Combo Deal Pricing</h3>
          <h4 className='pricing-subtext'>*Final pricing may vary based on your vehicle condition, size, and whether or not you need extraction.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">Small</h4>
              <p className="pricing-price pricing-border">$350- $400</p>
              <p className="example-vehicle pricing-border">Smaller Trucks</p>
              <p className="example-vehicle pricing-border">Most Cars</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
            <div className="pricing-card">
              <h4 className="size">Medium</h4>
              <p className="pricing-price pricing-border">$450- $500</p>
              <p className="example-vehicle pricing-border">Mid-Size SUV's</p>
              <p className="example-vehicle pricing-border">Most Wagons</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
            <div className="pricing-card">
              <h4 className="size">Large</h4>
              <p className="pricing-price pricing-border">$550- $600</p>
              <p className="example-vehicle pricing-border">Large SUV's</p>
              <p className="example-vehicle pricing-border">Large trucks</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
            <div className="pricing-card">
              <h4 className="size">Extra Large</h4>
              <p className="pricing-price pricing-border">$625- $700</p>
              <p className="example-vehicle pricing-border">Large Trucks</p>
              <p className="example-vehicle pricing-border">Extra Large Vehicles</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
          </div>

        </div>
    </section>
  )
}
