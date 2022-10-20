import React from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import chevyEngine from './3456x4608a.webp';
import engine2 from './3456x4608b.webp';
import engine3 from './3456x4608c.webp';
import engine4 from './3456x4608d.webp';
import toyotaBay from './3456x4608e.webp';
import mazdaBay from './3456x4608f.webp';
import vanBay from './4032x3024a.webp';

let images = [
    chevyEngine,
    engine2,
    engine3,
    engine4,
    toyotaBay,
    mazdaBay,
    vanBay
]

let imagery = images.map((pic, id) => {
    return (
        // <Zoom key={id}>
        //     <div className="gallery-image-div">
        //         <Image alt={'engine example ' + id} layout="fill" objectFit='contain' src={images[id]} loading="lazy" placeholder='blur' />
        //     </div>
        // </Zoom>
        <Zoom key={id}>
            <div className='gallery-image-div'>
                <Image style={{borderRadius: 16}} alt={'engine example ' + id} src={images[id]} />
            </div>
        </Zoom>
    )
})

export { imagery };
