import React from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function blackDiamond() {
    return (
        <div className='location-container bg-contact'>
            <Head>
                <title>Black Diamond Detailing Services | Dirt-Less Detailing</title>
                <Metatags
                    title='Black Diamond Detailing Services | Dirt-Less Detailing'
                    description='From removing scratches to removing stains we will have your car cleaner than ever before! Check out our top auto detailing services for Black Diamond Washington'
                    image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0b441cde-1d0f-45d9-665f-e44bfce0d800/public'
                    canonical='/location/black-diamond'
                />
                <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org/",
                        "@type": "LocalBusiness",
                        "name": "Dirt-Less Detailing",
                        "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5fc33d57-709e-4ae0-582d-9cdc42ed0300/public",
                        "currenciesAccepted": "USD",
                        "priceRange": "$$$",
                        "openingHours": ["Mo-Su 7:00-19:00"],
                        "paymentAccepted": "Cash, Credit/Debit Card, Facebook Pay",
                        "url": "https://www.dirtlessdetailing.com/location/black-diamond",
                        "email": "brenden@dirtlessdetailing.com",
                        "telephone": "(253) 252-9758",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Bonney Lake",
                            "addressRegion": "WA",
                            "postalCode": "99391",
                            "streetAddress": "9305 205th Ave E"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 47.17285149644542,
                            "longitude": -122.15677457325478
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": 5,
                            "reviewCount": 14
                        }
                    }`,
                }} />
            </Head>
            <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5fc33d57-709e-4ae0-582d-9cdc42ed0300/cover')`}}></div>
            <div className="servicepage-header">
                <h1>Black Diamond Detailing Services</h1>
                <h2>From removing scratches to removing stains we will have your car cleaner than ever before! Check out our top auto detailing services for Black Diamond Washington</h2>
                <div className='header-buttons'>
                    <a href="/Contact" className='quote-btn'>Get a Free Quote</a>
                    <a href="tel:2532529758" className='quote-btn top-quote-btn'><MdOutlinePermPhoneMsg className='call-icon' /> (253) 252-9758</a>
                </div>
            </div>

            <main className="location-main">
                <h2 className='text-large'>Professional Detailing Services in Black Diamond Washington.</h2>
                <div className="text-left">
                    <p>Getting a car detailed in Black Diamond is no problem with our mobile service. We can come to you and perform most of our services at your home or work. If we have permission to detail in the location then we can do it.</p>
                    <p>Some of our most complicated services will need a more controlled environment. Services like our <a href="/detailing/ceramic" className='aside-link'>Ceramic Coating</a> and <a href="/detailing/correction" className='aside-link'>Paint Correction</a> will benefit if done at our shop. There we have lighting and heating where we can get the conditions just right for the service.</p>
                    <p>If you need one of our more extensive details then our <a href="/location/bonney-lake" className='aside-link'>shop</a> is about 30 minutes away from Black Diamond in Bonney Lake. We can set up an appointment to have you drop it off and once you do you are free to stay or go while we do our work.</p>
                </div>

                <br className='extra-space' />
            </main>
            <div className='locationpage-section no-bg'>
                <div>
                    <h3 className='text-large'>Services offered in Black Diamond:</h3>
                    <div className="text-left">
                        <a href="/detailing/ceramic" className='aside-link text-medium'>Ceramic Coating</a>
                        <p className='mt-0'>Our 5 year Ceramic Coatings will not only keep your vehicle looking great, but they will also keep your paint protected. A full <a href="/services/single-stage-correction" className='aside-link'>Single Stage Paint Correction</a> is performed before the coating to give it a nice even surface to be applied to. Our exterior Ceramic Coatings will have to be performed at our shop in Bonney Lake. Interior coatings are also available to protect interior fabrics or leather too. Get more info on our <a href="/services/interior-ceramic-coating" className='aside-link'>Interior Coating</a> page.</p>
                        <a href="/services/full-interior-detail" className='aside-link text-medium'>Interior Cleaning</a>
                        <p className='mt-0'>A full interior detail will clean every crack and crevice of your vehicles interior to a like-new condition. Optionally we can also do a hot water extraction to the carpets of your vehicle to get out the deeper stains and dirt. A <a href="/services/biohazard-cleaning" className='aside-link'>Biohazard</a> cleaning is also available for mold, spills and unwanted odor removal.</p>
                        <a href="/services/dirtless-wash" className='aside-link text-medium'>Dirt-Less Wash</a>
                        <p className='mt-0'>Our Dirt-Less Wash will thoroughly clean the exterior of your vehicle with our tried and true cleaning processes. Topped off with a spray wax for an extra layer of protection and shine. Combine this with our Interior Cleaning service and get an Engine Bay Cleaning on us through our <a href="/services/interior-exterior-detailing-combo" className='aside-link'>Dirt-Less Detail</a> deal!</p>
                        <a href="/detailing/correction" className='aside-link text-medium'>Paint Correction</a>
                        <p className='mt-0'>Our paint correction services can fix roughly 60%-90% of minor damage and scratches and will leave your vehicle looking shinier and feeling smoother than ever.</p>
                    </div>

                    <a href="/Contact" className="quote-btn location-quote-btn">Get A Free Quote</a>
                </div>
            </div>

            <div>
                <h3 className='text-large'>Check out some of the results from our services</h3>
                <div className="mini-grid">
                    <Zoom>
                        <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5c7fc46a-ada8-4ee1-a95f-3faaf47ded00/public')`}}></div>
                    </Zoom>
                    <Zoom>
                        <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/24656e79-2a98-495c-99f6-3e65665c5300/public')`}}></div>
                    </Zoom>
                    <Zoom>
                        <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ff2d836c-23d3-43fe-4f5c-844e5fb2a100/public')`}}></div>
                    </Zoom>
                    <Zoom>
                        <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4b286353-ec88-4c47-225f-5890ed674000/public')`}}></div>
                    </Zoom>
                    <Zoom>
                        <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/f6170666-70f6-487c-4db8-26125453df00/public')`}}></div>
                    </Zoom>
                    <Zoom>
                        <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b36b25e0-3f4f-41e9-75ce-5f1245ec6500/public')`}}></div>
                    </Zoom>
                    <Zoom>
                        <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6e0ddf6d-7ccb-4ee8-5ae1-bdc6574eae00/public')`}}></div>
                    </Zoom>
                    <Zoom>
                        <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/8c1574b9-7517-4c50-6b36-133352ab0a00/public')`}}></div>
                    </Zoom>
                    <Zoom>
                        <div className="card" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6fb3a112-d77a-41fb-e7ec-728b2185b600/public')`}}></div>
                    </Zoom>
                </div>
            </div>

            <div className='locationpage-section no-bg'>
                <div className='location-gallery-container'>
                    <h3 className='text-large'>Our Gallery Pages:</h3>
                    <div className="text-left">
                        <a href="/gallery/interior-detail-gallery" className='aside-link text-medium'>Interior Cleaning Gallery</a>
                        <p className='mt-0'>Come check out some of the photos we have of what we have been able to do for our customers interiors!</p>
                        <a href="/gallery/dirtless-wash-gallery" className='aside-link text-medium'>Exterior Wash Gallery</a>
                        <p className='mt-0'>We have easily washed hundreds of vehicles and have our process optimized from the tires to the headlights, leaving every vehicle in great condition every time.</p>
                        <a href="/gallery/paint-correction-gallery" className='aside-link text-medium'>Paint Correction Gallery</a>
                        <p className='mt-0'>These vehicles have all been through the whole process from completely washing, to taping off, all the way to the paint correction itself.</p>
                        <a href="/gallery/ceramic-coating-gallery" className='aside-link text-medium'>Ceramic Coating Gallery</a>
                        <p className='mt-0'>A gallery of our work so far applying ceramic coatings.</p>
                        <a href="/gallery/engine-bay-gallery" className='aside-link text-medium'>Engine Bay Gallery</a>
                        <p className='mt-0'>Take a look at some of the results we've gotten from our engine bay cleaning service.</p>
                    </div>
                </div>
            </div>
            <a href="/Contact" className="quote-btn location-quote-btn">Get A Free Quote Today!</a>
        </div> 
    )
}
