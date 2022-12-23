import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { imagery } from '../../public/imgs/pageimgs/engine/index';

import cover from '../../public/imgs/engineGallery.webp';

export default function PaintCorrectionGallery() {
  return (
    <section className='gallery-content-container'>
      <Head>
        <title>Engine Bay Gallery | Dirt-Less Detailing</title>
        <meta property="og:title" content="Engine Bay Gallery | Dirt-Less Detailing" />
        <meta name="description" content="Check out photos from our engine bay cleaning service here. This is a great showcase of the final product our washing procedure creates." />
        <meta property="og:description" content="Check out photos from our engine bay cleaning service here. This is a great showcase of the final product our washing procedure creates." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dirtlessdetailing.com/gallery/engine-bay-gallery" />
        <meta property="og:image" content={cover.src} />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/gallery/engine-bay-gallery" />
      </Head>
      <div className="cover">
        <Image src={cover} alt="Vehicle after a Engine Bay Cleaning" layout="fill" objectFit='cover' priority />
      </div>
      <div className="servicepage-heading">
        <h1>Engine Cleaning Gallery</h1>
        <p>Check out the gallery below to see what we can do to clean your engine bay. Take a look at our <a href="/services/add-ons#engine" className='aside-link' >Engine Cleaning</a> section on our add-ons page for more info.</p>

        <a href="/contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
        <p className='inline text-small'>
          Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
        </p>
      </div>

      <div className='gallery-container'>
        {imagery}
      </div>
      <h2 style={{ color: 'white' }}>Check out the Engine Cleaning option on our <a href="/services/add-ons#engine" className='aside-link' >Add-ons</a> page for more details!</h2>
    </section>
  )
}