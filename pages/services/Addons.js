import React from 'react'
import Image from 'next/image';
import Head from 'next/head';

import cover from '../../public/imgs/addonsCover.webp';
import interior from '../../public/imgs/pageimgs/homepage/fullintex.webp';

// const waterSpotSteps = [
//     ["Waterspot/Overspray Removal", "Remove all overspray and waterspots we can."]
//   ]

// const glassSteps = [
//     ["Clean Glass", "Remove all scratches, etching, and watermarks possible."]
// ]

export default function Addons() {
//     const waterspotContent = waterSpotSteps.map((item, id) => {
//         return (
//             <li key={id} className="item">
//             <div className="step-number-container">
//                 <h3 className='step-number'>{id + 1}</h3><div className="vertical-rule"></div>
//             </div>
//             <div className="step-container">
//                 <h4 className="step-title">{item[0]}</h4>
//                 <p className='step-desc'>{item[1]}</p>
//             </div>
//             </li>
//         )
//     })

//     const glassContent = glassSteps.map((item, id) => {
//         return (
//           <li key={id} className="item">
//             <div className="step-number-container">
//               <h3 className='step-number'>{id + 1}</h3><div className="vertical-rule"></div>
//             </div>
//             <div className="step-container">
//               <h4 className="step-title">{item[0]}</h4>
//               <p className='step-desc'>{item[1]}</p>
//             </div>
//           </li>
//         )
//       })
  return (
    <section className='service-content-container'>
      <Head>
        <title>Dirt-Less Detailing | Addons</title>
      </Head>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="Vehicle after a Dirt-Less Wash with Glass Polishing addons" layout="fill" objectFit='cover' priority />
      </div>
      <h1 className='servicepage-header'>Dirt-Less Detailing Addons</h1>

      {/* <div className='main-content-container'>
        <div className="process-container">
          <div>
            <p>This can be added onto any of our Exterior or Paint Correction Services when contacting us.</p>
            <h2>Our Process</h2>
            <ol className='list'>
              {waterspotContent}
            </ol>
          </div>
        </div>

        <div>
          <h2>Our Pricing</h2>
          <h4>We charge an hourly rate for this service, prices may vary based on condition of the vehicle.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">All Vehicles</h4>
              <p className="example-vehicle">(Any Size)</p>
              <p className="pricing-price">$60/hour</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="addon-content-container">
        <div className="service-card">
          <Image src={interior} alt="TODO: CHANGE THIS IMAGE" className='otherservices-image' loading='lazy' placeholder='blur' quality={1} />
          <div className="otherservices-desc">
            <a href="/services/FullIntEx" className='service-heading-link'>Waterspot/Overspray Removal</a>
            <p className="secondary-text">Hourly rate: <span>$60/hour</span></p>
            <p className="service-desc">Remove all overspray and waterspots we can.</p>
            <p className="service-desc">• This can be added onto any of our Exterior Washes or any of our Paint Correction Services when contacting us.</p>

            <div>
              <a style={{marginBottom: 8}} href='/services/FullIntEx' className="readmore">Paint Correction Details {'>'}</a>
              <a href='/services/DLWash' className="readmore">Dirt-Less Wash Details {'>'}</a>
            </div>
          </div>
        </div>
        <div className="service-card">
          <Image src={interior} alt="TODO: CHANGE THIS IMAGE" className='otherservices-image' loading='lazy' placeholder='blur' quality={1} />
          <div className="otherservices-desc">
            <a href="/services/FullIntEx" className='service-heading-link'>Glass Polishing</a>
            <p className="secondary-text">Hourly rate: <span>$70/hour</span></p>
            <p className="service-desc">Remove all scratches, etching, and watermarks possible.</p>
            <p className="service-desc">• This can be added onto any of our Paint Correction Services when contacting us.</p>

            <div>
              <a style={{marginBottom: 8}} href='/services/FullIntEx' className="readmore">Paint Correction Details {'>'}</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className='main-content-container'>
        <div className="process-container">
          <div>
            <p>This can be added onto either of our Paint Correction Services when contacting us.</p>
            <h2>Our Process</h2>
            <ol className='list'>
              {glassContent}
            </ol>
          </div>
        </div>

        <div>
          <h2>Our Pricing</h2>
          <h4>We charge an hourly rate for this service, prices may vary based on condition of the vehicle.</h4>
          <div className="pricing-container">
            <div className="pricing-card">
              <h4 className="size">All Vehicles</h4>
              <p className="example-vehicle">(Any Size)</p>
              <p className="pricing-price">$70/hour</p>
            </div>
          </div>

          <h4>Interested? Click "Get Started" in the Navigation to get in touch!</h4>

        </div>
      </div> */}
    </section>
  )
}
