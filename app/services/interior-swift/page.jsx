"use client";
import PricingComponent from "../../../utils/PricingComponent";
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
  "name": "Swift Interior Detail",
  "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/6d1c1456-97c0-4c35-d58a-ed3c0d576a00/public",
  "description":
    "Our Swift Interior Detail is our new service tailored to giving you a quick, easy, and budget friendly option to completely revamp your vehicles interior! Contact us to schedule your appointment today.",
  "brand": {
    "@type": "Brand",
    "name": "Dirt-Less Detailing"
  },
  "offers": {
    "@type": "AggregateOffer",
    "url": "https://www.dirtlessdetailing.com/services/interior-swift",
    "priceCurrency": "USD",
    "lowPrice": "175",
    "highPrice": "225"
  },
  "url": "https://www.dirtlessdetailing.com/services/interior-swift"
};

export default function FullIntEx() {
  return (
    <section className="service-content-container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld, null, 2) }} />
      <HeaderComponent
        mainUrl={"0e2bc8e9-28e8-4888-200b-86674d466600"}
        title="Swift Interior Detail"
        description="Our Swift Interior Detail is the fastest way to get a clean and conditioned interior!"
        secondaryUrl={"07ea2f2e-5908-49b9-21d6-216bad2f8b00"}
      />

      <div className="main-content-container">
        <div className="process-container">
          <div style={{ width: "100%" }}>
            <main className="service-main">
              <h2 style={{ marginBottom: 0 }} className="text-large">
                Quick and Easy Interior Detailing
              </h2>
              <hr style={{ margin: "0 auto 3rem auto" }} />
              <div className="service-explain">
                <p>
                  Our Swift Interior Detail is a package aimed at vehicles that just need a simple maintenance, or vehicles that you don't want to be perfect
                  without the cost of ultra deep cleaning from our full interior package. This service starts with us blowing out the hard to reach areas then
                  giving the interior a good vacuuming.
                </p>
                <p>
                  The Swift Interior Detail also includes all interior surfaces being wiped down thoroughly, such as dashboards, consoles, and door panels. For
                  this step we use a product that allows us to clean, and condition all in one step, saving us time and you money! All your interior surfaces
                  will look and feel refreshed!
                </p>
                <p>
                  If there are minor stains or just a couple of spots don't worry! We won't charge you any extra, just let us know any problem areas you want us
                  to target and we'll get them taken care of!
                </p>
                <p>
                  <span className="special-package">NOTE:</span> If you are looking for (or need) a more in depth interior detailing experience, take a look at
                  our{" "}
                  <a href="/services/interior" className="aside-link">
                    Full Interior Detail
                  </a>
                  !
                </p>
              </div>
            </main>
            <br className="extra-space" />
            <div>
              <div className="pricing__heading-container">
                <h3 className="pricing__heading">
                  <span className="accent-orange bold">Swift Interior</span> Pricing
                </h3>
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>
              <PricingComponent shortTitle="interiorswift" serviceType="interior" addons="interiorSwift" />
            </div>

            <h2 className="cleaning-process-title pb-8">Our Swift Interior Process</h2>
            <motion.ol className="list" variants={containerVariant} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <motion.li className="item" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">1</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Blow Out & Vacuum</h4>
                  <p className="step-desc">Thoroughly blow out and vacuum every crack and crevice of the vehicle.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">2</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Wipe Down</h4>
                  <p className="step-desc">Using a one-step cleaning and conditioning product we'll wipe down all interior surfaces.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">3</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Floormats</h4>
                  <p className="step-desc">We'll vacuum any carpeted floormats, and scrub/wash any rubber floormats.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">4</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Clean Windows</h4>
                  <p className="step-desc">Clean windows to a streak-free finish.</p>
                </div>
              </motion.li>
            </motion.ol>

            <br className="extra-space" />

            <div className="preview-container">
              <motion.a initial="rest" whileHover="hover" variants={previewParentVariation} href="/gallery/interior" className="gallery-preview">
                <motion.img
                  variants={imgVariation1}
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0e2bc8e9-28e8-4888-200b-86674d466600/public"
                  alt="preview"
                  className="preview-img"
                />
                <motion.img
                  variants={imgVariation2}
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/9b9c4f43-bef5-4516-78cf-9fa978743100/public"
                  alt="preview"
                  className="preview-img"
                />
                <motion.img
                  variants={imgVariation3}
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/e7d160ba-aac9-46f5-985d-1a9dc5d0d600/public"
                  alt="preview"
                  className="preview-img"
                />
                <motion.img
                  variants={imgVariation4}
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b1d716fa-888e-48a1-148d-e2cd896b8500/public"
                  alt="preview"
                  className="preview-img"
                />
              </motion.a>
              <div className="preview-content">
                <h4>
                  See more examples of our interior{" "}
                  <a href="/gallery/interior" className="aside-link inline-block">
                    work <SquareArrowOutUpRight className="inline-block" />
                  </a>
                </h4>
                <p>
                  To see more examples of our completed interior work, check out our{" "}
                  <a href="/gallery/interior" className="aside-link">
                    Interior Gallery
                  </a>{" "}
                  page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
