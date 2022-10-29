import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

import Contact from '../utils/Contact';
import PopularServices from '../utils/PopularServices';
import OtherServices from '../utils/OtherServices';

import { MdOutlineLocalCarWash } from 'react-icons/md';
import { BiCertification } from 'react-icons/bi';
import { FaRegStar } from 'react-icons/fa';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import cover from '../public/imgs/cover.webp';

export default function Home() {
    return (
        <div className="App">
            <div className="maincover" style={{backgroundImage: 'url(' + cover + ')' }}>
                <Image src={cover} layout="fill" objectFit='cover' alt="Cleaned Toyota Tundra" priority />
            </div>
            <header className="home-header">
                <div className='contact-left-container'>
                    <h1 className='title-top'>Your Bonney Lake<br /><span className='title-bottom'>Detailing Specialists</span></h1>

                    <div className="header-icons-container">
                        <div>
                            <FaRegStar className='header-icon' />
                            <p className="header-desc">Plenty</p>
                            <span className='header-desc-span'>of 5 Star Reviews</span>
                        </div>
                        <div>
                            <MdOutlineLocalCarWash className='header-icon' />
                            <p className="header-desc">1200+</p>
                            <span className='header-desc-span'>Cars Washed</span>
                        </div>
                        <div>
                            <BiCertification className='header-icon' />
                            <p className="header-desc">7 Years</p>
                            <span className='header-desc-span'>Of Experience</span>
                        </div>
                    </div>

                    <p className='dd-desc'>We also offer a <span className='special-package'>mobile</span> service free of charge on select packages!</p>

                    <a href="/#popular-services" className="learn-btn top-learn-btn">Learn More</a>
                    <a href="/#contact" className="quote-btn top-quote-btn">Get a Quote</a>
                </div>
            </header>

            <Contact />

            <div id="popular-services" className='separator-container'>
                <h2 className="service-title">Popular Detailing Services</h2>
            </div>
            
            <PopularServices />

            <a href="/#contact" className="quote-btn main-quote-btn">Get a Quote</a>

            <div className='separator-container'>
                <h2 className='service-title'>COMBO DEALS</h2>
            </div>

            <OtherServices />

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
                <p>Check out more reviews on our <a style={{cursor: 'pointer', marginBottom: 16}} href="https://www.facebook.com/DirtLessDetailing/reviews">Facebook</a> page.</p>
            </article>

            <section className="serviceareas-container">
                <h2>We are currently servicing:</h2>
                <p className='cities'>Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Federal Way, Orting, South Prairie, Black Diamond, Milton, Edgewood, and Graham.</p>
                <p>As part of our simple and hassle free service, you can come to us or we can come to you with select packages!</p>
            </section>
        </div>
    )
}
