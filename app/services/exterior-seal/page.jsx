"use client";
import React, { useState } from "react";
import PricingComponent from "../../../utils/PricingComponent";
import HeaderComponent from "../../components/HeaderComponent";
import BeforeAfterSlider from "../../components/ImageSlider";
import {
  previewParentVariation,
  imgVariation1,
  imgVariation2,
  imgVariation3,
  imgVariation4,
  containerVariant,
  oddVariant,
  evenVariant
} from "../../../utils/animationVariations";
import { SquareArrowOutUpRight } from "lucide-react";
import { motion } from "framer-motion";

const jsonld = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Exterior Seal & Shine",
  "image": "/assets/images/correction/teslaclean.jpg",
  "description":
    "Experience a showroom shine and unparalleled protection with our Exterior Seal and Shine, ensuring your car gleams like new while safeguarding its finish.",
  "brand": {
    "@type": "Brand",
    "name": "Dirt-Less Detailing"
  },
  "offers": {
    "@type": "AggregateOffer",
    "url": "https://www.dirtlessdetailing.com/services/exterior-seal",
    "priceCurrency": "USD",
    "lowPrice": "600",
    "highPrice": "825"
  },
  "url": "https://www.dirtlessdetailing.com/services/exterior-seal"
};

export default function ExteriorSeal() {
  const [slide, setSlide] = useState(50);

  return (
    <section className="service-content-container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld, null, 2) }} />
      <HeaderComponent
        imageUrl="/assets/images/correction/teslaclean.jpg"
        title="Exterior Seal and Shine"
        description="Our tried and true wash with a corrective polish, and even stronger Ceramic Spray coating."
        secondaryUrl="/assets/images/before&afters/WashBADiagonal.png"
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
                  This service comes with everything from our Exterior Decon Wash Service and more! If you are looking to truly brighten your vehicles paint and
                  make it glow, or just get rid of minor swirl marks, this is the package for you.
                </p>
                <p>
                  After our decon wash, we clay your paint removing any final embedded contaminates. From there, we refine your paint by doing a light polishing
                  step to increase depth and gloss. Finally, we top all of that goodness with up to 1 year of ceramic protection on your whole vehicle!
                </p>
                <p>
                  This is a great service to get yearly on ceramic coated, and non ceramic coated vehicles to refresh your exterior, and always have it looking
                  its best.
                </p>
                <p>
                  Now's the perfect time to book a interior cleaning as well. Check out our current offers and pricing on our base interior service{" "}
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
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>
              <PricingComponent shortTitle="exteriorseal" serviceType="exterior" addons="correction" />
            </div>

            <h2 className="cleaning-process-title pb-8">Our Exterior Seal and Shine Process</h2>
            <motion.ol className="list" variants={containerVariant} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <motion.li className="item" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">1</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Wash Vehicle</h4>
                  <p className="step-desc">Thorough top to bottom wash including inside the gas door.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">2</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Wheel Cleaning</h4>
                  <p className="step-desc">
                    Clean wheels, wheel wells, and wheel barrels with specialized chemicals made for removing brake dust and road film.
                  </p>
                </div>
              </motion.li>
              <motion.li className="item" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">3</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Clean Door Jambs</h4>
                  <p className="step-desc">Thoroughly clean and rinse out all cracks and crevices in the door jambs.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">4</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Remove tar and sap</h4>
                  <p className="step-desc">
                    Remove any tar and sap from the exterior. Tar typically builds up on the lower panels of the vehicle, we have strong chemicals that can
                    safely remove it.
                  </p>
                </div>
              </motion.li>
              <motion.li className="item" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">5</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Dry Vehicle</h4>
                  <p className="step-desc">Dry the whole vehicle with drying towels and air blowers.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">6</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Remove scratches and watermarks</h4>
                  <p className="step-desc">
                    Perform our polishing procedure removing many lighter scratches and swirls from your paint. We also go over all of the glass to remove any
                    watermarks that have built up.
                  </p>
                </div>
              </motion.li>
              <motion.li className="item" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">7</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Protect Vehicle</h4>
                  <p className="step-desc">
                    Apply the 1-year ceramic coating. At this stage we'll also apply our windshield, trim, headlight, and wheel coatings to protect your entire
                    vehicle!
                  </p>
                </div>
              </motion.li>
              <motion.li className="item" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">8</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Final Touches</h4>
                  <p className="step-desc">Dress the tires and wheel wells</p>
                </div>
              </motion.li>
              <motion.li className="item item-disabled" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number" style={{ border: "2px solid #aaa" }}>
                    9
                  </h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title flex">
                    All this and more!{" "}
                    <a href="/services/exterior-correct">
                      <img src="../assets/icons/linking.png" alt="external link" className="icon-24" />
                    </a>
                  </h4>
                  <p className="step-desc">
                    If you opt for our Exterior Correct and Protect package you get all of these services, a 2-stage paint correction (removes more & deeper
                    scratches), and a 3 year Ceramic Coating, leaving you with up to 2 extra years of protection! See more info{" "}
                    <a href="/services/exterior-correct" className="aside-link">
                      here
                    </a>
                    .
                  </p>
                </div>
              </motion.li>
            </motion.ol>

            <br className="extra-space" />

            <p style={{ fontSize: "2rem", margin: 0, color: "white" }}>End Results</p>
            <h3 className="pricing__heading">Clean, Shiny, and Protected.</h3>
            <p className="pricing__subtext">With light scratches removed and a year of protection applied your car will shine like never before!</p>
            <div className="w-11/12 lg:w-3/4 max-w-[1200px] mx-auto">
              <BeforeAfterSlider
                beforeImage="/assets/images/before&afters/fordExteriorBefore.jpg"
                afterImage="/assets/images/before&afters/fordExteriorAfter.jpg"
                aspectRatio="16/9"
              />
            </div>

            <div className="preview-container">
              <motion.a initial="rest" whileHover="hover" variants={previewParentVariation} href="/gallery/seal" className="gallery-preview">
                <motion.img
                  variants={imgVariation1}
                  src="/assets/images/sealshine/sprinter6.jpg"
                  alt="Sprinter van after our Seal and Shine service"
                  className="w-full h-[100px] object-cover rounded-xl"
                />
                <motion.img
                  variants={imgVariation2}
                  src="/assets/images/sealshine/audiSeal3.jpg"
                  alt="Audi S4 with a fresh 1 year coating and polish"
                  className="w-full h-[100px] object-cover rounded-xl"
                />
                <motion.img
                  variants={imgVariation3}
                  src="/assets/images/sealshine/beamer1.jpg"
                  alt="BMW on a foggy morning"
                  className="w-full h-[100px] object-cover rounded-xl"
                />
                <motion.img
                  variants={imgVariation4}
                  src="/assets/images/sealshine/porscheRearL.jpg"
                  alt="Porsche from the read left"
                  className="w-full h-[100px] object-cover rounded-xl"
                />
              </motion.a>
              <div className="preview-content">
                <h4>
                  See the finished{" "}
                  <a href="/gallery/seal" className="aside-link inline-block">
                    results <SquareArrowOutUpRight className="inline-block" />
                  </a>
                </h4>
                <p>
                  Check out our Seal & Shine gallery page, showing off some of the great results we've gotten over the years! See it{" "}
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
