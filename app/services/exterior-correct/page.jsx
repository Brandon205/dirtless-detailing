"use client";
import React, { useState, useEffect } from "react";
import PricingComponent from "../../../utils/PricingComponent";
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
import HeaderComponent from "../../components/HeaderComponent";
import FaqItem from "../../components/FaqItem";
import { SquareArrowOutUpRight } from "lucide-react";
import "react-medium-image-zoom/dist/styles.css";
import ImageGallery from "../../components/ImageGallery";

const faqItems = [
  {
    title: "Why should I get a Ceramic Coating?",
    description: (
      <div>
        <ul style={{ margin: 0, marginLeft: "1rem" }} className="list-disc">
          <li>
            It is the best protection for your paint, Ceramic coatings increase the hardness of your paint, making it less likely to scratch while washing
          </li>
          <li>Coatings increase the Gloss and Slickness of your paint</li>
          <li>Self cleaning properties: Ceramic coatings easily bead water, dirt gets caught in these beads and will fly off while you're driving!</li>
          <li>Easier to wash and dry. Dirt will wash off with less effort, you can also blow dry 90% of your vehicle because of the water beading.</li>
        </ul>
        <ImageGallery images={[{ src: "/assets/images/showcase/iglcircle.jpg" }]} />
      </div>
    )
  },
  {
    title: "Does a ceramic coating make my vehicle scratch proof?",
    description: <p className="faq-description">Unfortunately no, but it does noticeably increase resistance against light scratches and swirl marks.</p>
  },
  {
    title: "How long will my Ceramic Coating last?",
    description: (
      <p className="faq-description">
        Unlike waxes true ceramic coatings don't just wash off, however, over time your coating can get clogged with contaminants and gloss, slickness, and
        water beading can degrade (for this coating it should stay in good quality for up to 3 years). If you want to maintain all the benefits of your ceramic
        coating we recommend getting at least our{" "}
        <a href="/services/exterior" className="aside-link">
          Exterior Decon Wash
        </a>{" "}
        package bi-annually or annually. This package fully decontaminates and refreshes your ceramic coating back to the day you got it.
      </p>
    )
  },
  {
    title: "Can I still go through car washes?",
    description: (
      <p className="faq-description">
        We never recommend going through a car wash as they can reduce the gloss slickness and beading of your coating prematurely. However in a pinch a
        touch-less car wash will suffice. Just make sure to use the cheapest setting, without any wax's. It is also recommended after the wash to dry the whole
        vehicle with high quality drying towels (We recommend{" "}
        <a href="https://amzn.to/449nFm7" className="aside-link" target="_blank" rel="noopener">
          The Rag Company's Large Drying Towel
        </a>
        ) and{" "}
        <a href="https://amzn.to/3uKuqi1" className="aside-link" target="_blank" rel="noopener">
          Griot's Ceramic Speed Shine
        </a>
        !
      </p>
    )
  },
  {
    title: "How should I wash my car then?",
    description: (
      <p>
        You can check out our{" "}
        <a href="/products/ceramic-coating" className="aside-link">
          DIY Ceramic Maintenance
        </a>{" "}
        page to see all the products and steps that we recommend for a complete wash and decontamination all for under $150. You can also ask us about our
        maintenance services, they don't cost too much per service plus they include the interior if you have had any one of our Interior Detail services done
        before!
      </p>
    )
  }
];

const jsonld = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Exterior Correct & Protect",
  "image": "/assets/images/correction/genesis2.jpeg",
  "description":
    "Elevate your vehicle's appearance and protection with our Correct and Protect service, leaving your car with a mirror-like shine and defense.",
  "brand": {
    "@type": "Brand",
    "name": "Dirt-Less Detailing"
  },
  "offers": {
    "@type": "AggregateOffer",
    "url": "https://www.dirtlessdetailing.com/services/exterior-correct",
    "priceCurrency": "USD",
    "lowPrice": "1250",
    "highPrice": "1750"
  },
  "url": "https://www.dirtlessdetailing.com/services/exterior-correct"
};

export default function ExteriorCorrect() {
  const [expanded, setExpanded] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 979) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  }, []);

  return (
    <section className="service-content-container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld, null, 2) }} />
      <HeaderComponent
        imageUrl="/assets/images/correction/genesis3.jpeg"
        title="Exterior Correct and Protect"
        description="The Ultimate Exterior Detail & Protection for your vehicle. Our most extensive package with in-depth Paint Correction and a Lifetime Ceramic Coating."
        secondaryUrl="/assets/images/correction/ferrariBadge.jpg"
      />

      <div className="main-content-container">
        <div className="process-container">
          <div style={{ width: "100%" }}>
            <main className="service-main">
              <h2 style={{ marginBottom: 0 }} className="text-large">
                Exterior Correct and Protect
              </h2>
              <hr style={{ margin: "0 auto 3rem auto" }} />
              <div className="service-explain">
                <p>
                  This is our top of the line exterior service. If you want to remove years of wear and scratching, and provide the best protection available,
                  then this is the service for you. We start off with our full{" "}
                  <a href="/services/exterior" className="aside-link">
                    Exterior Decon Wash
                  </a>{" "}
                  to remove any contaminants. From there, we refine your paint by performing an in-depth polishing step removing as many imperfections we safely
                  can.
                </p>
                <p>
                  The it's time for the ceramic coating! To provide to best protection and coverage on the paint coating, we coat your whole vehicle with the
                  hardest, most resilient ceramic coatings on the market. This includes paint, trim, lights, glass, and wheels.
                </p>
                <p>
                  Feel free to contact us to get any of your questions answered, ceramic coatings are somewhat new so not everyone knows all that they can do.
                  Give us a call or check out our{" "}
                  <a href="#faq" className="aside-link">
                    FAQ
                  </a>{" "}
                  section at the bottom of this page to get your questions answered!
                </p>
                <p>
                  <span className="special-package">Note:</span> This is one of the services that we require you to drop off your car at our shop for. We will
                  most likely need to keep you car overnight as the ceramic coating has a cure time before it's ready to be exposed to the elements. Also, our
                  shop has proper lighting to ensure that we don't miss any spots on the paint.
                </p>
              </div>
            </main>
            <br className="extra-space" />
            <br className="extra-space" />

            <div>
              <div className="pricing__heading-container">
                <h3 className="pricing__heading">
                  <span className="accent-orange bold">Correct and Protect</span> Pricing
                </h3>
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>
              <PricingComponent shortTitle="exteriorcorrect" serviceType="exterior" addons="correction" />
            </div>

            <h2 className="cleaning-process-title pb-8">Our Exterior Correct and Protect Process</h2>
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
              <motion.li className="item" variants={oddVariant}>
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
                  <h4 className="step-title">Dry Vehicle</h4>
                  <p className="step-desc">Dry the whole vehicle with drying towels and air blowers.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">6</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Remove scratches and watermarks</h4>
                  <p className="step-desc">
                    Perform a 2-stage paint correction removing up to 85%-90% of scratches and greatly reducing if not removing the look of deeper scratches. We
                    also go over the glass as well removing watermarks and light scratches.
                  </p>
                </div>
              </motion.li>
              <motion.li className="item" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">7</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Protect Vehicle</h4>
                  <p className="step-desc">
                    Apply our 3-year Ceramic Coating to the paint. At this point we also coat the windshield, wheels, and the trim. Leaving no part of your car
                    that's uncoated!
                  </p>
                </div>
              </motion.li>
              <motion.li className="item" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">8</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Final Touches</h4>
                  <p className="step-desc">Dress tires with ceramic tire shine, and also dress the wheel wells.</p>
                </div>
              </motion.li>
            </motion.ol>

            <br className="extra-space" />

            <p style={{ fontSize: "2rem", margin: 0, color: "white" }}>End Results</p>
            <h3 className="pricing__heading">A brand new look and feel.</h3>
            <p className="pricing__subtext">
              Not just a complete exterior refresh, but now your vehicle has protection against the elements that Washington throws at us.
            </p>
            <div className="w-11/12 lg:w-3/4 max-w-[1200px] mx-auto">
              <BeforeAfterSlider
                beforeImage="/assets/images/before&afters/scratchesBefore.jpg"
                afterImage="/assets/images/before&afters/scratchesAfter.jpg"
                aspectRatio="16/9"
              />
            </div>

            <div className="preview-container">
              <motion.a initial="rest" whileHover="hover" variants={previewParentVariation} href="/gallery/correct" className="gallery-preview">
                <motion.img
                  variants={imgVariation1}
                  src="/assets/images/correction/goodguystruck.jpg"
                  alt="Truck we polished that won at the Good Guys car show"
                  className="w-full h-[100px] object-cover rounded-xl"
                />
                <motion.img
                  variants={imgVariation2}
                  src="/assets/images/correction/ceramicBeads1.jpg"
                  alt="Water beading on ceramic coated glass"
                  className="w-full h-[100px] object-cover rounded-xl"
                />
                <motion.img
                  variants={imgVariation3}
                  src="/assets/images/correction/waterbeading1.jpg"
                  alt="Water beading on a ceramic coated car"
                  className="w-full h-[100px] object-cover rounded-xl"
                />
                <motion.img
                  variants={imgVariation4}
                  src="/assets/images/correction/genesis2.jpeg"
                  alt="Infinity Genesis with Ceramic Coating"
                  className="w-full h-[100px] object-cover rounded-xl"
                />
              </motion.a>
              <div className="preview-content">
                <h4>
                  See examples of our{" "}
                  <a href="/gallery/correct" className="aside-link inline-block">
                    work <SquareArrowOutUpRight className="inline-block" />
                  </a>
                </h4>
                <p>
                  See the stunning results that you'll get from our Correct and Protect service, water will be beading straight off of your whole car! Check it
                  out{" "}
                  <a href="/gallery/correct" className="aside-link">
                    here
                  </a>
                  .
                </p>
              </div>
            </div>

            <div id="faq" style={{ width: "90%", margin: "0 auto", paddingTop: "2rem" }}>
              <div className="new-heading-container text-white">
                <strong className="above-heading text-3xl">Ceramic Coating FAQ</strong>
                <h3 className="new-heading text-xl lg:text-2xl">Answers for the most commonly asked questions about ceramic coatings.</h3>
              </div>
              <div className="faq-container" style={{ color: "white" }}>
                {faqItems.map((item, i) => (
                  <FaqItem
                    key={i}
                    i={i}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    title={item.title}
                    description={item.description}
                    isMobile={smallScreen}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
