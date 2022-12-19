import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { imagery } from '../../public/imgs/pageimgs/exterior/index';

import cover from '../../public/imgs/pageimgs/exterior/IMG_20210429_202336.jpg';

export default function PaintCorrectionGallery() {

  return (
    <section className='gallery-content-container'>
      <Head>
        <title>Car Wash Gallery | Dirt-Less Detailing</title>
        <meta property="og:title" content="Car Wash Gallery | Dirt-Less Detailing" />
        <meta name="description" content="Take a look at our showcase of our exterior wash services to get a preview of what we're capable of doing to your car, no matter the current condition!" />
        <meta property="og:description" content="Take a look at our showcase of our exterior wash services to get a preview of what we're capable of doing to your car, no matter the current condition!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dirtlessdetailing.com/gallery/ExteriorWashGallery" />
        <meta property="og:image" content={cover.src} />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/gallery/ExteriorWashGallery" />
      </Head>
      <div className="cover">
        <Image src={cover} alt="Vehicle after a Dirt-Less Wash" layout="fill" objectFit='cover' priority />
      </div>
      <div className="servicepage-heading">
        <h1>Engine Cleaning Gallery</h1>
        <p>This is a showcase of our Dirt-Less Wash service. Take a look at our <a href="/detailing/car-washes" className='aside-link'>Car Washes</a> page for more info on the 2 services.</p>

        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
        <p className='inline text-small'>
          Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
        </p>
      </div>
      <div className='gallery-container'>
        {imagery}
      </div>
      <h2 style={{ color: 'white' }}>Check out our <a href="/services/DLWash" className='aside-link'>Dirt-Less Wash</a> page for more details!</h2>
    </section>
  )
}