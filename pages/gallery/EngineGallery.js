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
      </Head>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="Vehicle after a Engine Bay Cleaning" layout="fill" objectFit='cover' priority />
      </div> 
      <header>
        <h1 className='servicepage-heading'>Engine Cleaning Gallery</h1>
        <p>This is a gallery to show what we can do to clean your engine bay. Take a look at our <a href="/services/Engine" className='gallery-link' >Engine Cleaning</a> page for more info.</p>
      </header>

      <div className='gallery-container'>
        { imagery }
      </div>
    </section>
  )
}