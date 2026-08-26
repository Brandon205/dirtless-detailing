"use client";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

export const HeroSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up"
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 === images.length ? 0 : prevIndex + 1));
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval: any;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [handleNext, handlePrevious, autoplay]);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeInOut
      }
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1
      }
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1
      }
    }
  };

  return (
    <div
      className={cn("overflow-hidden h-[90vh] w-full relative flex items-center", className)}
      style={{
        perspective: "1000px"
      }}
    >
      {children}
      {overlay && <div className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)} />}

      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial="initial"
          animate="visible"
          exit={direction === "up" ? "upExit" : "downExit"}
          variants={slideVariants}
          className="image h-full w-full absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`Dirt-Less Detailing showcase ${currentIndex + 1}`}
            fill
            priority={currentIndex === 0}
            sizes="100vw"
            quality={75}
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
