import React, { useState } from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import PricingComponent from '../../utils/PricingComponent';

export default function Exterior() {
  const [slide, setSlide] = useState(50);

  return (
    <section className='service-content-container'>
      <Head>
        <title>Exterior Decon Wash | Dirt-Less Detailing</title>
        <Metatags
          title='Exterior Decon Wash | Dirt-Less Detailing'
          description='Experience a showroom shine and unparalleled protection with our Exterior Decon Wash, ensuring your car gleams like new while safeguarding its finish.'
          image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6d1c1456-97c0-4c35-d58a-ed3c0d576a00/public'
          canonical='/services/exterior'
        />
        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "Exterior Decon Wash",
            "brand": "Dirt-Less Detailing",
            "description": "Experience a showroom shine and unparalleled protection with our Exterior Decon Wash, ensuring your car gleams like new while safeguarding its finish.",
            "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6d1c1456-97c0-4c35-d58a-ed3c0d576a00/public",
            "url": "https://www.dirtlessdetailing.com/services/exterior/",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "100",
              "priceSpecification": {
              	"@type": "PriceSpecification",
                "priceCurrency": "USD",
                "price": "100",
                "minPrice": "100",
                "maxPrice": "150"
              },
              "availability": "http://schema.org/InStock",
              "itemOffered": {
                "@type": "Service",
                "name": "Exterior Decon Wash",
                "serviceType": "Exterior Detailing",
                "providerMobility": "dynamic"
              }
            }
          }`,
        }} />
      </Head>
      <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6d1c1456-97c0-4c35-d58a-ed3c0d576a00/cover')`}}></div>
      <div className="servicepage-header">
        <div>
          <h1><span className='accent-orange bold'>Exterior Decon Wash</span></h1>
          <h2 className='page-subheading'>Get a complete car wash, down to even the smallest dots of tar removed.</h2>
          <div className='header-buttons'>
            <a href="/Contact" className='top-quote-btn'><img src='../assets/icons/clipboard.png' alt='clipboard' className='btn-icon' /> Book Now!</a>
            <a href="tel:2532529758" className='top-quote-btn btn-secondary'><img src='../assets/icons/phoneMessage.png' alt='call or message' className='btn-icon' /> (253) 252-9758</a>
          </div>
        </div>
        <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a40931e-dd21-407c-dd03-86fd43b05200/public')`}}>
          <img style={{visibility: 'hidden'}} alt="Clean drivers seat interior of a Subaru" src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a40931e-dd21-407c-dd03-86fd43b05200/public" />
        </div>
      </div>

      <div className='main-content-container'>
        <div className='process-container'>
          <div style={{width: '100%'}}>
            <main className="service-main">
              <h2 style={{marginBottom: 0}} className='text-large'>Exterior Decon Wash</h2>
              <hr style={{margin: '0 auto 3rem auto'}} />
              <div className="service-explain">
                <p>CHANGE THESE LATER!!!! The goal of the Full Interior Cleaning package is to restore your interior to its best condition. Your carpet, seats, floor mats, plastics, windows, and all other interior fixtures will be meticulously cleaned.</p>
                <p>Bring up something about the tire cleaning process here</p>
                <p>Bring up what decon wash even means somewhere in here too</p>
                <p>Is your whole car a mess, inside and out? Simply book an interior and exterior service, we'll do the hard work to get your car back to 100%! Check out our exterior offers <a href="/services/exterior" className='aside-link'>here</a>.</p>
              </div>
            </main>
            <br className='extra-space' />

            <h2 className='cleaning-process-title text-xl'>Our Exterior Decon Wash Process</h2>
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
                  <h4 className="step-title">Protect Paint</h4>
                  <p className='step-desc'>Apply our mix of Ceramic Spray (gives the whole vehicle 3 months of protection).</p>
                </div>
              </li>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>5</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Dry Vehicle</h4>
                  <p className='step-desc'>Dry the whole vehicle with drying towels and air blowers.</p>
                </div>
              </li>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>6</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Final Touches</h4>
                  <p className='step-desc'>Dress tires, wheel wells and plastics.</p>
                </div>
              </li>
              <li className="item item-disabled">
                <div className='step-number-container'>
                  <h3 className='step-number'>7</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">All this and more!</h4>
                  <p className='step-desc'>If you opt for our Exterior Seal and Shine package you get all of these services, a full vehicle polish, specialized windshield and trim coatings, and a top coating of IGL Premier, leaving you with 1 year of total protection!</p>
                </div>
              </li>
            </ol>

            <br className='extra-space' />

            <p style={{fontSize: '2rem', margin: 0, color: 'white'}}>End Results</p>
            <h3 className='pricing__heading'>100x Better than a car wash.</h3>
            <p className='pricing__subtext'>Your car, washed, without the unnecessary scratching and missed corners.</p>
            <div style={{display: 'grid', marginBottom: '10vh'}} className='place-center'>
              <div className='slider-container'>
                <div style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b814f739-3846-4796-3093-c34675a32c00/public')`}} className='slider-img'></div>
                <div style={{width: slide + '%', backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4d98c1bc-645c-46fa-2232-d1f735bb2300/public')`}} className='slider-img foreground'></div>
                <input type="range" min="1" max="100" value={slide} onChange={(e) => setSlide(Number(e.target.value))} className="slider-bar" name='slider' id="slider" />
                <div style={{left: slide - 4 + '%'}} className="slider-button"></div>
              </div>
            </div>

            <div>
              <div className='pricing__heading-container'>
                <h3 className="pricing__heading"><span className='accent-orange bold'>Exterior Decon Wash</span> Pricing</h3>
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>
              <PricingComponent prices={[100, 100, 125, 125, 150, 150]} />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}