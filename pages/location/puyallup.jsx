import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import cover from '../../public/imgs/pageimgs/exterior/IMG_20221007_130043.jpg';

export default function puyallup() {
    return (
        <div className='location-container'>
            <Head>
                <title>Dirt-Less Detailing | Vehicle Detailing in Puyallup</title>
                <meta property="og:description" content="Interior • Exterior • Ceramic Coating • Paint Correction. Check out our top auto detailing services for Puyallup Washington" />
                <link rel="canonical" href="https://www.dirtlessdetailing.com/location/puyallup" />
            </Head>
            <div className="cover location-cover">
                <Image src={cover} alt="biohazard cleaning cover" layout="fill" objectFit='cover' placeholder='blur' priority />
            </div>
            <div className="servicepage-header location-header">
                <h1>Mobile Detailing in Puyallup Washington</h1>
                <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
            </div>
            <main className="location-main">
                <h1>Hello and stuff</h1>
            </main>
        </div> 
    )
}
