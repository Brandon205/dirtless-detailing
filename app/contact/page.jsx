"use client";
import React from "react";
import { BookingButton } from "../components/BookingButton";

const jsonld = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dirt-Less Detailing",
  "url": "https://dirtlessdetailing.com/contact",
  "logo": "https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/0a945e76-f4c0-4e29-ef16-463490d0db00/public",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "2532529758",
    "contactType": "sales",
    "contactOption": "TollFree",
    "areaServed": "US",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.facebook.com/DirtLessDetailing",
    "https://www.instagram.com/dirt_less_detailing",
    "https://www.youtube.com/channel/UCsoqP5s4hwkQd_Sd-TVv-jg"
  ]
};

export default function Contact() {
  return (
    <section className="contact-container" id="contact">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld, null, 2) }} />

      <h1 className="text-4xl font-bold pb-6 pt-32 text-center">24/7 ONLINE PRICING & BOOKING</h1>
      <div className="grid items-center" style={{ paddingTop: 0 }}>
        <BookingButton title="Book Online" />
        <p className="text-center lg:max-w-screen-md mx-auto">
          *Pickup Service: For jobs within 20 minutes of our shop we offer FREE vehicle pickup and dropoff back to your house when you book online, if you're
          interested put it in the booking's notes section or let us know!
        </p>
      </div>
      <div className="contact-information-container">
        <div className="contact-info-cards">
          <div className="contact-icon-container">
            <img src="../assets/icons/clock.png" alt="clock" className="icon-48" />
            <p className="hours-p">Monday - Sunday: 8 AM - 8 PM</p>
          </div>
          <div className="contact-icon-container">
            <img src="../assets/icons/placeMarker.png" alt="place marker" className="icon-48" />
            <a
              href="https://www.google.com/maps/place/28120+WA-410,+Buckley,+WA+98321/@47.1585374,-122.052958,19.25z/data=!4m15!1m8!3m7!1s0x5490efc0f14df8db:0xb8ec0b100429182f!2s28238+WA-410,+Buckley,+WA+98321!3b1!8m2!3d47.158566!4d-122.052058!16s%2Fg%2F11csp3kvgh!3m5!1s0x5490efc05b8ec6cf:0xb04a141d669a9924!8m2!3d47.158288!4d-122.0530141!16s%2Fg%2F11c0vpg6p9?entry=ttu"
              className="contact-link location-link underline"
              target="_blank"
              rel="noopener"
            >
              Buckley Business Park, 28120 WA-410, Building C6
            </a>
          </div>
          <div className="contact-icon-container">
            <img src="../assets/icons/phoneMessage.png" alt="phone message" className="icon-48" />
            <a className="contact-link location-link underline" href="tel:2532529758" target="_blank" rel="noopener">
              (253) 252-9758
            </a>
            <p> Text or Call</p>
          </div>
          <div className="contact-icon-container">
            <img src="../assets/icons/post.png" alt="post" className="icon-48" />
            <a
              className="contact-link location-link underline"
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
        {/* <div className="contact-information">
          {" "}
          TODO?
          <h3 style={{ fontSize: "1.75em" }}>Our Contact Information</h3>
          <hr className="contact-border" />
          <h4 style={{ marginBottom: 0, fontSize: "1.5em" }}>Need us to come to you?</h4>
          <p className="hours-p" style={{ marginBottom: 0 }}>
            We can perform mobile detailing in the following cities if you contact us via our form (Urable In Shop
            Booking is In Shop only):
          </p>
          <p className="hours-p">
            <span className="m-0">We can come to you in the following cities: </span>
            <span style={{ fontWeight: "bold", color: "#9f9f9f" }}>
              Bonney Lake, Buckley, Sumner, Enumclaw, Puyallup, Federal Way, Orting, South Prairie, Tehaleh, Black
              Diamond, Milton, Edgewood, and Graham.
            </span>
          </p>
        </div> */}
      </div>

      <div className="urable-container">
        {/* <div>
          <strong style={{ fontSize: "2rem" }}>
            Try our <span style={{ color: "#fab638" }}>INSTANT</span> In Shop Booking Feature through{" "}
            <span style={{ color: "#2fd2a8" }}>Ur</span>able!
          </strong>
          <p style={{ fontSize: "1.3rem" }} className="services-p">
            Instant Booking • Price Estimate • Pick any Date and Time
          </p>
        </div> */}
        {/* <fieldset className="urable-form-container">
          <iframe
            style={{ width: "100%", height: "700px" }}
            src="https://app.urable.com/virtual-shop/pMe0iWXWCBfTL47sDvjd"
            frameBorder="0"
          ></iframe>
        </fieldset> */}
        <div className="text-center">
          <strong style={{ fontSize: "2rem" }}>Feel free to Text, Call, or reach out using this form!</strong>
          <p style={{ fontSize: "1.3rem" }} className="services-p">
            Mobile Services • Pricing Quotes • General Questions
          </p>
        </div>
        <fieldset className="urable-form-container">
          <iframe className="w-4/5 mx-auto lg:max-w-50% h-[600px] pb-10" src="https://app.urable.com/form/pMe0iWXWCBfTL47sDvjd/v5CoHzxM7y2da6KIOp2T"></iframe>
        </fieldset>
      </div>
    </section>
  );
}
