import React from 'react';
import Link from 'next/link';

import cover from '../../public/imgs/engineGallery.webp';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

let images = importAll(require.context('../../assets/imgs/pageimgs/engine', false, /\.(webp|jpe?g|svg)$/));
images = Object.values(images)

export default function PaintCorrectionGallery() {

  let imagery = images.map((pic, id) => {
    let width = pic.match(/[0-9]+/gm)
    let height = pic.match(/(x)(\d+)/)

    return <Item key={id} original={images[id]} thumbnail={images[id]} width={width[0]} height={height[2]}>
        {({ ref, open }) => (
        <img className="gallery-image" alt={'engine bay example ' + id} ref={ref} onClick={open} src={images[id]} />
      )}
    </Item>
  })

  return (
    <section className='content-container'>
      <div className="cover" style={{backgroundImage: 'url(' + cover + ')' }}>
        <Image src={cover} alt="engine cleaning cover" layout="fill" objectFit='cover' />
      </div> 
      <header>
        <h1 className='servicepage-heading'>Engine Cleaning Gallery</h1>
        <p>This is a gallery to show what we can do to clean your engine bay. Take a look at our <Link href="/engine" className='gallery-link' >Engine Cleaning</Link> page for more info.</p>
      </header>

      <Gallery>
        <div className="gallery-container">
          {imagery}
        </div>
      </Gallery>
    </section>
  )
}