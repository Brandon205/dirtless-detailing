import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { imagery } from '../../public/imgs/pageimgs/exterior/index';

import cover from '../../public/imgs/pageimgs/exterior/IMG_20210429_202336.jpg';

export default function PaintCorrectionGallery() {

  return (
    <section className='gallery-content-container'>
      <Head>
        <title>Dirt-Less Detailing | Exterior Wash Gallery</title>
        <meta name="description" content="Check out some photos from both our Dirt-Less and Premium Dirt-Less washes here." />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/gallery/ExteriorWashGallery" />
      </Head>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="Vehicle after a Dirt-Less Wash" layout="fill" objectFit='cover' priority />
      </div>
      <header>
        <h1 className='servicepage-heading'>Exterior Wash Gallery</h1>
        <p>This is a showcase of our Dirt-Less Wash service. Take a look at our <a href="/services/DLWash" className='gallery-link'>Dirt-Less Wash</a> page for more info. If your
          vehicle is in need of a little extra love, you can check out our <a href="/services/PDLWash" className='gallery-link'>Premium Dirt-Less Wash</a>.
        </p>
      </header>
      <div className='gallery-container'>
        { imagery }
      </div>
      <h2 style={{color: 'white'}}>Check out our <a href="/services/DLWash" className='gallery-link'>Dirt-Less Wash</a> page for more details!</h2>
    </section>
  )
}