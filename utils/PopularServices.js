import React from 'react';
import { Link } from 'react-router-dom';

import { BsCheck2Circle } from 'react-icons/bs';

import interior from '../../assets/imgs/driverseatBA.webp';
import dlWash from '../../assets/imgs/dlwashA.webp';
import paint from '../../assets/imgs/paintcorrectionBA.webp';

export default function PopularServices() {
  return (
    <section className="popular-container">
        <div className="popular-services-card">
            <div className="popular-services-header">
                <Link to="full-int-ex" className="service-heading-link"><h2 className="popular-service-title">Full Interior Cleaning</h2></Link>
                <p className="price">Starting at: <span>$200</span></p>
            </div>
            <img src={interior} alt="car interior before and after" className="popular-img" />

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
            <Link to="full-int-ex" className="popular-readmore">
                <p>Learn More</p>
            </Link>
        </div>

        <div className="popular-services-card">
            <div className="popular-services-header">
                <Link to="premium-dl-wash" className="service-heading-link"><h2 className="popular-service-title">Premium Dirt-Less Wash</h2></Link>
                <p className="price">Starting at: <span>$150</span></p>
            </div>
            <img src={dlWash} alt="car exterior" className="popular-img" />
            
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
            <Link to="premium-dl-wash" className="popular-readmore">
                <p>Learn More</p>
            </Link>
        </div>

        <div className="popular-services-card">
            <div className="popular-services-header">
                <Link to="single-paint-correction" className="service-heading-link"><h2 className="popular-service-title">Single Stage Paint Correction</h2></Link>
                <p className="price">Starting at: <span>$300</span></p>
            </div>
            <img src={paint} alt="paint correction before and after" className="popular-img" />

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
            <Link to="single-paint-correction" className="popular-readmore">
                <p>Learn More</p>
            </Link>
        </div>
    </section>
  )
}
