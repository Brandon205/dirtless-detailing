"use client";
import { useState, useEffect } from "react";
import PricingComponent from "../../components/PricingComponent";
import HeaderComponent from "../../components/HeaderComponent";
import BeforeAfterSlider from "../../components/ImageSlider";
import ImageGallery from "../../components/ImageGallery";
import FaqItem from "../../components/FaqItem";
import { containerVariant, oddVariant, evenVariant } from "../../../utils/animationVariations";
import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";
import { RiResetLeftLine } from "react-icons/ri";
import { ExternalLink } from "lucide-react";
import BaseSchema from "../../jsonSchemas/BaseSchema";

export default function Exterior() {
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
    },
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
              Self cleaning properties: ceramic coatings easily bead water, dirt gets caught in these beads and will fly off while you're driving! Your
              windshield will bead water like never before as well!
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
          We have a full Ceramic Coating Maintenance Guide available at the bottom of our{" "}
          <a href="/products?category=Ceramic" className="text-blue-500 hover:underline">
            Ceramic Products Page
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
          water beading can degrade (for this coating it should stay in good quality for up to 3 years). We recommend getting at least our{" "}
          <a href="/services/exterior" className="text-blue-500">
            Exterior Decon Wash
          </a>{" "}
          service with the <strong>Ceramic Maintenance Addon</strong> done bi-annually or annually. This package fully decontaminates and refreshes your ceramic
          coating as well as has us top any spots that might be wearing down if needed.
        </p>
      )
    },
    {
      title: "Can I still go through car washes?",
      description: (
        <p className="faq-description">
          We never recommend going through a car wash as they can reduce the gloss slickness and beading of your coating prematurely. However in a pinch a
          touch-less car wash will suffice. Just make sure to use the cheapest setting, without any waxes. We also recommend to make sure that all the edges and
          corners are blown out and dried (We recommend{" "}
          <a href="https://amzn.to/41db9SY" className="text-blue-500" target="_blank" rel="noopener noreferrer">
            The Rag Company's Large Drying Towel
          </a>
          ).
        </p>
      )
    }
  ];
  return (
    <section className="service-content-container">
      <BaseSchema
        serviceImage="/assets/images/exterior/subaruWashed.jpeg"
        url="https://www.dirtlessdetailing.com/services/exterior"
        makesOffer={{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wash & Coat",
            "description":
              "Our full Decon Wash plus a ceramic coating that provides 3 years of protection for your paint. The best way to keep your car looking great with regular maintenance washes.",
            "areaServed": "Buckley, Bonney Lake, and surrounding areas.",
            "serviceType": "Car Wash & Ceramic Coating"
          }
        }}
      />
      <HeaderComponent
        imageUrl="/assets/images/exterior/newLexusSuv.jpg"
        title="Wash & Coat"
        description="Our full Decon Wash plus a ceramic coating that provides 3 years of protection for your paint. The best way to keep your car looking great with regular maintenance washes."
        secondaryUrl="/assets/images/exterior/porscheMacan2.jpg"
      />

      <div className="main-content-container">
        <div className="process-container">
          <div className="w-full">
            <div className="w-full bg-zinc-800 pb-8">
              <div className="pricing__heading-container">
                <h3 className="pricing__heading">
                  <span className="text-accent bold">Wash & Coat</span> Pricing
                </h3>
                <strong className="pricing__subheading">Select your vehicle size for an estimate.</strong>
              </div>
              <PricingComponent shortTitle="extWashCoat" serviceType="exterior" addons="washCoat" />
            </div>

            <br className="extra-space" />

            <main className="w-full text-white my-0 mx-auto text-center p-4">
              <div className="flex flex-col w-full gap-4 lg:w-5/6 mx-auto border-2 border-zinc-500 rounded-lg p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center mb-0 lg:mb-4">
                  <div className="w-11/12 lg:w-3/4 max-w-[1200px] mx-auto">
                    <BeforeAfterSlider
                      beforeImage="/assets/images/before&afters/fordExteriorBefore.jpg"
                      afterImage="/assets/images/before&afters/fordExteriorAfter.jpg"
                      aspectRatio="16/9"
                    />
                  </div>

                  <div className="flex flex-col w-full justify-between min-h-[475px] py-4">
                    <div className="flex flex-col items-start">
                      <h2 className="text-4xl font-bold">Our Wash & Coat Service</h2>
                      <strong className="text-primary text-bold text-2xl">The easiest way to get your car protected.</strong>
                    </div>
                    <div className="flex items-center my-4">
                      <FaShieldAlt color="#f59e0b" size={48} className="mr-4 hidden lg:block flex-shrink-0" />
                      <p className="leading-relaxed text-left text-md">
                        The Wash & Coat package is the ultimate "New Car" reset, designed for owners who prioritize surface protection and ease of maintenance.
                        You get the extreme water beading and UV resistance of a ceramic shield at a fraction of the cost of our correction packages.
                      </p>
                    </div>
                    <div className="flex items-center mb-4">
                      <RiResetLeftLine color="#f59e0b" size={48} className="mr-4 hidden lg:block flex-shrink-0" />
                      <p className="leading-relaxed text-left text-md">
                        Once everything is decontaminated, we perform a dedicated paint prep to ensure our 3-year ceramic coating can bond properly. This
                        creates a durable defense that no wax can match. Now your paint will be incredibly slick, meaning road grime struggles to stick and your
                        maintenance washes become almost effortless.
                      </p>
                    </div>
                    <div className="w-full p-4 bg-zinc-800 rounded-lg border border-zinc-600">
                      <p className="text-left">
                        <span className="font-bold text-md">Ideal for:</span> New cars or well-maintained daily drivers needing elite protection without the
                        cost of polishing.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-center">
                  Complete the detail! While your car is with us now's the best time to get that neglected interior back in shape! Check out our current offers
                  and pricing on our full interior detail{" "}
                  <a href="/services/exterior" className="text-blue-600 hover:text-blue-700 font-medium underline">
                    here
                  </a>
                  !
                </p>
              </div>
            </main>

            <h2 className="cleaning-process-title pb-8">Our Wash & Coat Process</h2>
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
              <motion.li className="item" variants={evenVariant}>
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
              <motion.li className="item" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">5</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Dry Vehicle and Dress Tires</h4>
                  <p className="step-desc">Dry the whole vehicle making sure to blow out the cracks. We'll also dress the tires at this point if desired.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">6</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Apply Primer Polish</h4>
                  <p className="step-desc">Apply a Primer Polish to ensure proper bonding.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">7</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Apply 3-Year Ceramic Coating</h4>
                  <p className="step-desc">Apply our 3-Year Ceramic Coating for long-lasting protection and shine.</p>
                </div>
              </motion.li>
              <motion.li className="item item-disabled" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number" style={{ border: "2px solid #aaa" }}>
                    8
                  </h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title flex">
                    Want a Polish or Paint Correction?
                    <a href="/services/polish">
                      <ExternalLink color="#3b82f6" size={24} className="mt-1 ml-1" />
                    </a>
                  </h4>
                  <p className="step-desc">
                    Check out our Polish & Coat{" "}
                    <a href="/services/polish" className="text-blue-500">
                      Polish & Coat
                    </a>{" "}
                    service for a polish before the coating, or our{" "}
                    <a href="/services/correct" className="text-blue-500">
                      Correct & Coat
                    </a>{" "}
                    service for a full paint correction before a 3-year ceramic coating .
                  </p>
                </div>
              </motion.li>
            </motion.ol>

            <div className="general-container new-heading-container font-bold text-white">
              <h3 style={{ margin: 0, width: "auto", padding: 0 }} className="new-heading new-heading-center text-4xl lg:text-5xl">
                Wash & Coat FAQ's
              </h3>
              <p className="max-w-[500px] mx-auto text-center my-0 font-normal pb-8">
                Answers to the questions we most commonly get about this service, please reach out if you have other questions!
              </p>
            </div>
            <section className="flex flex-col items-center xl:flex-row w-11/12 justify-center gap-8 xl:w-2/3 mb-8">
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
          </div>
        </div>
      </div>
    </section>
  );
}
