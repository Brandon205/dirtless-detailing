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

export default function Home() {
    return (
        <div className="App">
            <Head>
                <link rel="canonical" href="https://www.dirtlessdetailing.com/" />
            </Head>
            <div className="maincover" style={{backgroundImage: 'url(' + cover + ')' }}>
                <Image src={cover} layout="fill" objectFit='cover' alt="Cleaned Toyota Tundra" placeholder='blur' priority />
            </div>
            <header className="home-header">
                <div className='landing-div'>
                    <h1 className='title-top'>Your Bonney Lake <span className='title-bottom'>Detailing Specialists</span></h1>

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

                    <p className='dd-desc'>We also offer a <span className='special-package'>mobile</span> service free of charge on select packages!</p>

                    <a href="/Contact" className="quote-btn top-quote-btn">Get a Quote</a>

                    <a href="https://www.bbb.org/us/wa/bonney-lake/profile/auto-detailing/dirt-less-detailing-1296-1000135733/#sealclick" target="_blank" rel="nofollow"><img src="https://seal-alaskaoregonwesternwashington.bbb.org/seals/blue-seal-160-82-bbb-1000135733.png" style={{border: 0}} alt="Dirt-Less Detailing BBB Business Review" /></a>
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
                        <p className="review">My kids left a gal of milk in the back of my car, needless to say the nice warm weather it leaked all over and soon smelled horrid. He did a fantastic job, car smells and looks brand new, even got every hair out from my pups.  very happy I got his number as a referral from a friend.</p>
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
                        <p className="review">Brendan is a hard worker, on time, great work and attention to detail. Highly recommend</p>
                        <p className="reviewer">Terri E.</p>
                    </div>
                </Carousel>
            </article>
            <p>Check out more reviews on our <a style={{cursor: 'pointer'}} href="https://www.facebook.com/DirtLessDetailing/reviews">Facebook</a> page.</p>

            <section className="serviceareas-container">
                <h3>We are currently detailing in these cities:</h3>
                <p className='cities'>Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Federal Way, Orting, South Prairie, Black Diamond, Milton, Edgewood, and Graham.</p>
                <p>As part of our simple and hassle free service, you can come to us or we can come to you with select packages!</p>
            </section>
        </div>
    )
}
