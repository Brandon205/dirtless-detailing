import React from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';

import { BiLinkExternal } from 'react-icons/bi';

export default function IntCoatings() {
    return (
        <section className="service-content-container bg-contact">
            <Head>
                <title>Interior Ceramic Coatings | Dirt-Less Detailing</title>
                <Metatags
                    title='Interior Ceramic Coatings | Dirt-Less Detailing'
                    description='Have us coat the interior of your vehicle with our products to keep them clean and protected from day to day use.'
                    image="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7a8e321a-6a57-41ea-9736-7bd4849bcf00/public"
                    canonical='/services/interior-ceramic-coating'
                />
                <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "http://schema.org",
                        "@type": "Product",
                        "name": "Interior Ceramic Coating",
                        "brand": "Dirt-Less Detailing",
                        "description": "Protect and enhance your vehicle's interior with our professional interior ceramic coating service. Contact us to learn more and schedule your interior ceramic coating service today.",
                        "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7a8e321a-6a57-41ea-9736-7bd4849bcf00/public",
                        "url": "https://www.dirtlessdetailing.com/services/interior-ceramic-coating/",
                        "offers": [
                            {
                                "@type": "Offer",
                                "priceCurrency": "USD",
                                "price": "150",
                                "priceSpecification": {
                                    "@type": "PriceSpecification",
                                    "priceCurrency": "USD",
                                    "price": "150",
                                    "minPrice": "150",
                                    "maxPrice": "150"
                                },
                                "availability": "http://schema.org/InStock",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Interior Ceramic Coating",
                                    "serviceType": "Ceramic Coating",
                                    "providerMobility": "dynamic"
                                }
                            },
                        ]
                    }`,
                }} />
            </Head>
            <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7a8e321a-6a57-41ea-9736-7bd4849bcf00/cover')`}}></div>

            <div className="servicepage-header">
                <h1>Interior Ceramic Coatings</h1>
                <h2 className='page-subheading'>Experience the Best in Interior Protection with Our Interior Ceramic Coating Services.</h2>
                <div className='header-buttons'>
                    <a href="/Contact" className='top-quote-btn'><img src='../assets/icons/clipboard.png' alt='clipboard' className='btn-icon' /> Get a Free Quote</a>
                    <a href="tel:2532529758" className='top-quote-btn btn-secondary'><img src='../assets/icons/phoneMessage.png' alt='call or message' className='btn-icon' /> (253) 252-9758</a>
                </div>
            </div>

            <div className="process-container">
                <div style={{width: '100%'}}>

                    <h2 style={{fontSize: '2rem', margin: '2rem 0 3rem 0'}} className='new-heading-center'>Why get an interior ceramic coating?</h2>
                    <div className="service-type-container">
                        <div className="service-type-card no-grow">
                            <img src='../assets/icons/question.png' alt="popularity graph" className='icon-96' />
                            <strong>What is an Interior Ceramic Coating?</strong>
                            <p>Ceramic coatings are liquid polymers that chemically bond with a vehicle's interior to create a strong, protective layer. This layer resists damage from UV rays, oxidation, and contaminants, providing protection and easy spill cleanup.</p>
                        </div>
                        <div className="service-type-card no-grow">
                            <img src='../assets/icons/layers.png' alt="popularity graph" className='icon-96' />
                            <strong>All Interior Materials Get Coated</strong>
                            <p>Because of the new products that we recently switched to we are able to cover ALL of the interior materials, where before it was just the leather or fabric. So now is a great time to get an interior coating!</p>
                        </div>
                        <div className="service-type-card no-grow">
                            <img src='../assets/icons/spill.png' alt="popularity graph" className='icon-96' />
                            <strong>Even Easier to Clean</strong>
                            <p>The coating we will put on will create a low surface tension layer that stops spills and other messes from bonding to the materials.</p>
                        </div>
                        <div className="service-type-card no-grow">
                            <img src='../assets/icons/sun.png' alt="popularity graph" className='icon-96' />
                            <strong>Block Harmful Rays</strong>
                            <p>Coating your interior can help block harmful UV rays that can eventually cause yellowing and fading on leather materials.</p>
                        </div>
                    </div>

                    <div style={{marginTop: '5vh', borderRadius: '38px 38px 0 0'}} className='service-bkg'>
                        <h3 className='pricing-title text-white'>Our Interior Coating Pricing</h3>
                        <h4 className='subtext'><span className='special-package'>*</span>Pricing does <span className='special-package'>NOT</span> include an <a href="/services/full-interior-detail" className='aside-link'>Interior Cleaning</a>, which you will want to factor in before getting a coating.</h4>
                        <div style={{width: '75%'}} className='pricing-container text-black'>
                            <div className="pricing-card">
                                <h5>Interior Ceramic Coating</h5>
                                <p>Gets your whole interior coated with a ~1 year Ceramic Coating.</p>
                                <p>Check <a href="/services/full-interior-detail" className='aside-link'>here</a> for our Interior Detail Pricing</p>
                                <div>
                                    <strong className='size'>Any Size Vehicle</strong>
                                    <p className="pricing-price">$150</p>
                                </div>
                            </div>
                        </div>
                        <br className='extra-space' />
                    </div>

                    <div style={{marginTop: '5vh'}} className="service-bkg-lighter">
                        <div className="general-container new-heading-container">
                            <strong className="above-heading">Further Reading</strong>
                            <h3 className="new-heading">More info on our interior coatings.</h3>
                        </div>
                        <div style={{padding: '2rem 0'}} className="general-container">

                            <main className="service-main">
                                <div className="service-explain">
                                    <div className="text-left">
                                        <h2 className='text-large'>Professional Interior Ceramic Coating for $150</h2>
                                        <p>Interior ceramic coatings are a must-have for anyone who wants to keep their car looking and feeling great, even in cars where spills and messes happen often.</p>
                                        <p>Interior coatings create a protective layer that will give you more time to clean up a spill before it soaks in and stains compared to uncoated materials.</p>
                                        <p>With an interior ceramic coating, you'll enjoy easy-to-clean surfaces that stay looking like new, making your car feel more luxurious and comfortable.</p>
                                        <p>Typically our interior coatings will protect your vehicle for about a year before they should be reapplied.</p>
                                        <p><span className="special-package">*Note:</span> You will need to have an <a href="/services/full-interior-detail" className="aside-link">Interior Detail</a> performed before getting a coating applied, this ensures there is no dirt that we are trap underneath the coating.</p>
                                    </div>
                                    <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a196c77-cb1a-42f9-479b-8fdbe3c14500/public')`}}>
                                        <img style={{visibility: 'hidden'}} alt="Cleaned and coated seat of an Infiniti" src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a196c77-cb1a-42f9-479b-8fdbe3c14500/public" />
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                    <div style={{padding: '2rem'}} className="service-bkg-lighter">
                        <div className="general-container new-heading-container">
                            <strong className="above-heading">Related Services</strong>
                            <h3 className="new-heading">Services similar to our Interior Coating.</h3>
                        </div>
                        <div style={{padding: '2rem 0'}} className="general-container">

                            <h2 className='text-large text-left'>Professional Exterior Coatings <a href='/services/exterior-ceramic-coating' className='aside-link'><BiLinkExternal /></a></h2>
                            <div className="text-left">
                                <p>If you're interested in protecting the exterior of your vehicle including the windshield, wheel faces, and headlights, then you're looking for our Exterior Ceramic Coatings. Check out more info <a href='/services/exterior-ceramic-coating' className='aside-link'>here</a>. </p>
                            </div>
                        </div>
                        <br className='extra-space' />
                    </div>

                </div>
            </div>

        </section>
    )
}
