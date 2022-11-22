import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import { FaCar } from 'react-icons/fa';
import { BiCar } from 'react-icons/bi';
import { SiAdguard } from 'react-icons/si';
import { RiPaintFill } from 'react-icons/ri';

import cover from '../../public/imgs/pageimgs/paintCorrection/IMG_20220812_063401.jpg';
import kenzo from '../../public/imgs/kenzo.png';

export default function ExtCoatings() {
  return (
    <section className="service-content-container bg-contact">
        <Head>
            <title>Dirt-Less Detailing | Exterior Ceramic Coatings</title>
            <meta property="og:description" content="Ensure that your vehicle is protected through us with our exterior Ceramic Coating services!" />
            <link rel="canonical" href="https://www.dirtlessdetailing.com/services/ExtCoatings" />
        </Head>
        <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
            <Image src={cover} alt="Vehicle Exterior after paint correction and ceramic coating" layout="fill" objectFit='cover' placeholder='blur' priority />
        </div>
        <div className="servicepage-header">
            <h1>Exterior Ceramic Coatings</h1>
            <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
        </div>

        <div className="coating-container">
            <div className="coating-left">
                <h2 className='mb-0'>Protect Package:</h2>
                <p className='package-desc subtext'>The Protect package will cover and protect the most essential parts of your car with a 5 year ceramic coating.</p>
                <div className='package-container'>
                    <div className='package-details'>
                        <RiPaintFill className='package-icon' />
                        <h4>Paint Covered</h4>
                        <p className='subtext'>All of the paint on the exterior will be coated with IGL's Kenzo Graphene 10H coating.</p>
                    </div>
                    <div className='package-details'>
                        <SiAdguard className='package-icon' />
                        <h4>Lifetime Warranty<span className='special-package'>*</span></h4>
                        <p className='subtext'>After your first coating if you follow through with our monthly maintenance your Ceramic coating has a lifetime guarantee through us!</p>
                    </div>
                    <div className='package-details'>
                        <BiCar className='package-icon' />
                        <h4>Coat Windshield and Lights</h4>
                        <p className='subtext'>The windshield and lights are the 2 next most essential things after paint to coat when giving your vehicle a ceramic coating.</p>
                    </div>
                </div>

                <h2 className='mb-0'>Protect<span className='special-package'>+</span> Package:</h2>
                <p className='package-desc subtext'>The Protect+ package will cover and protect your whole vehicle with a 5 year Ceramic Coating.</p>
                <div className='package-container'>
                    <div className='package-details'>
                        <RiPaintFill className='package-icon' />
                        <h4>Paint Covered</h4>
                        <p className='subtext'>All of the paint on the exterior will be coated with IGL's Kenzo Graphene 10H coating.</p>
                    </div>
                    <div className='package-details'>
                        <SiAdguard className='package-icon' />
                        <h4>Lifetime Warranty<span className='special-package'>*</span></h4>
                        <p className='subtext'>Our Protect+ package also comes with a lifetime warranty if you follow through with our monthly maintenance!</p>
                    </div>
                    <div className='package-details'>
                        <FaCar className='package-icon' />
                        <h4>Coat Trim, Glass, Lights, and Wheel Faces</h4>
                        <p className='subtext'>We will cover nearly the entire exterior of your vehicle, ensuring that it is completely protected all around.</p>
                    </div>
                </div>

                <div>
                    <h3 className='pricing-title'>Our Ceramic Coating Pricing</h3>
                    <h4 className='subtext'>*Pricing already includes the Single Stage Paint Correction that we do before the coating.</h4>
                    <div className="pricing-container">
                        <div className="pricing-card">
                            <h4 className="size">SMALL</h4>
                            <p className="example-vehicle">(2 Door Coupes, Single and Extended Cabs)</p>
                            <div className='fullInt-pricing-container'>
                                <div className='pricing-outline outline-padding'>
                                    <p className='white-text'>Protect</p>
                                    <p className="pricing-price">$1,000</p>
                                </div>
                                <div className='pricing-outline outline-padding'>
                                    <p className='white-text'>Protect<span className="special-package">+</span></p>
                                    <p className="pricing-price">$1,500</p>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-card">
                            <h4 className="size">MEDIUM</h4>
                            <p className="example-vehicle">(4 Door Sedans, 4 Door Trucks, Smaller SUV's)</p>
                            <div className='fullInt-pricing-container'>
                                <div className='pricing-outline outline-padding'>
                                    <p className='white-text'>Protect</p>
                                    <p className="pricing-price">$1,200</p>
                                </div>
                                <div className='pricing-outline outline-padding'>
                                    <p className='white-text'>Protect<span className="special-package">+</span></p>
                                    <p className="pricing-price">$1,700</p>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-card">
                            <h4 className="size">LARGE</h4>
                            <p className="example-vehicle">(All Large SUV's and any 3 Row SUV's)</p>
                            <div className='fullInt-pricing-container'>
                                <div className='pricing-outline outline-padding'>
                                    <p className='white-text'>Protect</p>
                                    <p className="pricing-price">$1,400</p>
                                </div>
                                <div className='pricing-outline outline-padding'>
                                    <p className='white-text'>Protect<span className="special-package">+</span></p>
                                    <p className="pricing-price">$1,900</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <h3 style={{fontSize: 2 + 'em'}}>Ceramic Coating FAQ</h3>
                    <ul className='faq-ul'>
                        <li className='faq-li'>How long does it last?</li>
                        <li className='faq-p'>The paint coating should last 5 years, or a Lifetime<span className='special-package'>*</span> with our warranty. The coating on any trim, glass, lights, or wheels will last 1 year approximately.</li>

                        <li className='faq-li'>Can I still go through car washes?</li>
                        <li className='faq-p'>If you want to keep the ceramic coat in good condition and have it last as long as possible, you won't want to go through any car washes even touch-less ones.</li>

                        <li className='faq-li'>How should I wash my car then?</li>
                        <li className='faq-p'>When we Ceramic Coat your car we can either set up a schedule to have your car professionally and safely washed by us. We can also give you a list of products that we recommend you use to wash your car while not damaging the ceramic coat.</li>

                        <li className='faq-li'>How does the 5 year warranty work?</li>
                        <li className='faq-p'>If we do our yearly maintenance on the vehicle we guarantee that the ceramic coat will last 5 years or more!</li>

                        <li className='faq-li'>How does the Lifetime warranty work?</li>
                        <li className='faq-p'>If we do monthly maintenance on the vehicle we guarantee that the coat will last a lifetime, and will keep a ceramic coat on it as long as you want!</li>
                    </ul>
                </div>
            </div>
            <div className="coating-right">

                <div className='aside-container'>
                    <div className='aside-container'>
                        <div className='service-aside addons-aside'>
                            <a href="/services/Addons" className='extra-addons'>Our Other Coatings</a>
                            <hr className="contact-border" style={{marginBottom: 16}} />
                            <div className="aside-links">
                                <div className="addon-container">
                                    <p className='addon-title'><a href="/services/IntCoatings" className='text-blue'>Leather Coating</a></p>
                                    <p className='m-0'><span className="bold special-package">$150</span></p>
                                    <p className="addon-subtext">We will treat and protect all leathers in the vehicle.</p>
                                </div>
                                <div className="addon-container">
                                    <p className='addon-title'><a href="/services/IntCoatings" className='text-blue'>Fabric Coating</a></p>
                                    <p className='m-0'><span className="bold special-package">$75</span></p>
                                    <p className="addon-subtext">We will treat and protect all fabrics in the vehicle.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='aside-container'>
                    <div className='aside-container'>
                        <div className='service-aside addons-aside'>
                            <h4 className='text-xl mb-0'>Monthly Maintenance:</h4>
                            <p>• 2 bucket wash top to bottom.</p>
                            <p>• Clean wheels, wheel barrels, and wheel wells.</p>
                            <p>• Remove tar/sap, decontaminate iron, and use clay bar as needed.</p>
                            <p>• Dry with Ceramic Spray, and dress vehicle.</p>
                            <p>• BONUS: This will qualify you for our Lifetime and 5 year warranty on your Ceramic Coating.</p>
                            <p className='bold text-xl mb-0'>Monthly Maintenance costs:</p>
                            <div className='maintenance-costs'>
                                <p>SMALL <span className='special-package'>$130</span></p>
                                <p>MEDIUM <span className='special-package'>$160</span></p>
                                <p>LARGE <span className='special-package'>$190</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='aside-container'>
                    <div className='aside-container'>
                        <div className='service-aside addons-aside'>
                            <h4 className='text-xl mb-0'>Yearly Maintenance:</h4>
                            <p>• We will wash the whole vehicle top to bottom, remove and tar/sap, and do an iron decontamination treatment.</p>
                            <p>• Then we will super lightly clay bar and/or polish the vehicle, if needed.</p>
                            <p>• Finally we will top with a Ceramic Booster, and apply an Aquapel windshield coating.</p>
                            <p>• BONUS: This will qualify you for our 5 year warranty on your Ceramic Coating.</p>
                            <p className='bold text-xl mb-0'>Yearly Maintenance costs:</p>
                            <div className='maintenance-costs'>
                                <p>SMALL <span className='special-package'>$200</span></p>
                                <p>MEDIUM <span className='special-package'>$250</span></p>
                                <p>LARGE <span className='special-package'>$300</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='aside-container'>
                    <div className='aside-container'>
                        <div className='service-aside addons-aside'>
                            <h4 className='text-xl mb-0'>Recoating Options:</h4>
                            <p>• Recoat trim <span className='special-package'>$100</span></p>
                            <p>• Recoat wheel faces <span className='special-package'>$150</span></p>
                        </div>
                    </div>
                </div>

                <div className='aside-container'>
                    <div className='aside-container'>
                        <div className='service-aside addons-aside'>
                            <h4>Interested? Get in touch with us here, and let us know what we can do to help you!</h4>
                            <a href="/Contact" className="quote-btn side-quote-btn">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{paddingBottom: 25}}>
            <Image src={kenzo} style={{borderRadius: 20}} alt="igl coverage circle" placeholder='blur' />
        </div>

    </section>
  )
}
