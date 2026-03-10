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
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>
              <PricingComponent shortTitle="extWashCoat" serviceType="exterior" addons="washCoat" />
            </div>

            <main className="w-full text-white my-0 mx-auto text-center p-4">
              <h2 style={{ marginBottom: 0 }} className="text-large">
                Our Wash & Coat Service
              </h2>
              <hr style={{ margin: "0 auto 3rem auto" }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">The Ultimate "New Car" Reset</span>
                  </h3>
                  <p className="leading-relaxed">
                    Whether your vehicle just rolled off the dealership lot or you're looking to refresh your daily driver, our Wash & Coat service provides a
                    professional-grade baseline. We bridge the gap between a standard wash and a multi-day restoration. This package is specifically designed
                    for vehicles with paint in good condition that need elite protection, or for owners who prioritize long-term surface integrity and ease of
                    maintenance over removing every microscopic swirl mark.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Decon Meets Durable Protection</span>
                  </h3>
                  <p className="leading-relaxed">
                    We start with our signature Exterior Decon Wash—removing the iron, tar, and industrial fallout that standard soaps leave behind. But we
                    don't stop there. Once the surface is truly surgically clean, we perform a dedicated paint prep to ensure the surface is chemically bare.
                    This allows our 3-year ceramic coating to bond directly to your clear coat at a molecular level, providing a layer of defense that no wax or
                    "spray sealant" can match.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Professional Results, Accessible Value</span>
                  </h3>
                  <p className="leading-relaxed">
                    The biggest hurdle to ceramic coatings is often the cost of paint correction. By focusing on the decontamination and the coating application
                    itself, we're able to offer a high-performance 3-year shield at a fraction of the cost of our multi-year packages. It's the perfect solution
                    for the practical owner who wants the incredible gloss, extreme water beading, and UV protection of a ceramic coating without the intensive
                    labor of a full machine polish.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Simplify Your Washes for the Next 12 Months</span>
                  </h3>
                  <p className="leading-relaxed">
                    The real magic of the Wash & Coat happens every time it rains or you go to wash your car. For the next year, your paint will be incredibly
                    "slick," meaning dirt and road grime struggle to stick to the surface. Maintenance washes become faster and easier, and your car stays
                    cleaner for longer. You aren't just paying for a shiny car today; you're investing in a year of effortless maintenance and peace of mind.
                  </p>
                </div>
              </div>

              {/* Call-to-action section */}
              <div className="mt-8 p-3 lg:p-6 bg-zinc-800 rounded-lg border border-zinc-900">
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
