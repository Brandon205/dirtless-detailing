import React from 'react';

export default function PopularServices(props) {
    return (
        <div className='service-bkg'>
            <h2 style={{ marginLeft: props.smallScreen ? '0' : '5%' }} className='service-title'>Our Most Popular Services</h2>
            <p style={{ marginLeft: props.smallScreen ? '0' : '5%' }}>From combo deals to ceramic coatings these are services you'll see us doing the most.</p>
            <section className="popular-container">


                <div className='popular-services-card'>
                    <div className='popular-img' style={{ backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/be771e29-71fe-47b0-8fa3-0419d7991800/tallHD)` }}>
                    </div>
                    <div className='popular-header'>
                        <h3>Full Interior Detail</h3>
                    </div>
                    <a href="/Contact" className='choose-package'>Get in Touch <img src='../assets/icons/rightArrow.png' alt='right arrow' className='icon-24' /></a>

                    <ul className='checklist'>
                        <li className='checklist-item'>
                            <img src='../assets/icons/checkmark1.png' alt='checkmark' className='check-circle' />
                            <p>Blow out interior with a vortex blowgun</p>
                        </li>
                        <li className='checklist-item'>
                            <img src='../assets/icons/checkmark1.png' alt='checkmark' className='check-circle' />
                            <p>Steam extraction (If added/needed)</p>
                        </li>
                        <li className='checklist-item'>
                            <img src='../assets/icons/checkmark1.png' alt='checkmark' className='check-circle' />
                            <p>Vacuum out entire interior</p>
                        </li>
                        <li className='checklist-item'>
                            <img src='../assets/icons/checkmark1.png' alt='checkmark' className='check-circle' />
                            <p>Clean ALL plastics/leather</p>
                        </li>
                        <li className='checklist-item'>
                            <img src='../assets/icons/checkmark1.png' alt='checkmark' className='check-circle' />
                            <p>Dress any vinyl/leathers</p>
                        </li>
                        <li className='checklist-item'>
                            <img src='../assets/icons/checkmark1.png' alt='checkmark' className='check-circle' />
                            <p>Clean door jambs</p>
                        </li>
                        <li className='checklist-item'>
                            <img src='../assets/icons/checkmark1.png' alt='checkmark' className='check-circle' />
                            <p>Clean ALL windows/glass</p>
                        </li>
                    </ul>

                    <div className='popular-link-container'>
                        <div>
                            <p style={{ marginBottom: 0, color: '#c0c0c0', textAlign: 'left' }}>Starting At:</p>
                            <p className='popular-pricing-price'>$299.99</p>
                        </div>
                        <a href="/services/full-interior-detail" className='popular-readmore' aria-label='Full Interior Detail Info'>Learn More</a>
                    </div>
                </div>

                <div className='popular-services-card'>
                    <div className='popular-img' style={{ backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/de5ece74-66af-46cb-8460-7e0246257b00/tallHD)` }}>
                    </div>
                    <div className='popular-header'>
                        <h3>The Dirt-Less Detail</h3>
                    </div>
                    <a href="/Contact" className='choose-package'>Get in Touch <img src='../assets/icons/rightArrow.png' alt='right arrow' className='icon-24' /></a>

                    <ul className='checklist'>
                        <li className='checklist-item'>
                            <img src='../assets/icons/checkmark1.png' alt='checkmark' className='check-circle' />
                            <p>Our Full Interior and Exterior Cleaning Treatment</p>
                        </li>
                        <li className='checklist-item'>
                            <img src='../assets/icons/checkmark1.png' alt='checkmark' className='check-circle' />
                            <p>Blow out and vacuum the interior</p>
                        </li>
                        <li className='checklist-item'>
                            <img src='../assets/icons/checkmark1.png' alt='checkmark' className='check-circle' />
                            <p>Wipe down and dress the interior</p>
                        </li>
                        <li className='checklist-item'>
                            <img src='../assets/icons/checkmark1.png' alt='checkmark' className='check-circle' />
                            <p>Full vehicle strip wash</p>
                        </li>
                        <li className='checklist-item'>
                            <img src='../assets/icons/checkmark1.png' alt='checkmark' className='check-circle' />
                            <p>Remove any tar and sap</p>
                        </li>
                        <li className='checklist-item'>
                            <img src='../assets/icons/checkmark1.png' alt='checkmark' className='check-circle' />
                            <p>Apply Ceramic Spray Sealant</p>
                        </li>
                        <li className='checklist-item'>
                            <img src='../assets/icons/checkmark1.png' alt='checkmark' className='check-circle' />
                            <p><span className='underline'>Included</span> engine bay cleaning</p>
                        </li>
                    </ul>

                    <div className='popular-link-container'>
                        <div>
                            <p style={{ marginBottom: 0, color: '#c0c0c0', textAlign: 'left' }}>Starting At:</p>
                            <p className='popular-pricing-price'>$374.99</p>
                        </div>
                        <a href="/services/interior-exterior-detailing-combo" className='popular-readmore' aria-label='Interior and Exterior Detailing Combo'>Learn More</a>
                    </div>
                </div>

                <div className='popular-services-card'>
                    <div className='popular-img' style={{ backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/c15b8a02-2b0e-4d0f-c313-a2d66bb6bb00/tallHD)` }}>
                    </div>
                    <div className='popular-header'>
                        <h3>Ceramic Coating</h3>
                    </div>
                    <a href="/Contact" className='choose-package'>Get in Touch <img src='../assets/icons/rightArrow.png' alt='right arrow' className='icon-24' /></a>

                    <ul className='checklist'>
                        <li className='checklist-item'>
                            <img src='../assets/icons/checkmark1.png' alt='checkmark' className='check-circle' />
                            <p>Full vehicle strip wash</p>
                        </li>
                        <li className='checklist-item'>
                            <img src='../assets/icons/checkmark1.png' alt='checkmark' className='check-circle' />
                            <p>Single stage paint correction</p>
                        </li>
                        <li className='checklist-item'>
                            <img src='../assets/icons/checkmark1.png' alt='checkmark' className='check-circle' />
                            <p>Clay bar treatment</p>
                        </li>
                        <li className='checklist-item'>
                            <img src='../assets/icons/checkmark1.png' alt='checkmark' className='check-circle' />
                            <p>Iron decontamination treatment</p>
                        </li>
                        <li className='checklist-item'>
                            <img src='../assets/icons/checkmark1.png' alt='checkmark' className='check-circle' />
                            <p>Dress all plastics and tires</p>
                        </li>
                        <li className='checklist-item'>
                            <img src='../assets/icons/checkmark1.png' alt='checkmark' className='check-circle' />
                            <p>Coat paint with IGL's Quartz Ceramic 9H Coating</p>
                        </li>
                        <li className='checklist-item'>
                            <img src='../assets/icons/checkmark1.png' alt='checkmark' className='check-circle' />
                            <p>Coat windshield and lights</p>
                        </li>
                    </ul>

                    <div className='popular-link-container'>
                        <div>
                            <p style={{ marginBottom: 0, color: '#c0c0c0', textAlign: 'left' }}>Starting At:</p>
                            <p className='popular-pricing-price'>$899.99</p>
                        </div>
                        <a href="/services/exterior-ceramic-coating" className='popular-readmore' aria-label='Ceramic Coating Info'>Learn More</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
