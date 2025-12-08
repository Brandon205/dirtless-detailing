"use client";
import React from "react";
import ImageGallery from "../../components/ImageGallery";
import Image from "next/image";
import { topBtnVariant } from "../../../utils/animationVariations";
import { motion } from "framer-motion";
import { PhoneCall, ClipboardCheck } from "lucide-react";
import "react-medium-image-zoom/dist/styles.css";

const baImages = [
  { src: "/assets/images/before&afters/rearBA2.jpg" },
  { src: "/assets/images/before&afters/toyotaEngineBA.jpg" },
  { src: "/assets/images/before&afters/doorJambsBA.jpg" },
  { src: "/assets/images/before&afters/wheelsBA.jpg" },
  { src: "/assets/images/before&afters/wheelsBA2.jpg" },
  { src: "/assets/images/before&afters/sideBA.jpg" },
  { src: "/assets/images/before&afters/wheelsBA3.jpg" },
  { src: "/assets/images/before&afters/fordTarBA.jpg" },
  { src: "/assets/images/before&afters/teslaExteriorBA.jpg" },
  { src: "/assets/images/before&afters/WashBADiagonal.png" }
];

const images = [
  { src: "/assets/images/exterior/3doorFord.jpg" },
  { src: "/assets/images/exterior/3doorFordRight.jpg" },
  { src: "/assets/images/exterior/acc1.jpg" },
  { src: "/assets/images/exterior/acc2.jpg" },
  { src: "/assets/images/exterior/acc4.jpg" },
  { src: "/assets/images/exterior/acc5.jpg" },
  { src: "/assets/images/exterior/accD.jpg" },
  { src: "/assets/images/exterior/accDa.jpg" },
  { src: "/assets/images/exterior/accH2.jpg" },
  { src: "/assets/images/exterior/accH3.jpg" },
  { src: "/assets/images/exterior/accJ.jpg" },
  { src: "/assets/images/exterior/accK.jpg" },
  { src: "/assets/images/exterior/accKclose.jpg" },
  { src: "/assets/images/exterior/accM.jpg" },
  { src: "/assets/images/exterior/accR.jpg" },
  { src: "/assets/images/exterior/accS.jpg" },
  { src: "/assets/images/exterior/amg.jpg" },
  { src: "/assets/images/exterior/amgWorkTruck.jpg" },
  { src: "/assets/images/exterior/archCoTruck.jpg" },
  { src: "/assets/images/exterior/archDenali.jpg" },
  { src: "/assets/images/exterior/archWork1.jpg" },
  { src: "/assets/images/exterior/archWork2.jpg" },
  { src: "/assets/images/exterior/archWork3.jpg" },
  { src: "/assets/images/exterior/bluefordnight.jpg" },
  { src: "/assets/images/exterior/blueMercedesSuv.jpg" },
  { src: "/assets/images/exterior/blueTesla.jpg" },
  { src: "/assets/images/exterior/bmwZ3.jpg" },
  { src: "/assets/images/exterior/crTesla.jpg" },
  { src: "/assets/images/exterior/elCamino.jpg" },
  { src: "/assets/images/exterior/engine2704.jpg" },
  { src: "/assets/images/exterior/engine35c8.jpg" },
  { src: "/assets/images/exterior/engine5c77.jpg" },
  { src: "/assets/images/exterior/engineba99.jpg" },
  { src: "/assets/images/exterior/enginec643.jpg" },
  { src: "/assets/images/exterior/engined691.jpg" },
  { src: "/assets/images/exterior/exterior10c6.jpg" },
  { src: "/assets/images/exterior/exterior3e22.jpg" },
  { src: "/assets/images/exterior/exterior6f35.jpg" },
  { src: "/assets/images/exterior/exterior7bfb.jpeg" },
  { src: "/assets/images/exterior/exterior7ef7.jpg" },
  { src: "/assets/images/exterior/exterior8bf9.jpg" },
  { src: "/assets/images/exterior/exterior9976.jpg" },
  { src: "/assets/images/exterior/exteriorb758.jpg" },
  { src: "/assets/images/exterior/exteriore5fc.jpg" },
  { src: "/assets/images/exterior/flameGladiator.jpg" },
  { src: "/assets/images/exterior/fordGTBack.jpg" },
  { src: "/assets/images/exterior/gmcAT4X.jpg" },
  { src: "/assets/images/exterior/gmcAT4XRR.jpg" },
  { src: "/assets/images/exterior/gmcAT4XWheel.jpg" },
  { src: "/assets/images/exterior/gmcMobile.jpg" },
  { src: "/assets/images/exterior/gmcMobile2.jpg" },
  { src: "/assets/images/exterior/gmcOld.jpg" },
  { src: "/assets/images/exterior/gmcOld2.jpg" },
  { src: "/assets/images/exterior/gmcOld3.jpg" },
  { src: "/assets/images/exterior/ironwheel1.jpg" },
  { src: "/assets/images/exterior/ironwheel2.jpg" },
  { src: "/assets/images/exterior/ironwheel3.jpg" },
  { src: "/assets/images/exterior/jeepRenegade.jpg" },
  { src: "/assets/images/exterior/jeepRenegade2.jpg" },
  { src: "/assets/images/exterior/jeepWrangler.jpg" },
  { src: "/assets/images/exterior/kielFord.jpg" },
  { src: "/assets/images/exterior/kielFord2.jpg" },
  { src: "/assets/images/exterior/kielFord3.jpg" },
  { src: "/assets/images/exterior/lexusMobile.jpg" },
  { src: "/assets/images/exterior/lincolntruckOutside.jpg" },
  { src: "/assets/images/exterior/lineXAudi.jpg" },
  { src: "/assets/images/exterior/mazdaEx.jpg" },
  { src: "/assets/images/exterior/mazdaMobile.jpg" },
  { src: "/assets/images/exterior/mazdaMobile2.jpg" },
  { src: "/assets/images/exterior/mazdaMobile3.jpg" },
  { src: "/assets/images/exterior/mazdaspeed1.jpg" },
  { src: "/assets/images/exterior/newLexusSuv.jpg" },
  { src: "/assets/images/exterior/nissanRear.jpg" },
  { src: "/assets/images/exterior/oldMercedes.jpg" },
  { src: "/assets/images/exterior/porscheMacan.jpg" },
  { src: "/assets/images/exterior/porscheMacan2.jpg" },
  { src: "/assets/images/exterior/range-rover-left.jpg" },
  { src: "/assets/images/exterior/range-rover-right.jpg" },
  { src: "/assets/images/exterior/redFordEx.jpg" },
  { src: "/assets/images/exterior/redFordEx2.jpg" },
  { src: "/assets/images/exterior/redFordPolishers.jpg" },
  { src: "/assets/images/exterior/shinyHrv.jpg" },
  { src: "/assets/images/exterior/showtruck2.jpg" },
  { src: "/assets/images/exterior/showTruck3.jpg" },
  { src: "/assets/images/exterior/showtruckext.jpg" },
  { src: "/assets/images/exterior/sideBySideSuspension.jpg" },
  { src: "/assets/images/exterior/sideofsilverram.jpg" },
  { src: "/assets/images/exterior/sidexside.png" },
  { src: "/assets/images/exterior/slamry.jpg" },
  { src: "/assets/images/exterior/slamryatShow.jpg" },
  { src: "/assets/images/exterior/subaruFinished.jpg" },
  { src: "/assets/images/exterior/subaruFinishedShop.jpeg" },
  { src: "/assets/images/exterior/subaruMobile.jpg" },
  { src: "/assets/images/exterior/subaruMobile2.jpg" },
  { src: "/assets/images/exterior/subaruRR.jpg" },
  { src: "/assets/images/exterior/subaruSoap.jpeg" },
  { src: "/assets/images/exterior/subaruWashed.jpeg" },
  { src: "/assets/images/exterior/teslaWashBucket.jpg" },
  { src: "/assets/images/exterior/wheelFinished.jpg" },
  { src: "/assets/images/exterior/whiteRam.jpg" },
  { src: "/assets/images/exterior/whiteRangeRover.jpg" },
  { src: "/assets/images/exterior/whiteSierra.jpg" },
  { src: "/assets/images/exterior/whiteSierra2.jpg" },
  { src: "/assets/images/exterior/worktruckgarage.jpeg" }
];

export default function PaintCorrectionGallery() {
  return (
    <div className="pb-8">
      <div className="cover">
        <Image src="/assets/images/exterior/sideofsilverram.jpg" alt="Side of silver dodge ram" quality={70} priority fill className="object-cover" />
      </div>
      <div className="servicepage-header">
        <div style={{ alignItems: "center" }}>
          <h1 className="text-center lg:text-left">
            <span className="text-accent bold text-shadow">Exterior Decon Wash Gallery</span>
          </h1>
          <strong className="page-subheading" style={{ textAlign: "center" }}>
            This is a showcase of our Exterior Wash service. Take a look at our{" "}
            <a href="/services/exterior" className="text-blue-500">
              Exterior Decon Wash
            </a>{" "}
            page for more details and pricing.
          </strong>
          <div className="header-buttons">
            <motion.a href="/contact" className="top-quote-btn" variants={topBtnVariant} whileHover="hover" transition={{ duration: 0.25 }}>
              <ClipboardCheck color="#ffffff" className="mr-2" size={36} />
              BOOK NOW!
            </motion.a>
            <motion.a href="tel:2532529758" className="top-quote-btn btn-secondary" variants={topBtnVariant} whileHover="hover" transition={{ duration: 0.25 }}>
              {/* <Image src="/assets/icons/phone-call-message.svg" alt="call or message" className="btn-icon text-white" width={36} height={36} /> */}
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
          Check out our{" "}
          <a href="/services/exterior" className="text-blue-500">
            Exterior Decon Wash
          </a>{" "}
          page for more details!
        </strong>
      </div>
    </div>
  );
}
