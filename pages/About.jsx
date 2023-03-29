import React from 'react';
import Head from 'next/head';
import Metatags from '../utils/Metatags';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';

export default function About() {
  return (
    <div className='App bg-contact'>
      <Head>
        <title>About Us / FAQ | Dirt-Less Detailing</title>
        <Metatags
          title='About Us / FAQ | Dirt-Less Detailing'
          description='Find out a little more about us here, and check out our FAQ for to get answers to our most frequently asked questions.'
          image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/public'
          canonical='/About'
        />
        <script type="application/ld+json" key="product-jsonld" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org/",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What do you need from me when you get here?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All we will need is an electrical outlet, a water spigot, and preferably all/most personal items out of the car."
              }
            },
            {
              "@type": "Question",
              "name": "How long will the detail take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Every job will take a different amount of time, but once we know the condition of the car and the services requested we can give a good estimate as to how long it will take."
              }
            },
            {
              "@type": "Question",
              "name": "Can you come to my apartment or workplace?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It will depend on the amount of space and access if we can or not."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer gift cards or gift certificates?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Currently you can pay by card, cash, or Facebook pay."
              }
            }, 
            {
              "@type": "Question",
              "name": "What forms of payment do you take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "<p>Yes we do! Any of our services can be bought as a gift certificate. On the <a href=https://www.dirtlessdetailing.com/Contact>Contact</a> page choose the For Someone Else option.</p>"
              }
            }, 
            {
              "@type": "Question",
              "name": "Are you licensed and insured?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":"We are 100% licensed and insured!"
              }
            },
            {
              "@type": "Question",
              "name": "What cities do you service?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":"With our mobile service we can go out to: Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Federal Way, Orting, South Prairie, Black Diamond, Milton, Edgewood, and Graham."
              }
            },
            {
              "@type": "Question",
              "name": "Do I have to be there the whole time you're working on my car?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":"Absolutely not! You are free to go do whatever you need to do while we are working."
              }
            }
          ]
          }`,
        }} />
      </Head>
      <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/cover')`}}></div>
      <div className="servicepage-header">
        <h1>About Us/FAQ</h1>
        <h2 className='page-subheading'>Learn a little about us, and see our most commonly asked questions here</h2>
        <div className='header-buttons'>
          <a href="/Contact" className='quote-btn'>Get a Free Quote</a>
          <a href="tel:2532529758" className='quote-btn top-quote-btn'><MdOutlinePermPhoneMsg className='call-icon' /> (253) 252-9758</a>
        </div>
      </div>

      <section style={{marginTop: 10 + 'vh', lineHeight: '2', fontSize: '1.2em'}} className="about-container">
        <div className="service-explain">
          <div className="text-left">
            <h2 className="text-large">Who Are We?</h2>
            <p>Dirt-Less Detailing is a premier auto detailing company founded last year by an experienced detailer with 7 years of industry knowledge. We specialize in restoring your vehicle's beauty, inside and out. Our mission is simple - to provide you with the best results and customer service that your money can buy. Let us make your car shine like new again!</p>
            <p>At Dirt-Less Detailing, we are passionate about providing top-notch auto detailing services to our valued clients. With our comprehensive range of services, including interior and exterior detailing, ceramic coatings, paint corrections, and engine bay washes, we strive to keep your vehicle looking and performing its best. Trust us to provide the care and attention to detail that your car deserves.</p>
            <p>Our main shop location is right in <a href="https://www.google.com/maps/place/9305+205th+Ave+E,+Bonney+Lake,+WA+98391/@47.172835,-122.1589741,17z/data=!3m1!4b1!4m5!3m4!1s0x5490faeb8aa2e3d7:0xe53c2e7cb4aa7549!8m2!3d47.1728314!4d-122.1567854" className='aside-link' target="_blank" rel='noopener'>Bonney Lake</a> off of 410.</p>
          </div>
          <div className="service-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/977438a8-129b-496b-9845-e55e3198e900/public')`}}></div>
        </div>

        <h3>FAQ</h3>
        <ul className='faq-ul'>
          <li className='faq-li'>What do you need from me when you get here?</li>
          <li className='faq-p'>All we will need is an electrical outlet, a water spigot, and preferably all/most personal items out of the car.</li>

          <li className='faq-li'>How long will the detail take?</li>
          <li className='faq-p'>Every job will take a different amount of time, but once we know the condition of the car and the services requested we can give a good estimate as to how long it will take.</li>

          <li className='faq-li'>Can you come to my apartment or workplace?</li>
          <li className='faq-p'>It will depend on the amount of space and access if we can or not.</li>

          <li className='faq-li'>Do you offer gift cards or gift certificates?</li>
          <li className='faq-p'>Yes we do! Any of our services can be bought as a gift certificate. On the <a href="/Contact" className='aside-link'>Contact</a> page choose the "For Someone Else" option.</li>

          <li className='faq-li'>What forms of payment do you take?</li>
          <li className='faq-p'>Currently you can pay by card, cash, or Facebook pay.</li>

          <li className='faq-li'>Are you licensed and insured?</li>
          <li className='faq-p'>We are 100% licensed and insured!</li>

          <li className='faq-li'>What cities do you service?</li>
          <li className='faq-p'>With our mobile service we can go out to: Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Federal Way, Orting, South Prairie, Black Diamond, Milton, Edgewood, and Graham.</li>

          <li className='faq-li'>Do I have to be there the whole time you're working on my car?</li>
          <li className='faq-p'>Absolutely not! You are free to go do whatever you need to do while we are working.</li>

          <li className='faq-li'>I have questions about taking care of my car after getting a ceramic coating?</li>
          <li className='faq-p'>Check out our <a href="/services/exterior-ceramic-coating#faq" className="aside-link">Ceramic Coating</a> FAQ section to get your questions answered!</li>
        </ul>
      </section>
    </div>
  )
}
