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
        <title>Biohazard Cleaning | Dirt-Less Detailing</title>
        <meta property="og:title" content="Biohazard Cleaning | Dirt-Less Detailing" />
        <meta name="description" content="Smokers Car • Biohazard Cleaning • Odor Removal - See what we can do if your car has unwanted odors or smells" />
        <meta property="og:description" content="Smokers Car • Biohazard Cleaning • Odor Removal - See what we can do if your car has unwanted odors or smells" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dirtlessdetailing.com/services/biohazard-cleaning" />
        <meta property="og:image" content={cover.src} />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/services/biohazard-cleaning" />
      </Head>
      <div className="cover">
        <Image src={cover} alt="biohazard cleaning cover" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>Biohazard Cleaning</h1>
        <h2 className='page-subheading'>Deeper stains and spills leaving unwanted odors? Look no further than our Biohazard cleaning.</h2>
        <a href="/contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
        <p className='inline text-small'>
          Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
        </p>
      </div>

      <div className='main-content-container'>
        <div className='process-container'>
          <div>
            <main className="service-main">
              <h2 className='text-large'>Professional Biohazard Cleaning</h2>
              <div className="text-left">
                <p>No one likes surprises. Especially not a smelly, moldy car.  Sometimes we get called to clean mold, urine, or even a busted gallon of spoiled milk. All of these are considered biohazard cleaning.</p>
                <p>The sooner we can get to it, the easier it is to clean up. Depending on where the accident took place, how much fluid came out, and how long ago the accident happened will determine what we can do.</p>
                <p>Generally speaking, if there is a smell lingering in the interior due to an accident, the smell should be gone once it is cleaned up.  We also have a state of the art ozone machine to blast away any remaining odors and sanitize the air.</p>
              </div>

              <br className='extra-space' />
            </main>
            <h2 className='cleaning-process-title text-large'>Our Biohazard Cleaning Process</h2>
            <ol className='list'>
              {content}
            </ol>
          </div>

          <br className='extra-space' />

          <div className='aside-container'>
            <div className='service-aside'>
              <p className='extra-addons text-large'>Other Interior Pages</p>
              <hr className="contact-border" style={{ marginBottom: 16 }} />
              <div className="aside-links">
                <a href="/services/full-interior-detail" style={{ color: href.endsWith('full-interior-detail') ? 'dodgerblue' : 'white' }} className="service-link">{href.endsWith('full-interior-detail') ? '> ' : ''} Full Interior Detail</a><br />
                <a href="#" style={{ color: href.endsWith('biohazard-cleaning') ? 'dodgerblue' : 'white' }} className="service-link">{href.endsWith('biohazard-cleaning') ? '> ' : ''} Biohazard Cleaning</a><br />
                <a href="/gallery/interior-detail-gallery" className="service-link">Full Interior Gallery</a>
              </div>
            </div>

            <div className='aside-container'>
              <div className='service-aside addons-aside'>
                <p className='extra-addons text-large'>Extra Add-ons</p>
                <hr className="contact-border" style={{ marginBottom: 16 }} />
                <div className="aside-links">
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/add-ons#ozone" className='text-blue'>Ozone Treatment</a></p>
                    <p className='m-0'><span className="bold special-package">$100</span></p>
                    <p className="addon-subtext">Treats your vehicle to get rid of any viruses, bacteria, and odors.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <br className='extra-space' />

        <h4 className='text-large'>Some extreme examples of our Biohazard cleaning work so far:</h4>
        <div className="examples-container">
          <div className="example-img">
            <Zoom>
              <Image style={{ borderRadius: 16 }} src={seats} alt="seat mold before and after" layout="responsive" objectFit='scale-down' placeholder='blur' />
            </Zoom>
          </div>
          <div className="example-img">
            <Zoom>
              <Image style={{ borderRadius: 16 }} src={seatbelts} alt="seatbelt mold before and after" layout="responsive" objectFit='scale-down' placeholder='blur' />
            </Zoom>
          </div>
          <div className="example-img">
            <Zoom>
              <Image style={{ borderRadius: 16 }} src={mesh} alt="mesh net mold before and after" layout="responsive" objectFit="scale-down" placeholder='blur' />
            </Zoom>
          </div>
        </div>

        <br className='extra-space' />

        <div>
          <h3 className='pricing-title'>Our Biohazard Cleaning Prices</h3>
          <strong className='pricing-subtext'>*Final pricing may vary based on your vehicle condition and size.</strong>
          <div className="pricing-container">
            <div className="pricing-card">
              <strong className='size'>Any Vehicle</strong>
              <p className="pricing-price pricing-border">$400- $1000</p>
              <p className="example-vehicle pricing-border">Any Size Vehicle</p>
              <a href="/contact" className="pricing-quote-btn">Contact Us</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
