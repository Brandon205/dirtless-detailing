"use client";
import React from "react";
import Image from "next/image";
import { BookingButton } from "../components/BookingButton";
import { Clock, MapPin, Smartphone, Mail, Gift } from "lucide-react";
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

      <h1 className="text-4xl font-bold pt-32 lg:pt-64 text-center">24/7 ONLINE PRICING & BOOKING</h1>
      <p className="text-center mb-10">
        <span className="text-[#3c8d0d] bold">Gift cards now available online!</span>
      </p>
      <div className="flex gap-2 lg:gap-8 items-center justify-center py-4 flex-col lg:flex-row max-w-[90%] mx-auto lg:mx-0">
        <Image src="/assets/icons/valentinesGift.svg" alt="valentines gift box" width={48} height={48} />
        <div>
          <p className="text-[#dd9fc0] font-medium text-2xl text-center lg:text-left">
            <span className="text-[#dd9fc0] font-extrabold text-2xl">10% OFF </span>
            all details and Gift Cards with code: <span className="text-[#dd9fc0] font-extrabold text-2xl">VALENTINE10</span>
          </p>
          <p className="text-white text-lg w-1/2 text-center lg:text-left lg:w-full mx-auto">Valid until 2/14/25 on any Online Booking!</p>
        </div>
      </div>
      <div className="grid items-center" style={{ paddingTop: 0 }}>
        <BookingButton title="Book Online!" />
      </div>
      <div className="contact-information-container">
        <div className="contact-info-cards">
          <div className="contact-icon-container">
            <Clock className="icon-48" />
            <p className="hours-p">Monday - Sunday: 8 AM - 8 PM</p>
          </div>
          <div className="contact-icon-container">
            <MapPin className="icon-48" />
            <a href="https://maps.app.goo.gl/bhPDhjUN4jsSegu48" className="contact-link location-link underline" target="_blank" rel="noopener">
              Buckley Business Park, 28120 WA-410, Building C6
            </a>
          </div>
          <div className="contact-icon-container">
            <Smartphone className="icon-48" />
            <a className="contact-link location-link underline" href="tel:2532529758" target="_blank" rel="noopener">
              (253) 252-9758
            </a>
            <p> Text or Call</p>
          </div>
          <div className="contact-icon-container">
            <Mail className="icon-48" />
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
            <Gift className="icon-48" />
            <p style={{ textAlign: "left" }}>We offer gift cards in person and online!</p>
          </div>
        </div>
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
