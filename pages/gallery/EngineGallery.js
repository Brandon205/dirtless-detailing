import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { imagery } from '../../public/imgs/pageimgs/engine/index';

import cover from '../../public/imgs/engineGallery.webp';

export default function PaintCorrectionGallery() {
  return (
    <section className='gallery-content-container'>
      <Head>
        <title>Dirt-Less Detailing | Engine Gallery</title>
        <meta property="og:description" content="Engine Bay Photos • Engine bay images after our engine bay cleaning service!" />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/gallery/EngineGallery" />
      </Head>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="Vehicle after a Engine Bay Cleaning" layout="fill" objectFit='cover' priority />
      </div> 
      <header>
        <h1 className='servicepage-heading'>Engine Cleaning Gallery</h1>
        <p>Check out the gallery below to see what we can do to clean your engine bay. Take a look at our <a href="/services/Addons" className='gallery-link' >Engine Cleaning</a> section on our add-ons page for more info.</p>
      </header>

      <div className='gallery-container'>
        { imagery }
      </div>
      <h2 style={{color: 'white'}}>Check out the Engine Cleaning option on our <a href="/services/Addons" className='gallery-link' >Add-ons</a> page for more details!</h2>
    </section>
  )
}