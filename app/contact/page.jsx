"use client";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useMultistepForm } from "@/utils/UseMultistepForm";
import { BasicInfo } from "@/utils/BasicInfo";
import { SizeAndType } from "@/utils/SizeAndType";
import { ServiceType } from "@/utils/ServiceType";
import { topBtnVariant } from "@/utils/animationVariations";
import { motion } from "framer-motion";
import prices from "@/utils/Prices";
import "react-toastify/dist/ReactToastify.css";
import posthog from "posthog-js";

import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const INITIAL_DATA = {
  name: "",
  email: "",
  phone: "",
  year: "",
  make: "",
  model: "",
  gift: "Myself",
  message: "",
  serviceType: "",
  vehicleSize: "2 Door",
  interior: "",
  exterior: "",
  addons: [],
  dirtiness: "",
  dogHair: "",
  mobile: "",
};

export default function Contact() {
  const [data, setData] = useState(INITIAL_DATA);

  // State for pricing section
  const [currentPrice, setCurrentPrice] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1500);
  }, []);

  useEffect(() => {
    updatePrices();
  }, [data.vehicleSize, data.interior, data.exterior, data.addons, data.dogHair]);

  function updatePrices() {
    let tempPrice = 0;
    let dataArr = {
      interior: data.interior,
      exterior: data.exterior,
      addons: data.addons,
      vehicleSize: data.vehicleSize,
      dogHair: data.dogHair,
    };

    if (dataArr.interior.length > 0) {
      let tempService = dataArr.interior.replace(/\s/g, "").toLowerCase();
      tempPrice += prices[dataArr.vehicleSize].interior[tempService];
    }
    if (dataArr.exterior.length > 0) {
      let tempService = dataArr.exterior.replace(/\s/g, "").toLowerCase();
      tempPrice += prices[dataArr.vehicleSize].exterior[tempService];
    }
    if (dataArr.addons.length > 0) {
      dataArr.addons.forEach((addon) => {
        tempPrice += prices.addons[addon];
      });
    }
    if (dataArr.dogHair.length > 0) {
      tempPrice += prices.dogHair[dataArr.dogHair];
    }

    setCurrentPrice(tempPrice);
  }

  function updateFields(fields) {
    setData((prev) => {
      if (fields.addons) {
        // For adding/removing addons from the addons array
        let tempArr = [...prev.addons];
        if (fields.addons === "Delete") {
          tempArr = [];
        } else if (prev.serviceType === "Both" && tempArr.length > 0) {
          // The "Both" serviceType can have both of the addons selected
          if (tempArr.includes(fields.addons)) {
            tempArr.splice(tempArr.indexOf(fields.addons), 1);
          } else {
            tempArr.push(fields.addons);
          }
        } else {
          // If not both then only one addon can be selected
          if (prev.addons.includes(fields.addons)) {
            tempArr = [];
          } else {
            tempArr = [];
            tempArr.push(fields.addons);
          }
        }

        fields.addons = tempArr;
      }
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, next, back } = useMultistepForm([
    <SizeAndType {...data} updateFields={updateFields} key={1} />,
    <ServiceType {...data} updateFields={updateFields} key={2} />,
    <BasicInfo {...data} updateFields={updateFields} key={3} />,
  ]);

  function formSubmit(e) {
    e.preventDefault();
    if (!isLastStep) {
      if ((currentStepIndex === 0 && data.serviceType.length === 0) || data.mobile === "") {
        return toast.error("Please select a service and a service location!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (currentStepIndex === 1) {
        if (data.serviceType === "Interior") {
          if (data.interior === "" || data.dogHair === "" || data.dirtiness === "") {
            return toast.error("Please fill out all required fields! (Ones marked with a *)", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            return next();
          }
        } else if (data.serviceType === "Exterior" && data.exterior === "") {
          return toast.error("Please fill out all exterior fields! (Ones marked with a *)", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (data.serviceType === "Both") {
          if (!data.interior || !data.dogHair || !data.dirtiness || !data.exterior) {
            return toast.error("Please fill out all exterior fields! (Ones marked with a *)", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            return next();
          }
        } else {
          if (data.serviceType !== "Both") {
            if (data.serviceType === "Interior") {
              updateFields({ exterior: "" });
              updateFields({ addons: "Delete" });
            } else if (data.serviceType === "Exterior") {
              updateFields({ interior: "", dirtiness: "", dogHair: "" });
              updateFields({ addons: "Delete" });
            }
          }
          return next();
        }
      } else {
        if (data.serviceType !== "Both") {
          if (data.serviceType === "Interior") {
            updateFields({ exterior: "" });
            updateFields({ addons: "Delete" });
          } else if (data.serviceType === "Exterior") {
            updateFields({ interior: "", dirtiness: "", dogHair: "" });
            updateFields({ addons: "Delete" });
          }
        }
        return next();
      }
    }

    const formInfo = {
      "Who's it for?:": data.gift,
      Name: data.name,
      Email: data.email,
      Phone: data.phone,
      Year: data.year,
      Make: data.make,
      Model: data.model,
      "Vehicle Size": data.vehicleSize,
      Mobile: data.mobile,

      "Interior Service": data.interior.length > 0 ? data.interior : "None",
      "Exterior Service": data.exterior.length > 0 ? data.exterior : "None",
      "Dog Hair": data.dogHair,
      Dirtiness: data.dirtiness,
      Addons: data.addons.toString(),
      "Price Estimate": currentPrice,
    };

    const formData = new FormData();
    Object.entries(formInfo).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    finalSubmit(formData, e, formInfo);
  }

  const finalSubmit = (formData, e) => {
    const dataObject = {
      // For google tag
      event: "formSubmission",
    };
    window.dataLayer.push(dataObject);

    posthog.capture("Form Submitted", {
      price: currentPrice,
      interior: data.interior ? true : false,
      exterior: data.exterior ? true : false,
    });
    fetch("https://getform.io/f/10015c2d-db32-409b-884d-54c141a3b141", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        toast.success("Form submitted! Expect a text response from us soon!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        e.target.reset();
        setData(INITIAL_DATA);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        toast.error("An error occurred, please try again." + error, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <section className="contact-container" id="contact">
      <div
        className="cover"
        style={{
          backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0d30edc6-6afe-4162-1f9e-4b57f8e85300/cover)`,
        }}
      ></div>
      <div className="servicepage-header">
        <div style={{ alignItems: "center" }}>
          <h1>
            <span className="accent-orange bold text-shadow">Get In Touch!</span>
          </h1>
          <h2 className="page-subheading" style={{ textAlign: "center" }}>
            Be sure to use the form below to check pricing for our different services with our new Price Estimator!
          </h2>
          <div className="header-buttons">
            <motion.a
              href="https://app.urable.com/virtual-shop/pMe0iWXWCBfTL47sDvjd"
              className="top-quote-btn"
              variants={topBtnVariant}
              whileHover="hover"
              transition={{ duration: 0.25 }}
              rel="noopener"
              target="_blank"
            >
              <img src="../assets/icons/urable.png" alt="clipboard" className="btn-icon" /> Urable Instant Booking
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

      <div className="contact-information-container">
        <div className="contact-info-cards">
          <div className="contact-icon-container">
            <img src="../assets/icons/clock.png" alt="clock" className="icon-48" />
            <p className="hours-p">Monday - Sunday: 7 AM - 7 PM</p>
          </div>
          <div className="contact-icon-container">
            <img src="../assets/icons/placeMarker.png" alt="place marker" className="icon-48" />
            <a
              href="https://www.google.com/maps/place/9305+205th+Ave+E,+Bonney+Lake,+WA+98391/@47.172835,-122.1589741,17z/data=!3m1!4b1!4m5!3m4!1s0x5490faeb8aa2e3d7:0xe53c2e7cb4aa7549!8m2!3d47.1728314!4d-122.1567854"
              className="contact-link location-link"
              target="_blank"
              rel="noopener"
            >
              9305 205th Ave E, Bonney Lake, Washington 98391
            </a>
          </div>
          <div className="contact-icon-container">
            <img src="../assets/icons/phoneMessage.png" alt="phone message" className="icon-48" />
            <a className="contact-link location-link" href="tel:2532529758" target="_blank" rel="noopener">
              (253) 252-9758
            </a>
            <p> Text or Call</p>
          </div>
          <div className="contact-icon-container">
            <img src="../assets/icons/post.png" alt="post" className="icon-48" />
            <a
              className="contact-link location-link"
              href="mailto:brenden@dirtlessdetailing.com?subject = Schedule a Detail!"
              target="_blank"
              rel="noopener"
              style={{ overflow: "auto", overflowWrap: "anywhere" }}
            >
              brenden@dirtlessdetailing.com
            </a>
          </div>
          <div className="contact-icon-container">
            <img src="../assets/icons/gift.png" alt="gift" className="icon-48" />
            <p style={{ textAlign: "left" }}>We offer gift certificates for all of our services!</p>
          </div>
        </div>
        <div className="contact-information">
          <h2 style={{ fontSize: "1.75em" }}>Our Contact Information</h2>
          <hr className="contact-border" />
          <h3 style={{ marginBottom: 0 }}>Need us to come to you?</h3>
          <p className="hours-p" style={{ marginBottom: 0 }}>
            We can perform mobile detailing in the following cities:
          </p>
          <p className="hours-p">
            <span style={{ fontWeight: "bold", color: "#9f9f9f" }}>
              {" "}
              Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Federal Way, Orting, South Prairie, Tehaleh, Black
              Diamond, Milton, Edgewood, and Graham.
            </span>
          </p>
          <p>
            <span className="bold">Overnight Detailing:</span> For drop offs we have a safe lockable garage, so if it's
            more convenient for you feel free to drop your car off the night before! We can usually also do our details
            at night so you can drop your car off and have it done in the morning!{" "}
          </p>
          <p className="subtext italic">
            <span className="special-package">*Note:</span> If the total of the mobile services you choose is less than
            $200, there is a $1/mile from our shop fee to cover travel costs.
          </p>
        </div>
      </div>

      <div className="urable-section">
        <div>
          <strong style={{ fontSize: "2rem" }}>
            Try our <span style={{ color: "#fab638" }}>NEW</span> Instant Booking Feature through{" "}
            <span style={{ color: "#2FD2A8" }}>Ur</span>able!
          </strong>
          <p style={{ fontSize: "1.3rem" }} className="services-p">
            Instant Booking • Price Estimate • Pick a Date and Time that works for you
          </p>
        </div>
        <motion.a
          href="https://app.urable.com/virtual-shop/pMe0iWXWCBfTL47sDvjd"
          style={{ maxWidth: "310px", padding: "0.5rem 1rem" }}
          className="top-quote-btn"
          variants={topBtnVariant}
          whileHover="hover"
          transition={{ duration: 0.25 }}
          rel="noopener"
          target="_blank"
        >
          <img src="../assets/icons/urable.png" alt="clipboard" className="btn-icon" /> BOOK NOW!
        </motion.a>
      </div>

      <div className="contact-container-right">
        <h2>Or Reach Out to Us By Filling Out Our Form:</h2>
        <p>
          <span className="special-package">Note: </span>The Pricing Estimates are approximate and some services are
          based on vehicle condition, because of this final prices may vary slightly.
        </p>
        <form className="form" id="form" onSubmit={(e) => formSubmit(e)}>
          <div className="ph-no-capture">
            <p style={{ position: "absolute", padding: "0 0 0 2rem" }}>
              {currentStepIndex + 1} / {steps.length}
            </p>
            {step}
          </div>

          <div className="form-controls-container">
            {!isFirstStep && (
              <button type="button" className="form-btn" onClick={back}>
                Back
              </button>
            )}
            <button type="submit" data-ph={isLastStep ? "submit" : "next"} className="form-btn">
              {isLastStep ? "Finish" : "Next"}
            </button>
          </div>

          <div style={{ display: currentPrice === 0 ? "none" : "inline-block" }} className="pricing__positioner">
            <p style={{ margin: 0 }}>Price Estimate:</p>
            <div className="pricing__pricecard-container">
              <strong style={{ backgroundColor: "#c0c0c000" }} className="pricing__pricecard-pricebox">
                <span className="pricing__pricecard-price">
                  $
                  {animate ? (
                    <AnimatedNumbers
                      includeComma
                      animateToNumber={currentPrice}
                      configs={[{ mass: 1, tension: 320, friction: 100 }]}
                    ></AnimatedNumbers>
                  ) : (
                    currentPrice
                  )}
                </span>
              </strong>
            </div>
          </div>
        </form>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </section>
  );
}
