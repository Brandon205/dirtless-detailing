"use client";
import PricingComponent from "../../components/PricingComponent";
import HeaderComponent from "../../components/HeaderComponent";
import BeforeAfterSlider from "../../components/ImageSlider";
import MosaicGallery from "../../components/MosaicGallery";
import { containerVariant, oddVariant, evenVariant } from "../../../utils/animationVariations";
import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";
import { RiResetLeftLine } from "react-icons/ri";
import { ExternalLink } from "lucide-react";
import BaseSchema from "../../jsonSchemas/BaseSchema";

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
            "name": "Wash & Coat",
            "description":
              "Our full Decontamination Wash plus a ceramic coating that provides 3 years of protection for your paint. The best way to keep your car looking great with regular maintenance washes.",
            "areaServed": "Buckley, Bonney Lake, and surrounding areas.",
            "serviceType": "Car Wash & Ceramic Coating"
          }
        }}
      />
      <HeaderComponent
        imageUrl="/assets/images/exterior/hondaFront.jpg"
        title="Wash & Coat"
        description="Our full Decontamination Wash plus a ceramic coating that provides 3 years of protection for your paint. The best way to keep your car looking great with regular maintenance washes."
        secondaryUrl="/assets/images/exterior/porscheMacan2.jpg"
      />

      <div className="main-content-container">
        <div className="process-container">
          <div className="w-full">
            <div className="w-full bg-zinc-800 pb-8">
              <div className="pricing__heading-container">
                <h3 className="pricing__heading">
                  <span className="text-accent bold">Wash & Coat</span> Pricing
                </h3>
                <strong className="pricing__subheading">Select your vehicle size for an estimate.</strong>
              </div>
              <PricingComponent shortTitle="extWashCoat" serviceType="exterior" addons="washCoat" />
            </div>

            <br className="extra-space" />

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
                      <h2 className="text-4xl font-bold">Our Wash & Coat Service</h2>
                      <strong className="text-primary text-bold text-2xl">The easiest way to get your car protected.</strong>
                    </div>
                    <div className="flex items-center my-4">
                      <FaShieldAlt color="#f59e0b" size={48} className="mr-4 hidden lg:block flex-shrink-0" />
                      <p className="leading-relaxed text-left text-md">
                        The Wash & Coat package is the ultimate "New Car" reset, designed for owners who prioritize surface protection and ease of maintenance.
                        You get the extreme water beading and UV resistance of a ceramic shield at a fraction of the cost of our correction packages.
                      </p>
                    </div>
                    <div className="flex items-center mb-4">
                      <RiResetLeftLine color="#f59e0b" size={48} className="mr-4 hidden lg:block flex-shrink-0" />
                      <p className="leading-relaxed text-left text-md">
                        Once the surface is decontaminated, we perform a dedicated paint prep to ensure our 3-year ceramic coating can bond properly. This
                        creates a durable defense that no wax can match. Now your paint will be incredibly slick, meaning road grime struggles to stick and your
                        maintenance washes become almost effortless.
                      </p>
                    </div>
                    <div className="w-full p-4 bg-zinc-800 rounded-lg border border-zinc-600">
                      <p className="text-left">
                        <span className="font-bold text-md">Ideal for:</span> New cars or well-maintained daily drivers needing elite protection without the
                        cost of polishing.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-center">
                  Complete the detail! While your car is with us now's the best time to get that neglected interior back in shape! Check out our current offers
                  and pricing on our full interior detail{" "}
                  <a href="/services/exterior" className="text-blue-600 hover:text-blue-700 font-medium underline">
                    here
                  </a>
                  !
                </p>
              </div>
            </main>

            <br className="extra-space" />

            <h2 className="cleaning-process-title pb-8">Our Wash & Coat Process</h2>
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
                  <h4 className="step-title">Remove tar, sap, iron, and clay bar if needed</h4>
                  <p className="step-desc">
                    Remove any tar, sap, and iron from the exterior. If the paint is rough to the touch after washing, we will also perform a clay bar treatment
                    to remove any remaining contaminants from the paint.
                  </p>
                </div>
              </motion.li>
              <motion.li className="item" variants={oddVariant}>
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
                  <h4 className="step-title">Apply Primer Polish</h4>
                  <p className="step-desc">Apply a Primer Polish to ensure proper bonding.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">7</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Apply 3-Year Ceramic Coating</h4>
                  <p className="step-desc">Apply our 3-Year Ceramic Coating for long-lasting protection and shine.</p>
                </div>
              </motion.li>
              <motion.li className="item item-disabled" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number" style={{ border: "2px solid #aaa" }}>
                    8
                  </h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title flex">
                    Want a Polish or Paint Correction?
                    <a href="/services/polish">
                      <ExternalLink color="#3b82f6" size={24} className="mt-1 ml-1" />
                    </a>
                  </h4>
                  <p className="step-desc">
                    Check out our Polish & Coat{" "}
                    <a href="/services/polish" className="text-blue-500">
                      Polish & Coat
                    </a>{" "}
                    service for a polish before the coating, or our{" "}
                    <a href="/services/correct" className="text-blue-500">
                      Correct & Coat
                    </a>{" "}
                    service for a full paint correction before a 3-year ceramic coating .
                  </p>
                </div>
              </motion.li>
            </motion.ol>

            <br className="extra-space" />

            <p style={{ fontSize: "2rem", margin: 0, color: "white" }}>End Results</p>
            <h3 className="pricing__heading">Brand New Look, with Next-Level Protection</h3>
            <p className="pricing__subtext">Set yourself up for easier future maintenance and long-term protection on your vehicle.</p>
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
