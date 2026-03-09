import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import prices from "../../utils/Prices";
// import salePrices from "../../utils/SalePrices";

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

// colors: {bgMain: "zinc-800", bgLight: "zinc-500", bgHighlight: "zinc-300"}
export default function HomePageCard({
  title,
  imageUrl,
  description,
  steps,
  hours,
  linkUrl,
  serviceType,
  specificService,
  colors = { bgMain: "bg-red-500", bgLight: "bg-zinc-500", bgHighlight: "bg-zinc-300", borderColor: "border-gray-300" }
}) {
  return (
    <div
      className={`flex flex-col flex-1 relative w-[90%] min-w-[200px] lg:min-w-[400px] max-w-[95%] lg:max-w-[1030px] gap-2 rounded-2xl pb-8 ${colors.bgMain} overflow-hidden shadow-lg`}
    >
      {/* Diagonal sale banner */}
      {/* <div className="absolute top-10 right-[-36px] z-20 rotate-45 bg-gradient-to-r from-rose-600 to-red-500 text-white px-6 py-1 shadow-lg uppercase font-bold text-lg tracking-tight pointer-events-none max-w-[200px] text-center overflow-hidden whitespace-nowrap leading-none">
        Winter Sale
      </div> */}

      <div className="relative m-[2%] bg-center bg-no-repeat bg-cover h-[200px] w-[96%] lg:h-[250px] rounded-2xl flex justify-center">
        <Image src={imageUrl} alt={title} className="rounded-2xl object-cover" priority fill sizes="(max-width: 1550px) 80vw, (min-width: 1551px) 33vw" />
      </div>
      <div className="w-full flex justify-between flex-1 px-1 lg:px-3 flex-col items-center">
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
          </motion.a>
          <motion.p className="text-center p-0 text-gray-400 font-semibold mx-auto max-w-[90%]">{description}</motion.p>
        </div>

        <motion.ul
          className="list-none flex flex-col justify-start items-start text-xl font-normal w-full m-0 gap-4 pt-6 pb-4"
          variants={{ initial: {}, show: { transition: { staggerChildren: 0.25 } } }}
          whileInView="show"
          initial="initial"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.li className="flex justify-start items-center text-left" variants={listItemVariant} key={index}>
              <div className="flex-shrink-0 w-[36px] h-[36px]">
                <Check color="#1ca55d" size={36} />
              </div>
              <p className="ml-2">{step}</p>
            </motion.li>
          ))}
        </motion.ul>

        <div className="w-full">
          <div className="flex w-full justify-around gap-4 py-2 bg-zinc-900 rounded-2xl mb-4 flex-col lg:flex-row">
            <div className="flex flex-col items-center p-2  w-full rounded-2xl font-bold">
              <p className="text-gray-300 text-[14px] font-medium">EST. TIME:</p>
              <p className="text-white text-2xl m-0">{hours} hrs</p>
            </div>
            <div className="w-px bg-gray-300"></div>
            <div className="flex flex-col items-center p-2 w-full rounded-2xl font-bold">
              <p className="text-gray-300 text-[14px] font-medium">FROM:</p>
              <div className="flex flex-col lg:flex-row items-center">
                <p className="text-2xl font-bold m-0">${prices["Any 2-Door Vehicle"][serviceType][specificService]}</p>
                {/* <p className="text-green-500 m-0 text-2xl">${salePrices["Any 2-Door Vehicle"][serviceType][specificService]}</p> */}
              </div>
            </div>
          </div>

          <div className="flex w-full justify-around gap-4 flex-col lg:flex-row">
            <motion.a
              href={linkUrl}
              className="py-3 text-dm tracking-wide px-[0.9rem]  rounded-[40px] text-center font-bold text-clip lg:w-1/2 border-2 border-gray-300"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              aria-label={`Learn More about our ${title} service.`}
            >
              MORE INFO
            </motion.a>
            <motion.a
              href="/contact"
              className="py-3 text-dm tracking-wide px-[0.9rem] bg-primary rounded-[40px] w-full font-bold items-center flex justify-center"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              SCHEDULE NOW
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
