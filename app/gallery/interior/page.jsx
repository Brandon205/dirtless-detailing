"use client";
import React from "react";
import Image from "next/image";
import ImageGallery from "../../components/ImageGallery";
import "react-medium-image-zoom/dist/styles.css";
import { topBtnVariant } from "../../../utils/animationVariations";
import { motion } from "framer-motion";

const images = [
  { src: "/assets/images/interior/accO.jpg" },
  { src: "/assets/images/interior/bio1281.jpg" },
  { src: "/assets/images/interior/center1.jpg" },
  { src: "/assets/images/interior/center2.jpg" },
  { src: "/assets/images/interior/center3.jpg" },
  { src: "/assets/images/interior/center4.jpg" },
  { src: "/assets/images/interior/centerOldMercedes.jpg" },
  { src: "/assets/images/interior/centerWhiteRam.jpg" },
  { src: "/assets/images/interior/door1.jpg" },
  { src: "/assets/images/interior/door2.jpg" },
  { src: "/assets/images/interior/door3.jpg" },
  { src: "/assets/images/interior/door5.jpg" },
  { src: "/assets/images/interior/doorRenegade.jpg" },
  { src: "/assets/images/interior/driver1.jpg" },
  { src: "/assets/images/interior/driver10.jpg" },
  { src: "/assets/images/interior/driver11.jpg" },
  { src: "/assets/images/interior/driver12.jpg" },
  { src: "/assets/images/interior/driver13.jpg" },
  { src: "/assets/images/interior/driver14.jpg" },
  { src: "/assets/images/interior/driver15.jpg" },
  { src: "/assets/images/interior/driver16.jpg" },
  { src: "/assets/images/interior/driver17.jpg" },
  { src: "/assets/images/interior/driver18.jpg" },
  { src: "/assets/images/interior/driver19.jpg" },
  { src: "/assets/images/interior/driver2.jpg" },
  { src: "/assets/images/interior/driver20.jpg" },
  { src: "/assets/images/interior/driver21.jpg" },
  { src: "/assets/images/interior/driver3.jpg" },
  { src: "/assets/images/interior/driver4.jpg" },
  { src: "/assets/images/interior/driver5.jpg" },
  { src: "/assets/images/interior/driver6.jpg" },
  { src: "/assets/images/interior/driver9.jpg" },
  { src: "/assets/images/interior/driverCivic.jpg" },
  { src: "/assets/images/interior/driverGmaSubaru.jpg" },
  { src: "/assets/images/interior/driverMazdaspeed.jpg" },
  { src: "/assets/images/interior/driverModelX.jpg" },
  { src: "/assets/images/interior/driverNewLexus.jpg" },
  { src: "/assets/images/interior/driverOldMercedes.jpg" },
  { src: "/assets/images/interior/driverPorsche.jpg" },
  { src: "/assets/images/interior/driverTesla.jpg" },
  { src: "/assets/images/interior/driverWhiteRam.jpg" },
  { src: "/assets/images/interior/ferrariInt.jpg" },
  { src: "/assets/images/interior/ferrariInt2.jpg" },
  { src: "/assets/images/interior/jamb1.jpg" },
  { src: "/assets/images/interior/jamb2.jpg" },
  { src: "/assets/images/interior/jamb3.jpg" },
  { src: "/assets/images/interior/jamb4.jpg" },
  { src: "/assets/images/interior/jamb6.jpg" },
  { src: "/assets/images/interior/jambWhiteRam.jpg" },
  { src: "/assets/images/interior/pass1.jpg" },
  { src: "/assets/images/interior/pass2.jpg" },
  { src: "/assets/images/interior/pass3.jpg" },
  { src: "/assets/images/interior/pass4.jpg" },
  { src: "/assets/images/interior/pass5.jpg" },
  { src: "/assets/images/interior/passfordGT.jpg" },
  { src: "/assets/images/interior/passGmaSubaru.jpg" },
  { src: "/assets/images/interior/passRenegade.jpg" },
  { src: "/assets/images/interior/rear1.jpg" },
  { src: "/assets/images/interior/rear10.jpg" },
  { src: "/assets/images/interior/rear11.jpg" },
  { src: "/assets/images/interior/rear12.jpg" },
  { src: "/assets/images/interior/rear13.jpg" },
  { src: "/assets/images/interior/rear14.jpg" },
  { src: "/assets/images/interior/rear15.jpg" },
  { src: "/assets/images/interior/rear2.jpg" },
  { src: "/assets/images/interior/rear3.jpg" },
  { src: "/assets/images/interior/rear4.jpg" },
  { src: "/assets/images/interior/rear5.jpg" },
  { src: "/assets/images/interior/rear6.jpg" },
  { src: "/assets/images/interior/rear7.jpg" },
  { src: "/assets/images/interior/rear8.jpg" },
  { src: "/assets/images/interior/rear9.jpg" },
  { src: "/assets/images/interior/rearWhiteRam.jpg" },
  { src: "/assets/images/interior/trunk1.jpg" },
  { src: "/assets/images/interior/trunk2.jpg" },
  { src: "/assets/images/interior/trunk3.jpg" },
  { src: "/assets/images/interior/trunkLexus.jpg" }
];

export default function FullIntGallery() {
  return (
    <div className="pb-8">
      <div className="cover">
        <Image src="/assets/images/interior/driverNewLexus.jpg" alt="Cleaned Interior of a 2024 Lexus SUV" priority fill className="object-cover" />
      </div>
      <div className="servicepage-header">
        <div style={{ alignItems: "center" }}>
          <h1>
            <span className="accent-orange bold text-shadow">Full Interior Cleaning Gallery</span>
          </h1>
          <strong className="page-subheading" style={{ textAlign: "center" }}>
            We have cleaned it all, even the worst of interiors. Check out the Gallery below. Take a look at our{" "}
            <a href="/services/interior" className="aside-link">
              Full Interior
            </a>{" "}
            or{" "}
            <a href="/services/interior-spill" className="aside-link">
              Full Interior + Spill Guard
            </a>{" "}
            to find out more.
          </strong>
          <div className="header-buttons">
            <motion.a href="/contact" className="top-quote-btn" variants={topBtnVariant} whileHover="hover" transition={{ duration: 0.25 }}>
              <img src="../assets/icons/clipboard.png" alt="clipboard" className="btn-icon" /> Book Now!
            </motion.a>
            <motion.a href="tel:2532529758" className="top-quote-btn btn-secondary" variants={topBtnVariant} whileHover="hover" transition={{ duration: 0.25 }}>
              <img src="../assets/icons/phoneMessage.png" alt="call or message" className="btn-icon" /> (253) 252-9758
            </motion.a>
          </div>
        </div>
      </div>
      <ImageGallery images={images} />

      <div className="max-w-90% lg:max-w-[60%] mx-auto text-center">
        <strong className="text-white text-3xl lg:text-4xl">
          Check out our{" "}
          <a href="/services/interior" className="aside-link">
            Full Interior Cleaning
          </a>{" "}
          page or our{" "}
          <a href="/services/interior-spill" className="aside-link">
            Full Interior + Spill Guard{" "}
          </a>{" "}
          page for more details!
        </strong>
      </div>
    </div>
  );
}
