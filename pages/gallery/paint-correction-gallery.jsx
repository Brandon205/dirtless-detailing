import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import { imagery } from '../../public/imgs/pageimgs/paintCorrection/index';

import cover from '../../public/imgs/correctionGallery.webp';

export default function PaintCorrectionGallery() {
  return (
    <section className='gallery-content-container'>
      <Head>
        <title>Paint Correction Gallery | Dirt-Less Detailing</title>
        <Metatags
          title='Paint Correction Gallery | Dirt-Less Detailing'
          description='Paint Correction Photos • Here are some examples from both our Single and Two Stage Paint Correction services!'
          image={cover.src}
          canonical='/gallery/paint-correction-gallery'
        />
      </Head>
      <div className="cover">
        <Image src={cover} alt="Vehicle after a Two Stage Paint Correction" layout="fill" objectFit='cover' priority />
      </div>
      <div className="servicepage-heading">
        <h1>Paint Correction Gallery</h1>
        <p>Check out the gallery below to see what we can do to correct your paint problems. Take a look at our <a href='/detailing/correction' className='aside-link'>Paint Correction</a> page for more details on both of the correction services we offer.</p>

        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
        <p className='inline text-small'>
          Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
        </p>
      </div>

      <div className='gallery-container'>
        {imagery}
      </div>
      <h2 style={{ color: 'white' }}>Check out our <a href="/services/single-stage-correction" className='aside-link' >Single Stage Paint Correction</a> page or our <a href="/services/two-stage-correction" className='aside-link' >Two Stage Paint Correction</a> page for more details!</h2>
    </section>
  )
}
