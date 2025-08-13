"use client";
import React from "react";
import PricingComponent from "../../components/PricingComponent";
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
import BeforeAfterSlider from "../../components/ImageSlider";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import HeaderComponent from "../../components/HeaderComponent";
import BaseSchema from "../../jsonSchemas/BaseSchema";

export default function InteriorSpill() {
  return (
    <section className="service-content-container">
      <BaseSchema
        serviceImage="/assets/images/interior/accO.jpg"
        url="https://www.dirtlessdetailing.com/services/interior-spill"
        makesOffer={{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Interior + Spill Guard",
            "description":
              "Get your car's interior looking brand new with our full interior detailing service, topped off with a ceramic coating to protect your vehicle from day to day use! Contact us to schedule your appointment today.",
            "areaServed": "Buckley, Bonney Lake, and surrounding areas.",
            "serviceType": "Interior Detailing + Ceramic Coating"
          }
        }}
      />
      <HeaderComponent
        imageUrl="/assets/images/interior/accO.jpg"
        title="Full Interior + Spill Guard"
        description="Our highly rated interior service topped with an interior ceramic coating, helping protect your vehicle from life's spills and stains."
        secondaryUrl="/assets/images/interior/center3.jpg"
      />

      <div className="main-content-container">
        <div className="process-container">
          <div style={{ width: "100%" }}>
            <div>
              <div className="pricing__heading-container">
                <h3 className="pricing__heading">
                  <span className="text-amber-500 bold">Full Interior + Spill Guard</span> Pricing
                </h3>
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>
              <PricingComponent shortTitle="interiorspill" serviceType="interior" addons="fullInterior" />
            </div>

            <main className="w-full text-white my-0 mx-auto text-center p-4">
              <h2 style={{ marginBottom: 0 }} className="text-large">
                The Full Interior + Spill Guard Service
              </h2>
              <hr style={{ margin: "0 auto 3rem auto" }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Protection That Makes Sense</span>
                  </h3>
                  <p className="leading-relaxed">
                    If your car sees heavy use from kids, pets, food, drinks, or just daily life, this service is built for you. We don't just clean up the mess
                    that's already there - we prevent future messes from becoming permanent problems. Our interior ceramic coating creates a protective barrier
                    that gives you time to clean up spills before they soak in and become stains.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Deep Cleaning First, Protection Second</span>
                  </h3>
                  <p className="leading-relaxed">
                    Before any coating goes on, we do the deep work. Using our extensive collection of specialized interior chemicals, we remove months or years
                    of built-up grime, stains, and odors. Our carpet extraction process pulls out embedded dirt, while our bonneting technique handles
                    surface-level problems and freshens the entire interior. Then, after everything is perfectly clean we apply the protective coating.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Ceramic Coating That Actually Works</span>
                  </h3>
                  <p className="leading-relaxed">
                    Our interior ceramic coating isn't like those slippery conditioners that make you slide around in your seat. This coating feels natural
                    while providing protection. Spilled coffee wipes up instead of soaking in. Pet accidents clean up easier. Food crumbs don't grind into
                    fabric. All materials will feel and look similar, but cleanup becomes dramatically easier.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Long-Term Value</span>
                  </h3>
                  <p className="leading-relaxed">
                    This isn't just about today's cleaning - it's about making every future cleanup easier for the next year. Kids spill things. Pets have
                    accidents. Life happens. With proper protection in place, these inevitable messes become minor inconveniences instead of permanent damage.
                    Your interior stays cleaner longer and requires less aggressive cleaning to maintain, which means it lasts longer and looks better
                    throughout its life.
                  </p>
                </div>
              </div>

              {/* Call-to-action section */}
              <div className="mt-8 p-3 lg:p-6 bg-zinc-800 rounded-lg border border-zinc-900">
                <p className="text-center">
                  Want the exterior done as well? Feel free to book an interior and exterior detail, we will get your entire vehicle looking like new in just
                  one day! Check out our exterior decon wash{" "}
                  <a href="/services/exterior" className="text-blue-600 hover:text-blue-700 font-medium underline">
                    here
                  </a>
                  !
                </p>
              </div>
            </main>

            <br className="extra-space" />

            <h2 className="cleaning-process-title pb-8">Our Interior + Spill Guard Process</h2>
            <motion.ol className="list" variants={containerVariant} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <motion.li className="item" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">1</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Expose Hidden Dirt</h4>
                  <p className="step-desc">Blow out all hidden dirt and debris and gets areas that are hard to reach with a vacuum.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">2</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Vacuum Vehicle</h4>
                  <p className="step-desc">Thoroughly vacuum every crack and crevice of the vehicle.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">3</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Hot Water Extraction (stain removal)</h4>
                  <p className="step-desc">Remove/Extract all stains that we can. We will be sure to get all carpets, floor mats, and cloth seats.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">4</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Door Jambs</h4>
                  <p className="step-desc">Clean all of the door jambs.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">5</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Wipe Down Plastics and Leathers</h4>
                  <p className="step-desc">We will clean, steam, and degrease all plastics and leather seats.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">6</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Window Cleaning</h4>
                  <p className="step-desc">Clean all windows and other glass, removing any streaking possibly left behind from the previous steps.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">7</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Leather & Plastic Restoration</h4>
                  <p className="step-desc">
                    Use a specialized cleaner to attempt to restore faded plastics, and a different chemical to try to rejuvenate leathers. The chemical makeup
                    of both of these does an amazing job at preventing future UV damage and wear as well.
                  </p>
                </div>
              </motion.li>
              <motion.li className="item" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">8</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Interior Spill Guard Coating</h4>
                  <p className="step-desc">
                    Apply a 1 year interior ceramic coating to all surfaces in the vehicle. This is PERFECT for cars with kids, pets, or daily coffee trips with
                    the occasional spills, as cleaning it will now be much easier.
                  </p>
                </div>
              </motion.li>
            </motion.ol>

            <br className="extra-space" />

            <br className="extra-space" />

            <p style={{ fontSize: "2rem", margin: 0, color: "white" }}>End Results</p>
            <h3 className="pricing__heading">Your car like you've never seen it before.</h3>
            <p className="pricing__subtext">Our interior coating also brings out more color in the plastics and leather without being slippery to the touch.</p>
            <div className="w-11/12 lg:w-3/4 max-w-[1200px] mx-auto mb-24">
              <BeforeAfterSlider
                beforeImage="/assets/images/before&afters/nastykiadriversB.jpg"
                afterImage="/assets/images/before&afters/nastykiadriverA.jpg"
                aspectRatio="16/9"
              />
            </div>

            <div className="preview-container">
              <motion.a initial="rest" whileHover="hover" variants={previewParentVariation} href="/gallery/interior" className="gallery-preview">
                <motion.div variants={imgVariation1} className="relative w-full h-[100px] rounded-xl">
                  <Image
                    variants={imgVariation1}
                    src="/assets/images/interior/door1.jpg"
                    alt="Clean door panel of a car"
                    fill
                    sizes="275px"
                    className="object-cover rounded-xl"
                  />
                </motion.div>
                <motion.div variants={imgVariation2} className="relative w-full h-[100px] rounded-xl">
                  <Image
                    variants={imgVariation2}
                    src="/assets/images/interior/driver5.jpg"
                    alt="Clean Mazda interior from the drivers side"
                    fill
                    sizes="275px"
                    className="object-cover rounded-xl"
                  />
                </motion.div>
                <motion.div variants={imgVariation3} className="relative w-full h-[100px] rounded-xl">
                  <Image
                    variants={imgVariation3}
                    src="/assets/images/interior/doorRenegade.jpg"
                    alt="The door panel of a cleaned jeep renegade"
                    fill
                    sizes="275px"
                    className="object-cover rounded-xl"
                  />
                </motion.div>
                <motion.div variants={imgVariation4} className="relative w-full h-[100px] rounded-xl">
                  <Image
                    variants={imgVariation4}
                    src="/assets/images/interior/driver16.jpg"
                    alt="View inside the drivers side of a cleaned jeep renegade"
                    fill
                    sizes="275px"
                    className="object-cover rounded-xl"
                  />
                </motion.div>
              </motion.a>
              <div className="preview-content">
                <h4>
                  See examples of our interior{" "}
                  <a href="/gallery/interior" className="text-blue-500 inline-block">
                    work <ExternalLink className="inline-block" />
                  </a>
                </h4>
                <p>
                  Our interior gallery page has a large collection of interior images including before and after pictures! Check it out{" "}
                  <a href="/gallery/interior" className="text-blue-500">
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
