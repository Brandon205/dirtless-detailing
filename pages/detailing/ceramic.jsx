import React, { useState } from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';
import PricingComponent from '../../utils/PricingComponent';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function ceramic() {
    const [currPackage, setCurrPackage] = useState('Protect');

    return (
        <div className='bg-contact'>
            <Head>
                <title>Kenzo Graphene Ceramic Coatings | Dirt-Less Detailing</title>
                <Metatags
                    title='Kenzo Graphene Ceramic Coatings | Dirt-Less Detailing'
                    description='Want a high quality 10H ceramic coating to protect your car? Check out our offers on IGL graphene ceramic coatings.'
                    image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/cfc8823e-d28e-4ccc-255a-afa3fa5ad400/public'
                    canonical='/detailing/ceramic'
                />
                <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "http://schema.org",
                        "@type": "Product",
                        "name": "Exterior Ceramic Coating",
                        "brand": "Dirt-Less Detailing",
                        "description": "Protect and enhance your vehicle's paint with our professional ceramic coating service. Our team at Dirt-Less Detailing uses top-quality products to provide long-lasting protection and a glossy finish for your car. Contact us to learn more and schedule your ceramic coating service today.",
                        "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/cfc8823e-d28e-4ccc-255a-afa3fa5ad400/public",
                        "url": "https://www.dirtlessdetailing.com/ceramic-coating/sumner/",
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
            <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/cfc8823e-d28e-4ccc-255a-afa3fa5ad400/cover')`}}></div>
            <div className="servicepage-header">
                <h1>Our Interior & Exterior Ceramic Coatings</h1>
                <h2>Professionally installed IGL Graphene Coatings</h2>
                <div className='header-buttons'>
                    <a href="/Contact" className='quote-btn'>Get a Free Quote</a>
                    <a href="tel:2532529758" className='quote-btn top-quote-btn'><MdOutlinePermPhoneMsg className='call-icon' /> (253) 252-9758</a>
                </div>
            </div>
            
            <main className="location-main">
                <h2 className='text-large'>What is a Ceramic Coating?</h2>
                <div className="text-left">
                    <p>It is the absolute best way to protect your vehicle from the harsh weather we experience in Bonney Lake. Back in the day, wax was the cutting edge choice to enhance your vehicle's shine. It also protected your paint from external elements like rain, bird poop, dirt, tree sap, etc.</p>
                    <p>Now, with modern day technology, we have a far more durable and superior form of protection: ceramic/graphene coatings.</p>
                    <p>Unlike wax, you can't just simply wipe it on and off. The ceramic coating is a semi-permanent barrier that bonds to the vehicle's surface. It is commonly referred to as a “sacrificial” layer of protection. It will take the blow of the weathers elements like rain, dirt, and snow to better protect the paint underneath.</p>
                    <p>As an analogy, think of the Three Little Pigs. Wax is like the straw house, and ceramic coatings are like the brick house. Both offer protection from rain and dust, but one is far superior.</p>
                </div>
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

                <PricingComponent prices={currPackage === 'Protect' ? ['949', '949', '1,099', '1,099', '1,249', '1,249'] : ['1,399', '1,399', '1,699', '1,699', '1,849', '1,849']} ceramic={true} />
            </div>

            <div className='service-bkg-lighter'>
                <div>
                    <h3 className='pricing-title text-white'>Our Interior Coating Pricing</h3>
                    <strong className='subtext'>*Pricing does NOT include an <a href="/services/full-interior-detail" className='aside-link'>Interior Cleaning</a>, which you will need to add to get a coating.</strong>
                    <div className='pricing-container text-white'>
                        <div className="pricing-card text-black">
                            <h5>Fabric Coating</h5>
                            <p>We will completely cover all fabric in your vehicle with a durable ceramic coating.</p>
                            <p>This includes carpets, seats, and other fabric spots on the interior of the vehicle.</p>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <strong className='size'>Any Size Vehicle</strong>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <p style={{paddingBottom: 0}} className="pricing-price">$74<span className='ninety-nine'>99</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-card text-black">
                            <h5>Leather Coating</h5>
                            <p>We will completely cover all leather in your vehicle with a durable ceramic coating.</p>
                            <p>This includes seats, door panels, and other leather spots on the interior of the vehicle.</p>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <strong className='size'>Any Size Vehicle</strong>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <p style={{paddingBottom: 0}} className="pricing-price">$149<span className='ninety-nine'>99</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className='locationpage-section no-bg'>
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

            <h4 className='text-large'>Informational photos from IGL:</h4>
            <strong className='subtext'>Check out more from our Ceramic Coating provider <a href='https://iglcoatingsusa.com/' target='_blank' rel='noopener' className='aside-link'>IGL</a>.</strong>
            <div style={{marginTop: '1rem'}} className="mini-grid">
                <Zoom>
                    <div aria-label="What an IGL Coating can protect your paint from" role='img' className="card card-tall" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b69dcca1-8d92-414e-32c9-ddfe247fa100/public')`}} />
                </Zoom>
                <Zoom>
                    <div aria-label="Paint layers explained" role='img' className="card card-tall" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/32aa3e25-1fcb-4e05-760a-eb53f4b18400/public')`}} />
                </Zoom>
                <Zoom>
                    <div aria-label="What to expect from an IGL Coating" role='img' className="card card-tall" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0b3d13f8-c7ec-44fc-7750-ab0d466eae00/public')`}} />
                </Zoom>
            </div>

            <br className="extra-space" />

            <div>
                <h3 className='text-large'>Check out some of the results from our interior and exterior Ceramic services.</h3>
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

            <br className="extra-space" />

            <div>
                <strong className='text-medium'>We'll help customers from all over get a ceramic coating on their vehicle, however, most of our customers come to our shop from these areas:</strong>
                <div style={{ display: 'grid', placeItems: 'center' }}>
                    <ul className='cities-ul'>
                        <li><a href='/ceramic-coating/bonney-lake' className='aside-link'>Bonney Lake</a><FaMapMarkerAlt /></li>
                        <li><a href='/ceramic-coating/buckley' className='aside-link'>Buckley</a><FaMapMarkerAlt /></li>
                        <li><a href='/ceramic-coating/sumner' className='aside-link'>Sumner</a><FaMapMarkerAlt /></li>
                        <li><a href='/ceramic-coating/enumclaw' className='aside-link'>Enumclaw</a><FaMapMarkerAlt /></li>
                        <li><a href='/ceramic-coating/puyallup' className='aside-link'>Puyallup</a><FaMapMarkerAlt /></li>
                        <li><a href='/ceramic-coating/federal-way' className='aside-link'>Federal Way</a><FaMapMarkerAlt /></li>
                        <li><a href='/ceramic-coating/orting' className='aside-link'>Orting</a><FaMapMarkerAlt /></li>
                        <li><a href='/ceramic-coating/south-prairie' className='aside-link'>South Prairie</a><FaMapMarkerAlt /></li>
                        <li><a href='/ceramic-coating/black-diamond' className='aside-link'>Black Diamond</a><FaMapMarkerAlt /></li>
                        <li><a href='/ceramic-coating/milton' className='aside-link'>Milton</a><FaMapMarkerAlt /></li>
                        <li><a href='/ceramic-coating/edgewood' className='aside-link'>Edgewood</a><FaMapMarkerAlt /></li>
                        <li><a href='/ceramic-coating/graham' className='aside-link'>Graham</a><FaMapMarkerAlt /></li>
                    </ul>
                </div>
            </div>

            <br className="extra-space" />
            <a href="/Contact" className="quote-btn">Get A Free Quote Today!</a>

        </div> 
    )
}
