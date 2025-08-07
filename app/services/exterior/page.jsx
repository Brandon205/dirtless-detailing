"use client";
import PricingComponent from "../../components/PricingComponent";
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
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
        description="Get a complete car wash, down to even the smallest dots of tar removed."
        secondaryUrl="/assets/images/before&afters/TruckTarBA.png"
      />

      <div className="main-content-container">
        <div className="process-container">
          <div style={{ width: "100%" }}>
            <div>
              <div className="pricing__heading-container">
                <h3 className="pricing__heading">
                  <span className="text-amber-500 bold">Exterior Decon Wash</span> Pricing
                </h3>
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>
              <PricingComponent shortTitle="exterior" serviceType="exterior" addons="exterior" />
            </div>

            <main className="w-full text-white my-0 mx-auto text-center p-4">
              <h2 style={{ marginBottom: 0 }} className="text-large">
                Our Exterior Decontamination Wash
              </h2>
              <hr style={{ margin: "0 auto 3rem auto" }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">More Than Just Another Car Wash</span>
                  </h3>
                  <p className="leading-relaxed">
                    Most car washes focus on making your car look clean without actually removing the contaminants that cause long-term damage. Our decon wash
                    is built around the idea that truly clean means contaminate-free. We don't just rinse off the surface dirt - we actively remove iron
                    particles, tar buildup, tree sap, and other embedded contaminants that regular washing can't touch. It's the foundation that every other
                    service builds on.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Wheels That Get the Attention They Deserve</span>
                  </h3>
                  <p className="leading-relaxed">
                    Your wheels take more abuse than any other part of your car, collecting brake dust, road grime, and iron particles that bond to the surface.
                    We stock a wide array of specialized wheel chemicals because generic cleaners don't cut it when brake dust has been baking on there for
                    months. That purple runoff you see in our photos? That's iron contamination being safely dissolved and removed - something you'll never get
                    from a drive-through car wash.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Decontamination That Actually Works</span>
                  </h3>
                  <p className="leading-relaxed">
                    The word "decon" gets thrown around a lot in our industry, but we mean it literally. Our process includes iron removal that pulls metallic
                    particles from your paint, tar removal for those stubborn spots on lower panels, and sap removal that won't damage your clear coat. We even
                    clean areas most places skip - door jambs, gas doors, and all the hidden spots where dirt loves to hide. Every step has a purpose.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Protection That Makes Maintenance Easier</span>
                  </h3>
                  <p className="leading-relaxed">
                    We finish every decon wash with a ceramic spray that provides 3 months of protection. This isn't just about making your car look good today
                    - it's about making it easier to keep clean tomorrow. That ceramic layer helps repel water, reduces dirt adhesion, and makes your next wash
                    more effective. It's the difference between cleaning your car and actually maintaining it.
                  </p>
                </div>
              </div>

              {/* Call-to-action section */}
              <div className="mt-8 p-3 lg:p-6 bg-zinc-800 rounded-lg border border-zinc-900">
                <p className="text-center">
                  Complete the detail! While your car is with us now's the best time to get that interior back in shape! Check out our current offers and
                  pricing on our full interior detail{" "}
                  <a href="/services/exterior" className="text-blue-600 hover:text-blue-700 font-medium underline">
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
                  <h4 className="step-title flex">
                    All this and more!{" "}
                    <a href="/services/exterior-seal">
                      <ExternalLink color="#3b82f6" size={24} className="mt-1 ml-1" />
                    </a>
                  </h4>
                  <p className="step-desc">
                    If you opt for our Exterior Seal and Shine package you get all of these benefits plus: a full vehicle polish, specialized windshield and
                    trim coatings, and a 1-year ceramic coating on all paint! See more info{" "}
                    <a href="/services/exterior-seal" className="text-blue-500">
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
            <div className="w-11/12 lg:w-3/4 max-w-[1200px] mx-auto">
              <BeforeAfterSlider
                beforeImage="/assets/images/before&afters/teslawashBFR.jpg"
                afterImage="/assets/images/before&afters/teslawashAFR.jpg"
                aspectRatio="16/9"
              />
            </div>

            <div className="preview-container">
              <motion.a initial="rest" whileHover="hover" variants={previewParentVariation} href="/gallery/exterior" className="gallery-preview">
                <motion.div variants={imgVariation1} className="relative w-full h-[100px] rounded-xl">
                  <Image
                    variants={imgVariation1}
                    src="/assets/images/exterior/amg.jpg"
                    alt="Mercedes AMG with a clean exterior"
                    fill
                    sizes="275px"
                    className="object-cover rounded-xl"
                  />
                </motion.div>
                <motion.div variants={imgVariation2} className="relative w-full h-[100px] rounded-xl">
                  <Image
                    variants={imgVariation2}
                    src="/assets/images/exterior/ironwheel1.jpg"
                    alt="Purple runoff from iron decontamination on a wheel"
                    fill
                    sizes="275px"
                    className="object-cover rounded-xl"
                  />
                </motion.div>
                <motion.div variants={imgVariation3} className="relative w-full h-[100px] rounded-xl">
                  <Image
                    variants={imgVariation3}
                    src="/assets/images/exterior/sideofsilverram.jpg"
                    alt="Side view of a washed silver dodge ram"
                    fill
                    sizes="275px"
                    className="object-cover rounded-xl"
                  />
                </motion.div>
                <motion.div variants={imgVariation4} className="relative w-full h-[100px] rounded-xl">
                  <Image
                    variants={imgVariation4}
                    src="/assets/images/exterior/engine5c77.jpg"
                    alt="Washed engine bay of a BMW"
                    fill
                    sizes="275px"
                    className="object-cover rounded-xl"
                  />
                </motion.div>
              </motion.a>
              <div className="preview-content">
                <h4>
                  Check out our{" "}
                  <a href="/gallery/exterior" className="text-blue-500 inline-block">
                    Exterior Gallery <ExternalLink className="inline-block" />
                  </a>
                </h4>
                <p>
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
      </div>
    </section>
  );
}
