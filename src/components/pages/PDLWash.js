import React from 'react';

import cover from '../../assets/imgs/fullIntExCover.jpg';

const steps = [
  "Thorough strip wash top to bottom including the gas door with the 2 bucket method or using a Foam Cannon.",
  "Clean wheels, wheel wells, wheel barrels.",
  "Clay bar the whole vehicle so was properly adheas and paint is smooth.",
  "Iron Decontamination to make sure everything is off of the paint, this improves wax adhesion as well.",
  "Dry the whole vehicle with Supple towels and Air blowers.",
  "Apply Griots 3 in 1 Ceramic Spray Wax (Best in the Industy, trust us).",
  "Clean Door Jambs.",
  "Dress all plastics, wheel wells, tires."
]

export default function PDLWash() {
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
      <h1 className='servicepage-heading'>Premium Dirt-Less Wash</h1>
      <div className='main-content-container'>
        <h2>Our Exterior Cleaning Process</h2>
        <ol className='list'>
          {content}
        </ol>
        <h2>Pricing</h2>
        <h4>Our basic prices are shown below, actual prices will be based on your vehicle size.</h4>
        <div className="pricing-container">
          <div className="pricing-card">
            <h4 className="size">Small</h4>
            <p className="example-vehicle">Small cars and mini trucks</p>
            <p className="pricing-price">$150</p>
          </div>
          <div className="pricing-card">
            <h4 className="size">Medium</h4>
            <p className="example-vehicle">Mid size SUV's, and most Wagons</p>
            <p className="pricing-price">$200</p>
          </div>
          <div className="pricing-card">
            <h4 className="size">Large</h4>
            <p className="example-vehicle">Big SUV's and Big trucks</p>
            <p className="pricing-price">$250</p>
          </div>
          <div className="pricing-card">
            <h4 className="size">Extra Large</h4>
            <p className="example-vehicle">Massive trucks and above</p>
            <p className="pricing-price">$275</p>
          </div>
        </div>
      </div>
    </section>
  )
}
