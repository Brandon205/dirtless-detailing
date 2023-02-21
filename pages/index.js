import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Head from 'next/head';
import Metatags from '../utils/Metatags';

import PopularServices from '../utils/PopularServices';
import OtherServices from '../utils/OtherServices';

import { MdOutlineLocalCarWash } from 'react-icons/md';
import { BiCertification } from 'react-icons/bi';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';
import { FaRegStar, FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
    const [smallScreen, setSmallScreen] = useState(null);

    useEffect(() => {
        if (window.innerWidth < 879) {
            setSmallScreen(true);
        } else {
            setSmallScreen(false);
        }
    }, [])

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
            <div className="maincover" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/cover')` }}></div>
            <header className="home-header">
                <div className='landing-div'>
                    <h1 className='title-top'>Your Bonney Lake <br /><span className='title-bottom'>Detailing & Ceramic Coating Specialists</span></h1>

                    <div className="header-icons-container">
                        <div>
                            <FaRegStar className='header-icon' />
                            <p className="header-desc">Plenty</p>
                            <span className='header-desc-span'>of 5 Star Reviews</span>
                        </div>
                        <div>
                            <MdOutlineLocalCarWash className='header-icon' />
                            <p className="header-desc">1000+</p>
                            <span className='header-desc-span'>Details Completed</span>
                        </div>
                        <div>
                            <BiCertification className='header-icon' />
                            <p className="header-desc">7 Years</p>
                            <span className='header-desc-span'>Of Experience</span>
                        </div>
                        <div>
                            <FaMapMarkedAlt className='header-icon' />
                            <p className="header-desc">Mobile</p>
                            <span className='header-desc-span'>Services</span>
                        </div>
                    </div>

                    <div style={{ display: smallScreen ? 'none' : 'flex', alignItems: 'center', gap: 32 }}>
                        <a href="https://www.bbb.org/us/wa/bonney-lake/profile/auto-detailing/dirt-less-detailing-1296-1000135733/#sealclick" target="_blank" rel="noopener">
                            <div className="header-cert" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/242a2248-1f41-4edf-b2c5-d508a10bef00/public')`, height: 134 + 'px', width: 134 + 'px' }}></div>
                        </a>

                        <a href="https://iglcoatingsusa.com/" target="_blank" rel="noopener">
                            <div className="header-cert" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/833088d3-ca7b-41b9-561f-21f8517f3300/public')`, height: 165 + 'px', width: 145 + 'px' }}></div>
                        </a>
                    </div>

                    <div style={{display: 'flex', gap: 1 + 'rem'}}>
                        <a href="/Contact" className='quote-btn'>Get a Free Quote</a>
                        <a href="tel:2532529758" className='quote-btn top-quote-btn'><MdOutlinePermPhoneMsg className='call-icon' /> (253) 252-9758</a>
                    </div>

                </div>
            </header>

            <div id="popular-services" className='separator-container'>
                <h2 className="service-title">POPULAR DETAILING SERVICES</h2>
            </div>

            <PopularServices />

            <a href="/Contact" className="quote-btn main-quote-btn popular-quote-btn">Get a Quote</a>

            <OtherServices />

            <div className='separator-container'>
                <h3 className='service-title'>REVIEWS</h3>
            </div>

            <article className="reviews-container">
                <Carousel className="review-carousel" style={styles} infiniteLoop autoPlay stopOnHover showThumbs={false} swipeable showArrows interval={7000} emulateTouch>
                    <div>
                        <p className="review">Brenden answered the first phone call gave a quote over the phone, I did not have to bring the car anywhere. He provided a value and was on time and was extremely thorough. Did not attempt to upsell me and increase price, day of the appointment, like another Bonney Lake detailer did. Can't recommend Dirt-Less Detail enough. My wife's Jeep Cherokee looks new!</p>
                        <p className="reviewer">Darren B.</p>
                    </div>
                    <div>
                        <p className="review">Brought in my '12 Escalade and he worked his magic on both inside and outside. Brenden is very good at what he does, the vehicle looks amazing. better than it was when I bought it. Thank you so much for getting me into your schedule. I am Extremely pleased with the outcome of your services.</p>
                        <p className="reviewer">Rob B.</p>
                    </div>
                    <div>
                        <p className="review">Bought new/used SUV for my wife and the kids. 2002 Cadillac Escalade it was pretty filthy inside and out. Made an appointment with Dirt-Less for an interior deep cleaning. Also a cut and buff on the exterior. He brought back the original Cadillac elegance of the vehicle. I highly recommend him. I wish I could post the before and after pictures. High end quality work for a fair price. 5 stars for his work</p>
                        <p className="reviewer">Jeff W.</p>
                    </div>
                    <div>
                        <p className="review">Brenden has done a few trucks for me including re covering my 07 dodge drivers seat and did an awesome job, I would recommend him to anyone!</p>
                        <p className="reviewer">Patrick K.</p>
                    </div>
                    <div>
                        <p className="review">We have been using Dirt-Less detailing for the last year at our office as an employee perk. He comes in once a month on schedule, always performs fantastic work. I highly recommend them.</p>
                        <p className="reviewer">Rick E.</p>
                    </div>
                    <div>
                        <p className="review">My kids left a gal of milk in the back of my car, needless to say the nice warm weather it leaked all over and soon smelled horrid. He did a fantastic job, car smells and looks brand new, even got every hair out from my pups. very happy I got his number as a referral from a friend.</p>
                        <p className="reviewer">Trisha C.</p>
                    </div>
                    <div>
                        <p className="review">I was just astounded by the quality of his performance as a detailer. My car has never been cleaner. From simple maintenance to even stage 1 buff; the quality has been on point every single time. He's a very good friend of mine and his dedication to detailing is proven to be remarkable.</p>
                        <p className="reviewer">Nathan M.</p>
                    </div>
                    <div>
                        <p className="review">The process was easy. He responded right away when I contacted him about a detail. He showed up when he said he would and was extremely professional.  He did an amazing job on the detail of my car.  Would have him detail my car again.</p>
                        <p className="reviewer">Barbara G.</p>
                    </div>
                    <div>
                        <p className="review">Brenden is a hard worker, on time, great work and attention to detail. Highly recommend</p>
                        <p className="reviewer">Terri E.</p>
                    </div>
                    <div>
                        <p className="review">Without a doubt. Brenden is the MAN! Hands down second to none when it comes to his detailing services. My wifes Fit is as good as new if not better.</p>
                        <p className="reviewer">Mike P.</p>
                    </div>
                    <div>
                        <p className="review">Amazing experience amazing Owner had no issues with the work and had amazing time communicating with him my truck turned out beautiful</p>
                        <p className="reviewer">Mark B.</p>
                    </div>
                </Carousel>
            </article>
            <p>Check out more reviews on our <a style={{ color: 'blue' }} target='_blank' rel='noopener' href="https://www.facebook.com/DirtLessDetailing/reviews">Facebook</a> or <a style={{ color: 'blue' }} target='_blank' rel='noopener' href="https://www.google.com/search?client=firefox-b-1-d&q=dirtlessdetailing+&dlnr=1&sei=Lhr1Y8_hCsz99AP82ZLACQ#dlnr=1&lrd=0x5490fbac5ad417c7:0x110d16ccf06cd4a2,1,,,,">Google</a> page.</p>

            <section className='mobileservices-container'>
                <div className="locations">
                    <h3>We currently provide mobile services to the following cities:</h3>
                    <div style={{ width: 100 + '%', display: 'flex', justifyContent: 'center' }}>
                        <ul className='cities-ul'>
                            <li><a href='/location/bonney-lake' className='aside-link'>Bonney Lake</a><FaMapMarkerAlt /></li>
                            <li><a href='/location/buckley' className='aside-link'>Buckley</a><FaMapMarkerAlt /></li>
                            <li><a href='/location/sumner' className='aside-link'>Sumner</a><FaMapMarkerAlt /></li>
                            <li><a href='/location/lake-tapps' className='aside-link'>Lake Tapps</a><FaMapMarkerAlt /></li>
                            <li><a href='/location/enumclaw' className='aside-link'>Enumclaw</a><FaMapMarkerAlt /></li>
                            <li><a href='/location/puyallup' className='aside-link'>Puyallup</a><FaMapMarkerAlt /></li>
                            <li><a href='/location/tehaleh' className='aside-link'>Tehaleh</a><FaMapMarkerAlt /></li>
                            <li><a href='/location/federal-way' className='aside-link'>Federal Way</a><FaMapMarkerAlt /></li>
                            <li><a href='/location/orting' className='aside-link'>Orting</a><FaMapMarkerAlt /></li>
                            <li><a href='/location/south-prairie' className='aside-link'>South Prairie</a><FaMapMarkerAlt /></li>
                            <li><a href='/location/black-diamond' className='aside-link'>Black Diamond</a><FaMapMarkerAlt /></li>
                            <li><a href='/location/milton' className='aside-link'>Milton</a><FaMapMarkerAlt /></li>
                            <li><a href='/location/edgewood' className='aside-link'>Edgewood</a><FaMapMarkerAlt /></li>
                            <li><a href='/location/graham' className='aside-link'>Graham</a><FaMapMarkerAlt /></li>
                        </ul>
                    </div>
                    <h3>As part of our simple and hassle free service, you can come to us or we can come to you with select packages!</h3>
                </div>
                <div className='map'>
                    <iframe title="Map of Dirt-Less Detailing location" width={smallScreen ? '250' : '500'} height={smallScreen ? '300' : '400'} style={{ border: 0 }} loading="lazy" src={`https://www.google.com/maps/embed/v1/place?zoom=15&q=place_id:ChIJxxfUWqz7kFQRotRs8MwWDRE&key=${process.env.GOOGLE_MAPS}`}></iframe>
                </div>
            </section>
        </div>
    )
}
