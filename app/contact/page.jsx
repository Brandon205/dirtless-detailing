"use client";
import React from "react";
import { BookingButton } from "../components/BookingButton";
import IframeSuspense from "../../utils/IframeSuspense";

const jsonld = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dirt-Less Detailing",
  "url": "https://dirtlessdetailing.com/contact",
  "logo": "/assets/icons/logoCircle.png",
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

      <h1 className="text-4xl font-bold pt-32 text-center">24/7 ONLINE PRICING & BOOKING</h1>
      <p className="text-center mb-10">
        <span className="text-[#3c8d0d] bold">Gift cards now available online!</span>
      </p>
      <div className="grid items-center" style={{ paddingTop: 0 }}>
        <BookingButton title="Book Online!" />
      </div>
      <div className="contact-information-container">
        <div className="contact-info-cards">
          <div className="contact-icon-container">
            <img src="../assets/icons/clock.png" alt="clock" className="icon-48" />
            <p className="hours-p">Monday - Sunday: 8 AM - 8 PM</p>
          </div>
          <div className="contact-icon-container">
            <img src="../assets/icons/placeMarker.png" alt="place marker" className="icon-48" />
            <a href="https://maps.app.goo.gl/bhPDhjUN4jsSegu48" className="contact-link location-link underline" target="_blank" rel="noopener">
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
        <div className="text-center">
          <strong style={{ fontSize: "2rem" }}>OR feel free to reach out via this form!</strong>
          <p style={{ fontSize: "1.3rem" }} className="services-p">
            Mobile Services • Pricing Quotes • General Questions
          </p>
        </div>
        <fieldset className="urable-form-container">
          <IframeSuspense
            src="https://app.urable.com/form/pMe0iWXWCBfTL47sDvjd/v5CoHzxM7y2da6KIOp2T"
            title="Contact Form"
            classes="w-4/5 mx-auto lg:max-w-50% h-[600px]"
          />
        </fieldset>
      </div>
    </section>
  );
}
