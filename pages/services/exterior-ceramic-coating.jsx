import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { FaCar } from 'react-icons/fa';
import { BiCar } from 'react-icons/bi';
import { SiAdguard } from 'react-icons/si';
import { RiPaintFill } from 'react-icons/ri';

import cover from '../../public/imgs/pageimgs/ceramic/waterBeads.jpg';
import iglCircle from '../../public/imgs/iglcircle.jpg';
import kenzo from '../../public/imgs/kenzo.png';
import iglCoating from '../../public/imgs/pageimgs/homepage/iglCoating.png';
import ext1 from '../../public/imgs/pageimgs/ceramic/317953380_3245073689065810_496222385512149880_n.jpg';
import ext3 from '../../public/imgs/pageimgs/ceramic/organized1.jpg';
import ext4 from '../../public/imgs/pageimgs/ceramic/319282824_6026927310663439_4187208472627188697_n.jpg';
import ext5 from '../../public/imgs/pageimgs/ceramic/fenderDrops.jpg';

export default function ExtCoatings() {
    return (
        <section className="service-content-container bg-contact">
            <Head>
                <title>Exterior Ceramic Coatings | Dirt-Less Detailing</title>
                <meta property="og:title" content="Exterior Ceramic Coatings | Dirt-Less Detailing" />
                <meta name="description" content="Get a professionally installed Ceramic Coating through Dirt-Less Detailing to protect your vehicle from the always changing Washington weather." />
                <meta property="og:description" content="Get a professionally installed Ceramic Coating through Dirt-Less Detailing to protect your vehicle from the always changing Washington weather." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.dirtlessdetailing.com/services/exterior-ceramic-coating" />
                <meta property="og:image" content={cover.src} />
                <link rel="canonical" href="https://www.dirtlessdetailing.com/services/exterior-ceramic-coating" />
            </Head>
            <div className="cover">
                <Image src={cover} alt="Vehicle Exterior after paint correction and ceramic coating" layout="fill" objectFit='cover' placeholder='blur' priority quality={100} />
            </div>
            <div className="servicepage-header">
                <h1>Exterior Ceramic Coating</h1>
                <h2 className='page-subheading'>Get a 5 year Ceramic Coating professionally installed by us to protect your vehicle year-round.</h2>
                <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
                <p className='inline text-small'>
                    Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
                </p>
            </div>

            <div className="coating-container">
                <div className="coating-left">
                    <main className="service-main">
                        <h2 className='text-large'>What is a Ceramic Coating?</h2>
                        <div className="text-left">
                            <p>It is the absolute best way to protect your vehicle from the harsh weather we experience in Bonney Lake. Back in the day, wax was the cutting edge choice to enhance your vehicle's shine. It also protected your paint from external elements like rain, bird poop, dirt, tree sap, etc.</p>
                            <p>Now, with modern day technology, we have a far more durable and superior form of protection: ceramic/graphene coatings.</p>
                            <p>Unlike wax, you can't just simply wipe it on and off. The ceramic coating is a semi-permanent barrier that bonds to the vehicle's surface. It is commonly referred to as a “sacrificial” layer of protection. It will take the blow of the weathers elements like rain, dirt, and snow to better protect the paint underneath.</p>
                            <p>As an analogy, think of the Three Little Pigs. Wax is like the straw house, and ceramic coatings are like the brick house. Both offer protection from rain and dust, but one is far superior.</p>
                        </div>

                        <h2 className='text-large'>The benefits you get with a coating:</h2>
                        <p className='text-left'>There are a lot of coating companies that make some pretty big claims of what a coating can do. Although there is some truth to these claims, we don't like to oversell the coatings capabilities.</p>
                        <ul className='cities-ul'>
                            <li>Produces the most durable protection possible that lasts 5 years to a lifetime (With proper maintenance through us).</li>
                            <li>You only need to apply it once. (Not every couple of months like wax).</li>
                            <li>Creates a deep level of gloss that is not possible with other forms of protection like wax or sealant.</li>
                            <li>Provides unmatched hydrophobic properties that keeps your car cleaner, making it easier and more fun to wash.</li>
                        </ul>

                        <h2 className="text-large">Ceramic Coating Installation Facts</h2>
                        <div className="text-left">
                            <p>Before the coating is installed, your vehicle must first be properly prepped and corrected with one of our <a href="/detailing/correction" className='aside-link'>Paint Correction</a> services. If we apply the coating without the proper prep work, you won't get all of the benefits a ceramic coating can offer.</p>
                            <p>This is why you want a professional ceramic coating installer. Additionally, if it's not properly installed, you'll see a ton of smudges across your vehicle. This is what we call “high spots”. You'll see this when the coating was not properly applied and it was left to dry for too long without being wiped off.</p>
                            <p>As a general rule of thumb, the more durable the coating, the harder it is to install. For instance, a 1 year versus a 5 year coating. You have to understand the weather variables since that can play a major factor in the installation process.</p>
                            <p>Coatings react differently when it is humid, cold, or hot.  If you've been in Bonney Lake for an extended period of time, you'll notice that the weather is always changing. We do all of our coating installations at our shop location so we can control the working conditions.</p>
                        </div>

                        <h2 className="text-large">Common Myths About Ceramic Coatings</h2>
                        <div className="text-left">
                            <p>Yes, coatings are long-lasting and durable. That doesn't mean you can beat the snot out of your vehicle and think the coating will protect it.</p>
                            <p>It has its limitations and it's important to understand the limitations of what the ceramic coating can handle. Too many times we see customers overestimate the protection of the coating and are then disappointed when they see swirl marks in the paintwork.</p>
                            <p>The coating will not make your paint scratch-proof. When we say the coating will resist light swirls and scratches, we really mean very light swirls and scratches.</p>
                            <p>The coating will not protect your paint from rock chips whatsoever. No matter how many layers you apply of any protection, whether it's wax or ceramic coating, it cannot stop a rock hitting your vehicle.</p>
                            <p>The coating requires maintenance to prolong the durability. Just like many other things in life (like going to the dentist), if you don't care for the coating, it will degrade over time and not last its intended lifespan.</p>
                            <p>You have to properly wash, dry, and maintain the coating for maximum durability. A coating that was meant to last for 5 years can start to break down after 2 to 3 years if not maintained properly.</p>
                        </div>

                        <h2 className='text-large'>Professional Interior Coatings</h2>
                        <div className="text-left">
                            <p>Whether it's your kid spilling juice, or you spilling your morning coffee, we have all been there. Our interior coatings provide a barrier of protection and allow you time to wipe any spill up before it seeps in. Get more info on our <a href="/services/interior-ceramic-coating" className='aside-link'>Interior Coating</a> page.</p>
                        </div>

                        <br className='extra-space' />
                    </main>
                </div>

                <div className="coating-right">

                    <div className='aside-container'>
                        <div className='aside-container'>
                            <div className='service-aside addons-aside'>
                                <p className='extra-addons text-large'>Our Interior Coatings</p>
                                <hr className="contact-border" style={{ marginBottom: 16 }} />
                                <div className="aside-links">
                                    <div className="addon-container">
                                        <p className='addon-title'><a href="/services/interior-ceramic-coating" className='text-blue'>Fabric Coating</a></p>
                                        <p className='m-0'><span className="bold special-package">$75</span></p>
                                        <p className="addon-subtext">We will treat and protect all fabrics in the vehicle.</p>
                                    </div>
                                    <hr className='aside-border' />
                                    <div className="addon-container">
                                        <p className='addon-title'><a href="/services/interior-ceramic-coating" className='text-blue'>Leather Coating</a></p>
                                        <p className='m-0'><span className="bold special-package">$150</span></p>
                                        <p className="addon-subtext">We will treat and protect all leathers in the vehicle.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='aside-container'>
                        <div className='aside-container'>
                            <div className='service-aside addons-aside'>
                                <h4 className='text-large mb-0 mt-0'>Monthly Maintenance:</h4>
                                <hr className='aside-border' />
                                <p>The goal of our monthly maintenance is to keep your vehicle looking like new year around.</p>
                                <p>Every month you get a <a href="/services/dirtless-wash" className='aside-link'>Dirt-Less Wash</a> with a ceramic booster and a <a href='/services/full-interior-detail' className='aside-link'>Full Interior Detail</a>.</p>
                                <hr className='aside-border' />
                                <p className='text-large mb-0'>Monthly Maintenance Pricing:</p>
                                <div className='maintenance-costs'>
                                    <p>Small <span className='special-package'>$130</span></p>
                                    <p>Medium <span className='special-package'>$160</span></p>
                                    <p>Large <span className='special-package'>$190</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='aside-container'>
                        <div className='aside-container'>
                            <div className='service-aside addons-aside'>
                                <h4 className='text-large mb-0 mt-0'>Yearly Maintenance:</h4>
                                <hr className='aside-border' />
                                <p>• We will wash the whole vehicle top to bottom, remove and tar/sap, and do an iron decontamination treatment.</p>
                                <p>• Then we will super lightly clay bar and/or polish the vehicle, if needed.</p>
                                <p>• Finally we will top with a ceramic booster and apply another coat of ceramic to the windshield.</p>
                                <p>• BONUS: Keeping up with this will qualify you for our 5 year warranty on your Ceramic Coating.</p>
                                <hr className='aside-border' />
                                <p className='text-large mb-0'>Yearly Maintenance costs:</p>
                                <div className='maintenance-costs'>
                                    <p>Small <span className='special-package'>$200</span></p>
                                    <p>Medium <span className='special-package'>$250</span></p>
                                    <p>Large <span className='special-package'>$300</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='aside-container'>
                        <div className='aside-container'>
                            <div className='service-aside addons-aside'>
                                <h4 className='text-large mb-0 mt-0'>Re-coating Options:</h4>
                                <hr className='aside-border' />
                                <p>• Re-coat trim <span className='special-package'>$100</span></p>
                                <p>• Re-coat wheel faces <span className='special-package'>$150</span></p>
                            </div>
                        </div>
                    </div>

                    <div className='aside-container'>
                        <div className='aside-container'>
                            <div className='service-aside addons-aside contact-aside'>
                                <h4 className='mt-0'>Interested? Get in touch with us here, and let us know what we can do!</h4>
                                <a href="/Contact" className="quote-btn side-quote-btn">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div style={{ padding: 2 + 'rem' }}>
                <h2 className='coating-heading text-xl'>Protect Package</h2>
                <p className='package-desc subtext'>The Protect package will cover and protect the most essential parts of your car with a 5 year ceramic coating.</p>
                <div className='package-container'>
                    <div className='package-details'>
                        <RiPaintFill className='package-icon' />
                        <h4>Paint Covered</h4>
                        <p className='subtext'>All of the paint on the exterior will be coated with IGL's Kenzo Graphene 10H coating.</p>
                    </div>
                    <div className='package-details'>
                        <BiCar className='package-icon' />
                        <h4>Coat Windshield and Lights</h4>
                        <p className='subtext'>The windshield and lights are the 2 next most essential things after paint to coat when giving your vehicle a ceramic coating.</p>
                    </div>
                    <div className='package-details'>
                        <SiAdguard className='package-icon' />
                        <h4>Lifetime Warranty<span className='special-package'>*</span><br />or 5 years or 50,000 miles</h4>
                        <p className='subtext'>After your first coating if you follow through with our monthly maintenance your Ceramic coating has a lifetime guarantee through us.</p>
                    </div>
                </div>

                <br className='extra-space' />

                <h2 className='coating-heading text-xl'>Protect<span className='special-package'>+</span> Package</h2>
                <p className='package-desc subtext'>The Protect+ package will cover and protect your whole vehicle with a 5 year Ceramic Coating.</p>
                <div className='package-container'>
                    <div className='package-details'>
                        <RiPaintFill className='package-icon' />
                        <h4>Paint Covered</h4>
                        <p className='subtext'>All of the paint on the exterior will be coated with IGL's Kenzo Graphene 10H coating.</p>
                    </div>
                    <div className='package-details'>
                        <FaCar className='package-icon' />
                        <h4>Coat Trim, Glass, Lights, and Wheel Faces</h4>
                        <p className='subtext'>We will cover nearly the entire exterior of your vehicle, ensuring that it is completely protected all around.</p>
                    </div>
                    <div className='package-details'>
                        <SiAdguard className='package-icon' />
                        <h4>Lifetime Warranty<span className='special-package'>*</span><br />or 5 years or 50,000 miles</h4>
                        <p className='subtext'>Our Protect+ package also comes with a lifetime warranty if you follow through with our monthly maintenance.</p>
                    </div>
                </div>
                <p><span className='special-package'>*</span>Must follow maintenance procedures to qualify for our warranties.</p>

                <br className='extra-space' />

                <div>
                    <h3 className='pricing-title text-white'>Our Ceramic Coating Pricing</h3>
                    <h4 className='subtext'>*Pricing INCLUDES a Single Stage Paint Correction that we do before the coating, as long as the vehicle doesn't need extra correction beyond that.</h4>
                    <div className="pricing-container text-black">
                        <div className="pricing-card">
                            <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Small</strong>
                            <strong className='size'>Protect</strong>
                            <p className="pricing-price pricing-border">$1,000</p>
                            <strong className='size'>Protect<span className="special-package">+</span></strong>
                            <p className="pricing-price pricing-border">$1,500</p>
                            <p className="example-vehicle pricing-border">2-Door Coupes</p>
                            <p className="example-vehicle pricing-border">Single/Extended Cabs</p>
                            <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                        </div>
                        <div className="pricing-card">
                            <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Medium</strong>
                            <strong className='size'>Protect</strong>
                            <p className="pricing-price pricing-border">$1,200</p>
                            <strong className='size'>Protect<span className="special-package">+</span></strong>
                            <p className="pricing-price pricing-border">$1,700</p>
                            <p className="example-vehicle pricing-border">4 Door Vehicles</p>
                            <p className="example-vehicle pricing-border">Smaller SUV's</p>
                            <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                        </div>
                        <div className="pricing-card">
                            <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Large</strong>
                            <strong className='size'>Protect</strong>
                            <p className="pricing-price pricing-border">$1,400</p>
                            <strong className='size'>Protect<span className="special-package">+</span></strong>
                            <p className="pricing-price pricing-border">$1,900</p>
                            <p className="example-vehicle pricing-border">Larger Trucks</p>
                            <p className="example-vehicle pricing-border">Extra Large Vehicles</p>
                            <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                        </div>
                    </div>

                </div>

                <div id='faq'>
                    <h3 style={{ fontSize: 2 + 'em' }}>Ceramic Coating FAQ</h3>
                    <ul className='faq-ul'>
                        <li className='faq-li'>How long does it last?</li>
                        <li className='faq-p'>The paint coating should last 5 years, 50,000 miles, or a Lifetime<span className='special-package'>*</span> with our warranty. The coating on any trim, glass, lights, or wheels will last 1 year approximately.</li>

                        <li className='faq-li'>Can I still go through car washes?</li>
                        <li className='faq-p'>If you want to keep the ceramic coat in good condition and have it last as long as possible, you won't want to go through any car washes even touch-less ones.</li>

                        <li className='faq-li'>How should I wash my car then?</li>
                        <li className='faq-p'>For washing your coated vehicle you have a couple of options. Hand washing with our recommended products and techniques, or you can simply schedule monthly maintenance through us!</li>

                        <li className='faq-li'>How does the 5 year warranty work?</li>
                        <li className='faq-p'>If we do our yearly maintenance on the vehicle we guarantee that the ceramic coat will last 5 years or more.</li>

                        <li className='faq-li'>How does the Lifetime warranty work?</li>
                        <li className='faq-p'>Your vehicles paint coating is guaranteed for life as long as you are on our monthly maintenance schedule. If you ever wish to cancel monthly maintenance, the remainder of your 5 year 50,000 mile warranty you had before takes effect.</li>
                    </ul>
                </div>
            </div>

            <h4 className='text-large'>Some examples of our Exterior Coating work so far:</h4>
            <div className="examples-container">
                <div className="example-img">
                    <Zoom>
                        <Image style={{ borderRadius: 16 }} src={ext1} alt="Water beads on large surface" layout="responsive" objectFit='scale-down' placeholder='blur' />
                    </Zoom>
                </div>
                <div className="example-img">
                    <Zoom>
                        <Image style={{ borderRadius: 16 }} src={ext3} alt="Small water beads area" layout="responsive" objectFit="scale-down" placeholder='blur' />
                    </Zoom>
                </div>
                <div className="example-img">
                    <Zoom>
                        <Image style={{ borderRadius: 16 }} src={ext4} alt="Large water beads" layout="responsive" objectFit="scale-down" placeholder='blur' />
                    </Zoom>
                </div>
                <div className="example-img">
                    <Zoom>
                        <Image style={{ borderRadius: 16 }} src={ext5} alt="Water beads near hood of vehicle" layout="responsive" objectFit="scale-down" placeholder='blur' />
                    </Zoom>
                </div>
            </div>
            <br className='extra-space' />

            <h4 className='text-large'>Informational photos from IGL:</h4>
            <strong className='subtext'>Check out more from our Ceramic Coating provider <a href='https://iglcoatingsusa.com/' target='_blank' rel='noopener' className='aside-link'>IGL</a>.</strong>
            <div className='examples-container'>
                <div className='example-img'>
                    <Zoom>
                        <Image src={iglCircle} alt="What IGL coatings protect from circle" placeholder='blur' />
                    </Zoom>
                </div>
                <div className='example-img'>
                    <Zoom>
                        <Image src={iglCoating} alt="Igl protection example" placeholder='blur' />
                    </Zoom>
                </div>
                <div className='example-img'>
                    <Zoom>
                        <Image src={kenzo} alt="Kenzo graphene coating information" placeholder='blur' />
                    </Zoom>
                </div>
            </div>

            <br className='extra-space' />

            <div>
                <strong className='text-medium'>We'll help customers from all over get a ceramic coating on their vehicle, however, most of our customers come to our shop from these areas:</strong>
                <div style={{ display: 'grid', placeItems: 'center' }}>
                    <ul className='cities-ul'>
                        <li><a href='/ceramic-coating/bonney-lake' className='aside-link'>Bonney Lake</a></li>
                        <li><a href='/ceramic-coating/buckley' className='aside-link'>Buckley</a></li>
                        <li><a href='/ceramic-coating/sumner' className='aside-link'>Sumner</a></li>
                        <li><a href='/ceramic-coating/enumclaw' className='aside-link'>Enumclaw</a></li>
                        <li><a href='/ceramic-coating/puyallup' className='aside-link'>Puyallup</a></li>
                        <li><a href='/ceramic-coating/federal-way' className='aside-link'>Federal Way</a></li>
                        <li><a href='/ceramic-coating/orting' className='aside-link'>Orting</a></li>
                        <li><a href='/ceramic-coating/south-prairie' className='aside-link'>South Prairie</a></li>
                        <li><a href='/ceramic-coating/black-diamond' className='aside-link'>Black Diamond</a></li>
                        <li><a href='/ceramic-coating/milton' className='aside-link'>Milton</a></li>
                        <li><a href='/ceramic-coating/edgewood' className='aside-link'>Edgewood</a></li>
                        <li><a href='/ceramic-coating/graham' className='aside-link'>Graham</a></li>
                    </ul>
                </div>
            </div>

            <br className='extra-space' />

        </section>
    )
}
