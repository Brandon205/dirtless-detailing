import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Metatags from '../utils/Metatags';
import { motion } from 'framer-motion';

export default function Home() {
    const [screenWidth, setScreenWidth] = useState(null);

    useEffect(() => {
        setScreenWidth(window.innerWidth);
    }, []);

    const leftParent = {
        visible: {
            opacity: 1, 
            transition: {
                when: 'beforeChildren',
                delay: 1,
                staggerChildren: 0.2
            }
        },
        hidden: {
            opacity: 0, 
            transition: {
                when: 'afterChildren',
                staggerChildren: 0
            }
        }
    }

    const leftChild = {
        visible: {opacity: 1, x: 0},
        hidden: {opacity: 0, x: '-10%'}
    }

    const leftChildDiff = {
        visible: {opacity: 1, x: 0},
        hidden: {opacity: 0, x: '10%'}
    }

    return (
        <div className="App">
            <Head>
                <title>Bonney Lakes Auto Detailing & Ceramic Coating Specialists</title>
                <meta property="og:site_name" content="Dirt-Less Detailing" />
                <meta property="og:type" content="website" />
                <Metatags
                    title='Bonney Lakes Auto Detailing & Ceramic Coating Specialists'
                    description='Bonney Lakes top choice for Ceramic Coating, Paint Correction, and all of your auto detailing needs! Contact us to schedule your appointment today!'
                    image={'https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/public'}
                    canonical='/'
                />
                <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "Dirt-Less Detailing",
                        "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/public",
                        "currenciesAccepted": "USD",
                        "priceRange": "$$$",
                        "openingHours": ["Mo-Su 7:00-19:00"],
                        "paymentAccepted": "Cash, Credit/Debit Card, Facebook Pay",
                        "url": "https://www.dirtlessdetailing.com",
                        "email": "brenden@dirtlessdetailing.com",
                        "telephone": "(253) 252-9758",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Bonney Lake",
                            "addressRegion": "WA",
                            "postalCode": "99391",
                            "streetAddress": "9305 205th Ave E"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 47.17285149644542,
                            "longitude": -122.15677457325478
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": 5,
                            "reviewCount": 7
                        }
                    }`,
                }} />
            </Head>
            <header className="home-header">
                <div className="maincover" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/cover')` }}></div>
                <div className='landing-div'>
                    <h1 className='main-title'>Bonney Lake's Top<br />Auto Detailing Specialists</h1>
                    <p className='main-desc'>Anything from a simple interior cleaning to the most detail oriented Ceramic Coating jobs, you can trust Dirt-Less Detailing to do the job right.</p>

                    <div className='header-link-container'>
                        <a href="/Contact" className='home-quote-btn'><img src='../assets/icons/clipboard.png' alt='clipboard' className='btn-icon' /> Get a Free Quote</a>
                        <a href="tel:2532529758" className='home-quote-btn btn-secondary'><img src='../assets/icons/phoneMessage.png' alt='call or message' className='btn-icon' /> (253) 252-9758</a>
                    </div>

                    <div style={{ display: screenWidth < 979 ? 'none' : 'flex', alignItems: 'center', gap: 32 }}>
                        <a href="https://iglcoatingsusa.com/" target="_blank" rel="noopener">
                            <div className="header-cert" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/833088d3-ca7b-41b9-561f-21f8517f3300/public')`, width: '110px', height: '105px', }}></div>
                        </a>
                        <a href="https://www.bbb.org/us/wa/bonney-lake/profile/auto-detailing/dirt-less-detailing-1296-1000135733/#sealclick" target="_blank" rel="noopener" aria-label='Dirt-Less Detailing on Better Business Bureau'>
                            <div className="header-cert" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/1f42d129-8657-4246-7297-ab33dc24c000/public')`, width: '175px', height: '100px' }}></div>
                        </a>
                    </div>

                </div>
            </header>

            <div className="service-bkg" style={{paddingTop: 0}}>
                <div style={{display: screenWidth < 979 ? 'none' : 'flex'}} className="header-icons-container">
                    <div>
                        <img src='../assets/icons/calendar.png' alt='star' className='header-icon' />
                        <p className="header-desc">8 Years</p>
                        <span className='header-desc-span'>Of Experience</span>
                    </div>
                    <div>
                        <img src='../assets/icons/car.png' alt='car' className='header-icon' />
                        <p className="header-desc">1000+</p>
                        <span className='header-desc-span'>Details Done</span>
                    </div>
                    <div>
                        <img src='../assets/icons/star.png' alt='star' className='header-icon' />
                        <p className="header-desc">Raving</p>
                        <span className='header-desc-span'>5 Star Reviews</span>
                    </div>
                    <div>
                        <img src='../assets/icons/location.png' alt='map with location marker' className='header-icon' />
                        <p className="header-desc">Mobile</p>
                        <span className='header-desc-span'>Services</span>
                    </div>
                </div>

                <div style={{margin: '0 auto 5rem auto'}} className="general-container new-heading-container">
                    <h2 style={{fontSize: '3rem'}} className="new-heading new-heading-center">Our Services</h2>
                    <p className='new-heading-center'>Our new simple packages make it easier than ever to book with us!</p>
                </div>

                <div className="home-heading-container">
                    <h2>Professional Interior Services</h2>
                    <p>Transform your vehicle's interior with our premium Auto Detailing services. Experience a cleaner, fresher, and more comfortable driving environment while also enhancing the value of your vehicle. </p>
                </div>
                
                <div className="otherservices-subcontainer">
                    <div></div>
                    <div className='popular-services-card'>
                        <div className='popular-img' style={{ backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/907d2e8b-5d24-40bf-387e-90be139c2d00/public)` }}></div>
                        <div className='popular-header'>
                            <h3 className='accent-orange'>Full Interior</h3>
                            <div>
                                <p>Starting At:</p>
                                <p className='popular-pricing-price'>$300</p>
                            </div>
                        </div>
                        <hr className="long-hr accent-orange" />
                        
                        <motion.ul whileInView='visible' animate='visible' initial='hidden' variants={leftParent} className='checklist'>
                            <motion.li variants={leftChild} className='checklist-item'>Remove hidden dirt/debris with our vortex blowgun</motion.li>
                            <motion.hr variants={leftChildDiff} className='accent-orange' />
                            <motion.li variants={leftChild} className='checklist-item'>Steam extraction/carpet shampooing</motion.li>
                            <motion.hr variants={leftChildDiff} className='accent-orange' />
                            <motion.li variants={leftChild} className='checklist-item'>Door jambs cleaned</motion.li>
                            <motion.hr variants={leftChildDiff} className='accent-orange' />
                            <motion.li variants={leftChild} className='checklist-item'>All Leathers and plastics cleaned</motion.li>
                            <motion.hr variants={leftChildDiff} className='accent-orange' />
                            <motion.li variants={leftChild} className='checklist-item'>All interior windows and glass cleaned</motion.li>
                        </motion.ul>

                        <hr className="long-hr accent-orange" />
                        <div className='popular-link-container'>
                            <a href="/Contact" className='popular-readmore'>Book Now!</a>
                            <a href="/services/interior" className='popular-readmore-secondary'>Learn More</a>
                        </div>
                    </div>

                    <div className='popular-services-card'>
                        <div className='popular-img' style={{ backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d09c52dc-c233-4cbd-c347-07de1c945d00/public)` }}></div>
                        <div className='popular-header'>
                            <h3 className='accent-blue'>Full Interior +  Spill Guard</h3>
                            <div>
                                <p>Starting At:</p>
                                <p className='popular-pricing-price'>$450</p>
                            </div>
                        </div>
                        <hr className="long-hr accent-blue" />

                        <ul className='checklist'>
                            <li className='checklist-item'><span className="bold">EVERYTHING</span> from our Full Interior Service</li>
                            <hr className='accent-blue' />
                            <li className='checklist-item'>Interior Ceramic Coating applied on all surfaces</li>
                        </ul>

                        <hr className="long-hr accent-blue" />
                        <div className='popular-link-container'>
                            <a href="/Contact" className='popular-readmore'>Book Now!</a>
                            <a href="/services/interior-spill" className='popular-readmore-secondary'>Learn More </a>
                        </div>
                    </div>

                    <div></div>
                </div>

                <br className="extra-space" />

                <div className="home-heading-container">
                    <h2>Professional Exterior Services</h2>
                    <p>
                        Whether you're looking for a quick refresh or a complete paint correction, our exterior services have you covered!
                    </p>
                </div>

                <div style={{paddingBottom: '3rem'}} className="otherservices-subcontainer">
                    <div className='popular-services-card'>
                        <div className='popular-img' style={{ backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b5859464-3c0e-4fcf-8332-17155eb86d00/public)` }}></div>
                        <div className='popular-header'>
                            <h3 className="accent-orange">Exterior Decon Wash</h3>
                            <div>
                                <p style={{ marginBottom: 0, color: '#c0c0c0', textAlign: 'left' }}>Starting At:</p>
                                <p className='popular-pricing-price'>$100</p>
                            </div>
                        </div>
                        <hr className="long-hr accent-orange" />

                        <ul className='checklist'>
                            <li className='checklist-item'>Strong and thorough wheel and tire cleaning</li>
                            <hr className="accent-orange" />
                            <li className='checklist-item'>Full vehicle strip wash (to remove any contaminants)</li>
                            <hr className="accent-orange" />
                            <li className='checklist-item'>Ceramic Spray applied to the whole vehicle</li>
                        </ul>

                        <hr className="long-hr accent-orange" />
                        <div className='popular-link-container'>
                            <a href="/Contact" className='popular-readmore'>Book Now!</a>
                            <a href="/services/exterior" className='popular-readmore-secondary'>Learn More </a>
                        </div>
                    </div>
                    <div className='popular-services-card'>
                        <div className='popular-img' style={{ backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/977438a8-129b-496b-9845-e55e3198e900/public)` }}></div>
                        <div className='popular-header'>
                            <h3 className="accent-blue">Exterior Seal and Shine</h3>
                            <div>
                                <p style={{ marginBottom: 0, color: '#c0c0c0', textAlign: 'left' }}>Starting At:</p>
                                <p className='popular-pricing-price'>$300</p>
                            </div>
                        </div>
                        <hr className="long-hr accent-blue" />

                        <ul className='checklist'>
                            <li className='checklist-item'><span className="bold">EVERYTHING</span> from our Exterior Decon Service</li>
                            <hr className="accent-blue" />
                            <li className='checklist-item'>Light polish with an IGL product to remove small swirls and watermarks</li>
                            <hr className="accent-blue" />
                            <li className='checklist-item'>Coat and restore all trim</li>
                            <hr className="accent-blue" />
                            <li className='checklist-item'>Windshield Coating (you won't even need to use your wipers anymore!)</li>
                            <hr className="accent-blue" />
                            <li className='checklist-item'>IGL Premier on top of everything (adds up to a total protection of 1 year!)</li>
                        </ul>

                        <hr className="long-hr accent-blue" />
                        <div className='popular-link-container'>
                            <a href="/Contact" className='popular-readmore'>Book Now!</a>
                            <a href="/services/exterior-seal" className='popular-readmore-secondary'>Learn More </a>
                        </div>
                    </div>
                    <div className='popular-services-card'>
                        <div className='popular-img' style={{ backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4ce4f977-365c-4211-a7f9-68c5ec6d7a00/public)` }}></div>
                        <div className='popular-header'>
                            <h3 className="accent-purple">Correct and Protect</h3>
                            <div>
                                <p style={{ marginBottom: 0, color: '#c0c0c0', textAlign: 'left' }}>Starting At:</p>
                                <p className='popular-pricing-price'>$1,300</p>
                            </div>
                        </div>
                        <hr className="long-hr accent-purple" />

                        <ul className='checklist'>
                            <li className='checklist-item'><span className="bold">EVERYTHING</span> from our Exterior Seal and Shine Service</li>
                            <hr className="accent-purple" />
                            <li className='checklist-item'>Our full paint correction process (Removes ALL waterspots and 85%-100% of scratching)</li>
                            <hr className="accent-purple" />
                            <li className='checklist-item'>Full Ceramic Coating (5 years of protection!)</li>
                        </ul>

                        <hr className="long-hr accent-purple" />
                        <div className='popular-link-container'>
                            <a href="/Contact" className='popular-readmore'>Book Now!</a>
                            <a href="/services/exterior-correct" className='popular-readmore-secondary'>Learn More </a>
                        </div>
                    </div>
                </div>

                <br className="extra-space" />

                <div className='service-bkg-lighter' style={{paddingBottom: '5rem'}}>
                    <div className="general-container new-heading-container" style={{margin: '5vh auto 2rem auto'}}>
                        <strong className="above-heading">Testimonials</strong>
                        <h3 className="new-heading">Read some of the reviews from our valued customers!</h3>
                        <p style={{ margin: 0, padding: '1rem 0' }}>See all of the reviews from our customers on our <a style={{ color: 'dodgerblue' }} target='_blank' rel='noopener' href="https://www.facebook.com/DirtLessDetailing/reviews">Facebook</a> or <a style={{ color: 'dodgerblue' }} target='_blank' rel='noopener' href="https://www.google.com/localservices/prolist?g2lbs=ADZRdktLAaGKKobG3aZn2_Qd9tpM-f3ifTKQp4hXsZnMmVk1USpK7Ha4kZIeLdSCTp26Z3uD8UBdDwRY7Zqn7XZatg-9z1GI86mqJXoiFQCA1rCg0Vis_yQK9JiR9qrRMObWwAegw9aPUbKd01T05_4R3o4ry_qhHA%3D%3D&hl=en-US&gl=us&cs=1&ssta=1&q=dirtless%20detailing&oq=dirtless%20detailing&slp=MgA6HENoTUlxZVd0Nkl2SV9nSVY2UTZ0QmgyZWJnaVJSAggCYAB6-gFDaEprYVhKMGJHVnpjeUJrWlhSaGFXeHBibWRJNnZqVDFhcTRnSUFJV2h3UUFCQUJHQUFZQVNJU1pHbHlkR3hsYzNNZ1pHVjBZV2xzYVc1bmtnRVZZMkZ5WDJSbGRHRnBiR2x1WjE5elpYSjJhV05sbWdFa1EyaGtSRk5WYUU1TlJ6bHVVekJXU2xFd1JtNVRWVkpEV2pKYVNHTnVhRzVTVWtGQ3FnRTZFQUV5SGhBQklocEZwOXktNVEwdWdLbGRqT2pnOEdvLWlaQlZ5NUdlSjh3QjV6SVdFQUlpRW1ScGNuUnNaWE56SUdSbGRHRnBiR2x1Wi1BQkFBkgG0AgoNL2cvMTFzYnBjOV8zYgoNL2cvMTFmcDJwN3dtbgoNL2cvMTFrMndndnhyegoNL2cvMTFzbXZfbm13MQoLL2cvMXRmM2I3bHQKDS9nLzExZ2w0dDJkY20KDC9nLzEyNjBieGxoNgoNL2cvMTFwMTN5MnQ4cQoNL2cvMTFjbnpuX3p3agoNL2cvMTFqcTlwcGtfNwoNL2cvMTFneTRsejU5aAoNL2cvMTF0ZDhjN195NQoNL2cvMTFrNDVzNzVmcwoNL2cvMTFnMnhjbHBxMwoNL2cvMTFzNTFrN2YzdAoNL2cvMTFzM2YwMHZzcAoML2cvMTFnem44M3diCg0vZy8xMW5uMGhzanF2Cg0vZy8xMWZxcXoxdmdwCg0vZy8xMXQ0ZmprMDltEgQSAggBEgQKAggB&src=2&spp=Cg0vZy8xMXNicGM5XzNiOtABV2h3UUFCQUJHQUFZQVNJU1pHbHlkR3hsYzNNZ1pHVjBZV2xzYVc1bmtnRVZZMkZ5WDJSbGRHRnBiR2x1WjE5elpYSjJhV05sbWdFa1EyaGtSRk5WYUU1TlJ6bHVVekJXU2xFd1JtNVRWVkpEV2pKYVNHTnVhRzVTVWtGQ3FnRTZFQUV5SGhBQklocEZwOXktNVEwdWdLbGRqT2pnOEdvLWlaQlZ5NUdlSjh3QjV6SVdFQUlpRW1ScGNuUnNaWE56SUdSbGRHRnBiR2x1Wnc9PQ%3D%3D&serdesk=1&lrlstt=1682530844021&ved=2ahUKEwiSvKHoi8j-AhWfHjQIHT0kD2MQvS56BAgwEAE&scp=ChpnY2lkOmNhcl9kZXRhaWxpbmdfc2VydmljZRJgEhIJeUAf2e38kFQRVTQwKEuFSMMiMkRpcnQtTGVzcyBEZXRhaWxpbmcsIDkzMDUgMjA1dGggQXZlIEUsIEJvbm5leSBMYWtlKhQNCAEeHBXFWjC3HQgBHhwlxVowtzAAGhJkaXJ0bGVzcyBkZXRhaWxpbmciEmRpcnRsZXNzIGRldGFpbGluZyoVQ2FyIGRldGFpbGluZyBzZXJ2aWNl#ts=3">Google</a> page.</p>
                    </div>
                    <div className="reviews-container">
                        <div className='review-card'>
                            <div className='review-top'>
                                <p className='review-text'>"Had an issue with the interior of a vehicle that had been in a garage for too long. Dirt-Less handled it professionally and quickly. <span className='highlight'>We will definitely keep going back for our needs.</span>"</p>
                            </div>
                            <div className='review-bottom'>
                                <div style={{ textAlign: 'left' }}>
                                    <strong className='name'>Jonathon H.</strong>
                                    <p className='services-p'>Full Interior</p>
                                </div>
                                <div className='google-review'>
                                    <img src='../assets/icons/star.png' alt="5 stars" className='icon-36' />
                                    <p className='star-review'>5</p>
                                </div>
                            </div>
                        </div>
                        <div className='review-card'>
                            <div className='review-top'>
                                <p className='review-text'>"Brenden does an amazing job. My car looks amazing. <span className='highlight'>He is super reasonable in his pricing and was very efficient.</span> Will definitely continue to use his service for all our vehicles."</p>
                            </div>
                            <div className='review-bottom'>
                                <div style={{ textAlign: 'left' }}>
                                    <strong className='name'>Kristi H.</strong>
                                    <p className='services-p'>Full Interior + Exterior Wash</p>
                                </div>
                                <div className='google-review'>
                                    <img src='../assets/icons/star.png' alt="5 stars" className='icon-36' />
                                    <p className='star-review'>5</p>
                                </div>
                            </div>
                        </div>
                        <div className='review-card'>
                            <div className='review-top'>
                                <p className='review-text'>"Had a whole half gallon of almond chocolate milk spilled into my trunk thanks to Walmart pickup.<span className='highlight'> After calling many detailing shops (whom most were rude and not helpful) Brenden at Dirt-Less Detail was very polite and eager to help.</span> Despite his busy schedule he fit me in asap and took care of my weird circumstance. It didn't take long to clean the trunk and because of it he didn't charge me for the cleaning. Way to go Brenden at Dirt-Less Detail. Thanks again."</p>
                            </div>
                            <div className='review-bottom'>
                                <div style={{ textAlign: 'left' }}>
                                    <strong className='name'>Jennifer D.</strong>
                                    <p className='services-p'>Full Interior</p>
                                </div>
                                <div className='google-review'>
                                    <img src='../assets/icons/star.png' alt="5 stars" className='icon-36' />
                                    <p className='star-review'>5</p>
                                </div>
                            </div>
                        </div>
                        <div className='review-card'>
                            <div className='review-top'>
                                <p className='review-text'>"Brought in my 12 Escalade and he worked his magic on both inside and outside. <span className='highlight'>Brenden is very good at what he does, the vehicle looks amazing. Better than it was when I bought it.</span> Thank you so much for getting me into your schedule. I am Extremely pleased with the outcome of your services."</p>
                            </div>
                            <div className='review-bottom'>
                                <div style={{ textAlign: 'left' }}>
                                    <strong className='name'>Rob B.</strong>
                                    <p className='services-p'>Full Interior + Exterior Wash</p>
                                </div>
                                <div className='google-review'>
                                    <img src='../assets/icons/star.png' alt="5 stars" className='icon-36' />
                                    <p className='star-review'>5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br className="extra-space" />
                <hr className="pricing__hr" />

                <div className="general-container new-heading-container">
                    <h3 className="new-heading new-heading-center">Our shop location and mobile services</h3>
                </div>
                <section className='mobileservices-container'>
                    <div className='mobileservices-details'>
                        <h4>Mobile Service Information:</h4>
                        <ul>
                            <li>We can come to you to perform our details with most of our services as long as the weather cooperates. Some services that you will need to come to us for are:</li>
                            <li className='no-list'>
                                <ul>
                                    <li>Paint Correction (Single and Two Stage)</li>
                                    <li>Ceramic Coatings</li>
                                </ul>
                            </li>
                            <li>For our mobile services we currently travel out to the following cities:</li>
                            <li className='no-list'>
                                <ul>
                                    <li>Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Lake Tapps, Federal Way, Orting, South Prairie Tehaleh, Black Diamond, Milton, Edgewood, and Graham</li>
                                </ul>
                            </li>
                            <li>*Note: For Mobile Services totaling less than $200 we do charge a small $1/mile from our shop location fee.</li>
                        </ul>
                    </div>
                    <div className='map'>
                        <iframe title="Map of Dirt-Less Detailing location" width={screenWidth < 979 ? '250' : '500'} height={screenWidth < 979 ? '300' : '400'} style={{ border: 0 }} loading="lazy" src={`https://www.google.com/maps/embed/v1/place?zoom=15&q=place_id:ChIJxxfUWqz7kFQRotRs8MwWDRE&key=${process.env.GOOGLE_MAPS}`}></iframe>
                    </div>
                </section>

            </div>
        </div>
    )
}
