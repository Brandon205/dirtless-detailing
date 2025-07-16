"use client";
import React, { useState, useEffect } from "react";
import prices from "../../utils/Prices";
import { CornerRightDown } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./Select";

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
      // case "interiorSwift":
      //   setAddonSection(<InteriorSwift />);
      //   break;
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
      <div className="flex flex-col justify-between items-center w-[90%] my-0 mx-auto max-w-[700px] lg:flex-row">
        <div className="flex flex-col items-start mb-4 w-1/2">
          <p className="text-2xl">Starting At:</p>
          {props.shortTitle == "exteriorcorrect" || props.shortTitle == "exteriorseal" ? (
            <p className="text-gray-400 text-sm text-left">
              *Additional correction is priced per hour (~$150/hour) depending on the condition of your paint and the results that you want!
            </p>
          ) : (
            ""
          )}
          {props.shortTitle == "interior" || props.shortTitle == "interior-spill" ? (
            <p className="text-gray-400 text-sm text-left">
              *This will be the final pricing for most interiors, however, in rare cases, we may need to charge more depending on the condition of the interior.
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="pricing__pricecard-container">
          <strong className="pricing__pricecard-pricebox">
            <span className="pricing__pricecard-price">
              $
              {animate ? (
                <>
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={prices[sizesArr[currVal]][props.serviceType][props.shortTitle]}
                    configs={[{ mass: 1, tension: 320, friction: 100 }]}
                  ></AnimatedNumbers>
                  {props.shortTitle == "exteriorcorrect" || props.shortTitle == "exteriorseal" ? "*" : ""}
                </>
              ) : (
                prices[sizesArr[currVal]][props.serviceType][props.shortTitle]
              )}
            </span>
          </strong>
          <p className="flex">
            +Desired Add-ons <CornerRightDown color="#ffffff" size={20} />
          </p>
        </div>
      </div>
      <hr className="pricing__hr" />
      <h3 style={{ fontSize: "2em", margin: 0 }} className="text-center">
        Get even more out of your service with one of our add-ons!
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
    <div className="flex justify-center w-[90vw] mb-4 flex-wrap mx-auto my-0 gap-4 lg:flex-row">
      <div className="bg-zinc-900 p-4 rounded-lg flex flex-col gap-4 items-center justify-between mb-4 max-w-[500px]">
        <div className="w-full flex flex-col items-center gap-2 justify-center mb-4">
          <h4 className="text-2xl font-semibold">Engine Bay Cleaning</h4>
          <p className="text-xl text-gray-300">
            We will cover sensitive/electronic areas in the bay, clean and wash, then dress the engine bay to have it looking like new!
          </p>
        </div>
        <div className="bg-primary w-1/2 py-2 rounded-lg text-xl font-medium">
          <p>$75</p>
        </div>
      </div>
      <div className="bg-zinc-900 p-4 rounded-lg flex flex-col gap-4 items-center justify-between mb-4 max-w-[500px]">
        <div className="w-full flex flex-col items-center gap-2 justify-center mb-4">
          <h4 className="text-2xl font-semibold">Debadging</h4>
          <p className="text-xl text-gray-300">
            Since we are polishing the rest of your vehicle this is the perfect time to get any badges/emblems removed off of your car so that we can polish
            under them too! <span className="text-gray-400">(Typically 30 minutes - 1 hour depending on the badges)</span>
          </p>
        </div>
        <div className="bg-primary w-1/2 py-2 rounded-lg text-xl font-medium">
          <p>$80/hour</p>
        </div>
      </div>
    </div>
  );
};

const Exterior = () => {
  return (
    <div className="flex justify-center w-[90vw] mb-4 flex-wrap mx-auto my-0 gap-4 lg:flex-row">
      <div className="bg-zinc-900 p-4 rounded-lg flex flex-col gap-4 items-center justify-between mb-4 max-w-[500px]">
        <div className="w-full flex flex-col items-center gap-2 justify-center mb-4">
          <h4 className="text-2xl font-semibold">Engine Bay Cleaning</h4>
          <p className="text-xl text-gray-300">
            We will cover sensitive/electronic areas in the bay, clean and wash, then dress the engine bay to have it looking like new!
          </p>
        </div>
        <div className="bg-primary w-1/2 py-2 rounded-lg text-xl font-medium">
          <p>$75</p>
        </div>
      </div>
    </div>
  );
};

// const InteriorSwift = () => {
//   return (
//     <div className="flex justify-center w-[90vw] mb-4 flex-wrap mx-auto my-0 gap-4 lg:flex-row">
//       <div className="bg-zinc-900 p-4 rounded-lg flex flex-col gap-4 items-center justify-between mb-4 max-w-[500px]">
//         <div className="w-full flex flex-col items-center gap-2 justify-center mb-4">
//           <h4 className="text-2xl font-semibold">Ozone Treatment</h4>
//           <p className="text-xl text-gray-300">
//             Ozone treatment is the use of O3 (ozone gas) to remove odors, bacteria, and viruses from everywhere in the vehicle. Recommended on ALL mold and
//             smoke odor jobs.
//           </p>
//         </div>
//         <div className="bg-primary w-1/2 py-2 rounded-lg text-xl font-medium">
//           <p>$75</p>
//         </div>
//       </div>
//     </div>
//   );
// };

const FullInterior = () => {
  return (
    <div className="flex justify-center w-[90vw] mb-4 flex-wrap mx-auto my-0 gap-4 lg:flex-row">
      <div className="bg-zinc-900 p-4 rounded-lg flex flex-col gap-4 items-center justify-between mb-4 max-w-[500px]">
        <div className="w-full flex flex-col items-center gap-2 justify-center mb-4">
          <h4 className="text-2xl font-semibold">Ozone Treatment</h4>
          <p className="text-xl text-gray-300">
            Ozone treatment is the use of O3 (ozone gas) to remove odors, bacteria, and viruses from everywhere in the vehicle. Recommended on ALL mold and
            smoke odor jobs.
          </p>
        </div>
        <div className="bg-primary w-1/2 py-2 rounded-lg text-xl font-medium">
          <p>$75</p>
        </div>
      </div>
    </div>
  );
};
