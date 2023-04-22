import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import PricingComponent from '../../utils/PricingComponent';
import addons from '../../utils/Addons';
import { BiLinkExternal } from 'react-icons/bi';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';

export default function Combo() {
  return (
    <section className='service-content-container'>
      <Head>
        <title>Interior and Exterior Combo | Dirt-Less Detailing</title>
        <Metatags
          title='Interior and Exterior Combo | Dirt-Less Detailing'
          description='Full Interior Cleaning + Dirt-Less Wash Combo. Get a FREE engine bay cleaning when booking this Combo Deal!'
          image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2f40a30b-c1c1-4dba-3b4b-9f3521eaa800/public'
          canonical='/services/interior-exterior-detailing-combo'
        />
        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "Full Interior and Exterior Detail Combo",
            "brand": "Dirt-Less Detailing",
            "description": "With our combo service your entire vehicle including the engine bay will be cleaned with out tried and true practices.",
            "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2f40a30b-c1c1-4dba-3b4b-9f3521eaa800/public",
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
      <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2f40a30b-c1c1-4dba-3b4b-9f3521eaa800/cover')`}}></div>
      <div className="servicepage-header">
        <h1>Full Interior and Exterior Combo</h1>
        <h2 className='page-subheading'>Full Interior Cleaning, Dirt-Less Wash, and an Engine Bay Cleaning on us!</h2>
        <div className='header-buttons'>
          <a href="/Contact" className='quote-btn'>Get a Free Quote</a>
          <a href="tel:2532529758" className='quote-btn top-quote-btn'><MdOutlinePermPhoneMsg className='call-icon' /> (253) 252-9758</a>
        </div>
      </div>

      <div className='main-content-container'>
        <div style={{paddingTop: 0}} className="process-container">
          <div style={{width: '100%'}}>
            <main className="service-main top-service-main">
              <div className="service-explain">
                <div className="text-left">
                  <h2 className='text-large'>Interior and Exterior Combo Cleaning</h2>
                  <p>Our Combo Service offers a comprehensive package that includes a thorough  <a href="/services/full-interior-detail" className='aside-link'>Full Interior Detail</a> and a <a href="/services/dirtless-wash" className='aside-link'>Dirt-Less Wash</a>, as well as a <span className="special-package">FREE</span> <a href="/services/add-ons#engine" className='aside-link'>Engine Bay Cleaning</a> to keep your vehicle in top shape. Trust us to leave your car looking and feeling like new with our expert attention to detail and use of high-quality products.</p>
                  <p>If you are after the most thorough interior and exterior detail you can find, or even trying to get the most money when selling your vehicle, this is the package for you!</p>
                </div>
                <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3031c630-d6f2-48fc-1bb4-62844fbd5a00/public')`}}></div>
              </div>
              <br className='extra-space' />
            </main>

            <div style={{backgroundColor: 'white', color: 'black', paddingTop: '14vh'}}>
              <h2 className='cleaning-process-title text-xl'>Our Combo Cleaning Process</h2>
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
                    <h4 className="step-title">Dirt-Less Wash</h4>
                    <p className='step-desc'>After cleaning and dressing the engine bay, we will finally move onto the exterior as the last step. We will perform our Dirt-Less Wash procedure on your vehicle. For more details check out our <a href='/services/dirtless-wash' className='aside-link'>Dirt-Less Wash</a> page.</p>
                  </div>
                </li>
              </ol>
              <br className='extra-space' />
            </div>

            <div>
              <div style={{borderRadius: '38px 38px 0 0'}} className='pricing__heading-container'>
                <h3 className="pricing__heading">Our Combo Package Pricing</h3>
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>

              <PricingComponent prices={['299', '299', '349', '349', '399', '399']} addons={[addons.extraction, addons.hair, addons.headliners, addons.fabric, addons.leather, addons.ozone, addons.glass, addons.waterspot]} />
            </div>

            {/* <div>
              <h3 className='pricing-title text-white'>Our Combo Deal Pricing</h3>
              <p className='subtext'>*Final pricing may vary based on your vehicle condition, size, and whether or not you need extraction.</p>
              <div className="pricing-container">
                <div className="pricing-card text-black">
                  <strong className='size pricing-border'>Single Row Trucks and 2-Door Cars</strong>
                  <strong className='size'>Starting Price</strong>
                  <p className="pricing-price pricing-border">$374<span className='ninety-nine'>99</span></p>
                  <div className='additions-container'>
                    <strong className='size text-addition'>Add Stain Extraction</strong>
                    <p style={{borderBottom: 'none', paddingBottom: 0}}><span className='special-package'>+</span>$35 (Seats)</p>
                    <p><span className='special-package'>+</span>$35 (Carpets)</p>
                  </div>
                  <div className='additions-container'>
                    <strong className='size text-addition'>Remove Pet Hair</strong>
                    <p><span className='special-package'>+</span>$50-$100</p>
                  </div>
                  <div className='additions-container'>
                    <strong className='size text-addition'>Clean Headliners</strong>
                    <p><span className='special-package'>+</span>$40-$80</p>
                  </div>
                  <div className='additions-container'>
                    <strong className='size text-addition'>Clay Bar Treatment</strong>
                    <p><span className='special-package'>+</span>$50</p>
                  </div>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size pricing-border'>Most Mid-Size SUV's and 4-Door Cars</strong>
                  <strong className='size'>Starting Price</strong>
                  <p className="pricing-price pricing-border">$449<span className='ninety-nine'>99</span></p>
                  <div className='additions-container'>
                    <strong className='size text-addition'>Add Stain Extraction</strong>
                    <p style={{borderBottom: 'none', paddingBottom: 0}}><span className='special-package'>+</span>$50 (Seats)</p>
                    <p><span className='special-package'>+</span>$50 (Carpets)</p>
                  </div>
                  <div className='additions-container'>
                    <strong className='size text-addition'>Remove Pet Hair</strong>
                    <p><span className='special-package'>+</span>$50-$100</p>
                  </div>
                  <div className='additions-container'>
                    <strong className='size text-addition'>Clean Headliners</strong>
                    <p><span className='special-package'>+</span>$40-$80</p>
                  </div>
                  <div className='additions-container'>
                    <strong className='size text-addition'>Clay Bar Treatment</strong>
                    <p><span className='special-package'>+</span>$50</p>
                  </div>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size pricing-border'>Most 4-Door Trucks</strong>
                  <strong className='size'>Starting Price</strong>
                  <p className="pricing-price pricing-border">$474<span className='ninety-nine'>99</span></p>
                  <div className='additions-container'>
                    <strong className='size text-addition'>Add Stain Extraction</strong>
                    <p style={{borderBottom: 'none', paddingBottom: 0}}><span className='special-package'>+</span>$50 (Seats)</p>
                    <p><span className='special-package'>+</span>$50 (Carpets)</p>
                  </div>
                  <div className='additions-container'>
                    <strong className='size text-addition'>Remove Pet Hair</strong>
                    <p><span className='special-package'>+</span>$50-$100</p>
                  </div>
                  <div className='additions-container'>
                    <strong className='size text-addition'>Clean Headliners</strong>
                    <p><span className='special-package'>+</span>$40-$80</p>
                  </div>
                  <div className='additions-container'>
                    <strong className='size text-addition'>Clay Bar Treatment</strong>
                    <p><span className='special-package'>+</span>$75</p>
                  </div>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size pricing-border'>3-Row SUV's, Minivans, and Lifted Trucks</strong>
                  <strong className='size'>Starting Price</strong>
                  <p className="pricing-price pricing-border">$524<span className='ninety-nine'>99</span></p>
                  <div className='additions-container'>
                    <strong className=''>Add Stain Extraction</strong>
                    <p style={{borderBottom: 'none', paddingBottom: 0}} className=""><span className='special-package'>+</span>$75 (Seats)</p>
                    <p><span className='special-package'>+</span>$75 (Carpets)</p>
                  </div>
                  <div className='additions-container'>
                    <strong className=''>Remove Pet Hair</strong>
                    <p><span className='special-package'>+</span>$50-$100</p>
                  </div>
                  <div className='additions-container'>
                    <strong className=''>Clean Headliners</strong>
                    <p><span className='special-package'>+</span>$40-$80</p>
                  </div>
                  <div className='additions-container'>
                    <strong className=''>Clay Bar Treatment</strong>
                    <p><span className='special-package'>+</span>$75</p>
                  </div>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
              </div>

              <h3 className='pricing-title text-white'>Extra Add-ons <a href='/services/add-ons' className='aside-link'><BiLinkExternal /></a></h3>
              <p className='subtext'>Add-ons that are most commonly paired with our Combo deal.</p>
              <div className="pricing-container">
                <div className="pricing-card text-black">
                  <strong className='size'>Glass Polishing</strong>
                  <p>Removes Waterspots and stains from your glass.</p>
                  <p className="pricing-price pricing-border">$80/hour</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size'>Waterspot/Overspray Removal</strong>
                  <p>Remove Waterspots and Overspray from your vehicles paint.</p>
                  <p className="pricing-price pricing-border">$80/hour</p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
              </div>
            </div> */}


            <div className="service-bkg">
              {/* <br className='extra-space' /> */}
              <div style={{paddingBottom: '3rem'}} className="general-container new-heading-container">
                <strong className="above-heading">End Results</strong>
                <h3 className="new-heading">Another example of our completed combo work.</h3>
              </div>
              <div className="general-container">
                <div className="photo-grid place-center">
                  <Zoom>
                    <div className="card card-tall" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/c537680c-f103-4032-65e3-11370c73d300/public')`, width: 400 + 'px', height: 50 + 'vh'}}></div>
                  </Zoom>
                  <Zoom>
                    <div className="card card-tall" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/42b27e69-bb43-40d4-55c0-4be942f7a300/public')`, width: 400 + 'px', height: 50 + 'vh'}}></div>
                  </Zoom>
                  <Zoom>
                    <div className="card card-tall" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6fb3a112-d77a-41fb-e7ec-728b2185b600/public')`, width: 400 + 'px', height: 50 + 'vh'}}></div>
                  </Zoom>
                </div>
              </div>
              <br className='extra-space' />
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
