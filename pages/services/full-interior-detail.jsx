import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import { BiLinkExternal } from 'react-icons/bi';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';

const steps = [
  ["Expose Hidden Dirt", "Use our Tornador Vortex blowgun which uses compressed air to blow out every spot a vacuum can't reach. It also extracts sand and loose soil from carpeting."],
  ["Vacuum Vehicle", "Thoroughly vacuum every crack and crevice of the vehicle."],
  ["Hot Water Extraction", "We use a professional hot water extractor and professional flex stain remover and alkaline floor rinse to keep floors at a neutral PH level. We will be sure to get all carpets, floor mats, and cloth seats."],
  ["Clean Plastics and Leathers", "Clean, steam, and degrease all plastics and leather seats."],
  ["Dress Interior", "Dress or Coat Interior**"],
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
        <h2 className='page-subheading'>Easy and hassle free thorough interior cleaning service</h2>
        <div className='header-buttons'>
          <a href="/Contact" className='quote-btn'>Get a Free Quote</a>
          <a href="tel:2532529758" className='quote-btn top-quote-btn'><MdOutlinePermPhoneMsg className='call-icon' /> (253) 252-9758</a>
        </div>
      </div>

      <div className='main-content-container bg-contact'>
        <div className='process-container'>
          <div>
            <main className="service-main">
              <div className="service-explain">
                <div className="text-left">
                  <h2 className='text-large'>Professional Interior Detailing</h2>
                  <p>The goal of the Full Interior Cleaning package is to restore your interior to its best condition. Your carpet, seats, floor mats, plastics, windows, and all other interior fixtures will be meticulously cleaned.</p>
                  <p>While we will attempt to remove 100% of stains many stains could prove to be more challenging to remove or might not be completely removed. Some won't completely disappear depending on the kind of stain, how long it has been sitting, and the material the stain is on. </p>
                  <p>Taking us by surprise is difficult. Please don't think that your interior is too dirty. We've seen hundreds of different interiors and have all the necessary tools to attempt to remove any kind of stain or mess.</p>
                  <p>Make it a <a href='/services/interior-exterior-detailing-combo' className='aside-link'>Combo</a> deal by booking with a Dirt-Less Wash, and get an <a href='/services/add-ons#engine' className='aside-link'>Engine Bay</a> cleaning on the house!</p>
                </div>
                <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/be771e29-71fe-47b0-8fa3-0419d7991800/public')`}}></div>
              </div>

              <h2 className='text-large'>Biohazard Cleanings <a href='/services/biohazard-cleaning' className='aside-link'><BiLinkExternal /></a></h2>
              <div className="text-left">
                <p>If the interior of your vehicle has things like strong odors, mold, or even bodily fluids we can clean those with our <a href="/services/biohazard-cleaning" className='aside-link'>Biohazard Cleaning</a> service. This will cover a normal interior cleaning and will also include extra things like carpet extraction and ozone treatment depending on the severity of the situation.</p>
              </div>

              <h2 className='text-large'>Interior and Exterior Combo Deal <a href='/services/interior-exterior-detailing-combo' className='aside-link'><BiLinkExternal /></a></h2>
              <div className="text-left">
                <p>Get a <span className="special-package">FREE</span> Engine Bay Cleaning when you schedule our Combo service. This service combines our <a href="/services/dirtless-wash" className='aside-link'>Dirt-Less Wash</a> and this Full Interior Detail. It is sure to get your entire vehicle looking like new, even the engine bay which is typically overlooked when washing your car.</p>
              </div>

              <br className='extra-space' />
            </main>

            <h2 className='cleaning-process-title text-large'>Our Interior Cleaning Process*</h2>
            <ol className='list'>
              {content}
            </ol>
            <p><span className='special-package'>*</span>Extraction Package Only</p>
            <p>**For Interior Coating details check <a className='aside-link' href="/services/interior-ceramic-coating">here</a>.</p>

            <br className='extra-space' />

            <div>
              <h3 className='pricing-title text-white'>Full Interior Cleaning Pricing</h3>
              <strong className='subtext'>*Final pricing may vary within the ranges below based on your vehicle condition and size.</strong>
              <div className="pricing-container">
                <div className="pricing-card text-black">
                  <strong className='size pricing-border' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>2-Door Coupes, Single and Extended Cab Trucks</strong>
                  <strong className='size'>Starting Price</strong>
                  <p className="pricing-price pricing-border">$299<span className='ninety-nine'>99</span></p>
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
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size pricing-border' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Most 4 Door Vehicles and Trucks</strong>
                  <strong className='size'>Starting Price</strong>
                  <p className="pricing-price pricing-border">$349<span className='ninety-nine'>99</span></p>
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
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size pricing-border' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>3-Row SUV's and Minivans</strong>
                  <strong className='size'>Starting Price</strong>
                  <p className="pricing-price pricing-border">$399<span className='ninety-nine'>99</span></p>
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
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
              </div>

              <h3 className='pricing-title text-white'>Extra Add-ons <a href='/services/add-ons' className='aside-link'><BiLinkExternal /></a></h3>
              <strong className='subtext'>Some of our most popular add-ons that are usually added on top of our Interior Cleaning Service.</strong>
              <div className="pricing-container">
                <div className="pricing-card text-black">
                  <strong className='size pricing-border' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Fabric Ceramic Coating</strong>
                  <p>Get a coat of IGL's Interior Coating.</p>
                  <p className="pricing-price pricing-border">$74<span className='ninety-nine'>99</span></p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size pricing-border' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Leather Ceramic Coating</strong>
                  <p>Get a coat of IGL's Leather Coating professionally applied.</p>
                  <p className="pricing-price pricing-border">$149<span className='ninety-nine'>99</span></p>
                  <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                </div>
                <div className="pricing-card text-black">
                  <strong className='size pricing-border' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Ozone Treatment</strong>
                  <p>Have an ozone treatment done to remove odors and clean the air in your car.</p>
                  <p className="pricing-price pricing-border">$99<span className='ninety-nine'>99</span></p>
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
