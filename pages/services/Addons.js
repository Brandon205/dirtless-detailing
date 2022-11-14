import React from 'react'
import Image from 'next/image';
import Head from 'next/head';

import cover from '../../public/imgs/AddonsCover.webp';
import waterspot from '../../public/imgs/pageimgs/homepage/1667678920614.webp';
import glassPolish from '../../public/imgs/pageimgs/addons/IMG_20220912_192744.jpg';
import ozone from '../../public/imgs/pageimgs/bio/IMG_20220904_140012.jpg';
import truckBed from '../../public/imgs/pageimgs/exterior/1667675422409.webp';

export default function Addons() {
  return (
    <section className='service-content-container'>
      <Head>
        <title>Dirt-Less Detailing | Dirt-Less Addons</title>
        <meta name="description" content="Glass Polishing • Waterspot / Overspray Removal • Ozone Treatment • Truck Bed Cleaning. Check out our popular addons that top off our services." />
        <link rel="canonical" href="https://dirtlessdetailing.com/services/Addons" />
      </Head>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="Vehicle after a Dirt-Less Wash with Glass Polishing addons" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>Dirt-Less Detailing Addons</h1>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
      </div>

      <h2 style={{fontSize: 32}}>Our Current Dirt-Less Addons:</h2>
      <div className="addon-content-container">

        <div className="feature-section">
          <div className="feature-img-container">
            <Image style={{borderRadius: 16}} src={glassPolish} alt="Window after a glass polishing" className='otherservices-image' loading='lazy' placeholder='blur' quality={15} />
          </div>
          <div className="feature-desc-area">
            <p className='service-heading-link'>Glass Polishing</p>
            <p className="secondary-text">Hourly Rate: <span>$80</span></p>
            <p className="service-desc">Remove all scratches, etching, and watermarks possible. Can be added to any of our Paint Correction Services when contacting us.</p>
            <div className='internal-links'>
              <a href="/services/SinglePC" className="readmore">Single Stage Paint Correction</a>
              <a href="/services/TwoPC" className="readmore">Two Stage Paint Correction</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />

        <div className="feature-section">
          <div className="feature-img-container">
            <Image style={{borderRadius: 16}} src={ozone} alt="Ozone Treatment in Progress" className='otherservices-image' loading='lazy' placeholder='blur' quality={15} />
          </div>
          <div className="feature-desc-area">
            <p className='service-heading-link'>Ozone Treatment</p>
            <p className="secondary-text">Cost: <span>$100</span></p>
            <p className="service-desc">Ozone treatment is the use of O3 (gas ozone) to remove bacteria, viruses, and odors from your vehicle. This can be added to any of our Interior cleanings when contacting us.</p>
            <div className='internal-links'>
              <a href="/services/FullIntEx" className="readmore">Full Interior Cleaning</a>
              <a href="/services/Bio" className="readmore">Biohazard Cleaning</a>
              <a href="/services/Headliners" className="readmore">Headliners</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />

        <div className="feature-section">
          <div className="feature-img-container">
            <Image style={{borderRadius: 16}} src={waterspot} alt="Waterspot / Overspray removal after" className='otherservices-image' loading='lazy' placeholder='blur' quality={15} />
          </div>
          <div className="feature-desc-area">
            <p className='service-heading-link'>Waterspot/Overspray Removal</p>
            <p className="secondary-text">Hourly rate: <span>$80/hour</span></p>
            <p className="service-desc">Remove all overspray and waterspots we can. This can be added onto any of our Exterior Washes or either of our Paint Correction Services when contacting us.</p>
            <div className='internal-links'>
              <a href="/services/DLWash" className="readmore">Dirt-Less Wash</a>
              <a href="/services/PDLWash" className="readmore">Premium Dirt-Less Wash</a>
              <a href="/services/SinglePC" className="readmore">Single Stage Paint Correction</a>
              <a href="/services/TwoPC" className="readmore">Headliners</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />
        
        <div className="feature-section">
          <div className="feature-img-container">
            <Image style={{borderRadius: 16}} src={truckBed} alt="Truck Bed Cleaning" className='otherservices-image' loading='lazy' placeholder='blur' quality={15} />
          </div>
          <div className="feature-desc-area">
            <p className='service-heading-link'>Truck Bed Cleaning</p>
            <p className="secondary-text">Cost: <span>$25</span></p>
            <p className="service-desc">This is our addon to get your truck bed cleaned out. Can be added to either of out Dirt-Less Washes.</p>
            <div className='internal-links'>
              <a href="/services/DLWash" className="readmore">Dirt-Less Wash</a>
              <a href="/services/PDLWash" className="readmore">Premium Dirt-Less Wash</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
