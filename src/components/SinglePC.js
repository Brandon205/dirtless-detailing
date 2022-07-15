import React from 'react';

import cover from '../assets/imgs/fullIntExCover.jpg';

const steps = [
  "Thorough strip wash top to bottom using 2 bucket method or foam wash, including gas door.",
  "Clean wheels, wheel wells, wheel barrels.",
  "Clay bar the entire vehicle to remove contaminants, and leave the paint smooth.",
  "Iron decontamination to get rid of the rest of the embeded particles in your paint.",
  "Dry the whole vehicle with Supple towels and air blowers.",
  "Tape off trim and sensitive areas (Some detailers skip this step).",
  "Complete Single Stage paint correction using Griots products removing 65-80% of scratches and swirls.",
  "Protect paint with ceramic spray or coating.",
  "Clean door jams.",
  "Dress all plastics, wheel wells, tires."
]

export default function SinglePC() {
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
      <h1 className='servicepage-heading'>Single Stage Paint Correction</h1>
      <div className='main-content-container'>
        <h2>Our Paint Correction Process</h2>
        <ol className='list'>
          {content}
        </ol>
        <h2>Pricing</h2>
        <h4>Our basic prices are shown below, actual prices will be based on your vehicle size.</h4>
        <div className="pricing-container">
        <div className="pricing-card">
            <h4 className="size">Small</h4>
            <p className="example-vehicle">Small cars and mini trucks</p>
            <p className="pricing-price">$300-$450</p>
          </div>
          <div className="pricing-card">
            <h4 className="size">Medium</h4>
            <p className="example-vehicle">Mid size SUV's, and most Wagons</p>
            <p className="pricing-price">$450-$600</p>
          </div>
          <div className="pricing-card">
            <h4 className="size">Large</h4>
            <p className="example-vehicle">Big SUV's and Big trucks</p>
            <p className="pricing-price">$600-$850</p>
          </div>
        </div>
      </div>
    </section>
  )
}
