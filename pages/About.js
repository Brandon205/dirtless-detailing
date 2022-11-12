import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import cover from '../public/imgs/main-cover.webp';

export default function About() {
  return (
    <div className='App'>
      <Head>
        <title>Dirt-Less Detailing | About Us / FAQ</title>
        <meta name="description" content="Find out who we are, and get answers to some of our most frequently asked questions." />
        <link rel="canonical" href="https://dirtlessdetailing.com/About" />
      </Head>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="Our Worktruck" layout="fill" objectFit='cover' priority />
      </div>
      <div className="servicepage-header">
        <h1>About Us/FAQ</h1>
        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
      </div>

      <section className="about-container">
        <h2>Who are we?</h2>
        <p>Dirt-Less Detailing was started with two things in mind. Providing the absolute best results and customer service your money can buy.</p>

        <h3>FAQ</h3>
        <ul className='faq-ul'>
          <li className='faq-li'>What do you need from me when you get here?</li>
          <p className='faq-p'>All we will need is an electrical outlet, a water spigot, and preferably all/most personal items out of the car.</p>
        </ul>
        <ul className='faq-ul'>
          <li className='faq-li'>Do you offer ceramic coating?</li>
          <p className='faq-p'>Our ceramic coating services are being tested and finalized, and will be offered very soon!</p>
        </ul>
        <ul className='faq-ul'>
          <li className='faq-li'>How long will the detail take?</li>
          <p className='faq-p'>Every job will take a different amount of time, but once we know the condition of the car and the services requested we can give a good estimate as to how long it will take.</p>
        </ul>
        <ul className='faq-ul'>
          <li className='faq-li'>Can you come to my apartment or workplace?</li>
          <p className='faq-p'>It will depend on the amount of space and access if we can or not.</p>
        </ul>
        <ul className='faq-ul'>
          <li className='faq-li'>What forms of payment do you take?</li>
          <p className='faq-p'>Currently you can pay by card, cash, or Facebook pay.</p>
        </ul>
        <ul className='faq-ul'>
          <li className='faq-li'>Are you licensed and insured?</li>
          <p className='faq-p'>We are 100% licensed and insured!</p>
        </ul>
        <ul className='faq-ul'>
          <li className='faq-li'>What cities do you service?</li>
          <p className='faq-p'>With our mobile service we can go out to: Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Federal Way, Orting, South Prairie, Black Diamond, Milton, Edgewood, and Graham.</p>
        </ul>
        <ul className='faq-ul'>
          <li className='faq-li'>Do I have to be there the whole time you're working on my car?</li>
          <p className='faq-p'>Absolutely not, you are free to go do whatever you need to do while we are working.</p>
        </ul>
      </section>
    </div>
  )
}
