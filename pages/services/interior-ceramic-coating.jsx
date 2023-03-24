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
            <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7a8e321a-6a57-41ea-9736-7bd4849bcf00/public')`}}></div>

            <div className="servicepage-header">
                <h1>Interior Coating</h1>
                <h2 className='page-subheading'>Let us install an interior ceramic coating in your car to save you time when cleaning up spills and other messes</h2>
                <div className='header-buttons'>
                    <a href="/Contact" className='quote-btn'>Get a Free Quote</a>
                    <a href="tel:2532529758" className='quote-btn top-quote-btn'><MdOutlinePermPhoneMsg className='call-icon' /> (253) 252-9758</a>
                </div>
            </div>

            <div className="process-container">
                <div>
                    <main className="service-main">
                        <div className="service-explain">
                            <div className="text-left">
                                <h2 className='text-large'>Professional Interior Ceramic Coating</h2>
                                <p>Whether it's your kid spilling juice, or you spilling your morning coffee, we have all been there. Our interior coatings provide a barrier of protection and allow you time to wipe the spill up before it seeps in.</p>
                                <p>Typically both of our interior coatings will protect your vehicle for about a year before they should be reapplied.</p>
                            </div>
                            <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a196c77-cb1a-42f9-479b-8fdbe3c14500/public')`}}></div>

                        </div>

                        <h2 className='text-large'>Professional Exterior Coatings <a href='/services/exterior-ceramic-coating' className='aside-link'><BiLinkExternal /></a></h2>
                        <div className="text-left">
                            <p>If you're interested in protecting the exterior of your vehicle including the windshield, wheel faces, and headlights, then you're looking for our Exterior Ceramic Coatings which you can check out <a href='/services/exterior-ceramic-coating' className='aside-link'>here</a>. </p>
                        </div>
                    </main>

                    <br className='extra-space' />

                    <h2 className='coating-heading text-xl'>Fabric Coating</h2>
                    <p className='package-desc subtext'>The best protection for the fabric inside of your vehicle.</p>
                    <div className='package-container'>
                        <div className='package-details'>
                            <GiRolledCloth className='package-icon' />
                            <h4>All Interior Fabrics Covered</h4>
                            <p className='subtext'>Apply IGL Fabric to all carpet and fabric.</p>
                        </div>
                        <div className='package-details'>
                            <GiSpill className='package-icon' />
                            <h4>Spill Resistance</h4>
                            <p className='subtext'>Gives you more time to wipe up spills before it seeps into carpets.</p>
                        </div>
                    </div>

                    <br className='extra-space' />

                    <h2 className='coating-heading text-xl'>Leather Coating</h2>
                    <p className='package-desc subtext'>The longest lasting protection for your vehicles leather.</p>
                    <div className='package-container'>
                        <div className='package-details'>
                            <GiCarSeat className='package-icon' />
                            <h4>All Interior Leather Coated</h4>
                            <p className='subtext'>Install IGL Ecocoat Leather to all leather in the vehicle.</p>
                        </div>
                        <div className='package-details'>
                            <MdCleaningServices className='package-icon' />
                            <h4>Even Easier to Clean</h4>
                            <p className='subtext'>The coating we will put on will create a low surface tension layer that stops spills and other messes from bonding to the materials.</p>
                        </div>
                        <div className='package-details'>
                            <FiSun className='package-icon' />
                            <h4>Block Harmful Rays</h4>
                            <p className='subtext'>Coating your interior can help block harmful UV rays that can eventually cause yellowing and fading on leather materials.</p>
                        </div>
                    </div>

                    <br className='extra-space' />

                    <div>
                        <h3 className='pricing-title text-white'>Interior Coating Pricing</h3>
                        <h4 className='subtext'><span className='special-package'>*</span>Pricing does NOT include an <a href="/services/full-interior-detail" className='aside-link'>Interior Cleaning</a>, which you will want to factor in before getting a coating.</h4>
                        <div className='pricing-container text-black'>
                            <div className="pricing-card">
                                <strong className='size'>Fabric Coating</strong>
                                <p className="pricing-price pricing-border">$74<span className='ninety-nine'>99</span></p>
                                <p className="example-vehicle pricing-border">Any Size Vehicle</p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                            <div className="pricing-card">
                                <strong className='size'>Leather Coating</strong>
                                <p className="pricing-price pricing-border">$149<span className='ninety-nine'>99</span></p>
                                <p className="example-vehicle pricing-border">Any Size Vehicle</p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                        </div>

                        <h3 className='pricing-title text-white'>Monthly Maintenance Pricing</h3>
                        <h4 className='subtext'>The goal of our monthly maintenance is to keep your vehicle looking like new year-round. Every month you will get a full <a href="/services/dirtless-wash" className='aside-link'>Dirt-Less Wash</a> and a <a href='/services/full-interior-detail' className='aside-link'>Full Interior Detail</a>.</h4>
                        <div className='pricing-container text-black'>
                            <div className="pricing-card">
                                <strong className='size'>Small</strong>
                                <p className="pricing-price pricing-border">$129<span className='ninety-nine'>99</span></p>
                                <p className="example-vehicle pricing-border">2-Door Coupes</p>
                                <p className="example-vehicle pricing-border">Single/Extended Cabs</p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                            <div className="pricing-card">
                                <strong className='size'>Medium</strong>
                                <p className="pricing-price pricing-border">$159<span className='ninety-nine'>99</span></p>
                                <p className="example-vehicle pricing-border">4 Door Vehicles</p>
                                <p className="example-vehicle pricing-border">Smaller SUV's</p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                            <div className="pricing-card">
                                <strong className='size'>Large</strong>
                                <p className="pricing-price pricing-border">$189<span className='ninety-nine'>99</span></p>
                                <p className="example-vehicle pricing-border">Larger Trucks</p>
                                <p className="example-vehicle pricing-border">Extra Large Vehicles</p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                        </div>

                        <h3 className="pricing-title text-white">Interior Re-coating Options</h3>
                        <h4 className='subtext'><span className="special-package">*</span>Note: Price doesn't include an <a href="/services/full-interior-detail" className='aside-link'>Interior Detail</a> service which we will need to do before applying the coating for the best results.</h4>
                        <div className="pricing-container text-black">
                            <div className="pricing-card">
                                <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Fabric Re-coating</strong>
                                <p>Get all interior Fabric/Carpet re-coated.</p>
                                <p className="pricing-price">$74<span className='ninety-nine'>99</span></p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                            <div className="pricing-card">
                                <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Leather Re-coating</strong>
                                <p>Get all interior Leather re-coated.</p>
                                <p className="pricing-price">$149<span className='ninety-nine'>99</span></p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                        </div>

                    </div>

                    <br className='extra-space' />

                </div>
            </div>

        </section>
    )
}
