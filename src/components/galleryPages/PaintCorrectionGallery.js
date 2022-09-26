import React from 'react';
import { Link } from 'react-router-dom';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

import cover from '../../assets/imgs/correctionGallery.jpg';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

let images = importAll(require.context('../../assets/imgs/pageimgs/paintCorrection', false, /\.(webp|jpe?g|svg)$/));
images = Object.values(images)

export default function PaintCorrectionGallery() {

  let imagery = images.map((pic, id) => {
    let width = pic.match(/[0-9]+/gm)
    let height = pic.match(/(x)(\d+)/)

    return <Item key={id} original={images[id]} thumbnail={images[id]} width={width[0]} height={height[2]}>
        {({ ref, open }) => (
        <img className="gallery-image" ref={ref} onClick={open} src={images[id]} />
      )}
    </Item>
  })

  return (
    <section className='content-container'>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}></div>
      <header>
        <h1 className='servicepage-heading'>Paint Correction Gallery</h1>
        <p>This is a gallery to show what we can do to correct your paint problems. Take a look at our <Link to="/single-paint-correction" className='gallery-link' >Single Stage Paint Correction</Link> page or our <Link to="/two-paint-correction" className='gallery-link' >Two Stage Paint Correction</Link> services.</p>
      </header>

      <Gallery>
        <div className="gallery-container">
          {imagery}
        </div>
      </Gallery>
    </section>
  )
}
