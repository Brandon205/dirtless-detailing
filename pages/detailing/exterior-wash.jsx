import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import cover from '../../public/imgs/pageimgs/exterior/IMG_20220929_155111.jpg';
import ext1 from '../../public/imgs/pageimgs/exterior/IMG_20200722_161452.jpg';
import ext2 from '../../public/imgs/pageimgs/exterior/IMG_20210309_092147.jpg';
import ext3 from '../../public/imgs/pageimgs/exterior/IMG_20220823_145025.jpg';
import ext4 from '../../public/imgs/pageimgs/exterior/IMG_20220806_084540.jpg';
import ext5 from '../../public/imgs/pageimgs/exterior/IMG_20220324_180154.jpg';
import ext6 from '../../public/imgs/pageimgs/exterior/IMG_20211009_114936.jpg';
import ext7 from '../../public/imgs/pageimgs/exterior/IMG_20210505_144759.jpg';
import ext8 from '../../public/imgs/pageimgs/exterior/IMG_20200702_101443.jpg';

export default function exteriorWash() {
  return (
    <div>
      <Head>
        <title>Dirt-Less Detailing | Exterior Wash Services</title>
        <meta property="og:title" content="Dirt-Less Detailing | Exterior Wash Services" />
        <meta property="description" content="Come see our exterior wash services that we provide, they will leave your vehicle washed and protected." />
        <meta property="og:description" content="Come see our exterior wash services that we provide, they will leave your vehicle washed and protected." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dirtlessdetailing.com/detailing/exterior-wash" />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/detailing/exterior-wash" />
      </Head>
      <div className="cover">
        <Image src={cover} alt="Car after Paint Correction service" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header location-header">
        <h1>Exterior Wash Services</h1>
        <h2>Dirt-Less Wash, Premium Dirt-Less Wash, and Engine Bay Washes</h2>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
      </div>

      <main className="location-main">
        <h2 className='large'>Professional Exterior Washes.</h2>
        <p>With either of our car wash services your vehicle will be left in a dealership ready state.</p>
        <p>Our Dirt-Less Detail will clean the whole exterior of your vehicle from the wheel wells to the roof racks.</p>
        <p>Go the extra mile with our Premium service to get clay bar and iron decontamination treatment as well, and ensure that all contaminants are off of your vehicle.</p>

        <br className='extra-space' />

        <h2 className='large'>What's the difference between the Dirt-Less Wash and the Premium version?</h2>
        <p>For a more detailed side by side comparison check out the steps below.</p>
        <p>Basically with the Premium wash we go above and beyond what is done in the Dirt-Less wash. Here are some of the extra steps we will take:</p>
        <p>We will clay bar the entire vehicle to leave the vehicle smooth and to make sure the wax we apply adheres as good as possible.</p>
        <p>Then we will perform an Iron Decontamination to get any remnants that the clay bar might have missed including microscopic iron contaminants.</p>

        <br className='extra-space' />

        <h2 className='large'>Truck Bed Cleaning - <span className="special-package">$25</span></h2>
        <p>Typically in our washes by default we don't clean out truck beds, but if you want us to this is just the addon for you. We will fully rinse out and clean any size truck bed.</p>

        <br className='extra-space' />

        <h2 className='large'>Engine Bay Wash - <span className="special-package">$80</span></h2>
        <p>When washing engine bays we cover and take care of any and all electronics and other sensitive areas of the engine bay so there's nothing to worry about.</p>

        <br className='extra-space' />
      </main>

      <div className='sidebyside only-bg'>
        <div>
          <h2 className="cleaning-process-title">Our Premium Dirt-Less Wash Process*</h2>
          <ol className="list">
            <li className="item">
              <div className="step-number-container">
                <h3 className="step-number">1</h3><div className="vertical-rule"></div>
              </div>
              <div className="step-container">
                <h4 className="step-title">Wash Vehicle</h4>
                <p className="step-desc">Thorough 2 bucket or equivalent top to bottom wash including the gas door.</p>
              </div>
            </li>
            <li className="item">
              <div className="step-number-container">
                <h3 className="step-number">2</h3><div className="vertical-rule"></div>
              </div>
              <div className="step-container">
                <h4 className="step-title">Wheel Cleaning</h4>
                <p className="step-desc">Clean wheels, wheel wells, and wheel barrels.</p>
              </div>
            </li>
            <li className="item">
              <div className="step-number-container">
                <h3 className="step-number">3</h3><div className="vertical-rule"></div>
              </div>
              <div className="step-container">
                <h4 className="step-title">Remove tar and sap</h4>
                <p className="step-desc">Remove any and all tar and sap from the exterior</p>
              </div>
            </li>
            <li className="item">
              <div className="step-number-container">
                <h3 className="step-number">4</h3><div className="vertical-rule"></div>
              </div>
              <div className="step-container">
                <h4 className="step-title">Wax Prep - Clay Bar</h4>
                <p className="step-desc">Clay bar the whole vehicle so sealant properly adheres and paint is left smooth.</p>
              </div>
            </li>
            <li className="item">
              <div className="step-number-container">
                <h3 className="step-number">5</h3><div className="vertical-rule"></div>
              </div>
              <div className="step-container">
                <h4 className="step-title">Wax Prep - Iron Decontamination</h4>
                <p className="step-desc">Decontaminate the vehicle to make sure all microscopic iron contaminants are off of the paint. These are things that the clay bar won't get. This will improve wax adhesion as well.</p>
              </div>
            </li>
            <li className="item">
              <div className="step-number-container">
                <h3 className="step-number">6</h3><div className="vertical-rule"></div>
              </div>
              <div className="step-container">
                <h4 className="step-title">Dry Vehicle</h4>
                <p className="step-desc">Dry the whole vehicle with clean towels and air blowers.</p>
              </div>
            </li>
            <li className="item">
              <div className="step-number-container">
                <h3 className="step-number">7</h3><div className="vertical-rule"></div>
              </div>
              <div className="step-container">
                <h4 className="step-title">Wax</h4>
                <p className="step-desc">Apply spray wax.</p>
              </div>
            </li>
            <li className="item">
              <div className="step-number-container">
                <h3 className="step-number">8</h3><div className="vertical-rule"></div>
              </div>
              <div className="step-container">
                <h4 className="step-title">Door Jambs</h4>
                <p className="step-desc">Clean door jambs</p>
              </div>
            </li>
            <li className="item">
              <div className="step-number-container">
                <h3 className="step-number">9</h3><div className="vertical-rule"></div>
              </div>
              <div className="step-container">
                <h4 className="step-title">Dress Vehicle</h4>
                <p className="step-desc">Dress tires, wheel wells, and plastics.</p>
              </div>
            </li>
          </ol>
        </div>

        <div>
          <h2 className="cleaning-process-title">Our Simple Dirt-Less Wash Process*</h2>
          <ol className="list">
            <li className="item">
              <div className="step-number-container">
                <h3 className="step-number">1</h3><div className="vertical-rule"></div>
              </div>
              <div className="step-container">
                <h4 className="step-title">Wash Vehicle</h4>
                <p className="step-desc">Thorough 2 bucket or equivalent top to bottom wash including the gas door.</p>
              </div>
            </li>
            <li className="item">
              <div className="step-number-container">
                <h3 className="step-number">2</h3><div className="vertical-rule"></div>
              </div>
              <div className="step-container">
                <h4 className="step-title">Wheel Cleaning</h4>
                <p className="step-desc">Clean wheels, wheel wells, and wheel barrels.</p>
              </div>
            </li>
            <li className="item">
              <div className="step-number-container">
                <h3 className="step-number">3</h3><div className="vertical-rule"></div>
              </div>
              <div className="step-container">
                <h4 className="step-title">Dry Vehicle</h4>
                <p className="step-desc">Dry the whole vehicle with clean towels and air blowers.</p>
              </div>
            </li>
            <li className="item">
              <div className="step-number-container">
                <h3 className="step-number">4</h3><div className="vertical-rule"></div>
              </div>
              <div className="step-container">
                <h4 className="step-title">Wax</h4>
                <p className="step-desc">Apply spray wax.</p>
              </div>
            </li>
            <li className="item">
              <div className="step-number-container">
                <h3 className="step-number">5</h3><div className="vertical-rule"></div>
              </div>
              <div className="step-container">
                <h4 className="step-title">Dress Vehicle</h4>
                <p className="step-desc">Dress tires, wheel wells, and plastics.</p>
              </div>
            </li>
          </ol>
        </div>
        {/* <h4 style={{marginTop: 0}}> *Truck Bed cleaning offered as an extra add-on if needed. </h4> */}
      </div>

      <div className='locationpage-section no-bg'>
        <h3 className='pricing-title text-black'>Our Dirt-Less Wash Pricing</h3>
        <h4 className='pricing-subtext'>*Final pricing may vary based on your vehicle condition and size.</h4>
        <div className="pricing-container text-black">
          <div className="pricing-card">
            <h4 className="size" style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Small</h4>
            <h4 className="size">Dirt-Less Wash</h4>
            <p className="pricing-price pricing-border">$75</p>
            <h4 className="size">Premium Dirt-Less Wash</h4>
            <p className="pricing-price pricing-border">$150</p>
            <p className="example-vehicle pricing-border">Smaller Trucks</p>
            <p className="example-vehicle pricing-border">Most Cars</p>
            <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
          </div>
          <div className="pricing-card">
            <h4 className="size" style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Medium</h4>
            <h4 className="size">Dirt-Less Wash</h4>
            <p className="pricing-price pricing-border">$100</p>
            <h4 className="size">Premium Dirt-Less Wash</h4>
            <p className="pricing-price pricing-border">$200</p>
            <p className="example-vehicle pricing-border">Mid-Size SUVs</p>
            <p className="example-vehicle pricing-border">Most Wagons</p>
            <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
          </div>
          <div className="pricing-card">
            <h4 className="size" style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Large</h4>
            <h4 className="size">Dirt-Less Wash</h4>
            <p className="pricing-price pricing-border">$125</p>
            <h4 className="size">Premium Dirt-Less Wash</h4>
            <p className="pricing-price pricing-border">$250</p>
            <p className="example-vehicle pricing-border">Large SUVs</p>
            <p className="example-vehicle pricing-border">Some Trucks</p>
            <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
          </div>
          <div className="pricing-card">
            <h4 className="size" style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Extra Large</h4>
            <h4 className="size">Dirt-Less Wash</h4>
            <p className="pricing-price pricing-border">$150</p>
            <h4 className="size">Premium Dirt-Less Wash</h4>
            <p className="pricing-price pricing-border">$275</p>
            <p className="example-vehicle pricing-border">Larger Trucks</p>
            <p className="example-vehicle pricing-border">Extra Large Vehicles</p>
            <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
          </div>
        </div>
      </div>

      <div className="locationpage-section no-bg">
        <h3 className='large'>Check out some of the results from our exterior services</h3>
        <div className="gallery-container">
          <Zoom>
            <div className='gallery-image-div'>
              <Image style={{borderRadius: 16}} alt='Lexus Exterior after a wash' objectFit="cover" src={ext1} loading="lazy" placeholder='blur' />
            </div>
          </Zoom>
          <Zoom>
            <div className='gallery-image-div'>
              <Image style={{borderRadius: 16}} alt='Before and after our wash service' objectFit="cover" src={ext2} loading="lazy" placeholder='blur' />
            </div>
          </Zoom>
          <Zoom>
            <div className='gallery-image-div'>
              <Image style={{borderRadius: 16}} alt='Spotless Lexus interior' objectFit="cover" src={ext3} loading="lazy" placeholder='blur' />
            </div>
          </Zoom>
          <Zoom>
            <div className='gallery-image-div'>
              <Image style={{borderRadius: 16}} alt='Cleaned BMW interior' objectFit="cover" src={ext4} loading="lazy" placeholder='blur' />
            </div>
          </Zoom>
          <Zoom>
            <div className='gallery-image-div'>
              <Image style={{borderRadius: 16}} alt='Red truck after our paint correction service' objectFit="cover" src={ext5} loading="lazy" placeholder='blur' />
            </div>
          </Zoom>
          <Zoom>
            <div className='gallery-image-div'>
              <Image style={{borderRadius: 16}} alt='Truck after a paint correction job' objectFit="cover" src={ext6} loading="lazy" placeholder='blur' />
            </div>
          </Zoom>
          <Zoom>
            <div className='gallery-image-div'>
              <Image style={{borderRadius: 16}} alt='Sparkling van after a paint correction job' objectFit="cover" src={ext7} loading="lazy" placeholder='blur' />
            </div>
          </Zoom>
          <Zoom>
            <div className='gallery-image-div'>
              <Image style={{borderRadius: 16}} alt='Cleaned engine bay' objectFit="cover" src={ext8} loading="lazy" placeholder='blur' />
            </div>
          </Zoom>
        </div>
      </div>
      <h3>See more exterior photos on our <a href="/gallery/ExteriorWashGallery" className='aside-link'>Exterior Wash Gallery</a>. For more engine bay photos check out our <a href="/gallery/EngineGallery" className='aside-link'>Engine Gallery</a>.</h3>

    </div>
  );
}
