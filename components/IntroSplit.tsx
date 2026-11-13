
"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const IntroSplit = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section className="grid md:grid-cols-2 items-stretch">
        <div className="px-6 md:px-16 py-14 md:py-24 self-center max-w-xl md:ml-auto">
          <h2 className="font-serif text-3xl md:text-4xl uppercase leading-tight">
            Laser Hair Removal Manchester
          </h2>

          <h3 className="mt-5 font-serif text-lg">
            Effective skin treatment for all skin types
          </h3>

          <p className="mt-4 text-sm text-muted leading-relaxed">
            Aside from laser being a pain-free process that permanently reduces
            the hairs from the area of your body being treated, it doesn’t come
            with the horrible side effects of waxing or shaving such as rashes,
            ingrown hairs, scars, cuts or irritation.
          </p>

          <p className="mt-4 text-sm text-muted leading-relaxed">
            Unlike waxing, you can continue to shave between laser treatments.
            Contact The Skin Quartz Clinic in Manchester for more information
            and advice.
          </p>

          <a href="#contact" className="btn-line mt-8">
            Book an appointment
          </a>
        </div>

        <div className="relative min-h-[360px] md:min-h-[520px] overflow-hidden group">
          <Image
            src="/images/laser-hair-stock-B.png"
            alt="Laser hair removal treatment"
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/20" />

          <button
            onClick={() => setIsOpen(true)}
            aria-label="Play video"
            className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-ink/80 text-white flex items-center justify-center hover:scale-110 transition-transform z-10"
          >
            ▶
          </button>
        </div>
      </section>

      {/* Animated Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              onClick={closeModal}
              aria-label="Close video"
              className="absolute top-5 right-6 text-white text-4xl hover:opacity-70 transition-opacity"
            >
              &times;
            </motion.button>

            {/* Video Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src="/videos/SQ-Laser-Hair.mp4"
                controls
                autoPlay
                playsInline
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default IntroSplit;
