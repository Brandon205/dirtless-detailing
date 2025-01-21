"use client";
import React, { useState, useEffect } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import BeforeAfterSlider from "../../components/ImageSlider";
import FaqItem from "../../components/FaqItem";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { containerVariant, oddVariant, evenVariant } from "../../../utils/animationVariations";
import Image from "next/image";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false
});

const jsonld = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Boat/RV/Trailer Detailing",
  "image": "/assets/images/sealshine/rv-finished.jpg",
  "description": "At Dirt-Less Detailing we aren't limited to just cars and trucks! Book any boats, RV's, Trailers, or ORV's for a detail today!",
  "brand": {
    "@type": "Brand",
    "name": "Dirt-Less Detailing"
  },
  "offers": {
    "@type": "AggregateOffer",
    "url": "https://www.dirtlessdetailing.com/services/recreational",
    "priceCurrency": "USD",
    "lowPrice": "50",
    "highPrice": "700"
  },
  "url": "https://www.dirtlessdetailing.com/services/recreational"
};

const faqItems = [
  {
    title: "What does your ORV Detailing package include?",
    description:
      "Our ORV Detailing will include cleaning/washing the full interior and exterior, using foaming chemicals that are safe to use on all surfaces that's still strong enough to ensure no dirt survives!"
  },
  {
    title: "Do you offer polishing for boats and RV's?",
    description:
      "Not as of right now, only washes and boat interiors. We may add polishing and ceramic coating services for both in the future, so be sure to check back!"
  },
  {
    title: "These are all mobile services right?",
    description: "Yes! We can perform all of these services at your home, all we will need is an electrical outlet and water spigot."
  },
  {
    title: "What cities do you service?",
    description:
      "With our mobile service we can go out to: Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Lake Tapps, Federal Way, Orting, South Prairie, Black Diamond, Milton, Edgewood, and Graham."
  }
];

// const imagesArr = [
//   "78e2196e-0484-4ca3-769b-deff51ba1000", // Jet Skis
//   "37508a6b-fed4-42c2-1bc8-cbb422834100", // Boat
//   "6848fcc1-eaa2-4c67-7e97-d9ea70b4aa00", // RV
//   "8fd0fff7-3594-4f13-33bd-175dd5546f00" // ORV
// ];
const imagesArr = [
  "/assets/images/showcase/jetskisRPortrait.jpeg", // Jet Skis
  "/assets/images/showcase/unsplash-boat-interior.jpg", // Boat
  "/assets/images/sealshine/rv-finished.jpg", // RV
  "/assets/images/exterior/sidexside.png" // ORV
];

const serviceSteps = {
  "Boat Interior Detail": (
    <>
      <h2 className="cleaning-process-title pb-8 text-center">Our Boat Interior Detail Process</h2>
      <motion.ol className="list" variants={containerVariant} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
        <motion.li className="item" variants={oddVariant}>
          <div className="step-number-container">
            <h3 className="step-number">1</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Blow out Interior</h4>
            <p className="step-desc">Thorough blow-out to remove a majority of the debris making the vacuuming step easier</p>
          </div>
        </motion.li>
        <motion.li className="item" variants={evenVariant}>
          <div className="step-number-container">
            <h3 className="step-number">2</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Vacuum</h4>
            <p className="step-desc">All surfaces and cubbies/storage areas vacuumed out</p>
          </div>
        </motion.li>
        <motion.li className="item" variants={oddVariant}>
          <div className="step-number-container">
            <h3 className="step-number">3</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Cleaning</h4>
            <p className="step-desc">All surfaces/seats/plastics hit with a strong cleaner to remove any mildew, dirt, and dust that has built up over time</p>
          </div>
        </motion.li>
        <motion.li className="item" variants={evenVariant}>
          <div className="step-number-container">
            <h3 className="step-number">4</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Clean Windows</h4>
            <p className="step-desc">All windows, mirrors, and glass cleaned and left streak-free</p>
          </div>
        </motion.li>
      </motion.ol>
    </>
  ),
  "Boat Exterior Detail": (
    <>
      <h2 className="cleaning-process-title pb-8 text-center">Our Boat Exterior Detail Process</h2>
      <motion.ol className="list" variants={containerVariant} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
        <motion.li className="item" variants={oddVariant}>
          <div className="step-number-container">
            <h3 className="step-number">1</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Foam Cannon Wash</h4>
            <p className="step-desc">Using a foam cannon and pressure washer, completely wash the exterior</p>
          </div>
        </motion.li>
        <motion.li className="item" variants={evenVariant}>
          <div className="step-number-container">
            <h3 className="step-number">2</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Trailer Wash</h4>
            <p className="step-desc">Full wash and tire dressing on the trailer (if it's on one instead of a lift)</p>
          </div>
        </motion.li>
        <motion.li className="item" variants={oddVariant}>
          <div className="step-number-container">
            <h3 className="step-number">3</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Ceramic Spray Sealant</h4>
            <p className="step-desc">Application of a ceramic spray sealant to protect the exterior for around 3 months of use</p>
          </div>
        </motion.li>
      </motion.ol>
    </>
  ),
  "RV/Trailer Exterior Detail": (
    <>
      <h2 className="cleaning-process-title pb-8 text-center">Our RV/Trailer Exterior Process</h2>
      <motion.ol className="list" variants={containerVariant} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
        <motion.li className="item" variants={oddVariant}>
          <div className="step-number-container">
            <h3 className="step-number">1</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Foam Cannon Wash</h4>
            <p className="step-desc">
              Full vehicle wash using a foam cannon and pressure washer to easily remove built up pollen and dirt from all cracks and corners
            </p>
          </div>
        </motion.li>
        <motion.li className="item" variants={evenVariant}>
          <div className="step-number-container">
            <h3 className="step-number">2</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Wheels and Tires</h4>
            <p className="step-desc">Cleaning of wheels, wheel barrels, and wheel wells</p>
          </div>
        </motion.li>
        <motion.li className="item" variants={oddVariant}>
          <div className="step-number-container">
            <h3 className="step-number">3</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Ceramic Spray Coating</h4>
            <p className="step-desc">While drying the RV/Trailer we will apply a ceramic spray that will protect for 3-6 months</p>
          </div>
        </motion.li>
        <motion.li className="item" variants={evenVariant}>
          <div className="step-number-container">
            <h3 className="step-number">4</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Tar and Sap removal</h4>
            <p className="step-desc">Carefully remove all stubborn tar and sap that the wash didn't get</p>
          </div>
        </motion.li>
        <motion.li className="item" variants={oddVariant}>
          <div className="step-number-container">
            <h3 className="step-number">5</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Dressing</h4>
            <p className="step-desc">Dress tires and wheel wells for a nice new tire shine look</p>
          </div>
        </motion.li>
      </motion.ol>
    </>
  ),
  "ORV Detail": (
    <>
      <h2 className="cleaning-process-title pb-8 text-center">Our ORV Detailing Process</h2>
      <motion.ol className="list" variants={containerVariant} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
        <motion.li className="item" variants={oddVariant}>
          <div className="step-number-container">
            <h3 className="step-number">1</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Foam Cannon Wash</h4>
            <p className="step-desc">
              Full Exterior wash using a foam cannon and pressure washer to easily remove built up dirt/grime from all cracks and corners.
            </p>
          </div>
        </motion.li>
        <motion.li className="item" variants={evenVariant}>
          <div className="step-number-container">
            <h3 className="step-number">2</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Wheels and Tires</h4>
            <p className="step-desc">Cleaning of wheels, wheel barrels, and wheel wells</p>
          </div>
        </motion.li>
        <motion.li className="item" variants={oddVariant}>
          <div className="step-number-container">
            <h3 className="step-number">3</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Ceramic Spray Coating</h4>
            <p className="step-desc">While drying we will apply a ceramic spray that will protect for 3-6 months</p>
          </div>
        </motion.li>
        <motion.li className="item" variants={evenVariant}>
          <div className="step-number-container">
            <h3 className="step-number">4</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Interior Cleaning</h4>
            <p className="step-desc">
              Depending on the interior we may wash it while we wash the outside, but if not we will clean it out here using things similar to our normal
              Interior Cleaning Process.
            </p>
          </div>
        </motion.li>
        <motion.li className="item" variants={evenVariant}>
          <div className="step-number-container">
            <h3 className="step-number">4</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Tar and Sap removal</h4>
            <p className="step-desc">Carefully remove all stubborn tar and sap that the wash didn't get</p>
          </div>
        </motion.li>
        <motion.li className="item" variants={oddVariant}>
          <div className="step-number-container">
            <h3 className="step-number">5</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Dressing</h4>
            <p className="step-desc">Dress tires and wheel wells for a nice new tire shine look</p>
          </div>
        </motion.li>
      </motion.ol>
    </>
  )
};

export default function Recreational() {
  const [currService, setCurrService] = useState("Boat Interior Detail");
  const [length, setLength] = useState(15);
  const [smallScreen, setSmallScreen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [imageIndex, setImageIndex] = useState(2);

  useEffect(() => {
    if (window.innerWidth < 979) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  }, []);

  return (
    <section className="service-content-container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld, null, 2) }} />
      <HeaderComponent
        imageUrl="/assets/images/sealshine/rv-finished.jpg"
        title="Boats, RV's, Trailer, and ORV Detailing"
        description="Bring any of your recreational vehicles back to life with our new detailing services for them!"
        secondaryUrl="/assets/images/showcase/jetskisRPortrait.jpeg"
      />

      <div className="main-content-container">
        <div className="pricing__heading-container text-center">
          <h3 className="pricing__heading">Our {currService} Pricing</h3>
          <strong className="pricing__subheading">Select a length below to get a quick price estimate.</strong>
          <div style={{ margin: "0 auto" }}>
            <select className="text-input pricing__select" name="package" id="package" onChange={(e) => setCurrService(e.target.value)}>
              <option value="Boat Interior Detail">Boat Interior Detail</option>
              <option value="Boat Exterior Detail">Boat Exterior Detail</option>
              <option value="RV/Trailer Exterior Detail">RV/Trailer Exterior Detail</option>
              <option value="ORV Detail">ORV Detailing</option>
            </select>
          </div>
        </div>
        <BoatPricing
          length={length}
          setLength={setLength}
          currService={currService}
          setCurrService={setCurrService}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
        />
      </div>

      <div className="text-center">
        {serviceSteps[currService]}
        <br className="extra-space" />

        <p style={{ fontSize: "2rem", margin: 0, color: "white" }}>Stunning Results</p>
        <h3 className="pricing__heading">
          {currService === "RV/Trailer Exterior Detail"
            ? "Ready for Camping."
            : currService === "ORV Detail"
            ? "Remove ALL the Dirt From Your ORV"
            : "Get Your Boat Ready for Summer."}
        </h3>
        <p className="pricing__subtext">
          {currService === "RV/Trailer Exterior Detail"
            ? "After years of mess from having an RV in Washington we'll be sure to bring it back to life."
            : currService === "ORV Detail"
            ? "We have the chemicals and training to make sure no spot gets missed."
            : "Leave it to us to remove the nastiness that builds up over the winter."}
        </p>

        {currService === "ORV Detail" ? (
          <div className="w-11/12 lg:w-3/4 max-w-[1200px] mx-auto">
            <BeforeAfterSlider
              beforeImage="/assets/images/before&afters/sideBySideBefore.jpg"
              afterImage="/assets/images/before&afters/sideBySideAfter.jpg"
              aspectRatio="16/9"
            />
          </div>
        ) : currService === "RV/Trailer Exterior Detail" ? (
          <div className="w-11/12 lg:w-3/4 max-w-[1200px] mx-auto">
            <BeforeAfterSlider
              beforeImage="/assets/images/before&afters/winnebagoB.jpg"
              afterImage="/assets/images/before&afters/winnebagoA.jpg"
              aspectRatio="16/9"
            />
          </div>
        ) : (
          <div className="slider-container w-full mx-auto">
            <Image src={imagesArr[imageIndex]} alt="Boat Detailing" fill className="object-cover rounded-3xl" />
          </div>
        )}

        <h3 className="text-3xl lg:text-4xl text-white pb-8 py-16">Frequently Asked Questions</h3>
        <div className="faq-container text-white w-11/12 max-w-screen-xl mx-auto">
          {faqItems.map((item, i) => (
            <FaqItem key={i} i={i} expanded={expanded} setExpanded={setExpanded} title={item.title} description={item.description} isMobile={smallScreen} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BoatPricing(props) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1500);
  }, []);

  useEffect(() => {
    // Boat Exterior Detail, Boat Interior Detail, RV/Trailer Exterior Detail, ORV Detail
    console.log(props.currService);
    if (props.currService === "Boat Exterior Detail" || (props.currService === "Boat Interior Detail" && props.length >= 15)) {
      // Longer boat image
      props.setImageIndex(1);
    } else if (props.currService === "Boat Exterior Detail" || props.currService === "Boat Interior Detail") {
      // Jet ski image
      props.setImageIndex(0);
    } else if (props.currService === "RV/Trailer Exterior Detail") {
      // RV Image
      props.setImageIndex(2);
    } else if (props.currService === "ORV Detail") {
      // Side by Side Image
      props.setImageIndex(3);
    }
  }, [props.length, props.currService]);

  return (
    <div className="pricing__container">
      <div className="pricing__img">
        <Image src={imagesArr[props.imageIndex]} alt="Dirt-Less Detailing sizing" fill className="object-cover rounded-3xl" />
      </div>
      {props.currService === "ORV Detail" ? (
        ""
      ) : (
        <select onChange={(e) => props.setLength(e.target.value)} className="vehicle__select" value={props.length}>
          {props.currService === "Boat Exterior Detail" ? (
            <>
              <option value={5}>5'</option>
              <option value={6}>6'</option>
              <option value={7}>7'</option>
              <option value={8}>8'</option>
              <option value={9}>9'</option>
              <option value={10}>10'</option>
              <option value={11}>11'</option>
              <option value={12}>12'</option>
              <option value={13}>13'</option>
              <option value={14}>14'</option>
            </>
          ) : (
            ""
          )}
          <option value={15}>15'</option>
          <option value={16}>16'</option>
          <option value={17}>17'</option>
          <option value={18}>18'</option>
          <option value={19}>19'</option>
          <option value={20}>20'</option>
          <option value={21}>21'</option>
          <option value={22}>22'</option>
          <option value={23}>23'</option>
          <option value={24}>24'</option>
          <option value={25}>25'</option>
          <option value={26}>26'</option>
          <option value={27}>27'</option>
          <option value={28}>28'</option>
          <option value={29}>29'</option>
          <option value={30}>30'</option>
          <option value={31}>31'</option>
          <option value={32}>32'</option>
          <option value={33}>33'</option>
          <option value={34}>34'</option>
          <option value={35}>35'</option>
          <option value={36}>36'</option>
          <option value={37}>37'</option>
          <option value={38}>38'</option>
          <option value={39}>39'</option>
          <option value={40}>40'+</option>
        </select>
      )}

      <div className="pricing__pricecard">
        <p>Your Price Estimate:</p>
        <div className="pricing__pricecard-container">
          <strong className="pricing__pricecard-pricebox">
            <span className="pricing__pricecard-price">
              $
              {animate ? (
                <AnimatedNumbers
                  includeComma
                  animateToNumber={props.currService === "ORV Detail" ? 250 : 10 * props.length}
                  configs={[{ mass: 1, tension: 320, friction: 100 }]}
                ></AnimatedNumbers>
              ) : props.currService === "ORV Detail" ? (
                250
              ) : (
                10 * props.length
              )}
            </span>
          </strong>
          <p className="flex">{props.currService === "ORV Detail" ? "*Pricing may vary, contact us!" : "Pricing is $10/foot"}</p>
        </div>
      </div>

      <a href="/contact" className="new-contact-btn">
        Contact Us
      </a>
    </div>
  );
}
