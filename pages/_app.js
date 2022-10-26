import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { FaBars, FaFacebook, FaInstagram, FaPhoneAlt, FaCarSide, FaPhotoVideo } from 'react-icons/fa';
import { GoLocation } from "react-icons/go";
import { GiSteeringWheel } from 'react-icons/gi';
import { RiCarWashingFill } from 'react-icons/ri';
import ddLogo from '../public/imgs/PNG1.png';
import './App.css';

export default function MyApp({ Component, pageProps }) {
    const [nav, setNav] = useState('none');
    const [services, setServices] = useState(false);
    const [gallery, setGallery] = useState(false);
    const [smallScreen, setSmallScreen] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 879) {
            setSmallScreen(true);
        }
    }, [])

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

    return (
        <div className="App">
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Dirt-Less Detailing Official Site" />
                <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />

                <link rel="icon" href="/favicon.ico" />
                <title>Dirt-Less Detailing</title>
            </Head>
            <header className="App-header">
                <nav id="nav">
                    <a style={{display: 'flex', justifyContent: 'flex-start', flex: 1}} href="/"><Image src={ddLogo} objectFit="contain" width={120} height={90} className="logo" alt="logo" /></a>
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
                                        <h4 className='sub-menu-header'><GiSteeringWheel /> INTERIOR CLEANING</h4>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/services/FullIntEx" className='menu-link'>Full Interior Cleaning</a>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/services/Bio" className='menu-link'>Biohazard Cleaning</a>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/services/Headliners" className='menu-link'>Headliners</a>
                                        </li>
                                        <h4 className='sub-menu-header'><RiCarWashingFill /> EXTERIOR CLEANING</h4>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/services/DLWash" className='menu-link'>Dirt-Less Wash</a>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/services/PDLWash" className='menu-link'>Premium Dirt-Less Wash</a>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/services/Engine" className='menu-link'>Engine Bay Cleaning</a>
                                        </li>
                                        <h4 className='sub-menu-header'><FaCarSide /> EXTERIOR CORRECTION</h4>
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
                                            <a href="/gallery/DLWashGallery" className='menu-link'>Dirt-Less Wash Gallery</a>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/gallery/PaintCorrectionGallery" className='menu-link'>Paint Correction Gallery</a>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/gallery/EngineGallery" className='menu-link'>Engine Bay Gallery</a>
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

                            <li className="menu-li">
                                <a href="/#contact" className="nav-quote-btn" onClick={() => setNav('none')}>Get Started</a>
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
                    <a href="/services/Headliners" className='footer-link'>Headliners</a>
                </div>
                <div className="footer-content-card">
                    <h3>EXTERIOR</h3>
                    <a href="/services/DLWash" className='footer-link'>Dirt-Less Wash</a>
                    <a href="/services/PDLWash" className='footer-link'>Premium Dirt-Less Wash</a>
                    <a href="/services/Engine" className='footer-link'>Engine Bay Cleaning</a>
                    <a href="/services/SinglePC" className='footer-link'>Single Stage Paint Correction</a>
                    <a href="/services/TwoPC" className='footer-link'>Two Stage Paint Correction</a>
                </div>
                <div className="footer-content-card" id="contact">
                    <h3>CONTACT US</h3>
                    <a href="https://www.google.com/maps/place/9305+205th+Ave+E,+Bonney+Lake,+WA+98391/@47.172835,-122.1589741,17z/data=!3m1!4b1!4m5!3m4!1s0x5490faeb8aa2e3d7:0xe53c2e7cb4aa7549!8m2!3d47.1728314!4d-122.1567854" className="contact-link footer-contact-link" target="_blank" rel="noreferrer"><GoLocation /> 9305 205th Ave E Bonney Lake Washington</a><br />
                    <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noreferrer"><FaPhoneAlt /> (253) 252-9758</a>
                </div>
                <hr />
                <div className='socials-container'>
                    <h4>Copyright Dirt-Less Detailing 2022</h4>
                    <div>
                        <a href="https://www.facebook.com/DirtLessDetailing/" className="socials" target="_blank" rel="noreferrer"><FaFacebook /></a>
                        <a href="https://www.instagram.com/dirtlessdetailing/" className="socials" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
