import React from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import trunkLining from './908x1220a.webp';
import whiteF150 from './1080x720a.webp';
import blackPorche from './1080x720b.webp';
import whiteSubaruImpreza from './1080x1448a.webp';
import imprezaWheels from './1080x1448b.webp';
import toyotaWheels from './1080x1920a.webp';
import fordWheels from './1080x1920b.webp';
import blackSportsCar from './3456x4608a.webp';
import beigeLexus from './3456x4608b.webp';
import blueJeep from './3456x4608c.webp';
import suvRoof from './3456x4608d.webp';
import chevyMiniTruck from './3456x4608e.webp';
import blackDenali from './3456x4608f.webp';
import beigeFord from './3456x4608g.webp';
import denaliFront from './3456x4608i.webp';
import f250 from './4608x3456a.webp';
import motorhome from './4608x3456b.webp';

let images = [
    trunkLining,
    whiteF150,
    blackPorche,
    whiteSubaruImpreza,
    imprezaWheels,
    toyotaWheels,
    fordWheels,
    blackSportsCar,
    beigeLexus,
    blueJeep,
    suvRoof,
    chevyMiniTruck,
    blackDenali,
    beigeFord,
    denaliFront,
    f250,
    motorhome
]

let imagery = images.map((pic, id) => {
    return (
        <Zoom key={id}>
            <Image className="gallery-image" alt={'dirt-less wash example ' + id} layout="intrinsic" src={images[id]} width={images[id].width} height={images[id].height} loading="lazy" placeholder='blur' />
        </Zoom>
    )
})

export { imagery };
