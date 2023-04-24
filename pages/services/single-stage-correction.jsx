import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { BiLinkExternal } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';
import PricingComponent from '../../utils/PricingComponent';
import addons from '../../utils/Addons';

const steps = [
  ["Wash Vehicle", "Thorough strip wash top to bottom using 2 bucket method or equivalent, including gas door."],
  ["Wheel Cleaning", "Clean wheels, wheel wells, and wheel barrels."],
  ["Remove tar and sap", "Remove any and all tar and sap from the exterior."],
  ["Correction Prep - Clay Bar", "Clay bar the entire vehicle to remove contaminants and leave the paint smooth."],
  ["Correction Prep - Iron Decontamination", "Iron decontamination to get rid of the rest of the embedded iron particles in your paint."],
  ["Dry Vehicle", "Dry the whole vehicle with clean towels and air blowers."],
  ["Tape Vehicle", "Tape off trim and sensitive areas (some detailers skip this step)."],
  ["Paint Correction", "Complete Single Stage paint correction using Griots products removing 65-80% of scratches and swirls."],
  ["Remove Polishing Compound", "Remove polishing compound residue from cracks, crevices, etc."],
  ["Protect Paint", "Protect paint with ceramic spray or a Ceramic Coating*"],
  ["Door Jambs", "Clean door jambs."],
  ["Dress Vehicle", "Dress all plastics, wheel wells, and tires."]
]

export default function SinglePC() {
  const content = steps.map((item, id) => {
    return (
      <li key={id} className="item">
        <div className="step-number-container">
          <h3 className='step-number'>{id + 1}</h3><div className="vertical-rule"></div>
        </div>
        <div className="step-container">
          <h4 className="step-title">{item[0]}</h4>
          <p className='step-desc'>{item[1]}</p>
        </div>
      </li>
    )
  })

  return (
    <section className='service-content-container'>
      <Head>
        <title>Single Stage Paint Correction | Dirt-Less Detailing</title>
        <Metatags
          title='Single Stage Paint Correction | Dirt-Less Detailing'
          description='Our Single Stage Paint Correction should fix most of your Paint Correction needs, leaving your paint nearly scratch free!'
          image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4da6f2e1-140d-4f39-abed-9624c82f2a00/public'
          canonical='/services/single-stage-correction'
        />
        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "Single Stage Paint Correction",
            "brand": "Dirt-Less Detailing",
            "description": "Revive the shine and clarity of your vehicle's paint with our professional paint correction service. Contact us to learn more and schedule your paint correction service today.",
            "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4da6f2e1-140d-4f39-abed-9624c82f2a00/public",
            "url": "https://www.dirtlessdetailing.com/services/single-stage-correction/",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "300",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "USD",
                "price": "300",
                "minPrice": "300",
                "maxPrice": "850"
              },
              "availability": "http://schema.org/InStock",
              "itemOffered": {
                "@type": "Service",
                "name": "Single Stage Paint Correction Service",
                "serviceType": "Paint Correction",
                "areaServed": {
                  "@type": "Place",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Bonney Lake",
                    "addressRegion": "WA",
                    "postalCode": "99391",
                    "streetAddress": "9305 205th Ave E"
                  }
                },
                "providerMobility": "static"
              }
            }
          }`,
        }} />
      </Head>
      <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4da6f2e1-140d-4f39-abed-9624c82f2a00/cover')`}}></div>
      <div className="servicepage-header">
        <h1>Single Stage Paint Correction</h1>
        <h2 className='page-subheading'>Restore your vehicles paint by removing scratches and swirls</h2>
        <div className='header-buttons'>
          <a href="/Contact" className='quote-btn'>Get a Free Quote</a>
          <a href="tel:2532529758" className='quote-btn top-quote-btn'><MdOutlinePermPhoneMsg className='call-icon' /> (253) 252-9758</a>
        </div>
      </div>

      <div className='main-content-container'>
        <div className="process-container">
          <div style={{width: '100%'}}>
            <main className="service-main top-service-main">
              <div className="service-explain">
                <div className="text-left">
                  <h2 className='text-large mt-0'>Single Stage Paint Correction</h2>
                  <p>Have you every noticed a web of scratches and swirls in your paint when looking at it closely?</p>
                  <p>They are referred to as swirl marks. How did they first get there? The main culprit is typically using inefficient washing and drying techniques. Automatic car washes, the use of cheap towels or wash mitts, and other factors can all erode your paint and leave blemishes. </p>
                  <p>With this Single Stage Paint Correction service, you can remove 60% to 70% of imperfections to reveal a great shine. If you want to restore the shine of your car without going "all in" like we do with our <a href="/services/two-stage-correction" className='aside-link'>Two Stage Paint Correction</a> service, this is a perfect service for you. </p>
                  <p><span className="special-package">NOTICE:</span> Unlike most of our other services that are mobile and can be done in just a few hours, this service requires more time and better lighting to achieve the proper results. This is why we require you to drop off the vehicle at our <a href='/correction/bonney-lake' className='aside-link'>shop location</a> in Bonney Lake.</p>
                  <p>Want to compare this to our Two Stage Paint Correction? Check out our <a href='/detailing/correction' className='aside-link'>comparison</a> page for more details.</p>
                </div>
                <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/9ad6bfa1-52e8-4349-db4c-646a0a51f000/public')`}}>
                  <img style={{visibility: 'hidden'}} src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/9ad6bfa1-52e8-4349-db4c-646a0a51f000/public" />
                </div>
              </div>
            </main>

            <h2 style={{marginTop: '15vh'}} className='cleaning-process-title'>Our Single Stage Paint Correction Process</h2>
            <ol className='list'>
              {content}
            </ol>
            <p>**For Ceramic Coating details check <a className='aside-link' href="/services/exterior-ceramic-coating">here</a>.</p>

            <br className='extra-space' />

            <div>
              <div className='pricing__heading-container'>
                <h3 className="pricing__heading">Our Single Stage Correction Pricing</h3>
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>

              <PricingComponent prices={['549', '549', '699', '699', '849', '849']} addons={[addons.glass]} />
            </div>

            {/* <div>
              <h3 className='pricing-title text-white'>Our Single Stage Paint Correction Pricing</h3>
              <p className='subtext'>*Final pricing may vary based on your vehicle condition and size.</p>
              <div className="pricing-container">
                <div className="pricing-card text-black">
                  <strong className='size pricing-border'>Single Row Trucks and 2-Door Cars</strong>
                  <strong className='size'>Starting Price</strong>
                  <p className="pricing-price pricing-border">$549<span className='ninety-nine'>99</span></p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size pricing-border'>Most Mid-Size SUV's and 4-Door Cars</strong>
                  <strong className='size'>Starting Price</strong>
                  <p className="pricing-price pricing-border">$699<span className='ninety-nine'>99</span></p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size pricing-border'>3-Row SUV's, Minivans, and Trucks</strong>
                  <strong className='size'>Starting Price</strong>
                  <p className="pricing-price pricing-border">$849<span className='ninety-nine'>99</span></p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
              </div>

              <h3 className='pricing-title text-white'>Extra Add-ons <a href='/services/add-ons' className='aside-link'><BiLinkExternal /></a></h3>
              <p className='subtext'>Our current add-ons that are typically paired with a Single Stage Paint Correction.</p>
              <div className="pricing-container">
                <div className="pricing-card text-black">
                  <strong className='size'>Glass Polishing</strong>
                  <p>Removes Waterspots and stains from your glass.</p>
                  <p className="pricing-price pricing-border">$80/hour</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
              </div>

            </div> */}
            <div className="service-bkg-lighter">
              <div className="general-container new-heading-container">
                <strong className="above-heading">Further Reading</strong>
                <h3 className="new-heading">Visual example of different paint defects.</h3>
                <p style={{marginTop: 0, color: '#c0c0c0'}}>This gives a great visual as to why deeper scratches aren't safely removable without repainting.</p>
              </div>
              <div className="general-container">
                <div className="mini-grid">
                  <Zoom>
                    <div aria-label="Paint defects info and depth" role='img' className="card card-tall card-wide" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3c1c25a3-cbab-4f82-91b1-ba2a30626500/public')`}} />
                  </Zoom>
                </div>

                <br className="extra-space" />

                <div>
                  <strong className='text-medium'>We'll help customers from all over get a paint correction on their vehicle, however, most of our customers come to our shop from these areas:</strong>
                  <div style={{ display: 'grid', placeItems: 'center' }}>
                    <ul className='cities-ul'>
                      <li><a href='/correction/bonney-lake' className='aside-link'>Bonney Lake</a><FaMapMarkerAlt /></li>
                      <li><a href='/correction/buckley' className='aside-link'>Buckley</a><FaMapMarkerAlt /></li>
                      <li><a href='/correction/sumner' className='aside-link'>Sumner</a><FaMapMarkerAlt /></li>
                      <li><a href='/correction/enumclaw' className='aside-link'>Enumclaw</a><FaMapMarkerAlt /></li>
                      <li><a href='/correction/lake-tapps' className='aside-link'>Lake Tapps</a><FaMapMarkerAlt /></li>
                      <li><a href='/correction/puyallup' className='aside-link'>Puyallup</a><FaMapMarkerAlt /></li>
                      <li><a href='/correction/tehaleh' className='aside-link'>Tehaleh</a><FaMapMarkerAlt /></li>
                      <li><a href='/correction/federal-way' className='aside-link'>Federal Way</a><FaMapMarkerAlt /></li>
                      <li><a href='/correction/orting' className='aside-link'>Orting</a><FaMapMarkerAlt /></li>
                      <li><a href='/correction/south-prairie' className='aside-link'>South Prairie</a><FaMapMarkerAlt /></li>
                      <li><a href='/correction/black-diamond' className='aside-link'>Black Diamond</a><FaMapMarkerAlt /></li>
                      <li><a href='/correction/milton' className='aside-link'>Milton</a><FaMapMarkerAlt /></li>
                      <li><a href='/correction/edgewood' className='aside-link'>Edgewood</a><FaMapMarkerAlt /></li>
                      <li><a href='/correction/graham' className='aside-link'>Graham</a><FaMapMarkerAlt /></li>
                    </ul>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>        
      </div>
    </section>
  )
}
