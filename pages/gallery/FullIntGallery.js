import React from 'react';
import Image from 'next/image';
import { imagery } from '../../public/imgs/pageimgs/interior/index';

import cover from '../../public/imgs/fullIntExCover.webp';

export default function FullIntGallery() {
  return (
    <section className='gallery-content-container'>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="dirt-less wash cover" layout="fill" objectFit='cover' priority />
      </div>
      <header>
        <h1 className='servicepage-heading'>Full Interior Cleaning Gallery</h1>
        <p>We have cleaned it all, and this is a gallery to show what we can do to even the worst of interiors. Take a look at our <a href="/full-int-ex" className='gallery-link' >Full Interior Cleaning</a> page to find out more</p>
      </header>

      <div className='gallery-container'>
        { imagery }
      </div>
    </section>
  )
}
