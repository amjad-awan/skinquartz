
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, CalendarDays, MessageCircle } from "lucide-react";

const ctas = [
  {
    icon: Phone,
    label: "Speak With Our Team",
    sub: "We're here to answer your questions.",
    btn: "Call Us",
    href: "tel:+440000000000",
  },
  {
    icon: CalendarDays,
    label: "Your Treatment Journey",
    sub: "Take the first step towards smoother skin.",
    btn: "Book Consultation",
    href: "#contact",
  },
  {
    icon: MessageCircle,
    label: "Personal Enquiries",
    sub: "Let's find the right treatment for you.",
    btn: "Get In Touch",
    href: "#contact",
  },
];

export default function StartTreatment() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#f5f0e9] px-5 py-20 sm:py-28">
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#ad916b]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#9a805f]">
              Your Next Chapter
            </span>
            <span className="h-px w-8 bg-[#ad916b]" />
          </div>

          <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#29251f] sm:text-5xl">
            Start Your Treatment
            <br />
            <span className="italic text-[#a98b61]">Journey Here.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#81786e]">
            A little time for yourself can make all the difference.
            Connect with our team and discover your treatment options.
          </p>
        </motion.div>

        {/* CTA Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {ctas.map((c, index) => {
            const Icon = c.icon;

            return (
              <motion.div
                key={c.label}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, y: 30 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: shouldReduceMotion ? 0 : index * 0.15,
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -7 }}
                className="group flex flex-col items-center border border-[#e3d9cb] bg-[#faf8f4] px-6 py-10 text-center transition-colors duration-500 hover:border-[#b69a73]"
              >
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d9c9b2] bg-[#f5f0e9] transition-all duration-500 group-hover:border-[#ad916b] group-hover:bg-[#eee4d6]">
                  <Icon
                    strokeWidth={1.2}
                    className="h-7 w-7 text-[#9d805b] transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <span className="mt-7 text-[10px] font-medium uppercase tracking-[0.2em] text-[#9a805f]">
                  0{index + 1}
                </span>

                <h3 className="mt-3 font-serif text-xl text-[#29251f]">
                  {c.label}
                </h3>

                <p className="mt-3 min-h-12 max-w-[220px] text-xs leading-6 text-[#81786e]">
                  {c.sub}
                </p>

                <a
                  href={c.href}
                  className="group/button mt-7 inline-flex items-center gap-4 border-b border-[#ad916b] pb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#29251f] transition-colors hover:text-[#a98b61]"
                >
                  {c.btn}
                  <span className="text-[#ad916b] transition-transform duration-300 group-hover/button:translate-x-1">
                    →
                  </span>
                </a>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-[9px] uppercase tracking-[0.22em] text-[#a49a8e]">
          Thoughtful care · Personal attention · Beautifully considered
        </p>
      </div>
    </section>
  );
}
