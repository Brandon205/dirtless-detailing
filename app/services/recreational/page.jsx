"use client";
import React, { useState, useEffect } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import FaqItem from "../../components/FaqItem";
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false
});

const jsonld = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Boat/RV/Trailer Detailing",
  "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6848fcc1-eaa2-4c67-7e97-d9ea70b4aa00/public",
  "description": "At Dirt-Less Detailing we aren't limited to just cars and trucks! Book any of your recreational vehicles for a detail today!",
  "brand": {
    "@type": "Brand",
    "name": "Dirt-Less Detailing"
  },
  "offers": {
    "@type": "AggregateOffer",
    "url": "https://www.dirtlessdetailing.com/services/recreational",
    "priceCurrency": "USD",
    "lowPrice": "50",
    "highPrice": "500"
  },
  "url": "https://www.dirtlessdetailing.com/services/recreational"
};

const faqItems = [
  {
    title: "Do you offer polishing for boats and RV's?",
    description:
      "Not as of right now, only washes and boat interiors. We may add polishing and ceramic coating services for both in the future, so be sure to check back!"
  },
  {
    title: "These are all mobile services right?",
    description: "Yes! We can easily bring all that we need to you."
  },
  {
    title: "What cities do you service?",
    description:
      "With our mobile service we can go out to: Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Lake Tapps, Federal Way, Orting, South Prairie, Black Diamond, Milton, Edgewood, and Graham."
  }
];

const imagesArr = [
  "78e2196e-0484-4ca3-769b-deff51ba1000", // Boat short
  "37508a6b-fed4-42c2-1bc8-cbb422834100", // Boat long
  "6848fcc1-eaa2-4c67-7e97-d9ea70b4aa00" // RV
];

const serviceSteps = {
  "Boat Interior Detail": (
    <>
      <h2 className="cleaning-process-title pb-8 text-center">Our Boat Interior Detail Process</h2>
      <ol className="list">
        <li className="item">
          <div className="step-number-container">
            <h3 className="step-number">1</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Blow out Interior</h4>
            <p className="step-desc">Thorough blow-out to remove a majority of the debris making the vacuuming step easier</p>
          </div>
        </li>
        <li className="item">
          <div className="step-number-container">
            <h3 className="step-number">2</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Vacuum</h4>
            <p className="step-desc">All surfaces and cubbies/storage areas vacuumed out</p>
          </div>
        </li>
        <li className="item">
          <div className="step-number-container">
            <h3 className="step-number">3</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Cleaning</h4>
            <p className="step-desc">All surfaces/seats/plastics hit with a strong cleaner to remove any mildew, dirt, and dust that has built up over time</p>
          </div>
        </li>
        <li className="item">
          <div className="step-number-container">
            <h3 className="step-number">4</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Clean Windows</h4>
            <p className="step-desc">All windows, mirrors, and glass cleaned and left streak-free</p>
          </div>
        </li>
      </ol>
    </>
  ),
  "Boat Exterior Detail": (
    <>
      <h2 className="cleaning-process-title pb-8 text-center">Our Boat Exterior Detail Process</h2>
      <ol className="list">
        <li className="item">
          <div className="step-number-container">
            <h3 className="step-number">1</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Foam Cannon Wash</h4>
            <p className="step-desc">Using a foam cannon and pressure washer, completely wash the exterior</p>
          </div>
        </li>
        <li className="item">
          <div className="step-number-container">
            <h3 className="step-number">2</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Trailer Wash</h4>
            <p className="step-desc">Full wash and tire dressing on the trailer (if it's on one instead of a lift)</p>
          </div>
        </li>
        <li className="item">
          <div className="step-number-container">
            <h3 className="step-number">3</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Ceramic Spray Sealant</h4>
            <p className="step-desc">Application of a ceramic spray sealant to protect the exterior for around 3 months of use</p>
          </div>
        </li>
      </ol>
    </>
  ),
  "RV/Trailer Exterior Detail": (
    <>
      <h2 className="cleaning-process-title pb-8 text-center">Our RV/Trailer Exterior Process</h2>
      <ol className="list">
        <li className="item">
          <div className="step-number-container">
            <h3 className="step-number">1</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Foam Cannon Wash</h4>
            <p className="step-desc">
              Full vehicle wash using a foam cannon and pressure washer to easily remove built up pollen and dirt from all cracks and corners
            </p>
          </div>
        </li>
        <li className="item">
          <div className="step-number-container">
            <h3 className="step-number">2</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Wheels and Tires</h4>
            <p className="step-desc">Cleaning of wheels, wheel barrels, and wheel wells</p>
          </div>
        </li>
        <li className="item">
          <div className="step-number-container">
            <h3 className="step-number">3</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Ceramic Spray Coating</h4>
            <p className="step-desc">While drying the RV/Trailer we will apply a ceramic spray that will protect for 3-6 months</p>
          </div>
        </li>
        <li className="item">
          <div className="step-number-container">
            <h3 className="step-number">4</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Tar and Sap removal</h4>
            <p className="step-desc">Carefully remove all stubborn tar and sap that the wash didn't get</p>
          </div>
        </li>
        <li className="item">
          <div className="step-number-container">
            <h3 className="step-number">5</h3>
          </div>
          <div className="step-container">
            <h4 className="step-title">Dressing</h4>
            <p className="step-desc">Dress tires and wheel wells for a nice new tire shine look</p>
          </div>
        </li>
      </ol>
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
        mainUrl={"6848fcc1-eaa2-4c67-7e97-d9ea70b4aa00"}
        title="Boats/RV's & Trailer Detailing"
        description="Bring your recreational vehicles back to life with our newly offered detailing services for them!"
        secondaryUrl={"78e2196e-0484-4ca3-769b-deff51ba1000"}
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
        <h3 className="pricing__heading">{currService !== "RV/Trailer Exterior Detail" ? "Get Your Boat Ready for Summer." : "Ready for Camping."}</h3>
        <p className="pricing__subtext">
          {currService !== "RV/Trailer Exterior Detail"
            ? "Leave it to us to remove the nastiness that builds up over the winter"
            : "After years of mess from having an RV in Washington we'll be sure to bring it back to life"}
        </p>

        <div className="slider-container w-full mx-auto rounded-3xl">
          <div
            style={{
              backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/${imagesArr[imageIndex]}/public')`
            }}
            className="slider-img"
          ></div>
        </div>

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
    if (props.currService !== "RV/Trailer Exterior Detail" && props.length >= 15) {
      // Longer boat image
      props.setImageIndex(1);
    } else if (props.currService !== "RV/Trailer Exterior Detail") {
      // Jet ski image
      props.setImageIndex(0);
    } else {
      // Not boat service, RV image
      props.setImageIndex(2);
    }
  }, [props.length, props.currService]);

  return (
    <div className="pricing__container">
      <div
        className="pricing__img"
        style={{ backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/${imagesArr[props.imageIndex]}/cover)` }}
      ></div>
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

      <div className="pricing__pricecard">
        <p>Your Price Estimate:</p>
        <div className="pricing__pricecard-container">
          <strong className="pricing__pricecard-pricebox">
            <span className="pricing__pricecard-price">
              $
              {animate ? (
                <AnimatedNumbers includeComma animateToNumber={10 * props.length} configs={[{ mass: 1, tension: 320, friction: 100 }]}></AnimatedNumbers>
              ) : (
                10 * props.length
              )}
            </span>
          </strong>
          <p className="flex">(Pricing is $10/foot)</p>
        </div>
      </div>

      <a href="/contact" className="new-contact-btn">
        Contact Us
      </a>
    </div>
  );
}
