import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import bio from '../public/imgs/pageimgs/homepage/bio.webp';
import combo from '../public/imgs/pageimgs/homepage/combo.webp';
import dlwash from '../public/imgs/pageimgs/homepage/dlwash.webp';
import engine from '../public/imgs/pageimgs/homepage/engine.webp';
import fullintex from '../public/imgs/pageimgs/homepage/fullintex.webp';
import headliner from '../public/imgs/pageimgs/homepage/headliner.webp';
import pdlwash from '../public/imgs/pageimgs/homepage/pdlwash.webp';
import stage1 from '../public/imgs/pageimgs/homepage/stage1.webp';
import stage2 from '../public/imgs/pageimgs/homepage/stage2.webp';

export default function OtherServices() {

    let handleClick = () => {
        console.log('hello')
    }

  return (
    <div>
        <section className="otherservices-container">
            <div className="service-card">
                <Image src={combo} alt="combo cleaning after" className='otherservices-image' />
                <div className="otherservices-desc">
                    <Link href="bio" className="service-heading-link"><h2>Full Interior and Exterior Cleaning Combo</h2></Link>
                    <p className="secondary-text">Starting at: <span>$275</span></p>
                    <p className="service-desc">This combo comes with a <span className='special-package'>free</span> Engine Bay cleaning, along with the full interior and exterior detail this package is sure to bring your whole car back to life.</p>
                    <div>
                        <Link href="full-int-ex">
                            <a className="readmore">Interior</a>
                        </Link>
                        <Link href="dl-wash">
                            <a className="readmore">Exterior</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <div className='separator-container'>
            <h2 className='service-title'>INTERIOR CLEANING SERVICES</h2>
        </div>
        <section className="otherservices-container">
            <div className="service-card">
                <Image src={fullintex} alt="full interior cleaning after" className='otherservices-image' />
                <div className="otherservices-desc">
                    <Link href="bio" className="service-heading-link"><h2>Full Interior Cleaning</h2></Link>
                    <p className="secondary-text">Starting at: <span>$200</span></p>
                    <p className="service-desc">A full interior detail will clean every crack and crevice of your vehicles interior. Optionally we can also do a hot water extraction to the carpets of your vehicle to get out deeper stains and dirt.</p>

                    <Link href="full-int-ex">
                        <a className="readmore">Learn More</a>
                    </Link>
                </div>
            </div>

            <div className="service-card">
                <Image src={bio} alt="biohazard cleaning before" className='otherservices-image' />
                <div className="otherservices-desc">
                    <Link href="bio" className="service-heading-link"><h2>Smokers Car/Bio/Mold/etc Cleaning</h2></Link>
                    <p className="secondary-text">Starting at: <span>$300</span></p>
                    <p className="service-desc">If there are bad smells like mold or smoke in your car this will be the package for you. We'll use cleaning chemicals suited for the job to get rid of those odors for good.</p>

                    <Link href="bio">
                        <a className="readmore">Learn More</a>
                    </Link>
                </div>
            </div>
            <div className="service-card">
                <Image src={headliner} alt="headliner cleaning after" className='otherservices-image' />
                <div className="otherservices-desc">
                    <Link href="headliners" className="service-heading-link"><h2>Headliners</h2></Link>
                    <p className="secondary-text">Starting at: <span>$40</span></p>
                    <p className="service-desc">To clean your headliners we will determine the best plan of attack based on the materials in order to leave your headliners clean and prevent sagging or damage.</p>

                    <Link href="headliners">
                        <a className="readmore">Learn More</a>
                    </Link>
                </div>
            </div>
        </section>

        <div className='separator-container'>
            <h2 className='service-title'>EXTERIOR CLEANING SERVICES</h2>
        </div>

        <section className="otherservices-container">
            <div className="service-card">
                <Image src={dlwash} alt="dirt-less wash cleaning after" className='otherservices-image' />
                <div className="otherservices-desc">
                    <Link href="dl-wash" className="service-heading-link"><h2>Dirt-Less Wash</h2></Link>
                    <p className="secondary-text">Starting at: <span>$75</span></p>
                    <p className="service-desc">Our Dirt-Less Wash will thoroughly clean the exterior of your vehicle with our tried and true cleaning process.</p>
                    {/* <Link href="dl-wash" passHref={true}>
                        <a className="readmore">Learn More</a>
                    </Link> */}
                    <Link href="/services/DLWash">
                        Learn More
                    </Link>
                </div>
            </div>

            <div className="service-card">
                <Image src={pdlwash} alt="premium dirt-less wash cleaning after" className='otherservices-image' />
                <div className="otherservices-desc">
                    <Link href="premium-dl-wash" className="service-heading-link"><h2>Premium Dirt-Less Wash</h2></Link>
                    <p className="secondary-text">Starting at: <span>$150</span></p>
                    <p className="service-desc">Our Premium exterior wash will go above and beyond the Dirt-Less Wash in the cleaning process and will top it off with a 6 month sealant or better to protect your vehicle.</p>
                    <Link href="/services/PDLWash" passHref>
                        <a className="readmore" onClick={() => handleClick()}>Learn More</a>
                    </Link>
                </div>
            </div>

            <div className="service-card">
                <Image src={engine} alt="engine bay cleaning after" className='otherservices-image' />
                <div className="otherservices-desc">
                    <Link href="engine" className="service-heading-link"><h2>Engine Cleaning</h2></Link>
                    <p className="secondary-text">Starting at: <span>$80</span></p>
                    <p className="service-desc">The engine bay is typically overlooked and tricky to clean, but we can take care of it for you and leave yours looking like new.</p>
                    <Link href="engine-bay">
                        <a className="readmore">Learn More</a>
                    </Link>
                </div>
            </div>
        </section>
        
        <div className='separator-container'>
            <h2 className='service-title'>EXTERIOR CORRECTION SERVICES</h2>
        </div>
        <section className="otherservices-container">
            <div className="service-card">
                <Image src={stage1} alt="stage 1 paint correction cleaning after" className='otherservices-image' />
                <div className="otherservices-desc">
                    <Link href="single-paint-correction" className="service-heading-link"><h2>Single Stage Paint Correction</h2></Link>
                    <p className="secondary-text">Starting at: <span>$300</span></p>
                    <p className="service-desc">Our single stage paint correction can fix 60%-80% of minor damage and scratches and will leave your vehicle looking shinier than ever.</p>
                    <Link href="single-paint-correction">
                        <a className="readmore">Learn More</a>
                    </Link>
                </div>
            </div>

            <div className="service-card">
                <Image src={stage2} alt="stage 2 paint correction cleaning after" className='otherservices-image' />
                <div className="otherservices-desc">
                    <Link href="two-paint-correction" className="service-heading-link"><h2>Two Stage Paint Correction</h2></Link>
                    <p className="secondary-text">Starting at: <span>$450</span></p>
                    <p className="service-desc">Our 2 stage paint correction is great for getting your car to a near perfect state. This is great for show cars need that extra time and effort to get to that showroom shine.</p>
                    <Link href="two-paint-correction" className="readmore">
                        <a className="readmore">Learn More</a>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}
