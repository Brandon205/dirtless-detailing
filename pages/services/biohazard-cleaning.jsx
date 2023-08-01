import React, { useState } from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
// import ReactPlayer from 'react-player/lazy';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';

const steps = [
  ["Determine Products", "We will first determine what products will need to be used to best suit the situation."],
  ["Disinfect", "Fully disinfect every single surface in the vehicle before we even get started to try to kill any bacteria that could be present."],
  ["Full Interior Cleaning", "Perform our Full Interior Cleaning Process on the vehicle."],
  ["Ozone Treatment", "Perform Ozone air treatment to fill all bacteria, mold spores, and get rid of smells where it's impossible to get to conventionally."]
]

export default function Bio() {
  const [slide, setSlide] = useState(50);

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
        <Metatags
          title='Biohazard Cleaning | Dirt-Less Detailing'
          description='Smokers Car • Biohazard Cleaning • Odor Removal - See what we can do if your car has unwanted odors or smells'
          image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/901f2f70-2010-4f2b-aac3-6a98dc38e400/public'
          canonical='/services/biohazard-cleaning'
        />
        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "Biohazard Cleaning",
            "brand": "Dirt-Less Detailing",
            "description": "Our team at Dirt-Less Detailing is trained and equipped to handle the safe and effective cleaning of biohazard materials in your vehicle.",
            "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/901f2f70-2010-4f2b-aac3-6a98dc38e400/public",
            "url": "https://www.dirtlessdetailing.com/services/biohazard-cleaning/",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "400",
              "priceSpecification": {
              	"@type": "PriceSpecification",
                "priceCurrency": "USD",
                "price": "400",
                "minPrice": "400",
                "maxPrice": "1000"
              },
              "availability": "http://schema.org/InStock",
              "itemOffered": {
                "@type": "Service",
                "name": "Biohazard Cleaning Service",
                "serviceType": "Biohazard Removal",
                "providerMobility": "dynamic"
              }
            }
          }`,
        }} />
      </Head>
      <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/901f2f70-2010-4f2b-aac3-6a98dc38e400/cover')`}}></div>
      <div className="servicepage-header">
        <h1>Biohazard Cleaning</h1>
        <h2 className='page-subheading'>Mold, odors, or other mildly hazardous spills in your vehicle? Look no further than our biohazard cleaning.</h2>
        <div className='header-buttons'>
          <a href="/Contact" className='top-quote-btn'>Get a Free Quote</a>
          <a href="tel:2532529758" className='top-quote-btn btn-secondary'><MdOutlinePermPhoneMsg className='call-icon' /> (253) 252-9758</a>
        </div>
      </div>

      <div className='main-content-container'>
        <div className='process-container'>
          <div style={{width: '100%'}}>
            <main className="service-main top-service-main">
              <div className="service-explain">
                <div className="text-left">
                  <h2 className='text-large'>Professional Biohazard Cleaning</h2>
                  <p>No one likes surprises. Especially not a smelly, moldy car.  Sometimes we get called to clean mold, urine, or even a busted gallon of spoiled milk. All of these are considered biohazard cleaning.</p>
                  <p>The sooner we can get to it, the easier it is to clean up. Depending on where the accident took place, how much fluid came out, and how long ago the accident happened will determine what we can do.</p>
                  <p>Generally speaking, if there is a smell lingering in the interior due to an accident, the smell should be gone once it is cleaned up.  We also have a state of the art ozone machine to blast away any remaining odors and sanitize the air.</p>
                </div>
                <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0b1445bc-f69e-44e8-6336-345384ea5700/public')`}}>
                  <img style={{visibility: 'hidden'}} alt="moldy biohazard van before and after" src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0b1445bc-f69e-44e8-6336-345384ea5700/public" />
                </div>
                {/* <div className="service-image">
                  <ReactPlayer width={280} height={487} url='https://res.cloudinary.com/brandon205/video/upload/v1674493881/Dirt-Less%20Detailing/Videos/received_1068200607393416_2_ln04go.mp4' loop muted playing />
                </div> */}
              </div>

              <br className='extra-space' />
            </main>
            <h2 style={{paddingTop: '15vh'}} className='cleaning-process-title text-large'>Our Biohazard Cleaning Process</h2>
            <ol className='list'>
              {content}
            </ol>

            <br className="extra-space" />

            <p style={{fontSize: '2rem'}}>End Results</p>
            <h3 className='pricing__heading'>Safe, Disinfected, and Clean</h3>
            <p>Our biohazard cleaning methods can bring out even the toughest messes!</p>
            <div style={{display: 'grid'}} className='place-center'>
              <div className='slider-container'>
                <div style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d09c52dc-c233-4cbd-c347-07de1c945d00/public')`}} className='slider-img'></div>
                <div style={{width: 0 + slide + '%', backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/becac15f-105d-47fe-e372-643278009900/public')`}} className='slider-img foreground'></div>
                <input type="range" min="1" max="100" value={slide} onChange={(e) => setSlide(Number(e.target.value))} className="slider-bar" name='slider' id="slider" />
                <div style={{left: slide - 4 + '%'}} className="slider-button"></div>
              </div>
            </div>

            <br className='extra-space' />

            <div style={{borderRadius: '38px 38px 0 0'}} className='service-bkg'>
              <h3 className='pricing-title text-white'>Our Biohazard Cleaning Pricing</h3>
              <p className='subtext'>*Final pricing may vary within the ranges below based on your vehicle condition and size.</p>
              <div className="pricing-container">
                <div className="pricing-card text-black">
                  <h5>Biohazard Cleaning</h5>
                  <p>A complete <a href="/services/full-interior-detail" className='aside-link'>full interior detailing</a> (included) to clean the vehicle completely.</p>
                  <p>Extra steps to clean the biohazard whether that be odor, mold, or spills.</p>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <strong className='size'>Any Size Vehicle</strong>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                      <p style={{paddingBottom: 0}} className="pricing-price">$499<span className='ninety-nine'>99</span>-</p>
                      <p className="pricing-price">$999<span className='ninety-nine'>99</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="/Contact" className="new-contact-btn">Contact Us</a>
              <br className='extra-space' />
            </div>

            <div className="service-bkg-lighter">
              <div style={{paddingBottom: '3rem'}} className="general-container new-heading-container">
                <strong className="above-heading">End Results</strong>
                <h3 className="new-heading">Some extreme examples of our Biohazard cleaning work so far:</h3>
              </div>
              <div className="general-container">
                <div className="mini-grid">
                  <Zoom>
                    <div className="card card-tall" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0b1445bc-f69e-44e8-6336-345384ea5700/public')`}}></div>
                  </Zoom>
                  <Zoom>
                    <div className="card card-tall" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/573ae239-6c34-445b-648b-be2771384600/public')`}}></div>
                  </Zoom>
                  <Zoom>
                    <div className="card card-tall" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/94622f27-c613-4daa-6c08-4d0cb31af800/public')`}}></div>
                  </Zoom>
                </div>
              </div>
              <br className='extra-space' />
            </div>
          </div>


        </div>

      </div>
    </section>
  )
}
