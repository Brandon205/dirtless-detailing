import React from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';

import { BiLinkExternal } from 'react-icons/bi';
import { GiCarSeat, GiRolledCloth, GiSpill } from 'react-icons/gi';
import { MdCleaningServices } from 'react-icons/md';
import { FiSun } from 'react-icons/fi';

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
                                "price": "75"
                                "availability": "http://schema.org/InStock",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Interior Fabric Ceramic Coating",
                                    "serviceType": "Ceramic Coating",
                                    "providerMobility": "dynamic"
                                }
                            },
                            {
                                "@type": "Offer",
                                "priceCurrency": "USD",
                                "price": "150"
                                "availability": "http://schema.org/InStock",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Interior Leather Ceramic Coating",
                                    "serviceType": "Ceramic Coating",
                                    "providerMobility": "dynamic"
                                }
                            }
                        ]
                    }`,
                }} />
            </Head>
            <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7a8e321a-6a57-41ea-9736-7bd4849bcf00/cover')`}}></div>

            <div className="servicepage-header">
                <h1>Interior Coating</h1>
                <h2 className='page-subheading'>Experience the Ultimate in Interior Protection with Our Ceramic Coating Services.</h2>
                <div className='header-buttons'>
                    <a href="/Contact" className='quote-btn'>Get a Free Quote</a>
                    <a href="tel:2532529758" className='quote-btn top-quote-btn'><MdOutlinePermPhoneMsg className='call-icon' /> (253) 252-9758</a>
                </div>
            </div>

            <div className="process-container">
                <div style={{width: '100%'}}>

                    <div className='package-details-container'>
                        <div className='package-details-top'>
                            <h2 style={{fontSize: '3rem', margin: '0 0 1rem 0'}}>Our Interior Coating Packages</h2>
                            <p>Ceramic coatings are liquid polymers that chemically bond with a vehicle's interior to create a strong, protective layer. This layer resists damage from UV rays, oxidation, and contaminants, providing protection and easy spill cleanup.</p>
                        </div>

                        <div className='package-details-bkg'>
                            <div className='package-container-header'>
                                <h2 className='coating-heading text-shadow'><span className='special-package'>Fabric</span> Coating</h2>
                                <p>Price: <span className='pricing__pricecard-price'>$74.99</span></p>
                            </div>
                            <div className='package-container'>
                                <div className='package-details'>
                                    <h4><GiRolledCloth className='star-icon' /> All Interior Fabrics Coated</h4>
                                    <p>Apply IGL Fabric to all carpet and fabric.</p>
                                </div>
                                <div className='package-details'>
                                    <h4><GiSpill className='star-icon' /> Spill Resistance</h4>
                                    <p>Gives you more time to wipe up spills before it seeps into carpets.</p>
                                </div>
                                <div className='package-details'></div>
                            </div>
                        </div>

                        <div className='package-details-bkg'>
                            <div className='package-container-header'>
                                <h2 className='coating-heading text-shadow'><span className='special-package'>Leather</span> Package</h2>
                                <p>Price: <span className='pricing__pricecard-price'>$149.99</span></p>
                            </div>
                            <div className='package-container'>
                                <div className='package-details'>
                                    <h4><GiCarSeat className='star-icon' /> All Interior Leather Coated</h4>
                                    <p>Install IGL Ecocoat Leather to all leather in the vehicle</p>
                                </div>
                                <div className='package-details'>
                                    <h4><MdCleaningServices className='star-icon' /> Even Easier to Clean</h4>
                                    <p>The coating we will put on will create a low surface tension layer that stops spills and other messes from bonding to the materials.</p>
                                </div>
                                <div className='package-details'>
                                    <h4><FiSun className='star-icon' /> Block Harmful Rays</h4>
                                    <p>Coating your interior can help block harmful UV rays that can eventually cause yellowing and fading on leather materials.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br className='extra-space' />

                    {/* <div style={{marginTop: '5vh', borderRadius: '38px 38px 0 0'}} className='service-bkg'>
                        <h3 className='pricing-title text-white'>Our Interior Coating Pricing</h3>
                        <h4 className='subtext'><span className='special-package'>*</span>Pricing does <span className='special-package'>NOT</span> include an <a href="/services/full-interior-detail" className='aside-link'>Interior Cleaning</a>, which you will want to factor in before getting a coating.</h4>
                        <div style={{width: '75%'}} className='pricing-container text-black'>
                            <div className="pricing-card">
                                <h5>Fabric Coating</h5>
                                <p>Get all of the fabric in your vehicle professionally coated.</p>
                                <p>Check <a href="/services/full-interior-detail" className='aside-link'>here</a> for our Interior Detail Pricing</p>
                                <div>
                                    <strong className='size'>Any Size Vehicle</strong>
                                    <p className="pricing-price">$74<span className='ninety-nine'>99</span></p>
                                </div>
                            </div>
                            <div className="pricing-card">
                                <h5>Leather Coating</h5>
                                <p>Get all of the leather in your vehicle professionally coated.</p>
                                <p>Check <a href="/services/full-interior-detail" className='aside-link'>here</a> for our Interior Detail Pricing</p>
                                <div>
                                    <strong className='size'>Any Size Vehicle</strong>
                                    <p className="pricing-price">$149<span className='ninety-nine'>99</span></p>
                                </div>
                            </div>
                        </div>
                        <br className='extra-space' />
                    </div> */}

                    <div style={{padding: '2rem', marginTop: '5vh'}} className="service-bkg-lighter">
                        <div className="general-container new-heading-container">
                            <strong className="above-heading">Further Reading</strong>
                            <h3 className="new-heading">More info on our interior coatings.</h3>
                        </div>
                        <div style={{padding: '2rem 0'}} className="general-container">

                            <main className="service-main">
                                <div className="service-explain">
                                    <div className="text-left">
                                        <h2 className='text-large'>Professional Interior Ceramic Coating</h2>
                                        <p>Interior ceramic coatings are a must-have for anyone who wants to keep their car looking and feeling great, even in cars where spills and messes happen often.</p>
                                        <p>Interior coatings create a protective layer that will give you more time to clean up a spill before it soaks in and stains compared to uncoated materials.</p>
                                        <p>With an interior ceramic coating, you'll enjoy easy-to-clean surfaces that stay looking like new, making your car feel more luxurious and comfortable.</p>
                                        <p>Typically both our fabric and leather interior coatings will protect your vehicle for about a year before they should be reapplied.</p>
                                    </div>
                                    <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a196c77-cb1a-42f9-479b-8fdbe3c14500/public')`}}>
                                        <img style={{visibility: 'hidden'}} src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a196c77-cb1a-42f9-479b-8fdbe3c14500/public" />
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                    <div style={{padding: '2rem'}} className="service-bkg-lighter">
                        <div className="general-container new-heading-container">
                            <strong className="above-heading">Related Services</strong>
                            <h3 className="new-heading">Services similar to our Interior Coatings.</h3>
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
