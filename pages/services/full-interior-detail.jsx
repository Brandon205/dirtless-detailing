import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import cover from '../../public/imgs/pageimgs/interior/fullIntExCover.webp';

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
  const [href, setHref] = useState('');

  useEffect(() => {
    setHref(window.location.href)
  }, []);

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
            "description": "Get your car's interior looking brand new with our full interior detailing service. We offer thorough cleaning and conditioning of all surfaces, including the dashboard, seats, and carpets. Contact us to schedule your appointment today.",
            "url": "https://www.dirtlessdetailing.com/services/full-interior-detail",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "priceSpecification": {
              	"@type": "PriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "200",
                "maxPrice": "350"
              },
              "availability": "http://schema.org/InStock",
              "itemOffered": {
                "@type": "Service",
                "name": "Full Interior Detailing Service",
                "serviceType": "Interior Detailing",
                "image": "${cover.src}",
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

      <div className='main-content-container'>
        <div className='process-container'>
          <div>
            <main className="service-main">
              <h2 className='text-large'>Professional Interior Detailing</h2>
              <div className="text-left">
                <p>The Full Interior Cleaning package is meant to get your interior back to the best condition possible. Your seats, floor mats, plastics, windows, and carpet will all be thoroughly cleaned, detailed, and shampooed/extracted. </p>
                <p>If it can be cleaned, we'll clean it. Does that mean every little stain will be removed? Unfortunately, that isn't the case. Based on the type of stain, how long it's been sitting, and the material, many stains won't come out 100%.</p>
                <p>Of course we'll still do our best to reduce the appearance of it.</p>
                <p>Please don't think your interior is “too dirty”. We have the necessary tools and products to get the job done. We have cleaned hundreds of interiors, of all conditions. It's not easy to surprise us.</p>
                <p>Make it a <a href='/services/interior-exterior-detailing-combo' className='aside-link'>Combo</a> deal by booking with a Premium Dirt-Less Wash, and get a free <a href='/services/add-ons#engine' className='aside-link'>Engine Bay</a> cleaning on the house!</p>
              </div>

              <br className='extra-space' />
            </main>

            <h2 className='cleaning-process-title text-large'>Our Interior Cleaning Process*</h2>
            <ol className='list'>
              {content}
            </ol>
            <p style={{ marginTop: 0 }}>*Headliners offered as a separate add-on</p>
            <p><span className='special-package'>*Extraction</span> Package Only</p>
          </div>

          <div className='aside-container'>
            <div className='service-aside'>
              <p className='extra-addons text-large'>Other Interior Pages</p>
              <hr className="contact-border" style={{ marginBottom: 16 }} />
              <div className="aside-links">
                <a href="#" style={{ color: href.endsWith('full-interior-detail') ? 'dodgerblue' : 'white' }} className="service-link">{href.endsWith('full-interior-detail') ? '> ' : ''} Full Interior Detail</a><br />
                <a href="/services/biohazard-cleaning" style={{ color: href.endsWith('biohazard-cleaning') ? 'dodgerblue' : 'white' }} className="service-link">{href.endsWith('biohazard-cleaning') ? '> ' : ''} Biohazard Cleaning</a><br />
                <a href="/gallery/interior-detail-gallery" className="service-link">Full Interior Gallery</a>
              </div>
            </div>

            <div className='aside-container'>
              <div className='service-aside addons-aside'>
                <p className='extra-addons text-large'>Extra Add-ons</p>
                <hr className="contact-border" style={{ marginBottom: 16 }} />
                <div className="aside-links">
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/interior-ceramic-coating" className='text-blue'>Fabric Coating</a></p>
                    <p className='m-0'><span className="bold special-package">$75</span></p>
                    <p className="addon-subtext">The best protection for the fabric inside of your vehicle.</p>
                  </div>
                  <hr className='aside-border' />
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/interior-ceramic-coating" className='text-blue'>Leather Coating</a></p>
                    <p className='m-0'><span className="bold special-package">$150</span></p>
                    <p className="addon-subtext">The longest lasting protection for your vehicles leather.</p>
                  </div>
                  <hr className='aside-border' />
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/add-ons#headliners" className='text-blue'>Headliners</a></p>
                    <p className='m-0'><span className="bold special-package">$40-$80</span></p>
                    <p className="addon-subtext">Clean your vehicles headliners.</p>
                  </div>
                  <hr className='aside-border' />
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/add-ons#ozone" className='text-blue'>Ozone Treatment</a></p>
                    <p className='m-0'><span className="bold special-package">$100</span></p>
                    <p className="addon-subtext">Treats your vehicle to get rid of any viruses, bacteria, and odors.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="combo-container">
          <h3 className='text-white'>Get a <span className='special-package'>FREE</span> Engine cleaning!</h3>
          <p className="subtext">Check out our Current <a className='aside-link' href="/services/interior-exterior-detailing-combo">Combo</a> deal that combines this Full Interior Cleaning, our <a className='aside-link' href="/services/premium-dirtless-wash">Premium Dirt-Less Wash</a>, and gives you an Engine Bay cleaning totally on us!  </p>
        </div>

        <div>
          <h3 className='pricing-title'>Our Full Interior Cleaning Pricing</h3>
          <strong className='pricing-subtext'>*Final pricing may vary based on your vehicle condition and size.</strong>
          <div className="pricing-container">
            <div className="pricing-card">
              <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Small</strong>
              <strong className='size'>Without Extraction</strong>
              <p className="pricing-price pricing-border">$200</p>
              <strong className='size'>With Extraction</strong>
              <p className="pricing-price pricing-border">$250</p>
              <p className="example-vehicle pricing-border">2-Door Coupes</p>
              <p className="example-vehicle pricing-border">Single/Extended Cabs</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
            <div className="pricing-card">
              <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Medium</strong>
              <strong className='size'>Without Extraction</strong>
              <p className="pricing-price pricing-border">$250</p>
              <strong className='size'>With Extraction</strong>
              <p className="pricing-price pricing-border">$300</p>
              <p className="example-vehicle pricing-border">4 Door Vehicles</p>
              <p className="example-vehicle pricing-border">Smaller SUV's</p>
              <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
            </div>
            <div className="pricing-card">
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
        </div>
      </div>
    </section>
  )
}
