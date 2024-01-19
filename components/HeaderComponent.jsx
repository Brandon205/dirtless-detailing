"use client";
import { motion } from "framer-motion";
import { topBtnVariant } from "../utils/animationVariations";

export default function HeaderComponent({ mainUrl, title, description, secondaryUrl }) {
  return (
    <>
      <div
        className="cover"
        style={{ backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/${mainUrl}/cover)` }}
      ></div>
      <div className="servicepage-header">
        <div>
          <h1>
            <span className="accent-orange bold text-shadow">{title}</span>
          </h1>
          <h2 className="page-subheading">{description}</h2>
          <div className="header-buttons">
            <motion.a
              href="/contact"
              className="top-quote-btn"
              variants={topBtnVariant}
              whileHover="hover"
              transition={{ duration: 0.25 }}
            >
              <img src="../assets/icons/clipboard.png" alt="clipboard" className="btn-icon" /> Book Now!
            </motion.a>
            <motion.a
              href="tel:2532529758"
              className="top-quote-btn btn-secondary"
              variants={topBtnVariant}
              whileHover="hover"
              transition={{ duration: 0.25 }}
            >
              <img src="../assets/icons/phoneMessage.png" alt="call or message" className="btn-icon" /> (253) 252-9758
            </motion.a>
          </div>
        </div>
        <div
          className="service-image"
          style={{ backgroundImage: `url(https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/${secondaryUrl}/public)` }}
        >
          <img
            style={{ visibility: "hidden" }}
            alt="showcase of service"
            src={`https://imagedelivery.net/6ELuAqAYnn_KvYt8QhJosQ/${secondaryUrl}/public`}
          />
        </div>
      </div>
    </>
  );
}
