import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import cover from '../../public/imgs/pageimgs/interior/fullIntExCover.webp';

export default function IntCoatings() {
  return (
    <section className="service-content-container">
        <Head>
            <title>Dirt-Less Detailing | Interior Coatings</title>
            <meta name="description" content="Have us coat the interior of your vehicle with our products to keep them clean and protected from day to day use." />
            <link rel="canonical" href="https://www.dirtlessdetailing.com/services/IntCoatings" />
        </Head>
        <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
            <Image src={cover} alt="Coated and protected vehicle interior" layout="fill" objectFit='cover' placeholder='blur' priority />
        </div>
        <div className="servicepage-header">
            <h1>Interior Coatings</h1>
            <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
        </div>
    </section>
  )
}
