import React from 'react';
import '../App.css';

export default function Home() {
    return (
        <div className="App">
            <section>
                <h2>Your Pierce County Car Detailing Specialists</h2>
                <h5>Over 100+ 5-star reviews from out happy customers. From interior cleaning to paint correction and ceramic coatings. We can handle all your detailing needs.</h5>
                <button className="learn-btn">Learn More</button>
                <button className="quote-btn">Get Quote</button>
            </section>
            <article className="contact-container">
                <h3>Contact Us</h3>
                <p className="phone">(253) 252-9758</p>

                <h3>WORKING HOURS</h3>
                <p className="hours-p">Tue-Fri: 9 AM - 5 PM</p>
                <p className="hours-p">Saturday: 9 AM - 2 PM</p>
                <p className="hours-p">Sunday/Monday: Closed</p>

                <h3>LOCATION</h3>
                Pierce County Washington
            </article>
            <section className="popular-container">
                <h2>Popular Detailing Services</h2>

                <h3>Full Interior Cleaning</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                <p>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
                <p>sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className="readmore">Read More</button>
                <h3>Paint Correction</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                <p>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
                <p>sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className="readmore">Read More</button>
                <h3>Wash and Wax</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                <p>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
                <p>sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className="readmore">Read More</button>

                <button className="quote-btn">Get Quote</button>
            </section>

            <article className="otherservices-container">
                <h2>Our Other Services</h2>

                <div className="service-card">
                    <h4>Ceramic Coating</h4>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="readmore">Read More</button>
                </div>
                <div className="service-card">
                    <h4>Ceramic Coating</h4>
                    <p className="Premium Wash">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="readmore">Read More</button>
                </div>
                <div className="Engine Cleaning">
                    <h4>Ceramic Coating</h4>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="readmore">Read More</button>
                </div>
                <div className="Mini-Interior Detail">
                    <h4>Ceramic Coating</h4>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="readmore">Read More</button>
                </div>
                <div className="Smoke Odor Removal">
                    <h4>Ceramic Coating</h4>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="readmore">Read More</button>
                </div>
                <div className="Overspray Removal">
                    <h4>Ceramic Coating</h4>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="readmore">Read More</button>
                </div>
            </article>
        </div>
    )
}