import React from 'react';

import cover from '../../assets/imgs/fullIntExCover.jpg';

const steps = [
  "Thourough 2 bucket or foam wash top to bottom including the gas door.",
  "Clean wheels, wheel wells, wheel barrels.",
  "Dry the whole vehicle with supple towels and air blowers.",
  "Apply Spray Wax.",
  "Dress tires, wheel wells, plastics.",
  "Clean door jambs."
]

export default function DLWash() {
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
      <h1 className='servicepage-heading'>Dirt-Less Wash</h1>
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
            <p className="pricing-price">$75</p>
          </div>
          <div className="pricing-card">
            <h4 className="size">Medium</h4>
            <p className="example-vehicle">Mid size SUV's, and most Wagons</p>
            <p className="pricing-price">$100</p>
          </div>
          <div className="pricing-card">
            <h4 className="size">Large</h4>
            <p className="example-vehicle">Big SUV's and Big trucks</p>
            <p className="pricing-price">$125</p>
          </div>
          <div className="pricing-card">
            <h4 className="size">Extra Large</h4>
            <p className="example-vehicle">Massive trucks and above</p>
            <p className="pricing-price">$150</p>
          </div>
        </div>
      </div>
    </section>
  )
}
