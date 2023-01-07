import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { GiCarSeat, GiRolledCloth, GiSpill } from 'react-icons/gi';
import { MdCleaningServices } from 'react-icons/md';
import { FiSun } from 'react-icons/fi';

import cover from '../../public/imgs/pageimgs/interior/IMG_20220929_155050.jpg';
import ext1 from '../../public/imgs/pageimgs/ceramic/317895587_701820004796038_115520810281779526_n.jpg';
import ext2 from '../../public/imgs/pageimgs/ceramic/317941187_811122646616266_4791919094544331114_n.jpg';

export default function IntCoatings() {
    return (
        <section className="service-content-container bg-contact">
            <Head>
                <title>Interior Ceramic Coatings | Dirt-Less Detailing</title>
                <meta property="og:title" content="Interior Ceramic Coatings | Dirt-Less Detailing" />
                <meta name="description" content="Have us coat the interior of your vehicle with our products to keep them clean and protected from day to day use." />
                <meta property="og:description" content="Have us coat the interior of your vehicle with our products to keep them clean and protected from day to day use." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.dirtlessdetailing.com/services/interior-ceramic-coating" />
                <meta property="og:image" content={cover.src} />
                <link rel="canonical" href="https://www.dirtlessdetailing.com/services/interior-ceramic-coating" />
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
                        <h2 className='text-large'>Professional Interior Ceramic Coating</h2>
                        <div className="text-left">
                            <p>Weather it's your kid spilling juice, or you spilling your morning coffee, we have all been there. Our interior coatings provide a barrier of protection and allow you time to wipe the spill up before it seeps in.</p>
                            <p>Typically both of our interior coatings will protect your vehicle for about a year before they should be reapplied.</p>
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
                        <h3 className='pricing-title text-white'>Our Interior Coating Pricing</h3>
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

                    </div>

                    <br className='extra-space' />

                    <h4 className='text-large'>Some examples of our Interior Coating work so far:</h4>
                    <div className="examples-container">
                        <div className="example-img">
                            <Zoom>
                                <Image style={{ borderRadius: 16 }} src={ext1} alt="Side view of seat after leather ceramic coating" layout="responsive" objectFit='scale-down' placeholder='blur' />
                            </Zoom>
                        </div>
                        <div className="example-img">
                            <Zoom>
                                <Image style={{ borderRadius: 16 }} src={ext2} alt="Front view of seat after leather ceramic coating" layout="responsive" objectFit='scale-down' placeholder='blur' />
                            </Zoom>
                        </div>
                    </div>

                </div>

                <div className="aside-container">
                    <div className='service-aside addons-aside'>
                        <p className='extra-addons text-large'>Our Exterior Coatings</p>
                        <hr className="contact-border" style={{ marginBottom: 16 }} />
                        <div className="aside-links">
                            <div className="addon-container">
                                <p className='addon-title'><a href="/services/exterior-ceramic-coating" className='text-blue'>Protect Ceramic Coating</a></p>
                                <p className='m-0 subtext'>Starting at: <span className="bold special-package">$1,000</span></p>
                                <p className="addon-subtext">Ceramic Coating package that covers and protects only the most essential parts of your vehicle.</p>
                            </div>
                            <hr className='aside-border' />
                            <div className="addon-container">
                                <p className='addon-title'><a href="/services/exterior-ceramic-coating" className='text-blue'>Protect<span className="bold special-package">+</span> Ceramic Coating</a></p>
                                <p className='m-0 subtext'>Starting at: <span className="bold special-package">$1,500</span></p>
                                <p className="addon-subtext">A Premium Ceramic Coating service to coat and protect your entire vehicle.</p>
                            </div>
                        </div>
                    </div>

                    <div className='service-aside addons-aside'>
                        <h4 className='text-large mb-0 mt-0'>Monthly Maintenance:</h4>
                        <hr className='aside-border' />
                        <p>The goal of our monthly maintenance is to keep your vehicle looking like new year around.</p>
                        <p>Every month you get a <a href="/services/dirtless-wash" className='aside-link'>Dirt-Less Wash</a> with a ceramic booster and a <a href='/services/full-interior-detail' className='aside-link'>Full Interior Detail</a>.</p>
                        <hr className='aside-border' />
                        <p className='text-large mb-0'>Monthly Maintenance Pricing:</p>
                        <div className='maintenance-costs'>
                            <p>Small <span className='special-package'>$130</span></p>
                            <p>Medium <span className='special-package'>$160</span></p>
                            <p>Large <span className='special-package'>$190</span></p>
                        </div>
                    </div>

                    <div className='service-aside addons-aside'>
                        <h4 className='text-large mb-0 mt-0'>Re-coating Options:</h4>
                        <p>• Re-coat fabrics <span className='special-package'>$75</span></p>
                        <p>• Re-coat leathers <span className='special-package'>$150</span></p>
                    </div>

                    <div className='service-aside addons-aside contact-aside'>
                        <h4 className='mt-0'>Interested? Get in touch with us here, and let us know what we can do!</h4>
                        <a href="/Contact" className="quote-btn side-quote-btn">Contact Us</a>
                    </div>
                    <br className='extra-space' />
                </div>
            </div>

        </section>
    )
}
