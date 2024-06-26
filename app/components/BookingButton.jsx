import { motion } from "framer-motion";

export function BookingButton({ title }) {
  return (
    <motion.a
      href="https://app.urable.com/virtual-shop/pMe0iWXWCBfTL47sDvjd"
      target="_blank"
      rel="noopener"
      initial={{ "--x": "100%", "scale": 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.5,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1
        }
      }}
      className="px-6 py-2 rounded-md relative radial-gradient mx-auto inline-block"
    >
      <span className="text-neutral-100 font-medium tracking-wide h-full text-3xl w-full block relative linear-mask">{title}</span>
      <span className="block absolute inset-0 rounded-md p-[2px] linear-overlay" />
    </motion.a>
  );
}
