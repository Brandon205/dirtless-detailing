import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import cover from '../../public/imgs/pageimgs/ceramic/waterBeads.jpg';

export default function ceramic() {
    return (
        <div>
            <Head>
                <title>Graphene Ceramic Coatings | Dirt-Less Detailing</title>
                <meta property="og:title" content="Graphene Ceramic Coatings | Dirt-Less Detailing" />
                <meta property="description" content="Want a high quality ceramic coating to protect your car? Check out our offers on graphene ceramic coatings." />
                <meta property="og:description" content="Want a high quality ceramic coating to protect your car? Check out our offers on graphene ceramic coatings." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.dirtlessdetailing.com/detailing/ceramic" />
                <link rel="canonical" href="https://www.dirtlessdetailing.com/detailing/ceramic" />
            </Head>
            <div className="cover">
                <Image src={cover} alt="Water beading off of a car" layout="fill" objectFit='cover' placeholder='blur' priority />
            </div>
            <div className="servicepage-header">
                <h1>Interior / Exterior Ceramic Coatings</h1>
                <h2>IGL Graphene Coatings</h2>
                <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
                <p className='inline text-small'>
                    Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
                </p>
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
                <ul className='cities-ul'>
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
                    <p>Whether it's your kid spilling juice, or you spilling your morning coffee, we have all been there. Our interior coatings provide a barrier of protection and allow you time to wipe any spill up before it seeps in. Get more info <a href="/services/IntCoatings" className='aside-link'>here</a>.</p>
                </div>

                <br className='extra-space' />
            </main>

            <div className='only-bg'>
                <h3 className='pricing-title text-black'>Our Ceramic Coating Pricing</h3>
                <h4 className='pricing-subtext'>*Pricing INCLUDES a Single Stage Paint Correction that we do before the coating, as long as the vehicle doesn't need extra correction beyond that.</h4>
                <div className="pricing-container text-black">
                    <div className="pricing-card">
                        <h4 className="size" style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Small</h4>
                        <h4 className="size">Protect</h4>
                        <p className="pricing-price pricing-border">$1,000</p>
                        <h4 className="size">Protect<span className="special-package">+</span></h4>
                        <p className="pricing-price pricing-border">$1,500</p>
                        <p className="example-vehicle pricing-border">2-Door Coupes</p>
                        <p className="example-vehicle pricing-border">Single/Extended Cabs</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                    <div className="pricing-card">
                        <h4 className="size" style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Medium</h4>
                        <h4 className="size">Protect</h4>
                        <p className="pricing-price pricing-border">$1,200</p>
                        <h4 className="size">Protect<span className="special-package">+</span></h4>
                        <p className="pricing-price pricing-border">$1,700</p>
                        <p className="example-vehicle pricing-border">4 Door Vehicles</p>
                        <p className="example-vehicle pricing-border">Smaller SUV's</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                    <div className="pricing-card">
                        <h4 className="size" style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Large</h4>
                        <h4 className="size">Protect</h4>
                        <p className="pricing-price pricing-border">$1,400</p>
                        <h4 className="size">Protect<span className="special-package">+</span></h4>
                        <p className="pricing-price pricing-border">$1,900</p>
                        <p className="example-vehicle pricing-border">Larger Trucks</p>
                        <p className="example-vehicle pricing-border">Extra Large Vehicles</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                </div>
                
                <div>
                    <h3 className='pricing-title text-black'>Our Interior Coating Pricing</h3>
                    <h4 className='pricing-subtext'>*Pricing does NOT include an <a href="/services/FullIntEx" className='aside-link'>Interior Cleaning</a>, which you will need to add to get a coating.</h4>
                    <div className='pricing-container text-black'>
                        <div className="pricing-card">
                            <h4 className="size">Fabric Coating</h4>
                            <p className="pricing-price pricing-border">$75</p>    
                            <p className="example-vehicle pricing-border">Any Size Vehicle</p>
                            <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                        </div>
                        <div className="pricing-card">
                            <h4 className="size">Leather Coating</h4>
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
            <a href="/Contact" className="quote-btn location-quote-btn">Get a Quote Today!</a>

        </div> 
    )
}
