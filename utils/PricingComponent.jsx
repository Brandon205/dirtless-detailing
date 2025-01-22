"use client";
import React, { useState, useEffect } from "react";
import prices from "./Prices";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../app/components/Select";

import dynamic from "next/dynamic";
import Image from "next/image";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false
});

const imagesArr = [
  "/assets/images/sealshine/seal-shine.jpg",
  "/assets/images/exterior/worktruckgarage.jpeg",
  "/assets/images/exterior/subaruWashed.jpeg",
  "/assets/images/exterior/jeepRenegade.jpg",
  "/assets/images/exterior/archCoTruck.jpg",
  "/assets/images/sealshine/vanSeal.jpg"
];

const sizesArr = {
  // prices[sizesArr[currVal]][serviceType][shortTitle]
  0: "2 Door",
  1: "Quarter Ton",
  2: "4 Door",
  3: "Mid Size",
  4: "Trucks",
  5: "3 Row"
};

{
  /* <PricingComponent title='Ceramic Coating' shortTitle="interiorswift" addons='interior' /> */
}
export default function PricingComponent(props) {
  const [currVal, setCurrVal] = useState(2);
  const [animate, setAnimate] = useState(false);
  const [addonSection, setAddonSection] = useState("undefined");

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1500);

    switch (props.addons) {
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
      setCurrVal("2");
    }
  }, []);

  function updateValue(e) {
    localStorage.setItem("dirtlessdetailing-size", e); // 0-5

    setCurrVal(e);
  }

  return (
    <div className="pricing__container">
      <div className="pricing__img">
        <Image
          src={imagesArr[currVal]}
          alt="Dirt-Less Detailing sizing"
          fill
          sizes="(max-width: 1350px) 600px, (min-width: 1351px) 800px"
          className="object-cover rounded-3xl"
        />
      </div>
      <Select value={currVal} onValueChange={(e) => updateValue(e)} defaultValue="2">
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
                <AnimatedNumbers
                  includeComma
                  animateToNumber={prices[sizesArr[currVal]][props.serviceType][props.shortTitle]}
                  configs={[{ mass: 1, tension: 320, friction: 100 }]}
                ></AnimatedNumbers>
              ) : (
                prices[sizesArr[currVal]][props.serviceType][props.shortTitle]
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
