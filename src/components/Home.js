import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { scrollWithOffset } from './helpers/ScrollToTop';
import '../App.css';

import Contact from './helpers/Contact';

import { BsCheck2Circle } from 'react-icons/bs';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import cover from '../assets/imgs/cover.webp';
import interior from '../assets/imgs/driverseatBA.webp';
import dlWash from '../assets/imgs/dlwashA.webp';
import paint from '../assets/imgs/paintcorrectionBA.webp';

import bio from '../assets/imgs/pageimgs/homepage/bio.webp';
import combo from '../assets/imgs/pageimgs/homepage/combo.webp';
import dlwash from '../assets/imgs/pageimgs/homepage/dlwash.webp';
import engine from '../assets/imgs/pageimgs/homepage/engine.webp';
import fullintex from '../assets/imgs/pageimgs/homepage/fullintex.webp';
import headliner from '../assets/imgs/pageimgs/homepage/headliner.webp';
import pdlwash from '../assets/imgs/pageimgs/homepage/pdlwash.webp';
import stage1 from '../assets/imgs/pageimgs/homepage/stage1.webp';
import stage2 from '../assets/imgs/pageimgs/homepage/stage2.webp';

export default function Home() {
    return (
        <div className="App">
            <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}></div>
            <header className="home-header">
                <div className='contact-left-container'>
                    <h1 className='title-top'>Your Bonney Lake</h1><br />
                    <h1 className='title-bottom'>Detailing Specialists</h1>
                    <h4 className='dd-desc'>Plenty of 5-star reviews from the customers we've served. </h4>
                    <h4 className='dd-desc'>We will do Interiors, Exteriors, Paint Correction, and much more!</h4>
                    <h4 className='dd-desc'>For your convenience we can come to you, or you can bring your car to us!</h4>
                    <HashLink smooth to="/#popular-services" className="learn-btn top-learn-btn" scroll={el => scrollWithOffset(el)}>Learn More</HashLink>
                    <HashLink smooth to="/#contact" className="quote-btn top-quote-btn" scroll={el => scrollWithOffset(el)}>Get Quote</HashLink>
                </div>
            </header>
            <Contact />

            <div id="popular-services" className='separator-container'>
                <h1 className="service-title">Popular Detailing Services</h1>
            </div>
            <section className="popular-container">

                <div className="popular-services-card">
                    <div className="popular-services-header">
                        <Link to="full-int-ex" className="service-heading-link"><h2 className="popular-service-title">Full Interior Cleaning</h2></Link>
                        <p className="price">Starting at: <span>$200</span></p>
                    </div>
                    <img src={interior} alt="car interior before and after" className="popular-img" />

                    <div className="popular-desc">
                        <ul className="checklist">
                            <li className="checklist-item">
                                <BsCheck2Circle className='checkcircle' />
                                <p>Blow out with Vortex Blowgun</p>
                            </li>
                            <li className="checklist-item">
                                <BsCheck2Circle className='checkcircle' />
                                <p>Hot Water Extraction - If added</p>
                            </li>
                            <li className="checklist-item">
                                <BsCheck2Circle className='checkcircle' />
                                <p>Vacuum the Whole Interior</p>
                            </li>
                            <li className="checklist-item">
                                <BsCheck2Circle className='checkcircle' />
                                <p>Clean ALL Plastics/Leather</p>
                            </li>
                            <li className="checklist-item">
                                <BsCheck2Circle className='checkcircle' />
                                <p>Dress Vinyl/Leather</p>
                            </li>
                            <li className="checklist-item">
                                <BsCheck2Circle className='checkcircle' />
                                <p>Clean Door Jambs</p>
                            </li>
                            <li className="checklist-item">
                                <BsCheck2Circle className='checkcircle' />
                                <p>Clean Windows</p>
                            </li>
                        </ul>
                    </div>
                    <Link to="full-int-ex" className="popular-readmore">
                        <p>Learn More</p>
                    </Link>
                </div>

                <div className="popular-services-card">
                    <div className="popular-services-header">
                        <Link to="premium-dl-wash" className="service-heading-link"><h2 className="popular-service-title">Premium Dirt-Less Wash</h2></Link>
                        <p className="price">Starting at: <span>$150</span></p>
                    </div>
                    <img src={dlWash} alt="car exterior" className="popular-img" />
                    
                    <div className="popular-desc">
                        <ul className="checklist">
                            <li className="checklist-item">
                                <BsCheck2Circle className='checkcircle' />
                                <p>Full Vehicle Strip Wash</p>
                            </li>
                            <li className="checklist-item">
                                <BsCheck2Circle className='checkcircle' />
                                <p>Clean Wheel Wells, Wheel Barriers, and Wheels</p>
                            </li>
                            <li className="checklist-item">
                                <BsCheck2Circle className='checkcircle' />
                                <p>Clay Bar Treatment</p>
                            </li>
                            <li className="checklist-item">
                                <BsCheck2Circle className='checkcircle' />
                                <p>Iron Decontamination Treatment</p>
                            </li>
                            <li className="checklist-item">
                                <BsCheck2Circle className='checkcircle' />
                                <p>Apply 6 month sealant or better</p>
                            </li>
                            <li className="checklist-item">
                                <BsCheck2Circle className='checkcircle' />
                                <p>Clean Door Jambs</p>
                            </li>
                            <li className="checklist-item">
                                <BsCheck2Circle className='checkcircle' />
                                <p>Dress Plastics, Wheel Wells, and Tires</p>
                            </li>
                        </ul>
                    </div>
                    <Link to="premium-dl-wash" className="popular-readmore">
                        <p>Learn More</p>
                    </Link>
                </div>

                <div className="popular-services-card">
                    <div className="popular-services-header">
                        <Link to="single-paint-correction" className="service-heading-link"><h2 className="popular-service-title">Single Stage Paint Correction</h2></Link>
                        <p className="price">Starting at: <span>$300</span></p>
                    </div>
                    <img src={paint} alt="paint correction before and after" className="popular-img" />

                    <div className="popular-desc">
                        <ul className="checklist">
                            <li className="checklist-item">
                                <BsCheck2Circle className='checkcircle' />
                                <p>Full Vehicle Strip Wash</p>
                            </li>
                            <li className="checklist-item">
                                <BsCheck2Circle className='checkcircle' />
                                <p>Clean Wheel Wells, Wheel Barrels, and Wheels</p>
                            </li>
                            <li className="checklist-item">
                                <BsCheck2Circle className='checkcircle' />
                                <p>Clay Bar and Iron Decontamination Treatment</p>
                            </li>
                            <li className="checklist-item">
                                <BsCheck2Circle className='checkcircle' />
                                <p>Remove Tar and Sap</p>
                            </li>
                            <li className="checklist-item">
                                <BsCheck2Circle className='checkcircle' />
                                <p>Tape Off All Trim</p>
                            </li>
                            <li className="checklist-item">
                                <BsCheck2Circle className='checkcircle' />
                                <p>Single Stage Paint Correction</p>
                            </li>
                            <li className="checklist-item">
                                <BsCheck2Circle className='checkcircle' />
                                <p>Ceramic Spray/Coat</p>
                            </li>
                        </ul>
                    </div>
                    <Link to="single-paint-correction" className="popular-readmore">
                        <p>Learn More</p>
                    </Link>
                </div>
            </section>

            <HashLink smooth to="/#contact" className="quote-btn main-quote-btn" scroll={el => scrollWithOffset(el)}>Get a Quote</HashLink>

            <div className='separator-container'>
                <h2 className='service-title'>COMBO DEALS</h2>
            </div>

            <section className="otherservices-container">
                <div className="service-card">
                    <img src={combo} alt="combo cleaning after" className='otherservices-image' />
                    <div className="otherservices-desc">
                        <Link to="bio" className="service-heading-link"><h2>Full Interior and Exterior Cleaning Combo</h2></Link>
                        <p className="secondary-text">Starting at: <span>$275</span></p>
                        <p className="service-desc">This combo comes with a <span className='special-package'>free</span> Engine Bay cleaning, along with the full interior and exterior detail this package is sure to bring your whole car back to life.</p>
                        <div>
                            <Link to="full-int-ex" className="readmore">
                                <p>Interior</p>
                            </Link>
                            <Link to="dl-wash" className="readmore">
                                <p>Exterior</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className='separator-container'>
                <h2 className='service-title'>INTERIOR CLEANING SERVICES</h2>
            </div>
            <section className="otherservices-container">
                <div className="service-card">
                    <img src={fullintex} alt="full interior cleaning after" className='otherservices-image' />
                    <div className="otherservices-desc">
                        <Link to="bio" className="service-heading-link"><h2>Full Interior Cleaning</h2></Link>
                        <p className="secondary-text">Starting at: <span>$200</span></p>
                        <p className="service-desc">A full interior detail will clean every crack and crevice of your vehicles interior. Optionally we can also do a hot water extraction to the carpets of your vehicle to get out deeper stains and dirt.</p>

                        <Link to="full-int-ex" className="readmore">
                            <p>Learn More</p>
                        </Link>
                    </div>
                </div>

                <div className="service-card">
                    <img src={bio} alt="biohazard cleaning before" className='otherservices-image' />
                    <div className="otherservices-desc">
                        <Link to="bio" className="service-heading-link"><h2>Smokers Car/Bio/Mold/etc Cleaning</h2></Link>
                        <p className="secondary-text">Starting at: <span>$300</span></p>
                        <p className="service-desc">If there are bad smells like mold or smoke in your car this will be the package for you. We'll use cleaning chemicals suited for the job to get rid of those odors for good.</p>

                        <Link to="bio" className="readmore">
                            <p>Learn More</p>
                        </Link>
                    </div>
                </div>
                <div className="service-card">
                    <img src={headliner} alt="headliner cleaning after" className='otherservices-image' />
                    <div className="otherservices-desc">
                        <Link to="headliners" className="service-heading-link"><h2>Headliners</h2></Link>
                        <p className="secondary-text">Starting at: <span>$40</span></p>
                        <p className="service-desc">To clean your headliners we will determine the best plan of attack based on the materials in order to leave your headliners clean and prevent sagging or damage.</p>

                        <Link to="headliners" className="readmore">
                            <p>Learn More</p>
                        </Link>
                    </div>
                </div>
            </section>

            <div className='separator-container'>
                <h2 className='service-title'>EXTERIOR CLEANING SERVICES</h2>
            </div>

            <section className="otherservices-container">
                <div className="service-card">
                    <img src={dlwash} alt="dirt-less wash cleaning after" className='otherservices-image' />
                    <div className="otherservices-desc">
                        <Link to="dl-wash" className="service-heading-link"><h2>Dirt-Less Wash</h2></Link>
                        <p className="secondary-text">Starting at: <span>$75</span></p>
                        <p className="service-desc">Our Dirt-Less Wash will thoroughly clean the exterior of your vehicle with our tried and true cleaning process.</p>
                        <Link to="dl-wash" className="readmore">
                            <p>Learn More</p>
                        </Link>
                    </div>
                </div>

                <div className="service-card">
                    <img src={pdlwash} alt="premium dirt-less wash cleaning after" className='otherservices-image' />
                    <div className="otherservices-desc">
                        <Link to="premium-dl-wash" className="service-heading-link"><h2>Premium Dirt-Less Wash</h2></Link>
                        <p className="secondary-text">Starting at: <span>$150</span></p>
                        <p className="service-desc">Our Premium exterior wash will go above and beyond the Dirt-Less Wash in the cleaning process and will top it off with a 6 month sealant or better to protect your vehicle.</p>
                        <Link to="dl-wash" className="readmore">
                            <p>Learn More</p>
                        </Link>
                    </div>
                </div>

                <div className="service-card">
                    <img src={engine} alt="engine bay cleaning after" className='otherservices-image' />
                    <div className="otherservices-desc">
                        <Link to="engine" className="service-heading-link"><h2>Engine Cleaning</h2></Link>
                        <p className="secondary-text">Starting at: <span>$80</span></p>
                        <p className="service-desc">The engine bay is typically overlooked and tricky to clean, but we can take care of it for you and leave yours looking like new.</p>
                        <Link to="engine-bay" className="readmore">
                            <p>Learn More</p>
                        </Link>
                    </div>
                </div>
            </section>
            
            <div className='separator-container'>
                <h2 className='service-title'>EXTERIOR CORRECTION SERVICES</h2>
            </div>
            <section className="otherservices-container">
                <div className="service-card">
                    <img src={stage1} alt="stage 1 paint correction cleaning after" className='otherservices-image' />
                    <div className="otherservices-desc">
                        <Link to="single-paint-correction" className="service-heading-link"><h2>Single Stage Paint Correction</h2></Link>
                        <p className="secondary-text">Starting at: <span>$300</span></p>
                        <p className="service-desc">Our single stage paint correction can fix 60%-80% of minor damage and scratches and will leave your vehicle looking shinier than ever.</p>
                        <Link to="single-paint-correction" className="readmore">
                            <p>Learn More</p>
                        </Link>
                    </div>
                </div>

                <div className="service-card">
                    <img src={stage2} alt="stage 2 paint correction cleaning after" className='otherservices-image' />
                    <div className="otherservices-desc">
                        <Link to="two-paint-correction" className="service-heading-link"><h2>Two Stage Paint Correction</h2></Link>
                        <p className="secondary-text">Starting at: <span>$450</span></p>
                        <p className="service-desc">Our 2 stage paint correction is great for getting your car to a near perfect state. This is great for show cars need that extra time and effort to get to that showroom shine.</p>
                        <Link to="two-paint-correction" className="readmore">
                            <p>Learn More</p>
                        </Link>
                    </div>
                </div>
            </section>

            <div className='separator-container'>
                <h2 className='service-title'>REVIEWS</h2>
            </div>

            <article className="reviews-container">
                <Carousel className="review-carousel" style={styles} infiniteLoop autoPlay swipeable={true} showThumbs={false} interval={8000}>
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
                        <p className="review">My kids left a gal of milk in the back of my car, needless to say the nice warm weather it leaked all over and soon smelled horrid. He did a fantastic job, car smells and looks brand new, even got every hair out from my pups.  very happy I got his number as a referral from a friend.</p>
                        <p className="reviewer">Trisha C.</p>
                    </div>
                    <div>
                        <p className="review">My car has never been cleaner!!</p>
                        <p className="reviewer">Austin M.</p>
                    </div>
                    <div>
                        <p className="review">The process was easy.  He responded right away when I contacted him about a detail. He showed up when he said he would and was extremely professional.  He did an amazing job on the detail of my car.  Would have him detail my car again.</p>
                        <p className="reviewer">Barbara G.</p>
                    </div>
                    <div>
                        <p className="review">Brendan is a hard worker, on time, great work and attention to detail. Highly recommend</p>
                        <p className="reviewer">Terri E.</p>
                    </div>
                </Carousel>
            </article>

            <section className="serviceareas-container">
                <h2 id="temp-hash">Servicing most of the Pierce and King County Area</h2>
                <p>As part of our simple and hassle free service, you can come to us or we can come to you!</p>
            </section>
        </div>
    )
}