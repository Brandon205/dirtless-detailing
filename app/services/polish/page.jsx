"use client";
import React, { useState, useEffect } from "react";
import PricingComponent from "../../components/PricingComponent";
import HeaderComponent from "../../components/HeaderComponent";
import ImageGallery from "../../components/ImageGallery";
import BeforeAfterSlider from "../../components/ImageSlider";
import { containerVariant, oddVariant, evenVariant } from "../../../utils/animationVariations";
import { ExternalLink } from "lucide-react";
import { GiClayBrick } from "react-icons/gi";
import { FaCarOn } from "react-icons/fa6";
import FaqItem from "../../components/FaqItem";
import { motion } from "framer-motion";
import BaseSchema from "../../jsonSchemas/BaseSchema";

export default function ExteriorPolish() {
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
        url="https://www.dirtlessdetailing.com/services/polish-coat"
        makesOffer={{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Polish & Coat",
            "description":
              "Experience a showroom shine and unparalleled protection with our Exterior Polish & Coat service, ensuring your car gleams like new while safeguarding its finish.",
            "areaServed": "Buckley, Bonney Lake, and surrounding areas.",
            "serviceType": "Paint Polishing and Ceramic Coating"
          }
        }}
      />
      <HeaderComponent
        imageUrl="/assets/images/correction/teslaclean.jpg"
        title="Exterior Polish & Coat"
        description="An even more thorough wash with clay bar decontamination, a corrective polish, and a high-quality ceramic coating."
        secondaryUrl="/assets/images/before&afters/f150polishBA.jpg"
      />

      <div className="main-content-container">
        <div className="process-container">
          <div className="w-full">
            <div className="w-full bg-zinc-800 pb-8">
              <div className="pricing__heading-container">
                <h3 className="pricing__heading">
                  <span className="text-accent bold">Polish & Coat</span> Pricing
                </h3>
                <strong className="pricing__subheading">Select your vehicle size for an estimate.</strong>
              </div>
              <PricingComponent serviceType="exterior" shortTitle="extPolish" addons="correction" />
            </div>

            <br className="extra-space" />

            <main className="w-full text-white my-0 mx-auto text-center p-4">
              <div className="flex flex-col w-full gap-4 lg:w-5/6 mx-auto border-2 border-zinc-500 rounded-lg p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center mb-0 lg:mb-4">
                  <div className="w-11/12 lg:w-3/4 max-w-[1200px] mx-auto">
                    <BeforeAfterSlider
                      beforeImage="/assets/images/before&afters/polishhoodB.jpg"
                      afterImage="/assets/images/before&afters/polishhoodA.jpg"
                      aspectRatio="16/9"
                    />
                  </div>

                  <div className="flex flex-col w-full justify-between min-h-[475px] py-4">
                    <div className="flex flex-col items-start">
                      <h2 className="text-4xl font-bold">Our Exterior Polish & Coat Service</h2>
                      <strong className="text-primary text-bold text-2xl">The Perfect Exterior Middle Ground</strong>
                    </div>
                    <div className="flex items-center my-4">
                      <GiClayBrick color="#f59e0b" size={48} className="mr-4 hidden lg:block flex-shrink-0" />
                      <p className="leading-relaxed text-left text-md">
                        This service is the perfect middle ground for vehicles that have developed light swirl marks and a dull appearance. After a thorough
                        decontamination and clay bar treatment, we perform a light machine polishing step to restore depth and clarity to your clear coat.
                      </p>
                    </div>
                    <div className="flex items-center mb-4">
                      <FaCarOn color="#f59e0b" size={48} className="mr-4 hidden lg:block flex-shrink-0" />
                      <p className="leading-relaxed text-left text-md">
                        We top the restored surface with our 3-year ceramic coating that acts as a durable barrier against environmental damage and water spots.
                        We also give your windshield, exterior glass, and trim that same coating, protecting your entire vehicle. Your car will look better,
                        stay cleaner for longer, and be significantly easier to maintain until the next time you visit.
                      </p>
                    </div>
                    <div className="w-full p-4 bg-zinc-800 rounded-lg border border-zinc-600">
                      <p className="text-left">
                        <span className="font-bold text-md">Ideal for:</span> Daily drivers with light swirl marks or paint that has lost its original depth and
                        "glow."
                      </p>
                    </div>
                  </div>
                </div>
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

            <h2 className="cleaning-process-title pb-8">Our Exterior Polish & Coat Process</h2>
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
                  <h4 className="step-title">Remove tar, sap, iron, and clay bar if needed</h4>
                  <p className="step-desc">
                    Remove any tar, sap, and iron from the exterior. If the paint is rough to the touch after washing, we will also perform a clay bar treatment
                    to remove any remaining contaminants from the paint.
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
                  <h4 className="step-title">Remove scratches, swirl marks, and waterspots</h4>
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
                  <h4 className="step-title">Coat Vehicle</h4>
                  <p className="step-desc">
                    Apply the 3-year ceramic coating. At this stage we'll also apply our windshield, trim, headlight, and wheel coatings to protect your entire
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
                    <a href="/services/correct">
                      <ExternalLink color="#3b82f6" size={24} className="mt-1 ml-1" />
                    </a>
                  </h4>
                  <p className="step-desc">
                    If you opt for our Exterior Correct & Coat package you get all of these services, a 2-stage paint correction (removes more & deeper
                    scratches), and a 3 year Ceramic Coating, leaving you with up to 2 extra years of protection! See more info{" "}
                    <a href="/services/correct" className="text-blue-500">
                      here
                    </a>
                    .
                  </p>
                </div>
              </motion.li>
            </motion.ol>

            <div className="mt-12 mb-6 p-6 lg:p-8 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-lg border border-accent border-opacity-30 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">Not sure if this is the service you need?</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Come by our shop in Buckley, or get in touch with us today, and for no cost at all we can answer your questions.
              </p>
              <p className="text-gray-300 mb-6 text-lg">
                We'll take a look assess what you want and even show you test spots vs our other services on your car so you can see what each service entails
                and the results.
              </p>
              <div className="flex flex-col lg:flex-row gap-8 justify-center">
                <a
                  href="/contact"
                  className="text-white hover:underline text-xl font-semibold flex items-center gap-1 mt-2 bg-primary py-2 px-6 rounded-lg w-max"
                >
                  <span>Contact Page</span>
                </a>
                <a
                  href="sms:+12532529758"
                  className="text-white border-primary border-2 hover:underline text-xl font-semibold flex items-center gap-1 mt-2 py-2 px-6 rounded-lg w-max"
                >
                  <span>Call or Text for a consultation: (252) 252-9758</span>
                </a>
              </div>
            </div>

            <div className="general-container new-heading-container font-bold text-white">
              <h3 style={{ margin: 0, width: "auto", padding: 0 }} className="new-heading new-heading-center text-4xl lg:text-5xl">
                Polish & Coat FAQ's
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

            <p style={{ fontSize: "2rem", margin: 0, color: "white" }}>End Results</p>
            <h3 className="pricing__heading">Clean, Shiny, and Protected.</h3>
            <p className="pricing__subtext">With light scratches removed and a year of protection applied your car will shine like never before!</p>
            <div>
              <ImageGallery
                images={[
                  { src: "/assets/images/polish/36 plymouth.jpg", alt: "Exterior after our Polish & Coat Service" },
                  { src: "/assets/images/polish/audiSeal2.jpg", alt: "Exterior after our Polish & Coat Service" },
                  { src: "/assets/images/polish/beamer2.jpg", alt: "Exterior after our Polish & Coat Service" },
                  { src: "/assets/images/polish/mustangFL.jpg", alt: "Exterior after our Polish & Coat Service" },
                  { src: "/assets/images/polish/redFordPolishers.jpg", alt: "Exterior during our Polish & Coat Service" },
                  { src: "/assets/images/polish/sprinter6.jpg", alt: "Exterior after our Polish & Coat Service" }
                ]}
              />
            </div>

            <div className="pb-8 text-center flex flex-col items-center text-white ">
              <h4 className="text-3xl text-left">
                Check out our{" "}
                <a href="/gallery/polish" className="text-blue-500 inline-block">
                  Polish & Coat Gallery <ExternalLink className="inline-block" />
                </a>{" "}
                for more images.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
