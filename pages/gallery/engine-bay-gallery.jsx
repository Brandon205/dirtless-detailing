import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Metatags from '../../utils/Metatags';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

// import { imagery } from '../../public/imgs/pageimgs/engine/index';

import cover from '../../public/imgs/engineGallery.webp';

export default function PaintCorrectionGallery() {

  const normalizeSrc = src => {
    return src.startsWith('/') ? src.slice(1) : src;
  };
  
  const cloudflareLoader = ({ src, width, quality }) => {
    const params = [`width=${width}`];
    if (quality) {
      params.push(`quality=${quality}`);
    }
    const paramsString = params.join(',');
    return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
  };
  

  return (
    <section className='gallery-content-container'>
      <Head>
        <title>Engine Bay Gallery | Dirt-Less Detailing</title>
        <Metatags
          title='Engine Bay Gallery | Dirt-Less Detailing'
          description='Check out photos from our engine bay cleaning service here. This is a great showcase of the final product our washing procedure creates.'
          image={cover.src}
          canonical='/gallery/engine-bay-gallery'
        />
      </Head>
      <div className="cover">
        <Image src={cover} alt="Vehicle after a Engine Bay Cleaning" layout="fill" objectFit='cover' priority />
      </div>
      <div className="servicepage-heading">
        <h1>Engine Cleaning Gallery</h1>
        <p>Check out the gallery below to see what we can do to clean your engine bay. Take a look at our <a href="/services/add-ons#engine" className='aside-link' >Engine Cleaning</a> section on our add-ons page for more info.</p>

        <a href="/Contact" className="quote-btn service-page-quote-btn">Get a Quote</a>
        <p className='inline text-small'>
          Call/Text: <a href="tel:2532529758" className="contact-link footer-contact-link" target="_blank" rel="noopener">(253) 252-9758</a>
        </p>
      </div>

      <div className='gallery-container'>
        <Zoom>
          <Image style={{borderRadius: 16}} alt={'engine example 1'} layout='responsive' objectFit='cover' width='100%' height='100%' src='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5dc233ba-d226-416f-d078-eb45d9185300/public' loading="lazy" />
        </Zoom>
        <Zoom>
          <Image style={{borderRadius: 16}} alt={'engine example 2'} layout='responsive' objectFit='cover' width='100%' height='100%' src='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/13765ea9-d7bf-48ec-cf73-af8442d50300/public' loading="lazy" />
        </Zoom>
        <Zoom>
          <Image style={{borderRadius: 16}} alt={'engine example 3'} layout='responsive' objectFit='cover' width='100%' height='100%' src='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6e0ddf6d-7ccb-4ee8-5ae1-bdc6574eae00/public' loading="lazy" />
        </Zoom>
        <Zoom>
          <Image style={{borderRadius: 16}} alt={'engine example 3'} layout='responsive' objectFit='cover' width='100%' height='100%' src='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6e0ddf6d-7ccb-4ee8-5ae1-bdc6574eae00/public' loading="lazy" />
        </Zoom>
        <Zoom>
          <Image style={{borderRadius: 16}} alt={'engine example 3'} layout='responsive' objectFit='cover' width='100%' height='100%' src='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/dd25a443-cd8d-4582-2167-74521126f400/public' loading="lazy" />
        </Zoom>
        <Zoom>
          <Image style={{borderRadius: 16}} alt={'engine example 3'} layout='responsive' objectFit='cover' width='100%' height='100%' src='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0a8bd4a3-a916-45a4-3c1d-c98e2920d000/public' loading="lazy" />
        </Zoom>
        <Zoom>
          <Image style={{borderRadius: 16}} alt={'engine example 3'} layout='responsive' objectFit='cover' width='100%' height='100%' src='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/823cf6b3-ce14-48b8-2f6b-91f503c47200/public' loading="lazy" />
        </Zoom>
        <Zoom>
          <Image style={{borderRadius: 16}} alt={'engine example 3'} layout='responsive' objectFit='cover' width='100%' height='100%' src='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/196dd0db-52b4-4ece-8e28-47723f548b00/public' loading="lazy" />
        </Zoom>
        <Zoom>
          <Image style={{borderRadius: 16}} alt={'engine example 3'} layout='responsive' objectFit='cover' width='100%' height='100%' src='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4181890d-4471-47ce-496a-51433a279800/public' loading="lazy" />
        </Zoom>
        <Zoom>
          <Image style={{borderRadius: 16}} alt={'engine example 3'} layout='responsive' objectFit='cover' width='100%' height='100%' src='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/e6200452-01a2-4cfe-cc52-b080bbcb8000/public' loading="lazy" />
        </Zoom>
        <Zoom>
          <Image style={{borderRadius: 16}} alt={'engine example 3'} layout='responsive' objectFit='cover' width='100%' height='100%' src='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ae28b372-25f1-498b-5a24-c05774ffb500/public' loading="lazy" />
        </Zoom>
        <Zoom>
          <Image style={{borderRadius: 16}} alt={'engine example 3'} layout='responsive' objectFit='cover' width='100%' height='100%' src='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/9137fff7-f82e-4335-cba8-cc069f79d000/public' loading="lazy" />
        </Zoom>
        <Zoom>
          <Image style={{borderRadius: 16}} alt={'engine example 3'} layout='responsive' objectFit='cover' width='100%' height='100%' src='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3b7a5129-11de-4c77-87f0-eadee410c400/public' loading="lazy" />
        </Zoom>
        <Zoom>
          <Image style={{borderRadius: 16}} alt={'engine example 3'} layout='responsive' objectFit='cover' width='100%' height='100%' src='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/96ead6c2-3f5b-45c6-81df-fdf2a92d9700/public' loading="lazy" />
        </Zoom>
        <Zoom>
          <Image style={{borderRadius: 16}} alt={'engine example 3'} layout='responsive' objectFit='cover' width='100%' height='100%' src='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/42b27e69-bb43-40d4-55c0-4be942f7a300/public' loading="lazy" />
        </Zoom>
        <Zoom>
          <Image style={{borderRadius: 16}} alt={'engine example 3'} layout='responsive' objectFit='cover' width='100%' height='100%' src='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/e4f03bb9-3976-4e00-e94d-89ee3a375f00/public' loading="lazy" />
        </Zoom>
        <Zoom>
          <Image style={{borderRadius: 16}} alt={'engine example 3'} layout='responsive' objectFit='cover' width='100%' height='100%' src='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/eafb50f4-8027-4c5b-8f25-8a3f4e68bd00/public' loading="lazy" />
        </Zoom>
        <Zoom>
          <Image style={{borderRadius: 16}} alt={'engine example 3'} layout='responsive' objectFit='cover' width='100%' height='100%' src='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/86230bee-cfe9-4ce1-ad5a-fcca26977200/public' loading="lazy" />
        </Zoom>
        <Zoom>
          <Image style={{borderRadius: 16}} alt={'engine example 3'} layout='responsive' objectFit='cover' width='100%' height='100%' src='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/f722a6d3-d4f9-4ffe-252e-88ddd6bcdb00/public' loading="lazy" />
        </Zoom>
        <Zoom>
          <Image style={{borderRadius: 16}} alt={'engine example 3'} layout='responsive' objectFit='cover' width='100%' height='100%' src='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/1a4e61cc-9b9d-4961-f1c8-fe32a6269c00/public' loading="lazy" />
        </Zoom>
        <Zoom>
          <Image style={{borderRadius: 16}} alt={'engine example 3'} layout='responsive' objectFit='cover' width='100%' height='100%' src='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6649be49-1ef8-475a-6610-695cc8619a00/public' loading="lazy" />
        </Zoom>
        <Zoom>
          <Image style={{borderRadius: 16}} alt={'engine example 3'} layout='responsive' objectFit='cover' width='100%' height='100%' src='https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/207eb43c-9ccb-42d1-356b-2d8f04136900/public' loading="lazy" />
        </Zoom>

      </div>
      <h2 style={{ color: 'white' }}>Check out the Engine Cleaning option on our <a href="/services/add-ons#engine" className='aside-link' >Add-ons</a> page for more details!</h2>
    </section>
  )
}