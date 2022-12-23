import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Head from 'next/head';

import PopularServices from '../utils/PopularServices';
import OtherServices from '../utils/OtherServices';

import { MdOutlineLocalCarWash } from 'react-icons/md';
import { BiCertification } from 'react-icons/bi';
import { FaRegStar } from 'react-icons/fa';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import cover from '../public/imgs/main-cover.webp';
import kenzo from '../public/imgs/pageimgs/homepage/project.png';

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
                <meta name="og:title" content="Bonney Lakes Auto Detailing & Ceramic Coating Specialists" />
                <meta name="description" content="Bonney lakes top choice for ceramic coating, paint correction, and all your auto detailing needs!" />
                <meta property="og:description" content="Bonney lakes top choice for ceramic coating, paint correction, and all your auto detailing needs!" />
                <meta name="url" content="https://www.dirtlessdetailing.com/" />
                <meta property="og:url" content="https://www.dirtlessdetailing.com/" />
                <meta name="site_name" content="Dirt-Less Detailing" />
                <meta property="og:site_name" content="Dirt-Less Detailing" />
                <meta name="type" content="website" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={cover.src} />
                <link rel="canonical" href="https://www.dirtlessdetailing.com/" />
            </Head>
            <div className="maincover">
                <Image src={cover} layout="fill" objectFit='cover' alt="Chevrolet truck on trailer after Two Stage Paint Correction" placeholder='blur' priority />
            </div>
            <header className="home-header">
                <div className='landing-div'>
                    <h1 className='title-top'>Your Bonney Lake <span className='title-bottom'>Detailing & Ceramic Coating Specialists</span></h1>

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
                    </div>

                    <p className='dd-desc'>We also offer a mobile service <span className='special-package'>FREE</span> of charge on select packages!</p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
                        <a href="https://www.bbb.org/us/wa/bonney-lake/profile/auto-detailing/dirt-less-detailing-1296-1000135733/#sealclick" target="_blank" rel="noopener"><img src="https://seal-alaskaoregonwesternwashington.bbb.org/seals/blue-seal-160-82-bbb-1000135733.png" style={{ border: 0 }} alt="Dirt-Less Detailing BBB Business Review" /></a>
                        <a href="https://iglcoatingsusa.com/" target="_blank" rel="noopener"><Image src={kenzo} width={smallScreen ? 100 : 135} height={smallScreen ? 100 : 135} alt="igl kenzo coatings" /></a>
                    </div>

                    <a href="/Contact" className="quote-btn top-quote-btn">Get a Quote</a>

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
                        <p className="review">My car has never been cleaner!!</p>
                        <p className="reviewer">Austin M.</p>
                    </div>
                    <div>
                        <p className="review">The process was easy. He responded right away when I contacted him about a detail. He showed up when he said he would and was extremely professional.  He did an amazing job on the detail of my car.  Would have him detail my car again.</p>
                        <p className="reviewer">Barbara G.</p>
                    </div>
                    <div>
                        <p className="review">Brenden is a hard worker, on time, great work and attention to detail. Highly recommend</p>
                        <p className="reviewer">Terri E.</p>
                    </div>
                </Carousel>
            </article>
            <p>Check out more reviews on our <a className='aside-link' target='_blank' rel='noopener' href="https://www.facebook.com/DirtLessDetailing/reviews">Facebook</a> page.</p>

            <section className='mobileservices-container'>
                <div className="locations">
                    <h3>We currently provide mobile services to the following cities:</h3>
                    <div style={{ display: 'grid', placeItems: 'center' }}>
                        <ul className='cities-ul'>
                            <li><a href='/location/bonney-lake' className='aside-link'>Bonney Lake</a></li>
                            <li><a href='/location/buckley' className='aside-link'>Buckley</a></li>
                            <li><a href='/location/sumner' className='aside-link'>Sumner</a></li>
                            <li><a href='/location/enumclaw' className='aside-link'>Enumclaw</a></li>
                            <li><a href='/location/puyallup' className='aside-link'>Puyallup</a></li>
                            <li><a href='/location/federal-way' className='aside-link'>Federal Way</a></li>
                            <li><a href='/location/orting' className='aside-link'>Orting</a></li>
                            <li><a href='/location/south-prairie' className='aside-link'>South Prairie</a></li>
                            <li><a href='/location/black-diamond' className='aside-link'>Black Diamond</a></li>
                            <li><a href='/location/milton' className='aside-link'>Milton</a></li>
                            <li><a href='/location/edgewood' className='aside-link'>Edgewood</a></li>
                            <li><a href='/location/graham' className='aside-link'>Graham</a></li>
                        </ul>
                    </div>
                    <h3>As part of our simple and hassle free service, you can come to us or we can come to you with select packages!</h3>
                </div>
                <div className='map'>
                    <iframe width={smallScreen ? '250' : '500'} height={smallScreen ? '300' : '400'} style={{ border: 0 }} loading="lazy" src={`https://www.google.com/maps/embed/v1/place?zoom=15&q=place_id:ChIJxxfUWqz7kFQRotRs8MwWDRE&key=${process.env.GOOGLE_MAPS}`}></iframe>
                </div>
            </section>
        </div>
    )
}
