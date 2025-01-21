"use client";
import PricingComponent from "../../../utils/PricingComponent";
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
import { SquareArrowOutUpRight } from "lucide-react";
import { motion } from "framer-motion";

const jsonld = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Full Interior Detail",
  "image": "/assets/images/interior/driver16.jpg",
  "description":
    "Get your car's interior looking brand new with our full interior detailing service. We offer thorough cleaning and conditioning of all surfaces, including the dashboard, seats, and carpets. Contact us to schedule your appointment today.",
  "brand": {
    "@type": "Brand",
    "name": "Dirt-Less Detailing"
  },
  "offers": {
    "@type": "AggregateOffer",
    "url": "https://www.dirtlessdetailing.com/services/interior",
    "priceCurrency": "USD",
    "lowPrice": "335",
    "highPrice": "425"
  },
  "url": "https://www.dirtlessdetailing.com/services/interior"
};

export default function FullIntEx() {
  return (
    <section className="service-content-container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld, null, 2) }} />
      <HeaderComponent
        imageUrl="/assets/images/interior/driver16.jpg"
        title="Full Interior Cleaning"
        description="Our easy and hassle-free Interior Cleaning Service."
        secondaryUrl="/assets/images/before&afters/badInteriorBA.png"
      />

      <div className="main-content-container">
        <div className="process-container">
          <div style={{ width: "100%" }}>
            <main className="service-main">
              <h2 style={{ marginBottom: 0 }} className="text-large">
                Our Interior Deep Cleaning
              </h2>
              <hr style={{ margin: "0 auto 3rem auto" }} />
              <div className="service-explain">
                <p>
                  The goal of the Full Interior Cleaning package is to restore your interior to its best condition. Your carpet, seats, floor mats, plastics,
                  windows, and all other interior fixtures will be meticulously cleaned.
                </p>
                <p>
                  While we will attempt to remove all stains, many stains could prove to be more challenging to remove, or might not be completely removed. Some
                  won't completely disappear depending on the kind of stain, how long it has been sitting, and the material the stain is on.
                </p>
                <p>
                  Taking us by surprise is difficult. We will not think that your interior is too dirty. We've seen hundreds of different interiors, and have
                  all the necessary tools for every situation.
                </p>
                <p>
                  Need the exterior done as well? Feel free to book an interior and exterior detail, we will get your vehicle looking like new in just one day!
                  Check out our exterior decon wash{" "}
                  <a href="/services/exterior" className="aside-link">
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
                  <span className="accent-orange bold">Full Interior</span> Pricing
                </h3>
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>
              <PricingComponent shortTitle="interior" serviceType="interior" addons="fullInterior" />
            </div>

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
                  <h4 className="step-title">Carpet Reconditioning</h4>
                  <p className="step-desc">Using our wide array of carpet cleaning chemicals, remove & extract all of stains that we can.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">4</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Door Jambs</h4>
                  <p className="step-desc">Thoroughly clean and rinse out all cracks and crevices in the door jambs.</p>
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
                  <h4 className="step-title flex">
                    Interior Spill Guard Coating{" "}
                    <a href="/services/interior-spill">
                      <img src="../assets/icons/linking.png" alt="external link" className="icon-24" />
                    </a>
                  </h4>
                  <p className="step-desc">
                    Upgrade to our Spill Guard Service to have us apply a 1-year interior ceramic coating to all surfaces in the vehicle. This is PERFECT for
                    cars with kids, pets, or daily coffee trips with the occasional spills as cleaning it will now be easier. See more info{" "}
                    <a href="/services/interior-spill" className="aside-link">
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

            <div className="preview-container">
              <motion.a initial="rest" whileHover="hover" variants={previewParentVariation} href="/gallery/interior" className="gallery-preview">
                <motion.img
                  variants={imgVariation1}
                  src="/assets/images/interior/door1.jpg"
                  alt="Clean door panel of a car"
                  className="w-full h-[100px] object-cover rounded-xl"
                />
                <motion.img
                  variants={imgVariation2}
                  src="/assets/images/interior/driver5.jpg"
                  alt="Clean Mazda interior from the drivers side"
                  className="w-full h-[100px] object-cover rounded-xl"
                />
                <motion.img
                  variants={imgVariation3}
                  src="/assets/images/interior/doorRenegade.jpg"
                  alt="The door panel of a cleaned jeep renegade"
                  className="w-full h-[100px] object-cover rounded-xl"
                />
                <motion.img
                  variants={imgVariation4}
                  src="/assets/images/interior/driver16.jpg"
                  alt="View inside the drivers side of a cleaned jeep renegade"
                  className="w-full h-[100px] object-cover rounded-xl"
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
