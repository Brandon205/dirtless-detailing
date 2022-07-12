import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import ddLogo from './imgs/dd-logo.png';

import Home from './components/Home.js';
import About from './components/About.js';
import FullIntEx from './components/FullIntEx.js';
import FullInt from './components/FullInt.js';
import Bio from './components/Bio.js';
import Headliners from './components/Headliners.js';
import DLWash from './components/DLWash.js';
import PDLWash from './components/PDLWash.js';
import Engine from './components/Engine.js';
import SinglePC from './components/SinglePC.js';
import TwoPC from './components/TwoPC.js';
import Glass from './components/Glass.js';
import Waterspot from './components/Waterspot.js';

import { FaBars, FaFacebook } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">
              <img src={ddLogo} className="logo" />
            </Link>
            <FaBars className="menu-bars" />
          </nav>
        </header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="full-int-ex" element={<FullIntEx />} />
          <Route exact path="full-int" element={<FullInt />} />
          <Route path="bio" element={<Bio />} />
          <Route path="headliners" element={<Headliners />} />
          <Route path="dl-wash" element={<DLWash />} />
          <Route path="premium-dl-wash" element={<PDLWash />} />
          <Route path="engine-bay" element={<Engine />} />
          <Route path="single-paint-correction" element={<SinglePC />} />
          <Route path="two-paint-correction" element={<TwoPC />} />
          <Route path="glass" element={<Glass />} />
          <Route path="waterspot" element={<Waterspot />} />
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
              <p className="footer-text">Full Interior Cleaning with Extraction</p>
            </Link>
            <Link to="full-int" className="footer-link">
              <p className="footer-text">Full Interior Cleaning without Extraction</p>
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
              <p className="footer-text">Dirt-less Wash</p>
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
            <Link to="glass" className="footer-link">
              <p className="footer-text">Glass Polishing</p>
            </Link>
            <Link to="waterspot" className="footer-link">
              <p className="footer-text">Waterspot / Overspray Removal</p>
            </Link>
          </div>
          <div className="footer-content-card" id="contact">
            <h3>CONTACT US</h3>
            <a href="https://www.google.com/maps/place/9305+205th+Ave+E,+Bonney+Lake,+WA+98391/@47.172835,-122.1589741,17z/data=!3m1!4b1!4m5!3m4!1s0x5490faeb8aa2e3d7:0xe53c2e7cb4aa7549!8m2!3d47.1728314!4d-122.1567854" className="contact-link" target="_blank">9305 205th Ave E Bonney Lake Washington</a><br />
            <a href="tel:2532529758" className="contact-link">(253) 252-9758</a>
          </div>
          <hr />
          <div className='socials-container'>
            <a href="https://www.facebook.com/DirtLessDetailing/" className="socials" target="_blank"><FaFacebook /></a>
          </div>

        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
