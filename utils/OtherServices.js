import React from 'react';

export default function OtherServices() {
    return (
        <div className="service-bkg-lighter" style={{display: 'flex', flexDirection: 'column', gap: '4em', paddingTop: '3rem'}}>
            <section className="otherservices-container">
                <h2 className='service-title'>Exterior Services</h2>
                <p>Discover Our Exceptional Exterior Auto Detailing Services.</p>
                <div className='otherservices-subcontainer'>
                    <div className="service-card">
                        <div className="otherservices-image" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/d7e1e319-7f78-4ac6-907a-9b100171ca00/public')` }}></div>
                        <div className="otherservices-desc">
                            <div>
                                <a href='/services/dirtless-wash' className='service-heading-link'>Dirt-Less Wash</a>
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
                                <a href='/services/single-stage-correction' className='service-heading-link'>Single Stage Paint Correction</a>
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
                                <a href='/services/two-stage-correction' className='service-heading-link'>Two Stage Paint Correction</a>
                                <p className="secondary-text">Starting at: <br /><span>$699.99</span></p>
                            </div>
                            <p className="service-desc">Our 2 stage paint correction is great for getting your car's paint to a near perfect state. This is great for show cars need that extra time and effort to get to that showroom shine.</p>

                            <div className="otherservices-links">
                                <a href="/services/two-stage-correction" className="otherservices-readmore">Learn More</a>
                                <a href="/gallery/paint-correction-gallery" className='otherservices-readmore'>See Gallery</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/Contact" className="otherservices-readmore">Get in Touch!</a>
            </section>

            <hr className='otherservices-hr' />

            <section className="otherservices-container">
                <h2 className='service-title'>Interior Services</h2>
                <p>Need an interior detail? We've got you covered here!</p>
                <div className='otherservices-subcontainer'>
                    <div className="service-card">
                        <div className="otherservices-image" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/907d2e8b-5d24-40bf-387e-90be139c2d00/public')` }}></div>
                        <div className="otherservices-desc">
                            <div>
                                <a href='/services/full-interior-detail' className='service-heading-link'>Full Interior Detail</a>
                                <p className="secondary-text">Starting at: <br /><span>$299.99</span></p>
                            </div>
                            <p className="service-desc">With our array of tested methods and cleaners we can fix up any interior, even the dirtiest of them. Check out our Full Interior Detail page for more details!</p>

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
                                <a href='/services/interior-exterior-detailing-combo' className='service-heading-link'>The Dirt-Less Detail</a>
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
                                <a href='/services/biohazard-cleaning' className='service-heading-link'>Biohazard Cleaning</a>
                                <p className="secondary-text">Starting at: <br /><span>$399.99</span></p>
                            </div>
                            <p className="service-desc">Smoke, odors, or even mold making your vehicle unpleasant to drive in? We've got the tools to bring your car back to how it should be!</p>

                            <div className="otherservices-links">
                                <a href="/services/biohazard-cleaning" className="otherservices-readmore">Learn More</a>
                                <a href="/gallery/interior-detail-gallery" className='otherservices-readmore'>See Gallery</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/Contact" className="otherservices-readmore">Get in Touch!</a>
            </section>

            <hr className='otherservices-hr' />

            <section className="otherservices-container">
                <h2 className='service-title'>Ceramic Coating Services</h2>
                <p>Want an extra layer of protection inside or outside of your car? Check out our ceramic coating services!</p>
                <div className='otherservices-subcontainer'>
                    <div className="service-card">
                        <div className="otherservices-image" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/977438a8-129b-496b-9845-e55e3198e900/public')` }}></div>
                        <div className="otherservices-desc">
                            <div>
                                <a href='/services/exterior-ceramic-coating' className='service-heading-link'>Protect Ceramic Coating</a>
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
                                <a href='/services/exterior-ceramic-coating' className='service-heading-link'>Protect+ Ceramic Coating</a>
                                <p className="secondary-text">Starting at: <br /><span>$1,399.99</span></p>
                            </div>
                            <p className="service-desc">Our Protect+ Ceramic Coating package includes all that our Protect package does, a Full Dirt-Less Wash, Single Stage Paint Correction, and then we give you 3 coats of IGL's 10H Kenzo Graphene giving you 5 years of protection with good maintenance practices.</p>

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
                            <p className="service-desc">Interior ceramic coatings offer a number of benefits for your car's interior, including protection against spills, stains, and UV damage. These coatings also make cleaning and maintenance much easier, allowing you to keep your car looking and feeling like new for longer.</p>

                            <div className="otherservices-links">
                                <a href="/services/interior-ceramic-coating" className="otherservices-readmore">Learn More</a>
                                <a href="/gallery/ceramic-coating-gallery" className='otherservices-readmore'>See Gallery</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="/Contact" className="otherservices-readmore">Get in Touch!</a>
            </section>
        </div>
    )
}
