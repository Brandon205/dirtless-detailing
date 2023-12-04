import React, { useState } from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import PricingComponent from '../../utils/PricingComponent';
import { previewParentVariation, imgVariation1, imgVariation2, imgVariation3, imgVariation4, topBtnVariant } from '../../utils/animationVariations';
import { motion } from 'framer-motion';
import FaqItem from '../../components/FaqItem';
import addons from '../../utils/Addons';

const faqItems = [
  {
    title: "How long does your Ceramic Coating last?",
    description: <p className='faq-description'>Your paint will be protected for a lifetime, however, over time your coating can get clogged with contaminants and gloss, slickness, and water beading can degrade. If you want to maintain all the benefits of your ceramic coating we recommend getting our <a href="/services/exterior-seal" className="aside-link">Seal and Shine</a> package annually. This package fully decontaminates and refreshes your ceramic coating back to the day you got it.</p>
  },
  {
    title: "Can I still go through car washes?",
    description: <p className='faq-description'>We never recommend going through a car wash as they can reduce the gloss slickness and beading of your coating prematurely. However in a pinch a touchless car wash will suffice. Just make sure to use the cheapest setting, without any wax's. It is also recommended after the wash to dry the whole vehicle with supple towels (We recommend <a href="https://amzn.to/449nFm7" className='aside-link' target="_blank" rel="noopener">The Rag Company's Large Drying Towel</a>) and <a href="https://amzn.to/3uKuqi1" className='aside-link' target="_blank" rel="noopener">Griot's Ceramic Speed Shine</a>!</p>
  },
  {
    title: "How should I wash my car then?",
    description: <p>You can check out our <a href="/products/ceramic-coating" className='aside-link'>DIY Maintenance</a> page to see all the products and steps that we recommend for a complete wash and decontamination all for under $150. You can also ask us about our maintenance services, they don't cost too much per service plus they include the interior if you have had any one of our Interior Detail services done before!</p>
  }
]

export default function ExteriorCorrect() {
  const [slide, setSlide] = useState(50);
  const [expanded, setExpanded] = useState(false);

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
      <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/1d5eccf3-e4ec-47db-c652-fb40f808c800/cover')`, backgroundPositionY: '-316px'}}></div>
      <div className="servicepage-header">
        <div>
          <h1><span className='accent-orange bold text-shadow'>Exterior Correct and Protect</span></h1>
          <h2 className='page-subheading'>The best of our Decon Wash and Seal and Shine packages, plus an in depth paint correction and 5 year ceramic coating.</h2>
          <div className='header-buttons'>
            <motion.a href="/Contact" className='top-quote-btn' variants={topBtnVariant} whileHover='hover' transition={{duration: 0.25}}><img src='../assets/icons/clipboard.png' alt='clipboard' className='btn-icon' /> Book Now!</motion.a>
            <motion.a href="tel:2532529758" className='top-quote-btn btn-secondary' variants={topBtnVariant} whileHover='hover' transition={{duration: 0.25}}><img src='../assets/icons/phoneMessage.png' alt='call or message' className='btn-icon' /> (253) 252-9758</motion.a>
          </div>
        </div>
        <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/f7c127be-d17d-4563-48c3-809289e8bc00/public')`}}>
          <img style={{visibility: 'hidden'}} alt="Before and After of a very scratched up door panel" src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/f7c127be-d17d-4563-48c3-809289e8bc00/public" />
        </div>
      </div>

      <div className='main-content-container'>
        <div className='process-container'>
          <div style={{width: '100%'}}>
            <main className="service-main">
              <h2 style={{marginBottom: 0}} className='text-large'>Exterior Correct and Protect</h2>
              <hr style={{margin: '0 auto 3rem auto'}} />
              <div className="service-explain">
                <p>This is our top of the line exterior service. If you want to remove years of wear and scratching, and provide the best protection available, then this is the service for you. We start off with our exterior decon wash and claybar removing any final contaminates. From there, we refine your paint by performing an in depth polishing step removing as many imperfections we can while still doing it safely.</p>
                <p><span className='special-package'>Note:</span> This is one of the services that we require you to drop off your car at our shop for. We will most likely need to keep you car overnight as the ceramic coating has a cure time before it's ready to be exposed to the elements. Also, our shop has proper lighting to ensure that we don't miss any spots on the paint. Proper maintenance is vital to keep your coating in good condition. This is why we give you a bottle of IGL Enhancer to use after you wash your car from this point on. We offer maintenance services if you want. Feel free to let us know! If you want a more <a href="/products/ceramic-coating" className='aside-link'>DIY Solution</a>, then we've got a list of products and steps that we recommend.</p>
                <p>Last but not least is the ceramic coating! To provide <span className='bold'>LIFETIME PROTECTION<span className='special-package'>*</span></span> on the paint coating, we coat your whole vehicle with the hardest, most resilient ceramic coatings on the market. This includes paint, trim, lights, glass, and wheels.</p>
                <p><span className='special-package'>*</span>To keep your Lifetime warranty, our Seal and Shine package must be completed at least once annually. Otherwise, we provide a 5 year warranty on your paint coating.</p>
              </div>
            </main>
            <br className='extra-space' />
            <br className='extra-space' />

            <div>
              <div className='pricing__heading-container'>
                <h3 className="pricing__heading"><span className='accent-orange bold'>Correct and Protect</span> Pricing</h3>
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>
              <PricingComponent prices={[1300, 1300, 1300, 1500, 1700, 1700]} addons={[addons.engine]} />
            </div>

            <h2 className='cleaning-process-title text-xl'>Our Exterior Correct and Protect Process</h2>
            <ol className='list'>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>1</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Wash Vehicle</h4>
                  <p className='step-desc'>Thorough top to bottom wash including the gas door.</p>
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
                  <h4 className="step-title">Dry Vehicle</h4>
                  <p className='step-desc'>Dry the whole vehicle with drying towels and air blowers.</p>
                </div>
              </li>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>5</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Remove scratches and watermarks</h4>
                  <p className='step-desc'>Perform our Paint Correction procedure removing up to 85%-90% of scratches and greatly reducing the look of deeper scratches. We also go over the glass as well removing watermarks and fine scratches.</p>
                </div>
              </li>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>6</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Protect Vehicle</h4>
                  <p className='step-desc'>Apply our 5 year coating to the paint. At this point we also coat the windshield and the trim. Now there's no part of your car that's uncoated!</p>
                </div>
              </li>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>7</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Clean Door Jambs</h4>
                  <p className='step-desc'>Thoroughly wipe down all the cracks and crevices in the door jambs.</p>
                </div>
              </li>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>8</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Final Touches</h4>
                  <p className='step-desc'>Dress tires with ceramic tire shine, and also dress the wheel wells.</p>
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

            <div className="preview-container">
              <motion.a initial='rest' whileHover='hover' variants={previewParentVariation} href="/gallery/correct" className="gallery-preview">
                <motion.img variants={imgVariation1} src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/38857e90-6d35-4abe-b7de-d3934d621800/public" alt="preview" className='preview-img' />
                <motion.img variants={imgVariation2} src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a7cc8a20-819f-4ef2-8b36-d41dc99bc200/public" alt="preview" className='preview-img' />
                <motion.img variants={imgVariation3} src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/43a02c30-4982-435d-7f91-6d81fd11a000/public" alt="preview" className='preview-img' />
                <motion.img variants={imgVariation4} src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2bd5c3dd-6677-466a-e348-8495945c4700/public" alt="preview" className='preview-img' />
              </motion.a>
              <div className="preview-content">
                <h4>See examples of our <a href="/gallery/correct" className='aside-link'>work <img src='../assets/icons/linking.png' style={{marginLeft: '0.5rem'}} alt='external link' className='icon-36' /></a></h4>
                <p>See the stunning results that you'll get from our Correct and Protect service, water will be beading straight off of your whole car! Check it out <a href="/gallery/correct" className='aside-link'>here</a>.</p>
              </div>
            </div>

            <div id='faq' style={{width: '90%', margin: '0 auto', paddingTop: '2rem'}}>
              <div className="new-heading-container text-white">
                <strong className="above-heading">Ceramic Coating FAQ</strong>
                <h3 className="new-heading">Answers for the most commonly asked questions about ceramic coatings.</h3>
              </div>
              <div className='faq-container' style={{color: 'white'}}>
                {faqItems.map((item, i) => (
                  <FaqItem key={i} i={i} expanded={expanded} setExpanded={setExpanded} title={item.title} description={item.description} />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
