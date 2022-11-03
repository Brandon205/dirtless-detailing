import React from 'react'
import Image from 'next/image';
import Head from 'next/head';

import cover from '../../public/imgs/addonsCover.webp';
import interior from '../../public/imgs/pageimgs/homepage/fullintex.webp';

export default function Addons() {
  return (
    <section className='service-content-container'>
      <Head>
        <title>Dirt-Less Detailing | Addons</title>
      </Head>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="Vehicle after a Dirt-Less Wash with Glass Polishing addons" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>Dirt-Less Detailing Addons</h1>
        <a href="/#contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
      </div>

      <div className="addon-content-container">
        <div className="service-card">
          <Image src={interior} alt="TODO: CHANGE THIS IMAGE" className='otherservices-image' loading='lazy' placeholder='blur' quality={1} />
          <div className="otherservices-desc">
            <div>
              <a href="/services/FullIntEx" className='service-heading-link'>Waterspot/Overspray Removal</a>
              <p className="secondary-text">Hourly rate: <span>$60/hour</span></p>
            </div>
            <p className="service-desc">Remove all overspray and waterspots we can.</p>
            <p className="service-desc">• This can be added onto any of our Exterior Washes or any of our Paint Correction Services when contacting us.</p>

            <div>
              <a style={{marginBottom: 8}} href='/services/DLWash' className="readmore">Dirt-Less Wash Details {'>'}</a>
              <a href='/services/SinglePC' className="readmore">Paint Correction Details {'>'}</a>
            </div>
          </div>
        </div>
        <div className="service-card">
          <Image src={interior} alt="TODO: CHANGE THIS IMAGE" className='otherservices-image' loading='lazy' placeholder='blur' quality={1} />
          <div className="otherservices-desc">
            <div>
              <a href="/services/FullIntEx" className='service-heading-link'>Glass Polishing</a>
              <p className="secondary-text">Hourly rate: <span>$70/hour</span></p>
            </div>
            <p className="service-desc">Remove all scratches, etching, and watermarks possible.</p>
            <p className="service-desc">• This can be added onto any of our Paint Correction Services when contacting us.</p>

            <div>
              <a style={{marginBottom: 8}} href='/services/SinglePC' className="readmore">Paint Correction Details {'>'}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
