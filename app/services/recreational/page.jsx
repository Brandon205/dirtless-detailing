"use client";
import { useState, useEffect } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import FaqItem from "../../components/FaqItem";
import ImageGallery from "../../components/ImageGallery";
import Image from "next/image";
import BaseSchema from "../../jsonSchemas/BaseSchema";

const faqItems = [
  {
    title: "What does your ORV detailing package include?",
    description:
      "Our ORV Detailing will include cleaning/washing the full interior and exterior, using foaming chemicals that are safe to use on all surfaces that's still strong enough to ensure no dirt sticks behind!"
  },
  {
    title: "Do you offer polishing for boats and RV's?",
    description:
      "Not usually as of right now, only washes and boat interiors. We have done it in the past though as you can see in some of the photos, so give us a call and we might be able to work something out. Our typical pricing for that is starting around $120/ft. We may formally offer polishing and ceramic coating services for both in the future, so be sure to check back!"
  },
  {
    title: "Can you come to me for these services?",
    description: "Yes! We can perform all of these services at your home, all we will need is an electrical outlet and water spigot."
  },
  {
    title: "What cities do you service?",
    description:
      "With our mobile service we can go out to: Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Lake Tapps, Federal Way, Orting, South Prairie, Black Diamond, Milton, Edgewood, and Graham."
  }
];

export default function Recreational() {
  const [smallScreen, setSmallScreen] = useState(false);
  const [expanded, setExpanded] = useState(false);

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
        serviceImage="/assets/images/recreational/RVWash.jpg"
        url="https://www.dirtlessdetailing.com/services/recreational"
        makesOffer={{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "RV/Trailer and Boat Detailing",
            "description": "At Dirt-Less Detailing we aren't limited to just cars and trucks! Book any boats, RV's, Trailers, or ORV's for a detail today!",
            "areaServed": "Buckley, Bonney Lake, and surrounding areas.",
            "serviceType": "RV/Trailer and Boat Detailing"
          }
        }}
      />
      <HeaderComponent
        imageUrl="/assets/images/recreational/RVWash.jpg"
        title="Boats, RV's, Trailer, and ORV Detailing"
        description="Bring any of your recreational vehicles back to life with our new detailing services for them!"
        secondaryUrl="/assets/images/recreational/sidexsideFoam.jpg"
      />

      <div className="main-content-container">
        <div className="w-full">
          <div className="flex justify-center gap-8 flex-col lg:flex-row">
            <div className="max-w-[450px] w-full bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-6 mb-8">
              <h3 className="font-bold text-2xl text-primary">RV/TRAILER DETAILING</h3>
              <div className="w-auto h-[250px] relative my-4">
                <Image
                  src="/assets/images/recreational/toyHaulerAfter.jpg"
                  alt="Before and after of a heavily neglected interior"
                  fill
                  objectFit="cover"
                  className="mb-4 rounded-lg"
                />
              </div>
              <strong className="font-bold text-2xl text-primary">$10/foot</strong>
              <p className="text-sm text-gray-400">$10/foot Interior, $10/foot Exterior</p>
              <p className="text-left">
                Perfect for right after you are getting it out for the year after a couple of months sitting in storage, or right before going into storage to
                make sure that nothing that's on it now eats into the materials.
              </p>
            </div>
            <div className="max-w-[400px] w-full bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-6 mb-8">
              <h3 className="font-bold text-2xl text-primary">BOAT DETAILING</h3>
              <div className="w-auto h-[250px] relative my-4">
                <Image
                  src="/assets/images/recreational/Boatinterior.jpg"
                  alt="Moldy rear van seat before and after"
                  fill
                  objectFit="cover"
                  className="mb-4 rounded-lg"
                />
              </div>
              <strong className="font-bold text-2xl text-primary">$10/foot</strong>
              <p className="text-sm text-gray-400">$10/foot Interior, $10/foot Exterior</p>
              <p className="text-left">
                Get your boat ready for the summer with our Boat Detailing Services. With our simple $10/foot pricing we'll vacuum, blow, and clean out all main
                compartments and protect them with our specialized cleaners. On the exterior side of things we'll give it a thorough wash and top it with a
                ceramic spray sealant to ensure it stays cleaner throughout the year!
              </p>
            </div>
            <div className="max-w-[400px] w-full bg-zinc-800 text-white rounded-lg shadow-sm border border-zinc-900 p-6 mb-8">
              <h3 className="font-bold text-2xl text-primary">ORV DETAILING</h3>
              <div className="w-auto h-[250px] relative my-4">
                <Image
                  src="/assets/images/recreational/sidexside.png"
                  alt="Photo of the interior of an old Ferrari Interior"
                  fill
                  objectFit="cover"
                  className="mb-4 rounded-lg"
                />
              </div>
              <strong className="font-bold text-2xl text-primary">QUOTE REQUIRED*</strong>
              <p className="text-sm text-gray-400">*depending on size/condition</p>
              <p className="text-left">
                We're in the perfect area of Washington to own Dirtbikes, Quads, Side by Sides and other ORV's so we've washed many of them, and know that to
                get everything takes a ton of attention to detail, and the right chemicals. We can do the interior and exterior and always top it with a ceramic
                spray sealant in hopes to keep at least some of the dirt and mud off next time you bring it out. So if you want yours done feel free to give us
                a call!
              </p>
            </div>
          </div>

          <div className="w-full bg-zinc-800 flex text-white rounded-lg shadow-sm border border-zinc-900 p-6 mb-8 max-w-[1315px] mx-auto text-left gap-4 flex-col lg:flex-row justify-center lg:justify-start">
            <div className="w-full h-[250px] relative">
              <Image
                src="/assets/images/recreational/motorcycleFoam.jpg"
                alt="Motorcycle during a wash with foam on it"
                fill
                objectFit="cover"
                className="mb-4 object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-2xl text-primary mb-2">NOTES ON OUR RECREATIONAL SERVICES</h3>
              <p>
                At this point we don't offer polishing on boats, RVs/Trailers, or ORV's though we may in the future or in very specific cases. If you have
                another vehicle that you don't see listed here let us know and we can most likely figure out a price and way to get it detailed for you. With
                just our detailing equipment we've even done things like roof tops, solar panels, various car parts like a full rear axle, so give us a call or
                text and we'll see if we can work something out!
              </p>
              <div className="flex justify-start gap-8 mt-4 flex-col lg:flex-row">
                <a
                  href="sms:+12532529758"
                  className="text-white hover:underline text-xl font-semibold flex items-center gap-1 mt-2 bg-primary py-2 px-6 rounded-lg w-max"
                >
                  <span>Call/Text any questions: (252) 252-9758</span>
                </a>
                <a
                  href="/contact"
                  className="text-white border-primary border-2 hover:underline text-xl font-semibold flex items-center gap-1 mt-2 py-2 px-6 rounded-lg w-max"
                >
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 lg:p-8 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-lg border border-accent border-opacity-30 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">Have something that needs a good detail?</h3>
            <p className="text-gray-300 mb-6 text-lg">
              If you have any questions or want a free quote on our Recreational detailing services click Get Started to get in touch!
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-black font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/50"
            >
              Get Started
            </a>
          </div>

          <div id="faq" style={{ width: "90%", margin: "0 auto", paddingTop: "2rem" }}>
            <div className="new-heading-container text-white">
              <strong className="above-heading text-3xl">Recreational Detailing FAQ</strong>
              <h3 className="new-heading text-xl lg:text-2xl">Answers for the most commonly asked questions about ceramic coatings.</h3>
            </div>
            <div className="faq-container" style={{ color: "white" }} itemScope itemType="https://schema.org/FAQPage">
              {faqItems.map((item, i) => (
                <FaqItem key={i} i={i} expanded={expanded} setExpanded={setExpanded} title={item.title} description={item.description} isMobile={smallScreen} />
              ))}
            </div>
          </div>

          {/* <p style={{ fontSize: "2rem", margin: 0, color: "white" }}>End Results</p> */}
          <h3 className="pricing__heading">End Results</h3>
          <p className="pricing__subtext">Whether it's taken far on the road, or far off the road, we've got you covered!</p>
          <div>
            <ImageGallery
              images={[
                { src: "/assets/images/recreational/nautiqueInt.jpg", alt: "" },
                { src: "/assets/images/recreational/rvRoofDuring.jpg", alt: "" },
                { src: "/assets/images/recreational/RVPolishBA.jpg", alt: "" },
                { src: "/assets/images/recreational/jetskis.jpeg", alt: "" },
                { src: "/assets/images/recreational/RBoat.jpg", alt: "" },
                { src: "/assets/images/recreational/rvInt.png", alt: "" }
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
