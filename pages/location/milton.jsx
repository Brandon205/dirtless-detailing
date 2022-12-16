import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import cover from '../../public/imgs/pageimgs/exterior/IMG_20221007_130043.jpg';
import ext1 from '../../public/imgs/pageimgs/exterior/IMG_20200722_161452.jpg';
import ext2 from '../../public/imgs/pageimgs/exterior/IMG_20210309_092147.jpg';
import int1 from '../../public/imgs/pageimgs/interior/IMG_20220211_135242.jpg';
import int2 from '../../public/imgs/pageimgs/interior/IMG_20220712_144618.jpg';
import pc1 from '../../public/imgs/pageimgs/paintCorrection/FB_IMG_1590172616958.jpg';
import pc2 from '../../public/imgs/pageimgs/paintCorrection/IMG_20210526_055946.jpg';
import ceramic1 from '../../public/imgs/pageimgs/paintCorrection/IMG_20220729_101013.jpg';
import engine from '../../public/imgs/pageimgs/engine/IMG_20220915_134850.jpg';

export default function milton() {
    return (
        <div className='location-container'>
            <Head>
                <title>Vehicle Detailing in Milton | Dirt-Less Detailing</title>
                <meta property="og:title" content="Vehicle Detailing in Milton | Dirt-Less Detailing" />
                <meta name="description" content="Interior • Exterior • Ceramic Coating • Paint Correction. Check out our top auto detailing services for Milton Washington" />
                <meta property="og:description" content="Interior • Exterior • Ceramic Coating • Paint Correction. Check out our top auto detailing services for Milton Washington" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.dirtlessdetailing.com/location/milton" />
                <link rel="canonical" href="https://www.dirtlessdetailing.com/location/milton" />
            </Head>
            <div className="cover">
                <Image src={cover} alt="Car after a Dirt-Less Wash" layout="fill" objectFit='cover' placeholder='blur' priority />
            </div>
            <div className="servicepage-header">
                <h1>Mobile Detailing in Milton Washington</h1>
                <h2>Ceramic Coating • Interior • Exterior • Paint Correction</h2>
                <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
                <p className='inline text-small'>
                    Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
                </p>
            </div>

            <main className="location-main">
                <h2 className='text-large'>Professional Detailing Services in Milton Washington.</h2>
                <div className="text-left">
                    <p>Getting a car detailed in Milton is no problem with our mobile service. We can come to you and perform most of our services at your home or work. If we have permission to detail in the location then we can do it.</p>
                    <p>Some of our most complicated services will need a more controlled environment. Services like our <a href="/detailing/ceramic" className='aside-link'>Ceramic Coating</a> and <a href="/detailing/correction" className='aside-link'>Paint Correction</a> will benefit if done at our shop. There we have lighting and heating where we can get the conditions just right for the service.</p>
                    <p>If you need one of our more extensive details then our <a href="/location/bonney-lake" className='aside-link'>shop</a> is about 25 minutes away from Milton in Bonney Lake. We can set up an appointment to have you drop it off and once you do you are free to stay or go while we do our work.</p>
                </div>

                <br className='extra-space' />
            </main>
            <div className='locationpage-section no-bg'>
                <div>
                    <h3 className='text-large'>Services offered in Milton:</h3>
                    <div className="text-left">
                        <a href="/detailing/ceramic" className='aside-link text-medium'>Ceramic Coating</a>
                        <p className='mt-0'>Our 5 year Ceramic Coatings will not only keep your vehicle looking great, but they will also keep your paint protected. A full <a href="/services/SinglePC" className='aside-link'>Single Stage Paint Correction</a> is performed before the coating to give it a nice even surface to be applied to. Our exterior Ceramic Coatings will have to be performed at our shop in Bonney Lake. Interior coatings are also available to protect interior fabrics or leather too. Learn more <a href="/services/IntCoatings" className='aside-link'>here</a>.</p>
                        <a href="/services/FullIntEx" className='aside-link text-medium'>Interior Cleaning</a>
                        <p className='mt-0'>A full interior detail will clean every crack and crevice of your vehicles interior to a like-new condition. Optionally we can also do a hot water extraction to the carpets of your vehicle to get out the deeper stains and dirt. A <a href="/services/Bio" className='aside-link'>Biohazard</a> cleaning is also available for mold, spills and unwanted odor removal.</p>
                        <a href="/detailing/exterior-wash" className='aside-link text-medium'>Premium Car Washes</a>
                        <p className='mt-0'>Either of our Dirt-Less Washes will thoroughly clean the exterior of your vehicle with our tried and true cleaning processes. Topped off with a spray wax for an extra layer of protection and shine. Combine this with an Interior cleaning service and get an engine bay cleaning on us!</p>
                        <a href="/detailing/correction" className='aside-link text-medium'>Paint Correction</a>
                        <p className='mt-0'>Our paint correction services can fix roughly 60%-90% of minor damage and scratches and will leave your vehicle looking shinier and feeling smoother than ever.</p>
                    </div>

                    <a href="/Contact" className="quote-btn location-quote-btn">Get a Quote</a>
                </div>
            </div>

            <div>
                <h3 className='text-large'>Check out some of the results from our services</h3>
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
                            <Image style={{borderRadius: 16}} alt='Spotless Lexus interior' objectFit="cover" src={int1} loading="lazy" placeholder='blur' />
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='gallery-image-div'>
                            <Image style={{borderRadius: 16}} alt='Cleaned BMW interior' objectFit="cover" src={int2} loading="lazy" placeholder='blur' />
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='gallery-image-div'>
                            <Image style={{borderRadius: 16}} alt='Red truck after our paint correction service' objectFit="cover" src={pc1} loading="lazy" placeholder='blur' />
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='gallery-image-div'>
                            <Image style={{borderRadius: 16}} alt='Truck after a paint correction job' objectFit="cover" src={pc2} loading="lazy" placeholder='blur' />
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='gallery-image-div'>
                            <Image style={{borderRadius: 16}} alt='Sparkling van after a paint correction job' objectFit="cover" src={ceramic1} loading="lazy" placeholder='blur' />
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className='gallery-image-div'>
                            <Image style={{borderRadius: 16}} alt='Cleaned engine bay' objectFit="cover" src={engine} loading="lazy" placeholder='blur' />
                        </div>
                    </Zoom>
                </div>
            </div>

            <div className='locationpage-section no-bg'>
                <div className='location-gallery-container'>
                    <h3 className='text-large'>Our Gallery Pages:</h3>
                    <div className="text-left">
                        <a href="/gallery/FullIntGallery" className='aside-link text-medium'>Interior Cleaning Gallery</a>
                        <p className='mt-0'>Come check out some of the photos we have of what we have been able to do for our customers interiors!</p>
                        <a href="/gallery/ExteriorWashGallery" className='aside-link text-medium'>Exterior Wash Gallery</a>
                        <p className='mt-0'>We have easily washed hundreds of vehicles and have our process optimized from the tires to the headlights, leaving every vehicle in great condition every time.</p>
                        <a href="/gallery/PaintCorrectionGallery" className='aside-link text-medium'>Paint Correction Gallery</a>
                        <p className='mt-0'>These vehicles have all been through the whole process from completely washing, to taping off, all the way to the paint correction itself.</p>
                        <a href="/gallery/CoatingGallery" className='aside-link text-medium'>Ceramic Coating Gallery</a>
                        <p className='mt-0'>A gallery of our work so far applying ceramic coatings.</p>
                        <a href="/gallery/EngineGallery" className='aside-link text-medium'>Engine Bay Gallery</a>
                        <p className='mt-0'>Take a look at some of the results we've gotten from our engine bay cleaning service.</p>
                    </div>
                </div>
            </div>
            <a href="/Contact" className="quote-btn location-quote-btn">Get a Quote Today!</a>
        </div> 
    )
}
