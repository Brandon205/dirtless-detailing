import React from 'react';

import cover from '../assets/imgs/fullIntExCover.jpg';

const steps = [
  "Steam Clean.",
  "Degrease.",
  "Dress Engine Bay."
]

export default function Engine() {
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
      <h1 className='servicepage-heading'>Engine Bay Cleaning</h1>
      <div className='main-content-container'>
        <h2>Our Engine Bay Cleaning Process</h2>
        <ol className='list'>
          {content}
        </ol>
        <h2>Pricing</h2>
        <h4>Our basic prices for this service are shown below</h4>
        <div className="pricing-container">
          <div className="pricing-card">
            <p className="example-vehicle">Any size Vehicle</p>
            <p className="pricing-price">$80</p>
          </div>
        </div>
      </div>
    </section>
  )
}
