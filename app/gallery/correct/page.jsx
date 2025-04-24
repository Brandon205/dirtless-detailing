"use client";
import React from "react";
import Image from "next/image";
import ImageGallery from "../../components/ImageGallery";
import { PhoneCall, ClipboardCheck } from "lucide-react";
import { topBtnVariant } from "../../../utils/animationVariations";
import { motion } from "framer-motion";
import "react-medium-image-zoom/dist/styles.css";

const baImages = [
  { src: "/assets/images/before&afters/carwashTruckBA.jpg" },
  { src: "/assets/images/before&afters/scratchesBA.png" },
  { src: "/assets/images/before&afters/pcBA.jpg" },
  { src: "/assets/images/before&afters/doorHandleBA.jpg" }
];

const images = [
  { src: "/assets/images/correction/carwashTruckFull.png" },
  { src: "/assets/images/correction/carWashTruckOutside.jpg" },
  { src: "/assets/images/correction/ceramicBeads1.jpg" },
  { src: "/assets/images/correction/ceramicBeads2.jpg" },
  { src: "/assets/images/correction/ceramicBeads3.jpg" },
  { src: "/assets/images/correction/correction1280.jpg" },
  { src: "/assets/images/correction/correction1282.jpg" },
  { src: "/assets/images/correction/ferrariBadge.jpg" },
  { src: "/assets/images/correction/ferrariFL.jpg" },
  { src: "/assets/images/correction/ferrariPolishing.jpg" },
  { src: "/assets/images/correction/ferrariRear.jpg" },
  { src: "/assets/images/correction/genesis1.jpeg" },
  { src: "/assets/images/correction/genesis2.jpeg" },
  { src: "/assets/images/correction/genesis3.jpeg" },
  { src: "/assets/images/correction/genesis4.jpeg" },
  { src: "/assets/images/correction/genesisBeads.jpg" },
  { src: "/assets/images/correction/genesisclose.jpg" },
  { src: "/assets/images/correction/glassBeads.jpg" },
  { src: "/assets/images/correction/goodguystruck.jpg" },
  { src: "/assets/images/correction/goodguystruck2.jpg" },
  { src: "/assets/images/correction/goodguystruck3.jpg" },
  { src: "/assets/images/correction/modelXOutside.jpg" },
  { src: "/assets/images/correction/modelXOutside2.jpg" },
  { src: "/assets/images/correction/old-chevy.jpg" },
  { src: "/assets/images/correction/ponyDually.jpg" },
  { src: "/assets/images/correction/tantruck2.jpg" },
  { src: "/assets/images/correction/tantruck3.jpg" },
  { src: "/assets/images/correction/tantruck4.jpg" },
  { src: "/assets/images/correction/teslaclean.jpg" },
  { src: "/assets/images/correction/teslafinished.jpeg" },
  { src: "/assets/images/correction/teslafoam.jpg" },
  { src: "/assets/images/correction/teslahood.jpg" },
  { src: "/assets/images/correction/teslaparking.jpg" },
  { src: "/assets/images/correction/teslaparkinghood.jpg" },
  { src: "/assets/images/correction/teslapolishing.jpg" },
  { src: "/assets/images/correction/teslaRL.jpg" },
  { src: "/assets/images/correction/teslaRR.jpg" },
  { src: "/assets/images/correction/ceramicb528.jpg" },
  { src: "/assets/images/correction/waterbeading1.jpg" },
  { src: "/assets/images/correction/waterbeading2.jpg" },
  { src: "/assets/images/correction/wheelBeading.jpg" },
  { src: "/assets/images/correction/wheelFaces.jpg" },
  { src: "/assets/images/correction/wiping.jpg" },
  { src: "/assets/images/correction/wtbeads2.jpg" },
  { src: "/assets/images/correction/wtbeads4.jpg" },
  { src: "/assets/images/correction/wtbeads5.jpg" },
  { src: "/assets/images/correction/wtbeads6.jpg" }
];

export default function CoatingGallery() {
  return (
    <div className="pb-8">
      <div className="cover">
        <Image
          src="/assets/images/correction/genesis2.jpeg"
          alt="Front Right view of Ceramic Coated Infinity Genesis in the sun"
          fill
          priority
          className="object-cover"
          quality={50}
        />
      </div>
      <div className="servicepage-header">
        <div style={{ alignItems: "center" }}>
          <h1 className="text-center lg:text-left">
            <span className="text-amber-500 bold text-shadow">Exterior Correct & Protect Gallery</span>
          </h1>
          <strong className="page-subheading" style={{ textAlign: "center" }}>
            Check out the gallery below to see the results and capabilities of a freshly applied Ceramic Coating. Take a look at our{" "}
            <a href="/services/exterior-correct" className="text-blue-500">
              Exterior Correct & Protect
            </a>{" "}
            page to learn more about this service!
          </strong>
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
      <h2 className="text-4xl text-white text-center font-bold mt-16">Before & After Results</h2>
      <ImageGallery images={baImages} />

      <h3 className="text-4xl text-white font-bold text-center">Finished Results</h3>
      <ImageGallery images={images} />

      <div className="max-w-90% lg:max-w-[60%] mx-auto text-center">
        <strong className="text-white text-3xl lg:text-4xl">
          Be sure to check out our{" "}
          <a href="/services/exterior-correct" className="text-blue-500">
            Correct & Protect
          </a>{" "}
          page for more details!
        </strong>
      </div>
    </div>
  );
}
