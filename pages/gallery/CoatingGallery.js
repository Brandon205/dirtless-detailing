import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { imagery } from '../../public/imgs/pageimgs/paintCorrection/index';

import cover from '../../public/imgs/pageimgs/paintCorrection/IMG_20210526_055946.jpg';

export default function CoatingGallery() {
  return (
    <section className='gallery-content-container'>
      <Head>
        <title>Dirt-Less Detailing | Ceramic Coating Gallery</title>
        <meta name="description" content="A gallery of photos that we have taken showing off some of the vehicles that we have coated and protected!" />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/gallery/CoatingGallery" />
      </Head>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="Vehicle after a Ceramic Coating" layout="fill" objectFit='cover' priority />
      </div>
      <header>
        <h1 className='servicepage-heading'>Ceramic Coating Gallery </h1>
        <p>Check out the gallery below to see what we can do to correct your paint problems. Take a look at our <a href="/services/IntCoatings" className='gallery-link' >Interior Coatings</a> page or our <a href="/services/ExtCoatings" className='gallery-link' >Ceramic Coating</a> page to learn more about these services.</p>
      </header>

      <div className='gallery-container'>
        { imagery }
      </div>
      <h2 style={{color: 'white'}}>Check out our <a href="/services/IntCoatings" className='gallery-link' >Interior Coatings</a> page or our <a href="/services/ExtCoatings" className='gallery-link' >Ceramic Coating</a> page for more details!</h2>
    </section>
  )
}
