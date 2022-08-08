import React from 'react';

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
    <section className='content-container'>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}></div>
      <h1 className='servicepage-heading'>Smoke/Biohazard/Smell Removal</h1>
      <div className='main-content-container'>
        <h2>Our Biohazard Cleaning Process</h2>
        <ol className='list'>
          {content}
        </ol>
        <h2>Pricing</h2>
        <h4>Our basic prices are shown below, actual prices will be based on your vehicle size.</h4>
        <div className="pricing-container">
          <div className="pricing-card">
            <p className="example-vehicle">Any vehicle size, price will vary based on the situation</p>
            <p className="pricing-price">$300-$600</p>
          </div>
        </div>
      </div>
    </section>
  )
}
