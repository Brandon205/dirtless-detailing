import React from 'react';
import Image from 'next/image';

import bio from '../public/imgs/pageimgs/homepage/bio.webp';
import combo from '../public/imgs/pageimgs/homepage/comboHome.jpg';
import dlwash from '../public/imgs/pageimgs/homepage/dlwash.webp';
import engine from '../public/imgs/pageimgs/homepage/engine.webp';
import fullintex from '../public/imgs/pageimgs/interior/IMG_20200702_155834.jpg';
import headliner from '../public/imgs/headlinersCover.webp';
import pdlwash from '../public/imgs/pageimgs/exterior/IMG_20220121_153454.jpg';
import stage1 from '../public/imgs/pageimgs/paintCorrection/IMG_20220826_165738.jpg';
import stage2 from '../public/imgs/pageimgs/paintCorrection/IMG_20210517_111329.jpg';

export default function OtherServices() {
  return (
    <div>
        <section className="feature-section">
            <div className="feature-img-container">
                <Image style={{borderRadius: 16}} src={combo} alt="Vehicle after a Combo Cleaning" loading='lazy' placeholder='blur' quality={90} />
            </div>
            <div className="feature-desc-area">
                <a href="/services/Combo" className='service-heading-link'>Full Interior, Exterior, and <span className='special-package'>Engine Cleaning</span> Combo</a>
                <p className="secondary-text">Starting at: <span>$400</span></p>
                <p className="service-desc">This combo comes with a <span className='special-package'>FREE</span> Engine Bay cleaning, along with the full interior and exterior detail this package is sure to bring your whole car back to life.</p>
                <div>
                    <a href="/services/Combo" className="readmore">Combo Deal</a>
                    <a href="/services/FullIntEx" className="readmore">Interior</a>
                    <a href="/services/PDLWash" className="readmore">Exterior</a>
                </div>
            </div>
        </section>
        <a href="/Contact" className="quote-btn main-quote-btn">Get a Quote</a>

        <div className='separator-container'>
            <h2 className='service-title'>INTERIOR CLEANING SERVICES</h2>
        </div>
        <section className="otherservices-container">
            <div className="service-card">
                <Image src={fullintex} alt="Vehicle after a Full Interior Cleaning" className='otherservices-image' loading='lazy' placeholder='blur' quality={1} />
                <div className="otherservices-desc">
                    <div>
                        <a href="/services/FullIntEx" className='service-heading-link'>Full Interior Cleaning</a>
                        <p className="secondary-text">Starting at: <span>$200</span></p>
                    </div>
                    <p className="service-desc">A full interior detail will clean every crack and crevice of your vehicles interior. Optionally we can also do a hot water extraction to the carpets of your vehicle to get out deeper stains and dirt.</p>

                    <a href='/services/FullIntEx' className="readmore">Full Interior Cleaning Details {'>'}</a>
                </div>
            </div>

            <div className="service-card">
                <Image src={bio} alt="Vehicle before a biohazard cleaning" className='otherservices-image' loading='lazy' placeholder='blur' quality={1} />
                <div className="otherservices-desc">
                    <div>
                        <a href='/services/Bio' className='service-heading-link'>Smokers Car/Bio/Mold/etc Cleaning</a>
                        <p className="secondary-text">Starting at: <span>$300</span></p>
                    </div>
                    <p className="service-desc">If there are bad smells like mold or smoke in your car this will be the package for you. We'll use cleaning chemicals suited for the job to get rid of those odors for good.</p>

                    <a href='/services/Bio' className="readmore">Biohazard Cleaning Details {'>'}</a>
                </div>
            </div>
            <div className="service-card">
                <Image src={headliner} alt="Headliner after a cleaning" className='otherservices-image' loading='lazy' placeholder='blur' quality={80} />
                <div className="otherservices-desc">
                    <div>
                        <a href='/services/Headliners' className='service-heading-link'>Headliners</a>
                        <p className="secondary-text">Starting at: <span>$40</span></p>
                    </div>
                    <p className="service-desc">To clean your headliners we will determine the best plan of attack based on the materials in order to leave your headliners clean and prevent sagging or damage.</p>

                    <a href="services/Headliners" className="readmore">Headliner Cleaning Details {'>'}</a>
                </div>
            </div>
        </section>
        <a href="/Contact" className="quote-btn main-quote-btn">Get a Quote</a>

        <div className='separator-container'>
            <h2 className='service-title'>EXTERIOR CLEANING SERVICES</h2>
        </div>

        <section className="otherservices-container">
            <div className="service-card">
                <Image src={dlwash} alt="Vehicle after a Dirt-Less Wash Cleaning" className='otherservices-image' loading='lazy' placeholder='blur' quality={1} />
                <div className="otherservices-desc">
                    <div>
                        <a href='services/DLWash' className='service-heading-link'>Dirt-Less Wash</a>
                        <p className="secondary-text">Starting at: <span>$75</span></p>
                    </div>
                    <p className="service-desc">Our Dirt-Less Wash will thoroughly clean the exterior of your vehicle with our tried and true cleaning process.</p>

                    <a href="/services/DLWash" className="readmore">Dirt-Less Wash Details {'>'}</a>
                </div>
            </div>

            <div className="service-card">
                <Image src={pdlwash} alt="Vehicle after a Premium Dirt-Less Cleaning" className='otherservices-image' loading='lazy' placeholder='blur' quality={1} />
                <div className="otherservices-desc">
                    <div>
                        <a href='/services/PDLWash' className='service-heading-link'>Premium Dirt-Less Wash</a>
                        <p className="secondary-text">Starting at: <span>$150</span></p>
                    </div>
                    <p className="service-desc">Our Premium exterior wash will go above and beyond the Dirt-Less Wash in the cleaning process and will top it off with a 6 month sealant or better to protect your vehicle.</p>

                    <a href="/services/PDLWash" className="readmore">Premium Dirt-Less Wash Details {'>'}</a>
                </div>
            </div>

            <div className="service-card">
                <Image src={engine} alt="Vehicle after a Engine Bay Cleaning" className='otherservices-image' loading='lazy' placeholder='blur' quality={1} />
                <div className="otherservices-desc">
                    <div>
                        <a href='/services/Engine' className='service-heading-link'>Engine Bay</a>
                        <p className="secondary-text">Starting at: <span>$80</span></p>
                    </div>
                    <p className="service-desc">The engine bay is typically overlooked and tricky to clean, but we can take care of it for you and leave yours looking like new.</p>

                    <a href="/services/Engine" className="readmore">Engine Bay Cleaning Details {'>'}</a>
                </div>
            </div>
        </section>
        <a href="/Contact" className="quote-btn main-quote-btn">Get a Quote</a>
        
        <div className='separator-container'>
            <h2 className='service-title'>EXTERIOR CORRECTION SERVICES</h2>
        </div>
        <section className="otherservices-container">
            <div className="service-card">
                <Image src={stage1} alt="Vehicle after a Single Stage Paint Correction" className='otherservices-image' loading='lazy' placeholder='blur' quality={1} />
                <div className="otherservices-desc">
                    <div>
                        <a href='/services/SinglePC' className='service-heading-link'>Single Stage Paint Correction</a>
                        <p className="secondary-text">Starting at: <span>$300</span></p>
                    </div>
                    <p className="service-desc">Our single stage paint correction can fix 60%-80% of minor damage and scratches and will leave your vehicle looking shinier than ever.</p>

                    <a href="services/SinglePC" className="readmore">Paint Correction Details {'>'}</a>
                </div>
            </div>

            <div className="service-card">
                <Image src={stage2} alt="Vehicle after a Two Stage Paint Correction" className='otherservices-image' loading='lazy' placeholder='blur' quality={1} />
                <div className="otherservices-desc">
                    <div>
                        <a href='/services/TwoPC' className='service-heading-link'>Two Stage Paint Correction</a>
                        <p className="secondary-text">Starting at: <span>$450</span></p>
                    </div>
                    <p className="service-desc">Our 2 stage paint correction is great for getting your car to a near perfect state. This is great for show cars need that extra time and effort to get to that showroom shine.</p>

                    <a href="services/TwoPC" className="readmore">Two Stage Paint Correction Details {'>'}</a>
                </div>
            </div>
        </section>
        <a href="/Contact" className="quote-btn main-quote-btn">Get a Quote</a>
    </div>
  )
}
