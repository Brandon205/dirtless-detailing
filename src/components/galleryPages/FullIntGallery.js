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

let images = importAll(require.context('../../assets/imgs/pageimgs/interior', false, /\.(webp|jpe?g|svg)$/));
images = Object.values(images)

export default function FullIntGallery() {

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
      <h1 className='servicepage-heading'>Full Interior Cleaning Gallery</h1>

      <p>We have cleaned it all, and this is a gallery to show what we can do to even the worst of interiors. Take a look at our <Link to="/full-int-ex" >Full Interior Cleaning</Link> page to find out more</p>

      <Gallery>
        <div className="gallery-container">
          {imagery}
        </div>
      </Gallery>
    </section>
  )
}
