import React from 'react';
import Image from 'next/image';

import { BsCheck2Circle } from 'react-icons/bs';

import interior from '../public/imgs/pageimgs/interior/driverseatBA.webp';
import dlWash from '../public/imgs/pageimgs/exterior/IMG_20220929_155119.jpg';
import paint from '../public/imgs/pageimgs/paintCorrection/paintcorrectionBA.webp';

export default function PopularServices() {
  return (
    <section className="popular-container">
        <div className="popular-services-card">
            <div className="popular-services-header">
                <a href='/services/FullIntEx' className="service-heading-link popular-service-title">Full Interior Cleaning</a>
                <p className="price">Starting at: <span>$200</span></p>
            </div>
            <div className='popular-img'>
                <Image style={{borderRadius: '1rem 1rem 0 0'}} src={interior} alt="Car interior before and after" layout='fill' objectFit='cover' loading='lazy' quality={25} />
            </div>

            <div className="popular-desc">
                <ul className="checklist">
                    <li className="checklist-item">
                        <BsCheck2Circle className='checkcircle' />
                        <p>Blow out with Vortex Blowgun</p>
                    </li>
                    <li className="checklist-item">
                        <BsCheck2Circle className='checkcircle' />
                        <p>Hot Water Extraction - If added</p>
                    </li>
                    <li className="checklist-item">
                        <BsCheck2Circle className='checkcircle' />
                        <p>Vacuum the Whole Interior</p>
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

            <a href='/services/FullIntEx' className='popular-readmore'>Interior Cleaning Details {'>'}</a>
        </div>

        <div className="popular-services-card">
            <div className="popular-services-header">
                <a href='/services/PDLWash' className="service-heading-link popular-service-title">Premium Dirt-Less Wash</a>
                <p className="price">Starting at: <span>$150</span></p>
            </div>
            <div className="popular-img">
                <Image style={{borderRadius: '1rem 1rem 0 0'}} src={dlWash} alt="Car exterior after Dirt-Less Wash" layout='fill' objectFit='cover' loading='lazy' quality={25} />
            </div>
            
            <div className="popular-desc">
                <ul className="checklist">
                    <li className="checklist-item">
                        <BsCheck2Circle className='checkcircle' />
                        <p>Full Vehicle Strip Wash</p>
                    </li>
                    <li className="checklist-item">
                        <BsCheck2Circle className='checkcircle' />
                        <p>Clean Wheel Wells, Wheel Barriers, and Wheels</p>
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
                        <p>Apply 6 month sealant or better</p>
                    </li>
                    <li className="checklist-item">
                        <BsCheck2Circle className='checkcircle' />
                        <p>Clean Door Jambs</p>
                    </li>
                    <li className="checklist-item">
                        <BsCheck2Circle className='checkcircle' />
                        <p>Dress Plastics, Wheel Wells, and Tires</p>
                    </li>
                </ul>
            </div>

            <a href="/services/PDLWash" className="popular-readmore">Premium Wash Details {'>'}</a>
        </div>

        <div className="popular-services-card">
            <div className="popular-services-header">
                <a href='/services/SinglePC' className="service-heading-link popular-service-title">Single Stage Paint Correction</a>
                <p className="price">Starting at: <span>$300</span></p>
            </div>
            <div className="popular-img">
                <Image style={{borderRadius: '1rem 1rem 0 0'}} src={paint} alt="Before and after a Paint Correction" layout='fill' objectFit='cover' loading='lazy' quality={25} />
            </div>

            <div className="popular-desc">
                <ul className="checklist">
                    <li className="checklist-item">
                        <BsCheck2Circle className='checkcircle' />
                        <p>Full Vehicle Strip Wash</p>
                    </li>
                    <li className="checklist-item">
                        <BsCheck2Circle className='checkcircle' />
                        <p>Clean Wheel Wells, Wheel Barrels, and Wheels</p>
                    </li>
                    <li className="checklist-item">
                        <BsCheck2Circle className='checkcircle' />
                        <p>Clay Bar and Iron Decontamination Treatment</p>
                    </li>
                    <li className="checklist-item">
                        <BsCheck2Circle className='checkcircle' />
                        <p>Remove Tar and Sap</p>
                    </li>
                    <li className="checklist-item">
                        <BsCheck2Circle className='checkcircle' />
                        <p>Tape Off All Trim</p>
                    </li>
                    <li className="checklist-item">
                        <BsCheck2Circle className='checkcircle' />
                        <p>Single Stage Paint Correction</p>
                    </li>
                    <li className="checklist-item">
                        <BsCheck2Circle className='checkcircle' />
                        <p>Ceramic Spray/Coat</p>
                    </li>
                </ul>
            </div>
            
            <a href="/services/SinglePC" className="popular-readmore">Paint Correction Details {'>'}</a>
        </div>
    </section>
  )
}
