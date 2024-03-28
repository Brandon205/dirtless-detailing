"use client";
import React, { useState, useEffect } from "react";

import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const imagesArr = [
  "22039636-a6ef-4ea7-f9c0-12beaeb19900",
  "cfc9ecbb-fd60-40e5-988b-ecbe28ac3c00",
  "c36a4199-45b3-43d4-9c24-0493603b8f00",
  "de5ece74-66af-46cb-8460-7e0246257b00",
  "89cde8ad-b8a8-4d15-5a65-786ad9772d00",
  "a205f097-f145-41b5-8af5-98a046dca700",
];

const iconArr = {
  ozone: <img src="../assets/icons/ozone.png" className="addon-icon" alt="air filter in use" />,
  engine: <img src="../assets/icons/engineBay.png" className="addon-icon" alt="engine bay getting cleaned" />,
};

{
  /* <PricingComponent title='Ceramic Coating' prices={['949', '949', '1099', '1099', '1249', '1249']} addons='interior' /> */
}
export default function PricingComponent({
  prices = props.prices,
  addons = "",
  labels = [
    "2-Door Cars",
    "Quarter Ton Trucks",
    "4-Door Cars",
    "Mid-Size SUV's",
    "4-Door Trucks",
    "3-Row SUV's, Minivans",
  ],
}) {
  const [currVal, setCurrVal] = useState(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1500);

    const localValue = localStorage.getItem("dirtlessdetailing-size");
    if (localValue) {
      setCurrVal(localValue);
    } else {
      setCurrVal(2);
    }
  }, []);

  function updateValue(e) {
    localStorage.setItem("dirtlessdetailing-size", e.target.value); // 0-5 will need to

    setCurrVal(e.target.value);
  }

  return (
    <div className="pricing__container">
      <div
        className="pricing__img"
        style={{ backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/${imagesArr[currVal]}/cover)` }}
      ></div>
      <select onChange={(e) => updateValue(e)} className="vehicle__select" value={currVal}>
        <option value="0">2-Door Cars</option>
        <option value="1">Quarter Ton Trucks</option>
        <option value="2">4-Door Cars</option>
        <option value="3">Mid-Size SUV's</option>
        <option value="4">4 Door Trucks</option>
        <option value="5">3-Row SUV's & Minivans</option>
      </select>

      <div className="pricing__pricecard">
        <p>Your Price Estimate:</p>
        <div className="pricing__pricecard-container">
          <strong className="pricing__pricecard-pricebox">
            <span className="pricing__pricecard-price">
              $
              {animate ? (
                <AnimatedNumbers
                  includeComma
                  animateToNumber={prices[currVal]}
                  configs={[{ mass: 1, tension: 320, friction: 100 }]}
                ></AnimatedNumbers>
              ) : (
                prices[currVal]
              )}
            </span>
          </strong>
          <p>
            +Desired Add-ons <img src="../assets/icons/handDown.png" className="icon-20" alt="down arrow" />
          </p>
        </div>
      </div>

      <hr className="pricing__hr" />

      <h3 style={{ fontSize: "2em", margin: 0 }} className="text-center">
        Get even more out of your service with this Add-on.
      </h3>

      <div className="pricing__addons-container">
        <div className="pricing__addon">
          {addons === "interior" ? iconArr["ozone"] : iconArr["engine"]}
          <div className="addon-content">
            <h4>{addons === "interior" ? "Ozone Treatment" : "Engine Bay Cleaning"}</h4>
            <p>
              {addons === "interior"
                ? "Ozone treatment is the use of O3 (gas ozone) to remove bacteria, viruses, and odors from your vehicle."
                : "We will cover sensitive/electronic areas in the bay, clean and wash, then dress the engine bay to have it looking like new!"}
            </p>
          </div>
          <div className="addon-addbutton"></div>
          <div className="addon-price">
            <strong>$75</strong>
          </div>
        </div>
      </div>
      <a href="/contact" className="new-contact-btn">
        Contact Us
      </a>
    </div>
  );
}
