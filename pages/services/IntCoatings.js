import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import { GiLeatherBoot, GiRolledCloth, GiSpill } from 'react-icons/gi';
import { MdCleaningServices } from 'react-icons/md';
import { FiSun } from 'react-icons/fi';

import cover from '../../public/imgs/pageimgs/interior/IMG_20220929_155050.jpg';

export default function IntCoatings() {
  return (
    <section className="service-content-container bg-contact">
        <Head>
            <title>Dirt-Less Detailing | Interior Coatings</title>
            <meta property="og:description" content="Have us coat the interior of your vehicle with our products to keep them clean and protected from day to day use." />
            <link rel="canonical" href="https://www.dirtlessdetailing.com/services/IntCoatings" />
        </Head>
        <div className="cover">
            <Image src={cover} alt="Coated and protected vehicle interior" layout="fill" objectFit='cover' placeholder='blur' priority />
        </div>
        <div className="servicepage-header">
            <h1>Interior Coating</h1>
            <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
        </div>

        <div className="coating-container">
            <div className="coating-left">
                <h2 className='mb-0 underline'>Fabric Coating</h2>
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

                <h2 className='mb-0 underline'>Leather Coating</h2>
                <p className='package-desc subtext'>The longest lasting protection for your vehicles leather.</p>
                <div className='package-container'>
                    <div className='package-details'>
                        <GiLeatherBoot className='package-icon' />
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

                <div>
                    <h3 className='pricing-title'>Our Interior Coating Pricing</h3>
                    <h4 className='subtext'><span className='special-package'>*</span>Pricing does NOT include an Interior Cleaning, which you will want to factor in before getting a coating.</h4>
                    <div className='pricing-container'>
                        <div className="pricing-card">
                            <h4 className="size">FABRIC COATING</h4>
                            <p className="example-vehicle">(Any Size Vehicle)</p>
                            <p className="pricing-price">$75</p>
                        </div>
                        <div className="pricing-card">
                            <h4 className="size">LEATHER COATING</h4>
                            <p className="example-vehicle">(Any Size Vehicle)</p>
                            <p className="pricing-price">$150</p>
                        </div>
                    </div>

                    <div className="coating-contact-container">
                        <a href="/Contact" className="quote-btn main-quote-btn coating-contact-btn">Contact Us</a>
                    </div>

                </div>

                <div className='coating-faq'>
                    <h3 style={{fontSize: 2 + 'em'}}>Interior Coating FAQ</h3>
                    <ul className='faq-ul'>
                        <li className='faq-li'>How long does it last?</li>
                        <li className='faq-p'>Both of our Interior Coatings typically last about 1 year.</li>
                    </ul>
                </div>
            </div>
            <div className="coating-right">

                <div className='aside-container'>
                    <div className='aside-container'>
                        <div className='service-aside addons-aside'>
                            <a href="/services/Addons" className='extra-addons'>Our Exterior Coatings</a>
                            <hr className="contact-border" style={{marginBottom: 16}} />
                            <div className="aside-links">
                                <div className="addon-container">
                                    <p className='addon-title'><a href="/services/ExtCoatings" className='text-blue'>Protect Ceramic Coating</a></p>
                                    <p className='m-0 subtext'>Starting at: <span className="bold special-package">$1,000</span></p>
                                    <p className="addon-subtext">Ceramic Coating package that covers and protects only the most essential parts of your vehicle.</p>
                                </div>
                                <div className="addon-container">
                                    <p className='addon-title'><a href="/services/ExtCoatings" className='text-blue'>Protect<span className="bold special-package">+</span> Ceramic Coating</a></p>
                                    <p className='m-0 subtext'>Starting at: <span className="bold special-package">$1,500</span></p>
                                    <p className="addon-subtext">A Premium Ceramic Coating service to coat and protect your entire vehicle.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='aside-container'>
                    <div className='aside-container'>
                        <div className='service-aside addons-aside'>
                            <h4 className='text-xl mb-0 mt-0'>Monthly Maintenance:</h4>
                            <p>The goal of our monthly maintenance is to keep your vehicle looking like new year around.</p>
                            <p>Every month you get a <a href="/services/DLWash" className='aside-link'>Dirt-Less Wash</a> with a ceramic booster and a <a href='/services/FullIntEx' className='aside-link'>Full Interior Detail</a>.</p>
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
                            <h4 className='text-xl mb-0 mt-0'>Re-coating Options:</h4>
                            <p>• Re-coat fabrics <span className='special-package'>$75</span></p>
                            <p>• Re-coat leathers <span className='special-package'>$150</span></p>
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

    </section>
  )
}
