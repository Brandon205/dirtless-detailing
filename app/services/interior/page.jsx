"use client";
import PricingComponent from "../../components/PricingComponent";
import BeforeAfterSlider from "../../components/ImageSlider";
import HeaderComponent from "../../components/HeaderComponent";
import MosaicGallery from "../../components/MosaicGallery";
import { containerVariant, oddVariant, evenVariant } from "../../../utils/animationVariations";
import { ExternalLink } from "lucide-react";
import { GiSpill, GiVacuumCleaner } from "react-icons/gi";
import { motion } from "framer-motion";
import BaseSchema from "../../jsonSchemas/BaseSchema";

export default function FullIntEx() {
  return (
    <section className="service-content-container">
      <BaseSchema
        serviceImage="/assets/images/interior/driver16.jpg"
        url="https://www.dirtlessdetailing.com/services/interior"
        makesOffer={{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Interior Detail",
            "description":
              "Get your car's interior looking brand new with our full interior detailing service. This is our thorough cleaning and conditioning package where we try to bring your vehicle as close to perfection as we can get it. Contact us to schedule your appointment today.",
            "areaServed": "Buckley, Bonney Lake, and surrounding areas.",
            "serviceType": "Interior Detailing"
          }
        }}
      />
      <HeaderComponent
        imageUrl="/assets/images/interior/driver16.jpg"
        title="Full Interior Detail"
        description="Our full interior detail service is designed to bring your vehicle's interior back to life. From deep cleaning carpets to conditioning leather, we cover it all."
        secondaryUrl="/assets/images/before&afters/FordInteriorBA.jpg"
      />

      <div className="main-content-container">
        <div className="process-container">
          <div className="w-full">
            <div className="w-full bg-zinc-800 pb-8">
              <div className="pricing__heading-container">
                <h3 className="pricing__heading">
                  <span className="text-accent bold">Full Interior</span> Pricing
                </h3>
                <strong className="pricing__subheading">Select your vehicle size for an estimate.</strong>
              </div>
              <PricingComponent shortTitle="intFull" serviceType="interior" addons="fullInterior" />
            </div>

            <br className="extra-space" />

            <main className="w-full text-white my-0 mx-auto text-center p-4">
              <div className="flex flex-col w-full gap-4 lg:w-5/6 mx-auto border-2 border-zinc-500 rounded-lg p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center mb-0 lg:mb-4">
                  <div className="w-11/12 lg:w-3/4 max-w-[1200px] mx-auto">
                    <BeforeAfterSlider
                      beforeImage="/assets/images/before&afters/subPassB.jpg"
                      afterImage="/assets/images/before&afters/subPassA.jpg"
                      aspectRatio="16/9"
                    />
                  </div>

                  <div className="flex flex-col w-full justify-between min-h-[475px] lg:h-[550px] py-4">
                    <div className="flex flex-col items-start">
                      <h2 className="text-4xl font-bold">Our Full Interior Detail</h2>
                      <strong className="text-primary text-bold text-2xl">Thorough Cleaning and Conditioning</strong>
                    </div>
                    <div className="flex items-center my-4">
                      <GiVacuumCleaner color="#f59e0b" size={48} className="mr-4 hidden lg:block flex-shrink-0" />
                      <p className="leading-relaxed text-left text-md">
                        When your vehicle has reached the point where a simple vacuuming isn't enough, the Full Interior detail is the reset you need. We've
                        spent years researching chemicals to find exactly what works for every mess—from coffee spills and pet accidents to embedded dirt and
                        mystery odors. We don't just mask problems; we utilize specific chemistry to eliminate them at the source.
                      </p>
                    </div>
                    <div className="flex items-center mb-4">
                      <GiSpill color="#f59e0b" size={48} className="mr-4 hidden lg:block flex-shrink-0" />
                      <p className="leading-relaxed text-left text-md">
                        We match our techniques to your specific situation, using our specialized "carpet bonneting" to remove light stains and odors without
                        unnecessarily soaking your floors. For tougher cases, we utilize high-grade extraction and agitation to pull mud and debris from deep
                        within the fibers. Your interior won't just look clean—it will be as clean as modern detailing chemistry allows.
                      </p>
                    </div>
                    <div className="w-full p-4 bg-zinc-800 rounded-lg border border-zinc-600">
                      <ul className="lg:max-h-[120px] list-disc list-inside leading-relaxed text-left w-full flex flex-wrap justify-between text-md">
                        <li className="basis-1/2">Expert Chemical Research</li>
                        <li className="basis-1/2">Specialized Carpet Methods</li>
                        <li className="basis-1/2">Safe, Efficient, and Effective</li>
                        <li className="basis-1/2">Targeted Odor Elimination</li>
                        <li className="basis-1/2">Embedded Dirt & Stain Removal</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-center">
                  Want the exterior done as well? Feel free to book an interior and exterior detail, we will get your entire vehicle looking like new in just
                  one day! Check out our exterior decon wash{" "}
                  <a href="/services/exterior" className="text-blue-600 hover:text-blue-700 font-medium underline">
                    here
                  </a>
                  !
                </p>
              </div>
            </main>
            <br className="extra-space" />

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
                  <h4 className="step-title">Carpet Reconditioning/Extraction</h4>
                  <p className="step-desc">Using our wide array of carpet cleaning chemicals, remove & extract all of stains that we can.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">4</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Door Jambs</h4>
                  <p className="step-desc">Thoroughly clean and rinse out all door jambs.</p>
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
                  <h4 className="step-title flex line-through">
                    Interior Restoration{" "}
                    <a href="/services/interior-restoration">
                      <ExternalLink color="#3b82f6" size={24} className="mt-1 ml-1" />
                    </a>
                  </h4>
                  <p className="step-desc">
                    If you are looking for a more extensive interior detailing service to bring a car that has really been through it, you may need to consider
                    our Interior Restoration option. See more info{" "}
                    <a href="/services/interior-restoration" className="text-blue-500">
                      here
                    </a>
                    .
                  </p>
                </div>
              </motion.li>
            </motion.ol>

            <div className="mt-12 p-6 lg:p-8 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-lg border border-accent border-opacity-30 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">Want us to bring your car back to new?</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Have questions about our Full Interior Service? Want to book an appointment? Get in touch with us today!
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-black font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/50"
              >
                Get Started
              </a>
            </div>
            <br className="extra-space" />

            <p style={{ fontSize: "2rem", margin: 0, color: "white" }}>End Results</p>
            <h3 className="pricing__heading">Fresh, Clean, and Stunning Results.</h3>
            <p className="pricing__subtext">Once we are done you won't want to see your car dirty ever again!</p>

            <div>
              <MosaicGallery
                images={[
                  { src: "/assets/images/before&afters/seatsBA.jpg", alt: "Car seats before and after" },
                  { src: "/assets/images/interior/bio1281.jpg", alt: "Interior detail" },
                  { src: "/assets/images/interior/centerOldMercedes.jpg", alt: "Center console detail" },
                  { src: "/assets/images/interior/doorRenegade.jpg", alt: "Door panel detail" },
                  { src: "/assets/images/interior/driver11.jpg", alt: "Driver side view" },
                  { src: "/assets/images/interior/driver21.jpg", alt: "Driver side view" },
                  { src: "/assets/images/interior/jamb4.jpg", alt: "Door jamb detail" },
                  { src: "/assets/images/interior/rear15.jpg", alt: "Rear interior" },
                  { src: "/assets/images/interior/trunk1.jpg", alt: "Trunk detail" }
                ]}
              />
            </div>

            <div className="p-8 text-center flex flex-col items-center text-white ">
              <h4 className="text-3xl text-left">
                See more examples of our interior{" "}
                <a href="/gallery/interior" className="text-blue-500 inline-block">
                  work <ExternalLink className="inline-block" />
                </a>
              </h4>
              <p className="text-left">
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
    </section>
  );
}
