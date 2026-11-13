
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ClipboardList, Sparkles, HeartHandshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    label: "Your Consultation",
    text: "We begin by understanding your skin, hair type and treatment goals to help determine your suitability.",
  },
  {
    number: "02",
    icon: Sparkles,
    label: "Your Personalised Plan",
    text: "Explore a treatment plan tailored to your individual needs, with guidance on what to expect.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    label: "Your Treatment Journey",
    text: "Begin your treatment journey with professional guidance and support at every stage.",
  },
];

export default function ClinicSteps() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#f8f6f1] px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#ad916b]" />
            <span className="text-eyebrow text-[#9a805f]">
              The Skin Quartz Experience
            </span>
            <span className="h-px w-9 bg-[#ad916b]" />
          </div>

          <h2 className="h-section text-[#29251f]">
            Your Journey to
            <br />
            <span className="italic text-[#a98b61]">
              Smoother Skin.
            </span>
          </h2>

          <p className="mt-5 font-serif text-sm italic leading-7 text-[#81786e]">
            Your laser hair removal experience at The Skin Quartz Clinic,
            Manchester.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">

          {/* Connecting line */}
          <div className="absolute left-[16.66%] right-[16.66%] top-10 hidden h-px bg-[#ded2c1] md:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, y: 30 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.75,
                  delay: shouldReduceMotion ? 0 : index * 0.15,
                }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#d8c7af] bg-[#f8f6f1] transition-all duration-500 hover:border-[#a98b61] hover:bg-[#eee5d9]">
                  <Icon
                    strokeWidth={1.2}
                    className="h-8 w-8 text-[#a98b61] transition-transform duration-500 hover:scale-110"
                  />

                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#29251f] font-serif text-[10px] text-white">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 font-serif text-xl text-[#29251f] sm:text-2xl">
                  {step.label}
                </h3>

                <p className="mt-4 max-w-xs text-body text-[#81786e]">
                  {step.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom detail */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-[#d8c7af]" />
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#a18a6b]">
            Personal care at every step
          </span>
          <span className="h-px w-8 bg-[#d8c7af]" />
        </motion.div>

      </div>
    </section>
  );
}
