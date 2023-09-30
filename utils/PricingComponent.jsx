import React, { useState, useEffect } from 'react';

import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const imagesArr = [
    '22039636-a6ef-4ea7-f9c0-12beaeb19900',
    'cfc9ecbb-fd60-40e5-988b-ecbe28ac3c00',
    'c36a4199-45b3-43d4-9c24-0493603b8f00',
    'de5ece74-66af-46cb-8460-7e0246257b00',
    '89cde8ad-b8a8-4d15-5a65-786ad9772d00',
    'a205f097-f145-41b5-8af5-98a046dca700',
]

const iconArr = {
    'extraction': <img src='../assets/icons/steam.png' className='addon-icon' alt="steam" />,
    'hair': <img src='../assets/icons/dog.png' className='addon-icon' alt="dog walking" />,
    'headliners': <img src='../assets/icons/up.png' className='addon-icon' alt="up arrow" />,
    'intcoating': <img src='../assets/icons/steeringWheel.png' className='addon-icon' alt="engine" />,
    'ozone': <img src='../assets/icons/ozone.png' className='addon-icon' alt="air filter in use" />,
    'claybar': <img src='../assets/icons/dirt.png' className='addon-icon' alt="dirt particles" />,
    'glass': <img src='../assets/icons/windscreen.png' className='addon-icon' alt="front windshield" />,
    'waterspot': <img src='../assets/icons/water.png' className='addon-icon' alt="steam" />,
    'engine': <img src='../assets/icons/engine.png' className='addon-icon' alt="engine" />,
    'debadge': <img src='../assets/icons/bmw.png' className='addon-icon' alt="bmw badge" />
}

{/* <PricingComponent title='Ceramic Coating' prices={['949', '949', '1099', '1099', '1249', '1249']} addons={[{}]} labels={['label1', 'label2', 'needs to have 6 labels...']} /> */}
export default function PricingComponent({prices = props.prices, addons = [], labels = ['2-Door Cars', 'Quarter Ton Trucks', '4-Door Cars', "Mid-Size SUV's", '4-Door Trucks', "3-Row SUV's, Minivans"]}) {
    const [currVal, setCurrVal] = useState(2);
    const [animate, setAnimate] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setAnimate(true)
        }, 1500)
    }, [])

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
                    <strong>${item.cost[currVal]}</strong>
                </div>
            </div>
        ))
    }

    return (
        <div className='pricing__container'>
            <div className="pricing__img" style={{backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/${imagesArr[currVal]}/cover)`}}></div>
            <div className='pricing__range-container'>
                <input className='pricing__range' type="range" value={currVal + 1} name="size" id="size" min='1' max='6' steps='1' list="values" onChange={(e) => setCurrVal(e.target.value - 1)} />
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
                <div className='pricing__pricecard-container'>
                    <strong className='pricing__pricecard-pricebox'>
                        <span className='pricing__pricecard-price'>
                            ${animate ? 
                                <AnimatedNumbers includeComma animateToNumber={prices[currVal]} configs={[
                                    { mass: 1, tension: 320, friction: 100 },
                                ]}></AnimatedNumbers> : 
                                prices[currVal]
                            }
                        </span>
                    </strong>
                    <p>+Desired Add-ons <img src='../assets/icons/handDown.png' className='icon-20' alt="down arrow" /></p>
                </div>
            </div>

            <hr className="pricing__hr" />

            <div className="general-container new-heading-container">
                <strong className="above-heading">Add-ons</strong>
                <h3 className="new-heading">Get even more out of your service with these popular add-ons.</h3>
            </div>

            <div className="pricing__addons-container">
                {content}
            </div>
            <a href="/Contact" className="new-contact-btn">Contact Us</a>
        </div>
    )
}
