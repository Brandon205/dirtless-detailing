import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import { FcCameraAddon } from 'react-icons/fc';

import cover from '../../public/imgs/pageimgs/interior/fullIntExCover.webp';

export default function ExtCoatings() {
  return (
    <section className="service-content-container">
        <Head>
            <title>Dirt-Less Detailing | Exterior Ceramic Coatings</title>
            <meta name="description" content="Ensure that your vehicle is protected through us with our exterior Ceramic Coating services!" />
            <link rel="canonical" href="https://www.dirtlessdetailing.com/services/ExtCoatings" />
        </Head>
        <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
            <Image src={cover} alt="Vehicle Exterior after paint correction and ceramic coating" layout="fill" objectFit='cover' placeholder='blur' priority />
        </div>
        <div className="servicepage-header">
            <h1>Exterior Ceramic Coatings</h1>
            <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
        </div>

        <div className="coating-container">
            <div className="coating-left">
                <h2>Protect Package:</h2>
                <p className='package-desc'>The Protect package will cover and protect the most essential parts of your car with a 5 year ceramic coating.</p>
                <div className='package-container'>
                    <div className='package-details'>
                        <FcCameraAddon />
                        <h4>Paint Covered</h4>
                        <p>All of the paint on the exterior will be coated with IGL's Kenzo Graphene 10H coating.</p>
                    </div>
                    <div className='package-details'>
                        <FcCameraAddon />
                        <h4>Lifetime Warranty*</h4>
                        <p>After your first coating if you follow through with our yearly maintenance your Ceramic coating has a lifetime guarantee through us!</p>
                    </div>
                    <div className='package-details'>
                        <FcCameraAddon />
                        <h4>Windsheild and Lights</h4>
                        <p>The windshield and lights are the 2 next most essential things after paint to coat when giving your vehicle a ceramic coating.</p>
                    </div>
                </div>

                <h2>Protect+ Package:</h2>
                <p className='package-desc'>The Protect+ package will cover and protect your whole vehicle with a 5 year Ceramic Coating.</p>
                <div className='package-container'>
                    <div className='package-details'>
                        <FcCameraAddon />
                        <h4>Paint Covered</h4>
                        <p>All of the paint on the exterior will be coated with IGL's Kenzo Graphene 10H coating.</p>
                    </div>
                    <div className='package-details'>
                        <FcCameraAddon />
                        <h4>Lifetime Warranty*</h4>
                        <p>Our Protect+ package also comes with a lifetime warranty if you follow through with our yearly maintenance!</p>
                    </div>
                    <div className='package-details'>
                        <FcCameraAddon />
                        <h4>Coat Trim, Glass, Lights, and Wheel Faces</h4>
                        <p>We will cover nearly the entire exterior of your vehicle, ensuring that it is completely protected all around.</p>
                    </div>
                </div>
            </div>
            <div className="coating-right">

            </div>
        </div>
    </section>
  )
}
