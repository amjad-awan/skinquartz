
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Clock3,
  Heart,
  Hourglass,
  AlertCircle,
  CalendarDays,
} from "lucide-react";

const facts = [
  {
    icon: Clock3,
    label: "Treatment Time",
    text: "Most sessions take 15 minutes to an hour, depending on the area being treated.",
  },
  {
    icon: Heart,
    label: "Downtime",
    text: "There is minimal downtime, so you can generally return to daily activities shortly after treatment.",
  },
  {
    icon: Hourglass,
    label: "Results Timeline",
    text: "Visible hair reduction typically develops over a course of treatment sessions.",
  },
  {
    icon: AlertCircle,
    label: "Possible Effects",
    text: "Temporary redness and mild swelling around the follicles can occur after treatment.",
  },
  {
    icon: CalendarDays,
    label: "Maintenance",
    text: "Occasional maintenance sessions may help sustain your results over time.",
  },
];

export default function TreatmentFacts() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden border-y border-[#e7dfd4] bg-[#f8f6f1] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Intro */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#ad916b]" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#9a805f]">
              Know Before You Begin
            </span>
            <span className="h-px w-8 bg-[#ad916b]" />
          </div>

          <h2 className="font-serif text-3xl leading-tight text-[#29251f] sm:text-4xl">
            Your Treatment,
            <span className="italic text-[#a98b61]"> Explained.</span>
          </h2>

          <p className="mt-4 text-xs leading-6 text-[#81786e] sm:text-sm">
            A few helpful things to know before starting your laser hair
            removal journey.
          </p>
        </motion.div>

        {/* Facts */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-0">
          {facts.map((fact, index) => {
            const Icon = fact.icon;

            return (
              <motion.div
                key={fact.label}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, y: 25 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                }}
                className={`group flex flex-col items-center px-3 text-center lg:px-6 ${
                  index !== 0 ? "lg:border-l lg:border-[#e2d8cb]" : ""
                }`}
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#dfd0bc] bg-[#f1ebe2] transition-all duration-500 group-hover:border-[#ad916b] group-hover:bg-[#e9dfd1]">
                  <Icon
                    strokeWidth={1.3}
                    className="h-6 w-6 text-[#a98b61] transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <h3 className="mt-5 font-serif text-base text-[#29251f] sm:text-lg">
                  {fact.label}
                </h3>

                <p className="mt-3 max-w-[230px] text-xs leading-6 text-[#81786e]">
                  {fact.text}
                </p>

                <span className="mt-5 h-px w-7 bg-[#c6ad8c] transition-all duration-500 group-hover:w-14" />
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <p className="mx-auto mt-12 max-w-3xl text-center text-[10px] leading-6 text-[#a0978c]">
          Treatment times, responses and recovery experiences vary between
          individuals. Your practitioner will explain expected outcomes,
          aftercare and potential side effects during your consultation.
        </p>

      </div>
    </section>
  );
}
