import React, { useState } from 'react';
import { GiPoliceBadge, GiSteam, GiCarDoor, GiFallingRocks, GiSmokeBomb, GiCarSeat, GiRolledCloth } from 'react-icons/gi';
import { FaDog } from 'react-icons/fa';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { RiCarWashingFill } from 'react-icons/ri';
import { TbEngine } from 'react-icons/tb';
import { MdTrendingFlat } from 'react-icons/md';

const imagesArr = [
    '22039636-a6ef-4ea7-f9c0-12beaeb19900',
    'cfc9ecbb-fd60-40e5-988b-ecbe28ac3c00',
    '31265123-5fa7-4f81-af49-d224e86beb00',
    'de5ece74-66af-46cb-8460-7e0246257b00',
    '89cde8ad-b8a8-4d15-5a65-786ad9772d00',
    'a205f097-f145-41b5-8af5-98a046dca700',
]

const iconArr = {
    'extraction': <GiSteam className='addon-icon' />,
    'hair': <FaDog className='addon-icon' />,
    'headliners': <BsFillArrowUpCircleFill className='addon-icon' />,
    'fabric': <GiRolledCloth className='addon-icon' />,
    'leather': <GiCarSeat className='addon-icon' />,
    'ozone': <GiSmokeBomb className='addon-icon' />,
    'claybar': <GiFallingRocks className='addon-icon' />,
    'glass': <GiCarDoor className='addon-icon' />,
    'waterspot': <RiCarWashingFill className='addon-icon' />,
    'engine': <TbEngine className='addon-icon' />,
    'debadge': <GiPoliceBadge className='addon-icon' />
}

{/* <PricingComponent title='Ceramic Coating' prices={['949', '949', '1099', '1099', '1249', '1249']} addons={[{}]} labels={['label1', 'label2', 'needs to have 6 labels...']} /> */}
export default function PricingComponent({prices = props.prices, addons = [], labels = ['2-Door Cars', 'Quarter Ton Trucks', '4-Door Cars', "Mid-Size SUV's", '4-Door Trucks', "3-Row SUV's, Minivans"]}) {
    const [currVal, setCurrVal] = useState(0);

    console.log(iconArr['hair'])

    let content = '';
    if (addons.length > 0) {
        content = addons.map((item, id) => (
            <div className="pricing__addon" key={id}>
                {iconArr[item.icon]}
                <div className="addon-content">
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                </div>
                <div className="addon-addbutton"></div>
                <div className="addon-price">
                    <strong>{item.cost}</strong>
                </div>
            </div>
        ))
    }

    return (
        <div className='pricing__container'>
            <div className="pricing__img" style={{backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/${imagesArr[currVal]}/cover)`}}></div>
            <div className='pricing__range-container'>
                <input className='pricing__range' type="range" defaultValue='1' name="size" id="size" min='1' max='6' steps='1' list="values" onChange={(e) => setCurrVal(e.target.value - 1)} />
                <ul className='pricing__labels'>
                    <li className={`${currVal > 0 ? 'pricing__active' : ''} ${currVal === 0 ? 'pricing__selected' : ''}`}>{labels[0]}</li>
                    <li className={`${currVal > 1 ? 'pricing__active' : ''} ${currVal === 1 ? 'pricing__selected' : ''}`}>{labels[1]}</li>
                    <li className={`${currVal > 2 ? 'pricing__active' : ''} ${currVal === 2 ? 'pricing__selected' : ''}`}>{labels[2]}</li>
                    <li className={`${currVal > 3 ? 'pricing__active' : ''} ${currVal === 3 ? 'pricing__selected' : ''}`}>{labels[3]}</li>
                    <li className={`${currVal > 4 ? 'pricing__active' : ''} ${currVal === 4 ? 'pricing__selected' : ''}`}>{labels[4]}</li>
                    <li className={`${currVal > 5 ? 'pricing__active' : ''} ${currVal === 5 ? 'pricing__selected' : ''}`}>{labels[5]}</li>
                </ul>
            </div>

            <div className="pricing__pricecard">
                <p>Your Price Estimate:</p>
                <strong><span className='pricing__pricecard-price'>${prices[currVal]}.99</span></strong>
            </div>

            <hr className="pricing__hr" />

            {addons.length > 0 ?
                <div className="general-container new-heading-container">
                    <strong className="above-heading">Add-ons</strong>
                    <h3 className="new-heading">Get the most out of your cleaning with these popular add-ons.</h3>
                </div> : ''
            }

            <div className="pricing__addons-container">
                {content}
            </div>
        </div>
    )
}
