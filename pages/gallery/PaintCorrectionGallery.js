import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { imagery } from '../../public/imgs/pageimgs/paintCorrection/index';

import cover from '../../public/imgs/correctionGallery.webp';

export default function PaintCorrectionGallery() {
  return (
    <section className='gallery-content-container'>
      <Head>
        <title>Dirt-Less Detailing | Paint Correction Gallery</title>
        <meta name="description" content="Paint Correction Photos • Here are some examples from both our Single and Two Stage Paint Correction services!" />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/gallery/PaintCorrectionGallery" />
      </Head>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="Vehicle after a Two Stage Paint Correction" layout="fill" objectFit='cover' priority />
      </div>
      <header>
        <h1 className='servicepage-heading'>Paint Correction Gallery</h1>
        <p>This is a gallery to show what we can do to correct your paint problems. Take a look at our <a href="/services/SinglePC" className='gallery-link' >Single Stage Paint Correction</a> page or our <a href="/services/TwoPC" className='gallery-link' >Two Stage Paint Correction</a> services.</p>
      </header>

      <div className='gallery-container'>
        { imagery }
      </div>
      <h2 style={{color: 'white'}}>Check out our <a href="/services/SinglePC" className='gallery-link' >Single Stage Paint Correction</a> page or our <a href="/services/TwoPC" className='gallery-link' >Two Stage Paint Correction</a> pages for more details!</h2>
    </section>
  )
}
