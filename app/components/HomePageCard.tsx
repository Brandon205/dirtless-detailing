import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import prices from "../../utils/Prices";

const listItemVariant = {
  initial: {
    opacity: 0,
    x: -100
  },
  show: {
    opacity: 1,
    x: 0
  }
};

const serviceVariant = {
  initial: { scale: 1 },
  hover: { scale: 1.05 }
};

const arrowVariant = {
  initial: { x: -25, opacity: 0 },
  hover: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      ease: "easeIn"
    }
  }
};

// <HomePageCard
// title="Interior Swift"
// imageUrl="../assets/images/interior-swift.jpg"
// description="Our simple interior cleaning, best for maintenance or to quickly freshen up your interior."
// steps={["Blow Out & Vacuum the Vehicle", "Wipe Down and Condition All Surfaces", "Wash/Clean the Floormats", "Clean Interior Windows & Glass"]}
// hours="1-2"
// linkUrl="/services/interior-swift"
//  />

export default function HomePageCard({ title, imageUrl, description, steps, hours, linkUrl }) {
  const typeRegex = /\/services\/(interior|exterior)/;
  const typeMatch = linkUrl.match(typeRegex);
  const serviceType = typeMatch ? typeMatch[1] : null;

  const serviceRegex = /\/services\/(?:interior|exterior)-?(.*)/;
  const match2 = linkUrl.match(serviceRegex);
  const serviceName = match2 ? match2[1] : null;

  const specificService = serviceType + serviceName;

  return (
    <div className="flex flex-col flex-1 relative w-[90%] min-w-[200px] lg:min-w-[400px] max-w-[95%] gap-2 rounded-2xl pb-8 bg-secondaryBkg overflow-hidden shadow-lg">
      <div className="relative m-[2%] bg-center bg-no-repeat bg-cover h-[200px] w-[96%] lg:h-[250px] rounded-2xl flex justify-center">
        <Image src={imageUrl} alt={title} className="rounded-2xl object-cover" priority fill sizes="(max-width: 1550px) 80vw, (min-width: 1551px) 33vw" />
      </div>
      <div className="w-full flex justify-between flex-1 px-3 flex-col items-center">
        <div className="text-center">
          <motion.a
            href={linkUrl}
            className="inline-flex mx-auto my-0 text-3xl font-bold no-underline"
            variants={serviceVariant}
            initial="initial"
            whileHover="hover"
            animate="initial"
          >
            {title}
            <motion.span className="flex items-center pl-2" variants={arrowVariant}>
              <ArrowRight color="white" />
            </motion.span>
          </motion.a>
          <motion.p className="text-center p-0 text-gray-400 font-semibold mx-auto max-w-[90%]">{description}</motion.p>
        </div>

        <motion.ul
          className="list-none flex flex-col items-start text-xl font-normal w-full m-0 gap-4 pt-6 pb-4"
          variants={{ initial: {}, show: { transition: { staggerChildren: 0.25 } } }}
          whileInView="show"
          initial="initial"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.li className="flex justify-start items-center text-left" variants={listItemVariant} key={index}>
              <img src="../assets/icons/checkmark.svg" alt="checkmark" className="icon-36" />
              <p className="ml-2">{step}</p>
            </motion.li>
          ))}
        </motion.ul>

        <div className="w-full">
          <div className="flex w-full justify-around gap-4 py-4">
            <div className="flex flex-col items-center p-2 bg-contactBkg w-full rounded-2xl font-bold">
              <p className="text-white m-0">{hours}</p>
              <p className="text-gray-400 text-[14px]">hours</p>
            </div>
            <div className="flex flex-col items-center p-2 bg-contactBkg w-full rounded-2xl font-bold">
              <p className="text-gray-400 text-[14px]">Starting at</p>
              <p className="text-white m-0 text-2xl">${prices["2 Door"][serviceType][specificService]}</p>
            </div>
          </div>

          <div className="flex w-full justify-around gap-4 flex-col lg:flex-row">
            <motion.a
              href={linkUrl}
              className="py-3 text-dm tracking-wide px-[0.9rem] bg-secondaryBtnClr rounded-[40px] text-center font-bold text-clip lg:w-1/2"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              aria-label={`Learn More about our ${title} service.`}
            >
              Learn More
            </motion.a>
            <motion.a
              href="/contact"
              className="py-3 text-dm tracking-wide px-[0.9rem] bg-primary text-black rounded-[40px] w-full font-bold items-center flex justify-center"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              Schedule Today!
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
