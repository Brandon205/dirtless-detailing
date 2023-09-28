import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

export default function MyApp({ Component, pageProps }) {
    const [nav, setNav] = useState('none');
    const [services, setServices] = useState(false);
    const [gallery, setGallery] = useState(false);
    const [smallScreen, setSmallScreen] = useState(null);

    const navBar = useRef(null);

    useEffect(() => {

        if (window.innerWidth < 979) {
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
        if (navBar.current) {
            if (pos > 0 || smallScreen) {
                navBar.current.classList.add('normal-nav')
            } else {
                navBar.current.classList.remove('normal-nav')
            }
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
                <nav id="nav" ref={navBar}>
                    <a style={{ display: 'flex', justifyContent: 'flex-start' }} className='nav-logo' href="/" aria-label='Dirt-Less Detailing Logo'>
                        <div className="header-cert" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0a945e76-f4c0-4e29-ef16-463490d0db00/public')`, height: 105 + 'px', width: 140 + 'px' }}></div>
                    </a>
                    {nav === 'none' ?
                        <img src='../assets/icons/menuBars.png' alt='menu bars' className='menu-bars' onClick={() => setNav('block')} /> :
                        <img src='../assets/icons/close.png' alt='close' className='menu-bars' onClick={() => setNav('none')} />
                    }
                    <div style={{ display: nav }} className="menu-container">
                        <ul className='main-ul'>

                            <li className='menu-li'>
                                <a href="/" className='menu-link'>Home</a>
                            </li>

                            <li style={{ position: 'relative' }}>
                                <div className='menu-li' onPointerEnter={() => changeNav('services')} onPointerLeave={() => changeNav('none')} onClick={() => changeNav('services')}><a href="#" className='menu-link no-click'>All Services <img src='../assets/icons/downArrow.png' alt='down caret' className='icon-20' /></a></div>
                                <ul className="sub-ul" onPointerEnter={() => changeNav('services')} onPointerLeave={() => changeNav('none')} style={{ opacity: smallScreen ? 1 : services ? 1 : !services ? 0 : 0, pointerEvents: smallScreen ? 'auto' : services ? 'auto' : !services ? 'none' : 'auto' }} >
                                    <li className="nav-li">
                                        <div>
                                            <h4 className='sub-menu-header'>INTERIOR CLEANING SERVICES</h4>
                                            <div className='sub-menu-div' onClick={() => setNav('none')}>
                                                <a href="/services/interior" className='menu-link'><img src='../assets/icons/steeringWheel.png' alt='steering wheel' className='nav-icon' /> Full Interior</a>
                                            </div>
                                            <div className='sub-menu-div' onClick={() => setNav('none')}>
                                                <a href="/services/interior-spill" className='menu-link'><img src='../assets/icons/carSeat.png' alt='car seat' className='nav-icon' /> Full Interior with Spill Guard</a>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className='sub-menu-header'>EXTERIOR SERVICES</h4>
                                            <div className='sub-menu-div' onClick={() => setNav('none')}>
                                                <a href="/services/exterior" className='menu-link'><img src='../assets/icons/soapBucket.png' alt='soap bucket' className='nav-icon' /> Exterior Wash</a>
                                            </div>
                                            <div className='sub-menu-div' onClick={() => setNav('none')}>
                                                <a href="/services/exterior-seal" className='menu-link'><img src='../assets/icons/microfiber.png' alt='microfiber' className='nav-icon' /> Exterior Seal and Shine</a>
                                            </div>
                                            <div className='sub-menu-div' onClick={() => setNav('none')}>
                                                <a href="/services/exterior-correct" className='menu-link'><img src='../assets/icons/polisher.png' alt='polisher' className='nav-icon' /> Exterior Correct and Protect</a>
                                            </div>
                                        </div>

                                    </li>
                                </ul>
                            </li>

                            <li style={{ position: 'relative' }}>
                                <div className='menu-li' onPointerEnter={() => changeNav('gallery')} onPointerLeave={() => changeNav('none')} onClick={() => changeNav('gallery')}><a href="#" className='menu-link no-click'>Galleries <img src='../assets/icons/downArrow.png' alt='down caret' className='icon-20' /></a></div>
                                <ul className="sub-ul" onPointerEnter={() => changeNav('gallery')} onPointerLeave={() => changeNav('none')} style={{ opacity: smallScreen ? 1 : gallery ? 1 : !gallery ? 0 : 0, pointerEvents: smallScreen ? 'auto' : gallery ? 'auto' : !gallery ? 'none' : 'auto' }}>
                                    <li className="nav-li">
                                        <h4 className="sub-menu-header">GALLERIES</h4>
                                        <div className='sub-menu-div' onClick={() => setNav('none')}>
                                            <a href="/gallery/ceramic-coating-gallery" className='menu-link'><img src='../assets/icons/gallery.png' alt='gallery' className='nav-icon' /> Ceramic Coating Gallery</a>
                                        </div>
                                        <div className='sub-menu-div' onClick={() => setNav('none')}>
                                            <a href="/gallery/interior-detail-gallery" className='menu-link'><img src='../assets/icons/doorAjar.png' alt='car with doors open' className='nav-icon' /> Full Interior Gallery</a>
                                        </div>
                                        <div className='sub-menu-div' onClick={() => setNav('none')}>
                                            <a href="/gallery/dirtless-wash-gallery" className='menu-link'><img src='../assets/icons/bubbles.png' alt='soap bubbles' className='nav-icon' /> Dirt-Less Wash Gallery</a>
                                        </div>
                                        <div className='sub-menu-div' onClick={() => setNav('none')}>
                                            <a href="/gallery/paint-correction-gallery" className='menu-link'><img src='../assets/icons/hood.png' alt='car hood' className='nav-icon' /> Paint Correction Gallery</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                            <li className='menu-li' style={{ paddingBottom: smallScreen ? '2rem' : 0 }}>
                                <a href="/About" className="menu-link" onClick={() => setNav('none')}>About / FAQ</a>
                            </li>

                            <li className="menu-li quote-li">
                                <a href="/Contact" className="nav-quote-btn" onClick={() => setNav('none')}>CONTACT US</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <Component {...pageProps} />

            <footer>
                <div className="footer-content-card-left">
                    <div>
                        <a href="/"><img src='../assets/icons/logoCircle.png' alt='Dirt-Less Detailing' style={{ width: '88px' }} /></a>
                        <div>
                            <h3>Dirt-Less</h3>
                            <h3>Detailing</h3>
                        </div>
                    </div>
                    <div>
                        <p>©2023 Dirt-Less Detailing.</p>
                        <p>Icons made by <a target="_blank" rel='noopener' href="https://icons8.com" className='aside-link'>Icons8</a>.</p>
                    </div>
                </div>
                <div className="footer-content-card">
                    <h3>COMPANY</h3>
                    <a href="/" className='footer-link'>Home</a>
                    <a href="/About" className='footer-link'>About Us</a>
                </div>
                <div className="footer-content-card" style={{ paddingBottom: '2rem' }}>
                    <h3>SERVICES</h3>
                    <a href="/services/interior-exterior-detailing-combo" className='footer-link'>Full Interior</a>
                    <a href="/services/full-interior-detail" className='footer-link'>Full Interior + Spill Guard</a>
                    <a href="/services/biohazard-cleaning" className='footer-link'>Exterior Wash</a>
                    <a href="/services/dirtless-wash" className='footer-link'>Exterior Seal and Shine</a>
                    <a href="/services/interior-exterior-detailing-combo" className='footer-link'>Exterior Correct and Protect</a>
                </div>
                <div className="footer-content-card footer-contact-card" id="contact">
                    <h3>CONTACT</h3>
                    <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener"><img src='../assets/icons/phoneMessageColor.png' alt='Phone call / message' className='icon-24' /> (253) 252-9758</a>
                    <a href="mailto:brenden@dirtlessdetailing.com?subject = Schedule a Dirt-Less Detail" className="contact-link footer-contact-link" target="_blank" rel="noopener"><img src='../assets/icons/post.png' alt='email' className='icon-24' /> brenden@dirtlessdetailing.com</a>
                    <a href="https://www.google.com/maps/place/9305+205th+Ave+E,+Bonney+Lake,+WA+98391/@47.172835,-122.1589741,17z/data=!3m1!4b1!4m5!3m4!1s0x5490faeb8aa2e3d7:0xe53c2e7cb4aa7549!8m2!3d47.1728314!4d-122.1567854" className="contact-link footer-contact-link" target="_blank" rel="noopener"><img src='../assets/icons/placeMarker.png' alt='place marker' className='icon-24' /> 9305 205th Ave E, Bonney Lake, Wa 98391</a><br />
                    <div>
                        <a href="https://www.facebook.com/DirtLessDetailing/" className="socials" target="_blank" rel="noopener" aria-label="Facebook"><img src='../assets/icons/facebook.png' alt='facebook' className='icon-48' /></a>
                        <a href="https://www.instagram.com/dirt_less_detailing/" className="socials" target="_blank" rel="noopener" aria-label="Instagram"><img src='../assets/icons/instagram.png' alt='instagram' className='icon-48' /></a>
                        <a href="https://www.youtube.com/channel/UCsoqP5s4hwkQd_Sd-TVv-jg" className="socials" target="_blank" rel="noopener" aria-label="Youtube"><img src='../assets/icons/youtube.png' alt='youtube' className='icon-48' /></a>
                    </div>
                </div>
            </footer>

        </div>
    )
}
