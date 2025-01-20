"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { topBtnVariant } from "../../utils/animationVariations";

export default function Confirmation() {
  return (
    <div className="confirmation-container">
      <Image
        src="/assets/images/exterior/range-rover-right.jpg"
        alt="range rover on the right"
        fill
        style={{ objectFit: "cover", opacity: "25%", zIndex: -5 }}
      />
      <div className="confirmation-subcontainer">
        <h1 className="confirmation-title">Thank You for Booking With Us!</h1>
        <p className="confirmation-message text-xl tracking-wide leading-8">
          We will confirm your appointment soon! Expect a text from us the night before to confirm the date you selected still works! Feel free to give us a
          call or text if you have more questions.
        </p>
        <p className="confirmation-message text-md">
          <span className="special-package">NOTE:</span> We have a 72 hour cancellation policy, get a full refund on your deposit if we're notified 3 days
          before your appointment.
        </p>
        <div className="header-link-container">
          <motion.a href="/" className="top-quote-btn" variants={topBtnVariant} whileHover="hover" transition={{ duration: 0.25 }}>
            <img src="../assets/icons/home.svg" alt="home icon" className="btn-icon" /> Return Home
          </motion.a>
          <motion.a href="tel:2532529758" className="top-quote-btn btn-secondary" variants={topBtnVariant} whileHover="hover" transition={{ duration: 0.25 }}>
            <img src="../assets/icons/phoneMessage.png" alt="call or message" className="btn-icon" /> (253) 252-9758
          </motion.a>
        </div>
      </div>
    </div>
  );
}
