import React from 'react';
import Image from 'next/image';
import { imagery } from '../../public/imgs/pageimgs/engine/index';

import cover from '../../public/imgs/engineGallery.webp';

export default function PaintCorrectionGallery() {
  return (
    <section className='content-container'>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="engine cleaning cover" layout="fill" objectFit='cover' />
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