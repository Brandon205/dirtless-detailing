"use client";
import React, { useState, useEffect } from "react";
import PricingComponent from "../../components/PricingComponent";
import MosaicGallery from "../../components/MosaicGallery";
import BeforeAfterSlider from "../../components/ImageSlider";
import { containerVariant, oddVariant, evenVariant } from "../../../utils/animationVariations";
import { motion } from "framer-motion";
import { FaLock } from "react-icons/fa";
import { GiSquareBottle } from "react-icons/gi";
import HeaderComponent from "../../components/HeaderComponent";
import FaqItem from "../../components/FaqItem";
import { ExternalLink, Brush } from "lucide-react";
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
        touch-less car wash will suffice. Just make sure to use the cheapest setting, without any waxes. It is also recommended after the wash to dry the whole
        vehicle with high quality drying towels (We recommend{" "}
        <a href="https://amzn.to/449nFm7" className="text-blue-500" target="_blank" rel="noopener noreferrer">
          The Rag Company's Large Drying Towel
        </a>
        and{" "}
        <a href="https://amzn.to/3uKuqi1" className="text-blue-500" target="_blank" rel="noopener noreferrer">
          Griot's Ceramic Speed Shine
        </a>
        )!
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
        url="https://www.dirtlessdetailing.com/services/correct"
        makesOffer={{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Correct & Coat",
            "description":
              "Elevate your vehicle's appearance and protection with our Correct & Coat service, leaving your car with a mirror-like shine and defense.",
            "areaServed": "Buckley, Bonney Lake, and surrounding areas.",
            "serviceType": "Paint Correction and Ceramic Coating"
          }
        }}
      />
      <HeaderComponent
        imageUrl="/assets/images/correction/genesis3.jpeg"
        title="Exterior Correct & Coat"
        description="The Ultimate Exterior Detail & Protection for your vehicle. Our most extensive package with extra in-depth Paint Correction and a Lifetime Ceramic Coating."
        secondaryUrl="/assets/images/before&afters/scratchesBA.png"
      />

      <div className="main-content-container">
        <div className="process-container">
          <div className="w-full">
            <div className="w-full bg-zinc-800 pb-8">
              <div className="pricing__heading-container">
                <h3 className="pricing__heading">
                  <span className="text-accent bold">Correct & Coat</span> Pricing
                </h3>
                <strong className="pricing__subheading">Select your vehicle size for an estimate.</strong>
              </div>
              <PricingComponent shortTitle="extCorrect" serviceType="exterior" addons="correction" />
            </div>

            <br className="extra-space" />

            <main className="w-full text-white my-0 mx-auto text-center p-4">
              <div className="flex flex-col w-full gap-4 lg:w-5/6 mx-auto border-2 border-zinc-500 rounded-lg p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center mb-0 lg:mb-4">
                  <div className="w-11/12 lg:w-3/4 max-w-[1200px] mx-auto">
                    <BeforeAfterSlider
                      beforeImage="/assets/images/before&afters/scratchesBefore.jpg"
                      afterImage="/assets/images/before&afters/scratchesAfter.jpg"
                      aspectRatio="16/9"
                    />
                  </div>

                  <div className="flex flex-col w-full justify-between min-h-[475px] lg:h-[550px] py-4">
                    <div className="flex flex-col items-start">
                      <h2 className="text-4xl font-bold">Our Correct & Coat Service</h2>
                      <strong className="text-primary text-bold text-2xl">The Ultimate Exterior Detail & Protection</strong>
                    </div>
                    <div className="flex items-center my-4">
                      <FaLock color="#f59e0b" size={48} className="mr-4 hidden lg:block flex-shrink-0" />
                      <p className="leading-relaxed text-left text-md">
                        Correct & Coat is our premier exterior service, utilizing a rigorous 2-stage paint correction process to remove 75-90% of scratches,
                        swirls, and imperfections. We tailor this intensive process to your specific goals, ensuring you get the exact results you want for your
                        investment.
                      </p>
                    </div>
                    <div className="flex items-center mb-4">
                      <GiSquareBottle color="#f59e0b" size={48} className="mr-4 hidden lg:block flex-shrink-0" />
                      <p className="leading-relaxed text-left text-md">
                        The restored paint is then locked in with a professional 3-year ceramic coating, providing a glass-like shine and the best protection
                        against Washington's weather. We choose a 3-year coating specifically because it aligns with a realistic maintenance schedule, allowing
                        us to check in and refresh the surface before new swirls can accumulate.
                      </p>
                    </div>
                    <div className="w-full p-4 bg-zinc-800 rounded-lg border border-zinc-600">
                      <p className="text-left">
                        <span className="font-bold text-md">Ideal for:</span>Owners seeking a flawless, mirror-like finish and the highest level of scratch
                        removal.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-center">
                  Complete the detail! While your car is with us now is the best time to get that neglected interior back in shape! Check out our current offers
                  and pricing on our full interior detail{" "}
                  <a href="/services/interior" className="text-blue-600 hover:text-blue-700 font-medium underline">
                    here
                  </a>
                  !
                </p>
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

            <h2 className="cleaning-process-title pb-8">Our Exterior Correct & Coat Process</h2>
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
                  <h4 className="step-title">Coat Vehicle</h4>
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

            <p style={{ fontSize: "2rem", margin: 0, color: "white" }}>The End Result</p>
            <h3 className="pricing__heading">A brand new look and feel.</h3>
            <p className="pricing__subtext">
              Not just a complete exterior refresh, but now your vehicle has protection against the elements that Washington will throw at it.
            </p>
            <div>
              <MosaicGallery
                images={[
                  { src: "/assets/images/before&afters/seatsBA.jpg", alt: "Car seats before and after" },
                  { src: "/assets/images/interior/bio1281.jpg", alt: "Interior detail" },
                  { src: "/assets/images/interior/centerOldMercedes.jpg", alt: "Center console detail" },
                  { src: "/assets/images/interior/doorRenegade.jpg", alt: "Door panel detail" },
                  { src: "/assets/images/interior/driver11.jpg", alt: "Driver side view" },
                  { src: "/assets/images/interior/driver21.jpg", alt: "Driver side view" }
                ]}
              />
            </div>

            <div className="p-8 text-center flex flex-col items-center text-white ">
              <h4 className="text-3xl text-left">
                Check out our{" "}
                <a href="/gallery/exterior" className="text-blue-500 inline-block">
                  Exterior Gallery <ExternalLink className="inline-block" />
                </a>
              </h4>
              <p className="text-left">
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
    </section>
  );
}
