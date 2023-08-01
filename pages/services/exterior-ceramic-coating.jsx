import { useState } from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { BiLinkExternal } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
import PricingComponent from '../../utils/PricingComponent';

export default function ExtCoatings() {
    const [slide, setSlide] = useState(50);
    const [currPackage, setCurrPackage] = useState('Protect');

    return (
        <section className="service-content-container">
            <Head>
                <title>Exterior Ceramic Coatings | Dirt-Less Detailing</title>
                <Metatags
                    title='Exterior Ceramic Coatings | Dirt-Less Detailing'
                    description='Get a professionally installed Ceramic Coating through Dirt-Less Detailing to protect your vehicle from the always changing Washington weather.'
                    image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0b441cde-1d0f-45d9-665f-e44bfce0d800/public'
                    canonical='/services/exterior-ceramic-coating'
                />
                <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "http://schema.org",
                        "@type": "Product",
                        "name": "Exterior Ceramic Coating",
                        "brand": "Dirt-Less Detailing",
                        "description": "Protect and enhance your vehicle's paint with our professional ceramic coating service. Our team at Dirt-Less Detailing uses top-quality products to provide long-lasting protection and a glossy finish for your car. Contact us to learn more and schedule your ceramic coating service today.",
                        "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0b441cde-1d0f-45d9-665f-e44bfce0d800/public",
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
            <div className="cover" style={{backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/977438a8-129b-496b-9845-e55e3198e900/cover)`}}></div>
            <div className="servicepage-header">
                <h1>Exterior Ceramic Coating</h1>
                <h2 className='page-subheading'>Get a professionally installed 5 year Ceramic Coating professionally to protect your vehicle from the Pacific Northwest's unpredictable weather.</h2>
                <div className='header-buttons'>
                    <a href="/Contact" className='top-quote-btn'><img src='../assets/icons/clipboard.png' alt='clipboard' className='btn-icon' /> Get a Free Quote</a>
                    <a href="tel:2532529758" className='top-quote-btn btn-secondary'><img src='../assets/icons/phoneMessage.png' alt='call or message' className='btn-icon' /> (253) 252-9758</a>
                </div>
            </div>

            <div className="process-container">
                <div style={{width: '100%'}}>
                    <div className='package-details-container'>
                        <div className='package-details-top'>
                            <h2 style={{fontSize: '3rem', margin: '0 0 1rem 0'}}>Our Ceramic Coating Packages</h2>
                            <p>Ceramic coatings are nano chemicals that chemically bond with a vehicle's exterior to create a hard, protective layer. This layer resists damage from UV rays, oxidation, light scratches, and contaminants, providing long-lasting protection and a high-gloss finish.</p>
                        </div>

                        <div className='package-details-bkg'>
                            <div className='package-container-header'>
                                <h2 className='coating-heading text-shadow'><span className='special-package'>Protect</span> Package</h2>
                                <p>Starting at: <span className='pricing__pricecard-price'>$949.99</span></p>
                            </div>
                            <div className='package-container'>
                                <div className='package-details'>
                                    <h4><AiOutlineStar className='star-icon' /> All Paint Covered</h4>
                                    <p>All exterior paint on the vehicle will be coated with IGL's Quartz Ceramic 9H Coating.</p>
                                </div>
                                <div className='package-details'>
                                    <h4><AiOutlineStar className='star-icon' /> Coat Windshield, Lights, and Trim</h4>
                                    <p>The next most important parts of the vehicle to coat are the Windshield, Lights, and the Trim. All of those essentials will be covered in this Protect Package as well.</p>
                                </div>
                                <div className='package-details'>
                                    <h4><AiOutlineStar className='star-icon' /> 2-year, 20,000 mile, or Lifetime Warranty<span className='special-package'>*</span></h4>
                                    <p>After your first coating, following through with proper maintenance can qualify you for up to our Lifetime Warranty! See details below.</p>
                                </div>
                            </div>
                        </div>

                        <div className='package-details-bkg'>
                            <div className='package-container-header'>
                                <h2 className='coating-heading text-shadow'><span className='special-package'>Protect+</span> Package</h2>
                                <p>Starting at: <span className='pricing__pricecard-price'>$1,399.99</span></p>
                            </div>
                            <div className='package-container'>
                                <div className='package-details'>
                                    <h4><AiOutlineStar className='star-icon' /> All Paint Covered</h4>
                                    <p>All exterior paint on the vehicle will be coated with IGL's Kenzo Graphene Ceramic 10H Coating.</p>
                                </div>
                                <div className='package-details'>
                                    <h4><AiOutlineStar className='star-icon' /> Coat Trim, Glass, Lights, and Wheel Faces</h4>
                                    <p>We will cover nearly the entire exterior of your vehicle, ensuring that it is completely protected all around.</p>
                                </div>
                                <div className='package-details'>
                                    <h4><AiOutlineStar className='star-icon' /> 5-year, 50,000 mile, or Lifetime Warranty<span className='special-package'>*</span></h4>
                                    <p>After your first coating, following through with proper maintenance can qualify you for up to our Lifetime Warranty! See details below.</p>
                                </div>
                            </div>
                        </div>
                        <p className='text-white'><span className='special-package'>*</span>Must follow maintenance procedures to qualify for our warranties.</p>
                    </div>

                    <br className='extra-space' />

                    <p style={{fontSize: '2rem', margin: '10vh 0 0 0', color: '#575757'}}>End Results</p>
                    <h3 className='pricing__heading'>Smooth, Clean, and Picture Perfect Results.</h3>
                    <p>Once we are done water will BEAD off of your car like you've never seen before!</p>
                    <div style={{display: 'grid'}} className='place-center'>
                        <div className='slider-container'>
                            <div style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a2d79f4f-82e7-488d-deaf-7b0f7136a400/public')`}} className='slider-img'></div>
                            <div style={{width: 0 + slide + '%', backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d80fdd8a-40cd-4481-91cf-c80025e68a00/public')`}} className='slider-img foreground'></div>
                            <input type="range" min="1" max="100" value={slide} onChange={(e) => setSlide(Number(e.target.value))} className="slider-bar" name='slider' id="slider" />
                            <div style={{left: slide - 4 + '%'}} className="slider-button"></div>
                        </div>
                    </div>

                    <br className="extra-space" />

                    <div>
                        <div className='pricing__heading-container'>
                            <h3 className="pricing__heading">Our Ceramic Coating Pricing</h3>
                            <strong className="pricing__subheading">Select the package and vehicle size below to get a quick price estimate for your vehicle.</strong>
                            <div style={{margin: '0 auto'}}>
                                <select className='text-input pricing__select' name="package" id="package" onChange={(e) => setCurrPackage(e.target.value)}>
                                    <option value="Protect">Protect</option>
                                    <option value="Protect+">Protect+</option>
                                </select>
                            </div>
                        </div>

                        <PricingComponent prices={currPackage === 'Protect' ? ['949', '949', '1099', '1099', '1249', '1249'] : ['1399', '1399', '1699', '1699', '1849', '1849']} ceramic={true} />
                    </div>
                        
                    <div className="service-bkg-lighter" style={{paddingBottom: '2.5rem'}}>
                        <div className="general-container new-heading-container" style={{width: '95%'}}>
                            <strong className="above-heading">Further Reading</strong>
                        </div>
                        <main className="service-main general-container">
                            <div className="service-explain">
                                <div className="text-left">
                                    <h2 className='text-large'>The benefits you get with a coating:</h2>
                                    <p className='text-left'>There are a lot of coating companies that make some pretty big claims of what a coating can do. We don't like to use most of these claims and oversell what the ceramic coatings can do and how long they can last.</p>
                                    <ul className='coating-points'>
                                        <li>Produces durable protection possible that can last 5 years to a lifetime* (With our monthly maintenance).</li>
                                        <li>Only one application is needed. (Not every couple of washes like normal wax protection).</li>
                                        <li>Produces a deep level of gloss that is unmatched by other types of protection, such as a wax or sealant.</li>
                                        <li>Offers unparalleled hydrophobic qualities that keep your vehicle clean and makes washing it simpler, and more fun.</li>
                                    </ul>
                                </div>
                                <Zoom>
                                    <div className="service-image" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0b3d13f8-c7ec-44fc-7750-ab0d466eae00/public')`}}>
                                        <img style={{visibility: 'hidden'}} alt="what to expect from an IGL Coating" src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0b3d13f8-c7ec-44fc-7750-ab0d466eae00/public" />
                                    </div>
                                </Zoom>
                            </div>

                            <div className="service-explain">
                                <Zoom>
                                    <div className="service-image" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/32aa3e25-1fcb-4e05-760a-eb53f4b18400/public')`, backgroundColor: 'whitesmoke'}}>
                                        <img style={{visibility: 'hidden'}} alt="info on paint layers and what IGL coatings can protect from" src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/32aa3e25-1fcb-4e05-760a-eb53f4b18400/public" />
                                    </div>
                                </Zoom>
                                <div className="text-left">
                                    <h2 className="text-large">Ceramic Coating Installation Info</h2>
                                    <p>Your car must first be correctly prepared and corrected using one of our <a href="/detailing/correction" className='aside-link'>Paint Correction</a> services before the coating is applied. You won't get the full range of advantages that a ceramic coating can provide if we apply it without doing the necessary preparation work. </p>
                                    <p>For this reason, you should hire a qualified installer of ceramic coating, like us. Additionally, if it's not applied correctly, your car will have a lot of smudges in the end. We refer to these as "high spots." You'll notice this if the coating was improperly applied and allowed to dry for an excessive amount of time without being removed.</p>
                                    <p>Generally speaking, the harder it is to install a coating the more durable it is. One year vs five years, for example. You must also be aware of the weather factors because they might significantly affect the installation process. </p>
                                    <p>When it's hot, cold, or humid, coatings respond differently. If you've spent much time in Bonney Lake, you've probably noticed that the weather is always fluctuating.</p>
                                    <p><span className="special-package">NOTICE:</span> We complete every coating installation in our shop, where we have complete control over the working environment to provide the best end results. </p>
                                </div>
                            </div>

                            <div className="service-explain">
                                <div className="text-left">
                                    <h2 className="text-large">Common Ceramic Coating Myths</h2>
                                    <p>Yes, coatings are robust and long-lasting. This does not imply that you may abuse your car and assume the coating will keep it safe though.</p>
                                    <p>It has its limitations, and it's critical to be aware of what the ceramic coating is capable of. Customers frequently overestimate the coating's level of protection and are disappointed when swirl marks appear in the paint.</p>
                                    <p>Your paint will not become scratch-proof due to the coating. We mean very light swirls and scratches when we say the coating will resist light swirls and scratches.</p>
                                    <p>Your paint isn't protected from rock chips by the coating. No amount of wax or ceramic coating will be able to prevent a rock from striking and potentially damaging your car.</p>
                                    <p>To increase the coating's durability, proper maintenance is needed. If you don't take care of the coating, it will deteriorate over time and not have the intended lifespan, just like many other things in life (like visiting the dentist).</p>
                                    <p>For best durability, you must <a href="/services/dirtless-wash" className='aside-link'>wash</a>, dry, and preserve the coating appropriately (either through us or by following steps and materials recommended by us). If not properly maintained, a coating that was designed to last for five years may begin to degrade after two to three years.</p>
                                </div>
                                {/* <div className="example-img">
                                    <ReactPlayer width={280} height={487} url='https://res.cloudinary.com/brandon205/video/upload/v1674493877/Dirt-Less%20Detailing/Videos/received_1200318400918064_3_qteejy.mp4' loop muted playing />
                                </div> */}
                                <Zoom>
                                    <div className="service-image" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b69dcca1-8d92-414e-32c9-ddfe247fa100/public')`}}>
                                        <img style={{visibility: 'hidden'}} alt="More info on what IGL Coatings protect exterior vehicle paint from" src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b69dcca1-8d92-414e-32c9-ddfe247fa100/public" />
                                    </div>
                                </Zoom>
                            </div>

                            <h2 className='text-large'>Professional Interior Coatings <a href='/services/interior-ceramic-coating' className='aside-link'><BiLinkExternal /></a></h2>
                            <div className="text-left">
                                <p>Whether it's your kid spilling juice, or you spilling your morning coffee, we have all been there. Our interior coatings provide a barrier of protection and allow you time to wipe any spill up before it seeps in. Get more info on our <a href="/services/interior-ceramic-coating" className='aside-link'>Interior Coating</a> page.</p>
                            </div>

                            <br className="extra-space" />

                            <div id='faq'>
                                <div className="new-heading-container">
                                    <strong className="above-heading">FAQ</strong>
                                    <h3 className="new-heading">Our answers to the most commonly asked Ceramic Coating Questions.</h3>
                                </div>
                                <ul className='faq-ul'>
                                    <li className='faq-li'>How long does it last?</li>
                                    <li className='faq-p'>The paint coating should last 2-5 years, 50,000 miles, or a Lifetime<span className='special-package'>*</span> with our warranty. The coating on any trim, glass, lights, or wheels will last approximately 1 year.</li>

                                    <li className='faq-li'>Can I still go through car washes?</li>
                                    <li className='faq-p'>If you want to keep the ceramic coating in good condition and have it last as long as possible, you won't want to go through any car washes even the touch-less ones.</li>

                                    <li className='faq-li'>How should I wash my car then?</li>
                                    <li className='faq-p'>You can check out our new <a href="/products/ceramic-coating" className='aside-link'>Ceramic Coating Maintenance</a> page for a inexpensive DIY kit and washing method that's safe for your new coating! For washing your coated vehicle you have a couple of options. Or we also highly recommend either scheduling monthly maintenance through us especially if you get our Protect+ Package. </li>

                                    <li className='faq-li'>How do the 2 and 5 year warranties work?</li>
                                    <li className='faq-p'>For the 2 year (Protect) or the 5 year (Protect+) coating warranty, you will have to get our Ceramic Maintenance Package every 6 months to 1 year.</li>

                                    <li className='faq-li'>How does the Lifetime warranty work?</li>
                                    <li className='faq-p'>For the Lifetime (Protect+) warranty your vehicle needs to be on our Monthly Maintenance Program.<br /> *Feel free to ask us for more information on either of our Ceramic Maintenance Packages!</li>
                                </ul>
                            </div>
                        </main>
                        <a href="/Contact" className="new-contact-btn">Contact Us</a>
                    </div>
                    
                { /*
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
                    </div> */}
                </div>

            </div>
        </section>
    )
}
