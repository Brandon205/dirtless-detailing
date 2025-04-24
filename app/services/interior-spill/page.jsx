"use client";
import React from "react";
import PricingComponent from "../../../utils/PricingComponent";
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

const jsonld = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Interior + Spill Guard",
  "image": "/assets/images/showcase/ceramic1285.jpg",
  "description":
    "Get your car's interior looking brand new with our full interior detailing service, topped off with a ceramic coating to protect your vehicle from day to day use! Contact us to schedule your appointment today.",
  "brand": {
    "@type": "Brand",
    "name": "Dirt-Less Detailing"
  },
  "offers": {
    "@type": "AggregateOffer",
    "url": "https://www.dirtlessdetailing.com/services/interior-spill",
    "priceCurrency": "USD",
    "lowPrice": "500",
    "highPrice": "600"
  },
  "url": "https://www.dirtlessdetailing.com/services/interior-spill"
};

export default function InteriorSpill() {
  return (
    <section className="service-content-container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld, null, 2) }} />
      <HeaderComponent
        imageUrl="/assets/images/interior/accO.jpg"
        title="Full Interior + Spill Guard"
        description="Our highly rated interior service topped with an interior ceramic coating."
        secondaryUrl="/assets/images/interior/center3.jpg"
      />

      <div className="main-content-container">
        <div className="process-container">
          <div style={{ width: "100%" }}>
            <main className="service-main">
              <h2 style={{ marginBottom: 0 }} className="text-large">
                Full Interior + Spill Guard
              </h2>
              <hr style={{ margin: "0 auto 3rem auto" }} />
              <div className="service-explain">
                <p>
                  If your cars interior is often put under heavy use by kids, food, drinks, and even animals, then this is the best choice for you. Not only
                  will we remove the past few months of dirt, french fries, and who knows what else, but we'll also protect your interior for time to come!
                </p>
                <p>
                  With the Spill Guard coating, you'll get a layer of ceramic coating applied to all materials of your vehicle, even the fabric! Now cleanup
                  from life's accidents will be far easier as the coating will act as a protective layer, which will give you more time to clean up before
                  things soak in.
                </p>
                <p>
                  And don't worry, the coating doesn't act like the cheap conditioners, and make all surfaces slippery. All materials will feel similar, look
                  similar, and you won't be sliding around in your seat when you drive like other products.
                </p>
                <p>
                  Do you need the exterior detailed as well? Feel free to book an interior and exterior detail. It's the best way to get your whole vehicle
                  brought back to life! Check out our exterior decon wash{" "}
                  <a href="/services/exterior" className="text-blue-500">
                    here
                  </a>
                  , starting at only <span className="bold">$125</span>!
                </p>
              </div>
            </main>
            <br className="extra-space" />

            <div>
              <div className="pricing__heading-container">
                <h3 className="pricing__heading">
                  <span className="text-amber-500 bold">Full Interior + Spill Guard</span> Pricing
                </h3>
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>
              <PricingComponent shortTitle="interiorspill" serviceType="interior" addons="fullInterior" />
            </div>

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
              <motion.li className="item" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">7</h3>
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
