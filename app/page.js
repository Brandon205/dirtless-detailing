"use client";
import { useState, useEffect } from "react";
// import Benefits from "./Benefits";
import { HeroSlider } from "./components/hero-slider";
import { BookingButton } from "./components/BookingButton";
import { topBtnVariant } from "../utils/animationVariations";
import { Titillium_Web } from "next/font/google";
import { InfiniteMovingCards } from "./components/InfiniteMovingCards";
import Image from "next/image";
import FaqItem from "./components/FaqItem";
import { motion } from "framer-motion";
import IframeSuspense from "../utils/IframeSuspense";
import HomePageCard from "./components/HomePageCard";

const titillium = Titillium_Web({ weight: ["400", "600"], subsets: ["latin"] });

const jsonld = {
  "@type": "LocalBusiness",
  "name": "Dirt-Less Detailing",
  "image": "/assets/images/showcase/homepage-main.webp",
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
      title: "What areas do you service?",
      description:
        "We currently have our main shop location in Buckley, Washington. For our mobile services we will go typically as far north as Kent, and as far south as Graham. Contact us if you have specific questions on your location!"
    },
    {
      title: "Do you need water/electrical for mobile services?",
      description: "Yes, all we will need is an electrical outlet, a water spigot, and preferably any large personal items out of the car."
    },
    {
      title: "I won't have a ride back to my house, what are my options?",
      description:
        "No worries, it happens all the time! We have done everything from bringing people back home, picking their car up and dropping it off later, we've even had customers order an Uber straight from our shop."
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
          "/assets/images/showcase/range-rover-left.webp",
          "/assets/images/showcase/ceramicBeads1.webp",
          "/assets/images/showcase/3doorFordRight.webp",
          "/assets/images/showcase/wiping.webp",
          "/assets/images/showcase/fordGTBack.webp",
          "/assets/images/showcase/driverNewLexus.webp",
          "/assets/images/showcase/archCoTruck.webp"
        ]}
      >
        <header className="w-screen flex flex-col h-[90vh] pt-28 z-50 items-center lg:items-start lg:pl-20 xl:gap-3 text-sm xl:text-lg justify-center">
          <div className="text-center lg:text-left">
            <strong className="text-gray-400 text-md lg:text-xl">Dirt-Less Detailing</strong>
            <h1 className={`${titillium.className} text-white text-5xl xl:text-7xl xl:text-left font-bold m-0 lg:max-w-[60%]`}>
              Your Auto Detailing & Ceramic Coating Specialists
            </h1>
          </div>
          <div className="text-center lg:text-left">
            <p className="text-gray-200 max-w-screen-md font-semibold text-left m-0 text-xl hidden xl:block">
              Everything from removing stains from your interior, to our most detail-oriented paint correction and ceramic coating jobs, you can trust Dirt-Less
              Detailing to get the job done right!
            </p>
            {/* <div className="flex gap-2 lg:gap-8 items-center py-4 flex-col lg:flex-row max-w-[90%] mx-auto lg:mx-0">
              <Image src="/assets/icons/valentinesGift.svg" alt="valentines gift box" width={48} height={48} />
              <div>
                <p className="text-[#dd9fc0] font-medium text-2xl">
                  <span className="text-[#dd9fc0] font-extrabold text-2xl">10% OFF </span>
                  all details and Gift Cards with code: <span className="text-[#dd9fc0] font-extrabold text-2xl">VALENTINE10</span>
                </p>
                <p className="text-white text-lg w-1/2 lg:w-full mx-auto">Valid until 2/14/25 on any Online Booking!</p>
              </div>
            </div> */}
            <div className="flex gap-10 pt-8 flex-col lg:flex-row max-w-screen-md">
              <motion.a href="/contact" className="top-quote-btn" variants={topBtnVariant} whileHover="hover" transition={{ duration: 0.25 }}>
                <Image src="/assets/icons/clipboard.svg" alt="clipboard" className="btn-icon text-white" width={36} height={36} />
                BOOK NOW!
              </motion.a>
              <motion.a
                href="tel:2532529758"
                className="top-quote-btn btn-secondary"
                variants={topBtnVariant}
                whileHover="hover"
                transition={{ duration: 0.25 }}
              >
                <Image src="/assets/icons/phone-call-message.svg" alt="call or message" className="btn-icon text-white" width={36} height={36} />
                (253) 252-9758
              </motion.a>
            </div>
            <span className="text-white bold leading-none">Gift Cards Available Now!</span>
          </div>
        </header>
      </HeroSlider>

      <div className="service-bkg pt-0">
        {/* {!smallScreen && <Benefits />} */}

        <div className="general-container new-heading-container pt-5">
          <strong className="above-heading text-4xl">Interior Services</strong>
          <h2 className="new-heading text-xl lg:text-2xl">Transform your vehicle's interior with our Premium Auto Detailing services.</h2>
        </div>
        <div className="flex flex-col lg:flex-row flex-grow lg:justify-between lg:items-stretch lg:flex-wrap lg:w-[90%] lg:my-0 mx-auto justify-center items-center gap-24 mb-8">
          <HomePageCard
            title="Swift Interior Detail"
            imageUrl="/assets/images/interior/driver3.jpg"
            description="Our simple interior cleaning, best for maintenance or to quickly freshen up your interior."
            steps={[
              "Complete vehicle vacuuming",
              "Light/small stain spot treatment",
              "Clean and condition all leather and plastics",
              "Clean interior glass to a streak-free finish"
            ]}
            hours="1.5-3"
            linkUrl="/services/interior-swift"
          />

          <HomePageCard
            title="Full Interior Detail"
            imageUrl="/assets/images/interior/driver5.jpg"
            description="Our thorough interior cleaning, best for cars with staining, lots of dog hair/dirt, or ones that haven't been cleaned out in a long time."
            steps={[
              "Thorough blow-out and vacuum to remove all dirt and debris",
              "Stain removal and extraction of all fabrics + headliner",
              "Wash all of the door jambs",
              "Deep cleaning & conditioning of all leather and plastics",
              "Wash/clean all floor mats",
              "Clean interior glass to a streak-free finish"
            ]}
            hours="3-6+"
            linkUrl="/services/interior"
          />

          <HomePageCard
            title="Interior + Spill Guard"
            imageUrl="/assets/images/interior/driver12.jpg"
            description="Our Full Interior Service topped with a interior ceramic spray on all surfaces, perfect for making any future cleaning a breeze."
            steps={[
              "EVERYTHING From our Full Interior Service",
              "All Leathers/plastics conditioned with an interior ceramic coating",
              "All Carpet coated and brushed with our interior ceramic coating"
            ]}
            hours="4.5-7+"
            linkUrl="/services/interior-spill"
          />
        </div>

        <br className="extra-space" />

        <div className="general-container new-heading-container" style={{ margin: "5vh auto 2vh auto" }}>
          <strong className="above-heading text-4xl"> Exterior Services </strong>
          <h3 className="new-heading text-xl lg:text-2xl">
            From a quick wash to a complete paint correction and ceramic coating, we cover all things exterior!
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row flex-grow lg:justify-between lg:items-stretch lg:flex-wrap lg:w-[90%] lg:my-0 mx-auto justify-center items-center gap-24 mb-8">
          <HomePageCard
            title="Exterior Decon Wash"
            imageUrl="/assets/images/exterior/jeepRenegade.jpg"
            description="The detailers car wash - one that goes far beyond what an auto car wash can do. Your wheels, tires, and even paint will be cleaner than ever!"
            steps={[
              "Full vehicle hand wash, with tar/sap remover applied in spots with sap and tar",
              "Scrub & wash the tires, wheels, wheel barrels, and wells",
              "Clean out all door jambs and the gas door",
              "Apply a ceramic spray on all surfaces (lasts 3-6 months)"
            ]}
            hours="4.5-7+"
            linkUrl="/services/exterior"
          />

          <HomePageCard
            title="Seal & Shine"
            imageUrl="/assets/images/sealshine/seal-shine.jpg"
            description="Our exterior decon wash, plus a full vehicle polish, topped with a 1-year ceramic coating!"
            steps={[
              "EVERYTHING From our Exterior Decon Service",
              "Single-stage polish to remove light scratches and swirls",
              "Restore and ceramic coat all trim",
              "Coat the windshield (most detailers charge extra for this!)",
              "Apply a 1-year ceramic coating to the paint"
            ]}
            hours="6-9"
            linkUrl="/services/exterior-seal"
          />

          <HomePageCard
            title="Correct & Protect"
            imageUrl="/assets/images/correction/genesis1.jpeg"
            description="Our top of the line exterior package. A 2-stage paint correction with with a 3-year ceramic coating (Click Learn More to see why we think 3
                  years is ideal over 5-10 year coatings)."
            steps={[
              "EVERYTHING From our Exterior Decon Service",
              "Our full paint correction process (removes 80%-90% of scratches)",
              "Restore and ceramic coat all trim",
              "Coat the windshield (you'll barely need to use your wipers anymore!)",
              "Ceramic coat all wheel faces (usually not included in most detail packages!)",
              "Apply a 3-year ceramic coating to the paint"
            ]}
            hours="10-15+"
            linkUrl="/services/exterior-correct"
          />
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
          <a href="/services/recreational" className="popular-readmore-secondary" aria-label="Learn more about our offers on recreational vehicles.">
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
          <div className="flex flex-col gap-6 w-[500px] w-full calc text-left">
            {faqItems.map((item, i) => (
              <FaqItem key={i} i={i} expanded={expanded} setExpanded={setExpanded} title={item.title} description={item.description} isMobile={smallScreen} />
            ))}
          </div>
          <div className="map relative">
            <IframeSuspense
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJxxfUWqz7kFQRotRs8MwWDRE&key=AIzaSyCabi1i-5RcG2qNysx_bZNQnYUMmT_l6YU"
              title="Google Maps Location"
              classes="border-0 h-full w-full my-4 mx-auto"
            />
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
          <IframeSuspense
            src="https://app.urable.com/form/pMe0iWXWCBfTL47sDvjd/v5CoHzxM7y2da6KIOp2T"
            title="Contact Form"
            classes="w-4/5 mx-auto lg:max-w-50% h-[600px]"
          />
        </fieldset>
      </div>
    </div>
  );
}
