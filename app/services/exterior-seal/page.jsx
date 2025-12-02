"use client";
import React, { useState, useEffect } from "react";
import PricingComponent from "../../components/PricingComponent";
import HeaderComponent from "../../components/HeaderComponent";
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
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import FaqItem from "../../components/FaqItem";
import { motion } from "framer-motion";
import BaseSchema from "../../jsonSchemas/BaseSchema";

export default function ExteriorSeal() {
  const [expanded, setExpanded] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 979) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  }, []);

  const faqItems = [
    {
      title: "How do I maintain my Ceramic Coating?",
      description: (
        <div>
          We have a full Ceramic Coating Maintenance Guide available on our{" "}
          <a href="/products?category=Ceramic" className="text-blue-500 hover:underline">
            Products page
          </a>
          , which includes everything you need to know about maintaining your ceramic coating, including recommended products and techniques!
        </div>
      )
    }
  ];

  return (
    <section className="service-content-container">
      <BaseSchema
        serviceImage="/assets/images/correction/teslaclean.jpg"
        url="https://www.dirtlessdetailing.com/services/exterior-seal"
        makesOffer={{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Seal & Shine",
            "description":
              "Experience a showroom shine and unparalleled protection with our Exterior Seal and Shine, ensuring your car gleams like new while safeguarding its finish.",
            "areaServed": "Buckley, Bonney Lake, and surrounding areas.",
            "serviceType": "Paint Correction and Ceramic Coating"
          }
        }}
      />
      <HeaderComponent
        imageUrl="/assets/images/correction/teslaclean.jpg"
        title="Exterior Seal and Shine"
        description="Our tried and true wash with a corrective polish, and even stronger Ceramic Spray coating."
        secondaryUrl="/assets/images/before&afters/f150SealShineBA.jpg"
      />

      <div className="main-content-container">
        <div className="process-container">
          <div style={{ width: "100%" }}>
            <div>
              <div className="pricing__heading-container">
                <h3 className="pricing__heading">
                  <span className="text-accent bold">Exterior Seal & Shine</span> Pricing
                </h3>
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>
              <PricingComponent serviceType="exterior" shortTitle="exteriorseal" addons="correction" />
            </div>

            <br className="extra-space" />

            <p style={{ fontSize: "2rem", margin: 0, color: "white" }}>End Results</p>
            <h3 className="pricing__heading">Clean, Shiny, and Protected.</h3>
            <p className="pricing__subtext">With light scratches removed and a year of protection applied your car will shine like never before!</p>
            <div className="w-11/12 lg:w-3/4 max-w-[1200px] mx-auto">
              <BeforeAfterSlider
                beforeImage="/assets/images/before&afters/beforeMazda3.jpg"
                afterImage="/assets/images/before&afters/afterMazda3.jpg"
                aspectRatio="16/9"
              />
            </div>

            <br className="extra-space" />

            <main className="w-full text-white my-0 mx-auto text-center p-4">
              <h2 style={{ marginBottom: 0 }} className="text-large">
                Our Exterior Seal & Shine Service
              </h2>
              <hr style={{ margin: "0 auto 3rem auto" }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">More Than Just a Wash and Wax</span>
                  </h3>
                  <p className="leading-relaxed">
                    This service is right between a basic wash and full paint correction. If your paint has lost its glow or developed light swirl marks, this
                    is where we bring it back to life. After our thorough decon wash, we clay your paint to remove embedded contaminants, then perform light
                    polishing to restore depth and gloss. Finally, we top it with up to a year of ceramic protection that makes future maintenance easier for
                    you.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">The Perfect Approach for Daily Drivers</span>
                  </h3>
                  <p className="leading-relaxed">
                    Not every car needs in depth paint correction, but every car benefits from proper preparation and protection. Our light polishing step
                    removes minor imperfections and swirl marks while preparing the surface for coating adhesion. We've spent years perfecting our prep work and
                    application techniques because we know that proper foundation is everything when it comes to long-lasting results.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Get All the Ceramic Coating Benefits</span>
                  </h3>
                  <p className="leading-relaxed">
                    Our year-long ceramic coating makes your car easier to wash, more resistant to water spots, and better protected against environmental
                    damage. Plus, we coat your windshield, wheels, and trim - not just the paint providing all these benefits on the entire vehicle.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Annual Maintenance That Works</span>
                  </h3>
                  <p className="leading-relaxed">
                    This is the perfect yearly refresh for any vehicle, whether it's previously been coated or not. It removes the wear and contamination that
                    builds up over time while adding fresh protection for the year ahead. Your car will look better, stay cleaner longer, and be easier to
                    maintain. <br /> If you had us coat your car in the past, give us a call and we'll figure out a price and plan to maintain your coating!
                  </p>
                </div>
              </div>

              {/* Call-to-action section */}
              <div className="mt-8 p-3 lg:p-6 bg-zinc-800 rounded-lg border border-zinc-900">
                <p className="text-center">
                  Now's the perfect time to book a interior cleaning as well. Check out our current offers and pricing on our full interior detail{" "}
                  <a href="/services/interior" className="text-blue-600 hover:text-blue-700 font-medium underline">
                    here
                  </a>
                  !
                </p>
              </div>
            </main>

            <br className="extra-space" />

            <h2 className="cleaning-process-title pb-8">Our Exterior Seal & Shine Process</h2>
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
                    Perform our polishing procedure removing many lighter scratches and swirls from your paint. We also go over all of the glass to remove any
                    watermarks that have built up.
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
                    Apply the 1-year ceramic coating. At this stage we'll also apply our windshield, trim, headlight, and wheel coatings to protect your entire
                    vehicle!
                  </p>
                </div>
              </motion.li>
              <motion.li className="item" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">8</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Final Touches</h4>
                  <p className="step-desc">Dress the tires and wheel wells</p>
                </div>
              </motion.li>
              <motion.li className="item item-disabled" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number" style={{ border: "2px solid #aaa" }}>
                    9
                  </h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title flex line-through">
                    All this and more!{" "}
                    <a href="/services/exterior-correct">
                      <ExternalLink color="#3b82f6" size={24} className="mt-1 ml-1" />
                    </a>
                  </h4>
                  <p className="step-desc">
                    If you opt for our Exterior Correct and Protect package you get all of these services, a 2-stage paint correction (removes more & deeper
                    scratches), and a 3 year Ceramic Coating, leaving you with up to 2 extra years of protection! See more info{" "}
                    <a href="/services/exterior-correct" className="text-blue-500">
                      here
                    </a>
                    .
                  </p>
                </div>
              </motion.li>
            </motion.ol>

            <br className="extra-space" />

            <div className="general-container new-heading-container font-bold text-white">
              <h3 style={{ margin: 0, width: "auto", padding: 0 }} className="new-heading new-heading-center text-4xl lg:text-5xl">
                Seal & Shine FAQ's
              </h3>
              <p className="max-w-[500px] mx-auto text-center my-0 font-normal pb-8">
                Answers to the questions we most commonly get about this service, please reach out if you have other questions!
              </p>
            </div>
            <section className="flex flex-col items-center xl:flex-row w-11/12 justify-center gap-8 xl:w-2/3">
              <div className="flex flex-col gap-6 w-full calc text-left text-white">
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
            </section>

            <br className="extra-space" />

            <div className="preview-container">
              <motion.a initial="rest" whileHover="hover" variants={previewParentVariation} href="/gallery/seal" className="gallery-preview">
                <motion.div variants={imgVariation1} className="relative w-full h-[100px] rounded-xl">
                  <Image
                    variants={imgVariation1}
                    src="/assets/images/sealshine/sprinter6.jpg"
                    alt="Sprinter van after our Seal and Shine service"
                    fill
                    sizes="275px"
                    className="object-cover rounded-xl"
                  />
                </motion.div>
                <motion.div variants={imgVariation2} className="relative w-full h-[100px] rounded-xl">
                  <Image
                    variants={imgVariation2}
                    src="/assets/images/sealshine/audiSeal3.jpg"
                    alt="Audi S4 with a fresh 1 year coating and polish"
                    fill
                    sizes="275px"
                    className="object-cover rounded-xl"
                  />
                </motion.div>
                <motion.div variants={imgVariation3} className="relative w-full h-[100px] rounded-xl">
                  <Image
                    variants={imgVariation3}
                    src="/assets/images/sealshine/beamer1.jpg"
                    alt="BMW on a foggy morning with our ozone machine running"
                    fill
                    sizes="275px"
                    className="object-cover rounded-xl"
                  />
                </motion.div>
                <motion.div variants={imgVariation4} className="relative w-full h-[100px] rounded-xl">
                  <Image
                    variants={imgVariation4}
                    src="/assets/images/sealshine/porscheRearL.jpg"
                    alt="Porsche from the rear left"
                    fill
                    sizes="275px"
                    className="object-cover rounded-xl"
                  />
                </motion.div>
              </motion.a>

              <div className="preview-content">
                <h4>
                  See more finished{" "}
                  <a href="/gallery/seal" className="text-blue-500 inline-block">
                    results <ExternalLink className="inline-block" />
                  </a>
                </h4>
                <p>
                  Check out our Seal & Shine gallery page, showing off some of the great results we've gotten over the years! See it{" "}
                  <a href="/gallery/seal" className="text-blue-500">
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
