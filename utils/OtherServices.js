import React from 'react';
import Image from 'next/image';

import bio from '../public/imgs/pageimgs/bio/SeatsBA.webp';
import combo from '../public/imgs/pageimgs/homepage/combo.jpg';
import dlwash from '../public/imgs/pageimgs/homepage/dlwash.webp';
import fullintex from '../public/imgs/pageimgs/interior/IMG_20200702_155834.jpg';
import pdlwash from '../public/imgs/pageimgs/exterior/IMG_20220121_153454.jpg';
import stage1 from '../public/imgs/pageimgs/paintCorrection/IMG_20220826_165738.jpg';
import stage2 from '../public/imgs/pageimgs/paintCorrection/IMG_20210517_111329.jpg';
import interiorGallery from '../public/imgs/pageimgs/interior/IMG_20220329_135221.jpg';
import exteriorGallery from '../public/imgs/pageimgs/exterior/IMG_20210327_124515.jpg';
import paintCorrectionGallery from '../public/imgs/pageimgs/paintCorrection/IMG_20220909_124912.jpg';
import ceramicInt from '../public/imgs/pageimgs/ceramic/317895587_701820004796038_115520810281779526_n.jpg';
import ceramicExt from '../public/imgs/pageimgs/ceramic/318295030_1118591338675237_1649623092355474681_n.jpg';
import ceramicGallery from '../public/imgs/pageimgs/ceramic/fenderDrops.jpg';

export default function OtherServices() {
    return (
        <div>
            <div className='separator-container'>
                <h2 className='service-title'>CERAMIC COATING <span className='new-offer'>NEW</span></h2>
            </div>
            <section className="otherservices-container">
                <div className="service-card">
                    <Image src={ceramicInt} alt="Vehicle after an interior coating" className='otherservices-image' layout='responsive' height={450} width={450} loading='lazy' placeholder='blur' quality={15} />
                    <div className="otherservices-desc">
                        <div>
                            <a href='/services/two-stage-correction' className='service-heading-link'>Interior Coatings</a>
                            <p className="secondary-text">Starting at: <span>$75</span></p>
                        </div>
                        <p className="service-desc">Did you know you could ceramic coat the interior of your car? Well you can, and it provides many of the benefits of a normal exterior coating like ease of maintenance/cleaning, but to the interior of your car!</p>

                        <a href="/services/interior-ceramic-coating" className="readmore">Interior Coating Details {'>'}</a>
                    </div>
                </div>

                <div className="service-card">
                    <Image src={ceramicExt} alt="Large water beads after a ceramic coating" className='otherservices-image' layout='responsive' height={450} width={450} loading='lazy' placeholder='blur' quality={15} />
                    <div className="otherservices-desc">
                        <div>
                            <a href='/services/single-stage-correction' className='service-heading-link'>Exterior Ceramic Coatings</a>
                            <p className="secondary-text">Starting at: <span>$1,000</span></p>
                        </div>
                        <p className="service-desc">With a professionally installed IGL Ceramic coating from us, your vehicle will be clean and protected. We are a licensed and certified coating installer through IGL and are happy to give your car that extra layer of protection it deserves</p>

                        <a href="/services/exterior-ceramic-coating" className="readmore">Exterior Coating Details {'>'}</a>
                    </div>
                </div>

                <div className="service-card">
                    <Image src={ceramicGallery} alt="Smaller water beads on side of vehicle after a ceramic coating" className='otherservices-image' layout='responsive' height={450} width={450} loading='lazy' placeholder='blur' quality={20} />
                    <div className="otherservices-desc text-center">
                        <div>
                            <a href='/gallery/paint-correction-gallery' className='service-heading-link'>CERAMIC COATING GALLERY</a>
                        </div>
                        <p className="service-desc">Take a look at some of the results we've had after our Ceramic Details.</p>
                        <p className="service-desc">Starting with our Single Stage Paint Correction before applying our Ceramics ensures the best covering of your vehicle possible, giving the absolute best results and longevity.</p>

                        <a href='/gallery/ceramic-coating-gallery' className="readmore text-center">Ceramic Coating Gallery</a>
                    </div>
                </div>
            </section>
            <a href="/Contact" className="quote-btn main-quote-btn">Get a Quote</a>

            <div className='separator-container'>
                <h3 className='service-title'>COMBO DEAL <span className='new-offer'>NEW</span></h3>
            </div>

            <section className="feature-section">
                <div className="feature-img-container">
                    <Image style={{ borderRadius: 16 }} src={combo} alt="Vehicle after a Combo Cleaning" loading='lazy' placeholder='blur' quality={90} />
                </div>
                <div className="feature-desc-area">
                    <a href="/services/interior-exterior-detailing-combo" className='service-heading-link'>Full Interior, <span className='special-package'>Engine Cleaning</span>, and Exterior Combo</a>
                    <p className="secondary-text">Starting at: <span>$350</span></p>
                    <p className="service-desc">This combo comes with a <span className='special-package'>FREE</span> Engine Bay cleaning, along with the full interior and exterior detail this package is sure to bring your whole car back to life.</p>
                    <div>
                        <a href="/services/interior-exterior-detailing-combo" className="readmore">Combo Deal</a>
                        <a href="/services/full-interior-detail" className="readmore">Interior</a>
                        <a href="/services/premium-dirtless-wash" className="readmore">Exterior</a>
                    </div>
                </div>
            </section>
            <a href="/Contact" className="quote-btn main-quote-btn">Get a Quote</a>

            <div className='separator-container'>
                <h2 className='service-title'>INTERIOR CLEANING SERVICES</h2>
            </div>
            <section className="otherservices-container">
                <div className="service-card">
                    <Image src={fullintex} alt="Vehicle after a Full Interior Cleaning" className='otherservices-image' layout='responsive' height={550} width={450} loading='lazy' placeholder='blur' quality={1} />
                    <div className="otherservices-desc">
                        <div>
                            <a href="/services/full-interior-detail" className='service-heading-link'>Full Interior Cleaning</a>
                            <p className="secondary-text">Starting at: <span>$200</span></p>
                        </div>
                        <p className="service-desc">A full interior detail will clean every crack and crevice of your vehicles interior. Optionally we can also do a hot water extraction to the carpets of your vehicle to get out deeper stains and dirt.</p>

                        <a href='/services/full-interior-detail' className="readmore">Full Interior Cleaning Details {'>'}</a>
                    </div>
                </div>

                <div className="service-card">
                    <Image src={bio} alt="Vehicle before a biohazard cleaning" className='otherservices-image' layout='responsive' height={550} width={450} loading='lazy' placeholder='blur' quality={1} />
                    <div className="otherservices-desc">
                        <div>
                            <a href='/services/biohazard-cleaning' className='service-heading-link'>Biohazard Cleaning</a>
                            <p className="secondary-text">Starting at: <span>$400</span></p>
                        </div>
                        <p className="service-desc">If there are bad smells like mold or smoke in your car this will be the package for you. We'll use cleaning chemicals suited for the job to get rid of those odors for good.</p>

                        <a href='/services/biohazard-cleaning' className="readmore">Biohazard Cleaning Details {'>'}</a>
                    </div>
                </div>

                <div className="service-card">
                    <Image src={interiorGallery} alt="vehicle rear after an interior detail" className='otherservices-image' layout='responsive' height={550} width={450} loading='lazy' objectFit='cover' placeholder='blur' quality={1} />
                    <div className="otherservices-desc text-center">
                        <div>
                            <a href='/gallery/interior-detail-gallery' className='service-heading-link'>FULL INTERIOR GALLERY</a>
                        </div>
                        <p className="service-desc">Our interior gallery is full of before and after images of the interiors that we have done.</p>
                        <p className="service-desc">Come check out some of the hundreds of photos we have of what we have been able to do for our customers interiors!</p>

                        <a href='/gallery/interior-detail-gallery' className="readmore text-center">Full Interior Gallery</a>
                    </div>
                </div>
            </section>
            <a href="/Contact" className="quote-btn main-quote-btn">Get a Quote</a>

            <div className='separator-container'>
                <h2 className='service-title'>EXTERIOR CLEANING SERVICES</h2>
            </div>

            <section className="otherservices-container">
                <div className="service-card">
                    <Image src={dlwash} alt="Vehicle after a Dirt-Less Wash Cleaning" className='otherservices-image' layout='responsive' height={550} width={450} loading='lazy' placeholder='blur' quality={1} />
                    <div className="otherservices-desc">
                        <div>
                            <a href='/services/dirtless-wash' className='service-heading-link'>Dirt-Less Wash</a>
                            <p className="secondary-text">Starting at: <span>$75</span></p>
                        </div>
                        <p className="service-desc">Our Dirt-Less Wash will thoroughly clean the exterior of your vehicle with our tried and true cleaning process. We even apply a layer of wax to give your vehicle a layer of protection.</p>

                        <a href="/services/dirtless-wash" className="readmore">Dirt-Less Wash Details {'>'}</a>
                    </div>
                </div>

                <div className="service-card">
                    <Image src={pdlwash} alt="Vehicle after a Premium Dirt-Less Cleaning" className='otherservices-image' layout='responsive' height={550} width={450} loading='lazy' placeholder='blur' quality={1} />
                    <div className="otherservices-desc">
                        <div>
                            <a href='/services/premium-dirtless-wash' className='service-heading-link'>Premium Dirt-Less Wash</a>
                            <p className="secondary-text">Starting at: <span>$150</span></p>
                        </div>
                        <p className="service-desc">Our Premium exterior wash will go above and beyond the Dirt-Less Wash in the cleaning process and will top it off with a 6 month sealant or better to protect your vehicle.</p>

                        <a href="/services/premium-dirtless-wash" className="readmore">Premium Dirt-Less Wash Details {'>'}</a>
                    </div>
                </div>

                <div className="service-card">
                    <Image src={exteriorGallery} alt="subaru after an exterior wash" className='otherservices-image' layout='responsive' height={550} width={450} loading='lazy' objectFit='cover' placeholder='blur' quality={1} />
                    <div className="otherservices-desc text-center">
                        <div>
                            <a href='/gallery/dirtless-wash-gallery' className='service-heading-link'>EXTERIOR WASH GALLERY</a>
                        </div>
                        <p className="service-desc">Our exterior gallery has plenty of examples of the exterior work that we do.</p>
                        <p className="service-desc">We have easily washed hundreds of vehicles and have our process optimized from the tires to the headlights, leaving every vehicle in great condition every time!</p>

                        <a href='/gallery/dirtless-wash-gallery' className="readmore text-center">Exterior Wash Gallery</a>
                    </div>
                </div>

            </section>
            <a href="/Contact" className="quote-btn main-quote-btn">Get a Quote</a>

            <div className='separator-container'>
                <h2 className='service-title'>PAINT CORRECTION SERVICES</h2>
            </div>
            <section className="otherservices-container">
                <div className="service-card">
                    <Image src={stage1} alt="Vehicle after a Single Stage Paint Correction" className='otherservices-image' layout='responsive' height={550} width={450} loading='lazy' placeholder='blur' quality={1} />
                    <div className="otherservices-desc">
                        <div>
                            <a href='/services/single-stage-correction' className='service-heading-link'>Single Stage Paint Correction</a>
                            <p className="secondary-text">Starting at: <span>$300</span></p>
                        </div>
                        <p className="service-desc">Our single stage paint correction can fix 60%-70% of minor damage and scratches and will leave your vehicle looking shinier than ever.</p>

                        <a href="/services/single-stage-correction" className="readmore">Paint Correction Details {'>'}</a>
                    </div>
                </div>

                <div className="service-card">
                    <Image src={stage2} alt="Vehicle after a Two Stage Paint Correction" className='otherservices-image' layout='responsive' height={550} width={450} loading='lazy' placeholder='blur' quality={1} />
                    <div className="otherservices-desc">
                        <div>
                            <a href='/services/two-stage-correction' className='service-heading-link'>Two Stage Paint Correction</a>
                            <p className="secondary-text">Starting at: <span>$450</span></p>
                        </div>
                        <p className="service-desc">Our 2 stage paint correction is great for getting your car to a near perfect state. This is great for show cars need that extra time and effort to get to that showroom shine.</p>

                        <a href="/services/two-stage-correction" className="readmore">Two Stage Paint Correction Details {'>'}</a>
                    </div>
                </div>

                <div className="service-card">
                    <Image src={paintCorrectionGallery} alt="Washed and paint corrected car" className='otherservices-image' layout='responsive' height={550} width={450} loading='lazy' objectFit='cover' placeholder='blur' quality={1} />
                    <div className="otherservices-desc text-center">
                        <div>
                            <a href='/gallery/paint-correction-gallery' className='service-heading-link'>PAINT CORRECTION GALLERY</a>
                        </div>
                        <p className="service-desc">Come see some of the results from our Paint Correction services!</p>
                        <p className="service-desc">These vehicles have all been through the whole process from completely washing, to taping off, all the way to the paint correction itself.</p>

                        <a href='/gallery/paint-correction-gallery' className="readmore text-center">Paint Correction Gallery</a>
                    </div>
                </div>
            </section>
            <a href="/Contact" className="quote-btn main-quote-btn">Get a Quote</a>
        </div>
    )
}
