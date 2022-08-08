import React from 'react';

import cover from '../../assets/imgs/fullIntExCover.jpg';

const steps = [
  "Remove all overspray and waterspots we can."
]

export default function Waterspot() {
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
      <h1 className='servicepage-heading'>Waterspot and Overspray Removal</h1>
      <div className='main-content-container'>
        <h2>Our Overspray Removal Process</h2>
        <ol className='list'>
          {content}
        </ol>
        <h2>Pricing</h2>
        <h4>Our basic prices are shown below, actual prices will be based on your vehicle size.</h4>
        <div className="pricing-container">
          <div className="pricing-card">
            <p className="example-vehicle">Any size vehicle, price is per hour spent</p>
            <p className="pricing-price">$60/hour</p>
          </div>
        </div>
      </div>
    </section>
  )
}
