import React from 'react'
import Image from 'next/image';
import Head from 'next/head';

import cover from '../../public/imgs/AddonsCover.webp';
import waterspot from '../../public/imgs/pageimgs/homepage/1667678920614.webp';
import glassPolish from '../../public/imgs/pageimgs/addons/IMG_20220912_192744.jpg';
import ozone from '../../public/imgs/pageimgs/bio/IMG_20220904_140012.jpg';
import truckBed from '../../public/imgs/pageimgs/exterior/1667675422409.webp';
import headliner from '../../public/imgs/headlinersCover.webp';
import engine from '../../public/imgs/EngineCover.webp';
import debadge from '../../public/imgs/pageimgs/exterior/IMG_20220709_124846.jpg';

export default function Addons() {
  return (
    <section className='service-content-container'>
      <Head>
        <title>Dirt-Less Detailing | Dirt-Less Add-ons</title>
        <meta property="og:description" content="Glass Polishing • Waterspot / Overspray Removal • Ozone Treatment • Truck Bed Cleaning. Check out our popular add-ons that top off our services." />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/services/Addons" />
      </Head>
      <div className="cover">
        <Image src={cover} alt="Vehicle after a Dirt-Less Wash with Glass Polishing addons" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>Dirt-Less Detailing Add-ons</h1>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
      </div>

      <h2 style={{fontSize: 40}}>Our Current Add-ons:</h2>
      <div className="addon-content-container">

        <h3 className='addons-subheading' id='exterior'>Exterior Add-ons:</h3>
        <div className="feature-section" id="truck">
          <div className="feature-img-container">
            <Image style={{borderRadius: 16}} src={truckBed} alt="Truck Bed Cleaning" className='otherservices-image' loading='lazy' placeholder='blur' quality={15} />
          </div>
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Truck Bed Cleaning</p>
            <p className="secondary-text"><span>$25</span></p>
            <p className="service-desc">This is our add-on to get your truck bed cleaned out. Can be added to either of our Dirt-Less Washes.</p>
            <div className='internal-links'>
              <a href="/services/DLWash" className="readmore">Dirt-Less Wash</a>
              <a href="/services/PDLWash" className="readmore">Premium Dirt-Less Wash</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />

        <div className="feature-section" id="engine">
          <div className="feature-img-container">
            <Image style={{borderRadius: 16}} src={engine} alt="Cleaned Engine Bay" className='otherservices-image' loading='lazy' placeholder='blur' quality={15} />
          </div>
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Engine Bay Cleaning</p>
            <p className="secondary-text"><span>$80</span></p>
            <p className="service-desc">We will cover sensitive/electronic areas in the bay, clean and wash, then dress the engine bay to have it looking like new!</p>
            <div className='internal-links'>
              <a href="/services/DLWash" className="readmore">Dirt-Less Wash</a>
              <a href="/services/PDLWash" className="readmore">Premium Dirt-Less Wash</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />

        <div className="feature-section" id="glass">
          <div className="feature-img-container">
            <Image style={{borderRadius: 16}} src={glassPolish} alt="Window after a glass polishing" className='otherservices-image' loading='lazy' placeholder='blur' quality={15} />
          </div>
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Glass Polishing</p>
            <p className="secondary-text"><span>$80/hour</span></p>
            <p className="service-desc">Remove all scratches, etching, and watermarks possible. Can be added to any of our Paint Correction Services when contacting us.</p>
            <div className='internal-links'>
              <a href="/services/SinglePC" className="readmore">Single Stage Paint Correction</a>
              <a href="/services/TwoPC" className="readmore">Two Stage Paint Correction</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />

        <div className="feature-section" id="waterspot">
          <div className="feature-img-container">
            <Image style={{borderRadius: 16}} src={waterspot} alt="Waterspot / Overspray removal after" className='otherservices-image' loading='lazy' placeholder='blur' quality={15} />
          </div>
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Waterspot/Overspray Removal</p>
            <p className="secondary-text"><span>$80/hour</span></p>
            <p className="service-desc">Remove all overspray and waterspots we can. This can be added onto any of our Exterior Washes or either of our Paint Correction Services when contacting us.</p>
            <div className='internal-links'>
              <a href="/services/DLWash" className="readmore">Dirt-Less Wash</a>
              <a href="/services/PDLWash" className="readmore">Premium Dirt-Less Wash</a>
              <a href="/services/SinglePC" className="readmore">Single Stage Paint Correction</a>
              <a href="/services/TwoPC" className="readmore">Two Stage Paint Correction</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />
        
        <div className="feature-section" id="debadge">
          <div className="feature-img-container">
            <Image style={{borderRadius: 16}} src={debadge} alt="Vehicle side shot" className='otherservices-image' loading='lazy' placeholder='blur' quality={15} />
          </div>
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Debadging</p>
            <p className="secondary-text"><span>$80/hour</span></p>
            <p className="service-desc">Remove any vehicle badging including any residue left behind after removal</p>
            <div className='internal-links'>
              <a href="/services/DLWash" className="readmore">Dirt-Less Wash</a>
              <a href="/services/PDLWash" className="readmore">Premium Dirt-Less Wash</a>
              <a href="/services/SinglePC" className="readmore">Single Stage Paint Correction</a>
              <a href="/services/TwoPC" className="readmore">Two Stage Paint Correction</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />

        <h3 className='addons-subheading' id='interior'>Interior Add-ons:</h3>
        <div className="feature-section" id="headliners">
          <div className="feature-img-container">
            <Image style={{borderRadius: 16}} src={headliner} alt="Cleaned Headliners" className='otherservices-image' loading='lazy' placeholder='blur' quality={100} />
          </div>
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Headliner Cleaning</p>
            <p className="secondary-text"><span>$40-$80</span></p>
            <p className="service-desc">We will perform cleaning methods specific to your vehicles headliner material. We do this to prevent sagging and damage to the headliners. (Results may vary)</p>
            <div className='internal-links'>
              <a href="/services/FullIntEx" className="readmore">Full Interior Cleaning</a>
              <a href="/services/Bio" className="readmore">Biohazard Cleaning</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />

        <div className="feature-section" id="ozone">
          <div className="feature-img-container">
            <Image style={{borderRadius: 16}} src={ozone} alt="Ozone Treatment in Progress" className='otherservices-image' loading='lazy' placeholder='blur' quality={15} />
          </div>
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Ozone Treatment</p>
            <p className="secondary-text"><span>$100</span></p>
            <p className="service-desc">Ozone treatment is the use of O3 (gas ozone) to remove bacteria, viruses, and odors from your vehicle. This can be added to any of our Interior cleanings when contacting us.</p>
            <div className='internal-links'>
              <a href="/services/FullIntEx" className="readmore">Full Interior Cleaning</a>
              <a href="/services/Bio" className="readmore">Biohazard Cleaning</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
