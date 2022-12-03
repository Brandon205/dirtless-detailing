import React, { useState, useEffect } from 'react';
import Zoom from 'react-medium-image-zoom';
import Image from 'next/image';
import Head from 'next/head';
import 'react-medium-image-zoom/dist/styles.css';

import cover from '../../public/imgs/BioCover.webp';
import seats from '../../public/imgs/pageimgs/bio/SeatsBA.webp';
import seatbelts from '../../public/imgs/pageimgs/bio/SeatbeltBA.webp';
import mesh from '../../public/imgs/pageimgs/bio/MeshBA.webp';

const steps = [
  ["Determine Products", "We will first determine what products will need to be used to best suit the situation."],
  ["Disinfect", "Fully disinfect every single surface in the vehicle before we even get started."],
  ["Full Interior Cleaning", "Perform our Full Interior Cleaning Process on the vehicle."],
  ["Ozone Treatment", "Perform Ozone air treatment to fill all bacteria, mold spores, and get rid of smells where it's impossible to get to conventionally."]
]

export default function Bio() {
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
      <Head>
        <title>Dirt-Less Detailing | Biohazard Cleaning</title>
        <meta property="og:description" content="Smokers Car • Biohazard Cleaning • Odor Removal - See what we can do if your car has unwanted odors or smells" />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/services/Bio" />
      </Head>
      <div className="cover">
        <Image src={cover} alt="biohazard cleaning cover" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>BioHazard Cleaning</h1>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
      </div>

      <div className='main-content-container'>
        <div className='process-container'>
          <div>
            <h2 className='cleaning-process-title'>Our Biohazard Cleaning Process</h2>
            <ol className='list'>
              {content}
            </ol>
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
                    <p className="addon-subtext">Treats your vehicle to get rid of any viruses, bacteria, and odors.</p>
                  </div>
                </div>
              </div>  
            </div>

          </div>
        </div>

        <div className="examples-container">
          <div className="example-img">
            <Zoom>
              <Image style={{borderRadius: 16}} src={seats} alt="seat mold before and after" layout="responsive" objectFit='scale-down' placeholder='blur' />
            </Zoom>
          </div>
          <div className="example-img">
            <Zoom>
              <Image style={{borderRadius: 16}} src={seatbelts} alt="seatbelt mold before and after" layout="responsive" objectFit='scale-down' placeholder='blur' />
            </Zoom>
          </div>
          <div className="example-img">
            <Zoom>
              <Image style={{borderRadius: 16}} src={mesh} alt="mesh net mold before and after" layout="responsive" objectFit="scale-down" placeholder='blur' />
            </Zoom>
          </div>
        </div>

        <div>
          <h3 className='pricing-title'>Our Biohazard Cleaning Prices</h3>
          <h4 className='subtext'>Final pricing may vary based on your vehicle condition and size.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
            <h4 className="size">Any Vehicles</h4>
              <p className="example-vehicle">Any Size</p>
              <p className="pricing-price">$400-$1000</p>
            </div>
          </div>

        <h4>Interested? Get in touch with us here, and let us know what we can do to help you!</h4>
        <a href="/Contact" className="quote-btn main-quote-btn">Contact Us</a>

        </div>
      </div>
    </section>
  )
}
