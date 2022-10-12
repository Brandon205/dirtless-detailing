import React from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import grayClose from './3456x4608a.webp';
import blackClose from './3456x4608b.webp';
import bmwHoodB from './3456x4608c.webp';
import bmwHoodA from './3456x4608d.webp';
import redRoofB from './3456x4608e.webp';
import redHood1 from './3456x4608f.webp';
import redSide1 from './3456x4608g.webp';
import redHood2 from './3456x4608h.webp';
import redSide2 from './3456x4608i.webp';
import redHood3 from './3456x4608j.webp';

let images = [
    grayClose,
    blackClose,
    bmwHoodA,
    bmwHoodB,
    redRoofB,
    redHood1,
    redSide1,
    redHood2,
    redSide2,
    redHood3
]

let imagery = images.map((pic, id) => {
    return (
        <Zoom key={id}>
            <Image className="gallery-image" alt={'paint correction example ' + id} layout="intrinsic" src={images[id]} width={images[id].width} height={images[id].height} loading="lazy" placeholder='blur' />
        </Zoom>
    )
})

export { imagery };
