import React, { useState } from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import PricingComponent from '../../utils/PricingComponent';
import animationVariations from '../../utils/animationVariations';
import { motion } from 'framer-motion';
import addons from '../../utils/Addons';

export default function InteriorSpill() {
  const [slide, setSlide] = useState(50);

  return (
    <section className='service-content-container'>
      <Head>
        <title>Interior with Spill Guard | Dirt-Less Detailing</title>
        <Metatags
          title='Interior with Spill Guard | Dirt-Less Detailing'
          description='Our Full Interior cleaning process with an interior ceramic coating, perfect for protecting all surfaces in your vehicle.'
          image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a196c77-cb1a-42f9-479b-8fdbe3c14500/public'
          canonical='/services/interior-spill'
        />
        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "Full Interior with Spill Guard",
            "brand": "Dirt-Less Detailing",
            "description": "Get your car's interior looking brand new with our full interior detailing service, topped off with a ceramic coating to protect your vehicle from day to day use! Contact us to schedule your appointment today.",
            "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a196c77-cb1a-42f9-479b-8fdbe3c14500/public",
            "url": "https://www.dirtlessdetailing.com/services/interior-spill/",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "450",
              "priceSpecification": {
              	"@type": "PriceSpecification",
                "priceCurrency": "USD",
                "price": "450",
                "minPrice": "450",
                "maxPrice": "575"
              },
              "availability": "http://schema.org/InStock",
              "itemOffered": {
                "@type": "Service",
                "name": "Full Interior with Spill Guard",
                "serviceType": "Interior Detailing",
                "providerMobility": "dynamic"
              }
            }
          }`,
        }} />
      </Head>
      <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6d1c1456-97c0-4c35-d58a-ed3c0d576a00/cover')`}}></div>
      <div className="servicepage-header">
        <div>
          <h1><span className='accent-blue bold text-shadow'>Full Interior + Spill Guard</span></h1>
          <h2 className='page-subheading'>Our highly rated interior service topped with an interior ceramic coating.</h2>
          <div className='header-buttons'>
            <a href="/Contact" className='top-quote-btn'><img src='../assets/icons/clipboard.png' alt='clipboard' className='btn-icon' /> Book Now!</a>
            <a href="tel:2532529758" className='top-quote-btn btn-secondary'><img src='../assets/icons/phoneMessage.png' alt='call or message' className='btn-icon' /> (253) 252-9758</a>
          </div>
        </div>
        <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a196c77-cb1a-42f9-479b-8fdbe3c14500/public')`}}>
          <img style={{visibility: 'hidden'}} alt="Clean drivers seat interior of a Subaru" src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a196c77-cb1a-42f9-479b-8fdbe3c14500/public" />
        </div>
      </div>

      <div className='main-content-container'>
        <div className='process-container'>
          <div style={{width: '100%'}}>
            <main className="service-main">
              <h2 style={{marginBottom: 0}} className='text-large'>Full Interior + Spill Guard</h2>
              <hr style={{margin: '0 auto 3rem auto'}} />
              <div className="service-explain">
                <p>If your car's interior is often put under heavy use by kids, food, drinks, and even animals then this is the best choice for you. Not only will we remove the past few months of dirt, french fries, and who knows what else, but we'll also protect your interior from the next few months of use!</p>
                <p>With this Spill Guard option you'll get a layer of ceramic coating applied to all materials of your vehicle, even the fabric! Now cleanup from life's accidents will be far easier as the coating will act as a protective layer and will give you more time to clean up before things soak in.</p>
                <p>And don't worry, the coating doesn't act like the cheap conditioners that you can buy either, where they shine things for a week and make all surfaces slippery. Your car will feel similar, look brighter, and you won't be sliding around in your seat when you drive.</p>
                <p>Do you need the outside of your car washed too? Feel free to book an interior and exterior detail, it's the best way to get your whole vehicle brought back to life! Check out our base exterior cleaning <a href="/services/exterior" className='aside-link'>here</a>, starting at only <span className='bold'>$75</span>!</p>
              </div>
            </main>
            <br className='extra-space' />

            <h2 className='cleaning-process-title text-xl'>Our Interior + Spill Guard Process</h2>
            <ol className='list'>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>1</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Expose Hidden Dirt</h4>
                  <p className='step-desc'>Use drill brushes and our Tornador Vortex Blowgun which uses compressed air to blow out any loose soil and gets areas that are hard to reach with a vacuum.</p>
                </div>
              </li>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>2</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Vacuum Vehicle</h4>
                  <p className='step-desc'>Thoroughly vacuum every crack and crevice of the vehicle.</p>
                </div>
              </li>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>3</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Hot Water Extraction (if needed)</h4>
                  <p className='step-desc'>We use a professional grade hot water extractor and professional flex stain remover and alkaline floor rinse to keep floors at a neutral PH level. We will be sure to get all carpets, floor mats, and cloth seats.</p>
                </div>
              </li>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>4</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Door Jambs</h4>
                  <p className='step-desc'>Clean all of the door jambs.</p>
                </div>
              </li>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>5</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Wipe Down Plastics and Leathers</h4>
                  <p className='step-desc'>We will clean, steam, and degrease all plastics and leather seats.</p>
                </div>
              </li>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>6</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Window Cleaning</h4>
                  <p className='step-desc'>Clean all windows and other glass, removing any streaking possibly left behind from the previous steps.</p>
                </div>
              </li>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>7</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Interior Spill Guard Coating</h4>
                  <p className='step-desc'>Apply a 1 year interior ceramic coating to all surfaces in the vehicle. This is PERFECT for cars with kids, pets, or daily coffee trips with the occasional spills, as cleaning it will now be 10x easier.</p>
                </div>
              </li>
            </ol>

            <br className='extra-space' />

            <p style={{fontSize: '2rem', margin: 0, color: 'white'}}>End Results</p>
            <h3 className='pricing__heading'>Your car like you've never seen it before.</h3>
            <p className='pricing__subtext'>Our interior coating also brings out more color in the plastics and leather without being slippery to the touch.</p>
            <div style={{display: 'grid', marginBottom: '10vh'}} className='place-center'>
              <div className='slider-container'>
                <div style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/907d2e8b-5d24-40bf-387e-90be139c2d00/public')`}} className='slider-img'></div>
                <div style={{width: slide + '%', backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/70e54f6b-a9f8-48aa-a9af-893776082400/public')`}} className='slider-img foreground'></div>
                <input type="range" min="1" max="100" value={slide} onChange={(e) => setSlide(Number(e.target.value))} className="slider-bar" name='slider' id="slider" />
                <div style={{left: slide - 4 + '%'}} className="slider-button"></div>
              </div>
            </div>

            <div>
              <div className='pricing__heading-container'>
                <h3 className="pricing__heading"><span className='accent-blue bold'>Full Interior + Spill Guard</span> Pricing</h3>
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>
              <PricingComponent prices={[450, 450, 500, 500, 575, 575]} addons={[addons.ozone]} />
            </div>

            <div className="preview-container">
              <motion.a initial='rest' whileHover='hover' variants={animationVariations.previewParentVariation} href="/gallery/interior" className="gallery-preview">
                <motion.img variants={animationVariations.imgVariation1} src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/f6170666-70f6-487c-4db8-26125453df00/public" alt="preview" className='preview-img' />
                <motion.img variants={animationVariations.imgVariation2} src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5cba81f3-c606-430c-4d2b-4b90409ed600/public" alt="preview" className='preview-img' />
                <motion.img variants={animationVariations.imgVariation3} src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a196c77-cb1a-42f9-479b-8fdbe3c14500/public" alt="preview" className='preview-img' />
                <motion.img variants={animationVariations.imgVariation4} src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/878bae8f-0568-46c7-ba04-9a1025e24300/public" alt="preview" className='preview-img' />
              </motion.a>
              <div className="preview-content">
                <h4>See examples of our interior <a href="/gallery/interior" className='aside-link'>work <img src='../assets/icons/linking.png' style={{marginLeft: '0.5rem'}} alt='external link' className='icon-36' /></a></h4>
                <p>Our interior gallery page has a large collection of interior images including before and after pictures! Check it out <a href="/gallery/interior" className='aside-link'>here</a>.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
