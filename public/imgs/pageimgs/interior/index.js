import React from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import redToyota from './1080x720a.webp';
import rearCupholders from './1080x1221a.webp';
import driversSeat1 from './1080x1448a.webp';
import trunk1 from './1080x1448b.webp';
import centerCupholders from './1080x1448c.webp';
import centerConsole from './1080x1920a.webp';
import frontInt from './1080x1920b.webp';
import rearSeats1 from './1080x1920c.webp';
import rearSeats2 from './1080x1920d.webp';
import driversSeat2 from './1080x1920e.webp';
import floorMat1 from './1080x1920f.webp';
import floorMat2 from './1080x1920g.webp';
import passengerSeat1 from './3456x4608a.webp';
import passengerSeat2 from './3456x4608a.webp';
import driversSeat3 from './4608x3456b.webp';

let images = [
    redToyota,
    rearCupholders,
    driversSeat1,
    trunk1,
    centerCupholders,
    centerConsole,
    frontInt,
    rearSeats1,
    rearSeats2,
    driversSeat2,
    floorMat1,
    floorMat2,
    passengerSeat1,
    passengerSeat2,
    driversSeat3
]

let imagery = images.map((pic, id) => {
    return (
        <Zoom key={id}>
            <Image className="gallery-image" alt={'full interior example ' + id} layout="intrinsic" src={images[id]} width={images[id].width} height={images[id].height} />
        </Zoom>
    )
})

export { imagery };
