import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import PricingComponent from '../../utils/PricingComponent';
import addons from '../../utils/Addons';

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
        <h1>The Dirt-Less Detail</h1>
        <h2 className='page-subheading'>Full Interior Cleaning, Dirt-Less Wash, and an Engine Bay Cleaning on us!</h2>
        <div className='header-buttons'>
          <a href="/Contact" className='top-quote-btn'><img src='../assets/icons/clipboard.png' alt='clipboard' className='btn-icon' /> Get a Free Quote</a>
          <a href="tel:2532529758" className='top-quote-btn btn-secondary'><img src='../assets/icons/phoneMessage.png' alt='call or message' className='btn-icon' /> (253) 252-9758</a>
        </div>
      </div>

      <div className='main-content-container'>
        <div style={{paddingTop: 0}} className="process-container">
          <div style={{width: '100%'}}>
            <main className="service-main top-service-main">
              <div className="service-explain">
                <div className="text-left">
                  <h2 className='text-large'>Interior and Exterior Combo Cleaning</h2>
                  <p>The <a href="/services/full-interior-detail" className='aside-link'>Full Interior Detail</a> service includes a thorough cleaning of every nook and cranny inside your car. We'll remove all dirt, dust, and debris from your carpets, seats, and upholstery, and make sure your dashboard, door panels, and center console are spotless. We'll also clean your windows, leaving them crystal clear and streak-free.</p>
                  <p>Our <a href="/services/dirtless-wash" className='aside-link'>Dirt-Less Wash</a> service uses the latest technology to wash your car safely, preventing dirt and grime from sticking to your freshly cleaned car. Not only does this give your car a superior clean, but it's also environmentally friendly.</p>
                  <p>Finally, our <a href="/services/add-ons#engine" className='aside-link'>Engine Bay Cleaning</a> service will give your engine a thorough cleaning, removing any built-up grime or grease. Not only will your engine bay look great, but a clean engine can also run more efficiently and last longer.</p>
                  <p>Together, these three services will leave your car looking and feeling like new again, both inside and out. Don't settle for a subpar detailing job - trust our team of experts to give your car the care it deserves. Book your appointment today!</p>
                </div>
                <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3031c630-d6f2-48fc-1bb4-62844fbd5a00/public')`}}>
                  <img style={{visibility: 'hidden'}} alt="cleaned drivers seat area of a Mazda, clean engine bay area of Mazda, and the cleaned exterior of the Mazda" src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3031c630-d6f2-48fc-1bb4-62844fbd5a00/public" />
                </div>
              </div>
              <br className='extra-space' />
            </main>

            <div style={{backgroundColor: 'white', color: 'black', paddingTop: '14vh'}}>
              <h2 className='cleaning-process-title text-xl'>The Dirt-Less Detail Cleaning Process</h2>
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

                <li className="item">
                  <div className="step-number-container">
                    <h3 className='step-number'>4</h3><div className="vertical-rule"></div>
                  </div>
                  <div className="step-container">
                    <h4 className="step-title">Dress/Coat Interior</h4>
                    <p className='step-desc'>Finally we will perform some final touches including applying a dressing or even a <a href="/services/interior-ceramic-coating" className='aside-link'>Ceramic Coating</a> on the interior if desired.</p>
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

              <PricingComponent prices={['374', '374', '449', '449', '474', '499']} addons={[addons.extraction, addons.hair, addons.headliners, addons.intcoating, addons.ozone, addons.claybar, addons.glass, addons.waterspot]} />
            </div>
            <div className="service-bkg-lighter">
              <div style={{paddingBottom: '3rem'}} className="general-container new-heading-container">
                <strong className="above-heading">End Results</strong>
                <h3 className="new-heading">Another example of our completed combo work</h3>
              </div>
              <div className="general-container">
                <div className="mini-grid">
                  <Zoom>
                    <div className="card card-tall" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/c537680c-f103-4032-65e3-11370c73d300/public')`}}></div>
                  </Zoom>
                  <Zoom>
                    <div className="card card-tall" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/42b27e69-bb43-40d4-55c0-4be942f7a300/public')`}}></div>
                  </Zoom>
                  <Zoom>
                    <div className="card card-tall" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6fb3a112-d77a-41fb-e7ec-728b2185b600/public')`}}></div>
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
