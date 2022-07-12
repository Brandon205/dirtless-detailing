import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Home() {
    return (
        <div className="App">
            <section>
                <h2>Your Pierce County Car Detailing Specialists</h2>
                <h4 className='dd-desc'>Plenty of 5-star reviews from the customers we've served. We will do Interiors, Exteriors, Paint Correction, and much more. We will have your car looking brand new.</h4>
                <button className="learn-btn">Learn More</button>
                <button className="quote-btn">Get a Quote</button>
            </section>
            <section className="contact-container">
                <h3>Contact Us</h3>
                <a href="tel:2532529758" className="contact-link">(253) 252-9758</a>

                <h3>WORKING HOURS</h3>
                <p className="hours-p">Monday - Sunday: 8 AM - 8 PM</p>

                <h3>LOCATION</h3>
                {/* <p>9305 205th Ave E Bonney Lake Washington</p> */}
                <a href="https://www.google.com/maps/place/9305+205th+Ave+E,+Bonney+Lake,+WA+98391/@47.172835,-122.1589741,17z/data=!3m1!4b1!4m5!3m4!1s0x5490faeb8aa2e3d7:0xe53c2e7cb4aa7549!8m2!3d47.1728314!4d-122.1567854" className="contact-link">9305 205th Ave E Bonney Lake Washington</a>
            </section>
            <section className="popular-container">
                <h2>Popular Detailing Services</h2>

                <div className="popular-services-card">
                    <h3 className="popular-service-title">Full Interior Cleaning with Extraction</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                    <p>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
                    <p>sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button className="readmore">Read More</button>
                </div>
                <div className="popular-services-card">
                    <h3 className="popular-service-title">Two Stage Paint Correction</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                    <p>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
                    <p>sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button className="readmore">Read More</button>
                </div>
                <div className="popular-services-card">
                    <h3 className="popular-service-title">Premium Dirt-less Wash</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                    <p>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
                    <p>sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button className="readmore">Read More</button>
                </div>

            </section>

            <button className="quote-btn">Get a Quote</button>

            <section className="otherservices-container">
                <h2>Our Other Services</h2>

                <h3>INTERIOR CLEANING</h3>
                <div className="service-card">
                    <h3>Full Interior without Extraction</h3>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="readmore">Read More</button>
                </div>
                <div className="service-card">
                    <h3 className="popular-service-title">Full Interior with Extraction</h3>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="readmore">Read More</button>
                </div>
                <div className="service-card">
                    <h3>Smoker Car/Bio/Mold or other Extreme Condition Cleaning</h3>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="readmore">Read More</button>
                </div>
                <div className="service-card">
                    <h3>Headliners</h3>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="readmore">Read More</button>
                </div>

                <h3>EXTERIOR CORRECTION</h3>
                <div className="service-card">
                    <h3>Single Stage Paint Correction</h3>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="readmore">Read More</button>
                </div>
                <div className="service-card">
                    <h3 className="popular-service-title">Two Stage Paint Correction</h3>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="readmore">Read More</button>
                </div>
                <div className="service-card">
                    <h3>Glass Polishing</h3>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="readmore">Read More</button>
                </div>
                <div className="service-card">
                    <h3>Waterspot and Overspray Removal</h3>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="readmore">Read More</button>
                </div>

                <h3>EXTERIOR CLEANING</h3>
                <div className="service-card">
                    <h3>Dirt-less Wash</h3>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="readmore">Read More</button>
                </div>
                <div className="service-card">
                    <h3 className="popular-service-title">Premium Dirt-less Wash</h3>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="readmore">Read More</button>
                </div>
                <div className="service-card">
                    <h3>Engine Cleaning</h3>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="readmore">Read More</button>
                </div>
            </section>
            <section className="serviceareas-container">
                <h2>Servicing most of the Pierce County and King County Area</h2>
                <p>As part of our simple and hassle free service, we can come to you, all we need is access to your vehicle and we'll get to work.</p>
            </section>
        </div>
    )
}