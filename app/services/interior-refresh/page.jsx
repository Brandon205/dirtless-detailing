"use client";
import PricingComponent from "../../components/PricingComponent";
import HeaderComponent from "../../components/HeaderComponent";
import MosaicGallery from "../../components/MosaicGallery";
import { containerVariant, oddVariant, evenVariant } from "../../../utils/animationVariations";
import { motion } from "framer-motion";
import { Flame, ExternalLink, Sparkles } from "lucide-react";
import BaseSchema from "../../jsonSchemas/BaseSchema";
import Image from "next/image";

export default function InteriorRefresh() {
  return (
    <section className="service-content-container">
      <BaseSchema
        serviceImage="/assets/images/interior/driver15.jpg"
        url="https://www.dirtlessdetailing.com/services/interior-refresh"
        makesOffer={{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Refresh",
            "description":
              "Give your already-clean interior a professional refresh with our Interior Refresh service. Perfect for vehicles that are already in good condition without needing deep cleaning or stain extraction.",
            "areaServed": "Buckley, Bonney Lake, and surrounding areas.",
            "serviceType": "Interior Detailing"
          }
        }}
      />
      <HeaderComponent
        imageUrl="/assets/images/interior/driver15.jpg"
        title="Interior Refresh"
        description="For vehicles that are already nearly clean. A maintenance-focused interior detail that keeps your interior looking like new."
        secondaryUrl="/assets/images/before&afters/floorBA.jpg"
      />

      <div className="main-content-container">
        <div className="process-container">
          <div className="w-full">
            <div className="w-full bg-zinc-800 pb-8">
              <div className="pricing__heading-container">
                <h3 className="pricing__heading">
                  <span className="text-accent bold">Interior Refresh</span> Pricing
                </h3>
                <strong className="pricing__subheading">Select your vehicle size for an estimate.</strong>
              </div>
              <PricingComponent shortTitle="intRefresh" serviceType="interior" addons="intRefresh" />
            </div>

            <main className="w-full text-white my-0 mx-auto text-center p-4">
              <div className="flex flex-col w-full gap-4 lg:w-5/6 mx-auto border-2 border-zinc-500 rounded-lg p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center mb-0 lg:mb-4">
                  <div className="relative flex flex-grow justify-center rounded-2xl w-full h-[450px] lg:h-[550px] shadow-[0_0_20px_-5px_rgba(217,119,6,0.5)]">
                    <Image src="/assets/images/interior/driver15.jpg" alt="Interior Refresh" className="rounded-2xl" objectFit="cover" fill />
                  </div>

                  <div className="flex flex-col w-full justify-between min-h-[475px] lg:h-[550px] py-4">
                    <div className="flex flex-col items-start">
                      <h2 className="text-4xl font-bold">Our Interior Refresh Service</h2>
                      <strong className="text-primary text-bold text-2xl">Maintenance-based Interior Detail</strong>
                    </div>
                    <div className="flex items-center my-4">
                      <Sparkles color="#f59e0b" size={48} className="mr-4 hidden lg:block flex-shrink-0" />
                      <p className="leading-relaxed text-left text-md">
                        Our Interior Refresh is designed for vehicles already in good condition that don't require intensive stain removal or heavy pet hair
                        extraction. It's the perfect maintenance choice if you've had your vehicle detailed within the last year to keep your cabin looking
                        sharp and protected without the extra cost of a deep clean.
                      </p>
                    </div>
                    <div className="flex items-center mb-4">
                      <Flame color="#f59e0b" size={48} className="mr-4 hidden lg:block flex-shrink-0" />
                      <p className="leading-relaxed text-left text-md">
                        We perform a thorough top-to-bottom cleaning of all surfaces, including seats, carpets, dashboards, and vents. While doing that we use
                        products made to clean and condition, saving us time and you money while still giving the benefits of protected and conditioned surfaces
                        (without a greasy finish).
                      </p>
                    </div>
                    <div className="w-full p-4 bg-zinc-800 rounded-lg border border-zinc-600">
                      <ul className="lg:max-h-[120px] list-disc list-inside leading-relaxed text-left w-full flex flex-wrap justify-between text-md">
                        <li className="basis-1/2">Perfect for Maintenance</li>
                        <li className="basis-1/2">Time-Efficient</li>
                        <li className="basis-1/2">Cost-Effective</li>
                        <li className="basis-1/2">Maintains Fresh Appearance</li>
                        <li className="basis-1/2">Protects Interior Surfaces</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-center">
                  Need something more intensive? If your interior needs deep cleaning, stain extraction, or heavy pet hair removal, check out our Full Interior
                  Service{" "}
                  <a href="/services/interior" className="text-blue-600 hover:text-blue-700 font-medium underline">
                    here
                  </a>
                  !
                </p>
              </div>
            </main>

            <br className="extra-space" />

            <h2 className="cleaning-process-title pb-8">Our Interior Refresh Process</h2>
            <motion.ol className="list" variants={containerVariant} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <motion.li className="item" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">1</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Vacuum Entire Interior</h4>
                  <p className="step-desc">Thorough vacuum of all carpets, floor mats, under seats, and any crevices to remove dust and light dirt.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">2</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Blow Out Vehicle</h4>
                  <p className="step-desc">
                    Blow out all the cracks and crevices as well as blowing out all embedded dirt and dust from the seats and carpeting.
                  </p>
                </div>
              </motion.li>
              <motion.li className="item" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">3</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Clean Seats and Upholstery</h4>
                  <p className="step-desc">
                    Deep clean all seats and fabric surfaces with specialized cleaners appropriate for already-clean upholstery, leaving them fresh and vibrant.
                  </p>
                </div>
              </motion.li>
              <motion.li className="item" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">4</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Clean and Condition</h4>
                  <p className="step-desc">
                    Use a dedicated cleaner/conditioner product to detail the dashboard, door panels, center console, and all hard surfaces with appropriate
                    products.
                  </p>
                </div>
              </motion.li>
              <motion.li className="item" variants={oddVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">5</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Clean Windows and Mirrors</h4>
                  <p className="step-desc">Clean all interior windows and mirrors for crystal clear visibility and a polished look throughout the cabin.</p>
                </div>
              </motion.li>
              <motion.li className="item" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number">6</h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title">Door Jamb Wipe down</h4>
                  <p className="step-desc">
                    Do a quick wipe down of the door jambs to remove any dust and dirt that has accumulated there. We don't do a full deep clean of the jambs
                    with our interior refresh, but we like to give them a quick wipe down to keep them looking fresh.
                  </p>
                </div>
              </motion.li>
              <motion.li className="item item-disabled" variants={evenVariant}>
                <div className="step-number-container">
                  <h3 className="step-number" style={{ border: "2px solid #aaa" }}>
                    8
                  </h3>
                </div>
                <div className="step-container">
                  <h4 className="step-title flex line-through">
                    Need Something More Intensive?{" "}
                    <a href="/services/interior">
                      <ExternalLink color="#3b82f6" size={24} className="mt-1 ml-1" />
                    </a>
                  </h4>
                  <p className="step-desc">
                    If your interior needs deep stain extraction, extensive pet hair removal, or carpet restoration, check out our Full Interior Service for
                    more comprehensive detailing. See more info{" "}
                    <a href="/services/interior" className="text-blue-500">
                      here
                    </a>
                    .
                  </p>
                </div>
              </motion.li>
            </motion.ol>

            <br className="extra-space" />

            <div className="mt-12 mb-6 p-6 lg:p-8 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-lg border border-accent border-opacity-30 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">Ready to Refresh Your Interior?</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Have questions about our Interior Refresh service? Want to book an appointment? Get in touch with us today!
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-black font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/50"
              >
                Get Started
              </a>
            </div>

            <p style={{ fontSize: "2rem", margin: 0, color: "white" }}>End Results</p>
            <h3 className="pricing__heading">Back to the way that it should be</h3>
            <p className="pricing__subtext">And the way that you wish it could stay forever.</p>

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
