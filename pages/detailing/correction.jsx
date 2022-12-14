import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import cover from '../../public/imgs/pageimgs/paintCorrection/IMG_20220729_101013.jpg';
import ext1 from '../../public/imgs/pageimgs/paintCorrection/FB_IMG_1590172607272.jpg';
import ext2 from '../../public/imgs/pageimgs/paintCorrection/IMG_20210929_141852.jpg';
import ext3 from '../../public/imgs/pageimgs/paintCorrection/IMG_20211123_170951.jpg';
import ext4 from '../../public/imgs/pageimgs/paintCorrection/IMG_20220720_165323.jpg';
import ext5 from '../../public/imgs/pageimgs/paintCorrection/IMG_20220909_124912.jpg';
import ext6 from '../../public/imgs/pageimgs/paintCorrection/IMG_20220919_100906.jpg';
import ext7 from '../../public/imgs/pageimgs/paintCorrection/IMG_20220727_091237.jpg';

export default function correction() {
    return (
        <div>
            <Head>
                <title>Paint Correction Services | Dirt-Less Detailing</title>
                <meta property="og:title" content="Paint Correction Services | Dirt-Less Detailing" />
                <meta property="description" content="Check out our Single and Two Stage paint correction to fix any scratches or swirls in your paint." />
                <meta property="og:description" content="Check out our Single and Two Stage paint correction to fix any scratches or swirls in your paint." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.dirtlessdetailing.com/detailing/correction" />
                <link rel="canonical" href="https://www.dirtlessdetailing.com/detailing/correction" />
            </Head>
            <div className="cover">
                <Image src={cover} alt="Car after Paint Correction service" layout="fill" objectFit='cover' placeholder='blur' priority />
            </div>
            <div className="servicepage-header location-header">
                <h1>Paint Correction Services</h1>
                <h2>Single and Two Stage Paint Correction services</h2>
                <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
                <p className='inline text-small'>
                    Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
                </p>
            </div>
            
            <main className="location-main">
                <h2 className='text-large'>Single Stage Paint Correction</h2>
                <div className="text-left">
                    <p>Have you looked at your paint under the sun and saw a web of swirls and scratches?</p>
                    <p>These are called swirl marks. How did they get there in the first place? The biggest culprit is usually improper washing and drying methods. Automatic car washes and using low-quality towels or wash mitts can all lead to abrading your paint and leaving imperfections.</p>
                    <p>With our <a href='/services/SinglePC' className='aside-link'>Single Stage Paint Correction</a> service, you can remove 60% to 70% of imperfections to reveal a great shine. This is a fantastic service for vehicles that you want to restore their shine without going “all in” like we do with our 2 stage paint correction service.</p>
                    <p>Unlike some of our other services that can be done in just a few hours, this service requires more time and better lighting to achieve the proper results. This is why we require you to drop off the vehicle at our <a href='/correction/bonney-lake' className='aside-link'>shop</a> location.</p>
                </div>

                <br className='extra-space' />

                <h2 className='text-large'>Two Stage Paint Correction</h2>
                <div className="text-left">
                    <p>Our <a href="/services/TwoPC" className='aside-link'>Two Stage Paint Correction</a> service is aimed to remove as many swirls, scratches, and imperfections from your paint as possible. This is where we do an intense cutting and polishing step, called a 2-step correction, to get the most gloss and clarity from your paintwork.</p>
                    <p>Depending on the condition, whether the vehicle is new or not, some scratches won't come all the way out. It could be the scratches are too deep to remove safely, or the clear coat itself is thinning out. (We'll take paint measurements before we start).</p>
                    <p>This is where we'll make the call on what we can safely remove from your paint. It's not just about removing as many imperfections as possible. It's also knowing when enough is enough to keep the integrity of the paint healthy.</p>
                    <p>The Level 2 paint correction is a commitment that you are making to your vehicle. If you'd like to keep the shine on your paint, you have to properly maintain the vehicle after the service is complete. If you don't properly wash and dry the vehicle, you can easily put all those swirls and scratches back into your paint after just a few washes.</p>
                    <p>This is one of our most involved services that we offer so we'll need to perform it at our <a href='/correction/bonney-lake' className='aside-link'>shop</a> location in Bonney Lake.</p>
                </div>

                <br className='extra-space' />

                <h2 className='text-large'>What service should I get?</h2>
                <div className="text-left">
                    <p>Feel free to give us a call if you're not sure which service would suit you and your vehicle best, or if you have questions on the new higher quality maintenance that we recommend after getting a paint correction service.</p>
                </div>

                <br className='extra-space' />
            </main>

            <div className='only-bg'>
                <h3 className='text-large'>Our General Paint Correction Process</h3>
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
                <strong className='pricing-subtext'>*Pricing INCLUDES a Single Stage Paint Correction that we do before the coating, as long as the vehicle doesn't need extra correction beyond that.</strong>
                <div className="pricing-container text-black">
                    <div className="pricing-card">
                        <strong className="size" style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Small</strong>
                        <strong className='size'>Single Stage</strong>
                        <p className="pricing-price pricing-border">$300- $450</p>
                        <strong className='size'>Two Stage</strong>
                        <p className="pricing-price pricing-border">$450- $600</p>
                        <p className="example-vehicle pricing-border">2-Door Coupes</p>
                        <p className="example-vehicle pricing-border">Single/Extended Cabs</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                    <div className="pricing-card">
                        <strong className='size' style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Medium</strong>
                        <strong className='size'>Single Stage</strong>
                        <p className="pricing-price pricing-border">$450- $600</p>
                        <strong className='size'>Two Stage</strong>
                        <p className="pricing-price pricing-border">$600- $850</p>
                        <p className="example-vehicle pricing-border">4 Door Vehicles</p>
                        <p className="example-vehicle pricing-border">Smaller SUV's</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                    <div className="pricing-card">
                        <strong className='size' style={{fontSize: 1.4 + 'em', fontWeight: 'bold'}}>Large</strong>
                        <strong className='size'>Single Stage</strong>
                        <p className="pricing-price pricing-border">$600- $850</p>
                        <strong className='size'>Two Stage</strong>
                        <p className="pricing-price pricing-border">$800- $1,100</p>
                        <p className="example-vehicle pricing-border">Larger Trucks</p>
                        <p className="example-vehicle pricing-border">Extra Large Vehicles</p>
                        <a href="/Contact" className="pricing-quote-btn">Contact Us</a>
                    </div>
                </div>
            </div>

            <div>
                <h3 className='text-large'>Check out some of the results from our Paint Correction service</h3>
                <div className="gallery-container" style={{width: 70 + 'vw'}}>
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
            <h3>See more on our <a href="/gallery/PaintCorrection" className='aside-link'>Paint Correction Gallery</a> page.</h3>
            <a href="/Contact" className="quote-btn location-quote-btn">Get a Quote Today!</a>

        </div> 
    )
}
