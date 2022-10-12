import React from 'react';
import Image from 'next/image';
import { imagery } from '../../public/imgs/pageimgs/paintCorrection/index';

import cover from '../../public/imgs/correctionGallery.webp';

export default function PaintCorrectionGallery() {
  return (
    <section className='content-container'>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="paint correction cover" layout="fill" objectFit='cover' priority />
      </div>
      <header>
        <h1 className='servicepage-heading'>Paint Correction Gallery</h1>
        <p>This is a gallery to show what we can do to correct your paint problems. Take a look at our <a href="/single-paint-correction" className='gallery-link' >Single Stage Paint Correction</a> page or our <a href="/two-paint-correction" className='gallery-link' >Two Stage Paint Correction</a> services.</p>
      </header>

      <div className='gallery-container'>
        { imagery }
      </div>
    </section>
  )
}
