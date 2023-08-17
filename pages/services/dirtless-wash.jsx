import React, { useState } from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import { BiLinkExternal } from 'react-icons/bi';
import PricingComponent from '../../utils/PricingComponent';
import addons from '../../utils/Addons';

const steps = [
  ["Wash Vehicle", "Thorough 2 bucket or equivalent top to bottom wash including the gas door."],
  ["Wheel Cleaning", "Clean wheels, wheel wells, and wheel barrels."],
  ["Remove tar and sap", "Remove any and all tar and sap from the exterior."],
  ["Wax Vehicle", "Apply a coating of spray wax."],
  ["Dry Vehicle", "Dry the whole vehicle with clean towels and air blowers."],
  ["Dress Vehicle", "Dress tires, wheel wells, and plastics."]
]

export default function DLWash() {
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
        <title>Dirt-Less Car Wash | Dirt-Less Detailing</title>
        <Metatags
          title='Dirt-Less Car Wash | Dirt-Less Detailing'
          description='The Dirt-Less Wash is our base tier exterior car wash service, complete with a spray wax to protect your vehicle.'
          image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a7b4af9c-97db-42dc-3b72-452a6221aa00/public'
          canonical='/services/dirtless-wash'
        />
        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "Dirt-Less Wash",
            "brand": "Dirt-Less Detailing",
            "description": "At Dirt-Less Detailing, we offer a comprehensive car wash service to keep your vehicle looking its best.",
            "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a7b4af9c-97db-42dc-3b72-452a6221aa00/public",
            "url": "https://www.dirtlessdetailing.com/services/dirtless-wash/",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "75",
              "priceSpecification": {
              	"@type": "PriceSpecification",
                "priceCurrency": "USD",
                "price": "75",
                "minPrice": "75",
                "maxPrice": "225"
              },
              "availability": "http://schema.org/InStock",
              "itemOffered": {
                "@type": "Service",
                "name": "Dirt-Less Wash Service",
                "serviceType": "Car Wash",
                "providerMobility": "dynamic"
              }
            }
          }`,
        }} />
      </Head>
      <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a7b4af9c-97db-42dc-3b72-452a6221aa00/cover')`}}></div>
      <div className="servicepage-header">
        <h1>Dirt-Less Wash</h1>
        <h2 className='page-subheading'>Get a Dirt-Less Wash and have your vehicle shine like never before!</h2>
        <div className='header-buttons'>
          <a href="/Contact" className='top-quote-btn'><img src='../assets/icons/clipboard.png' alt='clipboard' className='btn-icon' /> Get a Free Quote</a>
          <a href="tel:2532529758" className='top-quote-btn btn-secondary'><img src='../assets/icons/phoneMessage.png' alt='call or message' className='btn-icon' /> (253) 252-9758</a>
        </div>
      </div>

      <div className='main-content-container'>
        <div className="process-container">
          <div style={{width: '100%'}}>
            <main className="service-main top-service-main">
              <div className="service-explain">
                <div className="text-left">
                  <h2 className='text-large mt-0'>Dirt-Less Wash</h2>
                  <p>The Dirt-Less Wash is a professional car wash service that specializes in providing exceptional care for all types of vehicles. We take pride in our commitment to using the latest techniques and high-quality products to ensure that every car is left looking its best. With a thorough 2 bucket method or equivalent, we will ensure that every inch of your car is washed with great care.</p>
                  <p>After the car is washed we will clean the wheels and wheel wells, remove any stubborn tar or sap, and even apply a spray wax for added protection and shine. Once the car is washed, we will dry the vehicle, cleans the door jambs, and dress all plastics, wheel wells, and tires. You can be sure that our Dirt-Less wash is far better than anything you can get in a typical tunnel wash.</p>
                  <p>For those who want an even higher level of care for their vehicle, we also offer an add-on for a clay bar treatment. This treatment involves using a special clay bar to remove any contaminants or impurities from the surface of the car, leaving it with a smooth and clean finish.</p>
                </div>
                <div className="service-image" role="img" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6fb3a112-d77a-41fb-e7ec-728b2185b600/public')`}}>
                  <img style={{visibility: 'hidden'}} alt="Red mazdaspeed 3 after a dirt-less wash" src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6fb3a112-d77a-41fb-e7ec-728b2185b600/public" />
                </div>
              </div>
            </main>

            <h2 style={{marginTop: '15vh'}} className='cleaning-process-title'>Our Dirt-Less Wash Process</h2>
            <ol className='list'>
              {content}
            </ol>

            <br className='extra-space' />

            <p style={{fontSize: '2rem'}}>End Results</p>
            <h3 className='pricing__heading'>Smooth, Clean, and Picture Perfect Results.</h3>
            <p>From the wheels to the side mirrors, your car will be shining like never before!</p>
            <div style={{display: 'grid'}} className='place-center'>
              <div className='slider-container'>
                <div style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b814f739-3846-4796-3093-c34675a32c00/public')`}} className='slider-img'></div>
                <div style={{width: 0 + slide + '%', backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4d98c1bc-645c-46fa-2232-d1f735bb2300/public')`}} className='slider-img foreground'></div>
                <input type="range" min="1" max="100" value={slide} onChange={(e) => setSlide(Number(e.target.value))} className="slider-bar" name='slider' id="slider" />
                <div style={{left: slide - 4 + '%'}} className="slider-button"></div>
              </div>
            </div>

            <br className="extra-space" />

            <div>
              <div className='pricing__heading-container'>
                <h3 className="pricing__heading">Our Dirt-Less Wash Pricing</h3>
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>

              <PricingComponent prices={['74', '74', '74', '99', '149', '124']} addons={[addons.claybar, addons.glass, addons.waterspot]} />
            </div>

          </div>

        </div>

        <div style={{padding: '2rem'}} className="service-bkg-lighter">
          <div className="general-container new-heading-container">
            <strong className="above-heading">Combo Deal</strong>
            <h3 className="new-heading">Our Interior + Exterior + FREE Engine Bay Deal</h3>
          </div>
          <div style={{padding: '2rem 0'}} className="general-container">
            <h2 className="text-large text-left">The Dirt-Less Detail <a className="aside-link" href="/services/interior-exterior-detailing-combo"><BiLinkExternal /></a></h2>
            <div className="text-left">
              <p>Get a <span className="special-package">FREE</span> Engine Bay Cleaning when you schedule our Dirt-Less Detail service. This service combines our <a href="/services/full-interior-detail" className="aside-link">Full Interior Detail</a> and this Dirt-Less Wash. It is sure to get your entire vehicle looking like new, even the engine bay which is typically overlooked when washing your car.</p>
            </div>
          </div>

          <br className='extra-space' />
        </div>

      </div>
    </section>
  )
}
