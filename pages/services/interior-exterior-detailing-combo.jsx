import Image from 'next/image';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import { BiLinkExternal } from 'react-icons/bi';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import cover from '../../public/imgs/pageimgs/exterior/IMG_20220121_153440.jpg';
import exterior from '../../public/imgs/pageimgs/exterior/speed3exterior.jpg';
import engine from '../../public/imgs/pageimgs/engine/speed3engine.jpg';
import interior from '../../public/imgs/pageimgs/interior/speed3interior.jpg';
import serviceImage from '../../public/imgs/pageimgs/homepage/combo.jpg';

export default function Combo() {
  return (
    <section className='service-content-container'>
      <Head>
        <Metatags
          title='Interior and Exterior Combo | Dirt-Less Detailing'
          description='Full Interior Cleaning + Premium Dirt-Less Wash Combo. Get a FREE engine bay cleaning when booking this Combo Deal!'
          image={cover.src}
          canonical='/services/interior-exterior-detailing-combo'
        />
        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "Full Interior and Exterior Detail Combo",
            "brand": "Dirt-Less Detailing",
            "description": "With our combo service your entire vehicle including the engine bay will be cleaned with out tried and true practices.",
            "image": "${cover.src}",
            "url": "https://www.dirtlessdetailing.com/services/interior-exterior-detailing-combo/",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "350",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "USD",
                "price": "350",
                "minPrice": "350",
                "maxPrice": "700"
              },
              "availability": "http://schema.org/InStock",
              "itemOffered": {
                "@type": "Service",
                "name": "Full Interior and Exterior Detailing Service",
                "serviceType": "Full Vehicle Detail",
                "providerMobility": "dynamic"
              }
            }
          }`,
        }} />
      </Head>
      <div className="cover">
        <Image src={cover} alt="Vehicle after a Combo Wash" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>Full Interior and Exterior Combo</h1>
        <h2 className='page-subheading'>Full Interior Cleaning, Premium Dirt-Less Wash, and get an Engine Bay Cleaning on us!</h2>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
        <p className='inline text-small'>
          Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
        </p>
      </div>

      <div className='main-content-container bg-contact'>
        <div className="process-container" id="combo-process">
          <div>
            <main className="service-main">
              <div className="service-explain">
                <div className="text-left">
                  <h2 className='text-large'>Interior and Exterior Combo Cleaning</h2>
                  <p>The full enchilada! Our most complete detailing package and the best value package we offer. You get a <a href="/services/full-interior-detail" className='aside-link'>Full Interior Detail</a>, a <a href="/services/premium-dirtless-wash" className='aside-link'>Premium Dirt-Less Wash</a>, and a <span className="special-package">FREE</span> <a href="/services/add-ons#engine" className='aside-link'>Engine Bay Detail</a> on the house!</p>
                  <p>If you are after the most thorough interior and exterior detail you can find, or even trying to get the most money when selling your vehicle, this is the package for you!</p>
                </div>
                <div className='service-image'>
                  <Zoom>
                    <Image src={serviceImage} alt="Vehicle after a Premium Exterior Wash" placeholder='blur' />
                  </Zoom>
                </div>
              </div>

              <br className='extra-space' />
            </main>
            <div>
              <h2 className='cleaning-process-title'>Our Combo Cleaning Process</h2>
              <ol className='list'>
                <li className="item">
                  <div className="step-number-container">
                    <h3 className='step-number'>1</h3><div className="vertical-rule"></div>
                  </div>
                  <div className="step-container">
                    <h4 className="step-title">Full Interior Cleaning</h4>
                    <p className='step-desc'>We will start by cleaning out the interior of the vehicle so that anything we blow out doesn't end up on the cleaned exterior. For more details on our exact full interior methods, check out our <a href='/services/full-interior-detail' className='aside-link'>Full Interior</a> page.</p>
                  </div>
                </li>

                <li className="item">
                  <div className="step-number-container">
                    <h3 className='step-number'>2</h3><div className="vertical-rule"></div>
                  </div>
                  <div className="step-container">
                    <h4 className="step-title">Engine Bay Cleaning</h4>
                    <p className='step-desc'>We will then clean out the engine bay, continuing to clean from the inside of the vehicle out, so that the exterior will be spotless at the end. More information for the engine cleaning is posted on our <a href='/services/add-ons#engine' className='aside-link'>Add-ons</a> page.</p>
                  </div>
                </li>

                <li className="item">
                  <div className="step-number-container">
                    <h3 className='step-number'>3</h3><div className="vertical-rule"></div>
                  </div>
                  <div className="step-container">
                    <h4 className="step-title">Premium Dirt-Less Wash</h4>
                    <p className='step-desc'>After cleaning and dressing the engine bay, we will finally move onto the exterior as the last step. We will perform our Premium Dirt-Less Wash procedure on your vehicle. For more details check out our <a href='/services/premium-dirtless-wash' className='aside-link'>Premium Dirt-Less Wash</a> page.</p>
                  </div>
                </li>
              </ol>

              <br className='extra-space' />

              <h4 className='text-large'>Another example of our completed Combo Work:</h4>
              <div className="examples-container">
                <div className="example-img">
                  <Zoom>
                    <Image style={{ borderRadius: 16 }} src={interior} alt="Mazda interior after combo deal cleaning" layout="responsive" objectFit='cover' placeholder='blur' quality={25} />
                  </Zoom>
                </div>
                <div className="example-img">
                  <Zoom>
                    <Image style={{ borderRadius: 16 }} src={engine} alt="Mazda engine bay after included engine bay cleaning" layout="responsive" objectFit='cover' placeholder='blur' quality={25} />
                  </Zoom>
                </div>
                <div className="example-img">
                  <Zoom>
                    <Image style={{ borderRadius: 16 }} src={exterior} alt="Mazda exterior after the Premium Dirt-Less wash" layout="responsive" objectFit="cover" placeholder='blur' quality={25} />
                  </Zoom>
                </div>
              </div>

            </div>

            <br className='extra-space' />

            <div>
              <h3 className='pricing-title text-white'>Our Combo Deal Pricing</h3>
              <p className='subtext'>*Final pricing may vary based on your vehicle condition, size, and whether or not you need extraction.</p>
              <div className="pricing-container">
                <div className="pricing-card text-black">
                  <strong className='size'>Small</strong>
                  <p className="pricing-price pricing-border">$350- $400</p>
                  <p className="example-vehicle pricing-border">Smaller Trucks</p>
                  <p className="example-vehicle pricing-border">Most Cars</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size'>Medium</strong>
                  <p className="pricing-price pricing-border">$450- $500</p>
                  <p className="example-vehicle pricing-border">Mid-Size SUV's</p>
                  <p className="example-vehicle pricing-border">Most Wagons</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size'>Large</strong>
                  <p className="pricing-price pricing-border">$550- $600</p>
                  <p className="example-vehicle pricing-border">Large SUV's</p>
                  <p className="example-vehicle pricing-border">Large trucks</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size'>Extra Large</strong>
                  <p className="pricing-price pricing-border">$625- $700</p>
                  <p className="example-vehicle pricing-border">Large Trucks</p>
                  <p className="example-vehicle pricing-border">Extra Large Vehicles</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
              </div>

              <h3 className='pricing-title text-white'>Extra Add-ons <a href='/services/add-ons' className='aside-link'><BiLinkExternal /></a></h3>
              <p className='subtext'>Add-ons that are most commonly paired with our Combo deal.</p>
              <div className="pricing-container">
                <div className="pricing-card text-black fixed-height">
                  <strong className='size'>Glass Polishing</strong>
                  <p>Removes Waterspots and stains from your glass.</p>
                  <p className="pricing-price pricing-border">$80/hour</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black fixed-height">
                  <strong className='size'>Waterspot/Overspray Removal</strong>
                  <p>Remove Waterspots and Overspray from your vehicles paint.</p>
                  <p className="pricing-price pricing-border">$80/hour</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
