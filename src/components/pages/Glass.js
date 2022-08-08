import React from 'react';

import cover from '../../assets/imgs/fullIntExCover.jpg';

const steps = [
  "Remove all scratches, etching, and watermarks possible."
]

export default function Glass() {
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
      <h1 className='servicepage-heading'>Glass Polishing</h1>
      <div className='main-content-container'>
        <h2>Our Glass Polishing Process</h2>
        <ol className='list'>
          {content}
        </ol>
        <h2>Pricing</h2>
        <h4>Our basic prices are shown below, actual prices will be based on your vehicle size.</h4>
        <div className="pricing-container">
          <div className="pricing-card">
            <p className="example-vehicle">Any size vehicle, price is per hour spent</p>
            <p className="pricing-price">$70/hour</p>
          </div>
        </div>
      </div>
    </section>
  )
}
