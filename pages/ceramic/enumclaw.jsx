import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import cover from '../../public/imgs/pageimgs/exterior/IMG_20211103_105855.jpg';
import ext1 from '../../public/imgs/pageimgs/ceramic/317895587_701820004796038_115520810281779526_n.jpg';
import ext2 from '../../public/imgs/pageimgs/ceramic/317941187_811122646616266_4791919094544331114_n.jpg';
import ext3 from '../../public/imgs/pageimgs/ceramic/317953380_3245073689065810_496222385512149880_n.jpg';
import ext4 from '../../public/imgs/pageimgs/ceramic/318206630_688872332864156_6250333864852484039_n.jpg';
import ext5 from '../../public/imgs/pageimgs/ceramic/organized1.jpg';
import ext6 from '../../public/imgs/pageimgs/ceramic/318668138_534490881683360_5498452884377282120_n.jpg';
import ext7 from '../../public/imgs/pageimgs/ceramic/319282824_6026927310663439_4187208472627188697_n.jpg';
import ext8 from '../../public/imgs/pageimgs/ceramic/fenderDrops.jpg';

export default function enumclaw() {
    return (
        <div>
            <Head>
                <title>Ceramic Coating in Enumclaw | Dirt-Less Detailing</title>
                <meta property="og:title" content="Ceramic Coating in Enumclaw | Dirt-Less Detailing" />
                <meta name="description" content="Want a ceramic coating to protect your car in Enumclaw? Check out our options and offers on Graphene coatings here." />
                <meta property="og:description" content="Want a ceramic coating to protect your car in Enumclaw? Check out our options and offers on Graphene coatings here." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.dirtlessdetailing.com/ceramic/enumclaw" />
                <link rel="canonical" href="https://www.dirtlessdetailing.com/ceramic/enumclaw" />
            </Head>
            <div className="cover">
                <Image src={cover} alt="Water beading off of a ceramic coated car" layout="fill" objectFit='cover' placeholder='blur' priority />
            </div>
            <div className="servicepage-header">
                <h1>Kenzo Ceramic Coating Installation in Enumclaw Washington</h1>
                <h2>5-year IGL Graphene Coatings</h2>
                <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
                <p className='inline text-small'>
                    Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
                </p>
            </div>
            
            <main className="location-main">
                <h2 className='text-large'>Professional Ceramic Coatings in Enumclaw Washington.</h2>
                <div className="text-left">
                    <p>Check out our main <a href="/detailing/ceramic" className='aside-link'>Ceramic</a> page for all the information you need on our ceramic coatings. For the best results on your ceramic coat we will have you drop your car off at our shop location in Bonney Lake.</p>
                    <p>One of the first things we do to your car is a full <a href="/services/SinglePC" className='aside-link'>Single Stage Paint Correction</a> to clean and prep your vehicle. For that service we also like to have our customers bring their vehicles to us.</p>
                    <p>Why? We want a controlled environment when applying a ceramic coat. At our shop we have lighting and temperature controls. This way we can keep an optimal temperature and the lighting helps us see and fix any imperfections on the paint.</p>
                    <p>Our shop is about 20 minutes away from most of Enumclaw, once there you are free to go wherever or stick around while we work.</p>
                </div>

                <br className='extra-space' />

                <h2 className='text-large'>Why get a Ceramic Coating?</h2>
                <p className='text-left'>Here's a list of some of the benefits to getting a ceramic coating on your car we have more listed on our <a href="/detailing/ceramic" className='aside-link'>ceramic</a> page:</p>
                <ul className='cities-ul'>
                    <li>Lasts up to 5 years or a lifetime (with proper maintenance through us).</li>
                    <li>Hyrophobic</li>
                    <li>Easy to Wash</li>
                    <li>Easier to maintain</li>
                    <li>No need to spend time waxing your car each wash</li>
                    <li>Gives paint a glossy finish</li>
                    <li>Light layer of protection against the environment</li>
                </ul>

                <br className='extra-space' />

                <h2 className='text-large'>Professional Interior Coatings in Enumclaw Washington</h2>
                <div className="text-left">
                    <p>Whether it's your kid spilling juice, or you spilling your morning coffee, we have all been there. Our interior coatings provide a barrier of protection and allow you time to wipe any spill up before it seeps in. Get more info <a href="/services/IntCoatings" className='aside-link'>here</a>.</p>
                </div>

                <br className='extra-space' />
            </main>

            <div className='only-bg'>
                <h3 className='pricing-title text-black'>Our Ceramic Coating Pricing</h3>
                <strong className='pricing-subtext'>*Pricing INCLUDES a Single Stage Paint Correction that we do before the coating, as long as the vehicle doesn't need extra correction beyond that.</strong>
                <div className="pricing-container text-black">
                    <div className="pricing-card">
                        <strong className='size' style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Small</strong>
                        <strong className='size'>Protect</strong>
                        <p className="pricing-price pricing-border">$1,000</p>
                        <strong className='size'>Protect<span className="special-package">+</span></strong>
                        <p className="pricing-price pricing-border">$1,500</p>
                        <p className="example-vehicle pricing-border">2-Door Coupes</p>
                        <p className="example-vehicle pricing-border">Single/Extended Cabs</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                    <div className="pricing-card">
                        <strong className='size' style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Medium</strong>
                        <strong className='size'>Protect</strong>
                        <p className="pricing-price pricing-border">$1,200</p>
                        <strong className='size'>Protect<span className="special-package">+</span></strong>
                        <p className="pricing-price pricing-border">$1,700</p>
                        <p className="example-vehicle pricing-border">4 Door Vehicles</p>
                        <p className="example-vehicle pricing-border">Smaller SUV's</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                    <div className="pricing-card">
                        <strong className='size' style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Large</strong>
                        <strong className='size'>Protect</strong>
                        <p className="pricing-price pricing-border">$1,400</p>
                        <strong className='size'>Protect<span className="special-package">+</span></strong>
                        <p className="pricing-price pricing-border">$1,900</p>
                        <p className="example-vehicle pricing-border">Larger Trucks</p>
                        <p className="example-vehicle pricing-border">Extra Large Vehicles</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                </div>
                <strong className='pricing-subtext'>For more detailed information check out our main <a href="/detailing/ceramic" className='aside-link'>Ceramic</a> page.</strong>

            </div>

            <div className='only-bg'>
                <h3 className='pricing-title text-black'>Our Interior Coating Pricing</h3>
                <strong className='pricing-subtext'>*Pricing does NOT include an <a href="/services/FullIntEx" className='aside-link'>Interior Cleaning</a>, which you will need to add to get a coating.</strong>
                <div className='pricing-container text-black'>
                    <div className="pricing-card">
                        <strong className='size'>Fabric Coating</strong>
                        <p className="pricing-price pricing-border">$75</p>    
                        <p className="example-vehicle pricing-border">Any Size Vehicle</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                    <div className="pricing-card">
                        <strong className='size'>Leather Coating</strong>
                        <p className="pricing-price pricing-border">$150</p>
                        <p className="example-vehicle pricing-border">Any Size Vehicle</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                </div>
            </div>

            <div className='locationpage-section no-bg'>
                <div>
                    <h3 className='text-large'>Exterior Ceramic Coating FAQ</h3>
                    <ul className='faq-ul'>
                        <li className='faq-li'>How long does it last?</li>
                        <li className='faq-p text-black'>The paint coating should last 5 years, 50,000 miles, or a Lifetime<span className='special-package'>*</span> with our warranty. The coating on any trim, glass, lights, or wheels will last 1 year approximately.</li>

                        <li className='faq-li'>Can I still go through car washes?</li>
                        <li className='faq-p text-black'>If you want to keep the ceramic coat in good condition and have it last as long as possible, you won't want to go through any car washes even touch-less ones.</li>

                        <li className='faq-li'>How should I wash my car then?</li>
                        <li className='faq-p text-black'>For washing your coated vehicle you have a couple of options. Hand washing with our recommended products and techniques, or you can simply schedule monthly maintenance through us!</li>

                        <li className='faq-li'>How does the 5 year warranty work?</li>
                        <li className='faq-p text-black'>If we do our yearly maintenance on the vehicle we guarantee that the ceramic coat will last 5 years or more.</li>

                        <li className='faq-li'>How does the Lifetime warranty work?</li>
                        <li className='faq-p text-black'>Your vehicles paint coating is guaranteed for life as long as you are on our monthly maintenance schedule. If you ever wish to cancel monthly maintenance, the remainder of your 5 year 50,000 mile warranty you had before takes effect.</li>
                    </ul>
                </div>
            </div>

            <div>
                <h3 className='text-large'>Check out some of the results from our Interior and Exterior Ceramic services.</h3>
                <div className="gallery-container" style={{width: 70 + 'vw'}}>
                    <Zoom>
                        <div className='gallery-image-div'>
                            <Image style={{borderRadius: 16}} alt='Side view of seat after leather ceramic coating' objectFit="cover" src={ext1} loading="lazy" placeholder='blur' />
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='gallery-image-div'>
                            <Image style={{borderRadius: 16}} alt='Front view of seat after leather ceramic coating' objectFit="cover" src={ext2} loading="lazy" placeholder='blur' />
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='gallery-image-div'>
                            <Image style={{borderRadius: 16}} alt='Water beads in a large area' objectFit="cover" src={ext3} loading="lazy" placeholder='blur' />
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='gallery-image-div'>
                            <Image style={{borderRadius: 16}} alt='Large water beads near edge of car' objectFit="cover" src={ext4} loading="lazy" placeholder='blur' />
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='gallery-image-div'>
                            <Image style={{borderRadius: 16}} alt='Small water beads on flat surface of vehicle' objectFit="cover" src={ext5} loading="lazy" placeholder='blur' />
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='gallery-image-div'>
                            <Image style={{borderRadius: 16}} alt='Larger water beads on a ceramic coated vehicle' objectFit="cover" src={ext6} loading="lazy" placeholder='blur' />
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='gallery-image-div'>
                            <Image style={{borderRadius: 16}} alt='Ceramic coating making large water droplets on vehicle' objectFit="cover" src={ext7} loading="lazy" placeholder='blur' />
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='gallery-image-div'>
                            <Image style={{borderRadius: 16}} alt='Smaller water beads near edge of vehicle' objectFit="cover" src={ext8} loading="lazy" placeholder='blur' />
                        </div>
                    </Zoom>
                </div>
            </div>
            <a href="/Contact" className="quote-btn location-quote-btn">Get a Quote Today!</a>
        </div> 
    )
}
