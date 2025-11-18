"use client";
import React, { useState, useEffect } from "react";
import PricingComponent from "../../components/PricingComponent";
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
import Image from "next/image";
import HeaderComponent from "../../components/HeaderComponent";
import FaqItem from "../../components/FaqItem";
import { ExternalLink } from "lucide-react";
import "react-medium-image-zoom/dist/styles.css";
import ImageGallery from "../../components/ImageGallery";
import BaseSchema from "../../jsonSchemas/BaseSchema";

const faqItems = [
  {
    title: "What is a Ceramic Coating and why should I get one?",
    description: (
      <div>
        <ul style={{ margin: 0, marginLeft: "1rem" }} className="list-disc">
          <li>
            Besides PPF it is the best protection for your paint, ceramic coatings increase the hardness of your paint, making it less likely to scratch while
            washing.
          </li>
          <li>
            Coatings increase the Gloss and Slickness of your paint, which can help remove dirt before it gets trapped under your wash mitts leading to
            scratches.
          </li>
          <li>
            Self cleaning properties: ceramic coatings easily bead water, dirt gets caught in these beads and will fly off while you're driving! Your windshield
            will bead water like never before as well!
          </li>
          <li>
            It will be far easier to wash and dry your car. Dirt will wash off with less effort, you can also blow dry 90% of your vehicle when you're done
            washing.
          </li>
        </ul>
        <ImageGallery images={[{ src: "/assets/images/showcase/iglcircle.jpg" }]} />
      </div>
    )
  },
  {
    title: "How do I wash/maintain a Ceramic Coating?",
    description: (
      <div>
        We have a full Ceramic Coating Maintenance Guide available on our{" "}
        <a href="/products?category=Ceramic" className="text-blue-500 hover:underline">
          Products page
        </a>
        , which includes everything you need to know about maintaining your ceramic coating, including recommended products and techniques!
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
        <a href="/services/exterior" className="text-blue-500">
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
        <a href="https://amzn.to/449nFm7" className="text-blue-500" target="_blank" rel="noopener noreferrer">
          The Rag Company's Large Drying Towel
        </a>
        ) and{" "}
        <a href="https://amzn.to/3uKuqi1" className="text-blue-500" target="_blank" rel="noopener noreferrer">
          Griot's Ceramic Speed Shine
        </a>
        !
      </p>
    )
  }
];

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
      <BaseSchema
        serviceImage="/assets/images/correction/genesis3.jpeg"
        url="https://www.dirtlessdetailing.com/services/exterior-correct"
        makesOffer={{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Correct & Protect",
            "description":
              "Elevate your vehicle's appearance and protection with our Correct and Protect service, leaving your car with a mirror-like shine and defense.",
            "areaServed": "Buckley, Bonney Lake, and surrounding areas.",
            "serviceType": "Paint Correction and Ceramic Coating"
          }
        }}
      />
      <HeaderComponent
        imageUrl="/assets/images/correction/genesis3.jpeg"
        title="Exterior Correct and Protect"
        description="The Ultimate Exterior Detail & Protection for your vehicle. Our most extensive package with in-depth Paint Correction and a Lifetime Ceramic Coating."
        secondaryUrl="/assets/images/before&afters/scratchesBA.png"
      />

      <div className="main-content-container">
        <div className="process-container">
          <div style={{ width: "100%" }}>
            <div>
              <div className="pricing__heading-container">
                <h3 className="pricing__heading">
                  <span className="text-amber-500 bold">Correct & Protect</span> Pricing
                </h3>
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>
              <PricingComponent shortTitle="exteriorcorrect" serviceType="exterior" addons="correction" />
            </div>

            <br className="extra-space" />

            <p style={{ fontSize: "2rem", margin: 0, color: "white" }}>The End Result</p>
            <h3 className="pricing__heading">A brand new look and feel.</h3>
            <p className="pricing__subtext">
              Not just a complete exterior refresh, but now your vehicle has protection against the elements that Washington will throw at it.
            </p>
            <div className="w-11/12 lg:w-3/4 max-w-[1200px] mx-auto">
              <BeforeAfterSlider
                beforeImage="/assets/images/before&afters/scratchesBefore.jpg"
                afterImage="/assets/images/before&afters/scratchesAfter.jpg"
                aspectRatio="16/9"
              />
            </div>

            <br className="extra-space" />

            <main className="w-full text-white my-0 mx-auto text-center p-4">
              <h2 style={{ marginBottom: 0 }} className="text-large">
                Our Exterior Correct & Protect Service
              </h2>
              <hr style={{ margin: "0 auto 3rem auto" }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Expert Paint Correction Services</span>
                  </h3>
                  <p className="leading-relaxed">
                    This is our top-tier exterior service. We've spent countless hours learning advanced techniques and understanding how different paints
                    respond to different products and pads. Our results speak for themselves - we consistently deliver the kind of paint correction that other
                    shops can struggle to achieve.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">The Results You Want</span>
                  </h3>
                  <p className="leading-relaxed">
                    We understand that every vehicle is different, and everyone's desired outcome is different. Some want a deep, mirror-like shine, while other
                    people may just want to remove light scratches and swirls. We tailor our paint correction process to your specific goals, ensuring you get
                    the results you want for a price you're willing to pay.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Two-Stage Correction That Delivers</span>
                  </h3>
                  <p className="leading-relaxed">
                    {/* Our full paint correction process removes 80-90% of scratches and swirl marks through careful two-stage polishing. We don't just make bold
                    claims - we have the skills, equipment, and techniques to back them up. Every panel gets individual attention, and we know when to push
                    harder and when to stop before causing damage. Your paint isn't practice material - it deserves someone who knows what they're doing. */}
                    As well as honing in our own skills, we've also met and worked with some of the best in the industry learning from them and refining our
                    techniques even further. Our full paint correction process can remove 80-90% of scratches and swirl marks leaving your paint looking
                    stunning. Topped with the ceramic coating it's sure to have a glass and shine like never before!
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Why Only a 3-Year Coating?</span>
                  </h3>
                  <p className="leading-relaxed">
                    We could sell you a 5 or 10-year coating, but we know that typically after three years, chances are you will have collected some scratches
                    and swirls or plastics may start fading again. For yearly maintenance on your coating we'd recommend getting in touch with us and we'll plan
                    a yearly modified version of our{" "}
                    <a href="/services/exterior-seal" className="text-blue-600 hover:text-blue-700 font-medium underline">
                      Seal & Shine
                    </a>{" "}
                    package where we'll go in, check on the coating, polish any areas that need fixing up, and re-coat them for less than the cost of a Seal &
                    Shine Service.
                  </p>
                </div>
              </div>

              {/* Call-to-action section */}
              <div className="mt-8 p-3 lg:p-6 bg-zinc-800 rounded-lg border border-zinc-900">
                <p className="text-center">
                  Now's the perfect time to book a interior cleaning as well. Check out our current offers and pricing on our Full Interior Detail{" "}
                  <a href="/services/interior" className="text-blue-600 hover:text-blue-700 font-medium underline">
                    here
                  </a>
                  !
                </p>
              </div>
            </main>

            <br className="extra-space" />

            <h2 className="cleaning-process-title pb-8">Our Exterior Correct & Protect Process</h2>
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

            <br className="extra-space" />

            <div id="faq" style={{ width: "90%", margin: "0 auto", paddingTop: "2rem" }}>
              <div className="new-heading-container text-white">
                <strong className="above-heading text-3xl">Ceramic Coating FAQ</strong>
                <h3 className="new-heading text-xl lg:text-2xl">Answers for the most commonly asked questions about ceramic coatings.</h3>
              </div>
              <div className="faq-container" style={{ color: "white" }} itemScope itemType="https://schema.org/FAQPage">
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

            <div className="preview-container">
              <motion.a initial="rest" whileHover="hover" variants={previewParentVariation} href="/gallery/correct" className="gallery-preview">
                <motion.div variants={imgVariation1} className="relative w-full h-[100px] rounded-xl">
                  <Image
                    variants={imgVariation1}
                    src="/assets/images/correction/goodguystruck.jpg"
                    alt="Truck we polished that won at the Good Guys car show"
                    fill
                    sizes="275px"
                    className="object-cover rounded-xl"
                  />
                </motion.div>
                <motion.div variants={imgVariation2} className="relative w-full h-[100px] rounded-xl">
                  <Image
                    variants={imgVariation2}
                    src="/assets/images/correction/ceramicBeads1.jpg"
                    alt="Water beading on ceramic coated glass"
                    fill
                    sizes="275px"
                    className="object-cover rounded-xl"
                  />
                </motion.div>
                <motion.div variants={imgVariation3} className="relative w-full h-[100px] rounded-xl">
                  <Image
                    variants={imgVariation3}
                    src="/assets/images/correction/waterbeading1.jpg"
                    alt="Water beading on a ceramic coated car"
                    fill
                    sizes="275px"
                    className="object-cover rounded-xl"
                  />
                </motion.div>
                <motion.div variants={imgVariation4} className="relative w-full h-[100px] rounded-xl">
                  <Image
                    variants={imgVariation4}
                    src="/assets/images/correction/genesis2.jpeg"
                    alt="Infinity Genesis with Ceramic Coating"
                    fill
                    sizes="275px"
                    className="object-cover rounded-xl"
                  />
                </motion.div>
              </motion.a>
              <div className="preview-content">
                <h4>
                  See more examples of our{" "}
                  <a href="/gallery/correct" className="text-blue-500 inline-block">
                    work <ExternalLink className="inline-block" />
                  </a>
                </h4>
                <p>
                  See the stunning results that you'll get from our Correct & Protect service, water will be beading straight off of your whole car! Check them
                  out{" "}
                  <a href="/gallery/correct" className="text-blue-500">
                    here
                  </a>
                  !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
