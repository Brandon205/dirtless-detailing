import React from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';

export default function correction() {
    return (
        <div className='bg-contact'>
            <Head>
                <title>Paint Correction Services | Dirt-Less Detailing</title>
                <Metatags
                    title='Paint Correction Services | Dirt-Less Detailing'
                    description='See some of the vehicles that have had our Single and Two Stage Paint Correction services done to them. They shine like never before!'
                    image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ff2d836c-23d3-43fe-4f5c-844e5fb2a100/public'
                    canonical='/detailing/correction'
                />
                <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "http://schema.org",
                        "@type": "Product",
                        "name": "Paint Correction",
                        "brand": "Dirt-Less Detailing",
                        "description": "Revive the shine and clarity of your vehicle's paint with our professional paint correction service. Contact us to learn more and schedule your paint correction service today.",
                        "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ff2d836c-23d3-43fe-4f5c-844e5fb2a100/public",
                        "url": "https://www.dirtlessdetailing.com/correction/sumner/",
                        "offers": [
                            {
                                "@type": "Offer",
                                "priceCurrency": "USD",
                                "price": "300",
                                "priceSpecification": {
                                    "@type": "PriceSpecification",
                                    "priceCurrency": "USD",
                                    "price": "300",
                                    "minPrice": "300",
                                    "maxPrice": "850"
                                },
                                "availability": "http://schema.org/InStock",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Single Stage Correction Service",
                                    "serviceType": "Paint Correction",
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
                                "price": "450",
                                "priceSpecification": {
                                    "@type": "PriceSpecification",
                                    "priceCurrency": "USD",
                                    "price": "450",
                                    "minPrice": "450",
                                    "maxPrice": "1100"
                                },
                                "availability": "http://schema.org/InStock",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Two Stage Correction Service",
                                    "serviceType": "Paint Correction",
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
            <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ff2d836c-23d3-43fe-4f5c-844e5fb2a100/cover')`}}></div>
            <div className="servicepage-header location-header">
                <h1>Paint Correction Services</h1>
                <h2>Single and Two Stage Paint Correction services</h2>
                <div className='header-buttons'>
                    <a href="/Contact" className='quote-btn'>Get a Free Quote</a>
                    <a href="tel:2532529758" className='quote-btn top-quote-btn'><MdOutlinePermPhoneMsg className='call-icon' /> (253) 252-9758</a>
                </div>
            </div>
            
            <main className="location-main">
                <h2 className='text-large'>Single Stage Paint Correction</h2>
                <div className="text-left">
                    <p>Have you looked at your paint under the sun and saw a web of swirls and scratches?</p>
                    <p>These are called swirl marks. How did they get there in the first place? The biggest culprit is usually improper washing and drying methods. Automatic car washes and using low-quality towels or wash mitts can all lead to abrading your paint and leaving imperfections.</p>
                    <p>With our <a href='/services/single-stage-correction' className='aside-link'>Single Stage Paint Correction</a> service, you can remove 60% to 70% of imperfections to reveal a great shine. This is a fantastic service for vehicles that you want to restore their shine without going “all in” like we do with our 2 stage paint correction service.</p>
                    <p>Unlike some of our other services that can be done in just a few hours, this service requires more time and better lighting to achieve the proper results. This is why we require you to drop off the vehicle at our <a href='/correction/bonney-lake' className='aside-link'>shop</a> location.</p>
                </div>

                <br className='extra-space' />

                <h2 className='text-large'>Two Stage Paint Correction</h2>
                <div className="text-left">
                    <p>Our <a href="/services/two-stage-correction" className='aside-link'>Two Stage Paint Correction</a> service is aimed to remove as many swirls, scratches, and imperfections from your paint as possible. This is where we do an intense cutting and polishing step, called a 2-step correction, to get the most gloss and clarity from your paintwork.</p>
                    <p>Depending on the condition, whether the vehicle is new or not, some scratches won't come all the way out. It could be the scratches are too deep to remove safely, or the clear coat itself is thinning out. (We'll take paint measurements before we start).</p>
                    <p>This is where we'll make the call on what we can safely remove from your paint. It's not just about removing as many imperfections as possible. It's also knowing when enough is enough to keep the integrity of the paint healthy.</p>
                    <p>The Level 2 paint correction is a commitment that you are making to your vehicle. If you'd like to keep the shine on your paint, you have to properly maintain the vehicle after the service is complete. If you don't properly wash and dry the vehicle, you can easily put all those swirls and scratches back into your paint after just a few washes.</p>
                    <p>This is one of our most involved services that we offer so we'll need to perform it at our <a href='/correction/bonney-lake' className='aside-link'>shop</a> location in Bonney Lake.</p>
                </div>

                <br className='extra-space' />

                <h2 className='text-large'>What service should I get?</h2>
                <div className="text-left">
                    <p>Feel free to give us a call if you're not sure which service would suit you and your vehicle best, or if you have questions on the new higher quality maintenance that we recommend after getting a paint correction service.</p>
                </div>

                <br className='extra-space' />
            </main>

            <div className='only-bg'>
                <h3 className='text-large'>Our General Paint Correction Process</h3>
                <ol style={{width: 80 + 'vw'}} className='list columns-2'>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>1</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Wash Vehicle</h4>
                            <p className='step-desc'>Thorough strip wash top to bottom using 2 bucket method or equivalent, including gas door.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>2</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Wheel Cleaning</h4>
                            <p className='step-desc'>Clean wheels, wheel wells, and wheel barrels</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>3</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Remove tar and sap</h4>
                            <p className='step-desc'>Remove any and all tar and sap from the exterior.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>4</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Correction Prep - Clay bar</h4>
                            <p className='step-desc'>Clay bar the entire vehicle to remove contaminants and leave the paint smooth.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>5</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Correction Prep - Iron Decontamination</h4>
                            <p className='step-desc'>Iron decontamination to get rid of the rest of the embedded iron particles in your paint.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>6</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Dry Vehicle</h4>
                            <p className='step-desc'>Dry the whole vehicle with clean towels and air blowers.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>7</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Tape Vehicle</h4>
                            <p className='step-desc'>Tape off trim and sensitive areas (some detailers skip this step).</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>8</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Paint Correction</h4>
                            <p className='step-desc'>Complete the desired stage of paint correction using Griots products. Either the single stage or two stage product is used here based on the service requested.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>9</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Remove Polishing Compound</h4>
                            <p className='step-desc'>Remove polishing compound residue from cracks, crevices, etc.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>10</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Protect Paint</h4>
                            <p className='step-desc'>Protect paint with ceramic spray or <a href="/detailing/ceramic" className='aside-link'>ceramic coating</a>.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>11</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Door Jambs</h4>
                            <p className='step-desc'>Clean door jambs.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>12</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Dress Vehicle</h4>
                            <p className='step-desc'>Dress all plastics, wheel wells, and tires.</p>
                        </div>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className='pricing-title text-white'>Our Paint Correction Pricing</h3>
                <strong className='subtext'>*Pricing INCLUDES a Single Stage Paint Correction that we do before the coating, as long as the vehicle doesn't need extra correction beyond that.</strong>
                <div className="pricing-container text-white">
                    <div className="pricing-card text-black">
                        <strong className="size" style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Small</strong>
                        <strong className='size'>Single Stage</strong>
                        <p className="pricing-price pricing-border">$300- $450</p>
                        <strong className='size'>Two Stage</strong>
                        <p className="pricing-price pricing-border">$450- $600</p>
                        <p className="example-vehicle pricing-border">2-Door Coupes</p>
                        <p className="example-vehicle pricing-border">Single/Extended Cabs</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                    <div className="pricing-card text-black">
                        <strong className='size' style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Medium</strong>
                        <strong className='size'>Single Stage</strong>
                        <p className="pricing-price pricing-border">$450- $600</p>
                        <strong className='size'>Two Stage</strong>
                        <p className="pricing-price pricing-border">$600- $850</p>
                        <p className="example-vehicle pricing-border">4 Door Vehicles</p>
                        <p className="example-vehicle pricing-border">Smaller SUV's</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                    <div className="pricing-card text-black">
                        <strong className='size' style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Large</strong>
                        <strong className='size'>Single Stage</strong>
                        <p className="pricing-price pricing-border">$600- $850</p>
                        <strong className='size'>Two Stage</strong>
                        <p className="pricing-price pricing-border">$800- $1,100</p>
                        <p className="example-vehicle pricing-border">Larger Trucks</p>
                        <p className="example-vehicle pricing-border">Extra Large Vehicles</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                </div>
            </div>

            <h4 className='text-large'>Visual example of different paint defects:</h4>
            <strong className='subtext'>This gives an example of why deeper scratches aren't removable without repainting.</strong>
            <div className="photo-grid">
              <Zoom>
                <div aria-label="Paint defects info and depth" role='img' className="card card-tall card-wide" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3c1c25a3-cbab-4f82-91b1-ba2a30626500/public')`}} />
              </Zoom>
            </div>

            <div>
                <h3 className='text-large'>Check out some of the results from our Paint Correction service</h3>
                <div className="photo-grid">
                    <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a88a5723-312c-4d9f-7e44-6751373ccc00/public')`}}></div>
                    <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/05a03dc9-11c9-4ad8-a8a3-eba28b243e00/public')`}}></div>
                    <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/fbae254b-fd19-4fb9-2af7-7fa74e753c00/public')`}}></div>
                    <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2e52fbef-fad5-4867-9c02-157690455900/public')`}}></div>
                    <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a1962dba-9065-4a4e-9c99-792960ba5f00/public')`}}></div>
                    <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/42bf45ce-c76d-4614-817b-7f4b5a55b200/public')`}}></div>
                    <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/816ccafc-084b-4d7d-8735-8da8117a4700/public')`}}></div>
                </div>
            </div>
            <h3>See more on our <a href="/gallery/paint-correction-gallery" className='aside-link'>Paint Correction Gallery</a> page.</h3>

            <br className="extra-space" />

            <div style={{width: 80 + 'vw', margin: '0 auto'}}>
                <strong className='text-medium'>We'll help customers from all over get a paint correction on their vehicle, however, most of our customers come to our shop from these areas:</strong>
                <div style={{ display: 'grid', placeItems: 'center' }}>
                    <ul className='cities-ul'>
                    <li><a href='/correction/bonney-lake' className='aside-link'>Bonney Lake</a><FaMapMarkerAlt /></li>
                    <li><a href='/correction/buckley' className='aside-link'>Buckley</a><FaMapMarkerAlt /></li>
                    <li><a href='/correction/sumner' className='aside-link'>Sumner</a><FaMapMarkerAlt /></li>
                    <li><a href='/correction/enumclaw' className='aside-link'>Enumclaw</a><FaMapMarkerAlt /></li>
                    <li><a href='/correction/puyallup' className='aside-link'>Puyallup</a><FaMapMarkerAlt /></li>
                    <li><a href='/correction/federal-way' className='aside-link'>Federal Way</a><FaMapMarkerAlt /></li>
                    <li><a href='/correction/orting' className='aside-link'>Orting</a><FaMapMarkerAlt /></li>
                    <li><a href='/correction/south-prairie' className='aside-link'>South Prairie</a><FaMapMarkerAlt /></li>
                    <li><a href='/correction/black-diamond' className='aside-link'>Black Diamond</a><FaMapMarkerAlt /></li>
                    <li><a href='/correction/milton' className='aside-link'>Milton</a><FaMapMarkerAlt /></li>
                    <li><a href='/correction/edgewood' className='aside-link'>Edgewood</a><FaMapMarkerAlt /></li>
                    <li><a href='/correction/graham' className='aside-link'>Graham</a><FaMapMarkerAlt /></li>
                    </ul>
                </div>
            </div>
            <br className='extra-space' />
            <a href="/Contact" className="quote-btn">Get A Free Quote Today!</a>

        </div> 
    )
}
