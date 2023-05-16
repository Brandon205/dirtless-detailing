import React from 'react';

import { AiFillCheckCircle } from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa';

export default function PopularServices() {
    return (
        <section className="popular-container">

            <div className='popular-services-card'>
                <div className='popular-img' style={{backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/be771e29-71fe-47b0-8fa3-0419d7991800/tallHD)`}}>
                </div>
                <div className='popular-header'>
                    <h3>Full Interior Detail</h3>
                </div>
                <a href="/Contact" className='choose-package'>Choose this Service <FaArrowRight /></a>

                <ul className='checklist'>
                    <li className='checklist-item'>
                        <AiFillCheckCircle className='check-circle' />
                        <p>Blow out interior with a vortex blowgun</p>
                    </li>
                    <li className='checklist-item'>
                        <AiFillCheckCircle className='check-circle' />
                        <p>Steam extraction (If added/needed)</p>
                    </li>
                    <li className='checklist-item'>
                        <AiFillCheckCircle className='check-circle' />
                        <p>Vacuum out entire interior</p>
                    </li>
                    <li className='checklist-item'>
                        <AiFillCheckCircle className='check-circle' />
                        <p>Clean ALL plastics/leather</p>
                    </li>
                    <li className='checklist-item'>
                        <AiFillCheckCircle className='check-circle' />
                        <p>Dress any vinyl/leathers</p>
                    </li>
                    <li className='checklist-item'>
                        <AiFillCheckCircle className='check-circle' />
                        <p>Clean door jambs</p>
                    </li>
                    <li className='checklist-item'>
                        <AiFillCheckCircle className='check-circle' />
                        <p>Clean ALL windows/glass</p>
                    </li>
                </ul>

                <div className='popular-link-container'>
                    <div>
                        <p style={{marginBottom: 0, color: '#c0c0c0', textAlign: 'left'}}>Starting At:</p>
                        <p className='popular-pricing-price'>$299.99</p>
                    </div>
                    <a href="/services/full-interior-detail" className='popular-readmore'>Learn More</a>
                </div>
            </div>

            <div className='popular-services-card'>
                <div className='popular-img' style={{backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/de5ece74-66af-46cb-8460-7e0246257b00/tallHD)`}}>
                </div>
                <div className='popular-header'>
                    <h3>The Dirt-Less Detail</h3>
                </div>
                <a href="/Contact" className='choose-package'>Choose this Service <FaArrowRight /></a>

                <ul className='checklist'>
                    <li className='checklist-item'>
                        <AiFillCheckCircle className='check-circle' />
                        <p>Blow out interior with a vortex blowgun</p>
                    </li>
                    <li className='checklist-item'>
                        <AiFillCheckCircle className='check-circle' />
                        <p>Vacuum out the interior</p>
                    </li>
                    <li className='checklist-item'>
                        <AiFillCheckCircle className='check-circle' />
                        <p>Wipe down and dress the interior</p>
                    </li>
                    <li className='checklist-item'>
                        <AiFillCheckCircle className='check-circle' />
                        <p>Full vehicle strip wash</p>
                    </li>
                    <li className='checklist-item'>
                        <AiFillCheckCircle className='check-circle' />
                        <p>Remove any tar and sap</p>
                    </li>
                    <li className='checklist-item'>
                        <AiFillCheckCircle className='check-circle' />
                        <p>Apply Ceramic Spray Sealant</p>
                    </li>
                    <li className='checklist-item'>
                        <AiFillCheckCircle className='check-circle' />
                        <p><span className='special-package underline'>Included</span> engine bay cleaning</p>
                    </li>
                </ul>

                <div className='popular-link-container'>
                    <div>
                        <p style={{marginBottom: 0, color: '#c0c0c0', textAlign: 'left'}}>Starting At:</p>
                        <p className='popular-pricing-price'>$374.99</p>
                    </div>
                    <a href="/services/interior-exterior-detailing-combo" className='popular-readmore'>Learn More</a>
                </div>
            </div>

            <div className='popular-services-card'>
                <div className='popular-img' style={{backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7c93452e-cf47-4898-a618-e427e19a0e00/tallHD)`}}>
                </div>
                <div className='popular-header'>
                    <h3>Ceramic Coating</h3>
                </div>
                <a href="/Contact" className='choose-package'>Choose this Service <FaArrowRight /></a>

                <ul className='checklist'>
                    <li className='checklist-item'>
                        <AiFillCheckCircle className='check-circle' />
                        <p>Full vehicle strip wash</p>
                    </li>
                    <li className='checklist-item'>
                        <AiFillCheckCircle className='check-circle' />
                        <p>Single stage paint correction</p>
                    </li>
                    <li className='checklist-item'>
                        <AiFillCheckCircle className='check-circle' />
                        <p>Clay bar treatment</p>
                    </li>
                    <li className='checklist-item'>
                        <AiFillCheckCircle className='check-circle' />
                        <p>Iron decontamination treatment</p>
                    </li>
                    <li className='checklist-item'>
                        <AiFillCheckCircle className='check-circle' />
                        <p>Dress all plastics and tires</p>
                    </li>
                    <li className='checklist-item'>
                        <AiFillCheckCircle className='check-circle' />
                        <p>Coat paint with IGL's Quartz Ceramic 9H Coating</p>
                    </li>
                    <li className='checklist-item'>
                        <AiFillCheckCircle className='check-circle' />
                        <p>Coat windshield and lights</p>
                    </li>
                </ul>

                <div className='popular-link-container'>
                    <div>
                        <p style={{marginBottom: 0, color: '#c0c0c0', textAlign: 'left'}}>Starting At:</p>
                        <p className='popular-pricing-price'>$949.99</p>
                    </div>
                    <a href="/services/exterior-ceramic-coating" className='popular-readmore'>Learn More</a>
                </div>
            </div>
        </section>
    )
}
