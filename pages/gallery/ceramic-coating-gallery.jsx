import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import { imagery } from '../../public/imgs/pageimgs/ceramic/index';

import cover from '../../public/imgs/pageimgs/paintCorrection/IMG_20210526_055946.jpg';

export default function CoatingGallery() {
  return (
    <section className='gallery-content-container'>
      <Head>
        <Metatags
          title='Dirt-Less Detailing | Ceramic Coating Gallery'
          description='A gallery of photos that we have taken showing off some of the vehicles that we have coated and protected!'
          image={cover.src}
          canonical='/gallery/ceramic-coating-gallery'
        />
      </Head>
      <div className="cover">
        <Image src={cover} alt="Vehicle after a Ceramic Coating" layout="fill" objectFit='cover' priority />
      </div>
      <div className="servicepage-heading">
        <h1>Ceramic Coating Gallery</h1>
        <p>Check out the gallery below to see the results of a freshly applied IGL Ceramic Coating. Take a look at our <a href="/services/interior-ceramic-coating" className='aside-link' >Interior Coatings</a> page or our <a href="/detailing/ceramic" className='aside-link' >Ceramic Coating</a> page to learn more about these services.</p>

        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
        <p className='inline text-small'>
          Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
        </p>
      </div>

      <div className='gallery-container'>
        {imagery}
      </div>
      <h2 style={{ color: 'white' }}>Check out our <a href="/services/interior-ceramic-coating" className='aside-link' >Interior Coatings</a> page or our <a href="/detailing/ceramic" className='aside-link' >Ceramic Coating</a> page for more details!</h2>
    </section>
  )
}
