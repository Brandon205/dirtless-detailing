import React from 'react';
import Link from 'next/link';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

import cover from '../../assets/imgs/dlWashGallery.webp';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

let images = importAll(require.context('../../assets/imgs/pageimgs/exterior', false, /\.(webp|jpe?g|svg)$/));
images = Object.values(images)

export default function PaintCorrectionGallery() {

  let imagery = images.map((pic, id) => {
    let width = pic.match(/[0-9]+/gm)
    let height = pic.match(/(x)(\d+)/)

    return <Item key={id} original={images[id]} thumbnail={images[id]} width={width[0]} height={height[2]}>
        {({ ref, open }) => (
        <img className="gallery-image" alt={'dirtless wash example ' + id} ref={ref} onClick={open} src={images[id]} />
      )}
    </Item>
  })

  return (
    <section className='content-container'>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}></div>
      <header>
        <h1 className='servicepage-heading'>Dirt-Less Wash Gallery</h1>
        <p>This is a showcase of our Dirt-Less Wash service. Take a look at our <Link to="/dl-wash" className='gallery-link'>Dirt-Less Wash</Link> page for more info, and if your
          vehicle is in need of a little extra love you can check out our <Link to="/premium-dl-wash" className='gallery-link'>Premium Dirt-Less Wash</Link>.
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