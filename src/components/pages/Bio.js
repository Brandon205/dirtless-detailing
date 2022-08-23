import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { BsCheck2Circle } from 'react-icons/bs';

import cover from '../../assets/imgs/fullIntExCover.jpg';

const steps = [
  "We will first determine what products will need to be used to best suit the situation.",
  "Then we will perform Ozone Air treatment to fill all bacteria, mold spores, and get rid of smells where it's impossible to get to conventionally."
]

export default function Bio() {
  const content = steps.map((item, id) => {
    return (
      <li key={id} className="item">
        <h3>Step {id + 1}:</h3>
        <p>{item}</p> 
      </li>
    )
  });

  return (
    <section className='service-content-container'>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}></div>
      <h1 className='servicepage-header'>Smoke/Biohazard/Odor Removal</h1>



      <div className='main-content-container'>
        <div>
          <h2>Our Biohazard Cleaning Process</h2>
          <ol className='list'>
            {content}
          </ol>

          <div className="service-checklist">
            <h3 className="checklist-title">Biohazard Cleaning</h3>
            <h4>This Package Includes:</h4>
            <ul className="checklist">
              <li className="checklist-item">
                <BsCheck2Circle className='checkcircle' />
                <p>Finding the correct procedure</p>
              </li>
              <li className="checklist-item">
                <BsCheck2Circle className='checkcircle' />
                <p>Treating the areas to eliminate all issues</p>
              </li>
            </ul>
          </div>

          <h2>Bio Hazard Cleaning Pricing</h2>
          <h4>Our basic prices are shown below, actual prices will be based on your vehicle size.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <p className="example-vehicle">Any vehicle size, price will vary based on the situation</p>
              <p className="pricing-price">$300-$600</p>
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
