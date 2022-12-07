import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import cover from '../../public/imgs/pageimgs/paintCorrection/IMG_20220304_132750.jpg';
import ext1 from '../../public/imgs/pageimgs/paintCorrection/FB_IMG_1590172607272.jpg';
import ext2 from '../../public/imgs/pageimgs/paintCorrection/IMG_20210929_141852.jpg';
import ext3 from '../../public/imgs/pageimgs/paintCorrection/IMG_20211123_170951.jpg';
import ext4 from '../../public/imgs/pageimgs/paintCorrection/IMG_20220720_165323.jpg';
import ext5 from '../../public/imgs/pageimgs/paintCorrection/IMG_20220909_124912.jpg';
import ext6 from '../../public/imgs/pageimgs/paintCorrection/IMG_20220919_100906.jpg';
import ext7 from '../../public/imgs/pageimgs/paintCorrection/IMG_20220727_091237.jpg';

export default function puyallup() {
    return (
        <div>
            <Head>
                <title>Dirt-Less Detailing | Paint Correction in Puyallup</title>
                <meta property="og:title" content="Dirt-Less Detailing | Paint Correction in Puyallup" />
                <meta property="description" content="Check out our Single and Two Stage paint correction to fix any scratches or swirls in your paint." />
                <meta property="og:description" content="Check out our Single and Two Stage paint correction to fix any scratches or swirls in your paint." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.dirtlessdetailing.com/correction/puyallup" />
                <link rel="canonical" href="https://www.dirtlessdetailing.com/correction/puyallup" />
            </Head>
            <div className="cover">
                <Image src={cover} alt="biohazard cleaning cover" layout="fill" objectFit='cover' placeholder='blur' priority />
            </div>
            <div className="servicepage-header">
                <h1>Ceramic Coating in Puyallup Washington</h1>
                <h2>Single and Two Stage Paint Correction services</h2>
                <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
            </div>
            
            <main className="location-main">
                <h2 className='large'>Professional Paint Correction in Puyallup Washington.</h2>
                <p>To ensure the best results on your paint correction we will have you drop your car off at our shop location in Bonney Lake.</p>
                <p>Why? Well we want a controlled environment when performing our paint correction procedures. At our shop we have lighting and temperature controls. This way we can keep an optimal temperature and the lighting helps us see and fix any imperfections on the paint.</p>
                <p>Our shop is about 20 minutes away from most of Puyallup, once there you are free to go wherever or stick around while we work.</p>

                <br className='extra-space' />

                <h2 className=''>What's the difference between the Single Stage and Two Stage Paint Correction?</h2>
                <p>The simple answer is that we just use a different product on one of the steps. The Two Stage paint correction product we use can get rid of up to 90% of scratches and swirl marks in your paint, while the Single Stage product usually removes around 60%-80%.</p>
                <p>In the steps below its shown in step number 8, all of the other steps are carried out the same.</p>
                <p>To learn more about each check out our <a href="/detailing/exterior-correction" className='aside-link'>comparison</a> page. Or if you're interested in one or the other check out our <a href="/services/SinglePC" className='aside-link'>Single Stage Paint Correction</a> or the <a href="/services/TwoPC" className='aside-link'>Two Stage Paint Correction</a> page.</p>

                <br className='extra-space' />
            </main>

            <div className='only-bg'>
                <h3 className='large'>Our General Paint Correction Process</h3>
                <ol style={{width: 80 + 'vw'}} className='list columns-2'>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>1</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Wash Vehicle</h4>
                            <p className='step-desc'>Thorough strip wash top to bottom using 2 bucket method or equivalent, including gas door.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>2</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Wheel Cleaning</h4>
                            <p className='step-desc'>Clean wheels, wheel wells, and wheel barrels</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>3</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Remove tar and sap</h4>
                            <p className='step-desc'>Remove any and all tar and sap from the exterior.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>4</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Correction Prep - Clay bar</h4>
                            <p className='step-desc'>Clay bar the entire vehicle to remove contaminants and leave the paint smooth.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>5</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Correction Prep - Iron Decontamination</h4>
                            <p className='step-desc'>Iron decontamination to get rid of the rest of the embedded iron particles in your paint.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>6</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Dry Vehicle</h4>
                            <p className='step-desc'>Dry the whole vehicle with clean towels and air blowers.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>7</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Tape Vehicle</h4>
                            <p className='step-desc'>Tape off trim and sensitive areas (some detailers skip this step).</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>8</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Paint Correction</h4>
                            <p className='step-desc'>Complete the desired stage of paint correction using Griots products. Either the single stage or two stage product is used here based on the service requested.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>9</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Remove Polishing Compound</h4>
                            <p className='step-desc'>Remove polishing compound residue from cracks, crevices, etc.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>10</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Protect Paint</h4>
                            <p className='step-desc'>Protect paint with ceramic spray or <a href="/detailing/ceramic" className='aside-link'>ceramic coating</a>.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>11</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Door Jambs</h4>
                            <p className='step-desc'>Clean door jambs.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="step-number-container">
                            <h3 className='step-number'>12</h3><div className="vertical-rule"></div>
                        </div>
                        <div className="step-container">
                            <h4 className="step-title">Dress Vehicle</h4>
                            <p className='step-desc'>Dress all plastics, wheel wells, and tires.</p>
                        </div>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className='pricing-title text-black'>Our Paint Correction Pricing</h3>
                <h4 className='pricing-subtext'>*Pricing INCLUDES a Single Stage Paint Correction that we do before the coating, as long as the vehicle doesn't need extra correction beyond that.</h4>
                <div className="pricing-container text-black">
                    <div className="pricing-card">
                        <h4 className="size" style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Small</h4>
                        <h4 className="size">Single Stage</h4>
                        <p className="pricing-price pricing-border">$300- $450</p>
                        <h4 className="size">Two Stage</h4>
                        <p className="pricing-price pricing-border">$450- $600</p>
                        <p className="example-vehicle pricing-border">2-Door Coupes</p>
                        <p className="example-vehicle pricing-border">Single/Extended Cabs</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                    <div className="pricing-card">
                        <h4 className="size" style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Medium</h4>
                        <h4 className="size">Single Stage</h4>
                        <p className="pricing-price pricing-border">$450- $600</p>
                        <h4 className="size">Two Stage</h4>
                        <p className="pricing-price pricing-border">$600- $850</p>
                        <p className="example-vehicle pricing-border">4 Door Vehicles</p>
                        <p className="example-vehicle pricing-border">Smaller SUV's</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                    <div className="pricing-card">
                        <h4 className="size" style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Large</h4>
                        <h4 className="size">Single Stage</h4>
                        <p className="pricing-price pricing-border">$600- $850</p>
                        <h4 className="size">Two Stage</h4>
                        <p className="pricing-price pricing-border">$800- $1,100</p>
                        <p className="example-vehicle pricing-border">Larger Trucks</p>
                        <p className="example-vehicle pricing-border">Extra Large Vehicles</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                </div>
            </div>

            <div className="locationpage-section no-bg">
                <h3 className='large'>Check out some of the results from our Paint Correction service</h3>
                <div className="gallery-container">
                    <Zoom>
                        <div className='gallery-image-div'>
                            <Image style={{borderRadius: 16}} alt={'Black car after paint correction service'} objectFit="cover" src={ext1} loading="lazy" placeholder='blur' />
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='gallery-image-div'>
                            <Image style={{borderRadius: 16}} alt={'Hood of vehicle after our paint correction service'} objectFit="cover" src={ext2} loading="lazy" placeholder='blur' />
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='gallery-image-div'>
                            <Image style={{borderRadius: 16}} alt={'Angle view of F350 after paint correction service'} objectFit="cover" src={ext3} loading="lazy" placeholder='blur' />
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='gallery-image-div'>
                            <Image style={{borderRadius: 16}} alt={'Angle view of Jeep in the middle of our paint correction service'} objectFit="cover" src={ext4} loading="lazy" placeholder='blur' />
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='gallery-image-div'>
                            <Image style={{borderRadius: 16}} alt={'Side view of project car after our paint correction service'} objectFit="cover" src={ext5} loading="lazy" placeholder='blur' />
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='gallery-image-div'>
                            <Image style={{borderRadius: 16}} alt={'Side view of minivan after our paint correction service'} objectFit="cover" src={ext6} loading="lazy" placeholder='blur' />
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='gallery-image-div'>
                            <Image style={{borderRadius: 16}} alt={'Angle view of van in the middle of our paint correction service'} objectFit="cover" src={ext7} loading="lazy" placeholder='blur' />
                        </div>
                    </Zoom>
                </div>
            </div>
            <h3 className=''>See more on our <a href="/gallery/PaintCorrection" className='aside-link'>Paint Correction Gallery</a> page.</h3>

        </div> 
    )
}
