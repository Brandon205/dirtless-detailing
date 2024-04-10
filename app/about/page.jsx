"use client";
import React, { useState, useRef, useEffect } from "react";
import { topBtnVariant } from "../../utils/animationVariations";
import { motion, useTransform, useScroll } from "framer-motion";
import FaqItem from "../components/FaqItem";
import Lottie from "lottie-react";
import starJSON from "../../public/assets/icons/starJSON.json";
import calendarJSON from "../../public/assets/icons/calendarJSON.json";
import carJSON from "../../public/assets/icons/carJSON.json";
import locationJSON from "../../public/assets/icons/locationPing.json";

const jsonld = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What do you need from me when you get here?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All we will need is an electrical outlet, a water spigot, and preferably all/most personal items out of the car.",
      },
    },
    {
      "@type": "Question",
      name: "How long will the detail take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every job will take a different amount of time, but once we know the condition of the car and the services requested we can give a good estimate as to how long it will take.",
      },
    },
    {
      "@type": "Question",
      name: "Can you come to my apartment or workplace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It will depend on the amount of space and access if we can or not. Typically apartment complexes can be strict with this type of thing and it's best if you're able to bring your vehicle to us.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer gift cards or gift certificates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'Yes we do! Any of our services can be bought as a gift certificate. On the Contact page choose the "For Someone Else" option.',
      },
    },
    {
      "@type": "Question",
      name: "What cities do you service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With our mobile service we can go out to: Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Lake Tapps, Federal Way, Orting, South Prairie, Black Diamond, Milton, Edgewood, and Graham.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to be there the whole time you're working on my car?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely not! You are free to go do whatever you need to do while we are working.",
      },
    },
  ],
};

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

  const negativeXMovement = useTransform(scrollY.scrollYProgress, [0, 0.32], [0, -90]);

  const negativeYMovement = useTransform(scrollY.scrollYProgress, [0, 0.32], [0, -30]);

  const xMovement = useTransform(scrollY.scrollYProgress, [0, 0.32], [0, 80]);

  const yMovement = useTransform(scrollY.scrollYProgress, [0, 0.32], [0, 30]);

  const faqItems = [
    {
      title: "What do you need from me when you get here?",
      description:
        "All we will need is an electrical outlet, a water spigot, and preferably all/most personal items out of the car.",
    },
    {
      title: "How long will the detail take?",
      description:
        "Every job will take a different amount of time, but once we know the condition of the car and the services requested we can give a good estimate as to how long it will take.",
    },
    {
      title: "What forms of payment do you take?",
      description:
        "We prefer card payments as it's easier for us to process, however, if that's not convenient for you we also accept cash and check.",
    },
    {
      title: "Do you detail boats?",
      description:
        "Yes, however, currently we are only doing boat interiors and washes and no polishing for now. Call or text us to get a quote, price is a flat fee per foot in length!",
    },
    {
      title: "Can you come to my apartment or workplace?",
      description:
        "It will depend on the amount of space and water/electrical access if we can or not. Typically apartment complexes can be strict with this type of thing and it's best if you're able to bring your vehicle to us.",
    },
    {
      title: "Do you offer gift cards or gift certificates?",
      description:
        'Yes we do! Any of our services can be bought as a gift certificate. On the Contact page choose the "For Someone Else" option.',
    },
    {
      title: "Are you licensed and insured?",
      description: "Yes! We are 100% licensed and insured!",
    },
    {
      title: "What cities do you service?",
      description:
        "With our mobile service we can go out to: Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Lake Tapps, Federal Way, Orting, South Prairie, Black Diamond, Milton, Edgewood, and Graham. *Note: Mobile service is free only if the total cost of your service is more than $200, otherwise there is a $1/mile fee.",
    },
    {
      title: "Do I have to be there the whole time you're working on my car?",
      description: "Absolutely not! You are free to go do whatever you need to do while we are working.",
    },
    {
      title: "How would you recommend I wash my car on my own?",
      description: (
        <p className="faq-description">
          We have a guide on the steps and products we recommend on our{" "}
          <a href="/products/ceramic-coating" className="aside-link">
            DIY Maintenance
          </a>{" "}
          page. All the products are perfectly fine to use whether your car is ceramic coated or not! If you are in need
          of a very quick wash we only recommend touch-less car washes as they won't damage your paint as much as a
          normal car wash.
        </p>
      ),
    },
  ];

  return (
    <div className="App bg-contact">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld, null, 2) }} />
      <div
        className="cover"
        style={{
          backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/a7b4af9c-97db-42dc-3b72-452a6221aa00/cover')`,
        }}
      ></div>
      <div className="servicepage-header">
        <div style={{ alignItems: "center" }}>
          <h1>
            <span className="accent-orange bold text-shadow">About Us & FAQ</span>
          </h1>
          <h2 className="page-subheading" style={{ textAlign: "center" }}>
            Learn a little more about us at Dirt-Less Detailing!
          </h2>
          <div className="header-buttons">
            <motion.a
              href="/contact"
              className="top-quote-btn"
              variants={topBtnVariant}
              whileHover="hover"
              transition={{ duration: 0.25 }}
            >
              <img src="../assets/icons/clipboard.png" alt="clipboard" className="btn-icon" /> Get a Free Quote
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
      </div>

      <section style={{ lineHeight: "2", fontSize: "1.2em" }} className="about-container">
        <div className="about-explain">
          {smallScreen ? (
            <div className="about-image-container">
              <div
                className="about-image"
                style={{
                  backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3a1a1e74-854b-4aa9-ae8e-06816ec80200/public')`,
                }}
              >
                <img
                  style={{ visibility: "hidden" }}
                  alt="moldy biohazard van before and after"
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3a1a1e74-854b-4aa9-ae8e-06816ec80200/public"
                />
              </div>
              <div
                className="about-image"
                style={{
                  backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b5859464-3c0e-4fcf-8332-17155eb86d00/public')`,
                }}
              >
                <img
                  style={{ visibility: "hidden" }}
                  alt="Drivers side of Silver Dodge Ram"
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b5859464-3c0e-4fcf-8332-17155eb86d00/public"
                />
              </div>
            </div>
          ) : (
            <div className="about-image-container">
              <motion.div
                className="about-image"
                style={{
                  backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3a1a1e74-854b-4aa9-ae8e-06816ec80200/public')`,
                  x: smallScreen ? "" : negativeXMovement,
                  y: smallScreen ? "" : negativeYMovement,
                }}
              >
                <img
                  style={{ visibility: "hidden" }}
                  alt="moldy biohazard van before and after"
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/3a1a1e74-854b-4aa9-ae8e-06816ec80200/public"
                />
              </motion.div>
              <motion.div
                className="about-image"
                style={{
                  backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b5859464-3c0e-4fcf-8332-17155eb86d00/public')`,
                  x: smallScreen ? "" : xMovement,
                  y: smallScreen ? "" : yMovement,
                }}
              >
                <img
                  style={{ visibility: "hidden" }}
                  alt="Drivers side of Silver Dodge Ram"
                  src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/b5859464-3c0e-4fcf-8332-17155eb86d00/public"
                />
              </motion.div>
            </div>
          )}
          <div className="text-left">
            <h3 className="text-large">You shouldn't have to take time out of your busy day to clean your car.</h3>
            <p>
              We can do the dirty work for you, leaving you free to do whatever you desire. After hundreds of completed
              details over the last 8 years we've seen it all, and perfected how we tackle every aspect of it.
            </p>
            <p>
              Starting almost a decade ago as a detailer at a autobody shop, I started Dirt-Less Detailing to bring what
              I learned from that to everybody near Bonney Lake.
            </p>
            <p>
              Since I started detailing I've put about as much time detailing in as I have doing research about the
              products and procedures I use, and I have seen the benefits from my research pay off in every car that we
              detail.
            </p>
            <p>
              Whether it's our Swift Interior Detail or a full paint correction and ceramic coating service I can assure
              you that the differences will be astonishing!
            </p>
          </div>
        </div>

        <div className="about-testimonial">
          <div className="testimonial">
            <div className="customer-icon">
              <p style={{ position: "absolute", margin: 0, transform: "translateX(90%)" }}>K</p>
            </div>
            <p className="about-review">
              “I cannot believe the hair and grime they were able to get out of my car. Animals, ice cream and makeup
              spills. Incredible! 150,000 miles and my interior looks brand new. Ozone treatment has it smelling so
              refreshed. I can't say enough about how impressed I am. On top of that they finished exactly when they
              said they would and were great to work with. Will definitely use again and refer to friends and family.”
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
              <strong>1,000+</strong>
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
              <strong>20+</strong>
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
              <strong>8+</strong>
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

        <div
          className="about-large-image"
          style={{
            backgroundImage: `url('https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/public')`,
          }}
        >
          <img
            style={{ visibility: "hidden" }}
            alt="Me on the right of polished show truck"
            src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/public"
          />
        </div>
        <h3 style={{ fontSize: "2.5em", margin: 0, textAlign: smallScreen ? "left" : "center" }}>
          Dirt-Less Detailing
        </h3>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }} className="text-left">
          <p>
            Dirt-Less Detailing is a premier auto detailing company founded 2 years ago by Brenden (on the right in the
            picture), an experienced detailer with 8 years of industry knowledge. We specialize in restoring your
            vehicle's beauty, inside and out. Our mission is simple - to provide you with the best results and customer
            service that your money can buy. Let us make your car shine like new again!
          </p>
          <p>
            At Dirt-Less Detailing, we are passionate about providing top-notch auto detailing services to our valued
            clients. With our comprehensive range of services, including interior and exterior detailing, ceramic
            coatings, paint corrections, and engine bay cleanings, we strive to keep your vehicle looking and performing
            its best. Trust us to provide the care and attention to detail that your car deserves.
          </p>
          <p>
            Our main shop location is right in{" "}
            <a
              href="https://www.google.com/maps/place/9305+205th+Ave+E,+Bonney+Lake,+WA+98391/@47.172835,-122.1589741,17z/data=!3m1!4b1!4m5!3m4!1s0x5490faeb8aa2e3d7:0xe53c2e7cb4aa7549!8m2!3d47.1728314!4d-122.1567854"
              className="aside-link"
              target="_blank"
              rel="noopener"
            >
              Bonney Lake
            </a>{" "}
            off State Route 410.
          </p>
        </div>

        <h3 style={{ fontSize: "2.5em" }}>FAQ</h3>
        <div className="faq-container">
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
    </div>
  );
}
