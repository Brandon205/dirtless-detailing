"use client";
import React from "react";
import PricingComponent from "../../components/PricingComponent";
import { previewParentVariation, imgVariation1, imgVariation2, imgVariation3, imgVariation4 } from "../../../utils/animationVariations";
import BeforeAfterSlider from "../../components/ImageSlider";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import HeaderComponent from "../../components/HeaderComponent";
import BaseSchema from "../../jsonSchemas/BaseSchema";

export default function InteriorRestoration() {
  return (
    <section className="service-content-container">
      <BaseSchema
        serviceImage="/assets/images/before&afters/badInteriorBA.png"
        url="https://www.dirtlessdetailing.com/services/interior-restoration"
        makesOffer={{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Restoration",
            "description":
              "Our Interior Restoration service is a service designed for vehicles that have been neglected beyond what our Full Interior Detail can handle. If your interior has heavy odors, mold, or is extremely dirty, and you need it back to acceptable, this is the service for you.",
            "areaServed": "Buckley, Bonney Lake, and surrounding areas.",
            "serviceType": "Interior Restoration"
          }
        }}
      />
      <HeaderComponent
        imageUrl="/assets/images/before&afters/nastykiadriverA.jpg"
        title="Interior Restoration"
        description="The service that can bring life back into heavily neglected interiors. If your interior has heavy odors, mold, or is extremely dirty, this is the service for you."
        secondaryUrl="/assets/images/before&afters/badInteriorBA.png"
      />

      <div className="main-content-container">
        <div className="process-container">
          <div className="w-full">
            {/* <div>
              <div className="pricing__heading-container">
                <h3 className="pricing__heading">
                  <span className="text-accent bold">Interior Restoration</span> Pricing
                </h3>
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>
              <PricingComponent shortTitle="intRestoration" serviceType="interior" addons="intRestoration" />
            </div> */}
            <div className="flex justify-center gap-8 flex-col lg:flex-row">
              <div className="max-w-[450px] w-full bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-6 mb-8">
                <h3 className="font-bold text-2xl text-primary">DEEP REVIVE:</h3>
                <p className="font-bold text-2xl text-primary">HEAVY USE & PET HAIR</p>
                <div className="w-auto h-[250px] relative my-4">
                  <Image
                    src="/assets/images/before&afters/badInteriorBA.png"
                    alt="Before and after of a heavily neglected interior"
                    fill
                    objectFit="cover"
                    className="mb-4 rounded-lg"
                  />
                </div>
                <strong className="font-bold text-2xl text-primary">$350 - $650+</strong>
                <p className="text-sm text-gray-400">*depending on size/condition</p>
                <p className="text-left">
                  Perfect for daily drivers, family cars, and vehicles with embedded dirt, spills, and extensive pet hair removal. Includes deep extraction,
                  scrubbing, and sanitization.
                </p>
              </div>
              <div className="max-w-[400px] w-full bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-6 mb-8">
                <h3 className="font-bold text-2xl text-primary">SAFETY & HEALTH:</h3>
                <p className="font-bold text-2xl text-primary">MOLD & BIOHAZARD</p>
                <div className="w-auto h-[250px] relative my-4">
                  <Image
                    src="/assets/images/before&afters/bio1278.webp"
                    alt="Moldy rear van seat before and after"
                    fill
                    objectFit="cover"
                    className="mb-4 rounded-lg"
                  />
                </div>
                <strong className="font-bold text-2xl text-primary">$600-$1200+</strong>
                <p className="text-sm text-gray-400">*depending on size/condition</p>
                <p className="text-left">
                  If there's just a small spot or a little mold, it's included in our Full Interior Service, but if there's more than one area or the mold is
                  very bad, this is the service for you. We use multiple different stages and chemicals all with the ability to kill mold, and end it off with a
                  complete ozone treatment to get the places no one can reach.
                </p>
              </div>
              <div className="max-w-[400px] w-full bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-6 mb-8">
                <h3 className="font-bold text-2xl text-primary">ULTIMATE RESTORATION:</h3>
                <p className="font-bold text-2xl text-primary">OLD VEHICLE/BARN FINDS</p>
                <div className="w-auto h-[250px] relative my-4">
                  <Image
                    src="/assets/images/before&afters/badInteriorBA.png"
                    alt="Before and after of a heavily neglected interior"
                    fill
                    objectFit="cover"
                    className="mb-4 rounded-lg"
                  />
                </div>
                <strong className="font-bold text-2xl text-primary">QUOTE REQUIRED*</strong>
                <p className="text-sm text-gray-400">*depending on size/condition</p>
                <p className="text-left">
                  Typically for older vehicles that have sun damage, fading plastics and leathers, and varying levels of wear. We will use specialized cleaners
                  to rejuvenate plastics and leathers, and do our best to restore the interior to its best possible condition, while protecting it from further
                  damage with UV inhibitors and a durable interior dressing.
                </p>
              </div>
            </div>

            <div className="w-full bg-zinc-800 flex text-white rounded-lg shadow-sm border border-zinc-900 p-6 mb-8 max-w-[1315px] mx-auto text-left gap-4 flex-col lg:flex-row justify-center lg:justify-start">
              <div className="w-full h-[250px] relative">
                <Image
                  src="/assets/images/before&afters/badInteriorBA.png"
                  alt="Before and after of a heavily neglected interior"
                  // width={250}
                  // height={250}
                  fill
                  objectFit="cover"
                  className="mb-4 object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-2xl text-primary mb-2">BUDGET CONSCIOUS RESTORATION: OPT FOR A CAPPED HOURLY DETAIL</h3>
                <p>
                  Choose this option for these services at an hourly rate ($125-$150/hour). Set a specific time limit (e.g., a 4 or 6 hour block). We prioritize
                  your biggest concerns and get through the most important steps for you before the time is up without extra things you may not be as worried
                  about. Ideal for making a huge impact without needing a "Full Restoration"{" "}
                </p>
                <div className="flex justify-start gap-8 mt-4 flex-col lg:flex-row">
                  <a
                    href="https://app.urable.com/virtual-shop/pMe0iWXWCBfTL47sDvjd"
                    className="text-white hover:underline text-xl font-semibold flex items-center gap-1 mt-2 bg-primary py-2 px-6 rounded-lg w-max"
                  >
                    <span>Book Hourly Block Online ($150/hour)</span>
                  </a>
                  <a
                    href="sms:+12532529758"
                    className="text-white border-primary border-2 hover:underline text-xl font-semibold flex items-center gap-1 mt-2 py-2 px-6 rounded-lg w-max"
                  >
                    <span>Text Photos for an Estimate (252) 252-9758</span>
                  </a>
                </div>
              </div>
            </div>

            <main className="w-full text-white my-0 mx-auto text-center p-4">
              <h2 style={{ marginBottom: 0 }} className="text-large">
                The Interior Restoration Service
              </h2>
              <hr style={{ margin: "0 auto 3rem auto" }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Beyond Detailing: Full Interior Recovery</span>
                  </h3>
                  <p className="leading-relaxed">
                    There is a level of "mess" that a standard interior detail simply can't solve. Whether you've purchased a neglected used vehicle, dealt with
                    a major spill, or are facing the aftermath of a long winter, our Recovery service is designed for the extreme. We don't just surface-clean;
                    we disassemble what is necessary to reach the source of the problem. If a seat needs to come out or a console needs to be cleared to reach a
                    hidden biohazard or deep-seated grime, we do what it takes to reclaim your cabin.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Scientific Odor & Mold Elimination</span>
                  </h3>
                  <p className="leading-relaxed">
                    Foul odors and mold spores don't just sit on the surface—they live in the air, the headliner, and deep within your ventilation system. To
                    combat this, we utilize professional-grade Ozone therapy. This process creates a reactive gas that permeates every square inch of the
                    interior, molecularly breaking down odors and killing mold at the source. It reaches the places no brush or vacuum ever could, ensuring that
                    when we're done, the vehicle isn't just "scented"—it's sanitized.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Aggressive Extraction for the Toughest Cases</span>
                  </h3>
                  <p className="leading-relaxed">
                    While our standard services focus on "bonneting" to keep carpets dry, this heavy-duty service brings out the big guns. We utilize high-heat
                    extraction and specific enzyme-based cleaners to break down organic matter, heavy mud, and years of ground-in debris. We match our most
                    aggressive (yet safe) chemicals to your specific disaster, working through multiple stages of agitation and vacuuming to pull the
                    "impossible" out of your fabric and upholstery.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">The "As Good As It Gets" Guarantee</span>
                  </h3>
                  <p className="leading-relaxed">
                    We pride ourselves on being the shop that tackles the jobs others turn away. However, we also believe in being 100% transparent: when a
                    vehicle has reached a certain level of neglect, some permanent wear, deep staining, or physical damage may remain. Our goal isn't to promise
                    a brand-new car, but to provide the absolute best possible outcome that modern chemistry and hard work can achieve. Your interior won't just
                    be "cleaned"—it will be restored to its highest possible standard of safety and comfort.
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

            {/* <br className="extra-space" /> */}

            {/* <h2 className="cleaning-process-title pb-8">Our Interior Restoration Process</h2>
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
            </motion.ol> */}

            <br className="extra-space" />

            <p style={{ fontSize: "2rem", margin: 0, color: "white" }}>End Results</p>
            <h3 className="pricing__heading">Back to the way your car should be.</h3>
            <p className="pricing__subtext">A car that you aren't scared or ashamed of to be driving anymore!</p>
            <div className="w-11/12 lg:w-3/4 max-w-[1200px] mx-auto mb-24">
              <BeforeAfterSlider
                beforeImage="/assets/images/before&afters/nastykiapassfloormatB.jpg"
                afterImage="/assets/images/before&afters/nastykiapassfloormatA.jpg"
                aspectRatio="16/9"
              />
            </div>

            <div className="mt-12 p-6 lg:p-8 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-lg border border-accent border-opacity-30 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">Is your car in need of a Restoration?</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Have questions or want a free quote on our Interior Restoration Service? Want to book an appointment? Get in touch with us today!
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/50"
              >
                Get Started
              </a>
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
