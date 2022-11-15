import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cookies from '../utils/Cookies';

import { FaBars, FaFacebook, FaInstagram, FaPhoneAlt, FaCarSide, FaPhotoVideo } from 'react-icons/fa';
import { GoLocation } from "react-icons/go";
import { GiSteeringWheel, GiCarKey } from 'react-icons/gi';
import { RiCarWashingFill } from 'react-icons/ri';
import { MdOutlineEmail } from 'react-icons/md';
import ddLogo from '../public/imgs/PNG1.png';
import './App.css';

export default function MyApp({ Component, pageProps }) {
    const [nav, setNav] = useState('none');
    const [services, setServices] = useState(false);
    const [gallery, setGallery] = useState(false);
    const [smallScreen, setSmallScreen] = useState(null);
        
    const router = useRouter();
    useEffect(() => {
        if (document.cookie === '') {
            let year = new Date();
            year = year.getFullYear() + 5;
            toast(<Cookies acceptCookies={() => document.cookie = `ddCookies=true; SameSite=Lax; expires=Thu, 18 Dec ${year} 12:00:00;`}
            declineCookies={() => document.cookie = `ddCookies=false; SameSite=Lax; expires=Thu, 01 Jan 1970 00:00:00 UTC`} />,
            {position: "bottom-center", autoClose: false, hideProgressBar: true, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark"})
        }
    
        if (window.innerWidth < 879) {
            setSmallScreen(true);
        } else {
            setSmallScreen(false);
        }

        import('react-facebook-pixel') // Facebook Pixel init code
            .then((x) => x.default)
            .then((ReactPixel) => {
                (ReactPixel.init(process.env.FACEBOOK_PIXEL))
                if (document.cookie !== 'ddCookies=true') {
                    ReactPixel.revokeConsent();
                } else {
                    ReactPixel.grantConsent();
                    ReactPixel.pageView()
        
                    router.events.on('routeChangeComplete', () => {
                        ReactPixel.pageView()
                    })
                }
            })
    }, [router.events])


    let changeNav = (changeTo) => {
        switch (changeTo) {
            case 'services': {
                setGallery(false);
                setServices(true);
            }
            break;
            case 'gallery': {
                setServices(false);
                setGallery(true);
          }
          break;
          default: {
            setServices(false);
            setGallery(false);
          }
        }
      }

      function generateStructuredData() {
        return {
            __html: `{
                "@context": "https://schema.org",
                "@type": "Car Detailing",
                "name": "Dirt-Less Detailing",
                "address": {
                "@type":"PostalAddress",
                "streetAddress": "9305 205th Ave E",
                "addressLocality": "Bonney Lake",
                "addressRegion": "WA",
                "postalCode": "98391",
                "addressCountry": "US"
                },
                "url": "https://www.dirtlessdetailing.com",
                "priceRange": "$$",
                "telephone": "+12532529758",
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday"
                        ],
                        "opens": "08:00",
                        "closes": "20:00"
                    }
                ]
            }`
        }
    }

    return (
        <div className="App">
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Dirt-Less Detailing is here to provide the highest-quality detailing services at great prices here in the Bonney Lake area. Come check out our offers!" />
                <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
                <meta name="google-site-verification" content="sq8uUuD_CLtkO1bg33IWhAVFjproB_N6s2Qqll0IxUo" />

                <link rel="icon" href="/favicon.ico" />
                <title>Dirt-Less Detailing | Bonney Lakes Top Auto Detailer</title>
                <script key="structured-data" type="application/ld+json" dangerouslySetInnerHTML={generateStructuredData()}></script>
            </Head>
            <Script key="structured-data" type="application/ld+json" dangerouslySetInnerHTML={generateStructuredData()}></Script>
            <header className="App-header">
                <nav id="nav">
                    <a style={{display: 'flex', justifyContent: 'flex-start', flex: 1}} href="/"><Image src={ddLogo} objectFit="contain" width={smallScreen ? 120 : 140} height={smallScreen ? 90 : 105} className="logo" alt="logo" /></a>
                    <FaBars className="menu-bars" onClick={() => setNav(nav === 'block' ? 'none' : 'block')} />
                    <div style={{display: nav}} className="menu-container">
                        <ul className='main-ul'>

                            <li>
                                <a href="/" className='menu-link'>Home</a>
                            </li>

                            <div style={{position: 'relative'}}>
                                <li onPointerEnter={() => changeNav('services')} onPointerLeave={() => changeNav('none')} onClick={() => changeNav('services')}><p className='menu-li'>Services</p></li>
                                <ul className="sub-ul" onPointerEnter={() => changeNav('services')} onPointerLeave={() => changeNav('none')} style={{opacity: smallScreen ? 1 : services ? 1 : !services ? 0 : 0, pointerEvents: smallScreen ? 'auto' : services ? 'auto' : !services ? 'none' : 'auto'}} >
                                    <div className="nav-div">
                                        <h4 className='sub-menu-header'><GiSteeringWheel /> INTERIOR CLEANING SERVICES</h4>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/services/FullIntEx" className='menu-link'>Full Interior Cleaning</a>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/services/Bio" className='menu-link'>Biohazard Cleaning</a>
                                        </li>
                                        <hr className="contact-border" />
                                        <h4 className='sub-menu-header'><RiCarWashingFill /> EXTERIOR CLEANING SERVICES</h4>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/services/DLWash" className='menu-link'>Dirt-Less Wash</a>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/services/PDLWash" className='menu-link'>Premium Dirt-Less Wash</a>
                                        </li>
                                        <hr className="contact-border" />
                                        <h4 className='sub-menu-header'><GiCarKey /> COMBO DEALS</h4>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/services/Combo" className='menu-link'>Interior + Exterior Combo</a>
                                        </li>
                                        <hr className="contact-border" />
                                        <h4 className='sub-menu-header'><FaCarSide /> EXTERIOR CORRECTION SERVICES</h4>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/services/SinglePC" className='menu-link'>Single Stage Paint Correction</a>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/services/TwoPC" className='menu-link'>Two Stage Paint Correction</a>
                                        </li>
                                    </div>
                                </ul>
                            </div>

                            <div style={{position: 'relative'}}>
                                <li className='menu-li' onPointerEnter={() => changeNav('gallery')} onPointerLeave={() => changeNav('none')} onClick={() => changeNav('gallery')}>Gallery</li>
                                <ul className="sub-ul" onPointerEnter={() => changeNav('gallery')} onPointerLeave={() => changeNav('none')} style={{opacity: smallScreen ? 1 : gallery ? 1 : !gallery ? 0 : 0, pointerEvents: smallScreen ? 'auto' : gallery ? 'auto' : !gallery ? 'none' : 'auto'}}>
                                    <div className="nav-div">
                                        <h4 className="sub-menu-header"><FaPhotoVideo /> GALLERIES</h4>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/gallery/FullIntGallery" className='menu-link'>Full Interior Gallery</a>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/gallery/ExteriorWashGallery" className='menu-link'>Exterior Wash Gallery</a>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/gallery/EngineGallery" className='menu-link'>Engine Bay Gallery</a>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/gallery/PaintCorrectionGallery" className='menu-link'>Paint Correction Gallery</a>
                                        </li>
                                    </div>
                                </ul>
                            </div>

                            <li>
                                <a href="/services/Addons" className='menu-link' onClick={() => setNav('none')}>Addons</a>
                            </li>

                            <li>
                                <a href="/About" className="menu-link" onClick={() => setNav('none')}>About Us</a>
                            </li>

                            <li className="menu-li quote-li">
                                <a href="/Contact" className="nav-quote-btn" onClick={() => setNav('none')}>Get Started</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <Component {...pageProps} />

            <footer>
                <div className="footer-content-card">
                    <h3>COMPANY</h3>
                    <a href="/" className='footer-link'>Home</a>
                    <a href="/About" className='footer-link'>About Us</a>
                </div>
                <div className="footer-content-card">
                    <h3>INTERIOR</h3>
                    <a href="/services/FullIntEx" className='footer-link'>Full Interior Cleaning</a>
                    <a href="/services/Bio" className='footer-link'>Smoke / Biohazard / Mold Removal</a>
                </div>
                <div className="footer-content-card">
                    <h3>EXTERIOR</h3>
                    <a href="/services/DLWash" className='footer-link'>Dirt-Less Wash</a>
                    <a href="/services/PDLWash" className='footer-link'>Premium Dirt-Less Wash</a>
                    <a href="/services/Combo" className='footer-link'>Interior + Exterior Combo</a>
                </div>
                <div className="footer-content-card">
                    <h3>CORRECTION SERVICES</h3>
                    <a href="/services/SinglePC" className='footer-link'>Single Stage Paint Correction</a>
                    <a href="/services/TwoPC" className='footer-link'>Two Stage Paint Correction</a>
                </div>
                <div className="footer-content-card footer-contact-card" id="contact">
                    <h3>CONTACT US</h3>
                    <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noreferrer"><FaPhoneAlt /> (253) 252-9758</a>
                    <a href="mailto:brenden@dirtlessdetailing.com?subject = Schedule a Dirt-Less Detail" className="contact-link footer-contact-link" target="_blank" rel="noreferrer"><MdOutlineEmail /> brenden@dirtlessdetailing.com</a>
                    <a href="https://www.google.com/maps/place/9305+205th+Ave+E,+Bonney+Lake,+WA+98391/@47.172835,-122.1589741,17z/data=!3m1!4b1!4m5!3m4!1s0x5490faeb8aa2e3d7:0xe53c2e7cb4aa7549!8m2!3d47.1728314!4d-122.1567854" className="contact-link footer-contact-link" target="_blank" rel="noreferrer"><GoLocation /> 9305 205th Ave E Bonney Lake Washington</a><br />
                </div>
                <hr />
                <div className='socials-container'>
                    <h4>Dirt-Less Detailing 2022</h4>
                    <div>
                        <a href="https://www.facebook.com/DirtLessDetailing/" className="socials" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
                        <a href="https://www.instagram.com/dirtlessdetailing/" className="socials" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                </div>
            </footer>
            <ToastContainer />
        </div>
    )
}
