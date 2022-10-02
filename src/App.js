import React, { useState } from 'react';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import { ScrollToTop } from './components/helpers/ScrollToTop';
import ddLogo from './assets/imgs/PNG1.png';

import Home from './components/Home.js';
import About from './components/pages/About.js';
import FullIntEx from './components/pages/FullIntEx.js';
import Bio from './components/pages/Bio.js';
import Headliners from './components/pages/Headliners.js';
import DLWash from './components/pages/DLWash.js';
import PDLWash from './components/pages/PDLWash.js';
import Engine from './components/pages/Engine.js';
import SinglePC from './components/pages/SinglePC.js';
import TwoPC from './components/pages/TwoPC.js';
import Addons from './components/pages/Addons.js';
import FullIntGallery from './components/galleryPages/FullIntGallery';
import EngineGallery from './components/galleryPages/EngineGallery';
import DLWashGallery from './components/galleryPages/DLWashGallery';
import PaintCorrectionGallery from './components/galleryPages/PaintCorrectionGallery';

import { FaBars, FaFacebook, FaPhoneAlt, FaCarSide, FaPhotoVideo } from 'react-icons/fa';
import { GoLocation } from "react-icons/go";
import { GiSteeringWheel } from 'react-icons/gi';
import { RiCarWashingFill } from 'react-icons/ri';
import './App.css';

export default function App() {
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
    <HashRouter>
      <ScrollToTop />
      <div className="App">
        <header className="App-header">
          <nav id="nav">
            <Link to="/">
              <img src={ddLogo} className="logo" alt="logo" />
            </Link>
            <FaBars className="menu-bars" onClick={() => setNav(nav === 'block' ? 'none' : 'block')} />
            <div style={{display: nav}} className="menu-container">
              <ul className='main-ul'>

                <li className='menu-li'><Link to="/" className='menu-link' onClick={() => setNav('none')}>Home</Link></li>

                <div style={{position: 'relative'}}>
                  <li className='menu-li' onMouseEnter={() => changeNav('services')} onMouseLeave={() => changeNav('none')} onClick={() => changeNav('services')}>Services</li>
                  <ul className="sub-ul" onMouseEnter={() => changeNav('services')} onMouseLeave={() => changeNav('none')}  style={{display: services}}>
                    <div className="nav-div">
                      <h4 className='sub-menu-header'><GiSteeringWheel /> INTERIOR CLEANING</h4>
                      <li className='sub-menu-li' onClick={() => setNav('none')}><Link to='full-int-ex' className='menu-link'>Full Interior Cleaning</Link></li>
                      <li className='sub-menu-li' onClick={() => setNav('none')}><Link to='bio' className='menu-link'>Biohazard Cleaning</Link></li>
                      <li className='sub-menu-li' onClick={() => setNav('none')}><Link to='headliners' className='menu-link'>Headliners</Link></li>
                      <h4 className='sub-menu-header'><RiCarWashingFill /> EXTERIOR CLEANING</h4>
                      <li className='sub-menu-li' onClick={() => setNav('none')}><Link to='dl-wash' className='menu-link'>Dirt-Less Wash</Link></li>
                      <li className='sub-menu-li' onClick={() => setNav('none')}><Link to='premium-dl-wash' className='menu-link'>Premium Dirt-Less Wash</Link></li>
                      <li className='sub-menu-li' onClick={() => setNav('none')}><Link to='engine' className='menu-link'>Engine Bay</Link></li>
                      <h4 className='sub-menu-header'><FaCarSide /> EXTERIOR CORRECTION</h4>
                      <li className='sub-menu-li' onClick={() => setNav('none')}><Link to='single-paint-correction' className='menu-link'>Single Stage Paint Correction</Link></li>
                      <li className='sub-menu-li' onClick={() => setNav('none')}><Link to='two-paint-correction' className='menu-link'>Two Stage Paint Correction</Link></li>
                    </div>
                  </ul>
                </div>

                <div style={{position: 'relative'}}>
                  <li className='menu-li' onMouseEnter={() => changeNav('gallery')} onMouseLeave={() => changeNav('none')} onClick={() => changeNav('gallery')}>Gallery</li>
                  <ul className="sub-ul" onMouseEnter={() => changeNav('gallery')} onMouseLeave={() => changeNav('none')} style={{display: gallery}}>
                    <div className="nav-div">
                      <h4 className="sub-menu-header"><FaPhotoVideo /> GALLERIES</h4>
                      <li className='sub-menu-li' onClick={() => setNav('none')}><Link to='full-int-gallery' className='menu-link'>Interior Gallery</Link></li>
                      <li className='sub-menu-li' onClick={() => setNav('none')}><Link to='paint-correction-gallery' className='menu-link'>Paint Correction Gallery</Link></li>
                      <li className='sub-menu-li' onClick={() => setNav('none')}><Link to='dl-wash-gallery' className='menu-link'>Dirt-Less Wash Gallery</Link></li>
                      <li className='sub-menu-li' onClick={() => setNav('none')}><Link to='engine-gallery' className='menu-link'>Engine Cleaning Gallery</Link></li>
                    </div>
                  </ul>
                </div>

                <li className='menu-li'><Link to="addons" className='menu-link' onClick={() => setNav('none')}>Addons</Link></li>

                <li className='menu-li'><Link to='about' className='menu-link' onClick={() => setNav('none')}>About Us</Link></li>
              </ul>
            </div>
          </nav>
        </header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="full-int-ex" element={<FullIntEx />} />
          <Route path="bio" element={<Bio />} />
          <Route path="headliners" element={<Headliners />} />
          <Route path="dl-wash" element={<DLWash />} />
          <Route path="premium-dl-wash" element={<PDLWash />} />
          <Route path="engine" element={<Engine />} />
          <Route path="single-paint-correction" element={<SinglePC />} />
          <Route path="two-paint-correction" element={<TwoPC />} />
          <Route path="addons" element={<Addons />} />

          <Route path="full-int-gallery" element={<FullIntGallery />} />
          <Route path="paint-correction-gallery" element={<PaintCorrectionGallery />} />
          <Route path="dl-wash-gallery" element={<DLWashGallery />} />
          <Route path="engine-gallery" element={<EngineGallery />} />
        </Routes>
        <footer>
          <div className="footer-content-card">
            <h3>COMPANY</h3>
            <Link to="/" className="footer-link">
              <p className="footer-text">Home</p>
            </Link>
            <Link to="about" className="footer-link">
              <p className="footer-text">About Us</p>
            </Link>
          </div>
          <div className="footer-content-card">
            <h3>INTERIOR</h3>
            <Link to="full-int-ex" className="footer-link">
              <p className="footer-text">Full Interior Cleaning</p>
            </Link>
            <Link to="bio" className="footer-link">
              <p className="footer-text">Smoke / Biohazard / Mold Removal</p>
            </Link>
            <Link to="headliners" className="footer-link">
              <p className="footer-text">Headliners</p>
            </Link>
          </div>
          <div className="footer-content-card">
            <h3>EXTERIOR</h3>
            <Link to="dl-wash" className="footer-link">
              <p className="footer-text">Dirt-Less Wash</p>
            </Link>
            <Link to="premium-dl-wash" className="footer-link">
              <p className="footer-text">Premium Dirt-less Wash</p>
            </Link>
            <Link to="engine-bay" className="footer-link">
              <p className="footer-text">Engine Cleaning</p>
            </Link>
            <Link to="single-paint-correction" className="footer-link">
              <p className="footer-text">Single Stage Paint Correction</p>
            </Link>
            <Link to="two-paint-correction" className="footer-link">
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
    </HashRouter>
  );
}
