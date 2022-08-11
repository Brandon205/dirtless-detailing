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

let images = importAll(require.context('../../assets/imgs/pageimgs/exterior', false, /\.(webp|jpe?g|svg)$/));
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
      <h1 className='servicepage-heading'>Engine Cleaning Gallery</h1>

      <p>This is a showcase of our Dirt-Less Wash service. Take a look at our <Link to="/dl-wash">Dirt-Less Wash</Link> page for more info, and if your
        vehicle is in need of a little extra love you can check out our <Link to="/premium-dl-wash">Premium Dirt-Less Wash</Link>.
      </p>

      <Gallery>
        <div className="gallery-container">
          {imagery}
        </div>
      </Gallery>
    </section>
  )
}