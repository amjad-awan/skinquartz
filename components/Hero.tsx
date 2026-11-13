
"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

const heroImages = [
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=85",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920&q=85",
  "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=1920&q=85",
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1920&q=85",
];

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    y: -15,
    filter: "blur(4px)",
  },
};

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const contentTransition = (delay: number) => ({
    duration: shouldReduceMotion ? 0 : 0.8,
    delay: shouldReduceMotion ? 0 : delay,
    ease: [0.22, 1, 0.36, 1] as const,
  });

  return (
    <section className="relative h-[420px] md:h-[800px] overflow-hidden flex items-center justify-center text-center text-white px-4">

      {/* Background Image Slider */}
      <AnimatePresence mode="sync">
        <motion.div
          key={activeImage}
          initial={{
            opacity: 0,
            scale: shouldReduceMotion ? 1 : 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            opacity: {
              duration: shouldReduceMotion ? 0 : 1.5,
              ease: "easeInOut",
            },
            scale: {
              duration: shouldReduceMotion ? 0 : 6,
              ease: "linear",
            },
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${heroImages[activeImage]}')`,
          }}
        />
      </AnimatePresence>

      {/* Hero Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      {/* Animated Hero Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeImage}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative z-10 max-w-5xl"
        >

          {/* Small Label */}
          <motion.span
            variants={contentVariants}
            transition={contentTransition(0.1)}
            className="block text-[10px] md:text-xs tracking-[0.4em] uppercase mb-6"
          >
            The Skin Quartz Clinic · Manchester
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            variants={contentVariants}
            transition={contentTransition(0.2)}
            className="font-serif font-light text-4xl md:text-7xl lg:text-8xl tracking-wide uppercase leading-tight"
          >
            Laser Hair Removal
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={contentVariants}
            transition={contentTransition(0.4)}
            className="font-serif italic text-sm md:text-[20px] mt-5 max-w-3xl mx-auto leading-relaxed"
          >
            Easily spread the cost of your treatments with our payment options
            in-clinic.
          </motion.p>

          {/* CTA */}
          <motion.a
            href="#contact"
            variants={contentVariants}
            transition={contentTransition(0.6)}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            className="inline-block mt-9 border border-white/70 text-[10px] md:text-xs tracking-[0.25em] uppercase px-8 md:px-10 py-4 hover:bg-white hover:text-ink transition-colors duration-300"
          >
            Book an appointment
          </motion.a>

        </motion.div>
      </AnimatePresence>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            aria-label={`Show image ${index + 1}`}
            aria-current={activeImage === index ? "true" : undefined}
            onClick={() => setActiveImage(index)}
            className={`h-1 transition-all duration-500 ${
              activeImage === index
                ? "w-8 bg-white"
                : "w-3 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
