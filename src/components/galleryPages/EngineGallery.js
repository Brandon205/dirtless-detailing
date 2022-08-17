import React from 'react';
import { Link } from 'react-router-dom';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

import cover from '../../assets/imgs/fullIntExCover.jpg';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

let images = importAll(require.context('../../assets/imgs/pageimgs/engine', false, /\.(webp|jpe?g|svg)$/));
images = Object.values(images)

export default function PaintCorrectionGallery() {

  let imagery = images.map((pic, id) => {
    return <Item key={id} original={images[id]} thumbnail={images[id]} className="gallery-item">
        {({ ref, open }) => (
        <img className="gallery-image" ref={ref} onClick={open} src={images[id]} />
      )}
    </Item>
  })

  return (
    <section className='content-container'>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}></div>
      <header>
        <h1 className='servicepage-heading'>Engine Cleaning Gallery</h1>
        <p>This is a gallery to show what we can do to clean your engine bay. Take a look at our <Link to="/engine" className='gallery-link' >Engine Cleaning</Link> page for more info.</p>
      </header>

      <Gallery>
        <div className="gallery-container">
          {imagery}
        </div>
      </Gallery>
    </section>
  )
}