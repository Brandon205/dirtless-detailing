import React from 'react';

import cover from '../assets/imgs/fullIntExCover.jpg';

const steps = [
  "We will first determine what fabric and materials are present to find the lightest form of cleaning to start with.",
  "We will perform the cleaning methods found from the first step, we do this to prevent sagging and damage to the headliners. (results may vary)"
]

export default function Headliners() {
  const content = steps.map((item, id) => {
    return (
      <li key={id} className="item">
        <h3>Step {id + 1}:</h3>
        <p>{item}</p>
      </li>
    )
  })
  return (
    <section className='content-container'>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}></div>
      <h1 className='servicepage-heading'>Headliners</h1>
      <div className='main-content-container'>
        <h2>Our Headliner Cleaning Process</h2>
        <ol className='list'>
          {content}
        </ol>
        <h2>Pricing</h2>
        <h4>Our basic prices are shown below, actual prices will be based on your vehicle size.</h4>
        <div className="pricing-container">
          <div className="pricing-card">
            <p className="example-vehicle">Any size vehicle, price will vary on products needed and cleanlyness of the headliners</p>
            <p className="pricing-price">$40-$80</p>
          </div>
        </div>
      </div>
    </section>
  )
}
