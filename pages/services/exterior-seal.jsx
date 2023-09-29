import React, { useState } from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import PricingComponent from '../../utils/PricingComponent';

export default function ExteriorSeal() {
  const [slide, setSlide] = useState(50);

  return (
    <section className='service-content-container'>
      <Head>
        <title>Exterior Seal and Shine | Dirt-Less Detailing</title>
        <Metatags
          title='Exterior Seal and Shine | Dirt-Less Detailing'
          description='Experience a showroom shine and unparalleled protection with our Exterior Seal and Shine, ensuring your car gleams like new while safeguarding its finish.'
          image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/977438a8-129b-496b-9845-e55e3198e900/public'
          canonical='/services/exterior-seal'
        />
        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "Exterior Seal and Shine",
            "brand": "Dirt-Less Detailing",
            "description": "Experience a showroom shine and unparalleled protection with our Exterior Seal and Shine, ensuring your car gleams like new while safeguarding its finish.",
            "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/977438a8-129b-496b-9845-e55e3198e900/public",
            "url": "https://www.dirtlessdetailing.com/services/exterior-seal/",
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
                "name": "Exterior Seal and Shine",
                "serviceType": "Exterior Detailing",
                "providerMobility": "dynamic"
              }
            }
          }`,
        }} />
      </Head>
      <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/977438a8-129b-496b-9845-e55e3198e900/cover')`}}></div>
      <div className="servicepage-header">
        <div>
          <h1><span className='accent-blue bold text-shadow'>Exterior Seal and Shine</span></h1>
          <h2 className='page-subheading'>Our tried and true wash with a corrective polish, and even stronger Ceramic Spray coating.</h2>
          <div className='header-buttons'>
            <a href="/Contact" className='top-quote-btn'><img src='../assets/icons/clipboard.png' alt='clipboard' className='btn-icon' /> Book Now!</a>
            <a href="tel:2532529758" className='top-quote-btn btn-secondary'><img src='../assets/icons/phoneMessage.png' alt='call or message' className='btn-icon' /> (253) 252-9758</a>
          </div>
        </div>
        <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/c4bc3845-d897-4dcc-9401-f7feca96a200/public')`}}>
          <img style={{visibility: 'hidden'}} alt="Before and after of a Ford Truck from the side" src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/c4bc3845-d897-4dcc-9401-f7feca96a200/public" />
        </div>
      </div>

      <div className='main-content-container'>
        <div className='process-container'>
          <div style={{width: '100%'}}>
            <main className="service-main">
              <h2 style={{marginBottom: 0}} className='text-large'>Exterior Seal and Shine</h2>
              <hr style={{margin: '0 auto 3rem auto'}} />
              <div className="service-explain">
                <p>This service comes with everything from our base tier Wash Service, including the deep wheel cleaning and decon wash. However it adds steps after those that will truely transform your vehicles paint.</p>
                <p>The "Seal" part of this service comes from a product made by IGL which we polish onto the paint restoring the shine while removing scratches. Wiping down the vehicle with IGL Premier ensures an unmatched shine and protection.</p>
                <p>Drive confidently year-round with our Exterior Seal and Shine service, combining the power of a thorough decontamination wash, precision polishing, and IGL Premier coating, ensuring your car remains protected and shines like it just rolled off the showroom floor.</p>
                <p>Now's the perfect time to book a interior cleaning as well if you need it. Check out our current offers and pricing on our base interior service <a href="/services/interior" className='aside-link'>here</a>.</p>
              </div>
            </main>
            <br className='extra-space' />

            <h2 className='cleaning-process-title text-xl'>Our Exterior Seal and Shine Process</h2>
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
                  <p className='step-desc'>Perform our Polishing Procedure removing many of the lighter scratches and swirls from your paint. This also removes all watermarks on the vehicle, even on the glass as we go over that as well.</p>
                </div>
              </li>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>5</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Protect Vehicle</h4>
                  <p className='step-desc'>Apply IGL Premier to the whole vehicle giving you 6 more months of protection on top of the protection from the polish! At this stage we'll also apply our windshield and trim coatings to cover the rest of your vehicle!</p>
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
              <li className="item item-disabled">
                <div className='step-number-container'>
                  <h3 className='step-number'>8</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">All this and more!</h4>
                  <p className='step-desc'>If you opt for our Exterior Correct and Protect package you get all of these services, a full vehicle Paint Correction (more in depth than a polish), and a 5 year Ceramic Coating, leaving you with 4 more years of protection with correct maintenance!</p>
                </div>
              </li>
            </ol>

            <br className='extra-space' />

            <p style={{fontSize: '2rem', margin: 0, color: 'white'}}>End Results</p>
            <h3 className='pricing__heading'>Clean, Shiny, and Protected.</h3>
            <p className='pricing__subtext'>With light scratches removed and a year of protection applied your car will shine like never before!</p>
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
                <h3 className="pricing__heading"><span className='accent-blue bold'>Exterior Seal and Shine</span> Pricing</h3>
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>
              <PricingComponent prices={[300, 300, 350, 350, 400, 400]} />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
