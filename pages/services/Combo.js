import React from 'react';
import Zoom from 'react-medium-image-zoom';
import Image from 'next/image';
import Head from 'next/head';
import 'react-medium-image-zoom/dist/styles.css';

import cover from '../../public/imgs/pageimgs/exterior/IMG_20220121_153440.jpg';
import exterior from '../../public/imgs/pageimgs/paintCorrection/IMG_20220902_085328.jpg';
import engine from '../../public/imgs/pageimgs/engine/IMG_20220830_193915.jpg';
import interior from '../../public/imgs/pageimgs/interior/IMG_20211210_142317.jpg';

const steps = [
  ["We will start out by cleaning out the Interior of the vehicle, so that anything we blow out of there doesn't end up on the cleaned exterior. For more details on our exact Full Interior methods check out our "],
  ["We will then clean out the engine bay, continuing to clean from the inside of the vehicle out, so that the exterior is as clean as can be by the end. All of our steps for the Engine Bay cleaning are posted "],
  ["After cleaning and dressing the engine bay we will finally move onto the exterior as the last step. We will perform our Premium Dirt-Less Wash procedure on your vehicle, for more details check out our"]
]

export default function Combo() {

  return (
    <section className='service-content-container'>
      <Head>
        <title>Dirt-Less Detailing | Combo Deals</title>
        <meta name="description" content="Full Interior Cleaning + Premium Dirt-Less Wash Combo. Get a FREE engine bay cleaning when booking this Combo Deal!" />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/services/Combo" />
      </Head>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
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
                    <p className='step-desc'>We will start out by cleaning out the Interior of the vehicle, so that anything we blow out of there doesn't end up on the cleaned exterior. For more details on our exact Full Interior methods check out our <a href='/services/FullIntEx' className='special-package'>Full Interior</a> page.</p>
                  </div>
                </li>
                
                <li className="item">
                  <div className="step-number-container">
                    <h3 className='step-number'>2</h3><div className="vertical-rule"></div>
                  </div>
                  <div className="step-container">
                    <h4 className="step-title">Engine Bay Cleaning</h4>
                    <p className='step-desc'>Next we will then clean out the engine bay, continuing to clean from the inside of the vehicle out, so that the exterior will be spotless at the end. More information for the engine cleaning is posted <a href='/services/Addons' className='special-package'>here</a>.</p>
                  </div>
                </li>

                <li className="item">
                  <div className="step-number-container">
                    <h3 className='step-number'>3</h3><div className="vertical-rule"></div>
                  </div>
                  <div className="step-container">
                    <h4 className="step-title">Premium Dirt-Less Wash</h4>
                    <p className='step-desc'>After cleaning and dressing the engine bay we will finally move onto the exterior as the last step. We will perform our Premium Dirt-Less Wash procedure on your vehicle, for more details check out our <a href='/services/PDLWash' className='special-package'>Premium Dirt-Less Wash</a> page.</p>
                  </div>
                </li>
              </ol>
            </div>

          </div>

          <div>

            <div className='aside-container'>
              <div className='service-aside addons-aside'>
              <h3><a href="/services/Addons" style={{color: 'black'}}>Extra Addons</a></h3>
                <div className="aside-links"> 
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/Addons" style={{color: 'blue'}}>Glass Polishing</a> - <span className="bold">$80</span>/hour</p>
                    <p className="subtext">Gives you crystal clear windows.</p>
                  </div>
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/Addons" style={{color: 'blue'}}>Waterspot/Overspray Removal</a> - <span className="bold">$80</span>/hour</p>
                    <p className="subtext">Remove any Overspray and Waterspots from your vehicle</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='aside-container'>
              <div className='service-aside addons-aside'>
              <h3 className='underline'>Combo Deal</h3>
                <div className="aside-links"> 
                  <h3>You get an <span className='special-package'>INCLUDED</span> Engine Cleaning with this order!</h3>
                  <p className="subtext">This special deal combines our <a className='aside-link' href="/services/PDLWash">Premium Dirt-Less Wash</a>, our best exterior wash service. Our <a className='aside-link' href="/services/FullIntEx">Full Interior Cleaning</a>, the most complete interior cleaning we provide, and we'll also give you an Engine Bay Cleaning <span className='special-package'>ON US!</span></p>
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
          <h4>Our basic prices are shown below, final pricing may vary based on your vehicle size, condition, and whether or not you need extraction on the carpets.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">SMALL</h4>
              <p className="example-vehicle">(Most Cars and Smaller Trucks)</p>
              <p className="pricing-price">$350 - $400</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">MEDIUM</h4>
              <p className="example-vehicle">(Mid-Size SUV's, and Most Wagons)</p>
              <p className="pricing-price">$450 - $500</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">LARGE</h4>
              <p className="example-vehicle">(Large SUV's and Large trucks)</p>
              <p className="pricing-price">$550 - $600</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">EXTRA LARGE</h4>
              <p className="example-vehicle">(Extra Large Vehicles)</p>
              <p className="pricing-price">$625 - $700</p>
            </div>
          </div>

          <h4>Interested? Get started by contacting us!</h4>
          <a href="/Contact" className="quote-btn main-quote-btn">Reach Out!</a>

        </div>
    </section>
  )
}
