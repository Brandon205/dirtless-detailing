import React from 'react';

import cover from '../../assets/imgs/worktruck.jpg';

export default function About() {
  return (
    <div className='App'>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}></div>
      <div className='about-header'>
        <h1>About Us/FAQ</h1>
        <h3>Learn more about us, and get answers to some of the most commonly asked questions.</h3>
      </div>

      <section className="about-container">
        <h2>Who are we?</h2>
        <p>Dirt-Less Detailing was started with two things in mind. Providing the absolute best results and customer service your money can buy.</p>

        <h2>FAQ</h2>
        <ul className='faq-ul'>
          <li className='faq-li'>What do you need from us when you get here?</li>
          <p className='faq-p'>All we need is an electrical outlet, and a water spigot and we are good to go.</p>
        </ul>
        <ul className='faq-ul'>
          <li className='faq-li'>How long will the detail take?</li>
          <p className='faq-p'>Every job will take a different amount of time, but there are time estimates on the page of the detail you're looking into.</p>
        </ul>
        <ul className='faq-ul'>
          <li className='faq-li'>Can you come to my apartment or workplace?</li>
          <p className='faq-p'>Highly dependent on the amount of space and permissions.</p>
        </ul>
        <ul className='faq-ul'>
          <li className='faq-li'>What forms of payment do you take?</li>
          <p className='faq-p'>You can pay by card or Facebook pay.</p>
        </ul>
        <ul className='faq-ul'>
          <li className='faq-li'>Are you licensed and insured?</li>
          <p className='faq-p'>We are 100% licensed and insured!</p>
        </ul>
        <ul className='faq-ul'>
          <li className='faq-li'>What cities do you service?</li>
          <p className='faq-p'>We service most cities in King and Pierce County currently!</p>
        </ul>
        <ul className='faq-ul'>
          <li className='faq-li'>Do I have to be there the whole time you're working on my car?</li>
          <p className='faq-p'>Absolutely not, you are free to go do whatever you need to do while we are working.</p>
        </ul>
      </section>
    </div>
  )
}
