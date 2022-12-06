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

export default function puyallup() {
    return (
        <div className='location-container'>
            <Head>
                <title>Dirt-Less Detailing | Vehicle Detailing in Puyallup</title>
                <meta property="og:description" content="Interior • Exterior • Ceramic Coating • Paint Correction. Check out our top auto detailing services for Puyallup Washington" />
                <link rel="canonical" href="https://www.dirtlessdetailing.com/location/puyallup" />
            </Head>
            <div className="cover location-cover">
                <Image src={cover} alt="biohazard cleaning cover" layout="fill" objectFit='cover' placeholder='blur' priority />
            </div>
            <div className="servicepage-header location-header">
                <h1>Mobile Detailing in Puyallup Washington</h1>
                <h2>Ceramic Coating • Interior • Exterior • Paint Correction</h2>
                <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
            </div>
            <main className="location-main">
                <h2 className='large'>Professional Detailing Services in Puyallup Washington.</h2>
                <p>Getting a car detailed in Puyallup is no problem with our mobile service. We can come to you and perform most of our services at your home or work.</p>
                <p>Some of our most complicated services will need a more controlled environment. Services like our <a href="/detailing/ceramic" className='aside-link'>Ceramic Coating</a> and <a href="/detailing/exterior-correction" className='aside-link'>Paint Correction</a> will benefit if done at our shop. There we have lighting and heating where we can get the conditions just right for the service.</p>
                <p>If you need one of our more extensive details then our <a href="/location/bonney-lake" className='aside-link'>shop</a> is about 20 minutes away from Puyallup. We can set up an appointment to have you drop it off and once you do you are free to stay or go while we do our work.</p>
                <p><span className='special-package'>*</span>If we come to your work location, make sure that they allow detailers on site. Most will and there shouldn't be a problem, but very rarely a property manager might not allow it.</p>

                <br className='extra-space' />

                <h2 className='large'>If you need an auto detailer in Puyallup then you came to the right place.</h2>
                <p>We are skilled and will come fully prepared to wherever your need us. We currently also service these locations:</p>
                <ul className='cities-ul'>
                    <li>Bonney Lake</li>
                    <li>Buckley</li>
                    <li>Sumner</li>
                    <li>Enumclaw</li>
                    <li>Puyallup</li>
                    <li>Federal Way</li>
                    <li>Orting</li>
                    <li>South Prairie</li>
                    <li>Black Diamond</li>
                    <li>Milton</li>
                    <li>Edgewood</li>
                    <li>Graham</li>
                </ul>

                <br className='extra-space' />
            </main>
            <div className='locationpage-section'>
                <div>
                    <h3 className='large'>Our Services</h3>
                    <p><a href="/detailing/interior" className='aside-link'>Interior Cleaning</a> - A full interior detail will clean every crack and crevice of your vehicles interior. Optionally we can also do a hot water extraction to the carpets of your vehicle to get out deeper stains and dirt.</p>
                    <p><a href="/detailing/exterior-wash" className='aside-link'>Exterior Washes</a> - Our Dirt-Less Washes will thoroughly clean the exterior of your vehicle with our tried and true cleaning processes.</p>
                    <p><a href="/detailing/exterior-correction" className='aside-link'>Exterior Correction</a> - Our paint correction services can fix roughly 60%-90% of minor damage and scratches and will leave your vehicle looking shinier than ever.</p>
                    <p><a href="/detailing/ceramic" className='aside-link'>Ceramic Coating</a> - Our 5 year Ceramic Coatings will not only protect your vehicle but will also keep it looking great for years to come.</p>

                    <a href="/Contact" className="quote-btn">Get a Quote</a>
                </div>
            </div>

            <h3 className='large'>Check out some of the results from our various services</h3>
            <div className="gallery-container">
                <Zoom>
                    <div className='gallery-image-div'>
                        <Image style={{borderRadius: 16}} alt={'Lexus Exterior after a wash'} objectFit="cover" src={ext1} loading="lazy" placeholder='blur' />
                    </div>
                </Zoom>
                <Zoom>
                    <div className='gallery-image-div'>
                        <Image style={{borderRadius: 16}} alt={'Before and after our wash service'} objectFit="cover" src={ext2} loading="lazy" placeholder='blur' />
                    </div>
                </Zoom>
                <Zoom>
                    <div className='gallery-image-div'>
                        <Image style={{borderRadius: 16}} alt={'Spotless Lexus interior'} objectFit="cover" src={int1} loading="lazy" placeholder='blur' />
                    </div>
                </Zoom>
                <Zoom>
                    <div className='gallery-image-div'>
                        <Image style={{borderRadius: 16}} alt={'Cleaned BMW interior'} objectFit="cover" src={int2} loading="lazy" placeholder='blur' />
                    </div>
                </Zoom>
                <Zoom>
                    <div className='gallery-image-div'>
                        <Image style={{borderRadius: 16}} alt={'Red truck after our paint correction service'} objectFit="cover" src={pc1} loading="lazy" placeholder='blur' />
                    </div>
                </Zoom>
                <Zoom>
                    <div className='gallery-image-div'>
                        <Image style={{borderRadius: 16}} alt={'Truck after a paint correction job'} objectFit="cover" src={pc2} loading="lazy" placeholder='blur' />
                    </div>
                </Zoom>
                <Zoom>
                    <div className='gallery-image-div'>
                        <Image style={{borderRadius: 16}} alt={'Sparkling van after a paint correction job'} objectFit="cover" src={ceramic1} loading="lazy" placeholder='blur' />
                    </div>
                </Zoom>
                <Zoom>
                    <div className='gallery-image-div'>
                        <Image style={{borderRadius: 16}} alt={'Cleaned engine bay'} objectFit="cover" src={engine} loading="lazy" placeholder='blur' />
                    </div>
                </Zoom>
            </div>

            <div className='locationpage-section no-bg'>
                <div>
                    <h3 className='large'>For more images and examples:</h3>
                    <p><a href="/gallery/FullIntGallery" className='aside-link'>Interior Cleaning Gallery</a> - Come check out some of the hundreds of photos we have of what we have been able to do for our customers interiors!</p>
                    <p><a href="/gallery/ExteriorWashGallery" className='aside-link'>Exterior Wash Gallery</a> - We have easily washed hundreds of vehicles and have our process optimized from the tires to the headlights, leaving every vehicle in great condition every time.</p>
                    <p><a href="/gallery/PaintCorrectionGallery" className='aside-link'>Paint Correction Gallery</a> - These vehicles have all been through the whole process from completely washing, to taping off, all the way to the paint correction itself.</p>
                    <p><a href="/gallery/CoatingGallery" className='aside-link'>Ceramic Coating Gallery</a> - A gallery of our work so far applying ceramic coats.</p>
                    <p><a href="/gallery/EngineGallery" className='aside-link'>Engine Bay Gallery</a> - Take a look at some of the engines that we've gotten to take care of.</p>
                </div>
            </div>
        </div> 
    )
}
