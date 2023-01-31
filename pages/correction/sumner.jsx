import React from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';

export default function sumner() {
    return (
        <div className='bg-contact'>
            <Head>
                <title>Paint Correction in Sumner | Dirt-Less Detailing</title>
                <Metatags
                    title='Paint Correction in Sumner | Dirt-Less Detailing'
                    description='Scratches and swirls in your paint? We can help! With our Single and Two Stage Paint Correction services we can remove many imperfections!'
                    image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/eae0cc31-00b4-4fef-07e3-6dedd1b89200/public'
                    canonical='/correction/sumner'
                />
                <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "http://schema.org",
                        "@type": "Product",
                        "name": "Paint Correction",
                        "brand": "Dirt-Less Detailing",
                        "description": "Revive the shine and clarity of your vehicle's paint with our professional paint correction service. Contact us to learn more and schedule your paint correction service today.",
                        "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/eae0cc31-00b4-4fef-07e3-6dedd1b89200/public",
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
            <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/eae0cc31-00b4-4fef-07e3-6dedd1b89200/public')`}}></div>
            <div className="servicepage-header location-header">
                <h1>Paint Correction in Sumner Washington</h1>
                <h2>Single and Two Stage Paint Correction services</h2>
                <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
                <p className='inline text-small'>
                    Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
                </p>
            </div>
            
            <main className="location-main">
                <h2 className='text-large'>Professional Paint Correction in Sumner Washington.</h2>
                <div className="text-left">
                    <p>For an in depth overview on our processes check out our full <a href="/detailing/correction" className='aside-link'>Paint Correction</a> page. To ensure the best results on your paint correction we will have you drop your car off at our shop location in <a href="/correction/bonney-lake" className='aside-link'>Bonney Lake</a>.</p>
                    <p>Why? Well we want a controlled environment when performing our paint correction procedures. At our shop we have lighting and temperature controls. This way we can keep an optimal temperature and the lighting helps us see and fix any imperfections on the paint.</p>
                    <p>Our shop is about 15 minutes away from most of Sumner, these services will take time, but once you are there you are free to go wherever or stick around if needed while we work.</p>
                </div>

                <br className='extra-space' />

                <h2 className='text-large'>What's the difference between the Single Stage and Two Stage Paint Correction?</h2>
                <div className="text-left">
                    <p>The simple answer is that we use a different product on one of the steps. The Two Stage paint correction product we use is designed to get out as many scratches and swirls as possible, while the Single Stage product usually removes around 60%-70%.</p>
                    <p>In the steps below its shown in step number 8, all of the other steps are carried out the same.</p>
                    <p>To learn more about each check out our <a href="/detailing/correction" className='aside-link'>comparison</a> page where we go into much more detail on the differences. Or if you're interested in one or the other check out our <a href="/services/single-stage-correction" className='aside-link'>Single Stage Paint Correction</a> or the <a href="/services/two-stage-correction" className='aside-link'>Two Stage Paint Correction</a> page.</p>
                </div>

                <br className='extra-space' />
            </main>

            <div>
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

            <br className='extra-space' />

            <div className='only-bg'>
                <h3 className='pricing-title text-white'>Our Paint Correction Pricing</h3>
                <strong className='subtext'>*Final pricing may vary based on your vehicle condition and size.</strong>
                <div className="pricing-container text-white">
                    <div className="pricing-card text-black">
                        <strong className='size' style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Small</strong>
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

            <div>
                <h3 className='text-large'>Some of the results from our Paint Correction service:</h3>
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
            <h3>See more in our <a href="/gallery/paint-correction-gallery" className='aside-link'>Paint Correction Gallery</a>.</h3>
            <a href="/Contact" className="quote-btn location-quote-btn">Get a Quote Today!</a>
        </div> 
    )
}
