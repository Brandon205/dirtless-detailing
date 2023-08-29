import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';

import PricingComponent from '../../utils/PricingComponent';
import addons from '../../utils/Addons';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function milton() {
    const [currPackage, setCurrPackage] = useState('2-Year Ceramic Coating')
    const [currLink, setCurrLink] = useState('exterior-ceramic-coating')
    const [currComponent, setCurrComponent] = useState(<PricingComponent prices={['949', '949', '1099', '1099', '1249', '1249']} addons={[addons.glass]} />)

    useEffect(() => {
        if (currPackage === 'Interior') {
            setCurrComponent(<PricingComponent prices={['299', '299', '349', '349', '399', '399']} addons={[addons.extraction, addons.hair, addons.headliners, addons.intcoating, addons.ozone]} />)
            setCurrLink('full-interior-detail')
        } else if (currPackage === 'Dirt-Less Wash') {
            setCurrComponent(<PricingComponent prices={['74', '74', '99', '99', '124', '149']} addons={[addons.claybar, addons.glass, addons.waterspot]} />)
            setCurrLink('dirtless-wash')
        } else if (currPackage === 'Combo') {
            setCurrComponent(<PricingComponent prices={['374', '374', '449', '449', '474', '524']} addons={[addons.extraction, addons.hair, addons.headliners, addons.intcoating, addons.ozone, addons.claybar, addons.glass, addons.waterspot]} />)
            setCurrLink('interior-exterior-detailing-combo')
        } else if (currPackage === '2-Year Ceramic Coating') {
            setCurrComponent(<PricingComponent prices={['949', '949', '1099', '1099', '1249', '1249']} ceramic={true} />)
            setCurrLink('exterior-ceramic-coating')
        } else if (currPackage === '5-Year Ceramic Coating') {
            setCurrComponent(<PricingComponent prices={['1399', '1399', '1699', '1699', '1849', '1849']} ceramic={true} />)
            setCurrLink('exterior-ceramic-coating')
        } else if (currPackage === 'Single Stage Paint Correction') {
            setCurrComponent(<PricingComponent prices={['549', '549', '699', '699', '849', '849']} addons={[addons.glass]} />)
            setCurrLink('single-stage-correction')
        } else if (currPackage === 'Two Stage Paint Correction') {
            setCurrComponent(<PricingComponent prices={['699', '699', '849', '849', '999', '999']} addons={[addons.glass]} />)
            setCurrLink('two-stage-correction')
        }
    }, [currPackage])

    return (
        <div className='location-container bg-contact'>
            <Head>
                <title>Milton Detailing Services | Dirt-Less Detailing</title>
                <Metatags
                    title='Milton Detailing Services | Dirt-Less Detailing'
                    description="Say goodbye to paint imperfections with our paint correction services, and protect your car's finish with our ceramic coatings."
                    image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5fc33d57-709e-4ae0-582d-9cdc42ed0300/public'
                    canonical='/location/milton'
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
                        "url": "https://www.dirtlessdetailing.com/location/milton",
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
                <h1>Milton Detailing Services</h1>
                <h2>Say goodbye to paint imperfections with our paint correction services, and protect your car's finish with our ceramic coatings.</h2>
                <div className='header-buttons'>
                    <a href="/Contact" className='top-quote-btn'>Get a Free Quote</a>
                    <a href="tel:2532529758" className='top-quote-btn btn-secondary'><img src='../assets/icons/phoneMessage.png' alt='call or message' className='btn-icon' /> (253) 252-9758</a>
                </div>
            </div>

            <main className="location-main">
                <h2 className='text-large'>Professional Detailing Services in Milton Washington.</h2>
                <div className="text-left">
                    <p>With our mobile auto detailing services in Milton, we offer a range of services to make your vehicle shine, including interior cleaning, exterior washes, ceramic coatings, and paint corrections.</p>
                    <p>Our experienced team uses the latest techniques and products to achieve a flawless finish that will leave you amazed. </p>
                    <p>We take pride in our work and ensure that every detail is taken care of so you can enjoy your car to the fullest.</p>
                </div>

                <br className='extra-space' />
            </main>
            <div className='service-bkg-lighter'>
                <div style={{paddingBottom: '2rem'}} className='general-container'>
                    <h3 className='text-large'>Mobile Services offered in Milton:</h3>
                    <div style={{paddingBottom: '2rem'}} className="text-left">
                        <a href="/services/full-interior-detail" className='aside-link text-medium'>Interior Cleaning</a>
                        <p className='mt-0'>A full interior detail will clean every crack and crevice of your vehicles interior to a like-new condition. Optionally we can also do a hot water extraction to the carpets of your vehicle to get out the deeper stains and dirt. A <a href="/services/biohazard-cleaning" className='aside-link'>Biohazard</a> cleaning is also available for mold, spills and unwanted odor removal.</p>
                        <a href="/services/dirtless-wash" className='aside-link text-medium'>Dirt-Less Wash</a>
                        <p className='mt-0'>Our Dirt-Less Wash will thoroughly clean the exterior of your vehicle with our tried and true cleaning processes. Topped off with a spray wax for an extra layer of protection and shine. Combine this with our Interior Cleaning service and get an Engine Bay Cleaning on us through our <a href="/services/interior-exterior-detailing-combo" className='aside-link'>Dirt-Less Detail</a> deal!</p>
                        <a href="/services/interior-exterior-detailing-combo" className='aside-link text-medium'>The Dirt-Less Detail</a>
                        <p className='mt-0'>If your whole car needs a makeover check out our Dirt-Less Detail. With it you get a full interior cleaning, Dirt-Less Wash, and a FREE included Engine bay cleaning to top it off!</p>
                    </div>
                    
                    <h3 className='text-large'>Services offered at our shop in Bonney Lake:</h3>
                    <div className='text-left'>
                        <a href="/detailing/ceramic" className='aside-link text-medium'>Ceramic Coating</a>
                        <p className='mt-0'>Our 5 year Ceramic Coatings will not only keep your vehicle looking great, but they will also keep your paint protected. A full <a href="/services/single-stage-correction" className='aside-link'>Single Stage Paint Correction</a> is performed before the coating to give it a nice even surface to be applied to. Our exterior Ceramic Coatings will have to be performed at our shop in Bonney Lake. Interior coatings are also available to protect interior materials too. Get more info on our <a href="/services/interior-ceramic-coating" className='aside-link'>Interior Coating</a> page.</p>
                        <a href="/detailing/correction" className='aside-link text-medium'>Paint Correction</a>
                        <p className='mt-0'>Our paint correction services can fix roughly 60%-90% of minor damage and scratches and will leave your vehicle looking shinier and feeling smoother than ever.</p>
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
                            <option value="2-Year Ceramic Coating">2-Year Ceramic Coating</option>
                            <option value="5-Year Ceramic Coating">5-Year Ceramic Coating</option>
                            <option value="Combo">The Dirt-Less Detail</option>
                            <option value="Interior">Full Interior Detail</option>
                            <option value="Dirt-Less Wash">Dirt-Less Wash</option>
                            <option value="Single Stage Paint Correction">Single Stage Paint Correction</option>
                            <option value="Two Stage Paint Correction">Two Stage Paint Correction</option>
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
                        <a href="/gallery/interior-detail-gallery" className='aside-link text-medium'>Interior Cleaning Gallery</a><br />
                        <a href="/gallery/dirtless-wash-gallery" className='aside-link text-medium'>Exterior Wash Gallery</a><br />
                        <a href="/gallery/paint-correction-gallery" className='aside-link text-medium'>Paint Correction Gallery</a><br />
                        <a href="/gallery/ceramic-coating-gallery" className='aside-link text-medium'>Ceramic Coating Gallery</a><br />
                        <a href="/gallery/engine-bay-gallery" className='aside-link text-medium'>Engine Bay Gallery</a>
                    </div>
                </div>
            </div>
            <a href="/Contact" className="quote-btn location-quote-btn">Get A Free Quote Today!</a>
        </div> 
    )
}
