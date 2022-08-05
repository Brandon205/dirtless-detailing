import React from 'react';

import cover from '../assets/imgs/fullIntExCover.jpg';

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
        <h3>Step {id + 1}:</h3>
        {id === 2 ? <span className='special-package'>EXTRACTION PACKAGE ONLY: </span> : ""}
        <p>{item}</p>
      </li>
    )
  })
  return (
    <section className='content-container'>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}></div>
      <h1 className='servicepage-heading'>Full Interior With Extraction</h1>
      <div className='main-content-container'>
        <h2>Our Interior Cleaning Process</h2>
        <ol className='list'>
          {content}
        </ol>
        <h4>*Headliners not included</h4>
        <h2>Pricing</h2>
        <h4>Our basic prices are shown below, actual prices will be based on your vehicle size.</h4>
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
    </section>
  )
}
