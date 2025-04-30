"use client";
import React from "react";
import { BookingButton } from "../components/BookingButton";
import { Clock, MapPin, Smartphone, Mail, Gift } from "lucide-react";
import IframeSuspense from "../../utils/IframeSuspense";
import BaseSchema from "../jsonSchemas/BaseSchema";

export default function Contact() {
  return (
    <section className="contact-container" id="contact">
      <BaseSchema
        serviceImage="/assets/images/interior/driver16.jpg"
        makesOffer={{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Auto Detailing",
            "description":
              "Contact us here! Let us know any additional information we may need to know before your detail. Feel free to reach out with any questions!",
            "areaServed": "Buckley, Bonney Lake, and surrounding areas.",
            "serviceType": "Auto Detailing"
          }
        }}
      />

      <h1 className="text-4xl font-bold pt-32 lg:pt-64 text-center">24/7 ONLINE PRICING & BOOKING</h1>
      <p className="text-center mb-10">
        <span className="text-[#3c8d0d] bold">Gift cards now available online!</span>
      </p>
      {/* <div className="flex gap-2 lg:gap-8 items-center justify-center py-4 flex-col lg:flex-row max-w-[90%] mx-auto lg:mx-0">
        <Image src="/assets/icons/valentinesGift.svg" alt="valentines gift box" width={48} height={48} />
        <div>
          <p className="text-[#dd9fc0] font-medium text-2xl text-center lg:text-left">
            <span className="text-[#dd9fc0] font-extrabold text-2xl">10% OFF </span>
            all details and Gift Cards with code: <span className="text-[#dd9fc0] font-extrabold text-2xl">VALENTINE10</span>
          </p>
          <p className="text-white text-lg w-1/2 text-center lg:text-left lg:w-full mx-auto">Valid until 2/14/25 on any Online Booking!</p>
        </div>
      </div> */}

      {/* <motion.li className="flex justify-start items-center text-left" variants={listItemVariant} key={index}>
        <div className="flex-shrink-0 w-[36px] h-[36px]">
          <Check color="#1ca55d" size={36} />
        </div>
        <p className="ml-2">{step}</p>
      </motion.li> */}
      <div className="grid items-center" style={{ paddingTop: 0 }}>
        <BookingButton title="Book Online!" />
      </div>
      <div className="contact-information-container">
        <div className="contact-info-cards">
          <div className="flex items-center gap-4 bg-zinc-800 p-4">
            {/* This line */}
            <div className="flex-shrink-0 w-[28px] h-[28px]">
              <Clock size={28} />
            </div>
            <p>Monday - Sunday: 8 AM - 8 PM</p>
          </div>
          <div className="flex items-center gap-4 bg-zinc-800 p-4">
            <div className="flex-shrink-0 w-[28px] h-[28px]">
              <MapPin size={28} />
            </div>
            <a href="https://maps.app.goo.gl/bhPDhjUN4jsSegu48" className="contact-link location-link underline" target="_blank" rel="noopener">
              Buckley Business Park, 28120 WA-410, Building C6
            </a>
          </div>
          <div className="flex items-center gap-4 bg-zinc-800 p-4">
            <div className="flex-shrink-0 w-[28px] h-[28px]">
              <Smartphone size={28} />
            </div>
            <a className="contact-link location-link underline" href="tel:2532529758" target="_blank" rel="noopener">
              (253) 252-9758
            </a>
            <p> Text or Call</p>
          </div>
          <div className="flex items-center gap-4 bg-zinc-800 p-4">
            <div className="flex-shrink-0 w-[28px] h-[28px]">
              <Mail size={28} />
            </div>
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
          <div className="flex items-center gap-4 bg-zinc-800 p-4">
            <div className="flex-shrink-0 w-[28px] h-[28px]">
              <Gift size={28} />
            </div>
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
