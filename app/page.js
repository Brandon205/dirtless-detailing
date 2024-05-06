"use client";
import { useState, useEffect } from "react";
import Benefits from "./Benefits";
import { HeroSlider } from "./components/hero-slider";
import { BookingButton } from "./components/BookingButton";
import { topBtnVariant } from "../utils/animationVariations";
import { motion } from "framer-motion";
import { Titillium_Web } from "next/font/google";
import { InfiniteMovingCards } from "./components/InfiniteMovingCards";
import FaqItem from "./components/FaqItem";
import Image from "next/image";

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
      title: "What do you need from me when you get here?",
      description: "All we will need is an electrical outlet, a water spigot, and preferably all/most personal items out of the car."
    },
    {
      title: "How long will the detail take?",
      description:
        "Every job will take a different amount of time, but once we know the condition of the car and the services requested we can give a good estimate as to how long it will take."
    },
    {
      title: "What forms of payment do you take?",
      description: "We prefer Card/Check payments and can even text invoices to you so that you can pay via card from wherever you are!"
    },
    {
      title: "Do you offer gift cards or gift certificates?",
      description: 'Yes we do! Any of our services can be bought as a gift certificate. On the Contact page choose the "For Someone Else" option.'
    },
    {
      title: "Are you licensed and insured?",
      description: "Yes! We are 100% licensed and insured!"
    },
    {
      title: "How does booking with Dirt-Less Detailing work?",
      description:
        "Once you have booked an appointment with us you're set (if you booked online through Urable you will see your appointment date and time got accepted). From then you'll hear from us again the day before your detail to ensure that the time you picked still works and at this time we'll give you an estimate when we'll get there! "
    }
  ];

  return (
    <div className="App">
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
        <header className="flex flex-col items-center h-[90vh] pt-28 z-50 xl:items-start xl:gap-3 xl:pt-14 text-sm xl:text-lg xl:justify-center">
          <h1 className={`${titillium.className} text-white text-5xl xl:text-8xl text-center xl:text-left font-bold m-0`}>
            Bonney Lake & Pierce County's
            <br />
            Auto Detailing Specialists
          </h1>
          {/* <p className="special-deal-p">
              <span className="special-deal-colored">VALENTINES DAY SPECIAL</span>: Book through Urable below and use code
              <span className="special-deal-colored bold"> VALENTINE10</span> to save 10% on any In Shop Detail!
            </p> */}
          <p className="text-white max-w-screen-lg text-left m-0 text-lg hidden xl:block">
            Anything from a simple interior detail, to the most detail oriented paint correction ceramic coating jobs, you can trust Dirt-Less Detailing to get
            the job done right!
          </p>

          <div className="flex gap-10 pt-8 flex-col lg:flex-row">
            <motion.a href="/contact" className="top-quote-btn" variants={topBtnVariant} whileHover="hover" transition={{ duration: 0.25 }}>
              <img src="../assets/icons/clipboard.png" alt="clipboard" className="btn-icon" /> BOOK NOW!
            </motion.a>
            <motion.a href="tel:2532529758" className="top-quote-btn btn-secondary" variants={topBtnVariant} whileHover="hover" transition={{ duration: 0.25 }}>
              <img src="../assets/icons/phoneMessage.png" alt="call or message" className="btn-icon" /> (253) 252-9758
            </motion.a>
          </div>
        </header>
      </HeroSlider>

      <div className="service-bkg pt-0">
        <Benefits />

        <div className="border border-primary relative px-6 pt-2 pb-6 w-5/6 mx-auto rounded-lg mt-12">
          <div className="border rounded-full absolute -top-6 -left-6 p-4">
            <Image src="/assets/icons/locationPing.svg" width={45} height={45} alt="location icon" />
          </div>
          <strong className="text-3xl italic text-left block mb-8 pl-8">NEW SHOP LOCATION!</strong>
          <p className="text-left">We are now located in the Buckley Business Park just 5 minutes down 410 from our previous location!</p>
          <p className="text-left">With 3x more space we can easily get more people in, allowing way more booking availability and flexibility.</p>
          <div className="flex gap-4 flex-wrap text-left">
            <a
              href="https://www.google.com/maps/place/28120+WA-410,+Buckley,+WA+98321/@47.1584945,-122.0528836,19.25z/data=!4m15!1m8!3m7!1s0x5490efc0f14df8db:0xb8ec0b100429182f!2s28238+WA-410,+Buckley,+WA+98321!3b1!8m2!3d47.158566!4d-122.052058!16s%2Fg%2F11csp3kvgh!3m5!1s0x5490efc05b8ec6cf:0xb04a141d669a9924!8m2!3d47.158288!4d-122.0530141!16s%2Fg%2F11c0vpg6p9?entry=ttu"
              className="contact-link footer-contact-link underline text-blue"
              target="_blank"
              rel="noopener"
            >
              <img src="../assets/icons/placeMarker.png" alt="place marker" className="icon-24" /> Buckley Business Park, 28120 WA-410, Building C6
            </a>
            <a
              href="https://app.urable.com/virtual-shop/pMe0iWXWCBfTL47sDvjd"
              target="_blank"
              rel="noopener"
              className="contact-link footer-contact-link underline text-blue"
            >
              <img src="../assets/icons/clipboard.png" alt="place marker" className="icon-24" /> Book Online Now!
            </a>
          </div>
        </div>

        <div className="general-container new-heading-container pt-5">
          <strong className="above-heading"> Interior Services </strong>
          <h2 className="new-heading">Transform your vehicle's interior with our Premium Auto Detailing services.</h2>
        </div>
        <div className="otherservices-subcontainer">
          <div className="popular-services-card">
            <div className="new-banner">
              <div className="banner">NEW!</div>
            </div>
            <div
              className="popular-img"
              style={{
                backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/e073e12e-8f0c-4ae5-fa12-4abc9ab9db00/public)`
              }}
            ></div>
            <div className="popular-header">
              <a href="/services/interior-swift" className="accent-orange">
                Swift Interior Detail
              </a>
              <p className="text-center p-0">Quick and Affordable Interior Detail</p>
              <div>
                <p>From:</p>
                <p className="popular-pricing-price">$150</p>
              </div>
            </div>
            <hr className="long-hr accent-orange" />

            <ul className="checklist">
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">Vacuum the entire vehicle</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">Wipe down and condition all surfaces</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">Wash all floormats</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">Clean all windows/glass</p>
              </li>
            </ul>

            <hr className="long-hr accent-orange" />
            <div className="popular-link-container">
              <a href="/contact" className="popular-readmore text-white">
                Get in Touch!
              </a>
              <a href="/services/interior-swift" className="popular-readmore-secondary">
                Learn More
              </a>
            </div>
          </div>

          <div className="popular-services-card">
            <div
              className="popular-img"
              style={{
                backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/2a40931e-dd21-407c-dd03-86fd43b05200/public)`
              }}
            ></div>
            <div className="popular-header">
              <a href="/services/interior" className="accent-orange">
                Full Interior Detail
              </a>
              <p className="text-center p-0">Thorough Interior Cleaning</p>
              <div>
                <p>From:</p>
                <p className="popular-pricing-price">$300</p>
              </div>
            </div>
            <hr className="long-hr accent-orange text-pretty" />

            <ul className="checklist">
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">Blow out all dirt/debris</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">Steam extraction/carpet shampooing</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">Door jambs cleaned</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">All Leathers and plastics cleaned</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">All interior windows and glass cleaned</p>
              </li>
            </ul>

            <hr className="long-hr accent-orange" />
            <div className="popular-link-container">
              <a href="/contact" className="popular-readmore text-white">
                Get in Touch!
              </a>
              <a href="/services/interior" className="popular-readmore-secondary">
                Learn More
              </a>
            </div>
          </div>

          <div className="popular-services-card">
            <div
              className="popular-img"
              style={{
                backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/213e3fa9-1def-44b2-3031-1901432b9a00/public)`
              }}
            ></div>
            <div className="popular-header">
              <a href="/services/interior-spill" className="accent-orange">
                Full Interior + Spill Guard
              </a>
              <p className="text-center p-0">Cleaned, Conditioned, and Protected</p>
              <div>
                <p>From:</p>
                <p className="popular-pricing-price">$450</p>
              </div>
            </div>
            <hr className="long-hr accent-orange" />

            <ul className="checklist">
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">
                  <span className="bold">EVERYTHING</span> from our Full Interior Service
                </p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">Interior Ceramic Coating applied on all surfaces</p>
              </li>
            </ul>

            <hr className="long-hr accent-orange" />
            <div className="popular-link-container">
              <a href="/contact" className="popular-readmore text-white">
                Get in Touch!
              </a>
              <a href="/services/interior-spill" className="popular-readmore-secondary">
                Learn More{" "}
              </a>
            </div>
          </div>
        </div>
        <br className="extra-space" />
        <div className="general-container new-heading-container" style={{ margin: "5vh auto 2vh auto" }}>
          <strong className="above-heading"> Exterior Services </strong>
          <h3 className="new-heading">From a quick refresh to a complete paint correction, we cover all things exterior.</h3>
        </div>
        <div className="otherservices-subcontainer">
          <div className="popular-services-card">
            <div
              className="popular-img"
              style={{
                backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b5859464-3c0e-4fcf-8332-17155eb86d00/public)`
              }}
            ></div>
            <div className="popular-header">
              <a href="/services/exterior" className="accent-orange">
                Exterior Decon Wash
              </a>
              <p className="text-center p-0">Quick Wash & Decontamination</p>
              <div>
                <p
                  style={{
                    marginBottom: 0,
                    color: "#c0c0c0",
                    textAlign: "left"
                  }}
                >
                  From:
                </p>
                <p className="popular-pricing-price">$100</p>
              </div>
            </div>
            <hr className="long-hr accent-orange" />

            <ul className="checklist">
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">Full vehicle strip wash (to remove any embedded contaminants, tar, and sap)</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">Thoroughly wash tires, wheels, wheel barrels and wells</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">Clean door jambs and the gas door</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">Ceramic protection applied to paint (lasts up to 3 months)</p>
              </li>
            </ul>

            <hr className="long-hr accent-orange" />
            <div className="popular-link-container">
              <a href="/contact" className="popular-readmore text-white">
                Get in Touch!
              </a>
              <a href="/services/exterior" className="popular-readmore-secondary">
                Learn More{" "}
              </a>
            </div>
          </div>
          <div className="popular-services-card">
            <div
              className="popular-img"
              style={{
                backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/977438a8-129b-496b-9845-e55e3198e900/public)`
              }}
            ></div>
            <div className="popular-header">
              <a href="/services/exterior-seal" className="accent-orange">
                Exterior Seal & Shine
              </a>
              <p className="text-center p-0">Wash, Polish, and Paint Coating</p>
              <div>
                <p
                  style={{
                    marginBottom: 0,
                    color: "#c0c0c0",
                    textAlign: "left"
                  }}
                >
                  From:
                </p>
                <p className="popular-pricing-price">$500</p>
              </div>
            </div>
            <hr className="long-hr accent-orange" />

            <ul className="checklist">
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">
                  <span className="bold">EVERYTHING</span> from our Exterior Decon Service
                </p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">Light polish to remove minor swirls and waterspots</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">Restore and ceramic coat all trim</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">Windshield Coating (you won't even need to use your wipers anymore!)</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">Ceramic protection applied on paint (lasts up to 1 year)</p>
              </li>
            </ul>

            <hr className="long-hr accent-orange" />
            <div className="popular-link-container">
              <a href="/contact" className="popular-readmore text-white">
                Get in Touch!
              </a>
              <a href="/services/exterior-seal" className="popular-readmore-secondary">
                Learn More{" "}
              </a>
            </div>
          </div>
          <div className="popular-services-card">
            <div
              className="popular-img"
              style={{
                backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/4ce4f977-365c-4211-a7f9-68c5ec6d7a00/public)`
              }}
            ></div>
            <div className="popular-header">
              <a href="/services/exterior-correct" className="accent-orange">
                Correct and Protect
              </a>
              <p className="text-center p-0">Wash, 2 Stage Paint Correction, and Ceramic Coating</p>
              <div>
                <p
                  style={{
                    marginBottom: 0,
                    color: "#c0c0c0",
                    textAlign: "left"
                  }}
                >
                  From:
                </p>
                <p className="popular-pricing-price">$1,000</p>
              </div>
            </div>
            <hr className="long-hr accent-orange" />

            <ul className="checklist">
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">
                  <span className="bold">EVERYTHING</span> from our Exterior Decon Service
                </p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">Our full paint correction process (Removes 80%-90% of scratching)</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">Restore and ceramic coat all trim</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">Windshield Coating (you won't even need to use your wipers anymore!)</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">Ceramic coat wheel faces</p>
              </li>
              <li>
                <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
                <p className="checklist-item">Ceramic coating applied to paint (Lasts a Lifetime*!)</p>
              </li>
            </ul>

            <hr className="long-hr accent-orange" />
            <div className="popular-link-container">
              <a href="/contact" className="popular-readmore text-white">
                Get in Touch!
              </a>
              <a href="/services/exterior-correct" className="popular-readmore-secondary">
                Learn More{" "}
              </a>
            </div>
          </div>
        </div>
        <br className="extra-space" />
        <div className="service-bkg-lighter" style={{ paddingBottom: "5rem" }}>
          <div className="general-container new-heading-container" style={{ margin: "5vh auto 2vh auto" }}>
            <strong className="above-heading">Testimonials</strong>
            <h3 className="new-heading">Read some of the reviews from our valued customers!</h3>
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
        <hr className="pricing__hr" />
        <div className="general-container new-heading-container font-bold">
          <h3 style={{ margin: 0, width: "auto", padding: 0 }} className="new-heading new-heading-center">
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
          <div className="map relative">
            <Image
              src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/816ccafc-084b-4d7d-8735-8da8117a4700/public"
              className="h-auto object-cover rounded-lg"
              fill
              alt="Image of beautiful ceramic coated car on a foggy morning"
            />
            {/* <iframe
                title="Map of Dirt-Less Detailing location"
                width={"300"}
                height={"350"}
                style={{ border: 0 }}
                loading="lazy"
                src={`https://www.google.com/maps/embed/v1/place?zoom=15&q=place_id:ChIJxxfUWqz7kFQRotRs8MwWDRE&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS}`}
              ></iframe> */}
          </div>
        </section>
        <br className="extra-space" />
        <hr className="pricing__hr" />
        <h4 className="text-4xl font-bold py-6">24/7 ONLINE PRICING & BOOKING</h4>

        <BookingButton title="Book Online!" />

        <p className="pt-8 text-2xl">Submit this form to easily get in contact with us!</p>
        <fieldset className="urable-form-container">
          <iframe
            className="w-4/5 mx-auto lg:max-w-50% h-[600px]"
            src="https://app.urable.com/form/pMe0iWXWCBfTL47sDvjd/v5CoHzxM7y2da6KIOp2T"
            frameBorder="0"
          ></iframe>
        </fieldset>
      </div>
    </div>
  );
}
