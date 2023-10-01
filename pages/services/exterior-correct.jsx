import React, { useState } from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import PricingComponent from '../../utils/PricingComponent';
import animationVariations from '../../utils/animationVariations';
import { motion } from 'framer-motion';
import addons from '../../utils/Addons';

export default function ExteriorCorrect() {
  const [slide, setSlide] = useState(50);

  return (
    <section className='service-content-container'>
      <Head>
        <title>Exterior Correct and Protect | Dirt-Less Detailing</title>
        <Metatags
          title='Exterior Correct and Protect | Dirt-Less Detailing'
          description="Elevate your vehicle's appearance and protection with our Correct and Protect service, leaving your car with a mirror-like shine and defense."
          image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2bd5c3dd-6677-466a-e348-8495945c4700/public'
          canonical='/services/exterior-correct'
        />
        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "Exterior Correct and Protect",
            "brand": "Dirt-Less Detailing",
            "description": "Elevate your vehicle's appearance and protection with our Correct and Protect service, leaving your car with a mirror-like shine and defense.",
            "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2bd5c3dd-6677-466a-e348-8495945c4700/public",
            "url": "https://www.dirtlessdetailing.com/services/exterior-correct/",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "1300",
              "priceSpecification": {
              	"@type": "PriceSpecification",
                "priceCurrency": "USD",
                "price": "1300",
                "minPrice": "1300",
                "maxPrice": "1700"
              },
              "availability": "http://schema.org/InStock",
              "itemOffered": {
                "@type": "Service",
                "name": "Exterior Correct and Protect",
                "serviceType": "Exterior Detailing",
                "providerMobility": "dynamic"
              }
            }
          }`,
        }} />
      </Head>
      <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2bd5c3dd-6677-466a-e348-8495945c4700/cover')`}}></div>
      <div className="servicepage-header">
        <div>
          <h1><span className='accent-purple bold text-shadow'>Exterior Correct and Protect</span></h1>
          <h2 className='page-subheading'>The best of our Decon Wash and Seal and Shine packages, plus an in depth paint correction and 5 year ceramic coating.</h2>
          <div className='header-buttons'>
            <a href="/Contact" className='top-quote-btn'><img src='../assets/icons/clipboard.png' alt='clipboard' className='btn-icon' /> Book Now!</a>
            <a href="tel:2532529758" className='top-quote-btn btn-secondary'><img src='../assets/icons/phoneMessage.png' alt='call or message' className='btn-icon' /> (253) 252-9758</a>
          </div>
        </div>
        <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/1834d275-3102-4f88-a06c-92c07b9b5e00/public')`}}>
          <img style={{visibility: 'hidden'}} alt="Before and After of a very scratched up door panel" src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/1834d275-3102-4f88-a06c-92c07b9b5e00/public" />
        </div>
      </div>

      <div className='main-content-container'>
        <div className='process-container'>
          <div style={{width: '100%'}}>
            <main className="service-main">
              <h2 style={{marginBottom: 0}} className='text-large'>Exterior Correct and Protect</h2>
              <hr style={{margin: '0 auto 3rem auto'}} />
              <div className="service-explain">
                <p>This is our top of the line exterior service. If you want to remove the swirls and scratches in your paint from years of wear and damage then this is the service for you. On top of that we apply a 5 year coating which will protect your vehicle for years to come.</p>
                <p><span className='special-package'>Note:</span> This is one of the services that we require you to bring and drop off your car for, most likely overnight as the ceramic coating has a cure time before it's ready to be exposed to the elements. Also our shop has proper lighting to ensure that we don't miss any spots on the paint.</p>
                <p>Proper maintenance is vital to keep your coating in good condition. This is why we give you a bottle of IGL Enhancer to use after you wash your car from now on. We offer maintenance services if you want feel free to let us know! If you wan a more DIY solution then we've got a list of products and steps that we recommend <a href="/products/ceramic-coating" className='aside-link'>here</a>.</p>
                <p>If you want the full experience make sure to book a <a href="/services/interior" className='aside-link'>Full Interior</a> detail as well! It's only one extra step for you, but it will completely revamp your interior!</p>
              </div>
            </main>
            <br className='extra-space' />

            <h2 className='cleaning-process-title text-xl'>Our Exterior Correct and Protect Process</h2>
            <ol className='list'>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>1</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Wash Vehicle</h4>
                  <p className='step-desc'>Thorough 2 bucket or equivalent top to bottom wash including the inside of the gas door.</p>
                </div>
              </li>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>2</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Wheel Cleaning</h4>
                  <p className='step-desc'>Clean wheels, wheel wells, and wheel barrels with chemicals made for removing brake dust and road film.</p>
                </div>
              </li>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>3</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Remove tar and sap</h4>
                  <p className='step-desc'>Remove any tar and sap from the exterior. Especially if your car is white, small black dots of tar appear usually on the lower panels of the car. We have some of the best products to remove all of it.</p>
                </div>
              </li>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>4</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Remove scratches and watermarks</h4>
                  <p className='step-desc'>Perform our Paint Correction Procedure removing up to 85% of scratches and greatly reducing the look of deeper scratches. We also go over the glass as well removing any watermarks and some scratches from that.</p>
                </div>
              </li>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>5</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Protect Vehicle</h4>
                  <p className='step-desc'>Apply a 5 year Ceramic Coating to the paint, our windshield coating to the windshield, and the trim coating to all trim. Now there's no part of your car that's uncoated!</p>
                </div>
              </li>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>6</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Dry Vehicle</h4>
                  <p className='step-desc'>Dry the whole vehicle with drying towels and air blowers.</p>
                </div>
              </li>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>7</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Final Touches</h4>
                  <p className='step-desc'>Dress tires, wheel wells and plastics.</p>
                </div>
              </li>
            </ol>

            <br className='extra-space' />

            <p style={{fontSize: '2rem', margin: 0, color: 'white'}}>End Results</p>
            <h3 className='pricing__heading'>A brand new look and feel.</h3>
            <p className='pricing__subtext'>Not just a complete exterior refresh, but now your vehicle has protection against the elements that Washington throws at us.</p>
            <div style={{display: 'grid', marginBottom: '10vh'}} className='place-center'>
              <div className='slider-container'>
                <div style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2b933f30-bbff-4f91-8b88-1c83f75a4500/public')`}} className='slider-img'></div>
                <div style={{width: slide + '%', backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d2eabed6-d867-43e8-f60e-d9d95a983600/public')`}} className='slider-img foreground'></div>
                <input type="range" min="1" max="100" value={slide} onChange={(e) => setSlide(Number(e.target.value))} className="slider-bar" name='slider' id="slider" />
                <div style={{left: slide - 4 + '%'}} className="slider-button"></div>
              </div>
            </div>

            <div>
              <div className='pricing__heading-container'>
                <h3 className="pricing__heading"><span className='accent-purple bold'>Correct and Protect</span> Pricing</h3>
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>
              <PricingComponent prices={[1300, 1300, 1500, 1500, 1700, 1700]} addons={[addons.engine]} />
            </div>

            <div className="preview-container">
              <motion.a initial='rest' whileHover='hover' variants={animationVariations.previewParentVariation} href="/gallery/exterior-correct" className="gallery-preview">
                <motion.img variants={animationVariations.imgVariation1} src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/38857e90-6d35-4abe-b7de-d3934d621800/public" alt="preview" className='preview-img' />
                <motion.img variants={animationVariations.imgVariation2} src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a7cc8a20-819f-4ef2-8b36-d41dc99bc200/public" alt="preview" className='preview-img' />
                <motion.img variants={animationVariations.imgVariation3} src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/43a02c30-4982-435d-7f91-6d81fd11a000/public" alt="preview" className='preview-img' />
                <motion.img variants={animationVariations.imgVariation4} src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2bd5c3dd-6677-466a-e348-8495945c4700/public" alt="preview" className='preview-img' />
              </motion.a>
              <div className="preview-content">
                <h4>See examples of our <a href="/gallery/exterior-correct" className='aside-link'>work <img src='../assets/icons/linking.png' style={{marginLeft: '0.5rem'}} alt='external link' className='icon-36' /></a></h4>
                <p>See the stunning results that you'll get from our Correct and Protect service, water will be beading straigh off of your whole car! Check it out <a href="/gallery/exterior-correct" className='aside-link'>here</a>.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
