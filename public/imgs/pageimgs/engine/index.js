import React from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'

import chevyEngine from './3456x4608a.webp';
import engine2 from './3456x4608b.webp';
import engine3 from './3456x4608c.webp';
import engine4 from './3456x4608d.webp';
import toyotaBay from './3456x4608e.webp';
import mazdaBay from './3456x4608f.webp';

let images = [
    chevyEngine,
    engine2,
    engine3,
    engine4,
    toyotaBay,
    mazdaBay
]

let imagery = images.map((pic, id) => {
    return (
        <Zoom key={id}>
            <Image className="gallery-image" alt={'engine example ' + id} layout="intrinsic" src={images[id]} width={images[id].width} height={images[id].height} />
        </Zoom>
    )
})

export { imagery }