import React from 'react';

import cover from '../../assets/imgs/worktruck.jpg';

export default function About() {
  return (
    <div className='App'>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}></div>
      <div className='about-header'>
        <h1>About Us/FAQ</h1>
        <h3>Here you can get some of your questions answered and learn a little about us.</h3>
      </div>

      <main className="about-container">
        <h2>Small Intro</h2>
        <p>Here at Dirt-less Detailing we strive to provide our best service in order to get your vehicle looking the way that you want it. ETC...</p>

        <h2>FAQ stuff in here</h2>
        <ul>
          <li>How are your prices determined?</li>
          <p>We have made our simple pricing scheme as easy to navigate as possible to avoid confusion.</p>
        </ul>
      </main>
    </div>
  )
}
