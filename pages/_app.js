import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import CookieBanner from "../components/CookieBanner";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";
import "./App.scss";
import Nav from "../src/app/Nav";
import Footer from "../src/app/Footer";

// if (typeof window !== 'undefined') {
//     posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
//         api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
//         // Enable debug mode in development
//         loaded: (posthog) => {
//             if (process.env.NODE_ENV === 'development') {
//                 posthog.debug()
//             }
//             // if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
//             //     posthog.opt_out_capturing()
//             // }
//         },
//         capture_pageleave: false,
//         capture_pageview: true,
//     })
// }

export default function MyApp({ Component, pageProps }) {
  // const [nav, setNav] = useState('none');
  // const [services, setServices] = useState(false);
  // const [gallery, setGallery] = useState(false);
  // const [smallScreen, setSmallScreen] = useState(null);

  // const router = useRouter()

  // const navBar = useRef(null);

  // useEffect(() => {
  //     const handleRouteChange = () => posthog?.capture('$pageview')
  //     router.events.on('routeChangeComplete', handleRouteChange)

  //     return () => {
  //         router.events.off('routeChangeComplete', handleRouteChange)
  //     }
  // }, [])

  // useEffect(() => {

  //     if (window.innerWidth < 979) {
  //         setSmallScreen(true);
  //     } else {
  //         setSmallScreen(false);
  //     }

  //     document.addEventListener('scroll', handleScroll, { passive: true });

  //     return () => {
  //         window.removeEventListener('scroll', handleScroll)
  //     }

  // }, [])

  // useEffect(() => {
  //     if (nav === 'block') {
  //         setServices(true)
  //         setGallery(true)
  //     } else {
  //         setServices(false)
  //         setGallery(false)
  //     }
  // }, [nav])

  // let handleScroll = () => {
  //     const pos = window.pageYOffset;
  //     if (navBar.current) {
  //         if (pos > 0 || smallScreen) {
  //             navBar.current.classList.add('normal-nav')
  //         } else {
  //             navBar.current.classList.remove('normal-nav')
  //         }
  //     }
  // }

  // let changeNav = (changeTo) => {
  //     switch (changeTo) {
  //         case 'services': {
  //             setGallery(false);
  //             setServices(true);
  //         }
  //             break;
  //         case 'gallery': {
  //             setServices(false);
  //             setGallery(true);
  //         }
  //             break;
  //         default: {
  //             setServices(false);
  //             setGallery(false);
  //         }
  //     }
  // }

  // const navParent = {
  //     open: { opacity: 1 },
  //     closed: { opacity: 0 }
  // }

  // const navChild = {
  //     open: { x: 0, opacity: 1 },
  //     closed: { x: '-8%', opacity: 0 }
  // }

  // const navChildDiff = {
  //     open: { x: 0, opacity: 1 },
  //     closed: { x: '8%', opacity: 0 }
  // }

  return (
    // <PostHogProvider client={posthog}>
    <div className="App">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
        <meta name="google-site-verification" content="sq8uUuD_CLtkO1bg33IWhAVFjproB_N6s2Qqll0IxUo" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <header className="App-header">
                    <nav id="nav" ref={navBar}>
                        <a style={{ display: 'flex', justifyContent: 'flex-start' }} className='nav-logo' href="/" aria-label='Dirt-Less Detailing Logo'>
                            <div className="header-cert" style={{ backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0a945e76-f4c0-4e29-ef16-463490d0db00/public')`, height: 105 + 'px', width: smallScreen ? '140px' : '200px' }}></div>
                        </a>
                        {nav === 'none' ?
                            <img src='../assets/icons/menuBars.png' alt='menu bars' className='menu-bars' onClick={() => setNav('block')} /> :
                            <img src='../assets/icons/close.png' alt='close' className='menu-bars' onClick={() => setNav('none')} />
                        }
                        <div style={{ display: nav }} className="menu-container">
                            <ul className='main-ul'>

                                <li className='menu-li'>
                                    <Link href="/" className='menu-link'>Home</Link>
                                </li>

                                <li style={{ position: 'relative' }}>
                                    <div className='menu-li' onPointerEnter={() => { nav !== 'block' ? setServices(true) : null }} onPointerLeave={() => { nav !== 'block' ? setServices(false) : null }}><a href="#" className='menu-link no-click'>All Services <img src='../assets/icons/downArrow.png' alt='down caret' className='icon-20' /></a></div>
                                    <ul className="sub-ul" onPointerEnter={() => { nav !== 'block' ? setServices(true) : null }} onPointerLeave={() => { nav !== 'block' ? setServices(false) : null }} >
                                        <AnimatePresence >
                                            {services && (
                                                <motion.li animate='open' initial='closed' exit='closed' transition={{ ease: "easeInOut", duration: 0.2 }} variants={navParent} className="nav-li">
                                                    <div>
                                                        <h4 className='sub-menu-header'>INTERIOR CLEANING SERVICES</h4>
                                                        <motion.div variants={navChild} className='sub-menu-div' onClick={() => setNav('none')}>
                                                            <Link href="/services/interior-swift" className='menu-link smaller-line-height'><img src='../assets/icons/time-span.png' alt='fast clock' className='nav-icon' /> Swift Interior Detail</Link>
                                                        </motion.div>
                                                        <motion.div variants={navChildDiff} className='sub-menu-div' onClick={() => setNav('none')}>
                                                            <Link href="/services/interior" className='menu-link smaller-line-height'><img src='../assets/icons/steering1.png' alt='steering wheel' className='nav-icon' /> Full Interior</Link>
                                                        </motion.div>
                                                        <motion.div variants={navChild} className='sub-menu-div' onClick={() => setNav('none')}>
                                                            <Link href="/services/interior-spill" className='menu-link smaller-line-height'><img src='../assets/icons/steeringLock.png' alt='steering wheel with lock' className='nav-icon' /> Full Interior with Spill Guard</Link>
                                                        </motion.div>
                                                    </div>

                                                    <div>
                                                        <h4 className='sub-menu-header'>EXTERIOR SERVICES</h4>
                                                        <motion.div variants={navChildDiff} className='sub-menu-div' onClick={() => setNav('none')}>
                                                            <Link href="/services/exterior" className='menu-link smaller-line-height'><img src='../assets/icons/carWash.png' alt='car with bubbles' className='nav-icon' /> Exterior Wash</Link>
                                                        </motion.div>
                                                        <motion.div variants={navChild} className='sub-menu-div' onClick={() => setNav('none')}>
                                                            <Link href="/services/exterior-seal" className='menu-link smaller-line-height'><img src='../assets/icons/carPolish.png' alt='microfiber' className='nav-icon' /> Exterior Seal and Shine</Link>
                                                        </motion.div>
                                                        <motion.div variants={navChildDiff} className='sub-menu-div' onClick={() => setNav('none')}>
                                                            <Link href="/services/exterior-correct" className='menu-link smaller-line-height'><img src='../assets/icons/correctProtect.png' alt='polisher' className='nav-icon' /> Exterior Correct and Protect</Link>
                                                        </motion.div>
                                                    </div>
                                                </motion.li>
                                            )}
                                        </AnimatePresence>
                                    </ul>
                                </li>

                                <li style={{ position: 'relative' }}>
                                    <div className='menu-li' onPointerEnter={() => { nav !== 'block' ? setGallery(true) : null }} onPointerLeave={() => { nav !== 'block' ? setGallery(false) : null }}><a href="#" className='menu-link no-click'>Galleries <img src='../assets/icons/downArrow.png' alt='down caret' className='icon-20' /></a></div>
                                    <ul className="sub-ul" onPointerEnter={() => { nav !== 'block' ? setGallery(true) : null }} onPointerLeave={() => { nav !== 'block' ? setGallery(false) : null }}>
                                        <AnimatePresence>
                                            {gallery && (
                                                <motion.li animate='open' initial='closed' exit='closed' transition={{ ease: "easeInOut", duration: 0.3 }} variants={navParent} className="nav-li">
                                                    <h4 className="sub-menu-header">GALLERIES</h4>
                                                    <motion.div variants={navChild} className='sub-menu-div' onClick={() => setNav('none')}>
                                                        <Link href="/gallery/interior" className='menu-link smaller-line-height'><img src='../assets/icons/steering1.png' alt='car with doors open' className='nav-icon' /> Full Interior Gallery</Link>
                                                    </motion.div>
                                                    <motion.div variants={navChildDiff} className='sub-menu-div' onClick={() => setNav('none')}>
                                                        <Link href="/gallery/exterior" className='menu-link smaller-line-height'><img src='../assets/icons/carWash.png' alt='soap bubbles' className='nav-icon' /> Exterior Wash Gallery</Link>
                                                    </motion.div>
                                                    <motion.div variants={navChild} className='sub-menu-div' onClick={() => setNav('none')}>
                                                        <Link href="/gallery/seal" className='menu-link smaller-line-height'><img src='../assets/icons/carPolish.png' alt='car hood' className='nav-icon' /> Seal & Shine Gallery</Link>
                                                    </motion.div>
                                                    <motion.div variants={navChildDiff} className='sub-menu-div' onClick={() => setNav('none')}>
                                                        <Link href="/gallery/correct" className='menu-link smaller-line-height'><img src='../assets/icons/correctProtect.png' alt='gallery' className='nav-icon' /> Correct & Protect Gallery</Link>
                                                    </motion.div>
                                                </motion.li>
                                            )}
                                        </AnimatePresence>
                                    </ul>
                                </li>

                                <li className='menu-li' style={{ paddingBottom: smallScreen ? '4rem' : 0 }}>
                                    <Link href="/about" className="menu-link" onClick={() => setNav('none')}>About / FAQ</Link>
                                </li>

                                <li className="menu-li quote-li">
                                    <Link href="/contact" className="nav-quote-btn" onClick={() => setNav('none')}>CONTACT US</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header> */}

      <Nav />

      <Component {...pageProps} />

      <Footer />

      {/* <footer>
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
                        <Link href="/" className='footer-link'>Home</Link>
                        <Link href="about" className='footer-link'>About Us</Link>
                    </div>
                    <div className="footer-content-card" style={{ paddingBottom: '2rem' }}>
                        <h3>SERVICES</h3>
                        <Link href="/services/interior-swift" className='footer-link'>Swift Interior Detail - <span className='special-package'>NEW</span></Link>
                        <Link href="/services/interior" className='footer-link'>Full Interior Detail</Link>
                        <Link href="/services/interior-spill" className='footer-link'>Full Interior + Spill Guard</Link>
                        <hr style={{ marginTop: '1.5rem' }} />
                        <Link href="/services/exterior" className='footer-link'>Exterior Wash</Link>
                        <Link href="/services/exterior-seal" className='footer-link'>Exterior Seal & Shine</Link>
                        <Link href="/services/exterior-correct" className='footer-link'>Exterior Correct & Protect</Link>
                    </div>
                    <div className="footer-content-card footer-contact-card" id="contact">
                        <h3>CONTACT</h3>
                        <a href="tel:2532529758" className="contact-link footer-contact-link" rel="noopener"><img src='../assets/icons/phoneMessageColor.png' alt='Phone call / message' className='icon-24' /> (253) 252-9758</a>
                        <a href="mailto:brenden@dirtlessdetailing.com?subject = Schedule a Dirt-Less Detail" className="contact-link footer-contact-link" target="_blank" rel="noopener"><img src='../assets/icons/post.png' alt='email' className='icon-24' /> brenden@dirtlessdetailing.com</a>
                        <a href="https://www.google.com/maps/place/9305+205th+Ave+E,+Bonney+Lake,+WA+98391/@47.172835,-122.1589741,17z/data=!3m1!4b1!4m5!3m4!1s0x5490faeb8aa2e3d7:0xe53c2e7cb4aa7549!8m2!3d47.1728314!4d-122.1567854" className="contact-link footer-contact-link" target="_blank" rel="noopener"><img src='../assets/icons/placeMarker.png' alt='place marker' className='icon-24' /> 9305 205th Ave E, Bonney Lake, Wa 98391</a><br />
                        <div>
                            <a href="https://www.facebook.com/DirtLessDetailing/" className="socials" target="_blank" rel="noopener" aria-label="Facebook"><img src='../assets/icons/facebook.svg' alt='facebook' className='icon-48' /></a>
                            <a href="https://www.instagram.com/dirt_less_detailing/" className="socials" target="_blank" rel="noopener" aria-label="Instagram"><img src='../assets/icons/instagram.svg' alt='instagram' className='icon-48' /></a>
                            <a href="https://www.youtube.com/channel/UCsoqP5s4hwkQd_Sd-TVv-jg" className="socials" target="_blank" rel="noopener" aria-label="Youtube"><img src='../assets/icons/youtube.svg' alt='youtube' className='icon-48' /></a>
                            <a href="https://www.tiktok.com/@brendenflower" className="socials" target="_blank" rel="noopener" aria-label="TikTok"><img src='../assets/icons/tiktok.svg' alt='tiktok' className='icon-48' /></a>
                        </div>
                    </div>
                </footer>
                <CookieBanner /> */}
      {/* </PostHogProvider> */}
    </div>
  );
}
