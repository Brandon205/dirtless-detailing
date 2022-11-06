import React, { useState, useEffect } from 'react';
import Zoom from 'react-medium-image-zoom';
import Image from 'next/image';
import Head from 'next/head';
import 'react-medium-image-zoom/dist/styles.css';

import cover from '../../public/imgs/pageimgs/bio/IMG_20220217_093930.jpg';
import seats from '../../public/imgs/pageimgs/bio/SeatsBA.webp';
import seatbelts from '../../public/imgs/pageimgs/bio/SeatbeltBA.webp';
import mesh from '../../public/imgs/pageimgs/bio/MeshBA.webp';

const steps = [
  ["Determine Products", "We will first determine what products will need to be used to best suit the situation."],
  ["Disinfect", "Fully disinfect every single surface in the vehicle before we even get started."],
  ["Full Interior Cleaning", "Then we will perform our Full Interior Cleaning Process on the vehicle."],
  ["Ozone Treatment", "Then we will perform Ozone Air treatment to fill all bacteria, mold spores, and get rid of smells where it's impossible to get to conventionally."]
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
        <meta name="description" content="Smokers Car • Biohazard Cleaning • Odor Removal - See what we can do if your car has unwanted odors or smells" />
      </Head>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="biohazard cleaning cover" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>Smoke, Biohazard, or Odor Removal</h1>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
      </div>

      <div className='main-content-container'>
        <div className='process-container'>
          <div>
            <h2>Our Biohazard Cleaning Process</h2>
            <ol className='list'>
              {content}
            </ol>
          </div>
          
          <div className='aside-container'>
            <div className='service-aside'>
              <h3>Other Interior Services</h3>
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
          <h2 className='pricing-title'>Our Pricing</h2>
          <h4 className='subtext'>Our basic prices are shown below, final pricing may vary based on your vehicle size and condition.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
            <h4 className="size">All Vehicles</h4>
              <p className="example-vehicle">(Any Size)</p>
              <p className="pricing-price">$400-$1000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
