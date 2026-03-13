"use client";
import PricingComponent from "../../components/PricingComponent";
import HeaderComponent from "../../components/HeaderComponent";
import MosaicGallery from "../../components/MosaicGallery";
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
import { motion } from "framer-motion";
import { ExternalLink, Brush } from "lucide-react";
import BaseSchema from "../../jsonSchemas/BaseSchema";
import Image from "next/image";

export default function Exterior() {
  return (
    <section className="service-content-container">
      <BaseSchema
        serviceImage="/assets/images/exterior/subaruWashed.jpeg"
        url="https://www.dirtlessdetailing.com/services/exterior"
        makesOffer={{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Exterior Decon Wash",
            "description":
              "Get a car wash like never before with our Exterior Decon Wash. Where we go in depth to get all corners and remove any paint contaminants.",
            "areaServed": "Buckley, Bonney Lake, and surrounding areas.",
            "serviceType": "Car Wash"
          }
        }}
      />
      <HeaderComponent
        imageUrl="/assets/images/exterior/subaruWashed.jpeg"
        title="Exterior Decon Wash"
        description="The detailers car wash. We focus on the parts that get missed, removing contaminants, and protecting your paint."
        secondaryUrl="/assets/images/before&afters/TruckTarBA.png"
      />

      <div className="main-content-container">
        <div className="process-container">
          <div className="w-full">
            <div className="w-full bg-zinc-800 pb-8">
              <div className="pricing__heading-container">
                <h3 className="pricing__heading">
                  <span className="text-accent bold">Exterior Decon Wash</span> Pricing
                </h3>
                <strong className="pricing__subheading">Select your vehicle size below to get a starting price estimate.</strong>
              </div>
              <PricingComponent shortTitle="extDecon" serviceType="exterior" addons="exterior" />
            </div>

            <main className="w-full text-white my-0 mx-auto text-center p-4">
              <div className="flex flex-col w-full gap-4 lg:w-5/6 mx-auto border-2 border-zinc-500 rounded-lg p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center mb-0 lg:mb-4">
                  <div className="w-11/12 lg:w-3/4 max-w-[1200px] mx-auto">
                    <BeforeAfterSlider
                      beforeImage="/assets/images/before&afters/teslawashBFR.jpg"
                      afterImage="/assets/images/before&afters/teslawashAFR.jpg"
                      aspectRatio="16/9"
                    />
                  </div>

                  <div className="flex flex-col w-full justify-between min-h-[475px] lg:h-[550px] py-4">
                    <div className="flex flex-col items-start">
                      <h2 className="text-4xl font-bold">Our Exterior Decon Wash</h2>
                      <strong className="text-primary text-bold text-2xl">The Detailer's Car Wash</strong>
                    </div>
                    <div className="flex items-center my-4">
                      <Brush color="#f59e0b" size={156} className="mr-4" />
                      <p className="leading-relaxed text-left text-md">
                        Our Exterior Decon Wash is the "detailer's car wash"—built on the principle that truly clean means contaminant-free. We go far beyond
                        the surface to actively dissolve iron particles, tar, and tree sap that automatic washes simply cannot touch. By focusing on areas often
                        skipped—like door jambs and gas doors—we ensure your paint and wheels are surgically clean and protected from the elements.
                      </p>
                    </div>
                    <div className="flex items-center mb-4">
                      <Brush color="#f59e0b" size={156} className="mr-4" />
                      <p className="leading-relaxed text-left text-md">
                        We finish every wash with a high-grade ceramic spray that provides at least 3 months of protection. This layer isn't just for a
                        mirror-like shine; it creates a slick surface that repels water and prevents dirt from sticking, making your next wash faster and more
                        effective. It is the essential foundation for maintaining any vehicle's long-term surface integrity.
                      </p>
                    </div>
                    <div className="w-full p-4 bg-zinc-800 rounded-lg border border-zinc-600">
                      <p className="text-left">
                        <span className="font-bold text-md">Ideal for:</span> Vehicles needing a deep season reset or a foundation professional cleaning.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-center">
                  Complete the detail! While your car is with us now is the best time to get that neglected interior back in shape! Check out our current offers
                  and pricing on our full interior detail{" "}
                  <a href="/services/interior" className="text-blue-600 hover:text-blue-700 font-medium underline">
                    here
                  </a>
                  !
                </p>
              </div>
            </main>

            <br className="extra-space" />

            <h2 className="cleaning-process-title pb-8">Our Exterior Decon Wash Process</h2>
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
              <motion.li className="item" variants={evenVariant}>
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
                  <h4 className="step-title">Protect Paint</h4>
                  <p className="step-desc">Apply a Ceramic Spray before drying (gives the entire vehicle 3 months of protection).</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">6</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Dry Vehicle</h4>
                  <p className="step-desc">Dry the whole vehicle with drying towels and air blowers.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">7</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Final Touches</h4>
                  <p className="step-desc">Dress the tires and wheel wells.</p>
                </div>
              </motion.li>
              <motion.li className="item item-disabled" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number" style={{ border: "2px solid #aaa" }}>
                    8
                  </h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title flex line-through">
                    All this and more!{" "}
                    <a href="/services/polish">
                      <ExternalLink color="#3b82f6" size={24} className="mt-1 ml-1" />
                    </a>
                  </h4>
                  <p className="step-desc">
                    If you opt for our Exterior Polish & Coat package you get all of these benefits plus: a full vehicle polish, specialized windshield and trim
                    coatings, and a 1-year ceramic coating on all paint! See more info{" "}
                    <a href="/services/polish" className="text-blue-500">
                      here
                    </a>
                    .
                  </p>
                </div>
              </motion.li>
            </motion.ol>

            <br className="extra-space" />

            <p style={{ fontSize: "2rem", margin: 0, color: "white" }}>End Results</p>
            <h3 className="pricing__heading">What a car wash should be.</h3>
            <p className="pricing__subtext">Your car, washed, without the unnecessary scratching or missed corners.</p>
            <div>
              <MosaicGallery
                images={[
                  { src: "/assets/images/before&afters/seatsBA.jpg", alt: "Car seats before and after" },
                  { src: "/assets/images/interior/bio1281.jpg", alt: "Interior detail" },
                  { src: "/assets/images/interior/centerOldMercedes.jpg", alt: "Center console detail" },
                  { src: "/assets/images/interior/doorRenegade.jpg", alt: "Door panel detail" },
                  { src: "/assets/images/interior/driver11.jpg", alt: "Driver side view" },
                  { src: "/assets/images/interior/driver21.jpg", alt: "Driver side view" }
                ]}
              />
            </div>

            <div className="p-8 text-center flex flex-col items-center text-white ">
              <h4 className="text-3xl text-left">
                Check out our{" "}
                <a href="/gallery/exterior" className="text-blue-500 inline-block">
                  Exterior Gallery <ExternalLink className="inline-block" />
                </a>
              </h4>
              <p className="text-left">
                Check out our exterior gallery page, showing off some of the great results we've gotten over the years! See it{" "}
                <a href="/gallery/exterior" className="text-blue-500">
                  here
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
