import React, { useState } from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import { BiLinkExternal } from 'react-icons/bi';
import PricingComponent from '../../utils/PricingComponent';
import addons from '../../utils/Addons';

const steps = [
  ["Expose Hidden Dirt", "Use drill brushes and our Tornador Vortex Blowgun which uses compressed air to blow out every spot a vacuum can't reach. Using these also extracts sand and loose soil from carpeting."],
  ["Vacuum Vehicle", "Thoroughly vacuum every crack and crevice of the vehicle."],
  ["Hot Water Extraction", "We use a professional hot water extractor and professional flex stain remover and alkaline floor rinse to keep floors at a neutral PH level. We will be sure to get all carpets, floor mats, and cloth seats."],
  ["Wipe Down Plastics and Leathers", "We will clean, steam, and degrease all plastics and leather seats."],
  ["Dress Interior", "Dress or Coat Interior**"],
  ["Door Jambs", "Clean all of the door jambs."],
  ["Window Cleaning", "Clean windows."]
]

export default function FullIntEx() {
  const [slide, setSlide] = useState(50);

  const content = steps.map((item, id) => {
    return (
      <li key={id} className="item">
        <div className='step-number-container'>
          <h3 className='step-number'>{id + 1}</h3><div className="vertical-rule"></div>
        </div>
        <div className='step-container'>
          <h4 className="step-title">{item[0]}{id === 2 ? <span className='special-package'>*</span> : ""}</h4>
          <p className='step-desc'>{item[1]}</p>
        </div>
      </li>
    )
  })

  return (
    <section className='service-content-container'>
      <Head>
        <title>Full Interior Cleaning | Dirt-Less Detailing</title>
        <Metatags
          title='Full Interior Cleaning | Dirt-Less Detailing'
          description='Our Full Interior cleaning is the most sought after service, and for good reason, it will completely renew your cars interior!'
          image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6d1c1456-97c0-4c35-d58a-ed3c0d576a00/public'
          canonical='/services/full-interior-detail'
        />
        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "Full Interior Detailing",
            "brand": "Dirt-Less Detailing",
            "description": "Get your car's interior looking brand new with our full interior detailing service. We offer thorough cleaning and conditioning of all surfaces, including the dashboard, seats, and carpets. Contact us to schedule your appointment today.",
            "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6d1c1456-97c0-4c35-d58a-ed3c0d576a00/public",
            "url": "https://www.dirtlessdetailing.com/services/full-interior-detail/",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "300",
              "priceSpecification": {
              	"@type": "PriceSpecification",
                "priceCurrency": "USD",
                "price": "300",
                "minPrice": "300",
                "maxPrice": "500"
              },
              "availability": "http://schema.org/InStock",
              "itemOffered": {
                "@type": "Service",
                "name": "Full Interior Detailing Service",
                "serviceType": "Interior Detailing",
                "providerMobility": "dynamic"
              }
            }
          }`,
        }} />
      </Head>
      <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6d1c1456-97c0-4c35-d58a-ed3c0d576a00/cover')`}}></div>
      <div className="servicepage-header">
        <h1>Full Interior Cleaning</h1>
        <h2 className='page-subheading'>Our easy and hassle-free thorough Interior Detailing Service.</h2>
        <div className='header-buttons'>
          <a href="/Contact" className='top-quote-btn'><img src='../assets/icons/clipboard.png' alt='clipboard' className='btn-icon' /> Get a Free Quote</a>
          <a href="tel:2532529758" className='top-quote-btn btn-secondary'><img src='../assets/icons/phoneMessage.png' alt='call or message' className='btn-icon' /> (253) 252-9758</a>
        </div>
      </div>

      <div className='main-content-container'>
        <div className='process-container'>
          <div style={{width: '100%'}}>
            <main className="service-main top-service-main">
              <div className="service-explain">
                <div className="text-left">
                  <h2 className='text-large'>Professional Interior Detailing</h2>
                  <p>The goal of the Full Interior Cleaning package is to restore your interior to its best condition. Your carpet, seats, floor mats, plastics, windows, and all other interior fixtures will be meticulously cleaned.</p>
                  <p>While we will attempt to remove 100% of stains many stains could prove to be more challenging to remove or might not be completely removed. Some won't completely disappear depending on the kind of stain, how long it has been sitting, and the material the stain is on. </p>
                  <p>Taking us by surprise is difficult. Please don't think that your interior is too dirty. We've seen hundreds of different interiors and have all the necessary tools to attempt to remove any kind of stain or mess.</p>
                  <p>Make it a <a href='/services/interior-exterior-detailing-combo' className='aside-link'>Combo</a> deal by booking with a Dirt-Less Wash, and get an <a href='/services/add-ons#engine' className='aside-link'>Engine Bay</a> cleaning on the house!</p>
                </div>
                <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a40931e-dd21-407c-dd03-86fd43b05200/public')`}}>
                  <img style={{visibility: 'hidden'}} alt="Clean drivers seat interior of a Subaru" src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a40931e-dd21-407c-dd03-86fd43b05200/public" />
                </div>
              </div>

              <br className='extra-space' />
            </main>

            <h2 style={{margin: '15vh auto 2rem auto'}} className='cleaning-process-title text-xl'>Our Interior Cleaning Process</h2>
            <ol className='list'>
              {content}
            </ol>
            <p><span className='special-package'>*</span>With Extraction Add-on Only</p>
            <p>**For Interior Coating details check <a className='aside-link' href="/services/interior-ceramic-coating">here</a>.</p>

            <br className='extra-space' />

            <p style={{fontSize: '2rem', margin: 0}}>End Results</p>
            <h3 className='pricing__heading'>Fresh, Clean, and Stunning Results.</h3>
            <p>Once we are done you won't want to see your car dirty ever again!</p>
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
                <h3 className="pricing__heading">Our Interior Cleaning Prices</h3>
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>

              <PricingComponent prices={[299, 299, 349, 349, 349, 374]} addons={[addons.extraction, addons.hair, addons.headliners, addons.intcoating, addons.ozone]} />
            </div>

            <div style={{padding: '2rem'}} className="service-bkg-lighter">
              <div className="general-container new-heading-container">
                <strong className="above-heading">Related Services</strong>
                <h3 className="new-heading">Services similar to our Interior Detailing</h3>
              </div>
              <div style={{padding: '2rem 0'}} className="general-container">
                <h2 className='text-large text-left'>Biohazard Cleaning <a href='/services/biohazard-cleaning' className='aside-link'><BiLinkExternal /></a></h2>
                <div className="text-left">
                  <p>If the interior of your vehicle has things like strong odors, mold, or even bodily fluids we can clean those with our <a href="/services/biohazard-cleaning" className='aside-link'>Biohazard Cleaning</a> service. This will cover a normal interior cleaning and will also include extra things like carpet extraction and ozone treatment depending on the severity of the situation.</p>
                </div>

                <br className='extra-space' />

                <h2 className='text-large text-left'>The Dirt-Less Detail <a href='/services/interior-exterior-detailing-combo' className='aside-link'><BiLinkExternal /></a></h2>
                <div className="text-left">
                  <p>Get a <span className="special-package">FREE</span> Engine Bay Cleaning when you schedule our Dirt-Less Detail service. This service combines our <a href="/services/dirtless-wash" className='aside-link'>Dirt-Less Wash</a> and this Full Interior Detail. It is sure to get your entire vehicle looking like new, even the engine bay which is typically overlooked when washing your car.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
