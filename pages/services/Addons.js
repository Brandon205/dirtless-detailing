import React from 'react'
import Image from 'next/image';
import Head from 'next/head';

import cover from '../../public/imgs/pageimgs/paintCorrection/IMG_20220304_132750.jpg';
import waterspot from '../../public/imgs/pageimgs/paintCorrection/IMG_20220902_085328.jpg';
import glassPolish from '../../public/imgs/pageimgs/addons/IMG_20220912_192744.jpg';

export default function Addons() {
  return (
    <section className='service-content-container'>
      <Head>
        <title>Dirt-Less Detailing | Addons</title>
        <meta name="description" content="Glass Polishing • Waterspot / Overspray Removal • Ozone Treatment. Check out our popular addons that top off our services." />
      </Head>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="Vehicle after a Dirt-Less Wash with Glass Polishing addons" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>Dirt-Less Detailing Addons</h1>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
      </div>

      <div className="addon-content-container">
        <div className="service-card">
          <Image src={waterspot} alt="Waterspot / Overspray removal after" className='otherservices-image' loading='lazy' placeholder='blur' quality={1} />
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
          <Image src={glassPolish} alt="TODO: CHANGE THIS IMAGE" className='otherservices-image' loading='lazy' placeholder='blur' quality={1} />
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
