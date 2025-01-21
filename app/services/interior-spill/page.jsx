"use client";
import React, { useState } from "react";
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
import { motion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import HeaderComponent from "../../components/HeaderComponent";

const jsonld = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Interior + Spill Guard",
  "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a196c77-cb1a-42f9-479b-8fdbe3c14500/public",
  "description":
    "et your car's interior looking brand new with our full interior detailing service, topped off with a ceramic coating to protect your vehicle from day to day use! Contact us to schedule your appointment today.",
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
  const [slide, setSlide] = useState(50);

  return (
    <section className="service-content-container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld, null, 2) }} />
      <HeaderComponent
        imageUrl="assets/images/interior/accO.jpg"
        title="Full Interior + Spill Guard"
        description="Our highly rated interior service topped with an interior ceramic coating."
        secondaryUrl="assets/images/interior/center3.jpg"
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
                  <a href="/services/exterior" className="aside-link">
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
                  <span className="accent-orange bold">Full Interior + Spill Guard</span> Pricing
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
            <div style={{ display: "grid", marginBottom: "10vh" }} className="place-center">
              <div className="slider-container">
                <div
                  style={{
                    backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/907d2e8b-5d24-40bf-387e-90be139c2d00/public')`
                  }}
                  className="slider-img"
                ></div>
                <div
                  style={{
                    width: slide + "%",
                    backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/70e54f6b-a9f8-48aa-a9af-893776082400/public')`
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
            </div>

            <div className="preview-container">
              <motion.a initial="rest" whileHover="hover" variants={previewParentVariation} href="/gallery/interior" className="gallery-preview">
                <motion.img
                  variants={imgVariation1}
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/f6170666-70f6-487c-4db8-26125453df00/public"
                  alt="preview"
                  className="preview-img"
                />
                <motion.img
                  variants={imgVariation2}
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/5cba81f3-c606-430c-4d2b-4b90409ed600/public"
                  alt="preview"
                  className="preview-img"
                />
                <motion.img
                  variants={imgVariation3}
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a196c77-cb1a-42f9-479b-8fdbe3c14500/public"
                  alt="preview"
                  className="preview-img"
                />
                <motion.img
                  variants={imgVariation4}
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/878bae8f-0568-46c7-ba04-9a1025e24300/public"
                  alt="preview"
                  className="preview-img"
                />
              </motion.a>
              <div className="preview-content">
                <h4>
                  See examples of our interior{" "}
                  <a href="/gallery/interior" className="aside-link inline-block">
                    work <SquareArrowOutUpRight className="inline-block" />
                  </a>
                </h4>
                <p>
                  Our interior gallery page has a large collection of interior images including before and after pictures! Check it out{" "}
                  <a href="/gallery/interior" className="aside-link">
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
