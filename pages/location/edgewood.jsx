import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';

import PricingComponent from '../../utils/PricingComponent';
import addons from '../../utils/Addons';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function edgewood() {
    const [currPackage, setCurrPackage] = useState('Interior');
    const [currLink, setCurrLink] = useState('interior');
    const [currComponent, setCurrComponent] = useState(<PricingComponent prices={['300', '300', '335', '335', '375', '375']} addons={[addons.ozone]} />)

    useEffect(() => {
        if (currPackage === 'Interior') {
            setCurrComponent(<PricingComponent prices={[300, 300, 335, 335, 375, 375]} addons={[addons.ozone]} />)
            setCurrLink('interior')
        } else if (currPackage === 'Interior Spill') {
            setCurrComponent(<PricingComponent prices={[450, 450, 500, 500, 575, 575]} addons={[addons.ozone]} />)
            setCurrLink('interior-spill')
        } else if (currPackage === 'Exterior Wash') {
            setCurrComponent(<PricingComponent prices={[100, 100, 125, 125, 150, 150]} addons={[addons.engine]} />)
            setCurrLink('exterior')
        } else if (currPackage === 'Exterior Seal') {
            setCurrComponent(<PricingComponent prices={[300, 300, 350, 350, 400, 400]} addons={[addons.engine]} />)
            setCurrLink('exterior-seal')
        } else if (currPackage === 'Exterior Correct') {
            setCurrComponent(<PricingComponent prices={[1300, 1300, 1500, 1500, 1700, 1700]} addons={[addons.engine]} />)
            setCurrLink('exterior-correct')
        }
    }, [currPackage])

    return (
        <div className='location-container bg-contact'>
            <Head>
                <title>Mobile Detailing in Edgewood | Dirt-Less Detailing</title>
                <Metatags
                    title='Mobile Detailing in Edgewood | Dirt-Less Detailing'
                    description='From deep cleaning to odor elimination, our detailing services will leave your car looking and smelling fresh.'
                    image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5fc33d57-709e-4ae0-582d-9cdc42ed0300/public'
                    canonical='/location/edgewood'
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
                        "url": "https://www.dirtlessdetailing.com/location/edgewood",
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
                <div style={{alignItems: 'center'}}>
                    <h1><span className='accent-orange bold text-shadow'>Mobile Detailing in Edgewood Washington</span></h1>
                    <h2 className='page-subheading' style={{textAlign: 'center'}}>From deep cleaning to odor elimination, our detailing services will leave your car looking and smelling fresh.</h2>
                    <div className='header-buttons'>
                        <a href="/Contact" className='top-quote-btn'><img src='../assets/icons/clipboard.png' alt='clipboard' className='btn-icon' /> Book Now!</a>
                        <a href="tel:2532529758" className='top-quote-btn btn-secondary'><img src='../assets/icons/phoneMessage.png' alt='call or message' className='btn-icon' /> (253) 252-9758</a>
                    </div>
                </div>
            </div>

            <main className="location-main">
                <h2 className='text-large'>Professional Detailing Services in Edgewood Washington.</h2>
                <div className="text-left">
                    <p>Looking for a reliable and professional mobile auto detailing service in Edgewood, Washington? Look no further than Dirt-Less Detailing, we offer a range of services to keep your vehicle looking its best.</p>
                    <p>Whether you need a thorough interior cleaning, an exterior wash, or a ceramic coating to protect your paint, we have the skills and equipment to get the job done right.</p>
                    <p>Additionally, if your car's paint is showing signs of wear and tear, we can also provide paint correction services to restore its shine and luster. Don't settle for a subpar auto detailing service - trust our team to keep your car looking like new.</p>
                </div>

                <br className='extra-space' />
            </main>
            <div className='service-bkg-lighter'>
                <div style={{paddingBottom: '2rem'}} className='general-container'>
                    <h3 className='text-large'>Mobile Services offered in Edgewood:</h3>
                    <div style={{paddingBottom: '2rem'}} className="text-left">
                        <a href="/services/interior" className='aside-link text-medium'>Full Interior Cleaning</a>
                        <p className='mt-0'>A full interior detail will clean every crack and crevice of your vehicles interior to a like-new condition. If needed we include a hot water extraction to the carpets and fabric of your vehicle to get out the deeper stains and dirt. For mold, smoke smell, and other unwanted odor removal we recommend getting our Ozone Treatment addon to fully remove unwanted smells.</p>
                        <a href="/services/interior-spill" className='aside-link text-medium'>Full Interior + Spill Guard</a>
                        <p className='mt-0'>If your cars interior gets heavy use by means of spills, wet animals, or even just messy kids, we have you covered. With our Full Interior + Spill Guard service you will be getting our Full Interior service to clean up all of the mess, but we will also make future messes less of an issue with our Interior Ceramic Coating leaving a layer of protection between messes and any surface in your vehicle!</p>
                        <a href="/services/exterior" className='aside-link text-medium'>Exterior Decon Wash</a>
                        <p className='mt-0'>Our Exterior Decon Wash will thoroughly clean the exterior of your vehicle with our tried and true cleaning processes. Topped off with a ceramic spray for an extra layer of protection and shine. Combine this with our Interior Cleaning service to get a full revamp on your car!</p>
                    </div>
                    
                    <h3 className='text-large'>Services offered at our shop in Bonney Lake:</h3>
                    <div className='text-left'>
                        <a href="/services/exterior-seal" className='aside-link text-medium'>Exterior Seal & Shine</a>
                        <p className='mt-0'>Our Seal and Shine service offers everything from our Exterior Decon Wash, a full vehicle polish, windshield coating, and 6 month ceramic spray. This really is the best deal if you want light scratches removed from your vehicle, and a full year of protection! The results from this service have been stunning us as well as our customers ever since we introduced it!</p>
                        <a href="/services/exterior-correct" className='aside-link text-medium'>Exterior Correct & Protect</a>
                        <p className='mt-0'>Our most involved and detailed exterior service that we offer. If you truly want the best shine and protection from your car then this is the package to choose. Everything from our Exterior Decon Wash, the windshield coating from our Exterior Seal & Shine, a full vehicle Single Stage paint correction, all topped off with a 5 year ceramic coating. The process takes up to 2 days and we take great pride in the results from it, taking our time at every edge and corner making sure everything turns out as good as possible!</p>
                    </div>

                    <a href="/Contact" className="quote-btn location-quote-btn">Get A Free Quote</a>
                </div>
            </div>

            <div>
                <div className='pricing__heading-container'>
                    <h3 className="pricing__heading">Our {currPackage} Pricing</h3>
                    <strong className="pricing__subheading">Select the package and vehicle size below to get a quick price estimate for your vehicle.</strong>
                    <div style={{margin: '0 auto'}}>
                        <select className='text-input pricing__select' name="package" id="package" onChange={(e) => setCurrPackage(e.target.value)}>
                            <option value="Interior">Full Interior</option>
                            <option value="Interior Spill">Interior + Spill Guard</option>
                            <option value="Exterior Wash">Exterior Decon Wash</option>
                            <option value="Exterior Seal">Exterior Seal & Shine</option>
                            <option value="Exterior Correct">Exterior Correct & Protect</option>
                        </select>
                    </div>
                </div>

                {currComponent}

                <p className='text-medium'>See more details about our {currPackage} service <a href={`/services/${currLink}`} className='aside-link'>here</a></p>
            </div>

            <div>
                <h3 style={{marginTop: '3rem'}} className='text-large'>Check out some of the results from our services</h3>
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
                    <div>
                        <a href="/gallery/interior" className='aside-link text-medium'>Full Interior Gallery</a><br />
                        <a href="/gallery/exterior" className='aside-link text-medium'>Exterior Wash Gallery</a><br />
                        <a href="/gallery/seal" className='aside-link text-medium'>Seal & Shine Gallery</a><br />
                        <a href="/gallery/correct" className='aside-link text-medium'>Correct & Protect Gallery</a><br />
                    </div>
                </div>
            </div>
            <a href="/Contact" className="quote-btn location-quote-btn">Get A Free Quote Today!</a>
        </div> 
    )
}
