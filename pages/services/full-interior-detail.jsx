import Image from 'next/image';
import Head from 'next/head';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { BiLinkExternal } from 'react-icons/bi';

import cover from '../../public/imgs/pageimgs/interior/fullIntExCover.webp';
import serviceImage from '../../public/imgs/pageimgs/interior/driverseatBA.webp';

const steps = [
  ["Expose Hidden Dirt", "Use our Tornador Vortex blowgun which uses compressed air to blow out every spot a vacuum can't reach. It also extracts sand and loose soil from carpeting."],
  ["Vacuum Vehicle", "Thoroughly vacuum every crack and crevice of the vehicle."],
  ["Hot Water Extraction", "We use a professional hot water extractor and professional flex stain remover and alkaline floor rinse to keep floors at a neutral PH level. We will be sure to get all carpets, floor mats, and cloth seats."],
  ["Clean Plastics and Leathers", "Clean, steam, and degrease all plastics and leather seats."],
  ["Dress Interior", "Dress or "],
  ["Door Jambs", "Clean all of the door jambs."],
  ["Window Cleaning", "Clean windows."]
]

export default function FullIntEx() {

  const content = steps.map((item, id) => {
    return (
      <li key={id} className="item">
        <div className='step-number-container'>
          <h3 className='step-number'>{id + 1}</h3><div className="vertical-rule"></div>
        </div>
        <div className='step-container'>
          <h4 className="step-title">{item[0]}{id === 2 ? <span className='special-package'>*</span> : ""}</h4>
          <p className='step-desc'>{item[1]}</p>
          {id === 4 ? <a className='aside-link' href="/services/interior-ceramic-coating">coat interior.</a> : ''}
        </div>
      </li>
    )
  })

  return (
    <section className='service-content-container'>
      <Head>
        <title>Full Interior Cleaning | Dirt-Less Detailing</title>
        <meta property="og:title" content="Full Interior Cleaning | Dirt-Less Detailing" />
        <meta name="description" content="Our Full Interior cleaning is the most sought after service, and for good reason, it will completely renew your cars interior!" />
        <meta property="og:description" content="Our Full Interior cleaning is the most sought after service, and for good reason, it will completely renew your cars interior!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dirtlessdetailing.com/services/full-interior-detail" />
        <meta property="og:image" content={cover.src} />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/services/full-interior-detail" />
        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "Full Interior Detailing",
            "brand": "Dirt-Less Detailing",
            "description": "Get your car's interior looking brand new with our full interior detailing service. We offer thorough cleaning and conditioning of all surfaces, including the dashboard, seats, and carpets. Contact us to schedule your appointment today.",
            "image": "${cover.src}",
            "url": "https://www.dirtlessdetailing.com/services/full-interior-detail/",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "200",
              "priceSpecification": {
              	"@type": "PriceSpecification",
                "priceCurrency": "USD",
                "price": "200",
                "minPrice": "200",
                "maxPrice": "350"
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
      <div className="cover">
        <Image src={cover} alt="Vehicle after a Full Interior Cleaning" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header">
        <h1>Full Interior Cleaning</h1>
        <h2 className='page-subheading'>Easy and hassle free thorough interior cleaning service</h2>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
        <p className='inline text-small'>
          Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
        </p>
      </div>

      <div className='main-content-container bg-contact'>
        <div className='process-container'>
          <div>
            <main className="service-main">
              <div className="service-explain">
                <div className="text-left">
                  <h2 className='text-large'>Professional Interior Detailing</h2>
                  <p>The Full Interior Cleaning package is meant to get your interior back to the best condition possible. Your seats, floor mats, plastics, windows, and carpet will all be thoroughly cleaned, detailed, and shampooed/extracted. </p>
                  <p>If it can be cleaned, we'll clean it. Does that mean every little stain will be removed? Unfortunately, that isn't the case. Based on the type of stain, how long it's been sitting, and the material, many stains won't come out 100%. Of course we'll still do our best to reduce the appearance of it.</p>
                  <p>Please don't think your interior is “too dirty”. We have the necessary tools and products to get the job done. We have cleaned hundreds of interiors, of all conditions. It's not easy to surprise us.</p>
                  <p>Make it a <a href='/services/interior-exterior-detailing-combo' className='aside-link'>Combo</a> deal by booking with a Premium Dirt-Less Wash, and get a free <a href='/services/add-ons#engine' className='aside-link'>Engine Bay</a> cleaning on the house!</p>
                </div>
                <div className='service-image'>
                  <Zoom>
                    <Image src={serviceImage} alt="Interior cleaning before and after" placeholder='blur' />
                  </Zoom>
                </div>
              </div>

              <h2 className='text-large'>Biohazard Cleanings <a href='/services/biohazard-cleaning' className='aside-link'><BiLinkExternal /></a></h2>
              <div className="text-left">
                <p>If the interior of your vehicle has things like strong odors, mold, or even bodily fluids we can clean those with our <a href="/services/biohazard-cleaning" className='aside-link'>Biohazard Cleaning</a> service. This will cover a normal interior cleaning and will also include extra things like carpet extraction and ozone treatment depending on the severity of the situation.</p>
              </div>

              <h2 className='text-large'>Interior and Exterior Combo <a href='/services/interior-exterior-detailing-combo' className='aside-link'><BiLinkExternal /></a></h2>
              <div className="text-left">
                <p>Get a <span className="special-package">FREE</span> Engine Bay Cleaning when you schedule our Full Interior and Exterior Detailing combo service. This service is sure to get your entire vehicle looking like new, even the engine bay which is typically overlooked when washing your car.</p>
              </div>

              <br className='extra-space' />
            </main>

            <h2 className='cleaning-process-title text-large'>Our Interior Cleaning Process*</h2>
            <ol className='list'>
              {content}
            </ol>
            <p style={{ marginTop: 0 }}>*Headliners offered as a separate add-on</p>
            <p><span className='special-package'>*Extraction</span> Package Only</p>

            <br className='extra-space' />

            <div>
              <h3 className='pricing-title text-white'>Full Interior Cleaning Pricing</h3>
              <strong className='subtext'>*Final pricing may vary based on your vehicle condition and size.</strong>
              <div className="pricing-container">
                <div className="pricing-card text-black">
                  <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Small</strong>
                  <strong className='size'>Without Extraction</strong>
                  <p className="pricing-price pricing-border">$200</p>
                  <strong className='size'>With Extraction</strong>
                  <p className="pricing-price pricing-border">$250</p>
                  <p className="example-vehicle pricing-border">2-Door Coupes</p>
                  <p className="example-vehicle pricing-border">Single/Extended Cabs</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Medium</strong>
                  <strong className='size'>Without Extraction</strong>
                  <p className="pricing-price pricing-border">$250</p>
                  <strong className='size'>With Extraction</strong>
                  <p className="pricing-price pricing-border">$300</p>
                  <p className="example-vehicle pricing-border">4 Door Vehicles</p>
                  <p className="example-vehicle pricing-border">Smaller SUV's</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Large</strong>
                  <strong className='size'>Without Extraction</strong>
                  <p className="pricing-price pricing-border">$300</p>
                  <strong className='size'>With Extraction</strong>
                  <p className="pricing-price pricing-border">$350</p>
                  <p className="example-vehicle pricing-border">Larger Trucks</p>
                  <p className="example-vehicle pricing-border">Extra Large SUV's</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
              </div>

              <h3 className='pricing-title text-white'>Extra Add-ons <a href='/services/add-ons' className='aside-link'><BiLinkExternal /></a></h3>
              <strong className='subtext'>Some of our most popular add-ons that are usually added on top of our Interior Cleaning Service.</strong>
              <div className="pricing-container">
                <div className="pricing-card text-black">
                  <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Fabric Ceramic Coating</strong>
                  <p className="pricing-price pricing-border">$75</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Leather Ceramic Coating</strong>
                  <p className="pricing-price pricing-border">$150</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Headliner Cleaning</strong>
                  <p className="pricing-price pricing-border">$40-$80</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Ozone Treatment</strong>
                  <p className="pricing-price pricing-border">$100</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <br className='extra-space' />

      </div>
    </section>
  )
}
