import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import cover from '../../public/imgs/pageimgs/exterior/IMG_20211103_105855.jpg';

export default function puyallup() {
    return (
        <div>
            <Head>
                <title>Dirt-Less Detailing | Ceramic Coating in Puyallup</title>
                <meta property="og:title" content="Dirt-Less Detailing | Ceramic Coating in Puyallup" />
                <meta property="description" content="Want a ceramic coating to protect your car in Puyallup? Check out our offers on Graphene coatings." />
                <meta property="og:description" content="Want a ceramic coating to protect your car in Puyallup? Check out our offers on Graphene coatings." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.dirtlessdetailing.com/ceramic/puyallup" />
                <link rel="canonical" href="https://www.dirtlessdetailing.com/ceramic/puyallup" />
            </Head>
            <div className="cover">
                <Image src={cover} alt="water beading off of car" layout="fill" objectFit='cover' placeholder='blur' priority />
            </div>
            <div className="servicepage-header">
                <h1>Ceramic Coating in Puyallup Washington</h1>
                <h2>5-year IGL Graphene Coatings</h2>
                <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
                <p className='inline text-small'>
                    Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
                </p>
            </div>
            
            <main className="location-main">
                <h2 className='text-large'>Professional Ceramic Coatings in Puyallup Washington.</h2>
                <div className="text-left">
                    <p>For the best results on your ceramic coat we will have you drop your car off at our shop location in Bonney Lake.</p>
                    <p>One of the first things we do to your car is a full <a href="/services/SinglePC" className='aside-link'>Single Stage Paint Correction</a> to clean and prep your vehicle. For that service we also like to have our customers bring their vehicles to us.</p>
                    <p>Why? We want a controlled environment when applying a ceramic coat. At our shop we have lighting and temperature controls. This way we can keep an optimal temperature and the lighting helps us see and fix any imperfections on the paint.</p>
                    <p>Our shop is about 20 minutes away from most of Puyallup, once there you are free to go wherever or stick around while we work.</p>
                </div>

                <br className='extra-space' />

                <h2 className='text-large'>Why get a ceramic coating?</h2>
                <p className='text-left'>Here's a list of some of the many benefits to getting a ceramic coating on your car:</p>
                <ul className='cities-ul'>
                    <li>Lasts about 5 years (with proper care)</li>
                    <li>Hyrophobic</li>
                    <li>Easy to Wash</li>
                    <li>Easier to maintain</li>
                    <li>No need to spend time waxing your car each wash</li>
                    <li>Gives paint a glossy finish</li>
                    <li>Light layer of protection against the environment</li>
                </ul>

                <br className='extra-space' />

                <h2 className='text-large'>Professional Interior Coatings in Puyallup Washington.</h2>
                <div className="text-left">
                    <p>If you want extra protection on the interior of your car whether it's leather or fabric, we have you covered, literally.</p>
                    <p>Besides extra protection, interior coatings also make spills and other messes far easier to clean up, even on fabrics.</p>
                    <p>The leather coating can also help prevent yellowing from UV rays and other forms of discoloration from normal wear and tear.</p>
                </div>

                <br className='extra-space' />
            </main>

            <div className='only-bg'>
                <h3 className='pricing-title text-black'>Our Ceramic Coating Pricing</h3>
                <h4 className='pricing-subtext'>*Pricing INCLUDES a Single Stage Paint Correction that we do before the coating, as long as the vehicle doesn't need extra correction beyond that.</h4>
                <div className="pricing-container text-black">
                    <div className="pricing-card">
                        <h4 className="size" style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Small</h4>
                        <h4 className="size">Protect</h4>
                        <p className="pricing-price pricing-border">$1,000</p>
                        <h4 className="size">Protect<span className="special-package">+</span></h4>
                        <p className="pricing-price pricing-border">$1,500</p>
                        <p className="example-vehicle pricing-border">2-Door Coupes</p>
                        <p className="example-vehicle pricing-border">Single/Extended Cabs</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                    <div className="pricing-card">
                        <h4 className="size" style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Medium</h4>
                        <h4 className="size">Protect</h4>
                        <p className="pricing-price pricing-border">$1,200</p>
                        <h4 className="size">Protect<span className="special-package">+</span></h4>
                        <p className="pricing-price pricing-border">$1,700</p>
                        <p className="example-vehicle pricing-border">4 Door Vehicles</p>
                        <p className="example-vehicle pricing-border">Smaller SUV's</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                    <div className="pricing-card">
                        <h4 className="size" style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Large</h4>
                        <h4 className="size">Protect</h4>
                        <p className="pricing-price pricing-border">$1,400</p>
                        <h4 className="size">Protect<span className="special-package">+</span></h4>
                        <p className="pricing-price pricing-border">$1,900</p>
                        <p className="example-vehicle pricing-border">Larger Trucks</p>
                        <p className="example-vehicle pricing-border">Extra Large Vehicles</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                </div>

            </div>

            <div className='only-bg'>
                <h3 className='pricing-title text-black'>Our Interior Coating Pricing</h3>
                <h4 className='pricing-subtext'>*Pricing does NOT include an <a href="/services/FullIntEx" className='aside-link'>Interior Cleaning</a>, which you will need to add to get a coating.</h4>
                <div className='pricing-container text-black'>
                    <div className="pricing-card">
                        <h4 className="size">Fabric Coating</h4>
                        <p className="pricing-price pricing-border">$75</p>    
                        <p className="example-vehicle pricing-border">Any Size Vehicle</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                    <div className="pricing-card">
                        <h4 className="size">Leather Coating</h4>
                        <p className="pricing-price pricing-border">$150</p>
                        <p className="example-vehicle pricing-border">Any Size Vehicle</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                </div>
            </div>

            <div className='locationpage-section no-bg'>
                <div>
                    <h3 className='text-large'>Ceramic Coating FAQ</h3>
                    <ul className='faq-ul'>
                        <li className='faq-li'>How long does it last?</li>
                        <li className='faq-p text-black'>The paint coating should last 5 years, 50,000 miles, or a Lifetime<span className='special-package'>*</span> with our warranty. The coating on any trim, glass, lights, or wheels will last 1 year approximately.</li>

                        <li className='faq-li'>Can I still go through car washes?</li>
                        <li className='faq-p text-black'>If you want to keep the ceramic coat in good condition and have it last as long as possible, you won't want to go through any car washes even touch-less ones.</li>

                        <li className='faq-li'>How should I wash my car then?</li>
                        <li className='faq-p text-black'>For washing your coated vehicle you have a couple of options. Hand washing with our recommended products and techniques, or you can simply schedule monthly maintenance through us!</li>

                        <li className='faq-li'>How does the 5 year warranty work?</li>
                        <li className='faq-p text-black'>If we do our yearly maintenance on the vehicle we guarantee that the ceramic coat will last 5 years or more.</li>

                        <li className='faq-li'>How does the Lifetime warranty work?</li>
                        <li className='faq-p text-black'>Your vehicles paint coating is guaranteed for life as long as you are on our monthly maintenance schedule. If you ever wish to cancel monthly maintenance, the remainder of your 5 year 50,000 mile warranty you had before takes effect.</li>
                    </ul>
                </div>
            </div>
            <a href="/Contact" className="quote-btn location-quote-btn">Get a Quote Today!</a>

        </div> 
    )
}
