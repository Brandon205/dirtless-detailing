import React, { useState } from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import PricingComponent from '../../utils/PricingComponent';

export default function InteriorSpill() {
  const [slide, setSlide] = useState(50);

  return (
    <section className='service-content-container'>
      <Head>
        <title>Interior with Spill Guard | Dirt-Less Detailing</title>
        <Metatags
          title='Interior with Spill Guard | Dirt-Less Detailing'
          description='Our Full Interior cleaning process with an interior ceramic coating, perfect for protecting all surfaces in your vehicle.'
          image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6d1c1456-97c0-4c35-d58a-ed3c0d576a00/public'
          canonical='/services/interior-spill'
        />
        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "Full Interior with Spill Guard",
            "brand": "Dirt-Less Detailing",
            "description": "Get your car's interior looking brand new with our full interior detailing service, topped off with a ceramic coating to protect your vehicle from day to day use! Contact us to schedule your appointment today.",
            "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6d1c1456-97c0-4c35-d58a-ed3c0d576a00/public",
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
          <h1><span className='accent-blue bold'>Full Interior + Spill Guard</span></h1>
          <h2 className='page-subheading'>Our highly rated interior service topped with an interior ceramic coating.</h2>
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
              <h2 style={{marginBottom: 0}} className='text-large'>Full Interior + Spill Guard</h2>
              <hr style={{margin: '0 auto 3rem auto'}} />
              <div className="service-explain">
                <p>CHANGE THESE LATER!!!! The goal of the Full Interior Cleaning package is to restore your interior to its best condition. Your carpet, seats, floor mats, plastics, windows, and all other interior fixtures will be meticulously cleaned.</p>
                <p>While we will attempt to remove 100% of stains many stains could prove to be more challenging to remove or might not be completely removed. Some won't completely disappear depending on the kind of stain, how long it has been sitting, and the material the stain is on. </p>
                <p>Taking us by surprise is difficult. Please don't think that your interior is too dirty. We've seen hundreds of different interiors and have all the necessary tools to attempt to remove any kind of stain or mess.</p>
                <p>Is your whole car a mess, inside and out? Simply book an interior and exterior service, we'll do the hard work to get your car back to 100%! Check out our exterior offers <a href="/services/exterior" className='aside-link'>here</a>.</p>
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
                  <p className='step-desc'>Use drill brushes and our Tornador Vortex Blowgun which uses compressed air to blow out loose soil and any spots that are hard to reach with a vacuum.</p>
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
                  <h4 className="step-title">Wipe Down Plastics and Leathers</h4>
                  <p className='step-desc'>We will clean, steam, and degrease all plastics and leather seats.</p>
                </div>
              </li>
              <li className="item">
                <div className='step-number-container'>
                  <h3 className='step-number'>5</h3>
                </div>
                <div className='step-container'>
                  <h4 className="step-title">Door Jambs</h4>
                  <p className='step-desc'>Clean all of the door jambs.</p>
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
                <h3 className="pricing__heading"><span className='accent-blue bold'>Full Interior</span> Pricing</h3>
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>
              <PricingComponent prices={[300, 300, 335, 335, 375, 375]} />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
