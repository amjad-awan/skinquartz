
"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const faqs: [string, string][] = [
  [
    "How does laser hair removal work?",
    "Pulses of light are absorbed by the pigment in each hair follicle. The heat disables the follicle so hair growth is reduced over a course of sessions.",
  ],
  [
    "Does laser hair removal hurt?",
    "Most clients describe a quick warm snap. Built-in cooling keeps treatment comfortable.",
  ],
  [
    "Is laser hair removal safe for my skin?",
    "Yes. Your practitioner performs a patch test first and adjusts settings to your skin and hair type.",
  ],
  [
    "How many treatments will I need?",
    "This varies by area and hair type. Most people need a course of sessions spaced several weeks apart.",
  ],
  [
    "What are the benefits of laser hair removal?",
    "Smoother skin, fewer ingrown hairs and far less time spent shaving or waxing.",
  ],
  [
    "Do I need a skin patch test?",
    "Yes. A patch test is required before treatment so we can check for any reaction.",
  ],
  [
    "What is the downtime following treatment?",
    "There is minimal downtime. Mild redness or swelling usually settles within a day or two.",
  ],
  [
    "What should I do before my laser hair treatment?",
    "Shave the area, avoid sun exposure and tanning products, and skip waxing or plucking beforehand.",
  ],
  [
    "What should I do after my hair removal treatment?",
    "Moisturise, avoid heat and direct sun, and use SPF on treated areas.",
  ],
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <ul className="max-w-3xl mx-auto divide-y divide-neutral-200 border-y border-neutral-200">
      {faqs.map(([q, a], i) => {
        const isOpen = open === i;

        return (
          <li key={q} className="group">
            <button
              className="w-full flex items-center justify-between gap-4 py-5 text-left text-sm md:text-base"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="flex items-center gap-3">
                <span className="font-serif text-lg text-[#c49f7f]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="group-hover:text-[#c49f7f] transition-colors duration-300">
                  {q}
                </span>
              </span>

              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
                className="shrink-0 text-xl font-light text-[#c49f7f]"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${i}`}
                  key="answer"
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { height: 0, opacity: 0, y: -8 }
                  }
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { height: 0, opacity: 0, y: -8 }
                  }
                  transition={{
                    height: {
                      duration: shouldReduceMotion ? 0 : 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    opacity: { duration: shouldReduceMotion ? 0 : 0.3 },
                    y: { duration: shouldReduceMotion ? 0 : 0.3 },
                  }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pl-10 md:pl-12 pr-6 text-sm text-muted leading-relaxed">
                    {a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
