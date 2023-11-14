import React from 'react';
import Head from 'next/head';
import { topBtnVariant } from '../utils/animationVariations';
import { motion } from 'framer-motion';
import Metatags from '../utils/Metatags';

export default function About() {
  return (
    <div className='App bg-contact'>
      <Head>
        <title>About Us / FAQ | Dirt-Less Detailing</title>
        <Metatags
          title='About Us / FAQ | Dirt-Less Detailing'
          description='Find out a little more about us here, and check out our FAQ for to get answers to our most frequently asked questions.'
          image='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a7b4af9c-97db-42dc-3b72-452a6221aa00/public'
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
              "name": "Do you detail boats?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, however, currently we are only doing boat interiors and washes and no polishing for now. Call or text us to get a quote!"
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
                "text":"With our mobile service we can go out to: Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Lake Tapps, Federal Way, Orting, South Prairie, Black Diamond, Milton, Edgewood, and Graham."
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
      <div className="cover" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a7b4af9c-97db-42dc-3b72-452a6221aa00/cover')`}}></div>
      <div className="servicepage-header">
        <div style={{alignItems: 'center'}}>
          <h1><span className='accent-orange bold text-shadow'>About Us & FAQ</span></h1>
          <h2 className='page-subheading' style={{textAlign: 'center'}}>Learn a little more about us at Dirt-Less Detailing and why we started the company.</h2>
          <div className='header-buttons'>
            <motion.a href="/Contact" className='top-quote-btn' variants={topBtnVariant} whileHover='hover' transition={{duration: 0.25}}><img src='../assets/icons/clipboard.png' alt='clipboard' className='btn-icon' /> Get a Free Quote</motion.a>
            <motion.a href="tel:2532529758" className='top-quote-btn btn-secondary' variants={topBtnVariant} whileHover='hover' transition={{duration: 0.25}}><img src='../assets/icons/phoneMessage.png' alt='call or message' className='btn-icon' /> (253) 252-9758</motion.a>
          </div>
        </div>
      </div>

      <section style={{lineHeight: '2', fontSize: '1.2em'}} className="about-container">
        <div className="about-explain">
          <div className='about-image-container'>
            <div className="about-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/public')`}}>
              <img style={{visibility: 'hidden'}} alt="moldy biohazard van before and after" src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/public" />
            </div>
            <div className="about-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/public')`}}>
              <img style={{visibility: 'hidden'}} alt="moldy biohazard van before and after" src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/public" />
            </div>
          </div>
          <div className="text-left">
            <h2 className="text-large">You shouldn't have to take time out of your busy day to clean your car.</h2>
            <p>After hundreds of completed details over the last 8 years we've seen it all, and perfected how we tackle every aspect of it. From stains to scratches along the whole vehicle we know what to do.</p>
            <p>Starting as a detailer at a autobody shop, I started Dirt-Less Detailing to bring what I learned from that to everybody near Bonney Lake.</p>
            <p>Since I started detailing I've put about as much time detailing in as I have doing research about the products and procedures I use, and I have seen the benefits from my research pay off in every car that we detail.</p>
            <p>Whether it's our Swift Interior Detail or a full paint correction and ceramic coating service I can assure you that the differences will be astonishing!</p>
          </div>
        </div>

        <div className="about-testimonial">
          <div className='testimonial'>
            <div className="customer-icon">K</div>
            <p className='about-review'>“I cannot believe the hair and grime they were able to get out of my car. Animals, ice cream and makeup spills. Incredible! 150,000 miles and my interior looks brand new. Ozone treatment has it smelling so refreshed. I can't say enough about how impressed I am. On top of that they finished exactly when they said they would and were great to work with. Will definitely use again and refer to friends and family.”</p>
            <p>Kristen H.</p>
          </div>
          <div className="stats-container">
            <div className="stat">
              <img src='../assets/icons/car.png' alt="5 stars" className='icon-36' />
              <strong>1,000+</strong>
              <p>Details Completed</p>
            </div>
            <div className="stat">
              <img src='../assets/icons/star.svg' width="36px" height="36px" alt="5 stars" className='icon-36' />
              <strong>20+</strong>
              <p>5 Star Reviews</p>
            </div>
            <div className="stat">
              <img src='../assets/icons/calendar.svg' alt="" className='icon-36' />
              <strong>8+</strong>
              <p>Years in Service</p>
            </div>
            <div className="stat">
              <img src='../assets/icons/clock.png' alt="time saved" className='icon-36' />
              <strong>Thousands</strong>
              <p>of hours saved</p>
            </div>
          </div>
        </div>

        <div className="about-large-image" style={{backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/public')`}}>
          <img style={{visibility: 'hidden'}} alt="moldy biohazard van before and after" src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/public" />
        </div>
        <h2 className="text-large">Dirt-Less Detailing</h2>
        <div className="text-left">
            <p>Dirt-Less Detailing is a premier auto detailing company founded last year by an experienced detailer with 8 years of industry knowledge. We specialize in restoring your vehicle's beauty, inside and out. Our mission is simple - to provide you with the best results and customer service that your money can buy. Let us make your car shine like new again!</p>
            <p>At Dirt-Less Detailing, we are passionate about providing top-notch auto detailing services to our valued clients. With our comprehensive range of services, including interior and exterior detailing, ceramic coatings, paint corrections, and engine bay cleanings, we strive to keep your vehicle looking and performing its best. Trust us to provide the care and attention to detail that your car deserves.</p>
            <p>Our main shop location is right in <a href="https://www.google.com/maps/place/9305+205th+Ave+E,+Bonney+Lake,+WA+98391/@47.172835,-122.1589741,17z/data=!3m1!4b1!4m5!3m4!1s0x5490faeb8aa2e3d7:0xe53c2e7cb4aa7549!8m2!3d47.1728314!4d-122.1567854" className='aside-link' target="_blank" rel='noopener'>Bonney Lake</a> off State Route 410.</p>
          </div>

        <h3>FAQ</h3>
        <ul className='faq-ul'>
          <li className='faq-li'>What do you need from me when you get here?</li>
          <li className='faq-p'>All we will need is an electrical outlet, a water spigot, and preferably all/most personal items out of the car.</li>

          <li className='faq-li'>How long will the detail take?</li>
          <li className='faq-p'>Every job will take a different amount of time, but once we know the condition of the car and the services requested we can give a good estimate as to how long it will take.</li>

          <li className='faq-li'>What forms of payment do you take?</li>
          <li className='faq-p'>Currently you can pay by check, cash, or card.</li>

          <li className='faq-li'>Can I drop my car off overnight?</li>
          <li className='faq-p'>Yes! We have a completely safe locked garage to store your vehicle, and we can usually even do the detail job overnight so that your car is ready by the morning!</li>

          <li className='faq-li'>Do you detail boats?</li>
          <li className='faq-p'>Yes, however, currently we are only doing boat interiors and washes and no polishing for now. Call or text us to get a quote!</li>

          <li className='faq-li'>Can you come to my apartment or workplace?</li>
          <li className='faq-p'>It will depend on the amount of space and water/electrical access if we can or not.</li>

          <li className='faq-li'>Do you offer gift cards or gift certificates?</li>
          <li className='faq-p'>Yes we do! Any of our services can be bought as a gift certificate. On the <a href="/Contact" className='aside-link'>Contact</a> page choose the "For Someone Else" option.</li>

          <li className='faq-li'>Are you licensed and insured?</li>
          <li className='faq-p'>We are 100% licensed and insured!</li>

          <li className='faq-li'>What cities do you service?</li>
          <li className='faq-p'>With our mobile service we can go out to: Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Lake Tapps, Federal Way, Orting, South Prairie, Black Diamond, Milton, Edgewood, and Graham.<br /> *Note: Mobile service is free only if the total cost of your service is more than $200, otherwise there is a $1/mile fee.</li>

          <li className='faq-li'>Do I have to be there the whole time you're working on my car?</li>
          <li className='faq-p'>Absolutely not! You are free to go do whatever you need to do while we are working.</li>

          <li className='faq-li'>How would you recommend I wash my car on my own?</li>
          <li className='faq-p'>We have a guide on the steps and products we recommend on our <a href="/products/ceramic-coating" className='aside-link'>Ceramic Coating Maintenance</a> page. All the products are perfectly fine to use whether your car is ceramic coated or not! If you are in need of a very quick wash we only recommend touch-less car washes as they won't damage your paint as much as a normal car wash.</li>
        </ul>
      </section>
    </div>
  )
}
