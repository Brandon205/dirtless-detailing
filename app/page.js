"use client";
import { useState, useEffect } from "react";
import Benefits from "./Benefits";
import { HeroSlider } from "./components/hero-slider";
import { BookingButton } from "./components/BookingButton";
import { topBtnVariant } from "../utils/animationVariations";
import prices from "../utils/Prices";
import { Titillium_Web } from "next/font/google";
import { InfiniteMovingCards } from "./components/InfiniteMovingCards";
import FaqItem from "./components/FaqItem";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const titillium = Titillium_Web({ weight: ["400", "600"], subsets: ["latin"] });

const jsonld = {
  "@type": "LocalBusiness",
  "name": "Dirt-Less Detailing",
  "image": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/cover",
  "url": "https://www.dirtlessdetailing.com",
  "telephone": "2532529758",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "28120 WA-410, Building C6",
    "addressLocality": "Buckley",
    "addressRegion": "WA",
    "postalCode": "98321",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.15803435589099,
    "longitude": -122.05283957787773
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "07:00",
    "closes": "19:00"
  },
  "sameAs": ["https://www.instagram.com/dirt_less_detailing", "https://www.youtube.com/channel/UCsoqP5s4hwkQd_Sd-TVv-jg"]
};

const listItemVariant = {
  initial: {
    opacity: 0,
    x: -100
  },
  show: {
    opacity: 1,
    x: 0
  }
};

const serviceVariant = {
  initial: { scale: 1 },
  hover: { scale: 1.05 }
};

const arrowVariant = {
  initial: { x: -25, opacity: 0 },
  hover: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      ease: "easeIn"
    }
  }
};

export default function Home() {
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
      title: "Do you need water/electrical for mobile services?",
      description: "Yes, all we will need is an electrical outlet, a water spigot, and preferably any large personal items out of the car."
    },
    {
      title: "I won't have a ride back to my house, what are my options?",
      description:
        "No worries, it happens all the time! We have done everything from bringing people back home, picking their car up and dropping it off later, we've even had customers order an Uber straight from our shop. If your service won't take too long and don't mind waiting for a bit we do have an office you can wait in as well."
    },
    {
      title: "What forms of payment do you take?",
      description:
        "We can take payment via any widely accepted debit/credit card companies. We also accept checks and can text/email you an invoice to pay online if needed as well."
    },
    {
      title: "Do you offer gift cards or gift certificates?",
      description:
        "Yes we do! Any of our services can be bought as a gift certificate. Use the Book Online button below to purchase one, or reach out to us via call/text to get one!"
    },
    {
      title: "How does booking with Dirt-Less Detailing work?",
      description:
        "Once you have booked an appointment with us you're set (if you booked online through Urable you will see your appointment date and time got accepted). From then expect a text the day before your detail to ensure that the time you picked still works. Once confirmed we will see you for your detail the next day!"
    }
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld, null, 2) }} />
      <HeroSlider
        images={[
          "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/cover",
          "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/19851827-a8f8-4045-11cf-a6bdef3c4100/cover",
          "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/16add6ea-28d3-43ab-dc07-584e09e47500/cover",
          "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3a1a1e74-854b-4aa9-ae8e-06816ec80200/cover",
          "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/ae30d18b-03c1-4632-e50d-3e047b633400/cover",
          "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/c259c052-b75c-4e1f-f467-4010d7182d00/cover",
          "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/15bf1809-0cee-4975-95ed-808adcf12100/cover"
        ]}
      >
        <header className="w-screen flex flex-col h-[90vh] pt-28 z-50 items-center lg:items-start lg:pl-20 xl:gap-3 text-sm xl:text-lg justify-center">
          <div className="text-center lg:text-left">
            <strong className="text-gray-300 text-xl">Dirt-Less Detailing</strong>
            <h1 className={`${titillium.className} text-white text-5xl xl:text-7xl xl:text-left font-bold m-0`}>
              Your Auto Detailing & <br /> Ceramic Coating Specialists
            </h1>
          </div>
          <p className="special-deal-p">
            <span className="text-[#3c8d0d] bold">GIFT CARDS AVAILABLE ONLINE</span>: Give the gift of a clean car with our new gift card offers!
          </p>
          <div>
            <p className="text-gray-300 max-w-screen-md text-left m-0 text-xl hidden xl:block">
              Everything from removing stains from your interior, to our most detail-oriented paint correction and ceramic coating jobs, you can trust Dirt-Less
              Detailing to get the job done right!
            </p>
            <a href="https://maps.app.goo.gl/bhPDhjUN4jsSegu48" className="contact-link footer-contact-link no-underline" target="_blank" rel="noopener">
              <MapPin /> Buckley Business Park C6 <span className="text-primary no-underline">(Our New Location)</span>
            </a>

            <div className="flex gap-10 pt-8 flex-col lg:flex-row max-w-screen-md">
              <motion.a href="/contact" className="top-quote-btn" variants={topBtnVariant} whileHover="hover" transition={{ duration: 0.25 }}>
                <img src="../assets/icons/clipboard.png" alt="clipboard" className="btn-icon" /> BOOK NOW!
              </motion.a>
              <motion.a
                href="tel:2532529758"
                className="top-quote-btn btn-secondary"
                variants={topBtnVariant}
                whileHover="hover"
                transition={{ duration: 0.25 }}
              >
                <img src="../assets/icons/phoneMessage.png" alt="call or message" className="btn-icon" /> (253) 252-9758
              </motion.a>
            </div>
          </div>
        </header>
      </HeroSlider>

      <div className="service-bkg pt-0">
        <Benefits />

        <div className="general-container new-heading-container pt-5">
          <strong className="above-heading text-4xl">Interior Services</strong>
          <h2 className="new-heading text-xl lg:text-2xl">Transform your vehicle's interior with our Premium Auto Detailing services.</h2>
        </div>
        <div className="flex flex-col lg:flex-row flex-grow lg:justify-between lg:items-stretch lg:flex-wrap lg:w-[90%] lg:my-0 mx-auto justify-center items-center gap-24 mb-8">
          <div className="flex flex-col flex-1 relative w-[90%] min-w-[400px] max-w-[475px] gap-2 rounded-2xl pb-8 bg-secondaryBkg overflow-hidden shadow-lg">
            <div
              className="relative m-2 bg-center bg-no-repeat bg-cover h-[200px] lg:h-[250px] rounded-2xl border-2 border-black"
              style={{
                backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/e073e12e-8f0c-4ae5-fa12-4abc9ab9db00/public)`
              }}
            ></div>
            <div className="w-full flex justify-between flex-1 px-3 flex-col items-center">
              <div className="text-center">
                <motion.a
                  href="/services/interior-swift"
                  className="inline-flex mx-auto my-0 text-3xl font-bold no-underline"
                  variants={serviceVariant}
                  initial="initial"
                  whileHover="hover"
                  animate="initial"
                >
                  Swift Interior Detail
                  <motion.span className="flex items-center pl-2" variants={arrowVariant}>
                    <ArrowRight color="white" />
                  </motion.span>
                </motion.a>
                <motion.p className="text-center p-0 text-secondaryText font-semibold mx-auto max-w-[90%]">
                  Our simple interior cleaning, best for maintenance or to quickly freshen up your interior.
                </motion.p>
              </div>

              <motion.ul
                className="list-none flex flex-col items-start text-xl font-normal w-full m-0 gap-4 pt-6 pb-4"
                variants={{ initial: {}, show: { transition: { staggerChildren: 0.25 } } }}
                whileInView="show"
                initial="initial"
                viewport={{ once: true }}
              >
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">Blow Out & Vacuum the Vehicle</p>
                </motion.li>
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">Wipe Down and Condition All Surfaces</p>
                </motion.li>
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">Wash/Clean the Floormats</p>
                </motion.li>
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">Clean Interior Windows & Glass</p>
                </motion.li>
              </motion.ul>

              <div className="w-full">
                <div className="flex w-full justify-around gap-4 py-4">
                  <div className="flex flex-col items-center p-2 bg-contactBkg w-full rounded-2xl font-bold">
                    <p className="text-white m-0">1.5-3</p>
                    <p className="text-secondaryText text-[14px]">hours</p>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-contactBkg w-full rounded-2xl font-bold">
                    <p className="text-secondaryText text-[14px]">Starting at</p>
                    <p className="text-white m-0 text-2xl">${prices["2 Door"]["interior"]["interiorswift"]}</p>
                  </div>
                </div>

                <div className="flex w-full justify-around gap-4 flex-col lg:flex-row">
                  <motion.a
                    href="/services/interior-swift"
                    className="py-3 text-dm tracking-wide px-[0.9rem] bg-secondaryBtnClr rounded-[40px] text-center font-bold text-clip lg:w-1/2"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Learn More
                  </motion.a>
                  <motion.a
                    href="/contact"
                    className="py-3 text-dm tracking-wide px-[0.9rem] bg-primary rounded-[40px] w-full font-bold items-center flex justify-center"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Schedule Today!
                  </motion.a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 relative w-[90%] min-w-[400px] max-w-[475px] gap-2 rounded-2xl pb-8 bg-secondaryBkg overflow-hidden shadow-lg">
            <div
              className="relative m-2 bg-center bg-no-repeat bg-cover h-[200px] lg:h-[250px] rounded-2xl border-2 border-black"
              style={{
                backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a40931e-dd21-407c-dd03-86fd43b05200/public)`
              }}
            ></div>
            <div className="w-full flex justify-between flex-1 px-3 flex-col items-center">
              <div className="text-center">
                <motion.a
                  href="/services/interior"
                  className="inline-flex mx-auto my-0 text-3xl font-bold no-underline"
                  variants={serviceVariant}
                  initial="initial"
                  whileHover="hover"
                  animate="initial"
                >
                  Full Interior Detail
                  <motion.span className="flex items-center pl-2" variants={arrowVariant}>
                    <ArrowRight color="white" />
                  </motion.span>
                </motion.a>
                <motion.p className="text-center p-0 text-secondaryText font-semibold mx-auto max-w-[90%]">
                  Our thorough interior cleaning, best for cars with staining, lots of dog hair/dirt, or ones that haven't been cleaned out in a long time.
                </motion.p>
              </div>

              <motion.ul
                className="list-none flex flex-col items-start text-xl font-normal w-full m-0 gap-4 pt-6 pb-4"
                variants={{ initial: {}, show: { transition: { staggerChildren: 0.25 } } }}
                whileInView="show"
                initial="initial"
                viewport={{ once: true }}
              >
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">Blow Out & Vacuum all Dirt/Debris</p>
                </motion.li>
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">Steam Extraction/Carpet Shampooing</p>
                </motion.li>
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">Wash Out Door Jambs</p>
                </motion.li>
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">All Leathers and Plastics Cleaned</p>
                </motion.li>
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">Interior & Exterior Glass Cleaned</p>
                </motion.li>
              </motion.ul>

              <div className="w-full">
                <div className="flex w-full justify-around gap-4 py-4">
                  <div className="flex flex-col items-center p-2 bg-contactBkg w-full rounded-2xl font-bold">
                    <p className="text-white m-0">3-6+</p>
                    <p className="text-secondaryText text-[14px]">hours</p>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-contactBkg w-full rounded-2xl font-bold">
                    <p className="text-secondaryText text-[14px]">Starting at</p>
                    <p className="text-white m-0 text-2xl">${prices["2 Door"]["interior"]["interior"]}</p>
                  </div>
                </div>

                <div className="flex w-full justify-around gap-4 flex-col lg:flex-row">
                  <motion.a
                    href="/services/interior"
                    className="py-3 text-dm tracking-wide px-[0.9rem] bg-secondaryBtnClr rounded-[40px] text-center font-bold text-clip lg:w-1/2"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Learn More
                  </motion.a>
                  <motion.a
                    href="/contact"
                    className="py-3 text-dm tracking-wide px-[0.9rem] bg-primary rounded-[40px] w-full font-bold items-center flex justify-center"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Schedule Today!
                  </motion.a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 relative w-[90%] min-w-[400px] max-w-[475px] gap-2 rounded-2xl pb-8 bg-secondaryBkg overflow-hidden shadow-lg">
            <div
              className="relative m-2 bg-center bg-no-repeat bg-cover h-[200px] lg:h-[250px] rounded-2xl border-2 border-black"
              style={{
                backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/e073e12e-8f0c-4ae5-fa12-4abc9ab9db00/public)`
              }}
            ></div>
            <div className="w-full flex justify-between flex-1 px-3 flex-col items-center">
              <div className="text-center">
                <motion.a
                  href="/services/interior-spill"
                  className="inline-flex mx-auto my-0 text-3xl font-bold no-underline"
                  variants={serviceVariant}
                  initial="initial"
                  whileHover="hover"
                  animate="initial"
                >
                  Full Interior + Spill Guard
                  <motion.span className="flex items-center pl-2" variants={arrowVariant}>
                    <ArrowRight color="white" />
                  </motion.span>
                </motion.a>
                <motion.p className="text-center p-0 text-secondaryText font-semibold mx-auto max-w-[90%]">
                  Our Full Interior Service topped with a interior ceramic spray on all surfaces, perfect for making any future cleaning a breeze.
                </motion.p>
              </div>

              <motion.ul
                className="list-none flex flex-col items-start text-xl font-normal w-full m-0 gap-4 pt-6 pb-4"
                variants={{ initial: {}, show: { transition: { staggerChildren: 0.25 } } }}
                whileInView="show"
                initial="initial"
                viewport={{ once: true }}
              >
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">
                    <span>EVERYTHING</span> From our Full Interior Service
                  </p>
                </motion.li>
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">All Leathers Conditioned</p>
                </motion.li>
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">Interior Ceramic Coating Applied To All Surfaces (Even Carpets!)</p>
                </motion.li>
              </motion.ul>

              <div className="w-full">
                <div className="flex w-full justify-around gap-4 py-4">
                  <div className="flex flex-col items-center p-2 bg-contactBkg w-full rounded-2xl font-bold">
                    <p className="text-white m-0">4.5-7+</p>
                    <p className="text-secondaryText text-[14px]">hours</p>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-contactBkg w-full rounded-2xl font-bold">
                    <p className="text-secondaryText text-[14px]">Starting at</p>
                    <p className="text-white m-0 text-2xl">${prices["2 Door"]["interior"]["interiorspill"]}</p>
                  </div>
                </div>

                <div className="flex w-full justify-around gap-4 flex-col lg:flex-row">
                  <motion.a
                    href="/services/interior-spill"
                    className="py-3 text-dm tracking-wide px-[0.9rem] bg-secondaryBtnClr rounded-[40px] text-center font-bold text-clip lg:w-1/2"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Learn More
                  </motion.a>
                  <motion.a
                    href="/contact"
                    className="py-3 text-dm tracking-wide px-[0.9rem] bg-primary rounded-[40px] w-full font-bold items-center flex justify-center"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Schedule Today!
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br className="extra-space" />

        <div className="general-container new-heading-container" style={{ margin: "5vh auto 2vh auto" }}>
          <strong className="above-heading text-4xl"> Exterior Services </strong>
          <h3 className="new-heading text-xl lg:text-2xl">
            From a quick wash to a complete paint correction and ceramic coating, we cover all things exterior!
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row flex-grow lg:justify-between lg:items-stretch lg:flex-wrap lg:w-[90%] lg:my-0 mx-auto justify-center items-center gap-24 mb-8">
          <div className="flex flex-col flex-1 relative w-[90%] min-w-[400px] max-w-[475px] gap-2 rounded-2xl pb-8 bg-secondaryBkg overflow-hidden shadow-lg">
            <div
              className="relative m-2 bg-center bg-no-repeat bg-cover h-[200px] lg:h-[250px] rounded-2xl border-2 border-black"
              style={{
                backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b5859464-3c0e-4fcf-8332-17155eb86d00/public)`
              }}
            ></div>
            <div className="w-full flex justify-between flex-1 px-3 flex-col items-center">
              <div className="text-center">
                <motion.a
                  href="/services/exterior"
                  className="inline-flex mx-auto my-0 text-3xl font-bold no-underline"
                  variants={serviceVariant}
                  initial="initial"
                  whileHover="hover"
                  animate="initial"
                >
                  Exterior Decon Wash
                  <motion.span className="flex items-center pl-2" variants={arrowVariant}>
                    <ArrowRight color="white" />
                  </motion.span>
                </motion.a>
                <motion.p className="text-center p-0 text-secondaryText font-semibold mx-auto max-w-[90%]">
                  The detailers car wash - one that goes far beyond what an auto car wash can do. Your wheels, tires, and even paint will be cleaner than ever!
                </motion.p>
              </div>

              <motion.ul
                className="list-none flex flex-col items-start text-xl font-normal w-full m-0 gap-4 pt-6 pb-4"
                variants={{ initial: {}, show: { transition: { staggerChildren: 0.25 } } }}
                whileInView="show"
                initial="initial"
                viewport={{ once: true }}
              >
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">Full Vehicle Strip Wash (to remove any embedded contaminants, tar, and sap)</p>
                </motion.li>
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">Scrub & Wash the Tires, Wheels, Wheel Barrels, and Wells</p>
                </motion.li>
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">Clean Out All Door Jambs and the Gas Door</p>
                </motion.li>
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">Apply a Ceramic Protectant on All Surfaces (lasts 3-6 months)</p>
                </motion.li>
              </motion.ul>

              <div className="w-full">
                <div className="flex w-full justify-around gap-4 py-4">
                  <div className="flex flex-col items-center p-2 bg-contactBkg w-full rounded-2xl font-bold">
                    <p className="text-white m-0">1-2.5</p>
                    <p className="text-secondaryText text-[14px]">hours</p>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-contactBkg w-full rounded-2xl font-bold">
                    <p className="text-secondaryText text-[14px]">Starting at</p>
                    <p className="text-white m-0 text-2xl">${prices["2 Door"]["exterior"]["exteriorwash"]}</p>
                  </div>
                </div>

                <div className="flex w-full justify-around gap-4 flex-col lg:flex-row">
                  <motion.a
                    href="/services/exterior"
                    className="py-3 text-dm tracking-wide px-[0.9rem] bg-secondaryBtnClr rounded-[40px] text-center font-bold text-clip lg:w-1/2"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Learn More
                  </motion.a>
                  <motion.a
                    href="/contact"
                    className="py-3 text-dm tracking-wide px-[0.9rem] bg-primary rounded-[40px] w-full font-bold items-center flex justify-center"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Schedule Today!
                  </motion.a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 relative w-[90%] min-w-[400px] max-w-[475px] gap-2 rounded-2xl pb-8 bg-secondaryBkg overflow-hidden shadow-lg">
            <div
              className="relative m-2 bg-center bg-no-repeat bg-cover h-[200px] lg:h-[250px] rounded-2xl border-2 border-black"
              style={{
                backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/8b440e8d-d3ed-4363-2638-00f164188100/public)`
              }}
            ></div>
            <div className="w-full flex justify-between flex-1 px-3 flex-col items-center">
              <div className="text-center">
                <motion.a
                  href="/services/exterior-seal"
                  className="inline-flex mx-auto my-0 text-3xl font-bold no-underline"
                  variants={serviceVariant}
                  initial="initial"
                  whileHover="hover"
                  animate="initial"
                >
                  Seal & Shine
                  <motion.span className="flex items-center pl-2" variants={arrowVariant}>
                    <ArrowRight color="white" />
                  </motion.span>
                </motion.a>
                <motion.p className="text-center p-0 text-secondaryText font-semibold mx-auto max-w-[90%]">
                  Our exterior decon wash, plus a full vehicle polish, topped with a 1-year ceramic coating!
                </motion.p>
              </div>

              <motion.ul
                className="list-none flex flex-col items-start text-xl font-normal w-full m-0 gap-4 pt-6 pb-4"
                variants={{ initial: {}, show: { transition: { staggerChildren: 0.25 } } }}
                whileInView="show"
                initial="initial"
                viewport={{ once: true }}
              >
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">
                    <span>EVERYTHING</span> From our Exterior Decon Service
                  </p>
                </motion.li>
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">Light Polish To Remove Minor Swirls and Waterspots</p>
                </motion.li>
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">Restore and Ceramic Coat All Trim</p>
                </motion.li>
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">Coat the Windshield (You'll barely need to use your wipers anymore!)</p>
                </motion.li>
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">Apply a 1-Year Ceramic Coating to the Paint</p>
                </motion.li>
              </motion.ul>

              <div className="w-full">
                <div className="flex w-full justify-around gap-4 py-4">
                  <div className="flex flex-col items-center p-2 bg-contactBkg w-full rounded-2xl font-bold">
                    <p className="text-white m-0">6-9</p>
                    <p className="text-secondaryText text-[14px]">hours</p>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-contactBkg w-full rounded-2xl font-bold">
                    <p className="text-secondaryText text-[14px]">Starting at</p>
                    <p className="text-white m-0 text-2xl">${prices["2 Door"]["exterior"]["exteriorseal"]}</p>
                  </div>
                </div>

                <div className="flex w-full justify-around gap-4 flex-col lg:flex-row">
                  <motion.a
                    href="/services/exterior-seal"
                    className="py-3 text-dm tracking-wide px-[0.9rem] bg-secondaryBtnClr rounded-[40px] text-center font-bold text-clip lg:w-1/2"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Learn More
                  </motion.a>
                  <motion.a
                    href="/contact"
                    className="py-3 text-dm tracking-wide px-[0.9rem] bg-primary rounded-[40px] w-full font-bold items-center flex justify-center"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Schedule Today!
                  </motion.a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 relative w-[90%] min-w-[400px] max-w-[475px] gap-2 rounded-2xl pb-8 bg-secondaryBkg overflow-hidden shadow-lg">
            <div
              className="relative m-2 bg-center bg-no-repeat bg-cover h-[200px] lg:h-[250px] rounded-2xl border-2 border-black"
              style={{
                backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4ce4f977-365c-4211-a7f9-68c5ec6d7a00/public)`
              }}
            ></div>
            <div className="w-full flex justify-between flex-1 px-3 flex-col items-center">
              <div className="text-center">
                <motion.a
                  href="/services/exterior-correct"
                  className="inline-flex mx-auto my-0 text-3xl font-bold no-underline"
                  variants={serviceVariant}
                  initial="initial"
                  whileHover="hover"
                  animate="initial"
                >
                  Correct & Protect
                  <motion.span className="flex items-center pl-2" variants={arrowVariant}>
                    <ArrowRight color="white" />
                  </motion.span>
                </motion.a>
                <motion.p className="text-center p-0 text-secondaryText font-semibold mx-auto max-w-[90%]">
                  Our top of the line exterior package. A 2-stage paint correction with with a 3-year ceramic coating (Click Learn More to see why we think 3
                  years is ideal over 5-10 year coatings).
                </motion.p>
              </div>

              <motion.ul
                className="list-none flex flex-col items-start text-xl font-normal w-full m-0 gap-4 pt-6 pb-4"
                variants={{ initial: {}, show: { transition: { staggerChildren: 0.25 } } }}
                whileInView="show"
                initial="initial"
                viewport={{ once: true }}
              >
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">
                    <span>EVERYTHING</span> From our Exterior Decon Service
                  </p>
                </motion.li>
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">Our Full Paint Correction Process (Removes 80%-90% of scratches)</p>
                </motion.li>
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">Restore and Ceramic Coat All Trim</p>
                </motion.li>
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">Coat the Windshield (You'll barely need to use your wipers anymore!)</p>
                </motion.li>
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">Ceramic Coat All Wheel Faces</p>
                </motion.li>
                <motion.li className="flex justify-start items-center text-left" variants={listItemVariant}>
                  <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                  <p className="ml-2">Apply a 3-Year Ceramic Coating to the Paint</p>
                </motion.li>
              </motion.ul>

              <div className="w-full">
                <div className="flex w-full justify-around gap-4 py-4">
                  <div className="flex flex-col items-center p-2 bg-contactBkg w-full rounded-2xl font-bold">
                    <p className="text-white m-0">10-15+</p>
                    <p className="text-secondaryText text-[14px]">hours</p>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-contactBkg w-full rounded-2xl font-bold">
                    <p className="text-secondaryText text-[14px]">Starting at</p>
                    <p className="text-white m-0 text-2xl">${prices["2 Door"]["exterior"]["exteriorcorrect"]}</p>
                  </div>
                </div>

                <div className="flex w-full justify-around gap-4 flex-col lg:flex-row">
                  <motion.a
                    href="/services/exterior-correct"
                    className="py-3 text-dm tracking-wide px-[0.9rem] bg-secondaryBtnClr rounded-[40px] text-center font-bold text-clip lg:w-1/2"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Learn More
                  </motion.a>
                  <motion.a
                    href="/contact"
                    className="py-3 text-dm tracking-wide px-[0.9rem] bg-primary rounded-[40px] w-full font-bold items-center flex justify-center"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Schedule Today!
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br className="extra-space" />
        <div
          className="general-container new-heading-container flex flex-col lg:flex-row lg:items-center lg:justify-between"
          style={{ margin: "5vh auto 2vh auto" }}
        >
          <div>
            <strong className="above-heading text-4xl"> Boats/RV's/Trailers/ & ORV's </strong>
            <h3 className="new-heading text-xl lg:text-2xl">
              Interior and Exterior detailing services for <span className="font-bold">any</span> of your other vehicles.
            </h3>
          </div>
          <a href="/services/recreational" className="popular-readmore-secondary">
            Learn More
          </a>
        </div>
        <br className="extra-space" />
        <div className="service-bkg-lighter" style={{ paddingBottom: "5rem" }}>
          <div className="general-container new-heading-container" style={{ margin: "5vh auto 2vh auto" }}>
            <strong className="above-heading text-4xl">Testimonials</strong>
            <h3 className="new-heading text-xl lg:text-2xl">Read some of the reviews from our valued customers!</h3>
            <p style={{ margin: 0, padding: "1rem 0" }}>
              See all of the reviews from our customers on our{" "}
              <a style={{ color: "dodgerblue" }} target="_blank" rel="noopener" href="https://www.facebook.com/DirtLessDetailing/reviews">
                Facebook
              </a>{" "}
              or{" "}
              <a
                style={{ color: "dodgerblue" }}
                target="_blank"
                rel="noopener"
                href="https://www.google.com/localservices/prolist?g2lbs=ADZRdktLAaGKKobG3aZn2_Qd9tpM-f3ifTKQp4hXsZnMmVk1USpK7Ha4kZIeLdSCTp26Z3uD8UBdDwRY7Zqn7XZatg-9z1GI86mqJXoiFQCA1rCg0Vis_yQK9JiR9qrRMObWwAegw9aPUbKd01T05_4R3o4ry_qhHA%3D%3D&hl=en-US&gl=us&cs=1&ssta=1&q=dirtless%20detailing&oq=dirtless%20detailing&slp=MgA6HENoTUlxZVd0Nkl2SV9nSVY2UTZ0QmgyZWJnaVJSAggCYAB6-gFDaEprYVhKMGJHVnpjeUJrWlhSaGFXeHBibWRJNnZqVDFhcTRnSUFJV2h3UUFCQUJHQUFZQVNJU1pHbHlkR3hsYzNNZ1pHVjBZV2xzYVc1bmtnRVZZMkZ5WDJSbGRHRnBiR2x1WjE5elpYSjJhV05sbWdFa1EyaGtSRk5WYUU1TlJ6bHVVekJXU2xFd1JtNVRWVkpEV2pKYVNHTnVhRzVTVWtGQ3FnRTZFQUV5SGhBQklocEZwOXktNVEwdWdLbGRqT2pnOEdvLWlaQlZ5NUdlSjh3QjV6SVdFQUlpRW1ScGNuUnNaWE56SUdSbGRHRnBiR2x1Wi1BQkFBkgG0AgoNL2cvMTFzYnBjOV8zYgoNL2cvMTFmcDJwN3dtbgoNL2cvMTFrMndndnhyegoNL2cvMTFzbXZfbm13MQoLL2cvMXRmM2I3bHQKDS9nLzExZ2w0dDJkY20KDC9nLzEyNjBieGxoNgoNL2cvMTFwMTN5MnQ4cQoNL2cvMTFjbnpuX3p3agoNL2cvMTFqcTlwcGtfNwoNL2cvMTFneTRsejU5aAoNL2cvMTF0ZDhjN195NQoNL2cvMTFrNDVzNzVmcwoNL2cvMTFnMnhjbHBxMwoNL2cvMTFzNTFrN2YzdAoNL2cvMTFzM2YwMHZzcAoML2cvMTFnem44M3diCg0vZy8xMW5uMGhzanF2Cg0vZy8xMWZxcXoxdmdwCg0vZy8xMXQ0ZmprMDltEgQSAggBEgQKAggB&src=2&spp=Cg0vZy8xMXNicGM5XzNiOtABV2h3UUFCQUJHQUFZQVNJU1pHbHlkR3hsYzNNZ1pHVjBZV2xzYVc1bmtnRVZZMkZ5WDJSbGRHRnBiR2x1WjE5elpYSjJhV05sbWdFa1EyaGtSRk5WYUU1TlJ6bHVVekJXU2xFd1JtNVRWVkpEV2pKYVNHTnVhRzVTVWtGQ3FnRTZFQUV5SGhBQklocEZwOXktNVEwdWdLbGRqT2pnOEdvLWlaQlZ5NUdlSjh3QjV6SVdFQUlpRW1ScGNuUnNaWE56SUdSbGRHRnBiR2x1Wnc9PQ%3D%3D&serdesk=1&lrlstt=1682530844021&ved=2ahUKEwiSvKHoi8j-AhWfHjQIHT0kD2MQvS56BAgwEAE&scp=ChpnY2lkOmNhcl9kZXRhaWxpbmdfc2VydmljZRJgEhIJeUAf2e38kFQRVTQwKEuFSMMiMkRpcnQtTGVzcyBEZXRhaWxpbmcsIDkzMDUgMjA1dGggQXZlIEUsIEJvbm5leSBMYWtlKhQNCAEeHBXFWjC3HQgBHhwlxVowtzAAGhJkaXJ0bGVzcyBkZXRhaWxpbmciEmRpcnRsZXNzIGRldGFpbGluZyoVQ2FyIGRldGFpbGluZyBzZXJ2aWNl#ts=3"
              >
                Google
              </a>{" "}
              page.
            </p>
          </div>
          <InfiniteMovingCards
            items={[
              {
                quote: (
                  <p className="review-text">
                    "Had an issue with the interior of a vehicle that had been in a garage for too long. Dirt-Less handled it professionally and quickly.{" "}
                    <span className="highlight">We will definitely keep going back for our needs.</span>"
                  </p>
                ),
                name: "Jonathon H.",
                title: "Full Interior Detail"
              },
              {
                quote: (
                  <p className="review-text">
                    "Brenden does an amazing job. My car looks amazing.{" "}
                    <span className="highlight">He is super reasonable in his pricing and was very efficient.</span> Will definitely continue to use his service
                    for all our vehicles."
                  </p>
                ),
                name: "Kristi H.",
                title: "Full Interior Detail"
              },
              {
                quote: (
                  <p className="review-text">
                    "Brought in my 12 Escalade and he worked his magic on both inside and outside.{" "}
                    <span className="highlight">Brenden is very good at what he does, the vehicle looks amazing. Better than it was when I bought it.</span>{" "}
                    Thank you so much for getting me into your schedule. I am Extremely pleased with the outcome of your services."
                  </p>
                ),
                name: "Rob B.",
                title: "Full Interior Detail"
              }
            ]}
            speed="normal"
            className="w-screen"
          />
        </div>

        <br className="extra-space" />

        <div className="general-container new-heading-container font-bold">
          <h3 style={{ margin: 0, width: "auto", padding: 0 }} className="new-heading new-heading-center text-4xl lg:text-5xl">
            AUTO DETAILING FAQ's
          </h3>
          <p className="max-w-[900px] mx-auto text-center my-0 font-normal pb-8">
            Answers to some of the most common questions that we get when people are booking with us, please reach out if you have other questions!
          </p>
        </div>
        <section className="flex flex-col items-center xl:flex-row w-11/12 justify-center gap-8 xl:w-2/3">
          <div className="flex flex-col gap-6 w-[500px] calc text-left">
            {faqItems.map((item, i) => (
              <FaqItem key={i} i={i} expanded={expanded} setExpanded={setExpanded} title={item.title} description={item.description} isMobile={smallScreen} />
            ))}
          </div>
          <div className="map">
            <iframe
              style={{ border: 0, margin: "16 auto", width: "100%", height: "100%" }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJxxfUWqz7kFQRotRs8MwWDRE&key=AIzaSyCabi1i-5RcG2qNysx_bZNQnYUMmT_l6YU"
            ></iframe>
          </div>
        </section>
        <br className="extra-space" />
        <hr className="pricing__hr" />
        <div className="text-center">
          <h4 className="text-4xl font-bold py-6">24/7 ONLINE PRICING & BOOKING</h4>

          <BookingButton title="Book Online!" />

          <p className="pt-8 text-2xl">Or simply submit this form to get in contact with us!</p>
        </div>
        <fieldset className="urable-form-container">
          <iframe className="w-4/5 mx-auto lg:max-w-50% h-[600px]" src="https://app.urable.com/form/pMe0iWXWCBfTL47sDvjd/v5CoHzxM7y2da6KIOp2T"></iframe>
        </fieldset>
      </div>
    </div>
  );
}
