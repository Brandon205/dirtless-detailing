import React from 'react';
import Image from 'next/image';
import { imagery } from '../../public/imgs/pageimgs/exterior/index';

import cover from '../../public/imgs/dlwashA.webp';

export default function PaintCorrectionGallery() {

  return (
    <section className='content-container'>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="dirt-less wash cover" layout="fill" objectFit='cover' priority />
      </div>
      <header>
        <h1 className='servicepage-heading'>Dirt-Less Wash Gallery</h1>
        <p>This is a showcase of our Dirt-Less Wash service. Take a look at our <a href="/services/DLWash" className='gallery-link'>Dirt-Less Wash</a> page for more info, and if your
          vehicle is in need of a little extra love you can check out our <a href="/services/PDLWash" className='gallery-link'>Premium Dirt-Less Wash</a>.
        </p>
      </header>
      <div className='gallery-container'>
        { imagery }
      </div>
    </section>
  )
}