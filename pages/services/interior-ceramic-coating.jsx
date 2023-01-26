import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { BiLinkExternal } from 'react-icons/bi';
import { GiCarSeat, GiRolledCloth, GiSpill } from 'react-icons/gi';
import { MdCleaningServices } from 'react-icons/md';
import { FiSun } from 'react-icons/fi';

import cover from '../../public/imgs/pageimgs/interior/IMG_20220929_155050.jpg';
import ext2 from '../../public/imgs/pageimgs/ceramic/317941187_811122646616266_4791919094544331114_n.jpg';

export default function IntCoatings() {
    return (
        <section className="service-content-container bg-contact">
            <Head>
                <Metatags
                    title='Interior Ceramic Coatings | Dirt-Less Detailing'
                    description='Have us coat the interior of your vehicle with our products to keep them clean and protected from day to day use.'
                    image={cover.src}
                    canonical='/services/interior-ceramic-coating'
                />
                <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "http://schema.org",
                        "@type": "Product",
                        "name": "Interior Ceramic Coating",
                        "brand": "Dirt-Less Detailing",
                        "description": "Protect and enhance your vehicle's interior with our professional interior ceramic coating service. Contact us to learn more and schedule your interior ceramic coating service today.",
                        "image": "${cover.src}",
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
            <div className="cover">
                <Image src={cover} alt="Coated and protected vehicle interior" layout="fill" objectFit='cover' placeholder='blur' priority />
            </div>
            <div className="servicepage-header">
                <h1>Interior Coating</h1>
                <h2 className='page-subheading'>Let us install an interior ceramic coating in your car to save you time when cleaning up spills and other messes</h2>
                <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
                <p className='inline text-small'>
                    Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
                </p>
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
                            <div className="service-image">
                                <Zoom>
                                    <Image style={{ borderRadius: 16 }} src={ext2} alt="Front view of seat after leather ceramic coating" layout="responsive" objectFit='scale-down' placeholder='blur' />
                                </Zoom>
                            </div>
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
                                <strong className='size text-xl'>Fabric Coating</strong>
                                <p className="pricing-price pricing-border">$75</p>
                                <p className="example-vehicle pricing-border">Any Size Vehicle</p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                            <div className="pricing-card">
                                <strong className='size text-xl'>Leather Coating</strong>
                                <p className="pricing-price pricing-border">$150</p>
                                <p className="example-vehicle pricing-border">Any Size Vehicle</p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                        </div>

                        <h3 className='pricing-title text-white'>Monthly Maintenance Pricing</h3>
                        <h4 className='subtext'>The goal of our monthly maintenance is to keep your vehicle looking like new year-round. Every month you will get a full <a href="/services/dirtless-wash" className='aside-link'>Dirt-Less Wash</a> and a <a href='/services/full-interior-detail' className='aside-link'>Full Interior Detail</a>.</h4>
                        <div className='pricing-container text-black'>
                            <div className="pricing-card">
                                <strong className='size text-xl'>Small</strong>
                                <p className="pricing-price pricing-border">$130</p>
                                <p className="example-vehicle pricing-border">2-Door Coupes</p>
                                <p className="example-vehicle pricing-border">Single/Extended Cabs</p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                            <div className="pricing-card">
                                <strong className='size text-xl'>Medium</strong>
                                <p className="pricing-price pricing-border">$160</p>
                                <p className="example-vehicle pricing-border">4 Door Vehicles</p>
                                <p className="example-vehicle pricing-border">Smaller SUV's</p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                            <div className="pricing-card">
                                <strong className='size text-xl'>Large</strong>
                                <p className="pricing-price pricing-border">$190</p>
                                <p className="example-vehicle pricing-border">Larger Trucks</p>
                                <p className="example-vehicle pricing-border">Extra Large Vehicles</p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                        </div>

                        <h3 className="pricing-title text-white">Interior Re-coating Options</h3>
                        <h4 className='subtext'><span className="special-package">*</span>Note: Price doesn't include an <a href="/services/full-interior-detail" className='aside-link'>Interior Detail</a> service which we will need to do before applying the coating for the best results.</h4>
                        <div className="pricing-container text-black">
                            <div className="pricing-card fixed-height">
                                <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Re-coat All Vehicle Trim</strong>
                                <p>Get all exterior vehicle trim re-coated.</p>
                                <p className="pricing-price">$100</p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                            <div className="pricing-card fixed-height">
                                <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Re-coat Wheel Faces</strong>
                                <p>Re-coat all Wheel Faces.</p>
                                <p className="pricing-price">$150</p>
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
