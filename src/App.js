import Home from './components/Home.js';
import ddLogo from './imgs/dd-logo.png';

import { FaBars, FaFacebook } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <img src={ddLogo} className="logo" />
          <FaBars className="menu-bars" />
        </nav>
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <div className="footer-content-card">
          <h3>COMPANY</h3>
          <p className="footer-text">Home</p>
          <p className="footer-text">About Us</p>
          <p className="footer-text">Contact</p>
        </div>
        <div className="footer-content-card">
          <h3>EXTERIOR</h3>
          <p className="footer-text">Premium Wash</p>
          <p className="footer-text">Wash and Wax</p>
          <p className="footer-text">Engine Cleaning</p>
          <p className="footer-text">Paint Overspray Removal</p>
          <p className="footer-text">Headlight Restoration</p>
        </div>
        <div className="footer-content-card">
          <h3>INTERIOR</h3>
          <p className="footer-text">Full Interior Cleaning</p>
          <p className="footer-text">Restorative Interior Cleaning</p>
          <p className="footer-text">Mini-Interior-Detail</p>
          <p className="footer-text">Smoke Odor Removal</p>
        </div>
        <div className="footer-content-card">
          <h3>CONTACT US</h3>
          <p className="footer-text">Approximate Location here</p>
          <p className="footer-text">(253) 252-9758</p>
        </div>
        <hr />
        <div className='socials-container'>
          <FaFacebook className="socials" />
        </div>

      </footer>
    </div>
  );
}

export default App;
