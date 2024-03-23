"use client";
import Image from "next/image";
// import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { topBtnVariant } from "../../utils/animationVariations";
// import { Suspense } from "react";

export default function Confirmation() {
  //   const searchParams = useSearchParams();

  //   const type = searchParams.get("type");

  return (
    <div className="confirmation-container">
      <Image
        src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/f6bd7bf5-5164-4576-5687-037fc7095000/public"
        alt="range rover on the right"
        fill
        style={{ objectFit: "cover", opacity: "25%", zIndex: -5 }}
      />
      {/* <Suspense>
        {type === "form" ? (
          // Form completed
          <div className="confirmation-subcontainer">
            <h1 className="confirmation-title">Thank You for Reaching out!</h1>
            <p className="confirmation-message">
              We will be in touch soon! Expect a text or email reply from us
              within one business day!
            </p>
            <div className="header-link-container">
              <motion.a
                href="/"
                className="top-quote-btn"
                variants={topBtnVariant}
                whileHover="hover"
                transition={{ duration: 0.25 }}
              >
                <img
                  src="../assets/icons/home.svg"
                  alt="home icon"
                  className="btn-icon"
                />{" "}
                Return Home
              </motion.a>
              <motion.a
                href="tel:2532529758"
                className="top-quote-btn btn-secondary"
                variants={topBtnVariant}
                whileHover="hover"
                transition={{ duration: 0.25 }}
              >
                <img
                  src="../assets/icons/phoneMessage.png"
                  alt="call or message"
                  className="btn-icon"
                />{" "}
                (253) 252-9758
              </motion.a>
            </div>
          </div>
        ) : ( */}
      <div className="confirmation-subcontainer">
        <h1 className="confirmation-title">Thank You for Scheduling!</h1>
        <p className="confirmation-message">
          We will confirm your appointment soon! Expect a text from us the night
          before to confirm the date you selected still works! Feel free to give
          us a call or text if you have more questions.
        </p>
        <div className="header-link-container">
          <motion.a
            href="/"
            className="top-quote-btn"
            variants={topBtnVariant}
            whileHover="hover"
            transition={{ duration: 0.25 }}
          >
            <img
              src="../assets/icons/home.svg"
              alt="home icon"
              className="btn-icon"
            />{" "}
            Return Home
          </motion.a>
          <motion.a
            href="tel:2532529758"
            className="top-quote-btn btn-secondary"
            variants={topBtnVariant}
            whileHover="hover"
            transition={{ duration: 0.25 }}
          >
            <img
              src="../assets/icons/phoneMessage.png"
              alt="call or message"
              className="btn-icon"
            />{" "}
            (253) 252-9758
          </motion.a>
        </div>
      </div>
      {/* )}
      </Suspense> */}
    </div>
  );
}
