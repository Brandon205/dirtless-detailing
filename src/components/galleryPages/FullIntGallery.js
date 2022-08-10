import React from 'react';
import { Link } from 'react-router-dom';

import cover from '../../assets/imgs/fullIntExCover.jpg';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

let images = importAll(require.context('../../assets/imgs/pageimgs/interior', false, /\.(webp|jpe?g|svg)$/));
images = Object.values(images)
console.log(images)

export default function FullIntGallery() {

  let imagery = images.map((pic, id) => {
    return <img key={id} src={pic} className="gallery-image" />
  })

  return (
    <section className='content-container'>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}></div>
      <h1 className='servicepage-heading'>Full Interior Cleaning Gallery</h1>

      <p>We have cleaned it all, and this is a gallery to show what we can do to even the worst of interiors. Take a look at our <Link to="/full-int-ex" >Full Interior Cleaning</Link> page to find out more</p>

      <div className="gallery-container">
        {imagery}
      </div>
    </section>
  )
}
