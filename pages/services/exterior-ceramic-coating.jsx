import { useState } from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { MdOutlinePermPhoneMsg } from 'react-icons/md';
import { BiLinkExternal } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
// import ReactPlayer from 'react-player/lazy';
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
                <h2 className='page-subheading'>Get a professionally installed 5 year Ceramic Coating professionally to protect your vehicle year-round.</h2>
                <div className='header-buttons'>
                    <a href="/Contact" className='quote-btn'>Get a Free Quote</a>
                    <a href="tel:2532529758" className='quote-btn top-quote-btn'><MdOutlinePermPhoneMsg className='call-icon' /> (253) 252-9758</a>
                </div>
            </div>

            <div className="process-container">
                <div style={{width: '100%'}}>
                    <div className='package-details-container'>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <h2 style={{fontSize: '3rem', margin: '0 0 1rem 0', width: '40%', textAlign: 'left'}}>Our Ceramic Coating Packages</h2>
                            <p style={{width: '35%'}}>Ceramic coatings are liquid polymers that chemically bond with a vehicle's exterior to create a hard, protective layer. This layer resists damage from UV rays, oxidation, scratches, and contaminants, providing long-lasting protection and a high-gloss finish.</p>
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

                    <p>End Results</p>
                    <h3 className='pricing__heading'>Smooth, Clean, and Picture Perfect Results.</h3>
                    <p>Once we are done water will BEAD off of your car like you've never seen it do before.</p>
                    <div style={{display: 'grid'}} className='place-center'>
                        <div className='slider-container'>
                            <div style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a2d79f4f-82e7-488d-deaf-7b0f7136a400/public')`}} className='slider-img'></div>
                            <div style={{width: 0 + slide + '%', backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d80fdd8a-40cd-4481-91cf-c80025e68a00/public')`}} className='slider-img foreground'></div>
                            <input type="range" min="1" max="100" value={slide} onChange={(e) => setSlide(Number(e.target.value))} className="slider-bar" name='slider' id="slider" />
                        </div>
                    </div>

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

                        <PricingComponent prices={currPackage === 'Protect' ? ['949', '949', '1,099', '1,099', '1,249', '1,249'] : ['1,399', '1,399', '1,699', '1,699', '1,849', '1,849']} ceramic={true} />
                    </div>
                        
                    <div className="service-bkg">
                        <div className="general-container new-heading-container">
                            <strong className="above-heading">Further Reading</strong>
                        </div>
                        <main className="service-main">
                            {/* <div className="service-explain">
                                <div className="text-left">
                                    <h2 className='text-large'>What is a Ceramic Coating?</h2>
                                    <p>It is the absolute best way to protect your vehicle from the harsh weather we experience in Bonney Lake. Back in the day, wax was the cutting edge choice to enhance your vehicle's shine. It also protected your paint from external elements like rain, bird poop, dirt, tree sap, etc.</p>
                                    <p>Now, with modern day technology, we have a far more durable and superior form of protection: ceramic/graphene coatings.</p>
                                    <p>Unlike wax, you can't just simply wipe it on and off. The ceramic coating adheres to the surface of the car and creates a semi-permanent barrier. It is frequently described as a "sacrificial" layer of protection. Rain, debris, and other weather conditions will be absorbed by it, better protecting the paint underneath.</p>
                                    <p>As an analogy, think of the Three Little Pigs. No after wash product is like the straw house, wax is like the stick house, and ceramic coatings are like the brick house. Both the wax and ceramic offer protection from rain and dust, but one is far stronger.</p>
                                </div>
                                <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5b0798e5-2648-4845-168b-98e7ff013100/public')`}}></div>
                            </div> */}
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
                                <div className="service-image" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0b3d13f8-c7ec-44fc-7750-ab0d466eae00/public')`}}></div>
                            </div>

                            <div className="service-explain">
                                <div className="service-image" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/32aa3e25-1fcb-4e05-760a-eb53f4b18400/public')`, backgroundColor: 'whitesmoke', width: '50%', height: '550px'}}></div>
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
                                    <p>Yes, coatings are robust and long-lasting. This does not imply that you may abuse your car and assume the coating will keep it safe. </p>
                                    <p>It has its limitations, and it's critical to be aware of what the ceramic coating is capable of. Customers frequently overestimate the coating's level of protection and are disappointed when swirl marks appear in the paint. </p>
                                    <p>Your paint will not become scratch-proof due to the coating. We mean very light swirls and scratches when we say the coating will resist light swirls and scratches. </p>
                                    <p>Your paint isn't protected from rock chips by the coating. No amount of wax or ceramic coating will be able to prevent a rock from striking and potentially damaging your car.</p>
                                    <p>To increase the coating's durability, proper maintenance is needed. If you don't take care of the coating, it will deteriorate over time and not have the intended lifespan, just like many other things in life (like visiting the dentist).</p>
                                    <p>For best durability, you must <a href="/services/dirtless-wash" className='aside-link'>wash</a>, dry, and preserve the coating appropriately (either through us or by following specific steps provided by us). If not properly maintained, a coating that was designed to last for five years may begin to degrade after two to three years.</p>
                                </div>
                                {/* <div className="example-img">
                                    <ReactPlayer width={280} height={487} url='https://res.cloudinary.com/brandon205/video/upload/v1674493877/Dirt-Less%20Detailing/Videos/received_1200318400918064_3_qteejy.mp4' loop muted playing />
                                </div> */}
                                <div className="service-image" role='img' style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b69dcca1-8d92-414e-32c9-ddfe247fa100/public')`, width: '50%', height: '475px'}}></div>
                            </div>

                            <h2 className='text-large'>Professional Interior Coatings <a href='/services/interior-ceramic-coating' className='aside-link'><BiLinkExternal /></a></h2>
                            <div className="text-left">
                                <p>Whether it's your kid spilling juice, or you spilling your morning coffee, we have all been there. Our interior coatings provide a barrier of protection and allow you time to wipe any spill up before it seeps in. Get more info on our <a href="/services/interior-ceramic-coating" className='aside-link'>Interior Coating</a> page.</p>
                            </div>

                            <br className="extra-space" />

                            {/* <br className='extra-space' />

                            <h4 className='text-large'>Informational photos from IGL:</h4>
                            <strong className='subtext'>Check out more from our Ceramic Coating provider <a href='https://iglcoatingsusa.com/' target='_blank' rel='noopener' className='aside-link'>IGL</a>.</strong>
                            <div className="photo-grid">
                                <Zoom>
                                    <div aria-label="What an IGL Coating can protect your paint from" role='img' className="card card-tall" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b69dcca1-8d92-414e-32c9-ddfe247fa100/public')`}} />
                                </Zoom>
                                <Zoom>
                                    <div aria-label="Paint layers explained" role='img' className="card card-tall" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/32aa3e25-1fcb-4e05-760a-eb53f4b18400/public')`}} />
                                </Zoom>
                                <Zoom>
                                    <div aria-label="What to expect from an IGL Coating" role='img' className="card card-tall" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0b3d13f8-c7ec-44fc-7750-ab0d466eae00/public')`}} />
                                </Zoom>
                            </div> */}

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
                    </div>
                    {/* <div>
                        <h3 className='pricing-title text-white'>Our Ceramic Coating Pricing</h3>
                        <h4 className='subtext'><span className='special-package'>*</span>Pricing <span className='special-package'>INCLUDES</span> a Single Stage Paint Correction that we do before the coating, as long as the vehicle doesn't need extra correction beyond that.</h4>
                        <div className="pricing-container text-black">
                            <div className="pricing-card">
                                <strong className='size pricing-border' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Single Row Trucks and 2-Door Cars</strong>
                                <strong className='size'>Protect</strong>
                                <p className="pricing-price pricing-border">$949<span className='ninety-nine'>99</span></p>
                                <strong className='size'>Protect<span className="special-package">+</span></strong>
                                <p className="pricing-price pricing-border">$1,399<span className='ninety-nine'>99</span></p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                            <div className="pricing-card">
                                <strong className='size pricing-border' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Most Mid-Size SUV's and 4-Door Cars</strong>
                                <strong className='size'>Protect</strong>
                                <p className="pricing-price pricing-border">$1,099<span className='ninety-nine'>99</span></p>
                                <strong className='size'>Protect<span className="special-package">+</span></strong>
                                <p className="pricing-price pricing-border">$1,699<span className='ninety-nine'>99</span></p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                            <div className="pricing-card">
                                <strong className='size pricing-border' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>3-Row SUV's, Minivans, and Trucks</strong>
                                <strong className='size'>Protect</strong>
                                <p className="pricing-price pricing-border">$1,249<span className='ninety-nine'>99</span></p>
                                <strong className='size'>Protect<span className="special-package">+</span></strong>
                                <p className="pricing-price pricing-border">$1,849<span className='ninety-nine'>99</span></p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                        </div>

                        <h3 className='pricing-title text-white'>Our Monthly/Yearly Maintenance Pricing</h3>
                        <h4 style={{fontSize: '1.3em'}} className='subtext'><span style={{fontSize: '1.3em'}} className='special-package'>MONTHLY SERVICE: </span>Keeping up with this service will grant you with our <span className='special-package'>LIFETIME</span> Warranty. The goal of our monthly maintenance is to keep your vehicle looking like new year-round. Every month you will get a <a href="/services/dirtless-wash" className='aside-link'>Dirt-Less Wash</a> and a <a href='/services/full-interior-detail' className='aside-link'>Full Interior Detail</a>.</h4>
                        <h4 style={{fontSize: '1.3em'}} className='subtext'><span style={{fontSize: '1.3em'}} className='special-package'>YEARLY SERVICE: </span>To qualify for our <span className='special-package'>2-Year</span> (Protect Service) or the <span className='special-package'>5-Year</span> (Protect+ Service) Warranty. Our yearly service needs to go into much more detail, as your car hasn't been seen by us on a monthly basis, so we will: • Wash the entire vehicle • Perform Iron Decontamination treatment • Top the vehicle off with a ceramic booster • Apply a new coat of ceramic to the windshield.</h4>
                        <div className="pricing-container text-black">
                            <div className="pricing-card">
                                <strong className='size pricing-border' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Single Row Trucks and 2-Door Cars</strong>
                                <strong className='size'>Monthly</strong>
                                <p className="pricing-price pricing-border">$129<span className='ninety-nine'>99</span></p>
                                <strong className='size'>Yearly</strong>
                                <p className="pricing-price pricing-border">$199<span className='ninety-nine'>99</span></p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                            <div className="pricing-card">
                                <strong className='size pricing-border' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Most Mid-Size SUV's and 4-Door Cars</strong>
                                <strong className='size'>Monthly</strong>
                                <p className="pricing-price pricing-border">$159<span className='ninety-nine'>99</span></p>
                                <strong className='size'>Yearly</strong>
                                <p className="pricing-price pricing-border">$249<span className='ninety-nine'>99</span></p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                            <div className="pricing-card">
                                <strong className='size pricing-border' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>3-Row SUV's, Minivans, & Lifted Trucks</strong>
                                <strong className='size'>Monthly</strong>
                                <p className="pricing-price pricing-border">$189<span className='ninety-nine'>99</span></p>
                                <strong className='size'>Yearly</strong>
                                <p className="pricing-price pricing-border">$299<span className='ninety-nine'>99</span></p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                        </div>

                        <h3 className="pricing-title text-white">Exterior Re-coating Options</h3>
                        <h4 className='subtext'>Our re-coating options if you have had a ceramic coating done through us.</h4>
                        <div className="pricing-container text-black">
                            <div className="pricing-card">
                                <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Re-coat All Vehicle Trim</strong>
                                <p>Get all exterior vehicle trim re-coated.</p>
                                <p className="pricing-price pricing-border">$99<span className='ninety-nine'>99</span></p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                            <div className="pricing-card">
                                <strong className='size' style={{ fontSize: 1.4 + 'em', fontWeight: 'bold' }}>Re-coat Wheel Faces</strong>
                                <p>Re-coat all Wheel Faces.</p>
                                <p className="pricing-price pricing-border">$149<span className='ninety-nine'>99</span></p>
                                <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                            </div>
                        </div>
                    </div> */}

                    {/* <br className='extra-space' />

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
