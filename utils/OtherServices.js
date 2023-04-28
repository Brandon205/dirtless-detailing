import React from 'react';

export default function OtherServices() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '4em', paddingTop: '3rem'}}>
            <section className="otherservices-container">
                <h2 className='service-title'>Exterior Services</h2>
                <p>Need an exterior detail? We've got you covered here!</p>
                <div className='otherservices-subcontainer'>
                    <div className="service-card">
                        <div className="otherservices-image" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d7e1e319-7f78-4ac6-907a-9b100171ca00/public')` }}></div>
                        <div className="otherservices-desc">
                            <div>
                                <a href='/services/interior-ceramic-coating' className='service-heading-link'>Dirt-Less Wash</a>
                                <p className="secondary-text">Starting at: <br /><span>$74.99</span></p>
                            </div>
                            <p className="service-desc">Our Dirt-Less Wash will thoroughly clean the exterior of your vehicle with our tried and true cleaning process. We even apply a layer of wax to give your vehicle a strong layer of protection.</p>

                            <div className="otherservices-links">
                                <a href="/services/dirtless-wash" className="otherservices-readmore">Learn More</a>
                                <a href="/gallery/dirtless-wash-gallery" className='otherservices-readmore'>See Gallery</a>
                            </div>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="otherservices-image" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/f7c127be-d17d-4563-48c3-809289e8bc00/public')` }}></div>
                        <div className="otherservices-desc">
                            <div>
                                <a href='/services/interior-ceramic-coating' className='service-heading-link'>Single Stage Paint Correction</a>
                                <p className="secondary-text">Starting at: <br /><span>$549.99</span></p>
                            </div>
                            <p className="service-desc">Our Single Stage Paint Correction can fix 60%-70% of minor damage and scratches and will leave your vehicle looking shinier than ever.</p>

                            <div className="otherservices-links">
                                <a href="/services/single-stage-correction" className="otherservices-readmore">Learn More</a>
                                <a href="/gallery/paint-correction-gallery" className='otherservices-readmore'>See Gallery</a>
                            </div>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="otherservices-image" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5fabb5ba-d12e-4e8a-c3bb-f5901af53e00/public')` }}></div>
                        <div className="otherservices-desc">
                            <div>
                                <a href='/services/interior-ceramic-coating' className='service-heading-link'>Two Stage Paint Correction</a>
                                <p className="secondary-text">Starting at: <br /><span>$699.99</span></p>
                            </div>
                            <p className="service-desc">Our 2 stage paint correction is great for getting your car's paint to a close to perfect state. This is great for show cars need that extra time and effort to get to that showroom shine.</p>

                            <div className="otherservices-links">
                                <a href="/services/two-stage-correction" className="otherservices-readmore">Learn More</a>
                                <a href="/gallery/paint-correction-gallery" className='otherservices-readmore'>See Gallery</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/Contact" className="otherservices-readmore">Get in Touch!</a>
            </section>

            <section className="otherservices-container">
                <h2 className='service-title'>Interior Services</h2>
                <p>Need an interior detail? We've got you covered here!</p>
                <div className='otherservices-subcontainer'>
                    <div className="service-card">
                        <div className="otherservices-image" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/907d2e8b-5d24-40bf-387e-90be139c2d00/public')` }}></div>
                        <div className="otherservices-desc">
                            <div>
                                <a href='/services/interior-ceramic-coating' className='service-heading-link'>Full Interior Detail</a>
                                <p className="secondary-text">Starting at: <br /><span>$299.99</span></p>
                            </div>
                            <p className="service-desc">With our plenty tested methods we can clean any interior, even the dirtiest of them. Check out our Full Interior Detail page for more details!</p>

                            <div className="otherservices-links">
                                <a href="/services/full-interior-detail" className="otherservices-readmore">Learn More</a>
                                <a href="/gallery/interior-detail-gallery" className='otherservices-readmore'>See Gallery</a>
                            </div>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="otherservices-image" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b5859464-3c0e-4fcf-8332-17155eb86d00/public')` }}></div>
                        <div className="otherservices-desc">
                            <div>
                                <a href='/services/interior-ceramic-coating' className='service-heading-link'>The Dirt-Less Detail</a>
                                <p className="secondary-text">Starting at: <br /><span>$374.99</span></p>
                            </div>
                            <p className="service-desc">Our Interior and Exterior Package, to get your whole vehicle back to new. We start with our full interior service, then clean and dress the engine bay up (for free), then  finish off with our Dirt-Less Wash.</p>

                            <div className="otherservices-links">
                                <a href="/services/interior-exterior-detailing-combo" className="otherservices-readmore">Learn More</a>
                                <a href="/gallery/interior-detail-gallery" className='otherservices-readmore'>See Gallery</a>
                            </div>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="otherservices-image" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d09c52dc-c233-4cbd-c347-07de1c945d00/public')` }}></div>
                        <div className="otherservices-desc">
                            <div>
                                <a href='/services/interior-ceramic-coating' className='service-heading-link'>Biohazard Cleaning</a>
                                <p className="secondary-text">Starting at: <br /><span>$399.99</span></p>
                            </div>
                            <p className="service-desc">Smoke, odors, or even mold making your vehicle unpleasant to drive in? We've got the tools to bring your car back to how it was!</p>

                            <div className="otherservices-links">
                                <a href="/services/biohazard-cleaning" className="otherservices-readmore">Learn More</a>
                                <a href="/gallery/interior-detail-gallery" className='otherservices-readmore'>See Gallery</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/Contact" className="otherservices-readmore">Get in Touch!</a>
            </section>

            <section className="otherservices-container">
                <h2 className='service-title'>Ceramic Coating Services</h2>
                <p>Want an extra layer of protection inside or outside of your car? Check out our ceramic coating services!</p>
                <div className='otherservices-subcontainer'>
                    <div className="service-card">
                        <div className="otherservices-image" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/977438a8-129b-496b-9845-e55e3198e900/public')` }}></div>
                        <div className="otherservices-desc">
                            <div>
                                <a href='/services/interior-ceramic-coating' className='service-heading-link'>Protect Ceramic Coating</a>
                                <p className="secondary-text">Starting at: <br /><span>$949.99</span></p>
                            </div>
                            <p className="service-desc">This Protect Ceramic Coating package gives you an included Dirt-Less Wash and Single Stage Paint Correction before applying IGL's 9H Quartz Ceramic Coating, giving you 2 years of protection with good maintenance practices. Ask us more about our maintenance packages to hear about our warranties.</p>

                            <div className="otherservices-links">
                                <a href="/services/exterior-ceramic-coating" className="otherservices-readmore">Learn More</a>
                                <a href="/gallery/ceramic-coating-gallery" className='otherservices-readmore'>See Gallery</a>
                            </div>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="otherservices-image" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/f7c127be-d17d-4563-48c3-809289e8bc00/public')` }}></div>
                        <div className="otherservices-desc">
                            <div>
                                <a href='/services/interior-ceramic-coating' className='service-heading-link'>Single Stage Paint Correction</a>
                                <p className="secondary-text">Starting at: <br /><span>$1,399.99</span></p>
                            </div>
                            <p className="service-desc">Our Protect+ Ceramic Coating package gives you a full included Dirt-Less Wash and Single Stage Paint Correction, as well as tops your cars paint with a few coats of IGL's 10H Kenzo Ceramic Coating for 5 years of protection. Lifetime coating warranties also available with our maintenance packages.</p>

                            <div className="otherservices-links">
                                <a href="/services/exterior-ceramic-coating" className="otherservices-readmore">Learn More</a>
                                <a href="/gallery/ceramic-coating-gallery" className='otherservices-readmore'>See Gallery</a>
                            </div>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="otherservices-image" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3e71dbba-b8c6-4c21-7d4c-edc497331100/public')` }}></div>
                        <div className="otherservices-desc">
                            <div>
                                <a href='/services/interior-ceramic-coating' className='service-heading-link'>Interior Ceramic Coatings</a>
                                <p className="secondary-text">Starting at: <br /><span>$74.99</span></p>
                            </div>
                            <p className="service-desc">Our Interior Coatings are great for protecting the inside of your vehicle from spills and messes, giving you more time to clean them up before they soak in.</p>

                            <div className="otherservices-links">
                                <a href="/services/interior-ceramic-coating" className="otherservices-readmore">Learn More</a>
                                <a href="/gallery/ceramic-coating-gallery" className='otherservices-readmore'>See Gallery</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/Contact" className="otherservices-readmore">Get in Touch!</a>
            </section>

            {/* <a href="/Contact" className="quote-btn main-quote-btn">Get A Free Quote</a> */}

            {/* <div className='separator-container'>
                <h3 className='service-title'>COMBO DEAL <span className='new-offer'>NEW</span></h3>
            </div>

            <section className="feature-section">
                <div className="feature-img-container">
                    <div className="otherservices-image" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3031c630-d6f2-48fc-1bb4-62844fbd5a00/public')`, height: 550 + 'px', width: 350 + 'px' }}></div>
                </div>
                <div className="feature-desc-area">
                    <a href="/services/interior-exterior-detailing-combo" className='service-heading-link'>Full Interior, <span className='special-package'>Engine Cleaning</span>, and Exterior Combo</a>
                    <p className="secondary-text">Starting at: <span>$374.99</span></p>
                    <p className="service-desc">This combo comes with a <span className='special-package'>FREE</span> Engine Bay cleaning, along with the full interior and exterior detail this package is sure to bring your whole car back to life.</p>
                    <div>
                        <a href="/services/interior-exterior-detailing-combo" className="readmore">Combo Deal</a>
                        <a href="/services/full-interior-detail" className="readmore">Interior</a>
                        <a href="/services/dirtless-wash" className="readmore">Exterior</a>
                    </div>
                </div>
            </section>
            <a href="/Contact" className="quote-btn main-quote-btn">Get A Free Quote</a> */}

            {/* <div className='separator-container'>
                <h2 className='service-title'>INTERIOR CLEANING SERVICES</h2>
            </div>
            <section className="otherservices-container">
                <div className="service-card">
                    <div className="otherservices-image" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/be771e29-71fe-47b0-8fa3-0419d7991800/public')` }}></div>
                    <div className="otherservices-desc">
                        <div>
                            <a href="/services/full-interior-detail" className='service-heading-link'>Full Interior Cleaning</a>
                            <p className="secondary-text">Starting at: <span>$299.99</span></p>
                        </div>
                        <p className="service-desc">A full interior detail will clean every crack and crevice of your vehicles interior. Optionally we can also do a hot water extraction to the carpets of your vehicle to get out deeper stains and dirt.</p>

                        <a href='/services/full-interior-detail' className="popular-readmore">Full Interior Cleaning Details</a>
                    </div>
                </div>

                <div className="service-card">
                    <div className="otherservices-image" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0b1445bc-f69e-44e8-6336-345384ea5700/public')` }}></div>
                    <div className="otherservices-desc">
                        <div>
                            <a href='/services/biohazard-cleaning' className='service-heading-link'>Biohazard Cleaning</a>
                            <p className="secondary-text">Starting at: <span>$399.99</span></p>
                        </div>
                        <p className="service-desc">If there are bad smells like mold or smoke in your car this will be the package for you. We'll use cleaning chemicals suited for the job to get rid of those odors for good.</p>

                        <a href='/services/biohazard-cleaning' className="popular-readmore">Biohazard Cleaning Details</a>
                    </div>
                </div>

                <div className="service-card">
                    <div className="otherservices-image" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7bafe41a-9d42-4916-be4b-1a1c1086d200/public')` }}></div>
                    <div className="otherservices-desc text-center">
                        <div>
                            <a href='/gallery/interior-detail-gallery' className='service-heading-link'>FULL INTERIOR GALLERY</a>
                        </div>
                        <p className="service-desc">Our interior gallery is full of images of the interiors that we have cleaned.</p>
                        <p className="service-desc">Come check out some of the hundreds of photos we have of what we have been able to do for our customers interiors!</p>

                        <a href='/gallery/interior-detail-gallery' className="popular-readmore">Full Interior Gallery</a>
                    </div>
                </div>
            </section>
            <a href="/Contact" className="quote-btn main-quote-btn">Get A Free Quote</a>

            <div className='separator-container'>
                <h2 className='service-title'>EXTERIOR CLEANING SERVICES</h2>
            </div>

            <section className="otherservices-container">
                <div className="service-card">
                    <div className="otherservices-image" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d460cace-e72a-4781-d297-a57c1ae9dc00/public')` }}></div>
                    <div className="otherservices-desc">
                        <div>
                            <a href='/services/dirtless-wash' className='service-heading-link'>Dirt-Less Wash</a>
                            <p className="secondary-text">Starting at: <span>$74.99</span></p>
                        </div>
                        <p className="service-desc">Our Dirt-Less Wash will thoroughly clean the exterior of your vehicle with our tried and true cleaning process. We even apply a layer of wax to give your vehicle a layer of protection.</p>

                        <a href="/services/dirtless-wash" className="popular-readmore">Dirt-Less Wash Details</a>
                    </div>
                </div>

                <div className="service-card">
                    <div className="otherservices-image" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d7e1e319-7f78-4ac6-907a-9b100171ca00/public')` }}></div>
                    <div className="otherservices-desc text-center">
                        <div>
                            <a href='/gallery/dirtless-wash-gallery' className='service-heading-link'>EXTERIOR WASH GALLERY</a>
                        </div>
                        <p className="service-desc">Our exterior gallery has plenty of examples of the exterior work that we do.</p>
                        <p className="service-desc">We have easily washed hundreds of vehicles and have our process optimized from the tires to the headlights, leaving every vehicle in great condition every time!</p>

                        <a href='/gallery/dirtless-wash-gallery' className="popular-readmore text-center">Exterior Wash Gallery</a>
                    </div>
                </div>

            </section>
            <a href="/Contact" className="quote-btn main-quote-btn">Get A Free Quote</a>

            <div className='separator-container'>
                <h2 className='service-title'>PAINT CORRECTION SERVICES</h2>
            </div>
            <section className="otherservices-container">
                <div className="service-card">
                    <div className="otherservices-image" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/f7c127be-d17d-4563-48c3-809289e8bc00/public')` }}></div>
                    <div className="otherservices-desc">
                        <div>
                            <a href='/services/single-stage-correction' className='service-heading-link'>Single Stage Paint Correction</a>
                            <p className="secondary-text">Starting at: <span>$549.99</span></p>
                        </div>
                        <p className="service-desc">Our Single Stage Paint Correction can fix 60%-70% of minor damage and scratches and will leave your vehicle looking shinier than ever.</p>

                        <a href="/services/single-stage-correction" className="popular-readmore">Single Stage Details</a>
                    </div>
                </div>

                <div className="service-card">
                    <div className="otherservices-image" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5fabb5ba-d12e-4e8a-c3bb-f5901af53e00/public')` }}></div>
                    <div className="otherservices-desc">
                        <div>
                            <a href='/services/two-stage-correction' className='service-heading-link'>Two Stage Paint Correction</a>
                            <p className="secondary-text">Starting at: <span>$699.99</span></p>
                        </div>
                        <p className="service-desc">Our 2 stage paint correction is great for getting your car's paint to a close to perfect state. This is great for show cars need that extra time and effort to get to that showroom shine.</p>

                        <a href="/services/two-stage-correction" className="popular-readmore">Two Stage Details</a>
                    </div>
                </div>

                <div className="service-card">
                    <div className="otherservices-image" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/32930152-a55c-4325-49cb-e25a40fbeb00/public')` }}></div>
                    <div className="otherservices-desc text-center">
                        <div>
                            <a href='/gallery/paint-correction-gallery' className='service-heading-link'>PAINT CORRECTION GALLERY</a>
                        </div>
                        <p className="service-desc">Come see some of the results from our Paint Correction services!</p>
                        <p className="service-desc">These vehicles have all been through the whole process from completely washing, to taping off, all the way to the paint correction itself.</p>

                        <a href='/gallery/paint-correction-gallery' className="popular-readmore text-center">Paint Correction Gallery</a>
                    </div>
                </div>
            </section>
            <a href="/Contact" className="quote-btn main-quote-btn">Get A Free Quote</a> */}
        </div>
    )
}
