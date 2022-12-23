import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { imagery } from '../../public/imgs/pageimgs/interior/index';

import cover from '../../public/imgs/pageimgs/interior/IMG_20200702_155834.jpg';

export default function FullIntGallery() {
  return (
    <section className='gallery-content-container'>
      <Head>
        <title>Full Interior Gallery | Dirt-Less Detailing</title>
        <meta property="og:title" content="Full Interior Gallery | Dirt-Less Detailing" />
        <meta name="description" content="Our Full Interior Gallery shows off some of our hard work cleaning vehicle interiors. We've cleaned everything from spilled drinks to crumbs everywhere!" />
        <meta property="og:description" content="Our Full Interior Gallery shows off some of our hard work cleaning vehicle interiors. We've cleaned everything from spilled drinks to crumbs everywhere!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dirtlessdetailing.com/gallery/interior-detail-gallery" />
        <meta property="og:image" content={cover.src} />
        <link rel="canonical" href="https://www.dirtlessdetailing.com/gallery/interior-detail-gallery" />
      </Head>
      <div className="cover">
        <Image src={cover} alt="Vehicle after a Full Interior Cleaning" layout="fill" objectFit='cover' priority />
      </div>
      <div className="servicepage-heading">
        <h1>Full Interior Cleaning Gallery</h1>
        <p>We have cleaned it all, even the worst of interiors. Check out the Gallery below. Take a look at our <a href="/services/full-interior-detail" className='aside-link' >Full Interior Cleaning</a> page to find out more.</p>

        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
        <p className='inline text-small'>
          Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
        </p>
      </div>

      <div className='gallery-container'>
        {imagery}
      </div>
      <h2 style={{ color: 'white' }}>Check out our <a href="/services/full-interior-detail" className='aside-link' >Full Interior Cleaning</a> page for more details!</h2>
    </section>
  )
}
