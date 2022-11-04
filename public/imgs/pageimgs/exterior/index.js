import React from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  let images = importAll(require.context('./', false, /\.(png|jpe?g|webp)$/));

images = Object.entries(images);

let imagery = images.map((pic, id) => {
    return (
        <Zoom key={id}>
            <div className='gallery-image-div'>
                <Image style={{borderRadius: 16}} alt={'dirt-less wash example ' + id} objectFit="cover" src={images[id][1]} loading="lazy" placeholder='blur' />
            </div>
        </Zoom>
    )
})

export { imagery };
