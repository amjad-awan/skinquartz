
"use client";

import { motion, useReducedMotion } from "framer-motion";

const treatmentAreas = [
  "Face — upper lip, chin & cheeks",
  "Legs",
  "Arms & underarms",
  "Bikini line",
  "Back & chest",
];

const benefits = [
  "Long-term hair reduction with a course of treatments.",
  "Personalised treatment plans based on your individual needs.",
  "Professional care focused on comfort and your treatment goals.",
];

export default function SeoContent() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 25 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.8, ease: "easeOut" as const },
      };

  return (
    <section className="relative overflow-hidden bg-[#f8f6f1] px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">

        {/* Intro */}
        <motion.div {...reveal} className="max-w-3xl">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-9 bg-[#ad916b]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#9a805f]">
              The Skin Quartz Experience
            </span>
          </div>

          <h2 className="font-serif text-4xl leading-[1.15] tracking-tight text-[#29251f] sm:text-5xl md:text-6xl">
            Laser Hair Removal
            <br />
            <span className="italic text-[#a98b61]">in Manchester.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-sm leading-8 text-[#81786e] sm:text-base">
            Tired of the endless cycle of shaving or the discomfort of waxing?
            Discover a more considered approach to smoother skin. At The Skin
            Quartz Clinic in Manchester, we offer laser hair removal treatments
            designed around your individual skin, hair and treatment goals.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          {...reveal}
          className="mt-20 grid gap-10 border-y border-[#ded7cc] py-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20"
        >
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9a805f]">
              A Considered Approach
            </span>

            <h3 className="mt-4 font-serif text-3xl leading-tight text-[#29251f] sm:text-4xl">
              Care That Begins
              <br />
              <span className="italic text-[#a98b61]">With You.</span>
            </h3>
          </div>

          <div className="divide-y divide-[#ded7cc]">
            {benefits.map((benefit, index) => (
              <div key={benefit} className="flex gap-5 py-5 first:pt-0 last:pb-0">
                <span className="font-serif text-sm italic text-[#ad916b]">
                  0{index + 1}
                </span>
                <p className="text-sm leading-7 text-[#70675e]">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Treatment areas */}
        <motion.div
          {...reveal}
          className="mt-20 grid gap-10 md:grid-cols-2 md:gap-20"
        >
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9a805f]">
              Personalised Treatments
            </span>

            <h3 className="mt-4 font-serif text-3xl leading-tight text-[#29251f] sm:text-4xl">
              Areas We
              <br />
              <span className="italic text-[#a98b61]">Treat.</span>
            </h3>

            <p className="mt-5 text-sm leading-8 text-[#81786e]">
              From delicate facial areas to larger body areas, explore
              treatment options tailored to your individual needs.
            </p>
          </div>

          <div className="border-t border-[#ded7cc]">
            {treatmentAreas.map((area, index) => (
              <div
                key={area}
                className="flex items-center justify-between gap-4 border-b border-[#ded7cc] py-5"
              >
                <span className="text-sm text-[#5f574e]">{area}</span>
                <span className="font-serif text-sm italic text-[#ad916b]">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Closing */}
        <motion.div
          {...reveal}
          className="mt-20 bg-[#eee7dc] px-7 py-12 text-center sm:px-12 sm:py-16"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#9a805f]">
            Beyond Hair Removal
          </span>

          <h3 className="mt-5 font-serif text-3xl leading-tight text-[#29251f] sm:text-4xl">
            Your Beauty, Your Way.
          </h3>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-[#81786e]">
            In addition to laser hair removal, The Skin Quartz Clinic offers
            a range of non-surgical aesthetic treatments. Our team can help
            you explore the options that best suit your individual goals.
          </p>

          <div className="mt-9">
            <a
              href="#contact"
              className="inline-flex items-center gap-5 bg-[#29251f] px-8 py-4 text-[10px] uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#a98b61]"
            >
              Book Your Consultation
              <span className="text-base">→</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
