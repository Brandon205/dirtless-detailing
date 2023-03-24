import React from 'react';

import { BsCheck2Circle } from 'react-icons/bs';

export default function PopularServices() {
    return (
        <section className="popular-container">
            <div className="popular-services-card">
                <div className="popular-services-header">
                    <a href='/services/full-interior-detail' className="service-heading-link popular-service-title">Full Interior Cleaning</a>
                    <p className="price">Starting at: <span>$200</span></p>
                </div>
                <div className="popular-img" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4f5cb5ee-45a7-4123-acaf-586335420600/public')` }}></div>


                <div className="popular-desc">
                    <ul className="checklist">
                        <li className="checklist-item">
                            <BsCheck2Circle className='checkcircle' />
                            <p>Blow out the Interior with a Vortex Blowgun</p>
                        </li>
                        <li className="checklist-item">
                            <BsCheck2Circle className='checkcircle' />
                            <p>Hot Water Extraction (Only if Added)</p>
                        </li>
                        <li className="checklist-item">
                            <BsCheck2Circle className='checkcircle' />
                            <p>Vacuum out the Entire Interior</p>
                        </li>
                        <li className="checklist-item">
                            <BsCheck2Circle className='checkcircle' />
                            <p>Clean ALL Plastics/Leather</p>
                        </li>
                        <li className="checklist-item">
                            <BsCheck2Circle className='checkcircle' />
                            <p>Dress Vinyl/Leather</p>
                        </li>
                        <li className="checklist-item">
                            <BsCheck2Circle className='checkcircle' />
                            <p>Clean Door Jambs</p>
                        </li>
                        <li className="checklist-item">
                            <BsCheck2Circle className='checkcircle' />
                            <p>Clean Windows</p>
                        </li>
                    </ul>
                </div>

                <a href='/services/full-interior-detail' className='popular-readmore'>Interior Cleaning Details</a>
            </div>

            <div className="popular-services-card">
                <div className="popular-services-header">
                    <a href='/services/interior-exterior-detailing-combo' className="service-heading-link popular-service-title">Full Interior + Exterior + Engine Bay Combo</a>
                    <p className="price">Starting at: <span>$350</span></p>
                </div>
                <div className="popular-img" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/de5ece74-66af-46cb-8460-7e0246257b00/public')` }}></div>


                <div className="popular-desc">
                    <ul className="checklist">
                        <li className="checklist-item">
                            <BsCheck2Circle className='checkcircle' />
                            <p>Vortex Blowgun to remove loose dirt/debris</p>
                        </li>
                        <li className="checklist-item">
                            <BsCheck2Circle className='checkcircle' />
                            <p>Vacuum out the interior</p>
                        </li>
                        <li className="checklist-item">
                            <BsCheck2Circle className='checkcircle' />
                            <p>Wipe Down and dress the interior</p>
                        </li>
                        <li className="checklist-item">
                            <BsCheck2Circle className='checkcircle' />
                            <p>Full Vehicle Strip Wash</p>
                        </li>
                        <li className="checklist-item">
                            <BsCheck2Circle className='checkcircle' />
                            <p>Clay Bar and Iron Decontamination</p>
                        </li>
                        <li className="checklist-item">
                            <BsCheck2Circle className='checkcircle' />
                            <p>Apply 6 month sealant</p>
                        </li>
                        <li className="checklist-item">
                            <BsCheck2Circle className='checkcircle' />
                            <p>Clean and dress the entire Engine Bay for FREE</p>
                        </li>
                    </ul>
                </div>

                <a href="/services/interior-exterior-detailing-combo" className="popular-readmore">Combo Deal Details</a>
            </div>

            <div className="popular-services-card">
                <div className="popular-services-header">
                    <a href='/services/single-stage-correction' className="service-heading-link popular-service-title">Ceramic Coating <br />(Protect Package)</a>
                    <p className="price">Starting at: <span>$1,000</span></p>
                </div>
                <div className="popular-img" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/7c93452e-cf47-4898-a618-e427e19a0e00/public')` }}></div>

                <div className="popular-desc">
                    <ul className="checklist">
                        <li className="checklist-item">
                            <BsCheck2Circle className='checkcircle' />
                            <p>Full Vehicle Strip Wash</p>
                        </li>
                        <li className="checklist-item">
                            <BsCheck2Circle className='checkcircle' />
                            <p>Full Single Stage Paint Correction Service</p>
                        </li>
                        <li className="checklist-item">
                            <BsCheck2Circle className='checkcircle' />
                            <p>Clay Bar Treatment</p>
                        </li>
                        <li className="checklist-item">
                            <BsCheck2Circle className='checkcircle' />
                            <p>Iron Decontamination Treatment</p>
                        </li>
                        <li className="checklist-item">
                            <BsCheck2Circle className='checkcircle' />
                            <p>Dress all Plastics and Tires</p>
                        </li>
                        <li className="checklist-item">
                            <BsCheck2Circle className='checkcircle' />
                            <p>Coat Paint with IGL Kenzo Graphene 10H Ceramic</p>
                        </li>
                        <li className="checklist-item">
                            <BsCheck2Circle className='checkcircle' />
                            <p>Coat Windshield and Lights as well</p>
                        </li>
                    </ul>
                </div>

                <a href="/services/exterior-ceramic-coating" className="popular-readmore">Ceramic Coating Details</a>
            </div>
        </section>
    )
}
