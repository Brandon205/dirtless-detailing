"use client";
import React, { useState, useEffect } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../app/components/Select";

import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false
});

const imagesArr = [
  "22039636-a6ef-4ea7-f9c0-12beaeb19900",
  "cfc9ecbb-fd60-40e5-988b-ecbe28ac3c00",
  "c36a4199-45b3-43d4-9c24-0493603b8f00",
  "de5ece74-66af-46cb-8460-7e0246257b00",
  "89cde8ad-b8a8-4d15-5a65-786ad9772d00",
  "a205f097-f145-41b5-8af5-98a046dca700"
];

{
  /* <PricingComponent title='Ceramic Coating' prices={['949', '949', '1099', '1099', '1249', '1249']} addons='interior' /> */
}
export default function PricingComponent({ prices = props.prices, addons = "" }) {
  const [currVal, setCurrVal] = useState(undefined);
  const [animate, setAnimate] = useState(false);
  const [addonSection, setAddonSection] = useState("undefined");

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1500);

    switch (addons) {
      case "interiorSwift":
        setAddonSection(<InteriorSwift />);
        break;
      case "fullInterior":
        setAddonSection(<FullInterior />);
        break;
      case "correction":
        setAddonSection(<Correction />);
        break;
      case "exterior":
        setAddonSection(<Exterior />);
        break;
      default:
        <Exterior />;
        break;
    }

    const localValue = localStorage.getItem("dirtlessdetailing-size");
    if (localValue) {
      setCurrVal(localValue);
    } else {
      setCurrVal(2);
    }
  }, []);

  function updateValue(e) {
    localStorage.setItem("dirtlessdetailing-size", e); // 0-5 will need to

    setCurrVal(e);
  }

  return (
    <div className="pricing__container">
      <div className="pricing__img" style={{ backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/${imagesArr[currVal]}/cover)` }}></div>
      <Select value={currVal} onValueChange={(e) => updateValue(e)}>
        <SelectTrigger className="text-2xl w-[250px]">
          <SelectValue placeholder="Select a vehicle size." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="text-2xl text-white">
            <SelectLabel className="text-2xl">Sizes</SelectLabel>
            <SelectItem className="text-2xl" value="0">
              2-Door Cars
            </SelectItem>
            <SelectItem className="text-2xl" value="1">
              Quarter Ton Trucks
            </SelectItem>
            <SelectItem className="text-2xl" value="2">
              4-Door Sedans
            </SelectItem>
            <SelectItem className="text-2xl" value="3">
              Mid-Size SUV's
            </SelectItem>
            <SelectItem className="text-2xl" value="4">
              4-Door Trucks
            </SelectItem>
            <SelectItem className="text-2xl" value="5">
              3-Row SUV's & Minivans
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="pricing__pricecard">
        <p>Your Price Estimate:</p>
        <div className="pricing__pricecard-container">
          <strong className="pricing__pricecard-pricebox">
            <span className="pricing__pricecard-price">
              $
              {animate ? (
                <AnimatedNumbers includeComma animateToNumber={prices[currVal]} configs={[{ mass: 1, tension: 320, friction: 100 }]}></AnimatedNumbers>
              ) : (
                prices[currVal]
              )}
            </span>
          </strong>
          <p className="flex">
            +Desired Add-ons <img src="../assets/icons/handDown.png" className="icon-20" alt="down arrow" />
          </p>
        </div>
      </div>

      <hr className="pricing__hr" />

      <h3 style={{ fontSize: "2em", margin: 0 }} className="text-center">
        Get even more out of your service with an Add-on!
      </h3>

      {addonSection}

      <a href="/contact" className="new-contact-btn">
        Contact Us
      </a>
    </div>
  );
}

const Correction = () => {
  return (
    <div className="pricing__addons-container">
      <div className="pricing__addon">
        <img src="../assets/icons/engineBay.png" className="addon-icon" alt="engine bay getting cleaned" />
        <div className="addon-content">
          <h4>Engine Bay Cleaning</h4>
          <p>We will cover sensitive/electronic areas in the bay, clean and wash, then dress the engine bay to have it looking like new!</p>
        </div>
        <div className="addon-addbutton"></div>
        <div className="addon-price">
          <strong>$75</strong>
        </div>
      </div>
      <div className="pricing__addon">
        <img src="../assets/icons/ferrari-logo.png" className="addon-icon" alt="Ferrari logo" />
        <div className="addon-content">
          <h4>Debadging</h4>
          <p>This is the perfect time to get any badges/emblems removed off of your car so that we can polish under them!</p>
        </div>
        <div className="addon-addbutton"></div>
        <div className="addon-price">
          <strong>$80/hour</strong>
        </div>
      </div>
    </div>
  );
};

const Exterior = () => {
  return (
    <div className="pricing__addons-container">
      <div className="pricing__addon">
        <img src="../assets/icons/engineBay.png" className="addon-icon" alt="engine bay getting cleaned" />
        <div className="addon-content">
          <h4>Engine Bay Cleaning</h4>
          <p>We will cover sensitive/electronic areas in the bay, clean and wash, then dress the engine bay to have it looking like new!</p>
        </div>
        <div className="addon-addbutton"></div>
        <div className="addon-price">
          <strong>$75</strong>
        </div>
      </div>
    </div>
  );
};

const InteriorSwift = () => {
  return (
    <div className="pricing__addons-container">
      <div className="pricing__addon">
        <img src="../assets/icons/ozone.png" className="addon-icon" alt="Air filter in use" />
        <div className="addon-content">
          <h4>Ozone Treatment</h4>
          <p>
            Ozone treatment is the use of O3 (ozone gas) to remove odors, bacteria, and viruses from everywhere in the vehicle. Recommended on ALL mold and
            smoke odor jobs.
          </p>
        </div>
        <div className="addon-addbutton"></div>
        <div className="addon-price">
          <strong>$75</strong>
        </div>
      </div>
    </div>
  );
};

const FullInterior = () => {
  return (
    <div className="pricing__addons-container">
      <div className="pricing__addon">
        <img src="../assets/icons/ozone.png" className="addon-icon" alt="Air filter in use" />
        <div className="addon-content">
          <h4>Ozone Treatment</h4>
          <p>
            Ozone treatment is the use of O3 (ozone gas) to remove odors, bacteria, and viruses from everywhere in the vehicle. Recommended on ALL mold and
            smoke odor jobs.
          </p>
        </div>
        <div className="addon-addbutton"></div>
        <div className="addon-price">
          <strong>$75</strong>
        </div>
      </div>
    </div>
  );
};
