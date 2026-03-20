"use client";
import React from "react";
import Image from "next/image";
import { topBtnVariant } from "../../../utils/animationVariations";
import { motion } from "framer-motion";
import "react-medium-image-zoom/dist/styles.css";
import { ClipboardCheck, PhoneCall } from "lucide-react";
import ImageGallery from "../../components/ImageGallery";

const baImages = [
  { src: "/assets/images/before&afters/daytonaBA.jpg" },
  { src: "/assets/images/before&afters/headlightBA.jpg" },
  { src: "/assets/images/before&afters/winnebagoBA.jpg" }
];

const images = [
  { src: "/assets/images/polish/36 plymouth.jpg" },
  { src: "/assets/images/polish/36 plymouthFL.jpg" },
  { src: "/assets/images/polish/audiSeal2.jpg" },
  { src: "/assets/images/polish/audiSeal3.jpg" },
  { src: "/assets/images/polish/beamer2.jpg" },
  { src: "/assets/images/polish/fjCruiserFL.jpg" },
  { src: "/assets/images/polish/fjCruiserOutside2.jpg" },
  { src: "/assets/images/polish/fordSuv.jpg" },
  { src: "/assets/images/polish/GmaSubaru.jpg" },
  { src: "/assets/images/polish/hondaSeal.jpg" },
  { src: "/assets/images/polish/hondaSeal2.jpg" },
  { src: "/assets/images/polish/jeepSeal2.jpg" },
  { src: "/assets/images/polish/jeepseal3.jpg" },
  { src: "/assets/images/polish/mustangFL.jpg" },
  { src: "/assets/images/polish/mustangFLInside.jpg" },
  { src: "/assets/images/polish/oldSuburbanOutside.jpg" },
  { src: "/assets/images/polish/oldWrangler.jpg" },
  { src: "/assets/images/polish/oldWrangler2.jpg" },
  { src: "/assets/images/polish/porscheFrontLL.jpg" },
  { src: "/assets/images/polish/porscheFrontRL.jpg" },
  { src: "/assets/images/polish/porscheFrontSign.jpg" },
  { src: "/assets/images/polish/porscheHeadOn.jpg" },
  { src: "/assets/images/polish/porscheRearL.jpg" },
  { src: "/assets/images/polish/porscheSideL.jpg" },
  { src: "/assets/images/polish/porscheStraightOnNight.jpg" },
  { src: "/assets/images/polish/porscheTaped.jpg" },
  { src: "/assets/images/polish/redFordPlatinum.jpg" },
  { src: "/assets/images/polish/rv-finished.jpg" },
  { src: "/assets/images/polish/porscheFL.jpg" },
  { src: "/assets/images/polish/sprinter3.jpg" },
  { src: "/assets/images/polish/sprinter6.jpg" },
  { src: "/assets/images/polish/tealJeep.jpg" },
  { src: "/assets/images/polish/terryBroncoOutside.jpg" },
  { src: "/assets/images/polish/terryTruck.jpg" },
  { src: "/assets/images/polish/vanSeal.jpg" },
  { src: "/assets/images/polish/vanSeal2.jpg" },
  { src: "/assets/images/polish/whiteTacoma.jpg" },
  { src: "/assets/images/polish/windshieldWater.jpg" }
];

export default function PaintCorrectionGallery() {
  return (
    <div className="pb-8">
      <div className="cover">
        <Image src="/assets/images/polish/36 plymouth.jpg" alt="Polished 1936 Plymouth" quality={75} priority fill className="object-cover" />
      </div>
      <div className="servicepage-header">
        <div className="items-center">
          <h1 className="text-center lg:text-left">
            <span className="text-accent bold text-shadow">Exterior Polish & Coat Gallery</span>
          </h1>
          <strong className="page-subheading" style={{ textAlign: "center" }}>
            Check out the gallery below to see just what we are able to do with a simple polish and ceramic spray. Take a look at our{" "}
            <a href="/services/polish" className="text-blue-500">
              Exterior Polish & Coat
            </a>{" "}
            page for more details and pricing.
          </strong>
          <div className="header-buttons">
            <motion.a href="/contact" className="top-quote-btn" variants={topBtnVariant} whileHover="hover" transition={{ duration: 0.25 }}>
              <ClipboardCheck color="#ffffff" className="mr-2" size={36} />
              BOOK NOW!
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
        <strong className="text-white text-3xl lg:text-4xl max-w-90% lg:max-w-[60%] mx-auto my-8">
          To see more about the services pictured above be sure to check out our{" "}
          <a href="/services/polish" className="text-blue-500">
            Exterior Polish & Coat
          </a>{" "}
          page for more details!
        </strong>
      </div>
    </div>
  );
}
