import React from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';

export default function ceramic() {
    return (
        <div className='bg-contact'>
            <Head>
                <title>Kenzo Graphene Ceramic Coatings | Dirt-Less Detailing</title>
                <Metatags
                    title='Kenzo Graphene Ceramic Coatings | Dirt-Less Detailing'
                    description='Want a high quality 10H ceramic coating to protect your car? Check out our offers on IGL graphene ceramic coatings.'
                    image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/cfc8823e-d28e-4ccc-255a-afa3fa5ad400/public'
                    canonical='/detailing/ceramic'
                />
                <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "http://schema.org",
                        "@type": "Product",
                        "name": "Exterior Ceramic Coating",
                        "brand": "Dirt-Less Detailing",
                        "description": "Protect and enhance your vehicle's paint with our professional ceramic coating service. Our team at Dirt-Less Detailing uses top-quality products to provide long-lasting protection and a glossy finish for your car. Contact us to learn more and schedule your ceramic coating service today.",
                        "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/cfc8823e-d28e-4ccc-255a-afa3fa5ad400/public",
                        "url": "https://www.dirtlessdetailing.com/ceramic-coating/sumner/",
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
            <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/cfc8823e-d28e-4ccc-255a-afa3fa5ad400/cover')`}}></div>
            <div className="servicepage-header">
                <h1>Interior / Exterior Ceramic Coatings</h1>
                <h2>IGL Graphene Coatings</h2>
                <div className='header-buttons'>
                    <a href="/Contact" className='quote-btn'>Get a Free Quote</a>
                    <a href="tel:2532529758" className='quote-btn top-quote-btn'><MdOutlinePermPhoneMsg className='call-icon' /> (253) 252-9758</a>
                </div>
            </div>
            
            <main className="location-main">
                <h2 className='text-large'>What is a Ceramic Coating?</h2>
                <div className="text-left">
                    <p>It is the absolute best way to protect your vehicle from the harsh weather we experience in Bonney Lake. Back in the day, wax was the cutting edge choice to enhance your vehicle's shine. It also protected your paint from external elements like rain, bird poop, dirt, tree sap, etc.</p>
                    <p>Now, with modern day technology, we have a far more durable and superior form of protection: ceramic/graphene coatings.</p>
                    <p>Unlike wax, you can't just simply wipe it on and off. The ceramic coating is a semi-permanent barrier that bonds to the vehicle's surface. It is commonly referred to as a “sacrificial” layer of protection. It will take the blow of the weathers elements like rain, dirt, and snow to better protect the paint underneath.</p>
                    <p>As an analogy, think of the Three Little Pigs. Wax is like the straw house, and ceramic coatings are like the brick house. Both offer protection from rain and dust, but one is far superior.</p>
                </div>

                <br className='extra-space' />

                <h2 className='text-large'>The benefits you get with a coating:</h2>
                <p className='text-left'>There are a lot of coating companies that make some pretty big claims of what a coating can do. Although there is some truth to these claims, we don't like to oversell the coatings capabilities.</p>
                <ul className='coating-points'>
                    <li>Produces the most durable protection possible that lasts 5 years to a lifetime (With proper maintenance through us).</li>
                    <li>You only need to apply it once. (Not every couple of months like wax).</li>
                    <li>Creates a deep level of gloss that is not possible with other forms of protection like wax or sealant.</li>
                    <li>Provides unmatched hydrophobic properties that keeps your car cleaner, making it easier and more fun to wash.</li>
                </ul>

                <br className='extra-space' />

                <h2 className="text-large">Ceramic Coating Installation Facts</h2>
                <div className="text-left">
                    <p>Before the coating is installed, your vehicle must first be properly prepped and corrected with one of our <a href="/detailing/correction" className='aside-link'>Paint Correction</a> services. If we apply the coating without the proper prep work, you won't get all of the benefits a ceramic coating can offer.</p>
                    <p>This is why you want a professional ceramic coating installer. Additionally, if it's not properly installed, you'll see a ton of smudges across your vehicle. This is what we call “high spots”. You'll see this when the coating was not properly applied and it was left to dry for too long without being wiped off.</p>
                    <p>As a general rule of thumb, the more durable the coating, the harder it is to install. For instance, a 1 year versus a 5 year coating. You have to understand the weather variables since that can play a major factor in the installation process.</p>
                    <p>Coatings react differently when it is humid, cold, or hot.  If you've been in Bonney Lake for an extended period of time, you'll notice that the weather is always changing. We do all of our coating installations at our shop location so we can control the working conditions.</p>
                </div>

                <br className='extra-space' />

                <h2 className="text-large">Common Myths About Ceramic Coatings</h2>
                <div className="text-left">
                    <p>Yes, coatings are long-lasting and durable. That doesn't mean you can beat the snot out of your vehicle and think the coating will protect it.</p>
                    <p>It has its limitations and it's important to understand the limitations of what the ceramic coating can handle. Too many times we see customers overestimate the protection of the coating and are then disappointed when they see swirl marks in the paintwork.</p>
                    <p>The coating will not make your paint scratch-proof. When we say the coating will resist light swirls and scratches, we really mean very light swirls and scratches.</p>
                    <p>The coating will not protect your paint from rock chips whatsoever. No matter how many layers you apply of any protection, whether it's wax or ceramic coating, it cannot stop a rock hitting your vehicle.</p>
                    <p>The coating requires maintenance to prolong the durability. Just like many other things in life (like going to the dentist), if you don't care for the coating, it will degrade over time and not last its intended lifespan.</p>
                    <p>You have to properly wash, dry, and maintain the coating for maximum durability. A coating that was meant to last for 5 years can start to break down after 2 to 3 years if not maintained properly.</p>
                </div>

                <br className='extra-space' />

                <h2 className='text-large'>Professional Interior Coatings</h2>
                <div className="text-left">
                    <p>Whether it's your kid spilling juice, or you spilling your morning coffee, we have all been there. Our interior coatings provide a barrier of protection and allow you time to wipe any spill up before it seeps in. Get more info on our <a href="/services/interior-ceramic-coating" className='aside-link'>Interior Coating</a> page.</p>
                </div>

                <br className='extra-space' />
            </main>

            <div className='only-bg'>
                <h3 className='pricing-title text-white'>Our Ceramic Coating Pricing</h3>
                <strong className='subtext'>*Pricing INCLUDES a Single Stage Paint Correction that we do before the coating, as long as the vehicle doesn't need extra correction beyond that.</strong>
                <div className="pricing-container text-white">
                    <div className="pricing-card text-black">
                        <strong className='size' style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Small</strong>
                        <strong className='size'>Protect</strong>
                        <p className="pricing-price pricing-border">$1,000</p>
                        <strong className='size'>Protect<span className="special-package">+</span></strong>
                        <p className="pricing-price pricing-border">$1,500</p>
                        <p className="example-vehicle pricing-border">2-Door Coupes</p>
                        <p className="example-vehicle pricing-border">Single/Extended Cabs</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                    <div className="pricing-card text-black">
                        <strong className='size' style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Medium</strong>
                        <strong className='size'>Protect</strong>
                        <p className="pricing-price pricing-border">$1,200</p>
                        <strong className='size'>Protect<span className="special-package">+</span></strong>
                        <p className="pricing-price pricing-border">$1,700</p>
                        <p className="example-vehicle pricing-border">4 Door Vehicles</p>
                        <p className="example-vehicle pricing-border">Smaller SUV's</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                    <div className="pricing-card text-black">
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
                
                <div>
                    <h3 className='pricing-title text-white'>Our Interior Coating Pricing</h3>
                    <strong className='subtext'>*Pricing does NOT include an <a href="/services/full-interior-detail" className='aside-link'>Interior Cleaning</a>, which you will need to add to get a coating.</strong>
                    <div className='pricing-container text-white'>
                        <div className="pricing-card text-black">
                            <strong className='size'>Fabric Coating</strong>
                            <p className="pricing-price pricing-border">$75</p>    
                            <p className="example-vehicle pricing-border">Any Size Vehicle</p>
                            <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                        </div>
                        <div className="pricing-card text-black">
                            <strong className='size'>Leather Coating</strong>
                            <p className="pricing-price pricing-border">$150</p>
                            <p className="example-vehicle pricing-border">Any Size Vehicle</p>
                            <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                        </div>
                    </div>

                </div>

            </div>

            <div className='locationpage-section no-bg'>
                <div>
                    <h3 className='text-large'>Exterior Ceramic Coating FAQ</h3>
                    <ul className='faq-ul'>
                        <li className='faq-li'>How long does it last?</li>
                        <li className='faq-p text-white'>The paint coating should last 5 years, 50,000 miles, or a Lifetime<span className='special-package'>*</span> with our warranty. The coating on any trim, glass, lights, or wheels will last 1 year approximately.</li>

                        <li className='faq-li'>Can I still go through car washes?</li>
                        <li className='faq-p text-white'>If you want to keep the ceramic coat in good condition and have it last as long as possible, you won't want to go through any car washes even touch-less ones.</li>

                        <li className='faq-li'>How should I wash my car then?</li>
                        <li className='faq-p text-white'>For washing your coated vehicle you have a couple of options. Hand washing with our recommended products and techniques, or you can simply schedule monthly maintenance through us!</li>

                        <li className='faq-li'>How does the 5 year warranty work?</li>
                        <li className='faq-p text-white'>If we do our yearly maintenance on the vehicle we guarantee that the ceramic coat will last 5 years or more.</li>

                        <li className='faq-li'>How does the Lifetime warranty work?</li>
                        <li className='faq-p text-white'>Your vehicles paint coating is guaranteed for life as long as you are on our monthly maintenance schedule. If you ever wish to cancel monthly maintenance, the remainder of your 5 year 50,000 mile warranty you had before takes effect.</li>
                    </ul>
                </div>
            </div>

            <h4 className='text-large'>Informational photos from IGL:</h4>
            <strong className='subtext'>Check out more from our Ceramic Coating provider <a href='https://iglcoatingsusa.com/' target='_blank' rel='noopener' className='aside-link'>IGL</a>.</strong>
            <div style={{marginTop: '1rem'}} className="photo-grid">
                <Zoom>
                    <div aria-label="What an IGL Coating can protect your paint from" role='img' className="card card-tall" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b69dcca1-8d92-414e-32c9-ddfe247fa100/public')`}} />
                </Zoom>
                <Zoom>
                    <div aria-label="Paint layers explained" role='img' className="card card-tall" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/32aa3e25-1fcb-4e05-760a-eb53f4b18400/public')`}} />
                </Zoom>
                <Zoom>
                    <div aria-label="What to expect from an IGL Coating" role='img' className="card card-tall" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0b3d13f8-c7ec-44fc-7750-ab0d466eae00/public')`}} />
                </Zoom>
            </div>

            <br className="extra-space" />

            <div>
                <h3 className='text-large'>Check out some of the results from our interior and exterior Ceramic services.</h3>
                <div className="photo-grid">
                    <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5b0798e5-2648-4845-168b-98e7ff013100/public')`}}></div>
                    <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3e71dbba-b8c6-4c21-7d4c-edc497331100/public')`}}></div>
                    <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/43a02c30-4982-435d-7f91-6d81fd11a000/public')`}}></div>
                    <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/fdce3625-66ac-4ea8-68e5-9f2e9e94c500/public')`}}></div>
                    <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/c8855b02-88e3-47c6-f8ab-835cead38f00/public')`}}></div>
                    <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/eef9854b-8f53-4f66-fa7f-d7c97fc71e00/public')`}}></div>
                    <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ab68bfcc-17a0-4468-539b-fded52edc500/public')`}}></div>
                    <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a30c288d-c816-4a42-e313-d7fa80e04200/public')`}}></div>
                </div>
            </div>

            <br className="extra-space" />

            <div>
                <strong className='text-medium'>We'll help customers from all over get a ceramic coating on their vehicle, however, most of our customers come to our shop from these areas:</strong>
                <div style={{ display: 'grid', placeItems: 'center' }}>
                    <ul className='cities-ul'>
                        <li><a href='/ceramic-coating/bonney-lake' className='aside-link'>Bonney Lake</a><FaMapMarkerAlt /></li>
                        <li><a href='/ceramic-coating/buckley' className='aside-link'>Buckley</a><FaMapMarkerAlt /></li>
                        <li><a href='/ceramic-coating/sumner' className='aside-link'>Sumner</a><FaMapMarkerAlt /></li>
                        <li><a href='/ceramic-coating/enumclaw' className='aside-link'>Enumclaw</a><FaMapMarkerAlt /></li>
                        <li><a href='/ceramic-coating/puyallup' className='aside-link'>Puyallup</a><FaMapMarkerAlt /></li>
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

            <br className="extra-space" />
            <a href="/Contact" className="quote-btn">Get A Free Quote Today!</a>

        </div> 
    )
}
