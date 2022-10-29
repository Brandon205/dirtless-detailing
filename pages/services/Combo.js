import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import cover from '../../public/imgs/ComboCover.webp';

const pdlSteps = [
    ["Wash Vehicle", "Thorough strip wash top to bottom including the gas door with the 2 bucket method or equivalent."],
    ["Wheel Cleaning", "Clean wheels, wheel wells, wheel barrels."],
    ["Wax Prep - Clay Bar", "Clay bar the whole vehicle so sealant properly adheres and paint is smooth."],
    ["Wax Prep - Iron Decontamination", "Iron Decontamination to make sure all microscopic iron contaminants are off of the paint, these are things that the clay bar won't get, this improves wax adhesion as well."],
    ["Remove tar and sap", "Remove any and all tar and sap from the exterior."],
    ["Dry Vehicle", "Dry the whole vehicle with clean towels and Air blowers."],
    ["Apply Wax", "Apply 6 month or more sealant."],
    ["Door Jambs", "Clean Door Jambs."]
]

const fullIntSteps = [
  ["Expose Hidden Dirt", "Use our Tornador Vortex blowgun which uses compressed air to blow out every spot a vacuum can't reach, it also extracts sand and loose soil from carpeting (Most detailers don't do this)."],
  ["Hot Water Extraction", "We use a professional hot water extractor and professional flex stain remover and alkaline floor rinse to keep floors at a neutral PH level. (Another thing other detailers won't do). We will be sure to get all carpets, floor mats, and cloth seats"],
  ["Vacuum Vehicle", "Thoroughly vacuum every crack and crevice of the vehicle"],
  ["Clean Plastics and Leathers", "Clean, steam, and degrease all plastics and leather seats"],
  ["Dress Interior", "Dress all vinyl and leather (if requested)"],
  ["Window Cleaning", "Clean windows"],
  ["Dress Entire Vehicle", "Dress all plastics, wheel wells, tires."]
]

export default function Combo() {

    const pdlContent = pdlSteps.map((item, id) => {
        return (
          <li key={id} className="item">
            <div className="step-number-container">
              <h3 className='step-number'>{id + 1}</h3><div className="vertical-rule"></div>
            </div>
            <div className="step-container">
              <h4 className="step-title">{item[0]}</h4>
              <p className='step-desc'>{item[1]}</p>
            </div>
          </li>
        )
      })

      const fullIntContent = fullIntSteps.map((item, id) => {
        return (
          <li key={id} className="item">
            <div className='step-number-container'>
              <h3 className='step-number'>{id + 1}</h3><div className="vertical-rule"></div>
            </div>
            <div className='step-container'>
              <h4 className="step-title">{item[0]}{id === 1 ? <span className='special-package'>*</span> : ""}</h4>
              <p className='step-desc'>{item[1]}</p>
            </div>
          </li>
        )
      })

  return (
    <section className='service-content-container'>
      <Head>
        <title>Dirt-Less Detailing | Combo</title>
      </Head>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="Vehicle after a Combo Wash" layout="fill" objectFit='cover' priority />
      </div>
      <h1 className='servicepage-header'>The Full Interior and Exterior Package</h1>

      <div className='main-content-container'>
        <div className="process-container" id="combo-process">
          <div>
            <h2>Our Premium Exterior Cleaning Process</h2>
            <ol className='list'>
              {pdlContent}
            </ol>
          </div>
          <div>
            <h2 className='cleaning-process-title'>Our Interior Cleaning Process*</h2>
            <ol className='list'>
              {fullIntContent}
            </ol>
            <h4 style={{marginTop: 0}}>*Headliners not included</h4>
            <h4><span className='special-package'>*</span>Extraction Package Only</h4>
          </div>

            <div className='aside-container'>
              <div className='service-aside addons-aside'>
              <h3><a href="/services/Addons" style={{color: 'black'}}>Extra Addons</a></h3>
                <div className="aside-links"> 
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/Addons/#glass" style={{color: 'blue'}}>Glass Polishing</a> - <span className="bold">$70</span>/hour</p>
                    <p className="subtext">Gives you crystal clear windows</p>
                  </div>
                  <div className="addon-container">
                    <p className='addon-title'><a href="/services/Addons/#waterspot" style={{color: 'blue'}}>Waterspot/Overspray</a> - <span className="bold">$60</span>/hour</p>
                    <p className="subtext">Remove Overspray and Waterspots from your vehicle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="combo-container">
          <h2>You get an <span className='special-package'>included</span> Engine cleaning with this order!</h2>
          <p className="subtext">When you book a <a href="/services/PDLWash">Premium Dirt-Less Wash</a> and a <a href="/services/FullIntEx">Full Interior Cleaning</a> together we will clean out your engine bay at no extra cost. (Click the Get Started in the navigation to get started).</p>
        </div>

        <div>
          <h2>Our Pricing</h2>
          <h4>Our basic prices are shown below, final pricing may vary based on your vehicle size and condition.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">Small</h4>
              <p className="example-vehicle">(Most Cars and Smaller Trucks)</p>
              <p className="pricing-price">$400</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">Medium</h4>
              <p className="example-vehicle">(Mid-Size SUV's, and Most Wagons)</p>
              <p className="pricing-price">$500</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">Large</h4>
              <p className="example-vehicle">(Large SUV's and Large trucks)</p>
              <p className="pricing-price">$600</p>
            </div>
            <div className="pricing-card">
              <h4 className="size">Extra Large</h4>
              <p className="example-vehicle">(Extra Large Vehicles)</p>
              <p className="pricing-price">$625+</p>
            </div>
          </div>

          <h4>Interested? Click "Get Started" in the Navigation to get in touch!</h4>

        </div>
    </section>
  )
}
