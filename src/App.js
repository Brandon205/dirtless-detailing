import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import ddLogo from './imgs/dd-logo.png';

import { FaBars, FaFacebook } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav>
            <img src={ddLogo} className="logo" />
            <FaBars className="menu-bars" />
          </nav>
        </header>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <footer>
          <div className="footer-content-card">
            <h3>COMPANY</h3>
            <p className="footer-text">Home</p>
            <p className="footer-text">About Us</p>
            <p className="footer-text">Contact</p>
          </div>
          <div className="footer-content-card">
            <h3>INTERIOR</h3>
            <p className="footer-text">Full Interior Cleaning with Extraction</p>
            <p className="footer-text">Full Interior Cleaning without Extraction</p>
            <p className="footer-text">Smoke / Biohazard / Mold Removal</p>
            <p className="footer-text">Headliners</p>
          </div>
          <div className="footer-content-card">
            <h3>EXTERIOR</h3>
            <p className="footer-text">Dirt-less Wash</p>
            <p className="footer-text">Premium Dirt-less Wash</p>
            <p className="footer-text">Engine Cleaning</p>
            <p className="footer-text">Single Stage Paint Correction</p>
            <p className="footer-text">Two Stage Paint Correction</p>
            <p className="footer-text">Glass Polishing</p>
            <p className="footer-text">Waterspot / Overspray Removal</p>
          </div>
          <div className="footer-content-card">
            <h3>CONTACT US</h3>
            <a href="https://www.google.com/maps/place/9305+205th+Ave+E,+Bonney+Lake,+WA+98391/@47.172835,-122.1589741,17z/data=!3m1!4b1!4m5!3m4!1s0x5490faeb8aa2e3d7:0xe53c2e7cb4aa7549!8m2!3d47.1728314!4d-122.1567854" className="contact-link">9305 205th Ave E Bonney Lake Washington</a><br />
            <a href="tel:2532529758" className="contact-link">(253) 252-9758</a>
          </div>
          <hr />
          <div className='socials-container'>
            <a href="https://www.facebook.com/DirtLessDetailing/" className="socials"><FaFacebook /></a>
          </div>

        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
