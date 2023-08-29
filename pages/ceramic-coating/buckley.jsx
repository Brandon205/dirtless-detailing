import React, { useState } from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';

import PricingComponent from '../../utils/PricingComponent';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function buckley() {
    const [currPackage, setCurrPackage] = useState('Protect');

    return (
        <div className='bg-contact'>
            <Head>
                <title>Ceramic Coating in Buckley | Dirt-Less Detailing</title>
                <Metatags
                    title='Ceramic Coating in Buckley | Dirt-Less Detailing'
                    description='Want a ceramic coating to protect your car in Buckley? Check out our options and offers on Graphene coatings here.'
                    image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a5260bdd-11e9-4e31-74ec-c1d75787e000/public'
                    canonical='/ceramic-coating/buckley'
                />
                <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "http://schema.org",
                        "@type": "Product",
                        "name": "Exterior Ceramic Coating",
                        "brand": "Dirt-Less Detailing",
                        "description": "Protect and enhance your vehicle's paint with our professional ceramic coating service. Our team at Dirt-Less Detailing uses top-quality products to provide long-lasting protection and a glossy finish for your car. Contact us to learn more and schedule your ceramic coating service today.",
                        "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a5260bdd-11e9-4e31-74ec-c1d75787e000/public",
                        "url": "https://www.dirtlessdetailing.com/ceramic-coating/buckley/",
                        "offers": [
                            {
                                "@type": "Offer",
                                "priceCurrency": "USD",
                                "price": "1000",
                                "priceSpecification": {
                                    "@type": "PriceSpecification",
                                    "priceCurrency": "USD",
                                    "price": "1000",
                                    "minPrice": "1000",
                                    "maxPrice": "1400"
                                },
                                "availability": "http://schema.org/InStock",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Ceramic Coating Protect Package",
                                    "serviceType": "Ceramic Coating",
                                    "areaServed": {
                                        "@type": "Place",
                                        "address": {
                                            "@type": "PostalAddress",
                                            "addressLocality": "Bonney Lake",
                                            "addressRegion": "WA",
                                            "postalCode": "99391",
                                            "streetAddress": "9305 205th Ave E"
                                        }
                                    },
                                    "providerMobility": "static"
                                }
                            },
                            {
                                "@type": "Offer",
                                "priceCurrency": "USD",
                                "price": "1500",
                                "priceSpecification": {
                                    "@type": "PriceSpecification",
                                    "priceCurrency": "USD",
                                    "price": "1500",
                                    "minPrice": "1500",
                                    "maxPrice": "1900"
                                },
                                "availability": "http://schema.org/InStock",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Ceramic Coating Protect+ Package",
                                    "serviceType": "Ceramic Coating",
                                    "areaServed": {
                                        "@type": "Place",
                                        "address": {
                                            "@type": "PostalAddress",
                                            "addressLocality": "Bonney Lake",
                                            "addressRegion": "WA",
                                            "postalCode": "99391",
                                            "streetAddress": "9305 205th Ave E"
                                        }
                                    },
                                    "providerMobility": "static"
                                }
                            }
                        ]
                    }`,
                }} />
            </Head>
            <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a5260bdd-11e9-4e31-74ec-c1d75787e000/cover')`}}></div>
            <div className="servicepage-header">
                <h1>Kenzo Ceramic Coating Installation in Buckley Washington</h1>
                <h2>5-year IGL Graphene Coatings</h2>
                <div className='header-buttons'>
                    <a href="/Contact" className='top-quote-btn'>Get a Free Quote</a>
                    <a href="tel:2532529758" className='top-quote-btn btn-secondary'><img src='../assets/icons/phoneMessage.png' alt='call or message' className='btn-icon' /> (253) 252-9758</a>
                </div>
            </div>
            
            <main className="location-main">
                <h2 className='text-large'>Professional Ceramic Coatings in Buckley Washington.</h2>
                <div className="text-left">
                    <p>Check out our main <a href="/detailing/ceramic" className='aside-link'>Ceramic</a> page for all the information you need on our ceramic coatings. For the best results on your ceramic coat we will have you drop your car off at our shop location in Bonney Lake.</p>
                    <p>One of the first things we do to your car is a full <a href="/services/single-stage-correction" className='aside-link'>Single Stage Paint Correction</a> to clean and prep your vehicle. For that service we also like to have our customers bring their vehicles to us.</p>
                    <p>Why? We want a controlled environment when applying a ceramic coat. At our shop we have lighting and temperature controls. This way we can keep an optimal temperature and the lighting helps us see and fix any imperfections on the paint.</p>
                    <p>Our shop is about 20 minutes away from most of Buckley, once there you are free to go wherever or stick around while we work.</p>
                </div>

                <br className='extra-space' />

                <h2 className='text-large'>Why get a Ceramic Coating?</h2>
                <p className='text-left'>Here's a list of some of the benefits to getting a ceramic coating on your car we have more listed on our <a href="/detailing/ceramic" className='aside-link'>ceramic</a> page:</p>
                <ul className='coating-points'>
                    <li>Lasts up to 5 years or a lifetime (with proper maintenance through us).</li>
                    <li>Hyrophobic</li>
                    <li>Easy to Wash</li>
                    <li>Easier to maintain</li>
                    <li>No need to spend time waxing your car each wash</li>
                    <li>Gives paint a glossy finish</li>
                    <li>Light layer of protection against the environment</li>
                </ul>

                <br className='extra-space' />

                <h2 className='text-large'>Professional Interior Coatings in Buckley Washington</h2>
                <div className="text-left">
                    <p>Whether it's your kid spilling juice, or you spilling your morning coffee, we have all been there. Our interior coatings provide a barrier of protection and allow you time to wipe any spill up before it seeps in. Get more info on our <a href="/services/interior-ceramic-coating" className='aside-link'>Interior Coating</a> page.</p>
                </div>

                <br className='extra-space' />
            </main>

            <div>
                <div className='pricing__heading-container'>
                    <h3 className="pricing__heading">Our Ceramic Coating Pricing</h3>
                    <strong className="pricing__subheading">Select the package and vehicle size below to get a quick price estimate for your vehicle.</strong>
                    <div style={{margin: '0 auto'}}>
                        <select className='text-input pricing__select' name="package" id="package" onChange={(e) => setCurrPackage(e.target.value)}>
                            <option value="Protect">Protect</option>
                            <option value="Protect+">Protect+</option>
                        </select>
                    </div>
                </div>

                <PricingComponent prices={currPackage === 'Protect' ? ['949', '949', '1099', '1099', '1249', '1249'] : ['1399', '1399', '1699', '1699', '1849', '1849']} ceramic={true} />
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

            <div className='locationpage-section service-bkg-lighter'>
                <div>
                    <h3 className='text-large'>Exterior Ceramic Coating FAQ</h3>
                    <ul className='faq-ul'>
                        <li className='faq-li'>How long does it last?</li>
                        <li className='faq-p text-white'>The paint coating should last 5 years, 50,000 miles, or a Lifetime<span className='special-package'>*</span> with our warranty. The coating on any trim, glass, lights, or wheels will last 1 year approximately.</li>

                        <li className='faq-li'>Can I still go through car washes?</li>
                        <li className='faq-p text-white'>If you want to keep the ceramic coat in good condition and have it last as long as possible, you won't want to go through any car washes even touch-less ones.</li>

                        <li className='faq-li'>How should I wash my car then?</li>
                        <li className='faq-p text-white'>For washing your coated vehicle you have a couple of options. Hand washing with our recommended products and techniques, or you can simply schedule monthly maintenance through us!</li>

                        <li className='faq-li'>How does the 5 year warranty work?</li>
                        <li className='faq-p text-white'>If we do our yearly maintenance on the vehicle we guarantee that the ceramic coat will last 5 years or more.</li>

                        <li className='faq-li'>How does the Lifetime warranty work?</li>
                        <li className='faq-p text-white'>Your vehicles paint coating is guaranteed for life as long as you are on our monthly maintenance schedule. If you ever wish to cancel monthly maintenance, the remainder of your 5 year 50,000 mile warranty you had before takes effect.</li>
                    </ul>
                </div>
            </div>

            <div>
                <h3 className='text-large'>Check out some of the results from our Interior and Exterior Ceramic services.</h3>
                <div className="mini-grid">
                    <Zoom>
                        <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5b0798e5-2648-4845-168b-98e7ff013100/public')`}}></div>
                    </Zoom>
                    <Zoom>
                        <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3e71dbba-b8c6-4c21-7d4c-edc497331100/public')`}}></div>
                    </Zoom>
                    <Zoom>
                        <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/43a02c30-4982-435d-7f91-6d81fd11a000/public')`}}></div>
                    </Zoom>
                    <Zoom>
                        <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/fdce3625-66ac-4ea8-68e5-9f2e9e94c500/public')`}}></div>
                    </Zoom>
                    <Zoom>
                        <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/c8855b02-88e3-47c6-f8ab-835cead38f00/public')`}}></div>
                    </Zoom>
                    <Zoom>
                        <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/eef9854b-8f53-4f66-fa7f-d7c97fc71e00/public')`}}></div>
                    </Zoom>
                    <Zoom>
                        <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ab68bfcc-17a0-4468-539b-fded52edc500/public')`}}></div>
                    </Zoom>
                    <Zoom>
                        <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a30c288d-c816-4a42-e313-d7fa80e04200/public')`}}></div>
                    </Zoom>
                </div>
            </div>
            <a href="/Contact" className="quote-btn location-quote-btn">Get A Free Quote Today!</a>
        </div> 
    )
}
