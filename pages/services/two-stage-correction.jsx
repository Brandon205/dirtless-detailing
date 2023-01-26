import Image from 'next/image';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import { BiLinkExternal } from 'react-icons/bi';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

import cover from '../../public/imgs/TwoStageCover.webp';
import paintDefects from '../../public/imgs/pageimgs/homepage/paintDefects.png';
import serviceImage from '../../public/imgs/pageimgs/paintCorrection/IMG_20210517_111329.jpg';
import serviceImage2 from '../../public/imgs/pageimgs/paintCorrection/IMG_20220909_124854.jpg';

const steps = [
  ["Wash Vehicle", "Thorough strip wash top to bottom using 2 bucket method or equivalent, including gas door."],
  ["Wheel Cleaning", "Clean wheels, wheel wells, and wheel barrels."],
  ["Remove tar and sap", "Remove any and all tar and sap from the exterior."],
  ["Correction Prep - Clay Bar", "Clay bar the entire vehicle to remove contaminants and leave the paint smooth."],
  ["Correction Prep - Iron Decontamination", "Iron decontamination to get rid of the rest of the embedded iron particles in your paint."],
  ["Dry Vehicle", "Dry the whole vehicle with clean towels and air blowers."],
  ["Tape Vehicle", "Tape off trim and sensitive areas (some detailers skip this step)."],
  ["Paint Correction", "Complete Two Stage paint correction using Griots products removing all scratches and swirls we possibly can while staying safe for vehicle specific clear coat thickness."],
  ["Remove Polishing Compound", "Remove polishing compound residue from cracks, crevices, etc."],
  ["Protect Paint", "Protect paint with ceramic spray or "],
  ["Door Jambs", "Clean door jambs."],
  ["Dress Vehicle", "Dress all plastics, wheel wells, and tires."]
]

export default function TwoPC() {
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
        <title>Two Stage Paint Correction | Dirt-Less Detailing</title>
        <Metatags
          title='Two Stage Paint Correction | Dirt-Less Detailing'
          description='Our Two Stage Paint Correction is for vehicles that are to be spotless and have a beautiful shine. This service will get them there.'
          image={cover.src}
          canonical='/services/two-stage-correction'
        />
        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "Two Stage Paint Correction",
            "brand": "Dirt-Less Detailing",
            "description": "Revive the shine and clarity of your vehicle's paint with our professional paint correction service. Our team at Dirt-Less Detailing uses advanced techniques and products to remove defects and imperfections, leaving your car with a smooth and flawless finish. Contact us to learn more and schedule your paint correction service today.",
            "image": "${cover.src}",
            "url": "https://www.dirtlessdetailing.com/services/two-stage-correction/",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "450",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "USD",
                "price": "450",
                "minPrice": "450",
                "maxPrice": "1100"
              },
              "availability": "http://schema.org/InStock",
              "itemOffered": {
                "@type": "Service",
                "name": "Two Stage Paint Correction Service",
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
        <Image src={cover} alt="Vehicle after a Two Stage Paint Correction" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>Two Stage Paint Correction</h1>
        <h2 className='page-subheading'>Go the extra mile and remove years of scratches and swirls with our Two Stage Paint Correction service.</h2>
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
                  <h2 className='text-large mt-0'>Two Stage Paint Correction Overview</h2>
                  <p>We strive to eliminate as many swirls, scratches, and other flaws from your paint as we can with our two-stage paint correction process. To maximize the shine and clarity of your paintwork, we perform a 2-step correction at this point, which involves intensive cutting and polishing step.</p>
                  <p>Depending on the state of your vehicles paint, age, and quality certain scratches may not completely disappear. Either the clear coat is thinning away too much or the scratches may be too deep to properly remove. (Before we begin, we'll measure the paint.)</p>
                  <p>We'll decide from here what we can safely remove from your paint. It's not only about getting rid of as many flaws as you can. In order to maintain the quality of the paint, it's also important to determine when enough is enough.</p>
                </div>
                <div className='service-image'>
                  <Zoom>
                    <Image src={serviceImage} alt="Vehicle after a Premium Exterior Wash" placeholder='blur' />
                  </Zoom>
                </div>
              </div>

              <div className="service-explain">
                <div className='service-image'>
                  <Zoom>
                    <Image src={serviceImage2} alt="Vehicle after a Premium Exterior Wash" placeholder='blur' />
                  </Zoom>
                </div>
                <div className="text-left">
                  <h2 className="text-large mt-0">Maintenance Commitment</h2>
                  <p>You are making a commitment at this point to your vehicle by getting our Level 2 paint correction. After the service is over, you must carefully maintain the vehicle if you want to keep the shine on your paint. After just a few washes, you may easily bring all those swirls and scratches back into your paint if you don't correctly wash and dry the car.</p>
                  <p><span className="special-package">NOTICE:</span> This is one of our most involved services that we offer, so we'll need to perform it at our <a href='/correction/bonney-lake' className='aside-link'>shop</a> location in Bonney Lake.</p>
                  <p>Want to compare this to our Single Stage Paint Correction? Check out our <a href='/detailing/correction' className='aside-link'>comparison</a> page for more details on both services.</p>
                </div>
              </div>
            </main>

            <br className='extra-space' />

            <h2 className='cleaning-process-title'>Our Two Stage Paint Correction Process</h2>
            <ol className='list'>
              {content}
            </ol>

            <br className='extra-space' />

            <div>
              <h3 className='pricing-title text-white'>Extra Add-ons <a href='/services/interior-exterior-detailing-combo' className='aside-link'><BiLinkExternal /></a></h3>
              <p className='subtext'>Our current add-ons that are typically paired with a Two Stage Paint Correction.</p>
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

            <br className='extra-space' />

            <div>
              <strong className='text-medium'>We'll help customers from all over get a paint correction on their vehicle, however, most of our customers come to our shop from these areas:</strong>
              <div style={{ display: 'grid', placeItems: 'center' }}>
                <ul className='cities-ul'>
                  <li><a href='/correction/bonney-lake' className='aside-link'>Bonney Lake</a><FaMapMarkerAlt /></li>
                  <li><a href='/correction/buckley' className='aside-link'>Buckley</a><FaMapMarkerAlt /></li>
                  <li><a href='/correction/sumner' className='aside-link'>Sumner</a><FaMapMarkerAlt /></li>
                  <li><a href='/correction/lake-tapps' className='aside-link'>Lake Tapps</a><FaMapMarkerAlt /></li>
                  <li><a href='/correction/enumclaw' className='aside-link'>Enumclaw</a><FaMapMarkerAlt /></li>
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
