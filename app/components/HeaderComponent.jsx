"use client";
import { motion } from "framer-motion";
import { topBtnVariant } from "../../utils/animationVariations";
import Image from "next/image";

export default function HeaderComponent({ imageUrl, title, description, secondaryUrl }) {
  return (
    <>
      <div className="cover">
        <Image src={imageUrl} alt="Dirt-Less Detailing" priority fill className="object-cover" />
      </div>
      <div className="servicepage-header">
        <div>
          <h1>
            <span className="accent-orange bold text-shadow">{title}</span>
          </h1>
          <h2 className="page-subheading">{description}</h2>
          <div className="header-buttons">
            <motion.a href="/contact" className="top-quote-btn" variants={topBtnVariant} whileHover="hover" transition={{ duration: 0.25 }}>
              <Image src="/assets/icons/clipboard.svg" alt="clipboard" className="btn-icon text-white" width={36} height={36} />
              BOOK NOW!
            </motion.a>
            <motion.a href="tel:2532529758" className="top-quote-btn btn-secondary" variants={topBtnVariant} whileHover="hover" transition={{ duration: 0.25 }}>
              <Image src="/assets/icons/phone-call-message.svg" alt="call or message" className="btn-icon text-white" width={36} height={36} />
              (253) 252-9758
            </motion.a>
          </div>
        </div>
        <div className="service-image">
          <Image
            src={secondaryUrl}
            sizes="(max-width: 1349px) 0, (min-width: 1350px) 500px"
            alt="showcase of service"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
