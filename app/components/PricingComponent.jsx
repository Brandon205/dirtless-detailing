"use client";
import { useState, useEffect } from "react";
import prices from "../../utils/Prices";
import salePrices from "../../utils/SalePrices";
import { CornerRightDown, ArrowRight } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./Select";

import dynamic from "next/dynamic";
import Image from "next/image";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false
});

const imagesArr = [
  "/assets/images/sealshine/seal-shine.jpg",
  "/assets/images/exterior/subaruWashed.jpeg",
  "/assets/images/exterior/jeepRenegade.jpg",
  "/assets/images/exterior/archCoTruck.jpg",
  "/assets/images/sealshine/vanSeal.jpg"
];

const sizesArr = {
  // prices[sizesArr[currVal]][serviceType][shortTitle]
  0: "Any 2-Door Vehicle",
  1: "4 Door",
  2: "Mid Size",
  3: "Trucks",
  4: "3 Row"
};

export default function PricingComponent(props) {
  const [currVal, setCurrVal] = useState(2);
  const [animate, setAnimate] = useState(false);
  const [addonSection, setAddonSection] = useState("undefined");

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1500);

    switch (props.addons) {
      case "fullInterior":
        setAddonSection(<FullInterior />);
        break;
      case "correction":
        setAddonSection(<Correction />);
        break;
      case "exterior":
        setAddonSection(<Exterior />);
        break;
      case "washCoat":
        setAddonSection(<WashCoat />);
        break;
      case "intRefresh":
        setAddonSection(<InteriorRefresh />);
        break;
      case "intRestoration":
        setAddonSection(<InteriorRestore />);
        break;
      default:
        <Exterior />;
        break;
    }

    const localValue = localStorage.getItem("dirtlessdetailing-size");
    if (localValue) {
      if (localValue > 4) {
        localStorage.setItem("dirtlessdetailing-size", 4);
        setCurrVal(4);
      } else {
        setCurrVal(localValue);
      }
    } else {
      setCurrVal(2);
    }
  }, []);

  function updateValue(e) {
    localStorage.setItem("dirtlessdetailing-size", e); // returns 0-4

    setCurrVal(e);
  }

  let content = 100;
  if (salePrices["active"]) {
    // CURRENT SALE ACTIVE
    if (animate) {
      content = (
        <>
          <span className="text-green-500">$</span>
          <AnimatedNumbers
            includeComma
            animateToNumber={salePrices[sizesArr[currVal]][props.serviceType][props.shortTitle]}
            configs={[{ mass: 1, tension: 320, friction: 100 }]}
            className="text-green-500"
          ></AnimatedNumbers>
          <span className="text-green-500">{props.shortTitle == "extCorrect" || props.shortTitle == "extPolish" ? "*" : ""}</span>
        </>
      );
    } else {
      content = <span className="text-green-500">salePrices[sizesArr[currVal]][props.serviceType][props.shortTitle];</span>;
    }
  } else {
    // NO CURRENT SALE
    if (animate) {
      content = (
        <>
          <span>$</span>
          <AnimatedNumbers
            includeComma
            animateToNumber={prices[sizesArr[currVal]][props.serviceType][props.shortTitle]}
            configs={[{ mass: 1, tension: 320, friction: 100 }]}
          ></AnimatedNumbers>
          {props.shortTitle == "extCorrect" || props.shortTitle == "extPolish" ? "*" : ""}
        </>
      );
    } else {
      content = prices[sizesArr[currVal]][props.serviceType][props.shortTitle];
    }
  }

  return (
    <div className="w-full text-white">
      <div className="flex flex-col items-center lg:flex-row gap-[5vh] px-4 lg:px-20 mb-20 w-full mx-auto lg:w-5/6 border-2 bg-zinc-900 border-zinc-500 rounded-2xl p-6 lg:p-8">
        <div className="relative w-[90vw] h-[35vh] max-w-[600px] rounded-xl bg-center bg-cover bg-no-repeat lg:max-w-[800px]">
          <Image
            src={imagesArr[currVal]}
            alt="Dirt-Less Detailing sizing"
            fill
            sizes="(max-width: 1350px) 600px, (min-width: 1351px) 800px"
            className="object-cover rounded-3xl"
          />
        </div>
        <div className="w-full lg:w-px h-px bg-gray-300 lg:h-[450px]"></div>
        <div className="flex flex-col justify-between w-full lg:w-1/2 gap-8 py-4">
          <div>
            <Select value={currVal} onValueChange={(e) => updateValue(e)} defaultValue="2">
              <SelectTrigger className="text-3xl lg:w-full lg:mx-auto shadow-[0_0_15px_rgb(0,0,0)] mb-12 py-8 bg-zinc-700">
                <SelectValue placeholder="Select a vehicle size." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="text-2xl text-white">
                  <SelectLabel className="text-2xl">Sizes</SelectLabel>
                  <SelectItem className="text-2xl" value="0">
                    Any 2-Door Vehicle
                  </SelectItem>
                  <SelectItem className="text-2xl" value="1">
                    4-Door Sedans
                  </SelectItem>
                  <SelectItem className="text-2xl" value="2">
                    Mid-Size SUV's
                  </SelectItem>
                  <SelectItem className="text-2xl" value="3">
                    4-Door Trucks
                  </SelectItem>
                  <SelectItem className="text-2xl" value="4">
                    3-Row SUV's & Minivans
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="w-full h-px bg-gray-300"></div>
          </div>
          <div className="flex flex-col justify-between items-center w-full my-0 mx-auto max-w-[700px] lg:flex-row">
            <div className="flex flex-col items-start mb-4 w-full">
              <p className="text-2xl mx-auto lg:mx-0">Starting At:</p>
              {props.shortTitle == "extCorrect" || props.shortTitle == "extPolish" ? (
                <p className="text-gray-400 text-sm text-left">*Additional Correction (e.g., wet sanding, touchup painting) is available at $150/hour.</p>
              ) : (
                ""
              )}
              {props.shortTitle == "intRestoration" ? (
                <p className="text-gray-400 text-sm text-left">
                  *Pricing varies greatly depending on condition. Free quotes are always available, just stop by or call!
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center">
                {salePrices["active"] ? (
                  <span className="text-3xl font-bold line-through text-red-500 mr-2 mt-8">
                    ${prices[sizesArr[currVal]][props.serviceType][props.shortTitle]}
                  </span>
                ) : (
                  ""
                )}
                <div className="flex flex-col items-center">
                  {salePrices["active"] ? <span className="text-xl text-right text-green-500 font-semibold">{salePrices["saleName"]}!</span> : ""}
                  <strong className="pricing__pricecard-pricebox border-gray-300 border-2 bg-zinc-700">
                    <span className="pricing__pricecard-price">{content}</span>
                  </strong>
                </div>
              </div>
              <p className="flex m-0 text-base">
                +Desired Add-ons <CornerRightDown color="#ffffff" size={20} />
              </p>
            </div>
          </div>
          <div>
            <a
              href="/contact"
              className="py-3 text-black text-xl tracking-wide px-[0.9rem] bg-primary rounded-xl w-full font-bold items-center flex justify-center"
            >
              SCHEDULE NOW!
              <ArrowRight color="#000" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-[100vw]">
        <hr className="pricing__hr" />
        <h3 className="text-center text-3xl font-semibold my-8">Get even more out of your service with our add-ons!</h3>
        {addonSection}
      </div>
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
          <p className="text-black">$75</p>
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
          <p className="text-black">$80/hour</p>
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
          <p className="text-black">$75</p>
        </div>
      </div>
      <div className="bg-zinc-900 p-4 rounded-lg flex flex-col gap-4 items-center justify-between mb-4 max-w-[500px]">
        <div className="w-full flex flex-col items-center gap-2 justify-center mb-4">
          <h4 className="text-2xl font-semibold">Ceramic Maintenance</h4>
          <p className="text-xl text-gray-300">
            Our recommended addon for a Decon Wash, this is best done every 6-12 months after your coating, we'll check in see how the coating is holding up and
            add a topper in areas that may need it.
          </p>
        </div>
        <div className="bg-primary w-1/2 py-2 rounded-lg text-xl font-medium">
          <p className="text-black">$75</p>
        </div>
      </div>
      <div className="bg-zinc-900 p-4 rounded-lg flex flex-col gap-4 items-center justify-between mb-4 max-w-[500px]">
        <div className="w-full flex flex-col items-center gap-2 justify-center mb-4">
          <h4 className="text-2xl font-semibold">Trim Restoration</h4>
          <p className="text-xl text-gray-300">
            If your trim is fading or oxidized, this is the perfect add-on to get it looking like new again! We will prep and restore all exterior trim on the
            vehicle to bring back that deep black color and protect it from future fading.
          </p>
        </div>
        <div className="bg-primary w-1/2 py-2 rounded-lg text-xl font-medium">
          <p className="text-black">$75</p>
        </div>
      </div>
    </div>
  );
};
const WashCoat = () => {
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
          <p className="text-black">$75</p>
        </div>
      </div>
      <div className="bg-zinc-900 p-4 rounded-lg flex flex-col gap-4 items-center justify-between mb-4 max-w-[500px]">
        <div className="w-full flex flex-col items-center gap-2 justify-center mb-4">
          <h4 className="text-2xl font-semibold">Trim Restoration</h4>
          <p className="text-xl text-gray-300">
            If your trim is fading or oxidized, this is the perfect add-on to get it looking like new again! We will prep and restore all exterior trim on the
            vehicle to bring back that deep black color and protect it from future fading. (Typically takes 30 minutes - 1 hour)
          </p>
        </div>
        <div className="bg-primary w-1/2 py-2 rounded-lg text-xl font-medium">
          <p className="text-black">$75</p>
        </div>
      </div>
    </div>
  );
};

const FullInterior = () => {
  return (
    <div className="flex justify-center w-[90vw] mb-4 flex-wrap mx-auto my-0 gap-4 lg:flex-row">
      <div className="bg-zinc-900 p-4 rounded-lg flex flex-col gap-4 items-center justify-between mb-4 max-w-[500px]">
        <div className="w-full flex flex-col items-center gap-2 justify-center mb-4">
          <h4 className="text-2xl font-semibold">Ozone Treatment</h4>
          <p className="text-xl text-gray-300">
            Ozone treatment is the use of O3 (ozone gas) to remove odors, bacteria, and viruses from everywhere in the vehicle. Recommended on ALL strong odor,
            mold, and smokers car jobs.
          </p>
        </div>
        <div className="bg-primary w-1/2 py-2 rounded-lg text-xl font-medium">
          <p className="text-black">$75</p>
        </div>
      </div>
      <div className="bg-zinc-900 p-4 rounded-lg flex flex-col gap-4 items-center justify-between mb-4 max-w-[500px]">
        <div className="w-full flex flex-col items-center gap-2 justify-center mb-4">
          <h4 className="text-2xl font-semibold">Interior Ceramic</h4>
          <p className="text-xl text-gray-300">
            Our Interior Ceramic Coating is a great way to protect your interior from stains and spills. Perfect for families with kids, pets, or anyone who
            wants to keep their interior looking like new for longer.
          </p>
        </div>
        <div className="bg-primary w-1/2 py-2 rounded-lg text-xl font-medium">
          <p className="text-black">$75</p>
        </div>
      </div>
    </div>
  );
};

const InteriorRefresh = () => {
  return (
    <div className="flex justify-center w-[90vw] mb-4 flex-wrap mx-auto my-0 gap-4 lg:flex-row">
      <div className="bg-zinc-900 p-4 rounded-lg flex flex-col gap-4 items-center justify-between mb-4 max-w-[500px]">
        <div className="w-full flex flex-col items-center gap-2 justify-center mb-4">
          <h4 className="text-2xl font-semibold">Interior Ceramic</h4>
          <p className="text-xl text-gray-300">
            Our Interior Ceramic Coating is a great way to protect your interior from stains and spills. Perfect for families with kids, pets, or anyone who
            wants to keep their interior looking like new for longer.
          </p>
        </div>
        <div className="bg-primary w-1/2 py-2 rounded-lg text-xl font-medium">
          <p className="text-black">$75</p>
        </div>
      </div>
    </div>
  );
};

const InteriorRestore = () => {
  return (
    <div className="flex justify-center w-[90vw] mb-4 flex-wrap mx-auto my-0 gap-4 lg:flex-row">
      <div className="bg-zinc-900 p-4 rounded-lg flex flex-col gap-4 items-center justify-between mb-4 max-w-[500px]">
        <div className="w-full flex flex-col items-center gap-2 justify-center mb-4">
          <h4 className="text-2xl font-semibold">Interior Ceramic</h4>
          <p className="text-xl text-gray-300">
            Our Interior Ceramic Coating is a great way to protect your interior from stains and spills. Perfect to keep the interior from getting back to what
            it was before the restoration.
          </p>
        </div>
        <div className="bg-primary w-1/2 py-2 rounded-lg text-xl font-medium">
          <p className="text-black">$75</p>
        </div>
      </div>
    </div>
  );
};
