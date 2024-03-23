"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { topBtnVariant } from "../../utils/animationVariations";

export default function Confirmation() {
  const searchParams = useSearchParams();

  const type = searchParams.get("type");

  console.log(type);

  return (
    <div className="confirmation-container">
      <Image
        src="https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/f6bd7bf5-5164-4576-5687-037fc7095000/public"
        alt="range rover on the right"
        fill
        style={{ objectFit: "cover", opacity: "25%", zIndex: -5 }}
      />
      {type === "form" ? (
        // Form completed
        <div className="confirmation-subcontainer">
          <h1 className="confirmation-title">Thank You for Reaching out!</h1>
          <p className="confirmation-message">
            We will be in touch soon! Expect a text or email reply from us
            within one business day!
          </p>
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
        </div>
      ) : (
        // Easy booking scheduling completed
        <div className="confirmation-subcontainer">
          <h1 className="confirmation-title">Thank You for Reaching out!</h1>
          <p className="confirmation-message">We will be in touch soon!</p>
        </div>
      )}
    </div>
  );
}
