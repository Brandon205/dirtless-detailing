import React from 'react';
import '../App.css';

export default function Home() {
    return (
        <div className="App">
            <section>
                <h2>Your Pierce County Car Detailing Specialists</h2>
                <h4 className='dd-desc'>Over 100+ 5-star reviews from our happy customers. From interior cleaning to paint correction and ceramic coatings. We can handle all your detailing needs.</h4>
                <button className="learn-btn">Learn More</button>
                <button className="quote-btn">Get Quote</button>
            </section>
            <section className="contact-container">
                <h3>Contact Us</h3>
                <p className="phone">(253) 252-9758</p>

                <h3>WORKING HOURS</h3>
                <p className="hours-p">Tue-Fri: 9 AM - 5 PM</p>
                <p className="hours-p">Saturday: 9 AM - 2 PM</p>
                <p className="hours-p">Sunday/Monday: Closed</p>

                <h3>LOCATION</h3>
                Pierce County Washington
            </section>
            <section className="popular-container">
                <h2>Popular Detailing Services</h2>

                <div className="popular-services-card">
                    <h3>Full Interior Cleaning</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                    <p>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
                    <p>sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button className="readmore">Read More</button>
                </div>
                <div className="popular-services-card">
                    <h3>Paint Correction</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                    <p>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
                    <p>sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button className="readmore">Read More</button>
                </div>
                <div className="popular-services-card">
                    <h3>Wash and Wax</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                    <p>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
                    <p>sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button className="readmore">Read More</button>
                </div>

                <button className="quote-btn">Get Quote</button>
            </section>

            <section className="otherservices-container">
                <h2>Our Other Services</h2>

                <div className="service-card">
                    <h3>Ceramic Coating</h3>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="readmore">Read More</button>
                </div>
                <div className="service-card">
                    <h3>Premium Wash</h3>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="readmore">Read More</button>
                </div>
                <div className="service-card">
                    <h3>Engine Cleaning</h3>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="readmore">Read More</button>
                </div>
                <div className="service-card">
                    <h3>Mini-Interior Detail</h3>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="readmore">Read More</button>
                </div>
                <div className="service-card">
                    <h3>Smoke Odor Removal</h3>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="readmore">Read More</button>
                </div>
            </section>
            <section className="serviceareas-container">
                <h2>Servicing the Pierce County and King County Area</h2>
                <p>We can come to you, all we need is access to your vehicle and we're ready to work. Simple and Hassle Free</p>
            </section>
        </div>
    )
}