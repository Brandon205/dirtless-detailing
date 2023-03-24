import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import { BiLinkExternal } from 'react-icons/bi';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';

const steps = [
  ["Wash Vehicle", "Thorough 2 bucket or equivalent top to bottom wash including the gas door."],
  ["Wheel Cleaning", "Clean wheels, wheel wells, and wheel barrels."],
  ["Remove tar and sap", "Remove any and all tar and sap from the exterior."],
  ["Wax Vehicle", "Apply a coating of spray wax."],
  ["Dry Vehicle", "Dry the whole vehicle with clean towels and air blowers."],
  ["Dress Vehicle", "Dress tires, wheel wells, and plastics."]
]

export default function DLWash() {
  const content = steps.map((item, id) => {
    return (
      <li key={id} className="item">
        <div className="step-number-container">
          <h3 className='step-number'>{id + 1}</h3><div className='vertical-rule'></div>
        </div>
        <div className="step-container">
          <h4 className="step-title">{item[0]}</h4>
          <p className='step-desc'>{item[1]}</p>
        </div>
      </li>
    )
  });

  return (
    <section className='service-content-container'>
      <Head>
        <title>Dirt-Less Car Wash | Dirt-Less Detailing</title>
        <Metatags
          title='Dirt-Less Car Wash | Dirt-Less Detailing'
          description='The Dirt-Less Wash is our base tier exterior car wash service, complete with a spray wax to protect your vehicle.'
          image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a7b4af9c-97db-42dc-3b72-452a6221aa00/public'
          canonical='/services/dirtless-wash'
        />
        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "Dirt-Less Wash",
            "brand": "Dirt-Less Detailing",
            "description": "At Dirt-Less Detailing, we offer a comprehensive car wash service to keep your vehicle looking its best.",
            "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a7b4af9c-97db-42dc-3b72-452a6221aa00/public",
            "url": "https://www.dirtlessdetailing.com/services/dirtless-wash/",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "75",
              "priceSpecification": {
              	"@type": "PriceSpecification",
                "priceCurrency": "USD",
                "price": "75",
                "minPrice": "75",
                "maxPrice": "150"
              },
              "availability": "http://schema.org/InStock",
              "itemOffered": {
                "@type": "Service",
                "name": "Dirt-Less Wash Service",
                "serviceType": "Car Wash",
                "providerMobility": "dynamic"
              }
            }
          }`,
        }} />
      </Head>
      <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a7b4af9c-97db-42dc-3b72-452a6221aa00/cover')`}}></div>
      <div className="servicepage-header">
        <h1>Dirt-Less Wash</h1>
        <h2 className='page-subheading'>Get a Dirt-Less Wash and have your vehicle shine like never before!</h2>
        <div className='header-buttons'>
          <a href="/Contact" className='quote-btn'>Get a Free Quote</a>
          <a href="tel:2532529758" className='quote-btn top-quote-btn'><MdOutlinePermPhoneMsg className='call-icon' /> (253) 252-9758</a>
        </div>
      </div>

      <div className='main-content-container bg-contact'>
        <div className="process-container">
          <div>
            <main className="service-main">
              <div className="service-explain">
                <div className="text-left">
                  <h2 className='text-large mt-0'>Dirt-Less Wash</h2>
                  <p>While you don't have to go to Harvard to wash a car there are methods of washing that produce infinitely better results than your typical tunnel car wash. Our methods are also way safer for your paint.</p>
                  {/* <p>If you're looking for our quick and most affordable option to get your car washed in Bonney Lake or the surrounding areas, we most likely won't be a great fit for you. We go very in-depth in our washing process to provide the highest quality level of service and results your money can buy.</p> */}
                </div>
                <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6fb3a112-d77a-41fb-e7ec-728b2185b600/public')`}}></div>
              </div>

            </main>

            <br className='extra-space' />

            <h2 className='cleaning-process-title'>Our Dirt-Less Wash Process*</h2>
            <ol className='list'>
              {content}
            </ol>

            <br className='extra-space' />

            <div>
              <h3 className='pricing-title text-white'>Dirt-Less Wash Pricing</h3>
              <p className='subtext'>*Final pricing may vary based on your vehicle condition and size.</p>
              <div className="pricing-container">
                <div className="pricing-card text-black">
                  <strong className='size'>Small</strong>
                  <p className="pricing-price pricing-border">$75</p>
                  <p className="example-vehicle pricing-border">Smaller Trucks</p>
                  <p className="example-vehicle pricing-border">Most Cars</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size'>Medium</strong>
                  <p className="pricing-price pricing-border">$100</p>
                  <p className="example-vehicle pricing-border">Mid-Size SUV's</p>
                  <p className="example-vehicle pricing-border">Most Wagons</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size'>Large</strong>
                  <p className="pricing-price pricing-border">$125</p>
                  <p className="example-vehicle pricing-border">Large SUV's</p>
                  <p className="example-vehicle pricing-border">Trucks</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size'>Extra Large</strong>
                  <p className="pricing-price pricing-border">$150</p>
                  <p className="example-vehicle pricing-border">Larger Trucks</p>
                  <p className="example-vehicle pricing-border">Extra Large Vehicles</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
              </div>

                <h3 className='pricing-title text-white'>Extra Add-ons <a href='/services/add-ons' className='aside-link'><BiLinkExternal /></a></h3>
                <p className='subtext'>Add-ons that typically get paired with either of our exterior wash services</p>
                <div className="pricing-container">
                  <div className="pricing-card text-black fixed-height">
                    <strong className='size'>Clay Bar Treatment</strong>
                    <p>Removes contaminants from your paint leaving a much cleaner and smoother end result.</p>
                    <p className="pricing-price pricing-border">$50-$75</p>
                    <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                  </div>
                  <div className="pricing-card text-black fixed-height">
                    <strong className='size'>Glass Polishing</strong>
                    <p>Remove Waterspots and etching from your vehicles glass.</p>
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

        <br className='extra-space' />

      </div>
    </section>
  )
}
