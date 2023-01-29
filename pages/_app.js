import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.css';

import { AiOutlineCar, AiOutlinePlus } from "react-icons/ai";
import { BsFillCameraFill, BsFillPersonBadgeFill } from "react-icons/bs";
import { FaBars, FaFacebook, FaInstagram, FaPhoneAlt, FaCarSide, FaPhotoVideo, FaBiohazard, FaCameraRetro, FaHome, FaImages, FaSoap } from 'react-icons/fa';
import { GiSteeringWheel, GiCarKey, GiCarSeat, GiSmallFire } from 'react-icons/gi';
import { GoLocation } from "react-icons/go";
import { HiSparkles, HiInformationCircle } from 'react-icons/hi';
import { MdOutlineEmail, MdLocalOffer } from 'react-icons/md';
import { TbEngine } from 'react-icons/tb';
import { RiCarWashingFill } from 'react-icons/ri';
import { ImFilePicture } from 'react-icons/im';
import './App.css';

export default function MyApp({ Component, pageProps }) {
    const [nav, setNav] = useState('none');
    const [services, setServices] = useState(false);
    const [gallery, setGallery] = useState(false);
    const [smallScreen, setSmallScreen] = useState(null);

    const navBar = useRef(null)

    useEffect(() => {

        if (window.innerWidth < 879) {
            setSmallScreen(true);
        } else {
            setSmallScreen(false);
        }

        document.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }


    }, [])

    let handleScroll = () => {
        const pos = window.pageYOffset;
        if (pos > 400 || smallScreen) {
            navBar.current.style.backgroundColor = '#101010'
            navBar.current.style.backdropFilter = 'none'
            navBar.current.style.borderRadius = '0'
            navBar.current.style.transform = 'scale(100%)'
            navBar.current.style.transition = '0.5s'
        } else {
            navBar.current.removeAttribute('style')
        }
    }

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
                <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
                <meta name="google-site-verification" content="sq8uUuD_CLtkO1bg33IWhAVFjproB_N6s2Qqll0IxUo" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="App-header">
                <nav id="nav" className='navigation-small' ref={navBar}>
                    <a style={{ display: 'flex', justifyContent: 'flex-start', flex: 1 }} href="/">
                        <div className="header-cert" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0a945e76-f4c0-4e29-ef16-463490d0db00/public')`, height: 105 + 'px', width: 140 + 'px'}}></div>
                    </a>
                    <FaBars className="menu-bars" onClick={() => setNav(nav === 'block' ? 'none' : 'block')} />
                    <div style={{ display: nav }} className="menu-container">
                        <ul className='main-ul'>

                            <li>
                                <a href="/" className='menu-link'><FaHome /> Home</a>
                            </li>
                            <hr className="nav-hr" />

                            <div style={{ position: 'relative' }}>
                                <li onPointerEnter={() => changeNav('services')} onPointerLeave={() => changeNav('none')} onClick={() => changeNav('services')}><p className='menu-li'><MdLocalOffer /> All Services</p></li>
                                <ul className="sub-ul" onPointerEnter={() => changeNav('services')} onPointerLeave={() => changeNav('none')} style={{ opacity: smallScreen ? 1 : services ? 1 : !services ? 0 : 0, pointerEvents: smallScreen ? 'auto' : services ? 'auto' : !services ? 'none' : 'auto' }} >
                                    <div className="nav-div">
                                        <h4 className='sub-menu-header'>CERAMIC COATING</h4>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/services/exterior-ceramic-coating" className='menu-link'><AiOutlineCar /> Exterior Ceramic Coating</a>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/services/interior-ceramic-coating" className='menu-link'><GiCarSeat /> Interior Coating</a>
                                        </li>
                                        <hr className="nav-hr" />
                                        <h4 className='sub-menu-header'>INTERIOR CLEANING SERVICES</h4>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/services/full-interior-detail" className='menu-link'><GiSteeringWheel /> Full Interior Cleaning</a>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/services/biohazard-cleaning" className='menu-link'><FaBiohazard /> Biohazard Cleaning</a>
                                        </li>
                                        <hr className="nav-hr" />
                                        <h4 className='sub-menu-header'>EXTERIOR DETAILING SERVICES</h4>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/services/premium-dirtless-wash" className='menu-link'><RiCarWashingFill /> Premium Dirt-Less Wash</a>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/services/dirtless-wash" className='menu-link'><FaSoap /> Dirt-Less Wash</a>
                                        </li>
                                        <hr className="nav-hr" />
                                        <h4 className='sub-menu-header'>COMBO DEALS</h4>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/services/interior-exterior-detailing-combo" className='menu-link'><GiCarKey /> Interior + Exterior Combo</a>
                                        </li>
                                        <hr className="nav-hr" />
                                        <h4 className='sub-menu-header'>PAINT CORRECTION SERVICES</h4>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/services/single-stage-correction" className='menu-link'><FaCarSide /> Single Stage Paint Correction</a>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/services/two-stage-correction" className='menu-link'><HiSparkles /> Two Stage Paint Correction</a>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                            <hr className="nav-hr" />

                            <div style={{ position: 'relative' }}>
                                <li className='menu-li' onPointerEnter={() => changeNav('gallery')} onPointerLeave={() => changeNav('none')} onClick={() => changeNav('gallery')}><FaImages /> Gallery</li>
                                <ul className="sub-ul" onPointerEnter={() => changeNav('gallery')} onPointerLeave={() => changeNav('none')} style={{ opacity: smallScreen ? 1 : gallery ? 1 : !gallery ? 0 : 0, pointerEvents: smallScreen ? 'auto' : gallery ? 'auto' : !gallery ? 'none' : 'auto' }}>
                                    <div className="nav-div">
                                        <h4 className="sub-menu-header">GALLERIES</h4>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/gallery/ceramic-coating-gallery" className='menu-link'><ImFilePicture /> Ceramic Coating Gallery</a>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/gallery/interior-detail-gallery" className='menu-link'><FaPhotoVideo /> Full Interior Gallery</a>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/gallery/dirtless-wash-gallery" className='menu-link'><BsFillCameraFill /> Exterior Wash Gallery</a>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/gallery/engine-bay-gallery" className='menu-link'><TbEngine /> Engine Bay Gallery</a>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <a href="/gallery/paint-correction-gallery" className='menu-link'><FaCameraRetro /> Paint Correction Gallery</a>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                            <hr className="nav-hr" />

                            <li>
                                <a href="/services/add-ons" className='menu-link' onClick={() => setNav('none')}><AiOutlinePlus /> Addons</a>
                            </li>
                            <hr className="nav-hr" />

                            <li>
                                <a href="/About" className="menu-link" onClick={() => setNav('none')}><BsFillPersonBadgeFill /> About Us</a>
                            </li>

                            <li className="menu-li quote-li">
                                <a href="/Contact" className="nav-quote-btn" onClick={() => setNav('none')}><HiInformationCircle /> Get Started</a>
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
                    <h3>CERAMIC COATINGS</h3>
                    <a href="/services/exterior-ceramic-coating" className='footer-link'>Exterior Ceramic Coating</a>
                    <a href="/services/interior-ceramic-coating" className='footer-link'>Interior Ceramic Coating</a>
                </div>
                <div className="footer-content-card">
                    <h3>INTERIOR</h3>
                    <a href="/services/full-interior-detail" className='footer-link'>Full Interior Cleaning</a>
                    <a href="/services/biohazard-cleaning" className='footer-link'>Smoke / Biohazard / Mold Removal</a>
                    <a href="/services/interior-exterior-detailing-combo" className='footer-link'>Interior + Exterior Combo</a>
                </div>
                <div className="footer-content-card">
                    <h3>EXTERIOR</h3>
                    <a href="/services/dirtless-wash" className='footer-link'>Dirt-Less Wash</a>
                    <a href="/services/premium-dirtless-wash" className='footer-link'>Premium Dirt-Less Wash</a>
                    <a href="/services/interior-exterior-detailing-combo" className='footer-link'>Interior + Exterior Combo</a>
                </div>
                <div className="footer-content-card">
                    <h3>CORRECTION SERVICES</h3>
                    <a href="/services/single-stage-correction" className='footer-link'>Single Stage Paint Correction</a>
                    <a href="/services/two-stage-correction" className='footer-link'>Two Stage Paint Correction</a>     
                </div>
                <div className="footer-content-card footer-contact-card" id="contact">
                    <h3>CONTACT US</h3>
                    <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener"><FaPhoneAlt /> (253) 252-9758</a>
                    <a href="mailto:brenden@dirtlessdetailing.com?subject = Schedule a Dirt-Less Detail" className="contact-link footer-contact-link" target="_blank" rel="noopener"><MdOutlineEmail /> brenden@dirtlessdetailing.com</a>
                    <a href="https://www.google.com/maps/place/9305+205th+Ave+E,+Bonney+Lake,+WA+98391/@47.172835,-122.1589741,17z/data=!3m1!4b1!4m5!3m4!1s0x5490faeb8aa2e3d7:0xe53c2e7cb4aa7549!8m2!3d47.1728314!4d-122.1567854" className="contact-link footer-contact-link" target="_blank" rel="noopener"><GoLocation /> 9305 205th Ave E, Bonney Lake, Wa 98391</a><br />
                </div>
                <div className='bbb-footer'>
                    <p>We currently service:<span style={{ color: 'lightgray' }}> Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Lake Tapps, Federal Way, Orting, South Prairie, Tehaleh, Black Diamond, Milton, Edgewood, and Graham.</span></p>
                    <a href="https://www.bbb.org/us/wa/bonney-lake/profile/auto-detailing/dirt-less-detailing-1296-1000135733/#sealclick" target="_blank" rel="nofollow">
                        <div className="header-cert" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/1f42d129-8657-4246-7297-ab33dc24c000/public')`, width: 147 + 'px', height: 75 + 'px'}}></div>
                    </a>
                </div>
                <hr />
                <div className='socials-container'>
                    <h4 style={{ fontSize: 1.3 + 'em' }}>Dirt-Less Detailing 2023</h4>
                    <div>
                        <a href="https://www.facebook.com/DirtLessDetailing/" className="socials" target="_blank" rel="noopener" aria-label="Facebook"><FaFacebook /></a>
                        <a href="https://www.instagram.com/dirtlessdetailing/" className="socials" target="_blank" rel="noopener" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                </div>
            </footer>

        </div>
    )
}
