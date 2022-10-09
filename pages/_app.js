import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { ScrollToTop } from '../utils/ScrollToTop';

import { FaBars, FaFacebook, FaPhoneAlt, FaCarSide, FaPhotoVideo } from 'react-icons/fa';
import { GoLocation } from "react-icons/go";
import { GiSteeringWheel } from 'react-icons/gi';
import { RiCarWashingFill } from 'react-icons/ri';
import ddLogo from '../public/imgs/PNG1.png';
import './App.css';

export default function MyApp({ Component, pageProps }) {
    const [nav, setNav] = useState('none');
    const [services, setServices] = useState('none');
    const [gallery, setGallery] = useState('none');

    let changeNav = (changeTo) => {
        setServices('none');
        setGallery('none');
        switch (changeTo) {
          case 'services': {
            setServices('block');
          }
          break;
          case 'gallery': {
            setGallery('block');
          }
          break;
    
          default: {
            setServices('none');
            setGallery('none');
          }
        }
      }

    return (
        <div className="App">
            {/* <ScrollToTop /> */}
            <header className="App-header">
                <nav id="nav">
                    <Link href="/">
                        <Image src={ddLogo} style={{marginLeft: 16}} width='132' height="80" className="logo" alt="logo" />
                    </Link>
                    <FaBars className="menu-bars" onClick={() => setNav(nav === 'block' ? 'none' : 'block')} />
                    <div style={{display: nav}} className="menu-container">
                        <ul className='main-ul'>

                            <li className='menu-li'>
                                <Link href="/">
                                    <a className='menu-link'>Home</a>
                                </Link>
                            </li>

                            <div style={{position: 'relative'}}>
                                <li onMouseEnter={() => changeNav('services')} onMouseLeave={() => changeNav('none')} onClick={() => changeNav('services')}><p className='menu-li'>Services</p></li>
                                <ul className="sub-ul" onMouseEnter={() => changeNav('services')} onMouseLeave={() => changeNav('none')}  style={{display: services}}>
                                    <div className="nav-div">
                                        <h4 className='sub-menu-header'><GiSteeringWheel /> INTERIOR CLEANING</h4>
                                        <li onClick={() => setNav('none')}>
                                            <Link href='full-int-ex' className='menu-link'>
                                                <p className='sub-menu-li'>Full Interior Cleaning</p>
                                            </Link>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <Link href='/services/Bio'>
                                                <p className='menu-link'>Biohazard Cleaning</p>
                                            </Link>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <Link href='/services/Headliners'>
                                                <p className='menu-link'>Headliners</p>
                                            </Link>
                                        </li>
                                        <h4 className='sub-menu-header'><RiCarWashingFill /> EXTERIOR CLEANING</h4>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <Link href='/services/DLWash'>
                                                <p className='menu-link'>Dirt-Less Wash</p>
                                            </Link>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <Link href='/services/PDLWash'>
                                                <p className='menu-link'>Premium Dirt-Less Wash</p>
                                            </Link>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <Link href='/services/Engine'>
                                                <p className='menu-link'>Engine Bay</p>
                                            </Link>
                                        </li>
                                        <h4 className='sub-menu-header'><FaCarSide /> EXTERIOR CORRECTION</h4>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <Link href='/services/SinglePC'>
                                                <p className='menu-link'>Single Stage Paint Correction</p>
                                            </Link>
                                        </li>
                                        <li className='sub-menu-li' onClick={() => setNav('none')}>
                                            <Link href='/services/TwoPC'>
                                                <p className='menu-link'>Two Stage Paint Correction</p>
                                            </Link>
                                        </li>
                                    </div>
                                </ul>
                            </div>

                            <div style={{position: 'relative'}}>
                            <li className='menu-li' onMouseEnter={() => changeNav('gallery')} onMouseLeave={() => changeNav('none')} onClick={() => changeNav('gallery')}>Gallery</li>
                            <ul className="sub-ul" onMouseEnter={() => changeNav('gallery')} onMouseLeave={() => changeNav('none')} style={{display: gallery}}>
                                <div className="nav-div">
                                    <h4 className="sub-menu-header"><FaPhotoVideo /> GALLERIES</h4>
                                    <li className='sub-menu-li' onClick={() => setNav('none')}><Link href='full-int-gallery' className='menu-link'>Interior Gallery</Link></li>
                                    <li className='sub-menu-li' onClick={() => setNav('none')}><Link href='paint-correction-gallery' className='menu-link'>Paint Correction Gallery</Link></li>
                                    <li className='sub-menu-li' onClick={() => setNav('none')}><Link href='dl-wash-gallery' className='menu-link'>Dirt-Less Wash Gallery</Link></li>
                                    <li className='sub-menu-li' onClick={() => setNav('none')}><Link href='engine-gallery' className='menu-link'>Engine Cleaning Gallery</Link></li>
                                </div>
                            </ul>
                            </div>

                            <li className='menu-li'>
                            {/* onClick={() => setNav('none')} */}
                                <Link href="/services/Addons">
                                    <p className='menu-link'>Addons</p>
                                </Link>
                            </li>

                            <li className='menu-li'>
                            {/* onClick={() => setNav('none')} */}
                                <Link href='/About'>
                                    <p className='menu-link'>About Us</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <Component {...pageProps} />

            <footer>
                <div className="footer-content-card">
                    <h3>COMPANY</h3>
                    <Link href="/" className="footer-link">
                        <p className="footer-text">Home</p>
                    </Link>
                    <Link href="about" className="footer-link">
                        <p className="footer-text">About Us</p>
                    </Link>
                </div>
                <div className="footer-content-card">
                    <h3>INTERIOR</h3>
                    <Link href="full-int-ex" className="footer-link">
                        <p className="footer-text">Full Interior Cleaning</p>
                    </Link>
                    <Link href="bio" className="footer-link">
                        <p className="footer-text">Smoke / Biohazard / Mold Removal</p>
                    </Link>
                    <Link href="headliners" className="footer-link">
                        <p className="footer-text">Headliners</p>
                    </Link>
                </div>
                <div className="footer-content-card">
                    <h3>EXTERIOR</h3>
                    <Link href="dl-wash" className="footer-link">
                        <p className="footer-text">Dirt-Less Wash</p>
                    </Link>
                    <Link href="premium-dl-wash" className="footer-link">
                        <p className="footer-text">Premium Dirt-less Wash</p>
                    </Link>
                    <Link href="engine-bay" className="footer-link">
                        <p className="footer-text">Engine Cleaning</p>
                    </Link>
                    <Link href="single-paint-correction" className="footer-link">
                        <p className="footer-text">Single Stage Paint Correction</p>
                    </Link>
                    <Link href="two-paint-correction" className="footer-link">
                        <p className="footer-text">Two Stage Paint Correction</p>
                    </Link>
                </div>
                <div className="footer-content-card" id="contact">
                    <h3>CONTACT US</h3>
                    <GoLocation />
                    <a href="https://www.google.com/maps/place/9305+205th+Ave+E,+Bonney+Lake,+WA+98391/@47.172835,-122.1589741,17z/data=!3m1!4b1!4m5!3m4!1s0x5490faeb8aa2e3d7:0xe53c2e7cb4aa7549!8m2!3d47.1728314!4d-122.1567854" className="contact-link footer-contact-link" target="_blank" rel="noreferrer">9305 205th Ave E Bonney Lake Washington</a><br />
                    <FaPhoneAlt />
                    <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noreferrer">(253) 252-9758</a>
                </div>
                <hr />
                <div className='socials-container'>
                    <h4>Copyright Dirt-Less Detailing 2022</h4>
                    <a href="https://www.facebook.com/DirtLessDetailing/" className="socials" target="_blank" rel="noreferrer"><FaFacebook /></a>
                </div>
            </footer>
        </div>
    )
}
