"use client";
import React from "react";
import { previewParentVariation, imgVariation1, imgVariation2, imgVariation3, imgVariation4 } from "../../../utils/animationVariations";
import BeforeAfterSlider from "../../components/ImageSlider";
import MosaicGallery from "../../components/MosaicGallery";
import { motion } from "framer-motion";
import { ExternalLink, Brush } from "lucide-react";
import Image from "next/image";
import HeaderComponent from "../../components/HeaderComponent";
import BaseSchema from "../../jsonSchemas/BaseSchema";

export default function InteriorRestoration() {
  return (
    <section className="service-content-container">
      <BaseSchema
        serviceImage="/assets/images/before&afters/badInteriorBA.png"
        url="https://www.dirtlessdetailing.com/services/interior-restoration"
        makesOffer={{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Restoration",
            "description":
              "Our Interior Restoration service is a service designed for vehicles that have been neglected beyond what our Full Interior Detail can handle. If your interior has heavy odors, mold, or is extremely dirty, and you need it back to acceptable, this is the service for you.",
            "areaServed": "Buckley, Bonney Lake, and surrounding areas.",
            "serviceType": "Interior Restoration"
          }
        }}
      />
      <HeaderComponent
        imageUrl="/assets/images/before&afters/nastykiadriverA.jpg"
        title="Interior Restoration"
        description="The service that can bring life back into heavily neglected interiors. If your interior has heavy odors, mold, or is extremely dirty, this is the service for you."
        secondaryUrl="/assets/images/before&afters/badInteriorBA.png"
      />

      <div className="main-content-container">
        <div className="process-container">
          <div className="w-full">
            <div className="flex justify-center gap-8 flex-col lg:flex-row">
              <div className="max-w-[450px] w-full bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-6 mb-8">
                <h3 className="font-bold text-2xl text-primary">DEEP REVIVE:</h3>
                <p className="font-bold text-2xl text-primary">HEAVY USE & PET HAIR</p>
                <div className="w-auto h-[250px] relative my-4">
                  <Image
                    src="/assets/images/before&afters/badInteriorBA.png"
                    alt="Before and after of a heavily neglected interior"
                    fill
                    objectFit="cover"
                    className="mb-4 rounded-lg"
                  />
                </div>
                <strong className="font-bold text-2xl text-primary">$350 - $650+</strong>
                <p className="text-sm text-gray-400">*depending on size/condition</p>
                <p className="text-left">
                  Perfect for daily drivers, family cars, and vehicles with embedded dirt, spills, and extensive pet hair removal. Includes deep extraction,
                  scrubbing, and sanitization.
                </p>
              </div>
              <div className="max-w-[400px] w-full bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-6 mb-8">
                <h3 className="font-bold text-2xl text-primary">SAFETY & HEALTH:</h3>
                <p className="font-bold text-2xl text-primary">MOLD & BIOHAZARD</p>
                <div className="w-auto h-[250px] relative my-4">
                  <Image
                    src="/assets/images/before&afters/bio1278.webp"
                    alt="Moldy rear van seat before and after"
                    fill
                    objectFit="cover"
                    className="mb-4 rounded-lg"
                  />
                </div>
                <strong className="font-bold text-2xl text-primary">$600-$1200+</strong>
                <p className="text-sm text-gray-400">*depending on size/condition</p>
                <p className="text-left">
                  If there's just a small spot or a little mold, it's included in our Full Interior Service, but if there's more than one area or the mold is
                  very bad, this is the service for you. We use multiple different stages and chemicals all with the ability to kill mold, and end it off with a
                  complete ozone treatment to get the places no one can reach.
                </p>
              </div>
              <div className="max-w-[400px] w-full bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-6 mb-8">
                <h3 className="font-bold text-2xl text-primary">ULTIMATE RESTORATION:</h3>
                <p className="font-bold text-2xl text-primary">OLD VEHICLE/BARN FINDS</p>
                <div className="w-auto h-[250px] relative my-4">
                  <Image
                    src="/assets/images/before&afters/badInteriorBA.png"
                    alt="Before and after of a heavily neglected interior"
                    fill
                    objectFit="cover"
                    className="mb-4 rounded-lg"
                  />
                </div>
                <strong className="font-bold text-2xl text-primary">QUOTE REQUIRED*</strong>
                <p className="text-sm text-gray-400">*depending on size/condition</p>
                <p className="text-left">
                  Typically for older vehicles that have sun damage, fading plastics and leathers, and varying levels of wear. We will use specialized cleaners
                  to rejuvenate plastics and leathers, and do our best to restore the interior to its best possible condition, while protecting it from further
                  damage with UV inhibitors and a durable interior dressing.
                </p>
              </div>
            </div>

            <div className="w-full bg-zinc-800 flex text-white rounded-lg shadow-sm border border-zinc-900 p-6 mb-8 max-w-[1315px] mx-auto text-left gap-4 flex-col lg:flex-row justify-center lg:justify-start">
              <div className="w-full h-[250px] relative">
                <Image
                  src="/assets/images/before&afters/badInteriorBA.png"
                  alt="Before and after of a heavily neglected interior"
                  // width={250}
                  // height={250}
                  fill
                  objectFit="cover"
                  className="mb-4 object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-2xl text-primary mb-2">BUDGET CONSCIOUS RESTORATION: OPT FOR A CAPPED HOURLY DETAIL</h3>
                <p>
                  Choose this option for these services at an hourly rate ($125-$150/hour). Set a specific time limit (e.g., a 4 or 6 hour block). We prioritize
                  your biggest concerns and get through the most important steps for you before the time is up without extra things you may not be as worried
                  about. Ideal for making a huge impact without needing a "Full Restoration"{" "}
                </p>
                <div className="flex justify-start gap-8 mt-4 flex-col lg:flex-row">
                  <a
                    href="https://app.urable.com/virtual-shop/pMe0iWXWCBfTL47sDvjd"
                    className="text-white hover:underline text-xl font-semibold flex items-center gap-1 mt-2 bg-primary py-2 px-6 rounded-lg w-max"
                  >
                    <span>Book Hourly Block Online ($150/hour)</span>
                  </a>
                  <a
                    href="sms:+12532529758"
                    className="text-white border-primary border-2 hover:underline text-xl font-semibold flex items-center gap-1 mt-2 py-2 px-6 rounded-lg w-max"
                  >
                    <span>Text Photos for an Estimate (252) 252-9758</span>
                  </a>
                </div>
              </div>
            </div>

            <main className="w-full text-white my-0 mx-auto text-center p-4">
              <div className="flex flex-col w-full gap-4 lg:w-5/6 mx-auto border-2 border-zinc-500 rounded-lg p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center mb-0 lg:mb-4">
                  <div className="w-11/12 lg:w-3/4 max-w-[1200px] mx-auto">
                    <BeforeAfterSlider
                      beforeImage="/assets/images/before&afters/subDriveB.jpg"
                      afterImage="/assets/images/before&afters/subDriveA.jpg"
                      aspectRatio="16/9"
                    />
                  </div>

                  <div className="flex flex-col w-full justify-between min-h-[475px] lg:h-[550px] py-4">
                    <div className="flex flex-col items-start">
                      <h2 className="text-4xl font-bold">Our Full Interior Detail</h2>
                      <strong className="text-primary text-bold text-2xl">Thorough Cleaning and Conditioning</strong>
                    </div>
                    <div className="flex items-center my-4">
                      <Brush color="#f59e0b" size={156} className="mr-4" />
                      <p className="leading-relaxed text-left text-md">
                        This is a full recovery service for vehicles facing extreme conditions that standard detailing simply cannot solve. We go beyond surface
                        cleaning, making sure to get hidden biohazards or deep-seated grime. Whether you're dealing with a major water damage, a neglected used
                        car, or a "disaster" vehicle, we do what it takes to restore your interior.
                      </p>
                    </div>
                    <div className="flex items-center mb-4">
                      <Brush color="#f59e0b" size={156} className="mr-4" />
                      <p className="leading-relaxed text-left text-md">
                        On all Interior Restoration vehicles that need it we run our professional grade Ozone machine to remove odors and mold spores that we
                        can't reach. Combined with high-heat extraction and aggressive enzyme-based sanitization, we tackle the jobs other shops turn away. Our
                        goal is to provide the absolute best possible outcome, restoring your interior to its highest possible standard.
                      </p>
                    </div>
                    <div className="w-full p-4 bg-zinc-800 rounded-lg border border-zinc-600">
                      <ul className="lg:max-h-[120px] list-disc list-inside leading-relaxed text-left w-full flex flex-wrap justify-between text-md">
                        <li className="basis-1/2">Professional Ozone Treatment</li>
                        <li className="basis-1/2">High-Heat Extraction</li>
                        <li className="basis-1/2">Aggressive Enzyme-Based Sanitization</li>
                        <li className="basis-1/2">Deep-Seated Grime Removal</li>
                        <li className="basis-1/2">Mold Spore Elimination</li>
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

            <div className="mt-12 p-6 lg:p-8 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-lg border border-accent border-opacity-30 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">Is your car in need of a Restoration?</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Have questions or want a free quote on our Interior Restoration Service? Want to book an appointment? Get in touch with us today!
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
            <h3 className="pricing__heading">Back to the way your car should be.</h3>
            <p className="pricing__subtext">A car that you aren't scared or ashamed of to be driving anymore!</p>
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
