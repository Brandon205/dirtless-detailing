"use client";
import React, { useState } from "react";
import PricingComponent from "../../../utils/PricingComponent";
import HeaderComponent from "../../components/HeaderComponent";
import ImageSlider from "../../../utils/ImageSlider";
import {
  previewParentVariation,
  imgVariation1,
  imgVariation2,
  imgVariation3,
  imgVariation4,
} from "../../../utils/animationVariations";
import { motion } from "framer-motion";

const jsonld = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "Exterior Seal & Shine",
  image: "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/977438a8-129b-496b-9845-e55e3198e900/public",
  description:
    "Experience a showroom shine and unparalleled protection with our Exterior Seal and Shine, ensuring your car gleams like new while safeguarding its finish.",
  brand: {
    "@type": "Brand",
    name: "Dirt-Less Detailing",
  },
  offers: {
    "@type": "AggregateOffer",
    url: "https://www.dirtlessdetailing.com/services/exterior-seal",
    priceCurrency: "USD",
    lowPrice: "500",
    highPrice: "750",
  },
};

export default function ExteriorSeal() {
  const [slide, setSlide] = useState(50);

  return (
    <section className="service-content-container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld, null, 2) }} />
      <HeaderComponent
        mainUrl={"977438a8-129b-496b-9845-e55e3198e900"}
        title="Exterior Seal and Shine"
        description="Our tried and true wash with a corrective polish, and even stronger Ceramic Spray coating."
        secondaryUrl={"c4bc3845-d897-4dcc-9401-f7feca96a200"}
      />

      <div className="main-content-container">
        <div className="process-container">
          <div style={{ width: "100%" }}>
            <main className="service-main">
              <h2 style={{ marginBottom: 0 }} className="text-large">
                Exterior Seal and Shine
              </h2>
              <hr style={{ margin: "0 auto 3rem auto" }} />
              <div className="service-explain">
                <p>
                  This service comes with everything from our Exterior Decon Wash Service and more! If you are looking
                  to truly brighten your vehicles paint and make it glow, or just get rid of minor swirl marks, this is
                  the package for you.
                </p>
                <p>
                  After our decon wash, we clay your paint removing any final embedded contaminates. From there, we
                  refine your paint by doing a light polishing step to increase depth and gloss. Finally, we top all of
                  that goodness with up to 1 year of ceramic protection on your whole vehicle!
                </p>
                <p>
                  This is a great service to get yearly on ceramic coated, and non ceramic coated vehicles to refresh
                  your exterior, and always have it looking its best.
                </p>
                <p>
                  Now's the perfect time to book a interior cleaning as well. Check out our current offers and pricing
                  on our base interior service{" "}
                  <a href="/services/interior" className="aside-link">
                    here
                  </a>
                  .
                </p>
              </div>
            </main>
            <br className="extra-space" />

            <div>
              <div className="pricing__heading-container">
                <h3 className="pricing__heading">
                  <span className="accent-orange bold">Exterior Seal and Shine</span> Pricing
                </h3>
                <strong className="pricing__subheading">
                  Select your vehicle size below to get a quick price estimate for your vehicle.
                </strong>
              </div>
              <PricingComponent prices={[500, 500, 500, 625, 750, 750]} addons="exterior" />
            </div>

            <h2 className="cleaning-process-title text-xl">Our Exterior Seal and Shine Process</h2>
            <ol className="list">
              <li className="item">
                <div className="step-number-container">
                  <h3 className="step-number">1</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Wash Vehicle</h4>
                  <p className="step-desc">Thorough top to bottom wash including the the gas door.</p>
                </div>
              </li>
              <li className="item">
                <div className="step-number-container">
                  <h3 className="step-number">2</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Wheel Cleaning</h4>
                  <p className="step-desc">
                    Clean wheels, wheel wells, and wheel barrels with chemicals made for removing brake dust and road
                    film.
                  </p>
                </div>
              </li>
              <li className="item">
                <div className="step-number-container">
                  <h3 className="step-number">3</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Remove tar and sap</h4>
                  <p className="step-desc">
                    Remove any tar and sap from the exterior. Especially if your car is white, small black dots of tar
                    appear usually on the lower panels of the car. We have some of the best products to remove all of
                    it.
                  </p>
                </div>
              </li>
              <li className="item">
                <div className="step-number-container">
                  <h3 className="step-number">4</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Dry Vehicle</h4>
                  <p className="step-desc">Dry the whole vehicle with drying towels and air blowers.</p>
                </div>
              </li>
              <li className="item">
                <div className="step-number-container">
                  <h3 className="step-number">5</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Remove scratches and watermarks</h4>
                  <p className="step-desc">
                    Perform our Polishing Procedure removing many of the lighter scratches and swirls from your paint.
                    This also removes most lighter watermarks from the vehicle, even on the glass as we go over that as
                    well.
                  </p>
                </div>
              </li>
              <li className="item">
                <div className="step-number-container">
                  <h3 className="step-number">6</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Protect Vehicle</h4>
                  <p className="step-desc">
                    Apply ceramic protection, which can last up to a year. At this stage we'll also apply our
                    windshield, trim, headlight, and wheel coatings to protect your entire vehicle!
                  </p>
                </div>
              </li>
              <li className="item">
                <div className="step-number-container">
                  <h3 className="step-number">7</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Clean Door Jambs</h4>
                  <p className="step-desc">Thoroughly wipe down all the cracks and crevices in the door jambs.</p>
                </div>
              </li>
              <li className="item">
                <div className="step-number-container">
                  <h3 className="step-number">8</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Final Touches</h4>
                  <p className="step-desc">Dress tires, wheel wells and other plastics.</p>
                </div>
              </li>
              <li className="item item-disabled">
                <div className="step-number-container">
                  <h3 className="step-number" style={{ border: "2px solid #aaa" }}>
                    9
                  </h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">
                    All this and more!{" "}
                    <a href="/services/exterior-correct">
                      <img src="../assets/icons/linking.png" alt="external link" className="icon-24" />
                    </a>
                  </h4>
                  <p className="step-desc">
                    If you opt for our Exterior Correct and Protect package you get all of these services, a full
                    vehicle Paint Correction (more in depth than a polish), and a 3 year Ceramic Coating, leaving you
                    with up to 2 extra years of protection! See more info{" "}
                    <a href="/services/exterior-seal" className="aside-link">
                      here
                    </a>
                    .
                  </p>
                </div>
              </li>
            </ol>

            <br className="extra-space" />

            <p style={{ fontSize: "2rem", margin: 0, color: "white" }}>End Results</p>
            <h3 className="pricing__heading">Clean, Shiny, and Protected.</h3>
            <p className="pricing__subtext">
              With light scratches removed and a year of protection applied your car will shine like never before!
            </p>
            <ImageSlider
              beforeUrlId="4d98c1bc-645c-46fa-2232-d1f735bb2300"
              afterUrlId="b814f739-3846-4796-3093-c34675a32c00"
              beforeOffset={0}
              afterOffset={0}
            />
            {/* <div style={{ display: "grid", marginBottom: "10vh" }} className="place-center">
              <div style={{ overflow: "hidden" }} className="slider-container">
                <div
                  style={{
                    backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b814f739-3846-4796-3093-c34675a32c00/public')`,
                    transform: "scale(1.35)",
                  }}
                  className="slider-img"
                ></div>
                <div
                  style={{
                    width: slide + "%",
                    backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4d98c1bc-645c-46fa-2232-d1f735bb2300/public')`,
                  }}
                  className="slider-img foreground"
                ></div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={slide}
                  onChange={(e) => setSlide(Number(e.target.value))}
                  className="slider-bar"
                  name="slider"
                  id="slider"
                />
                <div style={{ left: slide - 4 + "%" }} className="slider-button"></div>
              </div>
            </div> */}

            <div className="preview-container">
              <motion.a
                initial="rest"
                whileHover="hover"
                variants={previewParentVariation}
                href="/gallery/seal"
                className="gallery-preview"
              >
                <motion.img
                  variants={imgVariation1}
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/807bb532-5e08-48ef-61d7-7b3392f2ae00/public"
                  alt="preview"
                  className="preview-img"
                />
                <motion.img
                  variants={imgVariation2}
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ff2d836c-23d3-43fe-4f5c-844e5fb2a100/public"
                  alt="preview"
                  className="preview-img"
                />
                <motion.img
                  variants={imgVariation3}
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ef4953cd-466a-4752-9d87-12ddba64d700/public"
                  alt="preview"
                  className="preview-img"
                />
                <motion.img
                  variants={imgVariation4}
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/42bf45ce-c76d-4614-817b-7f4b5a55b200/public"
                  alt="preview"
                  className="preview-img"
                />
              </motion.a>
              <div className="preview-content">
                <h4>
                  See examples of our{" "}
                  <a href="/gallery/seal" className="aside-link">
                    work{" "}
                    <img
                      src="../assets/icons/linking.png"
                      style={{ marginLeft: "0.5rem" }}
                      alt="external link"
                      className="icon-36"
                    />
                  </a>
                </h4>
                <p>
                  Check out our exterior gallery page, showing off some of the great results we've gotten over the
                  years! See it{" "}
                  <a href="/gallery/seal" className="aside-link">
                    here
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
