import React, { useEffect } from 'react';
import Image from 'next/image';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

import cover from '../../public/imgs/dlWashGallery.webp';

export default function PaintCorrectionGallery() {
  let images = [];
  let imagery = (<>Loading...</>)
  useEffect(() => {  
    images = importAll(require.context('../../public/imgs/pageimgs/exterior', false, /\.(webp|jpe?g|svg)$/));
    images = Object.values(images)
    console.log(images)

    imagery = images.map((pic, id) => {
      console.log(typeof(pic))
      let width = pic.match(/[0-9]+/gm)
      let height = pic.match(/(x)(\d+)/)
  
      return <Item key={id} original={images[id]} thumbnail={images[id]} width={width[0]} height={height[2]}>
          {({ ref, open }) => (
          <Image className="gallery-image" alt={'dirtless wash example ' + id} ref={ref} onClick={open} src={images[id]} />
        )}
      </Item>
      })
  }, [])

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  // let imagery = images.map((pic, id) => {
  //   console.log(pic)
  //   let width = pic.match(/[0-9]+/gm)
  //   let height = pic.match(/(x)(\d+)/)

  //   return <Item key={id} original={images[id]} thumbnail={images[id]} width={width[0]} height={height[2]}>
  //       {({ ref, open }) => (
  //       <Image className="gallery-image" alt={'dirtless wash example ' + id} ref={ref} onClick={open} src={images[id]} />
  //     )}
  //   </Item>
  // })

  return (
    <section className='content-container'>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}></div>
      <header>
        <h1 className='servicepage-heading'>Dirt-Less Wash Gallery</h1>
        <p>This is a showcase of our Dirt-Less Wash service. Take a look at our <a href="/services/DLWash" className='gallery-link'>Dirt-Less Wash</a> page for more info, and if your
          vehicle is in need of a little extra love you can check out our <a href="/services/PDLWash" className='gallery-link'>Premium Dirt-Less Wash</a>.
        </p>
      </header>

      <Gallery>
        <div className="gallery-container">
          {imagery}
        </div>
      </Gallery>
    </section>
  )
}