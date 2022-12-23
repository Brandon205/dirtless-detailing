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
        <title>Car Wash Services | Dirt-Less Detailing</title>
        <meta property="og:title" content="Car Wash Services | Dirt-Less Detailing" />
        <meta name="description" content="Check out and compare our Dirt-Less and Premium Dirt-Less Washes here to see which one best fits your vehicles needs." />
        <meta property="og:description" content="Check out and compare our Dirt-Less and Premium Dirt-Less Washes here to see which one best fits your vehicles needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dirtlessdetailing.com/detailing/car-washes" />
        <meta property="og:image" content={cover.src} />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/detailing/car-washes" />
      </Head>
      <div className="cover">
        <Image src={cover} alt="Car after Paint Correction service" layout="fill" objectFit='cover' placeholder='blur' priority />
      </div>
      <div className="servicepage-header location-header">
        <h1>Car Wash Services</h1>
        <h2>Dirt-Less Wash, Premium Dirt-Less Wash, and Engine Bay Washes</h2>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
        <p className='inline text-small'>
          Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
        </p>
      </div>

      <main className="location-main">
        <h2 className='text-large'>Dirt-Less Wash</h2>
        <div className="text-left">
          <p>You don't have to go to Harvard University to wash a car, but there are methods of washing that produce infinitely better results than your typical tunnel car wash. Our methods are also way safer.</p>
          <p>If you're looking for a fast and cheap option to get your car washed in Bonney lake or the surrounding areas, we most likely won't be a great fit for you. We go very in-depth in our washing process to provide the highest quality level of service and results your money can buy.</p>
        </div>

        <br className='extra-space' />

        <h2 className='text-large'>Premium Dirt-Less Wash</h2>
        <div className="text-left">
          <p>Not only will you see a humongous difference in the appearance, but you will also be able to feel the smoothness and slickness of the paint once we're done with this service.</p>
          <p>Both of our Dirt-Less Wash services go very in depth, cleaning areas that you won't even see on a day to day basis. Our Premium package goes even further than that by using a clay bar and iron decontamination products on the whole vehicle to remove any contaminants.</p>
          <p>A lot of our customers love this service since it doesn't take much time to perform, but the results that you get are stellar!</p>
        </div>

        <br className='extra-space' />

        <h2 className='text-large'>What's the difference between the regular and premium service?</h2>
        <div className="text-left">
          <p>For a more detailed side by side comparison check out the steps below.</p>
          <p>Basically with the Premium wash we go above and beyond what is done in the Dirt-Less wash. This will leave your vehicle with an even smoother finish that you can see and feel.</p>
          <p>We will clay bar the entire vehicle to leave the vehicle smooth and to make sure the wax we apply at the end adheres as good as possible.</p>
          <p>Then we will perform an Iron Decontamination to get any remnants that the clay bar might have missed including microscopic iron contaminants.</p>
        </div>

        <br className='extra-space' />

        <h2 className='text-large'>Truck Bed Cleaning - <span className="special-package">$25</span></h2>
        <div className="text-left">
          <p>Typically in our washes we don't clean out truck beds, but if you want us to this is just the add-on for you. We will fully rinse out and clean any size truck bed.</p>
        </div>

        <br className='extra-space' />

        <h2 className='text-large'>Engine Bay Wash - <span className="special-package">$80</span></h2>
        <div className="text-left">
          <p>Give your engine bay a cleaning with this add-on. When washing engine bays we cover and take care of any and all electronics and other sensitive areas of the engine bay so there's nothing to worry about.</p>
        </div>
        <p className='text-small'>Check out our <a href="/services/add-ons" className='aside-link'>Add-ons</a> page to see more of our add-on offers.</p>

        <br className='extra-space' />
      </main>

      <div className='sidebyside only-bg'>
        <div>
          <h2 className="cleaning-process-title">Our Simple Dirt-Less Wash Process</h2>
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

        <div>
          <h2 className="cleaning-process-title">Our Premium Dirt-Less Wash Process</h2>
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
      </div>

      <div className='locationpage-section no-bg'>
        <h3 className='pricing-title text-black'>Our Dirt-Less Wash Pricing</h3>
        <strong className='pricing-subtext'>*Final pricing may vary based on your vehicle condition and size.</strong>
        <div className="pricing-container text-black">
          <div className="pricing-card">
            <strong className='size' style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Small</strong>
            <strong className='size'>Dirt-Less Wash</strong>
            <p className="pricing-price pricing-border">$75</p>
            <strong className='size'>Premium Dirt-Less Wash</strong>
            <p className="pricing-price pricing-border">$150</p>
            <p className="example-vehicle pricing-border">Smaller Trucks</p>
            <p className="example-vehicle pricing-border">Most Cars</p>
            <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
          </div>
          <div className="pricing-card">
            <strong className='size' style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Medium</strong>
            <strong className='size'>Dirt-Less Wash</strong>
            <p className="pricing-price pricing-border">$100</p>
            <strong className='size'>Premium Dirt-Less Wash</strong>
            <p className="pricing-price pricing-border">$200</p>
            <p className="example-vehicle pricing-border">Mid-Size SUVs</p>
            <p className="example-vehicle pricing-border">Most Wagons</p>
            <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
          </div>
          <div className="pricing-card">
            <strong className='size' style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Large</strong>
            <strong className='size'>Dirt-Less Wash</strong>
            <p className="pricing-price pricing-border">$125</p>
            <strong className='size'>Premium Dirt-Less Wash</strong>
            <p className="pricing-price pricing-border">$250</p>
            <p className="example-vehicle pricing-border">Large SUVs</p>
            <p className="example-vehicle pricing-border">Some Trucks</p>
            <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
          </div>
          <div className="pricing-card">
            <strong className='size' style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Extra Large</strong>
            <strong className='size'>Dirt-Less Wash</strong>
            <p className="pricing-price pricing-border">$150</p>
            <strong className='size'>Premium Dirt-Less Wash</strong>
            <p className="pricing-price pricing-border">$275</p>
            <p className="example-vehicle pricing-border">Larger Trucks</p>
            <p className="example-vehicle pricing-border">Extra Large Vehicles</p>
            <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
          </div>
        </div>
      </div>

      <div>
        <h3 className='text-large'>Check out some of the results from our exterior services</h3>
        <div className="gallery-container" style={{width: 70 + 'vw'}}>
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
              <Image style={{borderRadius: 16}} alt='Clean and shiny Infinity after exterior detail' objectFit="cover" src={ext3} loading="lazy" placeholder='blur' />
            </div>
          </Zoom>
          <Zoom>
            <div className='gallery-image-div'>
              <Image style={{borderRadius: 16}} alt='Washed and waxed show truck' objectFit="cover" src={ext4} loading="lazy" placeholder='blur' />
            </div>
          </Zoom>
          <Zoom>
            <div className='gallery-image-div'>
              <Image style={{borderRadius: 16}} alt='Large GMC after our car wash service' objectFit="cover" src={ext5} loading="lazy" placeholder='blur' />
            </div>
          </Zoom>
          <Zoom>
            <div className='gallery-image-div'>
              <Image style={{borderRadius: 16}} alt='Cleaned and washed wheel and rim' objectFit="cover" src={ext6} loading="lazy" placeholder='blur' />
            </div>
          </Zoom>
          <Zoom>
            <div className='gallery-image-div'>
              <Image style={{borderRadius: 16}} alt='Black car clean exterior after Premium Dirt-Less Wash' objectFit="cover" src={ext7} loading="lazy" placeholder='blur' />
            </div>
          </Zoom>
          <Zoom>
            <div className='gallery-image-div'>
              <Image style={{borderRadius: 16}} alt='Lexus exterior after a car wash' objectFit="cover" src={ext8} loading="lazy" placeholder='blur' />
            </div>
          </Zoom>
        </div>
      </div>
      <h3>See more exterior photos in our <a href="/gallery/dirtless-wash-gallery" className='aside-link'>Exterior Wash Gallery</a>. For more engine bay photos check out our <a href="/gallery/engine-bay-gallery" className='aside-link'>Engine Gallery</a>.</h3>

      <a href="/Contact" className="quote-btn location-quote-btn">Get a Quote Today!</a>

    </div>
  );
}
