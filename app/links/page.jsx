"use client";
import Image from "next/image";
import { Titillium_Web } from "next/font/google";
import { motion } from "framer-motion";
import { ShoppingCart, ShieldCheck, Tv, Globe } from "lucide-react";
import Link from "next/link";

// Initialize Font
const titillium = Titillium_Web({ weight: ["400", "600", "700"], subsets: ["latin"] });

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

// Reusable Button Component
const LinkButton = ({ href, Icon, iconSrc, title, subtext, variant = "primary" }) => {
  // Styles for different button priorities
  const baseStyle = "w-full p-4 rounded-xl flex items-center gap-4 transition-all duration-300 shadow-lg border";

  const styles = {
    primary: "bg-white text-zinc-900 border-white hover:bg-zinc-200 hover:scale-[1.02]",
    secondary: "bg-zinc-800/50 text-white border-zinc-700 backdrop-blur-sm hover:bg-zinc-700 hover:border-zinc-500 hover:scale-[1.02]",
    accent: "bg-red-600 text-white border-red-600 hover:bg-red-700 hover:scale-[1.02]" // Good for YouTube or 'Hot' links
  };

  return (
    <motion.div variants={itemVariants} className="w-full">
      <Link href={href} className={`${baseStyle} ${styles[variant]}`}>
        <div className="p-2 bg-black/10 rounded-full">
          {iconSrc ? <Image src={iconSrc} alt={title} width={24} height={24} className="text-white" /> : <Icon size={24} />}
        </div>
        <div className="flex flex-col text-left">
          <span className="font-bold text-lg leading-tight">{title}</span>
          {subtext && <span className="text-xs opacity-80 font-light">{subtext}</span>}
        </div>
      </Link>
    </motion.div>
  );
};

export default function LinksPage() {
  return (
    <main className={`min-h-screen w-full bg-gradient-to-b ${titillium.className} bg-zinc-900 text-white flex flex-col items-center py-12 px-4 pt-24`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center mb-10 space-y-4"
      >
        <div className="w-24 h-24 rounded-full bg-zinc-800 border-4 border-zinc-700 shadow-2xl overflow-hidden flex items-center justify-center">
          <Image src="/assets/images/showcase/homepage-logo.png" alt="Dirt-Less Detailing" width="124" height="124" className="w-full h-full object-contain" />
        </div>
      </motion.div>

      {/* Links Container */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-md flex flex-col gap-4">
        <div className="w-full flex flex-col gap-4">
          <LinkButton href="/products" Icon={ShoppingCart} title="Shop Detailing Products" subtext="Our recommended supplies" variant="primary" />

          <LinkButton
            href="/products?category=Ceramic"
            Icon={ShieldCheck}
            title="Ceramic Maintenance Guide"
            subtext="How to care for your coating"
            variant="secondary"
          />

          <LinkButton href="/products?category=Showcase" Icon={Tv} title="Products Showcased on YouTube" subtext="As seen in our videos" variant="secondary" />

          <LinkButton
            href="/products?category=Equipment"
            iconSrc="/assets/icons/urable.png"
            title="Book Online"
            subtext="All services, Addons, and Gift Cards"
            variant="secondary"
          />
        </div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 my-4 opacity-50">
          <div className="h-[1px] bg-zinc-500 flex-grow"></div>
          <span className="text-xs uppercase tracking-widest">Connect</span>
          <div className="h-[1px] bg-zinc-500 flex-grow"></div>
        </motion.div>

        <div className="w-full flex flex-col gap-3">
          <LinkButton href="https://www.youtube.com/channel/UCsoqP5s4hwkQd_Sd-TVv-jg" iconSrc="/assets/icons/youtube.svg" title="YouTube" variant="secondary" />

          <LinkButton href="https://www.instagram.com/dirt_less_detailing/" iconSrc="/assets/icons/instagram.svg" title="Instagram" variant="secondary" />

          <LinkButton href="https://www.facebook.com/DirtLessDetailing/" iconSrc="/assets/icons/facebook.svg" title="Facebook" variant="secondary" />

          <LinkButton href="https://www.tiktok.com/@brendenflower" iconSrc="/assets/icons/tiktok.svg" title="TikTok" variant="secondary" />
        </div>

        <motion.div variants={itemVariants} className="mt-12 text-center text-zinc-500 text-sm">
          <Link href="/" className="hover:text-white transition-colors flex items-center justify-center gap-2 mb-2">
            <Globe size={16} /> Visit Our Main Website
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
