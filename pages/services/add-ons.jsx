import React from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';
import { TbEngine } from 'react-icons/tb';
import { RiCarWashingFill } from 'react-icons/ri';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { FaDog } from 'react-icons/fa';
import { GiPoliceBadge, GiCarSeat, GiCarDoor, GiFallingRocks, GiSmokeBomb, GiRolledCloth, GiSteam, GiCrystalShine } from 'react-icons/gi';

export default function Addons() {
  return (
    <section className='service-content-container bg-contact'>
      <Head>
        <title>Dirt-Less Add-ons | Dirt-Less Detailing</title>
        <Metatags
          title='Dirt-Less Add-ons | Dirt-Less Detailing'
          description='Engine Bay Cleaning • Debadging • Glass Polishing • Waterspot / Overspray Removal • Ozone Treatment • Interior Ceramic Coatings.'
          image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ddb3cc29-1d60-4676-48d8-f86bdcfc5c00/public'
          canonical='/services/add-ons'
        />
        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "Dirt-Less Add-ons",
            "brand": "Dirt-Less Detailing",
            "description": "Our currently offered Add-ons for our various detailing services.",
            "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ddb3cc29-1d60-4676-48d8-f86bdcfc5c00/public",
            "url": "https://www.dirtlessdetailing.com/services/add-ons/",
            "offers": [
              {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": "80",
                "availability": "http://schema.org/InStock",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Engine Bay Washing Service",
                  "serviceType": "Engine Bay Wash",
                  "providerMobility": "dynamic"
                }
              },
              {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": "80",
                "availability": "http://schema.org/InStock",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Glass Polishing Service",
                  "serviceType": "Glass Polish",
                  "providerMobility": "dynamic"
                }
              },
              {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": "80",
                "availability": "http://schema.org/InStock",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Waterspot / Overspray / Road Paint Removal Service",
                  "serviceType": "Waterspot / Overspray / Road Paint Removal",
                  "providerMobility": "dynamic"
                }
              },
              {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": "80",
                "availability": "http://schema.org/InStock",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Debadging Service",
                  "serviceType": "Vehicle Debadging",
                  "providerMobility": "dynamic"
                }
              },
              {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": "100",
                "availability": "http://schema.org/InStock",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Ozone Treatment Service",
                  "serviceType": "Ozone Treatment",
                  "providerMobility": "dynamic"
                }
              }
            ]
          }`,
        }} />
      </Head>
      <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ddb3cc29-1d60-4676-48d8-f86bdcfc5c00/cover')`}}></div>
      <div className="servicepage-header">
        <h1>Dirt-Less Detailing Add-ons</h1>
        <h2 className='page-subheading'>Engine Bay Cleaning • Debadging • Glass Polishing • Waterspot / Overspray Removal • Ozone Treatment • Interior Ceramic Coatings.</h2>
        <div className='header-buttons'>
          <a href="/Contact" className='top-quote-btn'>Get a Free Quote</a>
          <a href="tel:2532529758" className='top-quote-btn btn-secondary'><MdOutlinePermPhoneMsg className='call-icon' /> (253) 252-9758</a>
        </div>
      </div>

      <h3 style={{ fontSize: 40 }}>Our Currently Offered Add-ons:</h3>
      <div className="addon-content-container">

        <h3 className='addons-subheading' id='exterior'>Exterior Add-ons:</h3>
        <div className="feature-section" id="engine">
          {/* <TbEngine className='feature-icon' /> */}
          <img src='../assets/icons/engine.png' className='icon-96' alt="engine" />
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Engine Bay Cleaning</p>
            <p className="secondary-text"><span>$79.99</span></p>
            <p className="service-desc text-white">We will cover sensitive/electronic areas in the bay, clean wash, and then dress the engine bay to have it looking like new!</p>
            <div className='internal-links'>
              <a href="/services/dirtless-wash" className="readmore">Dirt-Less Wash</a>
              <a href="/services/interior-exterior-detailing-combo" className="readmore">The Dirt-Less Detail</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />

        <div className="feature-section" id="claybar">
          {/* <GiFallingRocks className='feature-icon' /> */}
          <img src='../assets/icons/dirt.png' className='icon-96' alt="dirt particles" />
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Clay Bar Treatment</p>
            <p className="secondary-text"><span>$35-$75</span></p>
            <p className="service-desc text-white">Get any small contaminants off of the car to give the paint an even smoother and cleaner shine.</p>
            <div className='internal-links'>
              <a href="/services/dirtless-wash" className="readmore">Dirt-Less Wash</a>
              <a href="/services/interior-exterior-detailing-combo" className="readmore">The Dirt-Less Detail</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />

        <div className="feature-section" id="glass">
          {/* <GiCarDoor className='feature-icon' /> */}
          <img src='../assets/icons/windscreen.png' className='icon-96' alt="front windshield" />
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Glass Polishing</p>
            <p className="secondary-text"><span>$80/hour</span></p>
            <p className="service-desc text-white">Remove all scratches, etching, and watermarks possible. Can be added to any of our Paint Correction Services when contacting us.</p>
            <div className='internal-links'>
              <a href="/services/single-stage-correction" className="readmore">Single Stage Paint Correction</a>
              <a href="/services/two-stage-correction" className="readmore">Two Stage Paint Correction</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />

        <div className="feature-section" id="waterspot">
          {/* <RiCarWashingFill className='feature-icon' /> */}
          <img src='../assets/icons/water.png' className='icon-96' alt="water drop" />
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Waterspot, Overspray, or Road Paint Removal</p>
            <p className="secondary-text"><span>$80/hour</span></p>
            <p className="service-desc text-white">Remove all overspray, waterspots, or road paint that we can. This can be added onto any of our Exterior Washes or either of our Paint Correction Services when contacting us.</p>
            <div className='internal-links'>
              <a href="/services/dirtless-wash" className="readmore">Dirt-Less Wash</a>
              <a href="/services/single-stage-correction" className="readmore">Single Stage Paint Correction</a>
              <a href="/services/two-stage-correction" className="readmore">Two Stage Paint Correction</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />

        <div className="feature-section" id="debadge">
          {/* <GiPoliceBadge className='feature-icon' /> */}
          <img src='../assets/icons/bmw.png' className='icon-96' alt="bmw badge" />
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Debadging</p>
            <p className="secondary-text"><span>$80/hour</span></p>
            <p className="service-desc text-white">Remove any vehicle badging including any residue left behind after removal.</p>
            <div className='internal-links'>
              <a href="/services/dirtless-wash" className="readmore">Dirt-Less Wash</a>
              <a href="/services/single-stage-correction" className="readmore">Single Stage Paint Correction</a>
              <a href="/services/two-stage-correction" className="readmore">Two Stage Paint Correction</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />

        <h3 className='addons-subheading' id='interior'>Interior Add-ons:</h3>

        <div className="feature-section" id="extraction">
          {/* <GiSteam className='feature-icon' /> */}
          <img src='../assets/icons/steam.png' className='icon-96' alt="steam" />
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Steam Extraction</p>
            <p className="secondary-text"><span>$35-$75</span></p>
            <p className="service-desc text-white">A quick steam extraction is the best way to remove stains, spills, and embedded dirt that normal vacuuming can't get easily.</p>
            <div className='internal-links'>
              <a href="/services/full-interior-detail" className="readmore">Full Interior Cleaning</a>
              <a href="/services/biohazard-cleaning" className="readmore">Biohazard Cleaning</a>
              <a href="/services/interior-exterior-detailing-combo" className="readmore">The Dirt-Less Detail</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />

        <div className="feature-section" id="pet-hair">
          {/* <FaDog className='feature-icon' /> */}
          <img src='../assets/icons/dog.png' className='icon-96' alt="dog walking" />
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Pet Hair Removal</p>
            <p className="secondary-text"><span>$50-$100</span></p>
            <p className="service-desc text-white">Pet hair can be a pain to remove from carpets, luckily we have the tools to get the job done.</p>
            <div className='internal-links'>
              <a href="/services/full-interior-detail" className="readmore">Full Interior Cleaning</a>
              <a href="/services/biohazard-cleaning" className="readmore">Biohazard Cleaning</a>
              <a href="/services/interior-exterior-detailing-combo" className="readmore">The Dirt-Less Detail</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />

        <div className="feature-section" id="headliners">
          <img src='../assets/icons/up.png' className='icon-96' alt="up arrow" />
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Headliners</p>
            <p className="secondary-text"><span>$40-$80</span></p>
            <p className="service-desc text-white">Headliners are tricky to clean and improper handling can cause them to sag, we'll pick the right products for the job to clean them while keeping them intact.</p>
            <div className='internal-links'>
              <a href="/services/full-interior-detail" className="readmore">Full Interior Cleaning</a>
              <a href="/services/biohazard-cleaning" className="readmore">Biohazard Cleaning</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />

        <div className="feature-section" id="ozone">
          <img src='../assets/icons/ozone.png' className='icon-96' alt="air filter in use" />
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Ozone Treatment</p>
            <p className="secondary-text"><span>$99.99</span></p>
            <p className="service-desc text-white">Ozone treatment is the use of O3 (gas ozone) to remove bacteria, viruses, and odors from your vehicle. This can be added to any of our Interior cleanings when contacting us.</p>
            <div className='internal-links'>
              <a href="/services/full-interior-detail" className="readmore">Full Interior Cleaning</a>
              <a href="/services/biohazard-cleaning" className="readmore">Biohazard Cleaning</a>
            </div>
          </div>
        </div>
        <hr className='contact-border' />

        <div className="feature-section" id="interior-coating">
          <img src='../assets/icons/steeringWheel.png' className='icon-96' alt="engine" />
          <div className="feature-desc-area">
            <p className='service-heading-subtitle'>Interior Ceramic Coating</p>
            <p className="secondary-text"><span>$150</span></p>
            <p className="service-desc text-white">Ceramic coating can also be a great option for anyone who wants to protect the materials in their vehicle from stains, UV damage, and to make it easier to clean.</p>
            <div className='internal-links'>
              <a href="/services/full-interior-detail" className="readmore">Full Interior Cleaning</a>
              <a href="/services/biohazard-cleaning" className="readmore">Biohazard Cleaning</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
