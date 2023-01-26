import Image from 'next/image';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import { BiLinkExternal } from 'react-icons/bi';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

import cover from '../../public/imgs/FB_IMG_1590172619153.jpg';
import paintDefects from '../../public/imgs/pageimgs/homepage/paintDefects.png';
import serviceImage from '../../public/imgs/pageimgs/paintCorrection/IMG_20211123_170855.jpg';

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
  ["Protect Paint", "Protect paint with ceramic spray or "],
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
          {id === 9 ? <a className='aside-link' href="/services/exterior-ceramic-coating">ceramic coating.</a> : ''}
        </div>
      </li>
    )
  })

  return (
    <section className='service-content-container'>
      <Head>
        <Metatags
          title='Single Stage Paint Correction | Dirt-Less Detailing'
          description='Our Single Stage Paint Correction should fix most of your Paint Correction needs, leaving your paint nearly scratch free!'
          image={cover.src}
          canonical='/services/single-stage-correction'
        />
        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "Single Stage Paint Correction",
            "brand": "Dirt-Less Detailing",
            "description": "Revive the shine and clarity of your vehicle's paint with our professional paint correction service. Contact us to learn more and schedule your paint correction service today.",
            "image": "${cover.src}",
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
      <div className="cover">
        <Image src={cover} alt="Vehicle after a Single Stage Paint Correction" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>Single Stage Paint Correction</h1>
        <h2 className='page-subheading'>Restore your vehicles paint by removing scratches and swirls</h2>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
        <p className='inline text-small'>
          Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
        </p>
      </div>

      <div className='main-content-container bg-contact'>
        <div className="process-container">
          <div>
            <main className="service-main">
              <div className="service-explain">
                <div className="text-left">
                  <h2 className='text-large mt-0'>Single Stage Paint Correction</h2>
                  <p>Have you every noticed a web of scratches and swirls in your paint when looking at it closely?</p>
                  <p>They are referred to as swirl marks. How did they first get there? The main culprit is typically using inefficient washing and drying techniques. Automatic car washes, the use of cheap towels or wash mitts, and other factors can all erode your paint and leave blemishes. </p>
                  <p>With this Single Stage Paint Correction service, you can remove 60% to 70% of imperfections to reveal a great shine. If you want to restore the shine of your car without going "all in" like we do with our <a href="/services/two-stage-correction" className='aside-link'>Two Stage Paint Correction</a> service, this is a perfect service for you. </p>
                  <p>Unlike most of our other services that are mobile and can be done in just a few hours, this service requires more time and better lighting to achieve the proper results. This is why we require you to drop off the vehicle at our <a href='/correction/bonney-lake' className='aside-link'>shop location</a> in Bonney Lake.</p>
                  <p>Want to compare this to our Two Stage Paint Correction? Check out our <a href='/detailing/correction' className='aside-link'>comparison</a> page for more details.</p>
                </div>
                <div className='service-image'>
                  <Zoom>
                    <Image src={serviceImage} alt="Vehicle after a Premium Exterior Wash" placeholder='blur' />
                  </Zoom>
                </div>
              </div>
            </main>

            <br className='extra-space' />

            <h2 className='cleaning-process-title'>Our Single Stage Paint Correction Process</h2>
            <ol className='list'>
              {content}
            </ol>

            <br className='extra-space' />

            <div>
              <h3 className='pricing-title text-white'>Our Single Stage Paint Correction Pricing</h3>
              <p className='subtext'>*Final pricing may vary based on your vehicle condition and size.</p>
              <div className="pricing-container">
                <div className="pricing-card text-black">
                  <strong className='size'>Small</strong>
                  <p className="pricing-price pricing-border">$300- $450</p>
                  <p className="example-vehicle pricing-border">Smaller Trucks</p>
                  <p className="example-vehicle pricing-border">Most Cars</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size'>Medium</strong>
                  <p className="pricing-price pricing-border">$450- $600</p>
                  <p className="example-vehicle pricing-border">Mid-Size SUV's</p>
                  <p className="example-vehicle pricing-border">Most Wagons</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size'>Large</strong>
                  <p className="pricing-price pricing-border">$600- $850</p>
                  <p className="example-vehicle pricing-border">Large SUV's</p>
                  <p className="example-vehicle pricing-border">Trucks</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
              </div>

              <h3 className='pricing-title text-white'>Extra Add-ons <a href='/services/add-ons' className='aside-link'><BiLinkExternal /></a></h3>
              <p className='subtext'>Our current add-ons that are typically paired with a Single Stage Paint Correction.</p>
              <div className="pricing-container">
                <div className="pricing-card text-black fixed-height">
                  <strong className='size'>Glass Polishing</strong>
                  <p>Removes Waterspots and stains from your glass.</p>
                  <p className="pricing-price pricing-border">$80/hour</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
              </div>

            </div>

            <br className='extra-space' />

            <h4 className='text-large'>Visual example of different paint defects:</h4>
            <p className='subtext'>This gives an example of why deeper scratches aren't removable without repainting.</p>
            <div className='examples-container'>
              <div className='example-img'>
                <Zoom>
                  <Image src={paintDefects} alt="What IGL coatings protect from circle" placeholder='blur' />
                </Zoom>
              </div>
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

        
        <br className='extra-space' />
      </div>
    </section>
  )
}
