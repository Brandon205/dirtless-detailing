import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { BsCheck2Circle } from 'react-icons/bs';

import cover from '../../assets/imgs/fullIntExCover.jpg';

const steps = [
  "Thouroughly vacuum every crack and crevice of the vehicle",
  "Use our Tornador Vortex blowgun which uses compressed air to blow out every spot a vacuum can't reach, it also extracts sand and loose soil from carpeting (Most detailers don't do this).",
  "We use a professional hot water extractor and professional flex stain remover and alkaline floor rinse to keep floors at a neutral PH level. (Another thing other detailers won't do). We will be sure to get all carpets, floor mats, and cloth seats",
  "Clean, steam, and degrease all plastics and leather seats",
  "Dress all vinyl and leather (if wanted)",
  "Clean all of the door jambs",
  "Clean windows",
]

export default function FullIntEx() {
  const content = steps.map((item, id) => {
    return (
      <li key={id} className="item">
        <h3>Step {id + 1}{id === 2 ? <span className='special-package'>*</span> : ""}:</h3>
        <p>{item}</p>
      </li>
    )
  })

  return (
    <section className='service-content-container'>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}></div>
      <h1 className='servicepage-header'>Full Interior Cleaning</h1>

      <div className='main-content-container'>
        <div>
          <h2>Our Interior Cleaning Process*</h2>
          <ol className='list'>
            {content}
          </ol>
          <h4>*Headliners not included</h4>
          <h4><span className='special-package'>*</span>Extraction Package Only</h4>

          <div className="service-checklist">
            <h3 className="checklist-title">Full Interior Cleaning</h3>
            <h4>This Package Includes:</h4>
            <ul className="checklist">
              <li className="checklist-item">
                <BsCheck2Circle className='checkcircle' />
                <p>Vacuum the Whole Interior</p>
              </li>
              <li className="checklist-item">
                <BsCheck2Circle className='checkcircle' />
                <p>Tornador Vortex Blowgun</p>
              </li>
              <li className="checklist-item">
                <BsCheck2Circle className='checkcircle' />
                <p>Hot Water Extraction</p>
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

          <h2>Full Interior Without Extraction Pricing</h2>
          <h4>Our basic prices are shown below, actual prices will be based on your vehicle size.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">Small</h4>
              <p className="example-vehicle">2 Door Coupes, Single and Extended Cabs</p>
              <p className="pricing-price">$200</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">Medium</h4>
              <p className="example-vehicle">4 Door Sedans, 4 Door Trucks, Smaller SUV's</p>
              <p className="pricing-price">$250</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">Large</h4>
              <p className="example-vehicle">Big SUV's and 3 Row SUV's</p>
              <p className="pricing-price">$300</p>
            </div>
          </div>

          <h2>Full Interior With Extraction Pricing</h2>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">Small</h4>
              <p className="example-vehicle">2 Door Coupes, Single and Extended Cabs</p>
              <p className="pricing-price">$250</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">Medium</h4>
              <p className="example-vehicle">4 Door Sedans, 4 Door Trucks, Smaller SUV's</p>
              <p className="pricing-price">$300</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">Large</h4>
              <p className="example-vehicle">Big SUV's and 3 Row SUV's</p>
              <p className="pricing-price">$350</p>
          </div>
          </div>
        </div>

        <div className='aside-container'>
          <div className='service-aside'>
            <h3>Other Interior Services</h3>
            <div className="aside-links">
              <Link to="/full-int-ex" style={{color: window.location.href.endsWith('full-int-ex') ? 'blue' : 'black'}} className='service-link'>{window.location.href.endsWith('full-int-ex') ? '> ' : ''} Full Interior Cleaning</Link><br />
              <Link to="/bio" style={{color: window.location.href.endsWith('bio') ? 'blue' : 'black'}} className='service-link'>{window.location.href.endsWith('bio') ? '> ' : ''} Bio Hazard/Odor Cleaning</Link><br />
              <Link to="/headliners" style={{color: window.location.href.endsWith('headliners') ? 'blue' : 'black'}} className={'service-link'}>{window.location.href.endsWith('headliners') ? '> ' : ''} Headliners</Link>
            </div>
          </div>
          <HashLink smooth to="/#contact" className="quote-btn top-quote-btn service-page-quote-btn">Contact Us</HashLink>
        </div>
      </div>

    </section>
  )
}
