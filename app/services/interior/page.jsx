"use client";
import PricingComponent from "../../components/PricingComponent";
import BeforeAfterSlider from "../../components/ImageSlider";
import HeaderComponent from "../../components/HeaderComponent";
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
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import BaseSchema from "../../jsonSchemas/BaseSchema";

export default function FullIntEx() {
  return (
    <section className="service-content-container">
      <BaseSchema
        serviceImage="/assets/images/interior/driver16.jpg"
        url="https://www.dirtlessdetailing.com/services/interior"
        makesOffer={{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Interior Detail",
            "description":
              "Get your car's interior looking brand new with our full interior detailing service. This is our thorough cleaning and conditioning package where we try to bring your vehicle as close to perfection as we can get it. Contact us to schedule your appointment today.",
            "areaServed": "Buckley, Bonney Lake, and surrounding areas.",
            "serviceType": "Interior Detailing"
          }
        }}
      />
      <HeaderComponent
        imageUrl="/assets/images/interior/driver16.jpg"
        title="Full Interior Detail"
        description="Our full interior detail service is designed to bring your vehicle's interior back to life. From deep cleaning carpets to conditioning leather, we cover it all."
        secondaryUrl="/assets/images/before&afters/badInteriorBA.png"
      />

      <div className="main-content-container">
        <div className="process-container">
          <div style={{ width: "100%" }}>
            <div>
              <div className="pricing__heading-container">
                <h3 className="pricing__heading">
                  <span className="text-amber-500 bold">Full Interior</span> Pricing
                </h3>
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>
              <PricingComponent shortTitle="interior" serviceType="interior" addons="fullInterior" />
            </div>

            <br className="extra-space" />

            <main className="w-full text-white my-0 mx-auto text-center p-4">
              <h2 style={{ marginBottom: 0 }} className="text-large">
                Our Interior Deep Cleaning
              </h2>
              <hr style={{ margin: "0 auto 3rem auto" }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Why Your Interior Needs More Than Surface Cleaning</span>
                  </h3>
                  <p className="leading-relaxed">
                    Most people think a quick vacuum and wipe-down counts as interior cleaning. We've spent years researching and testing hundreds of different
                    chemicals to find exactly what works best for every surface and every type of mess. From coffee stains to pet accidents, from embedded dirt
                    to mystery odors - we don't just mask problems, we eliminate them with the right chemical for each specific situation.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">The Science Behind Our Chemical Arsenal</span>
                  </h3>
                  <p className="leading-relaxed">
                    Those 52 feet of chemical shelves aren't just for show. Every cleaner, every conditioner, every stain remover has earned its place through
                    testing and results. We've developed our own carpet bonneting technique that removes light staining and embedded odors while loosening hair,
                    dirt, and debris that regular extraction can't touch. For deeper problems, our extraction process uses targeted chemicals that break down
                    stains at the molecular level without damaging your interior materials.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Carpet Treatment That Actually Works</span>
                  </h3>
                  <p className="leading-relaxed">
                    Your carpet takes the worst beating of any surface in your car, so we treat it with the respect it deserves. Our carpet treatment solutions
                    cover everything from deep extraction for serious stains to our signature light bonneting procedure for maintenance cleaning. We match
                    specific products to specific problems ensuring the best possible outcome. Dog hair embedded in fabric? Mud ground into fibers? Mystery
                    stains from last year? We've seen it all and have the right approach for each situation.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">What Makes the Difference</span>
                  </h3>
                  <p className="leading-relaxed">
                    Taking us by surprise is difficult. We've cleaned hundreds of interiors and have the tools, chemicals, and techniques for every situation.
                    While we'll attempt to remove all stains, some may prove more challenging depending on what it is, how long it's been there, and what
                    surface it's on. But our extensive chemical research and specialized techniques mean we can tackle problems that other shops would give up
                    on. Your interior won't just look clean - it'll be actually clean.
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

            <h2 className="cleaning-process-title pb-8">Our Interior Cleaning Process</h2>
            <motion.ol className="list" variants={containerVariant} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <motion.li className="item" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">1</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Expose Hidden Dirt</h4>
                  <p className="step-desc">Blow out all hidden dirt and debris to get areas that are hard to reach with a vacuum.</p>
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
                  <h4 className="step-title">Carpet Reconditioning/Extraction</h4>
                  <p className="step-desc">Using our wide array of carpet cleaning chemicals, remove & extract all of stains that we can.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">4</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Door Jambs</h4>
                  <p className="step-desc">Thoroughly clean and rinse out all door jambs.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">5</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Wipe Down Plastics and Leathers</h4>
                  <p className="step-desc">We will clean and degrease all plastics and leather seats.</p>
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
              <motion.li className="item item-disabled" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number" style={{ border: "2px solid #aaa" }}>
                    7
                  </h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title flex line-through">
                    Interior Spill Guard Coating{" "}
                    <a href="/services/interior-spill">
                      <ExternalLink color="#3b82f6" size={24} className="mt-1 ml-1" />
                    </a>
                  </h4>
                  <p className="step-desc">
                    Upgrade to our Spill Guard Service to have us apply a 1-year interior ceramic coating to all surfaces in the vehicle. This is PERFECT for
                    cars with kids, pets, or daily coffee trips with the occasional spills as cleaning it will now be easier. See more info{" "}
                    <a href="/services/interior-spill" className="text-blue-500">
                      here
                    </a>
                    .
                  </p>
                </div>
              </motion.li>
            </motion.ol>

            <br className="extra-space" />

            <p style={{ fontSize: "2rem", margin: 0, color: "white" }}>End Results</p>
            <h3 className="pricing__heading">Fresh, Clean, and Stunning Results.</h3>
            <p className="pricing__subtext">Once we are done you won't want to see your car dirty ever again!</p>
            <div className="w-11/12 lg:w-3/4 max-w-[1200px] mx-auto">
              <BeforeAfterSlider
                beforeImage="/assets/images/before&afters/nastykiapassfloormatB.jpg"
                afterImage="/assets/images/before&afters/nastykiapassfloormatA.jpg"
                aspectRatio="16/9"
              />
            </div>

            <br className="extra-space" />

            <div className="preview-container">
              <motion.a initial="rest" whileHover="hover" variants={previewParentVariation} href="/gallery/interior" className="gallery-preview">
                <motion.div variants={imgVariation1} className="relative w-full h-[100px] rounded-xl">
                  <Image
                    variants={imgVariation1}
                    src="/assets/images/interior/driver5.jpg"
                    alt="Clean Mazda interior from the drivers side"
                    fill
                    sizes="275px"
                    className="object-cover rounded-xl"
                  />
                </motion.div>
                <motion.div variants={imgVariation2} className="relative w-full h-[100px] rounded-xl">
                  <Image
                    variants={imgVariation2}
                    src="/assets/images/interior/door1.jpg"
                    alt="Clean door panel of a car"
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
                <p>Our interior gallery page has a large collection of interior images including before and after pictures!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
