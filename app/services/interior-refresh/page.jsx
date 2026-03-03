"use client";
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
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
          <div style={{ width: "100%" }}>
            <div>
              <div className="pricing__heading-container">
                <h3 className="pricing__heading">
                  <span className="text-accent bold">Interior Refresh</span> Pricing
                </h3>
                <strong className="pricing__subheading">Select your vehicle size below to get a quick price estimate for your vehicle.</strong>
              </div>
              <PricingComponent shortTitle="intRefresh" serviceType="interior" addons="intRefresh" />
            </div>

            <main className="w-full text-white my-0 mx-auto text-center p-4">
              <h2 style={{ marginBottom: 0 }} className="text-large">
                Our Interior Refresh Service
              </h2>
              <hr style={{ margin: "0 auto 3rem auto" }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Is Your Car Already Clean?</span>
                  </h3>
                  <p className="leading-relaxed">
                    The Interior Refresh service is designed for vehicles that are already in good condition. If your car doesn't need deep stain extraction,
                    extensive pet hair removal, or your interior hasn't been neglected too bad, the Interior Refresh is perfect for you. This service keeps your
                    interior looking fresh and protected without the comprehensive work of our full interior detail. It's ideal for maintenance and touch-ups on
                    already well-maintained vehicles.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Who Qualifies for Interior Refresh?</span>
                  </h3>
                  <p className="leading-relaxed">
                    The Interior Refresh is the right choice if your vehicle is already pretty clean and doesn't require carpet or stain extraction. It's also
                    perfect if you've had our Full Interior Service within the past year and want to maintain those results. If your car has heavy pet hair,
                    stubborn stains, or a neglected interior, you'll want our Full Interior Service or for extremely bad ones our Interior Restoration Service.
                    Interior Refresh is truly maintenance for the already-clean car.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Comprehensive Cleaning for Clean Interiors</span>
                  </h3>
                  <p className="leading-relaxed">
                    We thoroughly vacuum and clean all surfaces of your interior - seats, carpets, dashboard, door panels, windows, and vents. We don't use
                    aggressive extraction or spot treatment that would be needed for heavily stained carpets. Instead, we focus on deep cleaning already-clean
                    areas, removing dust and light soil that accumulates with normal use. Every step is designed to refresh without overdoing it.
                  </p>
                </div>

                <div className="bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-3 lg:p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold mb-3">
                    <span className="text-accent font-bold text-2xl">Protection and Conditioning That Lasts</span>
                  </h3>
                  <p className="leading-relaxed">
                    We apply protectants and conditioners to keep your interior looking and feeling fresh. Leather gets conditioned to prevent cracking and
                    maintain that supple feel while not getting that over the top shiny and greasy feel (we hate that!) Surfaces get protected from UV damage
                    and dust adhesion. We use quality products that provide lasting protection, so your interior stays looking new longer. Maintenance has never
                    been easier!
                  </p>
                </div>
              </div>

              {/* Call-to-action section */}
              <div className="mt-8 p-3 lg:p-6 bg-zinc-800 rounded-lg border border-zinc-900">
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

            <div className="mt-12 p-6 lg:p-8 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-lg border border-accent border-opacity-30 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">Ready to Refresh Your Interior?</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Have questions about our Interior Refresh service? Want to book an appointment? Get in touch with us today!
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/50"
              >
                Get Started
              </a>
            </div>

            <div className="preview-container">
              <motion.a initial="rest" whileHover="hover" variants={previewParentVariation} href="/gallery/interior" className="gallery-preview">
                <motion.div variants={imgVariation1} className="relative w-full h-[100px] rounded-xl">
                  <Image
                    variants={imgVariation1}
                    src="/assets/images/interior/driver5.jpg"
                    alt="Clean Mazda interior from the drivers side"
                    fill
                    sizes="275px"
                    className="object-cover rounded-xl"
                  />
                </motion.div>
                <motion.div variants={imgVariation2} className="relative w-full h-[100px] rounded-xl">
                  <Image
                    variants={imgVariation2}
                    src="/assets/images/interior/door1.jpg"
                    alt="Clean door panel of a car"
                    fill
                    sizes="275px"
                    className="object-cover rounded-xl"
                  />
                </motion.div>
                <motion.div variants={imgVariation3} className="relative w-full h-[100px] rounded-xl">
                  <Image
                    variants={imgVariation3}
                    src="/assets/images/interior/doorRenegade.jpg"
                    alt="The door panel of a cleaned jeep renegade"
                    fill
                    sizes="275px"
                    className="object-cover rounded-xl"
                  />
                </motion.div>
                <motion.div variants={imgVariation4} className="relative w-full h-[100px] rounded-xl">
                  <Image
                    variants={imgVariation4}
                    src="/assets/images/interior/driver16.jpg"
                    alt="View inside the drivers side of a cleaned jeep renegade"
                    fill
                    sizes="275px"
                    className="object-cover rounded-xl"
                  />
                </motion.div>
              </motion.a>
              <div className="preview-content">
                <h4>
                  Check out our{" "}
                  <a href="/gallery/interior" className="text-blue-500 inline-block">
                    Interior Gallery <ExternalLink className="inline-block" />
                  </a>
                </h4>
                <p>
                  Check out our interior gallery page, showing off some of the great results we've gotten over the years! See it{" "}
                  <a href="/gallery/interior" className="text-blue-500">
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
