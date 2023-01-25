import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { FaCar } from 'react-icons/fa';
import { BiCar, BiLinkExternal } from 'react-icons/bi';
import { SiAdguard } from 'react-icons/si';
import { RiPaintFill } from 'react-icons/ri';
import ReactPlayer from 'react-player/lazy'; 

import cover from '../../public/imgs/pageimgs/ceramic/waterBeads.jpg';
import iglCircle from '../../public/imgs/iglcircle.jpg';
import kenzo from '../../public/imgs/kenzo.png';
import iglCoating from '../../public/imgs/pageimgs/homepage/iglCoating.png';
import ext1 from '../../public/imgs/pageimgs/ceramic/317953380_3245073689065810_496222385512149880_n.jpg';
import ext3 from '../../public/imgs/pageimgs/ceramic/organized1.jpg';
import ext4 from '../../public/imgs/pageimgs/ceramic/319282824_6026927310663439_4187208472627188697_n.jpg';

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
                <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "http://schema.org",
                        "@type": "Product",
                        "name": "Exterior Ceramic Coating",
                        "brand": "Dirt-Less Detailing",
                        "description": "Protect and enhance your vehicle's paint with our professional ceramic coating service. Our team at Dirt-Less Detailing uses top-quality products to provide long-lasting protection and a glossy finish for your car. Contact us to learn more and schedule your ceramic coating service today.",
                        "image": "${cover.src}",
                        "url": "https://www.dirtlessdetailing.com/services/exterior-ceramic-coating/",
                        "offers": [
                            {
                                "@type": "Offer",
                                "priceCurrency": "USD",
                                "price": "1000",
                                "priceSpecification": {
                                    "@type": "PriceSpecification",
                                    "priceCurrency": "USD",
                                    "price": "1000",
                                    "minPrice": "1000",
                                    "maxPrice": "1400"
                                },
                                "availability": "http://schema.org/InStock",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Ceramic Coating Protect Package",
                                    "serviceType": "Ceramic Coating",
                                    "areaServed": {
                                        "@type": "Place",
                                        "address": {
                                            "@type": "PostalAddress",
                                            "addressLocality": "Bonney Lake",
                                            "addressRegion": "WA",
                                            "postalCode": "99391",
                                            "streetAddress": "9305 205th Ave E"
                                        }
                                    },
                                    "providerMobility": "static"
                                }
                            },
                            {
                                "@type": "Offer",
                                "priceCurrency": "USD",
                                "price": "1500",
                                "priceSpecification": {
                                    "@type": "PriceSpecification",
                                    "priceCurrency": "USD",
                                    "price": "1500",
                                    "minPrice": "1500",
                                    "maxPrice": "1900"
                                },
                                "availability": "http://schema.org/InStock",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Ceramic Coating Protect+ Package",
                                    "serviceType": "Ceramic Coating",
                                    "areaServed": {
                                        "@type": "Place",
                                        "address": {
                                            "@type": "PostalAddress",
                                            "addressLocality": "Bonney Lake",
                                            "addressRegion": "WA",
                                            "postalCode": "99391",
                                            "streetAddress": "9305 205th Ave E"
                                        }
                                    },
                                    "providerMobility": "static"
                                }
                            }
                        ]
                    }`,
                }} />
            </Head>
            <div className="cover">
                <Image src={cover} alt="Vehicle Exterior after paint correction and ceramic coating" layout="fill" objectFit='cover' placeholder='blur' priority quality={100} />
            </div>
            <div className="servicepage-header">
                <h1>Exterior Ceramic Coating</h1>
                <h2 className='page-subheading'>Get a professionally installed 5 year Ceramic Coating professionally to protect your vehicle year-round.</h2>
                <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
                <p className='inline text-small'>
                    Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
                </p>
            </div>

            <div className="process-container">
                <div>
                    <main className="service-main">
                        <div className="service-explain">
                            <div className="text-left">
                                <h2 className='text-large'>What is a Ceramic Coating?</h2>
                                <p>It is the absolute best way to protect your vehicle from the harsh weather we experience in Bonney Lake. Back in the day, wax was the cutting edge choice to enhance your vehicle's shine. It also protected your paint from external elements like rain, bird poop, dirt, tree sap, etc.</p>
                                <p>Now, with modern day technology, we have a far more durable and superior form of protection: ceramic/graphene coatings.</p>
                                <p>Unlike wax, you can't just simply wipe it on and off. The ceramic coating adheres to the surface of the car and creates a semi-permanent barrier. It is frequently described as a "sacrificial" layer of protection. Rain, debris, and other weather conditions will be absorbed by it, better protecting the paint underneath.</p>
                                <p>As an analogy, think of the Three Little Pigs. Wax is like the straw house, and ceramic coatings are like the brick house. Both offer protection from rain and dust, but one is far superior.</p>
                            </div>
                            <div className='service-image'>
                                <Zoom>
                                    <Image style={{ borderRadius: 16 }} src={ext1} alt="Water beads on large surface" layout="responsive" objectFit='scale-down' placeholder='blur' />
                                </Zoom>
                            </div>
                        </div>

                        <div className="service-explain">
                            <div className="service-image">
                                <Zoom>
                                    <Image style={{ borderRadius: 16 }} src={ext3} alt="Small water beads area" layout="responsive" objectFit="scale-down" placeholder='blur' />
                                </Zoom>
                            </div>
                            <div className="text-left">
                                <h2 className='text-large'>The benefits you get with a coating:</h2>
                                <p className='text-left'>There are a lot of coating companies that make some pretty big claims of what a coating can do. We don't like to use most of these claims and oversell what the ceramic coatings can do and how long they can last.</p>
                                <ul className='cities-ul'>
                                    <li>Produces durable protection possible that can last 5 years to a lifetime* (With our monthly maintenance).</li>
                                    <li>Only one application is needed. (Not every couple of washes like normal wax protection).</li>
                                    <li>Creates a deep level of gloss that is not possible with other forms of protection like wax or sealant.</li>
                                    <li>Produces a deep level of gloss that is unmatched by other types of protection, such as a wax or sealant.</li>
                                    <li>Offers unparalleled hydrophobic qualities that keep your vehicle clean and makes washing it simpler, and more fun.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="service-explain">
                            <div className="text-left">
                                <h2 className="text-large">Ceramic Coating Installation Info</h2>
                                <p>Your car must first be correctly prepared and corrected using one of our <a href="/detailing/correction" className='aside-link'>Paint Correction</a> services before the coating is applied. You won't get the full range of advantages that a ceramic coating can provide if we apply it without doing the necessary preparation work. </p>
                                <p>For this reason, you should hire a qualified installer of ceramic coating, like us. Additionally, if it's not applied correctly, your car will have a lot of smudges in the end. We refer to these as "high spots." You'll notice this if the coating was improperly applied and allowed to dry for an excessive amount of time without being removed.</p>
                                <p>Generally speaking, the harder it is to install a coating the more durable it is. One year vs five years, for example. You must also be aware of the weather factors because they might significantly affect the installation process. </p>
                                <p>When it's hot, cold, or humid, coatings respond differently. If you've spent much time in Bonney Lake, you've probably noticed that the weather is always fluctuating. We complete every coating installation in our shop, where we have complete control over the working environment. </p>
                            </div>
                            <div className="service-image">
                                <Zoom>
                                    <Image style={{ borderRadius: 16 }} src={ext4} alt="Large water beads" layout="responsive" objectFit="scale-down" placeholder='blur' />
                                </Zoom>
                            </div>
                        </div>

                        <div className="service-explain">
                            <div className="example-img">
                                <ReactPlayer width={280} height={487} url='https://res.cloudinary.com/brandon205/video/upload/v1674493877/Dirt-Less%20Detailing/Videos/received_1200318400918064_3_qteejy.mp4' loop muted playing />
                            </div>
                            <div className="text-left">
                                <h2 className="text-large">Common Ceramic Coating Myths</h2>
                                <p>Yes, coatings are robust and long-lasting. This does not imply that you may abuse your car and assume the coating will keep it safe. </p>
                                <p>It has its limitations, and it's critical to be aware of what the ceramic coating is capable of. Customers frequently overestimate the coating's level of protection and are disappointed when swirl marks appear in the paint. </p>
                                <p>Your paint will not become scratch-proof due to the coating. We mean very light swirls and scratches when we say the coating will resist light swirls and scratches. </p>
                                <p>Your paint isn't protected from rock chips by the coating. No amount of wax or ceramic coating will be able to prevent a rock from striking and potentially damaging your car.</p>
                                <p>To increase the coating's durability, proper maintenance is needed. If you don't take care of the coating, it will deteriorate over time and not have the intended lifespan, just like many other things in life (like visiting the dentist).</p>
                                <p>For best durability, you must <a href="/services/dirtless-wash" className='aside-link'>wash</a>, dry, and preserve the coating appropriately (either through us or by following specific steps provided by us). If not properly maintained, a coating that was designed to last for five years may begin to degrade after two to three years.</p>
                            </div>
                        </div>

                        <h2 className='text-large'>Professional Interior Coatings <a href='/services/interior-ceramic-coating' className='aside-link'><BiLinkExternal /></a></h2>
                        <div className="text-left">
                            <p>Whether it's your kid spilling juice, or you spilling your morning coffee, we have all been there. Our interior coatings provide a barrier of protection and allow you time to wipe any spill up before it seeps in. Get more info on our <a href="/services/interior-ceramic-coating" className='aside-link'>Interior Coating</a> page.</p>
                        </div>

                        <div id='faq'>
                            <h3 style={{ fontSize: 2 + 'em' }}>Ceramic Coating FAQ</h3>
                            <ul className='faq-ul'>
                                <li className='faq-li'>How long does it last?</li>
                                <li className='faq-p'>The paint coating should last 5 years, 50,000 miles, or a Lifetime<span className='special-package'>*</span> with our warranty. The coating on any trim, glass, lights, or wheels will last 1 year approximately.</li>

                                <li className='faq-li'>Can I still go through car washes?</li>
                                <li className='faq-p'>If you want to keep the ceramic coat in good condition and have it last as long as possible, you won't want to go through any car washes even the touch-less ones.</li>

                                <li className='faq-li'>How should I wash my car then?</li>
                                <li className='faq-p'>For washing your coated vehicle you have a couple of options. We recommend scheduling monthly maintenance through us especially if you get our Protect+ Package. Or we can give you a run down on our techniques and recommend you some products to use to prolong the life of your ceramic coating!</li>

                                <li className='faq-li'>How does the 5 year warranty work?</li>
                                <li className='faq-p'>If we do our yearly maintenance on the vehicle we guarantee that the ceramic coat will last 5 years or more.</li>

                                <li className='faq-li'>How does the Lifetime warranty work?</li>
                                <li className='faq-p'>Your vehicles paint coating is guaranteed for life as long as you are on our monthly maintenance schedule. If you ever wish to cancel monthly maintenance, the remainder of your 5 year 50,000 mile warranty you had before takes effect.</li>
                            </ul>
                        </div>
                    </main>

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

                        <h3 className='pricing-title text-white'>Our Monthly/Yearly Maintenance Pricing</h3>
                        <h4 className='subtext'>The goal of our monthly maintenance is to keep your vehicle looking like new year-round. Every month you will get a full <a href="/services/dirtless-wash" className='aside-link'>Dirt-Less Wash</a> and a <a href='/services/full-interior-detail' className='aside-link'>Full Interior Detail</a>.</h4>
                        <h4 className='subtext'>Our yearly service goes into far more detail and will: • Wash the entire vehicle • Iron decontamination treatment • Top the vehicle off with a ceramic booster • Apply a new coat of ceramic to the windshield.</h4>
                        <div className="pricing-container text-black">
                            <div className="pricing-card">
                                <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Small</strong>
                                <strong className='size'>Monthly</strong>
                                <p className="pricing-price pricing-border">$130</p>
                                <strong className='size'>Yearly</strong>
                                <p className="pricing-price pricing-border">$200</p>
                                <p className="example-vehicle pricing-border">2-Door Coupes</p>
                                <p className="example-vehicle pricing-border">Single/Extended Cabs</p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                            <div className="pricing-card">
                                <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Medium</strong>
                                <strong className='size'>Monthly</strong>
                                <p className="pricing-price pricing-border">$160</p>
                                <strong className='size'>Yearly</strong>
                                <p className="pricing-price pricing-border">$250</p>
                                <p className="example-vehicle pricing-border">4 Door Vehicles</p>
                                <p className="example-vehicle pricing-border">Smaller SUV's</p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                            <div className="pricing-card">
                                <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Large</strong>
                                <strong className='size'>Monthly</strong>
                                <p className="pricing-price pricing-border">$190</p>
                                <strong className='size'>Yearly</strong>
                                <p className="pricing-price pricing-border">$300</p>
                                <p className="example-vehicle pricing-border">Larger Trucks</p>
                                <p className="example-vehicle pricing-border">Extra Large Vehicles</p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                        </div>

                        <h3 className="pricing-title text-white">Exterior Re-coating Options</h3>
                        <h4 className='subtext'>Our re-coating options if you have had a ceramic coating done through us.</h4>
                        <div className="pricing-container text-black">
                            <div className="pricing-card">
                                <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Re-coat All Vehicle Trim</strong>
                                <p className="pricing-price">$100</p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                            <div className="pricing-card">
                                <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Re-coat Wheel Faces</strong>
                                <p className="pricing-price">$150</p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
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
                                <li><a href='/ceramic-coating/bonney-lake' className='aside-link'>Bonney Lake</a><FaMapMarkerAlt /></li>
                                <li><a href='/ceramic-coating/buckley' className='aside-link'>Buckley</a><FaMapMarkerAlt /></li>
                                <li><a href='/ceramic-coating/sumner' className='aside-link'>Sumner</a><FaMapMarkerAlt /></li>
                                <li><a href='/ceramic-coating/lake-tapps' className='aside-link'>Lake Tapps</a><FaMapMarkerAlt /></li>
                                <li><a href='/ceramic-coating/enumclaw' className='aside-link'>Enumclaw</a><FaMapMarkerAlt /></li>
                                <li><a href='/ceramic-coating/puyallup' className='aside-link'>Puyallup</a><FaMapMarkerAlt /></li>
                                <li><a href='/ceramic-coating/tehaleh' className='aside-link'>Tehaleh</a><FaMapMarkerAlt /></li>
                                <li><a href='/ceramic-coating/federal-way' className='aside-link'>Federal Way</a><FaMapMarkerAlt /></li>
                                <li><a href='/ceramic-coating/orting' className='aside-link'>Orting</a><FaMapMarkerAlt /></li>
                                <li><a href='/ceramic-coating/south-prairie' className='aside-link'>South Prairie</a><FaMapMarkerAlt /></li>
                                <li><a href='/ceramic-coating/black-diamond' className='aside-link'>Black Diamond</a><FaMapMarkerAlt /></li>
                                <li><a href='/ceramic-coating/milton' className='aside-link'>Milton</a><FaMapMarkerAlt /></li>
                                <li><a href='/ceramic-coating/edgewood' className='aside-link'>Edgewood</a><FaMapMarkerAlt /></li>
                                <li><a href='/ceramic-coating/graham' className='aside-link'>Graham</a><FaMapMarkerAlt /></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <br className='extra-space' />

        </section>
    )
}
