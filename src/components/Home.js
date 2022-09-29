import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { scrollWithOffset } from './helpers/ScrollToTop';
import submit from './helpers/submit.js';

import { BsCheck2Circle } from 'react-icons/bs';
import { FaPhoneAlt, FaFacebookMessenger, FaClock, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { GoLocation } from "react-icons/go";

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../App.css';

import cover from '../assets/imgs/cover.jpg';
import interior from '../assets/imgs/driverseatBA.jpg';
import dlWash from '../assets/imgs/dlwashA.jpg';
import paint from '../assets/imgs/paintcorrectionBA.jpg';

import bio from '../assets/imgs/pageimgs/homepage/bio.jpg';
import combo from '../assets/imgs/pageimgs/homepage/combo.jpg';
import dlwash from '../assets/imgs/pageimgs/homepage/dlwash.jpg';
import engine from '../assets/imgs/pageimgs/homepage/engine.jpg';
import fullintex from '../assets/imgs/pageimgs/homepage/fullintex.jpg';
import headliner from '../assets/imgs/pageimgs/homepage/headliner.JPEG';
import pdlwash from '../assets/imgs/pageimgs/homepage/pdlwash.jpg';
import stage1 from '../assets/imgs/pageimgs/homepage/stage1.jpg';
import stage2 from '../assets/imgs/pageimgs/homepage/stage2.jpg';

export default function Home() {
    const [showForm, setShowForm] = useState(false);
    const [wideScreen, setWideScreen] = useState(false); // Using for the auto expanded form if screen is wide enough

    useEffect(() => {
        if (window.innerWidth > 879) {
            setWideScreen(true);
            setShowForm(true);
        }
    }, [])

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
            <section className="contact-container" id="contact">
                <div className='contact-container-left'>
                    <h2>CONTACT US</h2>
                    <div className='contact-icon-container'>
                        <FaPhoneAlt className='contact-icon' />
                        <a href="tel:2532529758" target="_blank" rel="noreferrer">(253) 252-9758</a>
                    </div>
                    <div className='contact-icon-container'>
                        <FaFacebookMessenger className='contact-icon' />
                        <a href="https://www.facebook.com/DirtLessDetailing/" target="_blank" rel="noreferrer">Facebook Messenger</a>
                    </div>

                    <h2>WORKING HOURS</h2>
                    <div className="contact-icon-container">
                        <FaClock className='contact-icon' />
                        <p className="hours-p">Monday - Sunday:<br />8 AM - 8 PM</p>
                    </div>

                    <div className='contact-icon-container'>
                        <GoLocation className='contact-icon' />
                        <a href="https://www.google.com/maps/place/9305+205th+Ave+E,+Bonney+Lake,+WA+98391/@47.172835,-122.1589741,17z/data=!3m1!4b1!4m5!3m4!1s0x5490faeb8aa2e3d7:0xe53c2e7cb4aa7549!8m2!3d47.1728314!4d-122.1567854" className="contact-link location-link" target="_blank" rel='noreferrer'>9305 205th Ave E Bonney Lake Washington</a>
                    </div>
                </div>

                <div className='contact-container-right'>
                    <h2>Get In Touch</h2>
                    <a href="tel:2532529758" target="_blank" rel="noreferrer">(253) 252-9758</a>

                    <form action="#" className="form" onSubmit={(e) => submit(e)}>
                        <label htmlFor="name" className='input-label'>Name</label><br />
                        <input type="text" id="name" name="name" className='text-input' required /><br />
                        <label htmlFor="email" className='input-label'>Email</label><br />
                        <input type="text" id="email" name="email" className='text-input' required /><br />

                        <span onClick={() => setShowForm(!showForm)} style={{cursor: 'pointer', display: wideScreen ? 'none' : 'block'}}>{showForm ? <FaCaretUp /> : <FaCaretDown />} {showForm ? 'Hide' : 'Show'} the rest of the form {showForm ? <FaCaretUp /> : <FaCaretDown />}</span>

                        <span style={{display: showForm ? 'block' : 'none'}}>
                            <label htmlFor="message" className='input-label'>Additional Details</label><br />
                            <textarea type="textarea" id="message" name="message" className='textarea-input' placeholder='Do you want mobile service or a drop off? Do you have any other questions/concerns?' />

                            <h5 style={{marginBottom: 4}}>Combos:</h5>
                            <input type="checkbox" name="Combo" value="Combo" className='checkbox-input' />
                            <label htmlFor="Combo" className='input-label'>Full Interior and Exterior Combo</label><br />

                            <h5 style={{marginBottom: 4}}>Interior Cleaning:</h5>
                            <input type="checkbox" name="FullInt" value="FullInt" className='checkbox-input' />
                            <label htmlFor="FullInt" className='input-label'>Full Interior With Extraction</label><br />
                            <input type="checkbox" name="Bio" value="Bio" className='checkbox-input' />
                            <label htmlFor="Bio" className='input-label'>Biohazard Cleaning</label><br />
                            <input type="checkbox" name="Headliners" value="Headliners" />
                            <label htmlFor="Headliners" className='input-label'>Headliners</label><br />

                            <h5 style={{marginBottom: 4}}>Exterior Cleaning:</h5>
                            <input type="checkbox" name="DLWash" value="DLWash" className='checkbox-input' />
                            <label htmlFor="DLWash" className='input-label'>Dirt-Less Wash</label><br />
                            <input type="checkbox" name="PDLWash" value="PDLWash" className='checkbox-input' />
                            <label htmlFor="PDLWash" className='input-label'>Premium Dirt-Less Wash</label><br />
                            <input type="checkbox" name="Engine" value="Engine" />
                            <label htmlFor="Engine" className='input-label' style={{marginBottom: 16}}>Engine Bay</label><br />

                            <h6 className="form-subheading">Exterior Addons:</h6>
                            <input type="checkbox" name="Glass" value="Glass" />
                            <label htmlFor="Glass" className='input-label' style={{marginBottom: 16}}>Glass Polishing</label><br />
                            <input type="checkbox" name="Waterspot" value="Waterspot" />
                            <label htmlFor="Waterspot" className='input-label' style={{marginBottom: 16}}>Waterspot/Overspray Removal</label><br />

                            <h5 style={{marginBottom: 4}}>Paint Correction:</h5>
                            <input type="checkbox" name="SinglePC" value="SinglePC" className='checkbox-input' />
                            <label htmlFor="SinglePC" className='input-label'>Single Stage Paint Correction</label><br />
                            <input type="checkbox" name="TwoPC" value="TwoPC" />
                            <label htmlFor="TwoPC" className='input-label' style={{marginBottom: 16}}>Two Stage Paint Correction</label><br />

                            <h6 className="form-subheading">Paint Correction Addons:</h6>
                            <input type="checkbox" name="Glass" value="Glass" className='checkbox-input' />
                            <label htmlFor="Glass" className='input-label'>Glass Polishing</label><br style={{marginBottom: 16}} />

                            <button className='popular-readmore'>Submit</button>
                        </span>

                    </form>
                </div>
            </section>

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
                    <Link to="single-paint-correction" className="service-heading-link"><h2 className="popular-service-title">Single Stage Paint Correction</h2></Link>
                    <p className="price">Starting at: <span>$300</span></p>
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
                <Carousel className="review-carousel" style={styles} infiniteLoop autoPlay showThumbs={false}>
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
                </Carousel>
            </article>

            <section className="serviceareas-container">
                <h2 id="temp-hash">Servicing most of the Pierce and King County Area</h2>
                <p>As part of our simple and hassle free service, you can come to us or we can come to you!</p>
            </section>
        </div>
    )
}