import React from 'react';
// import { Item } from 'react-photoswipe-gallery';
import Image from 'next/image';

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

console.log(images)

let imagery = images.map((pic, id) => {
    let dimensions = pic.src.match(/[0-9]+/gm)
    console.log(dimensions)

    return <Item key={id} original={images.src} thumbnail={images.src}>
        {({ ref, open }) => (
            <Image className="gallery-image" alt={'dirt-less wash example ' + id} layout="fixed" ref={ref} onClick={open} src={images[id]} width={dimensions[0]} height={dimensions[1]} />
        )}
        </Item>
    })

export { images, imagery }