import Home from './components/Home.js';
import ddLogo from './imgs/dd-logo.png';

import { FaBars } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          {/* <h1 className>Dirtless Detailing</h1> */}
          <img src={ddLogo} className="logo" />
          <FaBars className="menu-bars" />
          {/* <a href="#">Home</a> */}
        </nav>
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <h2>Footer Stuff</h2>
      </footer>
    </div>
  );
}

export default App;
