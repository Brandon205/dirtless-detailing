import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { FaCar } from 'react-icons/fa';
import { BiCar } from 'react-icons/bi';
import { SiAdguard } from 'react-icons/si';
import { RiPaintFill } from 'react-icons/ri';

import iglCircle from '../../public/imgs/iglcircle.jpg';
import kenzo from '../../public/imgs/kenzo.png';

export default function ExtCoatings() {
  return (
    <section className="service-content-container bg-contact">
        <Head>
            <title>Dirt-Less Detailing | Exterior Ceramic Coatings</title>
            <meta property="og:description" content="Ensure that your vehicle is protected through us with our exterior Ceramic Coating services." />
            <link rel="canonical" href="https://www.dirtlessdetailing.com/services/ExtCoatings" />
        </Head>
        <div className="coating-cover">
            <Image src={kenzo} alt="Vehicle Exterior after paint correction and ceramic coating" layout="fill" objectFit='cover' placeholder='blur' priority quality={100} />
        </div>
        <div className="coatingpage-header">
            <h1>Exterior Ceramic Coating</h1>
        </div>

        <div className="coating-container">
            <div className="coating-left">
                <h2 className='mb-0 underline'>Protect Package</h2>
                <p className='package-desc subtext'>The Protect package will cover and protect the most essential parts of your car with a 5 year ceramic coating.</p>
                <div className='package-container'>
                    <div className='package-details'>
                        <RiPaintFill className='package-icon' />
                        <h4>Paint Covered</h4>
                        <p className='subtext'>All of the paint on the exterior will be coated with IGL's Kenzo Graphene 10H coating.</p>
                    </div>
                    <div className='package-details'>
                        <BiCar className='package-icon' />
                        <h4>Coat Windshield and Lights</h4>
                        <p className='subtext'>The windshield and lights are the 2 next most essential things after paint to coat when giving your vehicle a ceramic coating.</p>
                    </div>
                    <div className='package-details'>
                        <SiAdguard className='package-icon' />
                        <h4>Lifetime Warranty<span className='special-package'>*</span><br />or 5 years or 50,000 miles</h4>
                        <p className='subtext'>After your first coating if you follow through with our monthly maintenance your Ceramic coating has a lifetime guarantee through us.</p>
                    </div>
                </div>

                <h2 className='mb-0 underline'>Protect<span className='special-package'>+</span> Package</h2>
                <p className='package-desc subtext'>The Protect+ package will cover and protect your whole vehicle with a 5 year Ceramic Coating.</p>
                <div className='package-container'>
                    <div className='package-details'>
                        <RiPaintFill className='package-icon' />
                        <h4>Paint Covered</h4>
                        <p className='subtext'>All of the paint on the exterior will be coated with IGL's Kenzo Graphene 10H coating.</p>
                    </div>
                    <div className='package-details'>
                        <FaCar className='package-icon' />
                        <h4>Coat Trim, Glass, Lights, and Wheel Faces</h4>
                        <p className='subtext'>We will cover nearly the entire exterior of your vehicle, ensuring that it is completely protected all around.</p>
                    </div>
                    <div className='package-details'>
                        <SiAdguard className='package-icon' />
                        <h4>Lifetime Warranty<span className='special-package'>*</span><br />or 5 years or 50,000 miles</h4>
                        <p className='subtext'>Our Protect+ package also comes with a lifetime warranty if you follow through with our monthly maintenance.</p>
                    </div>
                </div>

                <div>
                    <h3 className='pricing-title text-white'>Our Ceramic Coating Pricing</h3>
                    <h4 className='subtext'><span className='special-package'>*</span>Pricing INCLUDES a Single Stage Paint Correction that we do before the coating, as long as the vehicle doesn't need extra correction beyond that.</h4>
                    <div className="pricing-container text-black">
                        {/* <div className="pricing-card">
                            <h4 className="size">Small</h4>
                            <div className='fullInt-pricing-container'>
                                <div className='pricing-outline outline-padding'>
                                    <p className=''>Protect</p>
                                    <p className="pricing-price">$1,000</p>
                                </div>
                                <div className='pricing-outline outline-padding'>
                                    <p className=''>Protect<span className="special-package">+</span></p>
                                    <p className="pricing-price">$1,500</p>
                                </div>
                            </div>
                            <p className="example-vehicle">(2 Door Coupes, Single and Extended Cabs)</p>
                        </div>
                        <div className="pricing-card">
                            <h4 className="size">Medium</h4>
                            <div className='fullInt-pricing-container'>
                                <div className='pricing-outline outline-padding'>
                                    <p className=''>Protect</p>
                                    <p className="pricing-price">$1,200</p>
                                </div>
                                <div className='pricing-outline outline-padding'>
                                    <p className=''>Protect<span className="special-package">+</span></p>
                                    <p className="pricing-price">$1,700</p>
                                </div>
                            </div>
                            <p className="example-vehicle">(4 Door Sedans, 4 Door Trucks, Smaller SUV's)</p>
                        </div>
                        <div className="pricing-card">
                            <h4 className="size">Large</h4>
                            <div className='fullInt-pricing-container'>
                                <div className='pricing-outline outline-padding'>
                                    <p className=''>Protect</p>
                                    <p className="pricing-price">$1,400</p>
                                </div>
                                <div className='pricing-outline outline-padding'>
                                    <p className=''>Protect<span className="special-package">+</span></p>
                                    <p className="pricing-price">$1,900</p>
                                </div>
                            </div>
                            <p className="example-vehicle">(All Large SUV's and any 3 Row SUV's)</p>
                        </div> */}
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

                <div>
                    <h3 style={{fontSize: 2 + 'em'}}>Ceramic Coating FAQ</h3>
                    <ul className='faq-ul'>
                        <li className='faq-li'>How long does it last?</li>
                        <li className='faq-p'>The paint coating should last 5 years, 50,000 miles, or a Lifetime<span className='special-package'>*</span> with our warranty. The coating on any trim, glass, lights, or wheels will last 1 year approximately.</li>

                        <li className='faq-li'>Can I still go through car washes?</li>
                        <li className='faq-p'>If you want to keep the ceramic coat in good condition and have it last as long as possible, you won't want to go through any car washes even touch-less ones.</li>

                        <li className='faq-li'>How should I wash my car then?</li>
                        <li className='faq-p'>For washing your coated vehicle you have a couple of options. Hand washing with our recommended products and techniques, or you can simply schedule monthly maintenance through us!</li>

                        <li className='faq-li'>How does the 5 year warranty work?</li>
                        <li className='faq-p'>If we do our yearly maintenance on the vehicle we guarantee that the ceramic coat will last 5 years or more.</li>

                        <li className='faq-li'>How does the Lifetime warranty work?</li>
                        <li className='faq-p'>Your vehicles paint coating is guaranteed for life as long as you are on our monthly maintenance schedule. If you ever wish to cancel monthly maintenance, the remainder of your 5 year 50,000 mile warranty you had before takes effect.</li>
                    </ul>
                </div>
            </div>
            <div className="coating-right">

                <div className='aside-container'>
                    <div className='aside-container'>
                        <div className='service-aside addons-aside'>
                            <p className='extra-addons'>Our Interior Coatings</p>
                            <hr className="contact-border" style={{marginBottom: 16}} />
                            <div className="aside-links">
                                <div className="addon-container">
                                    <p className='addon-title'><a href="/services/IntCoatings" className='text-blue'>Fabric Coating</a></p>
                                    <p className='m-0'><span className="bold special-package">$75</span></p>
                                    <p className="addon-subtext">We will treat and protect all fabrics in the vehicle.</p>
                                </div>
                                <hr className='aside-border' />
                                <div className="addon-container">
                                    <p className='addon-title'><a href="/services/IntCoatings" className='text-blue'>Leather Coating</a></p>
                                    <p className='m-0'><span className="bold special-package">$150</span></p>
                                    <p className="addon-subtext">We will treat and protect all leathers in the vehicle.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='aside-container'>
                    <div className='aside-container'>
                        <div className='service-aside addons-aside'>
                            <h4 className='text-xl mb-0 mt-0'>Monthly Maintenance:</h4>
                            <hr className='aside-border' />
                            <p>The goal of our monthly maintenance is to keep your vehicle looking like new year around.</p>
                            <p>Every month you get a <a href="/services/DLWash" className='aside-link'>Dirt-Less Wash</a> with a ceramic booster and a <a href='/services/FullIntEx' className='aside-link'>Full Interior Detail</a>.</p>
                            <hr className='aside-border' />
                            <p className='bold text-xl mb-0'>Monthly Maintenance Pricing:</p>
                            <div className='maintenance-costs'>
                                <p>Small <span className='special-package'>$130</span></p>
                                <p>Medium <span className='special-package'>$160</span></p>
                                <p>Large <span className='special-package'>$190</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='aside-container'>
                    <div className='aside-container'>
                        <div className='service-aside addons-aside'>
                            <h4 className='text-xl mb-0 mt-0'>Yearly Maintenance:</h4>
                            <hr className='aside-border' />
                            <p>• We will wash the whole vehicle top to bottom, remove and tar/sap, and do an iron decontamination treatment.</p>
                            <p>• Then we will super lightly clay bar and/or polish the vehicle, if needed.</p>
                            <p>• Finally we will top with a ceramic booster and apply another coat of ceramic to the windshield.</p>
                            <p>• BONUS: Keeping up with this will qualify you for our 5 year warranty on your Ceramic Coating.</p>
                            <hr className='aside-border' />
                            <p className='bold text-xl mb-0'>Yearly Maintenance costs:</p>
                            <div className='maintenance-costs'>
                                <p>Small <span className='special-package'>$200</span></p>
                                <p>Medium <span className='special-package'>$250</span></p>
                                <p>Large <span className='special-package'>$300</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='aside-container'>
                    <div className='aside-container'>
                        <div className='service-aside addons-aside'>
                            <h4 className='text-xl mb-0 mt-0'>Re-coating Options:</h4>
                            <hr className='aside-border' />
                            <p>• Re-coat trim <span className='special-package'>$100</span></p>
                            <p>• Re-coat wheel faces <span className='special-package'>$150</span></p>
                        </div>
                    </div>
                </div>

                <div className='aside-container'>
                    <div className='aside-container'>
                        <div className='service-aside addons-aside contact-aside'>
                            <h4 className='mt-0'>Interested? Get in touch with us here, and let us know what we can do to help you!</h4>
                            <a href="/Contact" className="quote-btn side-quote-btn">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{paddingBottom: 25}}>
            <Zoom>
                <Image src={iglCircle} style={{borderRadius: 50}} alt="igl coverage circle" placeholder='blur' />
            </Zoom>
        </div>

    </section>
  )
}
