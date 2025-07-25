"use client";
import React, { useState, useRef, useEffect } from "react";
import { topBtnVariant } from "../../utils/animationVariations";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import FaqItem from "../components/FaqItem";
import { PhoneCall, ClipboardCheck } from "lucide-react";
import Lottie from "lottie-react";
import starJSON from "../../public/assets/icons/starJSON.json";
import calendarJSON from "../../public/assets/icons/calendarJSON.json";
import carJSON from "../../public/assets/icons/carJSON.json";
import locationJSON from "../../public/assets/icons/locationPing.json";
import BaseSchema from "../jsonSchemas/BaseSchema";

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);
  const scrollY = useScroll();

  const calendarRef = useRef(null);
  const carRef = useRef(null);
  const starRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 979) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  }, []);

  // const negativeXMovement = useTransform(scrollY.scrollYProgress, [0, 0.32], [0, -90]);

  // const negativeYMovement = useTransform(scrollY.scrollYProgress, [0, 0.32], [0, -30]);

  const xMovement = useTransform(scrollY.scrollYProgress, [0, 0.32], [0, 80]);

  const yMovement = useTransform(scrollY.scrollYProgress, [0, 0.32], [0, 30]);

  const faqItems = [
    {
      title: "Can you come to my apartment or workplace?",
      description:
        "It will depend on the amount of space and access if we can or not. Typically apartment complexes and some workplaces can be strict with this type of thing and we may not be able to come to you. Let us know if you need a ride back to your house while we detail your vehicle, we give out rides back all the time! We can also come pick up your vehicle if needed, just let us know when you book."
    },
    {
      title: "Are you licensed and insured?",
      description: "Yes of course! We are fully insured for our vehicle pickup service as well!"
    },
    {
      title: "What types of payment do you accept?",
      description: "We can take cash, check, and all major debit/credit cards!"
    },
    {
      title: "What cities do you service?",
      description:
        "With our mobile service we can go out to: Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Lake Tapps, Federal Way, Orting, South Prairie, Black Diamond, Milton, Edgewood, and Graham. Our current mobile fee is $50, this helps us cover the packing, travel, setup, and takedown time for our services."
    },
    {
      title: "Do I have to be there the whole time you're working on my car?",
      description: "Absolutely not! You are free to go do whatever you need to do while we are working."
    },
    {
      title: "Do you install PPF or window tint?",
      description:
        "We do not install PPF or window tint at this time. If you are looking for window tinting just a few bays down from our shop we have an installer that we recommend!"
    },
    {
      title: "How would you recommend I wash my car on my own?",
      description: (
        <p className="faq-description">
          We have a guide on the steps and products we recommend on our{" "}
          <a href="/products/ceramic-coating" className="text-blue-500">
            DIY Maintenance
          </a>{" "}
          page. All the products are perfectly fine to use whether your car is ceramic coated or not! If you are in need of a very quick wash we only recommend
          touch-less car washes as they won't damage your paint as much as a normal car wash.
        </p>
      )
    }
  ];

  return (
    <div className="App bg-contact">
      <BaseSchema
        serviceImage="/assets/images/interior/driver16.jpg"
        url="https://www.dirtlessdetailing.com/about"
        makesOffer={{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Auto Detailing",
            "description":
              "Learn more about us and why Dirt-Less Detailing was founded, and check out our FAQ for to get answers to our most frequently asked questions.",
            "areaServed": "Buckley, Bonney Lake, and surrounding areas.",
            "serviceType": "Auto Detailing"
          }
        }}
      />
      {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld, null, 2) }} /> */}
      <div className="cover">
        <Image src="/assets/images/correction/teslafoam.jpg" alt="Dirt-Less Detailing" priority fill quality={50} className="object-cover" />
      </div>
      <div className="servicepage-header">
        <div style={{ alignItems: "center" }}>
          <h1>
            <span className="text-amber-500 bold text-shadow">About Us & FAQ</span>
          </h1>
          <h2 className="page-subheading" style={{ textAlign: "center" }}>
            Learn a little more about Dirt-Less Detailing!
          </h2>
          <div className="header-buttons">
            <motion.a href="/contact" className="top-quote-btn" variants={topBtnVariant} whileHover="hover" transition={{ duration: 0.25 }}>
              <ClipboardCheck color="#ffffff" className="mr-2" size={36} /> Get a Free Quote
            </motion.a>
            <motion.a href="tel:2532529758" className="top-quote-btn btn-secondary" variants={topBtnVariant} whileHover="hover" transition={{ duration: 0.25 }}>
              <PhoneCall color="#ffffff" className="mr-2" size={36} />
              (253) 252-9758
            </motion.a>
          </div>
        </div>
      </div>

      <section style={{ lineHeight: "2", fontSize: "1.2em" }} className="about-container">
        <div className="about-explain">
          {smallScreen ? (
            <div className="about-image-container">
              <div className="about-image w-full max-w-[400px] h-[225px]">
                <Image
                  src="/assets/images/exterior/fordGTBack.jpg"
                  alt="Clean Ford GT in a garage"
                  sizes="(max-width: 979px) 400px, (min-width: 980px) 450px"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="about-image w-full max-w-[400px] h-[225px]">
                <Image
                  src="/assets/images/showcase/worktruckGriots.jpg"
                  alt="Our worktruck in front of Griots Garage in Tacoma"
                  fill
                  sizes="(max-width: 979px) 400px, (min-width: 980px) 450px"
                  className="object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="about-image-container">
              <motion.div style={{ x: smallScreen ? "" : xMovement, y: smallScreen ? "" : yMovement }} className="about-image w-[450px] h-[300px]">
                <Image src="/assets/images/exterior/fordGTBack.jpg" alt="Clean Ford GT in a garage" className="rounded-lg object-cover" fill />
              </motion.div>
            </div>
          )}
          <div className="text-left">
            <h3 className="text-large">You shouldn't have to take time out of your busy day to clean your car.</h3>
            <p className="pb-4">
              We can do the dirty work for you, leaving you free to do whatever you desire. After hundreds of completed details over the last 9 years we've seen
              it all, and perfected how we tackle every aspect of it.
            </p>
            <p className="pb-4">
              Starting almost a decade ago as a detailer at an autobody shop, I started Dirt-Less Detailing to continue doing what I love doing for everyone in
              Bonney Lake.
            </p>
            <p>
              Since I started I've spent about as much time detailing as I have doing research about the products and procedures we use, and I have seen the
              benefits from my research pay off in every car that we detail!
            </p>
          </div>
        </div>

        <div className="about-testimonial">
          <div className="testimonial">
            <div className="customer-icon">
              <p style={{ position: "absolute", margin: 0, transform: "translateX(90%)" }}>K</p>
            </div>
            <p className="about-review">
              “I cannot believe the hair and grime they were able to get out of my car. Animals, ice cream and makeup spills. Incredible! 150,000 miles and my
              interior looks brand new. Ozone treatment has it smelling so refreshed. I can't say enough about how impressed I am. On top of that they finished
              exactly when they said they would and were great to work with. Will definitely use again and refer to friends and family.”
            </p>
            <p style={{ color: "#41444A", fontWeight: "bold", fontSize: "20px" }}>Kristen H.</p>
          </div>
          <div className="stats-container">
            <div className="stat">
              <Lottie
                animationData={carJSON}
                lottieRef={carRef}
                style={{ width: "70px", height: "70px", gridArea: "icon" }}
                loop={0}
                onMouseEnter={() => {
                  carRef.current.stop();
                  carRef.current.play();
                }}
                onMouseLeave={() => carRef.current.goToAndStop(90, true)}
              />
              <strong>1,500+</strong>
              <p>Details Completed</p>
            </div>
            <div className="stat">
              <Lottie
                animationData={starJSON}
                lottieRef={starRef}
                style={{ width: "70px", gridArea: "icon" }}
                loop={0}
                onMouseEnter={() => {
                  starRef.current.stop();
                  starRef.current.play();
                }}
                onMouseLeave={() => starRef.current.goToAndStop(20, true)}
              />
              <strong>30+</strong>
              <p>5 Star Reviews</p>
            </div>
            <div className="stat">
              <Lottie
                animationData={calendarJSON}
                lottieRef={calendarRef}
                style={{ width: "70px", gridArea: "icon" }}
                loop={0}
                onMouseEnter={() => {
                  calendarRef.current.stop();
                  calendarRef.current.play();
                }}
                onMouseLeave={() => calendarRef.current.goToAndStop(60, true)}
              />
              <strong>9+</strong>
              <p>Years in Service</p>
            </div>
            <div className="stat">
              <Lottie
                animationData={locationJSON}
                lottieRef={mapRef}
                style={{ width: "70px", gridArea: "icon" }}
                loop={0}
                onMouseEnter={() => {
                  mapRef.current.stop();
                  mapRef.current.play();
                }}
                onMouseLeave={() => mapRef.current.goToAndStop(80, true)}
              />
              <strong>Mobile</strong>
              <p>Services</p>
            </div>
          </div>
        </div>

        <div className="about-image w-full max-w-[800px] h-[375px] mx-auto">
          <Image
            src="/assets/images/showcase/porscheFront.jpg"
            alt="Dirt-Less Detailing Owner"
            sizes="(max-width: 979px) 100vw, (min-width: 980px) 800px"
            fill
            className="object-cover"
          />
        </div>
        <h3 style={{ fontSize: "2.5em", margin: 0, textAlign: smallScreen ? "left" : "center" }}>Dirt-Less Detailing</h3>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }} className="text-left">
          <p>
            Dirt-Less Detailing is a premier auto detailing company founded 2 years ago by Brenden (on the right in the picture), an experienced detailer with 8
            years of industry knowledge. We specialize in restoring your vehicle's beauty, inside and out. Our mission is simple - to provide you with the best
            results and customer service that your money can buy. Let us make your car shine like new again!
          </p>
          <p>
            At Dirt-Less Detailing, we are passionate about providing top-notch auto detailing services to our valued clients. With our comprehensive range of
            services, including interior and exterior detailing, ceramic coatings, paint corrections, and engine bay cleanings, we strive to keep your vehicle
            looking and performing its best. Trust us to provide the care and attention to detail that your car deserves.
          </p>
          <p>
            Our shop location is right in the{" "}
            <a href="https://maps.app.goo.gl/bhPDhjUN4jsSegu48" className="text-blue-500" target="_blank" rel="noopener">
              Buckley Business Park
            </a>{" "}
            Building C6 off State Route 410.
          </p>
        </div>

        <h3 style={{ fontSize: "2.5em" }}>FAQ</h3>
        <div className="faq-container" itemScope itemType="https://schema.org/FAQPage">
          {faqItems.map((item, i) => (
            <FaqItem key={i} i={i} expanded={expanded} setExpanded={setExpanded} title={item.title} description={item.description} isMobile={smallScreen} />
          ))}
        </div>
      </section>
    </div>
  );
}
