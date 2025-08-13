"use client";
import { motion } from "framer-motion";
import { topBtnVariant } from "../../utils/animationVariations";
import { PhoneCall, ClipboardCheck } from "lucide-react";
import Image from "next/image";

export default function HeaderComponent({ imageUrl, title, description, secondaryUrl }) {
  return (
    <>
      <div className="cover">
        <Image src={imageUrl} alt="Dirt-Less Detailing" quality={50} priority fill className="object-cover" />
      </div>
      <div className="servicepage-header">
        <div>
          <h1 className="text-center lg:text-left text-amber-500 bold text-shadow">{title}</h1>
          <h2 className="page-subheading lg:max-w-[550px]">{description}</h2>
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
