import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import cover from '../public/imgs/main-cover.webp';

export default function About() {
  return (
    <div className='App bg-contact'>
      <Head>
        <title>About Us / FAQ | Dirt-Less Detailing</title>
        <meta property="og:title" content="About Us / FAQ | Dirt-Less Detailing" />
        <meta name="description" content="Find out a little more about us here, and check out our FAQ for to get answers to our most frequently asked questions." />
        <meta property="og:description" content="Find out a little more about us here, and check out our FAQ for to get answers to our most frequently asked questions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dirtlessdetailing.com/About" />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/About" />
      </Head>
      <div className="cover">
        <Image src={cover} alt="Chevrolet truck on trailer after Two Stage Paint Correction" layout="fill" objectFit='cover' priority />
      </div>
      <div className="servicepage-header">
        <h1>About Us/FAQ</h1>
        <h2 className='page-subheading'>Learn a little about us, and see our most commonly asked questions here</h2>
      </div>

      <section className="about-container">
        <h2>Who are we?</h2>
        <p>Dirt-Less Detailing was started with two things in mind. Providing the absolute best results and customer service your money can buy.</p>

        <h3>FAQ</h3>
        <ul className='faq-ul'>
          <li className='faq-li'>What do you need from me when you get here?</li>
          <li className='faq-p'>All we will need is an electrical outlet, a water spigot, and preferably all/most personal items out of the car.</li>

          <li className='faq-li'>How long will the detail take?</li>
          <li className='faq-p'>Every job will take a different amount of time, but once we know the condition of the car and the services requested we can give a good estimate as to how long it will take.</li>

          <li className='faq-li'>Can you come to my apartment or workplace?</li>
          <li className='faq-p'>It will depend on the amount of space and access if we can or not.</li>

          <li className='faq-li'>What forms of payment do you take?</li>
          <li className='faq-p'>Currently you can pay by card, cash, or Facebook pay.</li>

          <li className='faq-li'>Are you licensed and insured?</li>
          <li className='faq-p'>We are 100% licensed and insured!</li>

          <li className='faq-li'>What cities do you service?</li>
          <li className='faq-p'>With our mobile service we can go out to: Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Federal Way, Orting, South Prairie, Black Diamond, Milton, Edgewood, and Graham.</li>

          <li className='faq-li'>Do I have to be there the whole time you're working on my car?</li>
          <li className='faq-p'>Absolutely not. You are free to go do whatever you need to do while we are working.</li>

          <li className='faq-li'>I have questions about taking care of my car after getting a ceramic coating?</li>
          <li className='faq-p'>Check out our <a href="/services/ExtCoatings#faq" className="aside-link">Ceramic Coating</a> FAQ section to get your questions answered!</li>
        </ul>
      </section>
    </div>
  )
}
