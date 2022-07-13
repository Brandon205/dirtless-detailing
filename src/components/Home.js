import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../App.css';

import cover from '../assets/imgs/cover.jpg';
import interior from '../assets/imgs/driverseatBA.jpg';
import dlWash from '../assets/imgs/dlwashA.jpg';
import paint from '../assets/imgs/paintcorrectionBA.jpg';

export default function Home() {
    return (
        <div className="App">
            <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}></div>
            <header className="home-header">
                <div>
                    <h1>Your Bonney Lake Car Detailing Specialists</h1>
                    <h4 className='dd-desc'>Plenty of 5-star reviews from the customers we've served. We will do Interiors, Exteriors, Paint Correction, and much more. We will have your car looking brand new.</h4>
                    <button className="learn-btn">Learn More</button>
                    <button className="quote-btn">Get a Quote</button>
                </div>
            </header>
            <section className="contact-container">
                <h3>Contact Us</h3>
                <a href="tel:2532529758" className="contact-link" target="_blank">(253) 252-9758</a>

                <h3>WORKING HOURS</h3>
                <p className="hours-p">Monday - Sunday: 8 AM - 8 PM</p>

                <h3>LOCATION</h3>
                <a href="https://www.google.com/maps/place/9305+205th+Ave+E,+Bonney+Lake,+WA+98391/@47.172835,-122.1589741,17z/data=!3m1!4b1!4m5!3m4!1s0x5490faeb8aa2e3d7:0xe53c2e7cb4aa7549!8m2!3d47.1728314!4d-122.1567854" className="contact-link" target="_blank">9305 205th Ave E Bonney Lake Washington</a>
            </section>
            <section className="popular-container">
                <h2>Popular Detailing Services</h2>

                <div className="popular-services-card">
                    <h3 className="popular-service-title">Full Interior Cleaning with Extraction</h3>
                    <p className="price">Starting at: <p>$200</p></p>
                    <img src={interior} alt="car interior before and after" className="popular-img" />

                    <div className="popular-desc">
                        <p>Our best selling interior cleaning solution, because it can and will clean years of worth of dirt and other buildup from your cars interior. The difference will be noticeable!</p>
                        <p>We will use our array of tools to help us get the stickiest of things out of the carpet, stains off of the vinyl, or dress up your leather seats. This package comes with Hot Water Extraction which we will go above and beyond with to clean your vehicle.</p>
                        <p>We'll work on all sizes of vehicles, and we've been able to get plenty of great results from even the worst of interiors!</p>
                    </div>
                    <Link to="full-int-ex" className="popular-readmore">
                        <p>Learn More</p>
                    </Link>
                </div>
                <div className="popular-services-card">
                    <h3 className="popular-service-title">Two Stage Paint Correction</h3>
                    <p className="price">Starting at: <p>$450</p></p>
                    <img src={paint} alt="paint correction before and after" className="popular-img" />

                    <div className="popular-desc">
                        <p>Our best package to get your vehicles paint to pristine condition.</p>
                        <p>We'll start by giving your vehicle an entire wash, then we will use a clay bar, iron decontamination, and tape off the vehicle to get it ready for the paint correction. Lastly, we will protect your car with a ceramic coating to preserve the work we did.</p>
                        <p>This is a time consuming process, but trust us it will remove most if not all of the scratches and swirls from your paint, making your car look better than ever.</p>
                    </div>
                    <Link to="two-paint-correction" className="popular-readmore">
                        <p>Learn More</p>
                    </Link>
                </div>
                <div className="popular-services-card">
                    <h3 className="popular-service-title">Premium Dirt-less Wash</h3>
                    <p className="price">Starting at: <p>$150</p></p>
                    <img src={dlWash} alt="car exterior picture" className="popular-img" />
                    
                    <div className="popular-desc">
                        <p>The best Exterior wash package you could choose! Complete with a ceramic spray wax to protect your car from the outside world.</p>
                        <p>We'll wash everything from the gas door to the wheel wells to leave no dirt behind.</p>
                        <p>This package comes with our 3 step process when waxing your car to make sure the wax applies properly and will not only last longer, but also protect your vehicle better.</p>
                    </div>
                    <Link to="premium-dl-wash" className="popular-readmore">
                        <p>Learn More</p>
                    </Link>
                </div>

            </section>

            <button className="quote-btn">Get a Quote</button>

            <section className="otherservices-container">
                <h2>Our Other Services</h2>

                <h3>INTERIOR CLEANING SERVICES</h3>
                <div className="service-card">
                    <h2>Full Interior without Extraction</h2>
                    <p className="secondary-text">Starting at: <p>$200</p></p>
                    <p className="service-desc">A thorough cleaning of your cars interior, we'll get all of the cracks and crevices of your vehicle cleaned out with this one.</p>
                    <Link to="full-int" className="readmore">
                        <p>Learn More</p>
                    </Link>
                </div>
                <div className="service-card">
                    <h2 className="popular-service-title">Full Interior with Extraction</h2>
                    <p className="secondary-text">Starting at: <p>$250</p></p>
                    <p className="service-desc">Our best interior cleaning package that will get your vehicle looking like new. Comes with extraction, which might be needed to get out some of those tougher stains in your vehicle.</p>
                    <Link to="full-int-ex" className="readmore">
                        <p>Learn More</p>
                    </Link>
                </div>
                <div className="service-card">
                    <h2>Smoker Car/Bio/Mold/etc Cleaning</h2>
                    <p className="secondary-text">Starting at: <p>$300</p></p>
                    <p className="service-desc">If there are bad smells like mold or smoke in your car this might be the package for you. We'll use cleaning chemicals suited for the job to get rid of those odors for good.</p>
                    <Link to="bio" className="readmore">
                        <p>Learn More</p>
                    </Link>
                </div>
                <div className="service-card">
                    <h2>Headliners</h2>
                    <p className="secondary-text">Starting at: <p>$40</p></p>
                    <p className="service-desc">To clean your headliners we will determine the best plan of attack based on the materials in order to leave your headliners clean without sagging or eventual problems.</p>
                    <Link to="headliners" className="readmore">
                        <p>Learn More</p>
                    </Link>
                </div>

                <h3>EXTERIOR CORRECTION SERVICES</h3>
                <div className="service-card">
                    <h2>Single Stage Paint Correction</h2>
                    <p className="secondary-text">Starting at: <p>$300</p></p>
                    <p className="service-desc">Our single stage paint correction can fix about 80% of minor damage and scratches and will leave your vehicle looking shinier than ever.</p>
                    <Link to="single-paint-correction" className="readmore">
                        <p>Learn More</p>
                    </Link>
                </div>
                <div className="service-card">
                    <h2 className="popular-service-title">Two Stage Paint Correction</h2>
                    <p className="secondary-text">Starting at: <p>$450</p></p>
                    <p className="service-desc">A more in depth process to remove and smooth out any exterior paint damage on your vehicle. We will do as much as we can to get every imperfection out of your cars paint job.</p>
                    <Link to="two-paint-correction" className="readmore">
                        <p>Learn More</p>
                    </Link>
                </div>
                <div className="service-card">
                    <h2>Glass Polishing</h2>
                    <p className="secondary-text">Starting at: <p>$70/hr</p></p>
                    <p className="service-desc">Scratches or etching on the glass of your car? We'll get rid of those with this package.</p>
                    <Link to="glass" className="readmore">
                        <p>Learn More</p>
                    </Link>
                </div>
                <div className="service-card">
                    <h2>Waterspot and Overspray Removal</h2>
                    <p className="secondary-text">Starting at: <p>$60/hr</p></p>
                    <p className="service-desc">If there are any waterspots or overspray on your vehicle that are bugging you, let us know and we can get rid of them.</p>
                    <Link to="waterspot" className="readmore">
                        <p>Learn More</p>
                    </Link>
                </div>

                <h3>EXTERIOR CLEANING SERVICES</h3>
                <div className="service-card">
                    <h2>Dirt-less Wash</h2>
                    <p className="secondary-text">Starting at: <p>$75</p></p>
                    <p className="service-desc">Our Dirt-less Wash will thoroughly clean the exterior of your vehicle with our tried and true cleaning process.</p>
                    <Link to="dl-wash" className="readmore">
                        <p>Learn More</p>
                    </Link>
                </div>
                <div className="service-card">
                    <h2 className="popular-service-title">Premium Dirt-less Wash</h2>
                    <p className="secondary-text">Starting at: <p>$150</p></p>
                    <p className="service-desc">The Premium Dirt-less Wash will deep clean the exterior, but will also keep your vehicle looking clean for months to come with our multiple step waxing process</p>
                    <Link to="premium-dl-wash" className="readmore">
                        <p>Learn More</p>
                    </Link>
                </div>
                <div className="service-card">
                    <h2>Engine Cleaning</h2>
                    <p className="secondary-text">Starting at: <p>$80</p></p>
                    <p className="service-desc">The engine bay is usually overlooked and tricky to clean, but we can take care of it for you and leave yours looking like new.</p>
                    <Link to="engine-bay" className="readmore">
                        <p>Learn More</p>
                    </Link>
                </div>
            </section>

            <article className="reviews-container">
                <h2>Read through some of our 5 star reviews</h2>
                <Carousel className="review-carousel" infiniteLoop autoPlay showThumbs={false}>
                    <div>
                        <p className="review">Brenden answered the first phone call gave a quote over the phone, I did not have to bring the car anywhere. He provided a value and was on time and was extremely thorough. Did not attempt to upsell me and increase price, day of the appointment, like another Bonney Lake detailer did. Can't recommend Dirt-Less Detail enough. My wife's Jeep Cherokee looks new!</p>
                        <p className="reviewer">Darren Beatty</p>
                    </div>
                    <div>
                        <p className="review">Brought in my 12 Escalade and he worked his magic on both inside and outside. Brenden is very good at what he does, the vehicle looks amazing. better than it was when I bought it. Thank you so much for getting me into your schedule. I am Extremely pleased with the outcome of your services.</p>
                        <p className="reviewer">Rob Briese</p>
                    </div>
                    <div>
                        <p className="review">Bought new/used SUV for my wife and the kids. 2002 Cadillac Escalade it was pretty filthy inside and out. Made an appointment with Dirt-less for an interior deep cleaning. Also a cut and buff on the exterior. He brought back the original Cadillac elegance of the vehicle. I highly recommend him. I wish I could post the before and after pictures. High end quality work for a fair price. 5 stars for his work</p>
                        <p className="reviewer">Jeff Whitling</p>
                    </div>
                </Carousel>
            </article>

            <section className="serviceareas-container">
                <h2>Servicing most of the Pierce County and King County Area</h2>
                <p>As part of our simple and hassle free service, we can come to you, all we need is access to your vehicle and we'll get to work.</p>
            </section>
        </div>
    )
}