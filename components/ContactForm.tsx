
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const field =
    "w-full bg-transparent border-b border-[#d8d0c5] px-0 py-4 text-sm text-[#29251f] placeholder:text-[#a49a8e] transition-colors duration-300 focus:border-[#a98b61] focus:outline-none";

  const animation = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.8, ease: "easeOut" as const },
      };

  return (
    <motion.form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="relative w-full max-w-md bg-[#f8f6f1] px-7 py-9 sm:px-10 sm:py-12"
      {...animation}
    >
      {/* Decorative detail */}
      <div className="mb-8 flex items-center gap-3">
        <span className="h-px w-9 bg-[#b39770]" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#9b805d]">
          Get in touch
        </span>
      </div>

      <h3 className="max-w-sm font-serif text-3xl leading-[1.2] tracking-tight text-[#29251f] sm:text-4xl">
        A More Personal
        <br />
        <span className="italic text-[#a98b61]">Kind of Care.</span>
      </h3>

      <p className="mt-4 max-w-xs text-sm leading-7 text-[#81786e]">
        Whether you have a question or are ready to begin your treatment
        journey, we would love to hear from you.
      </p>

      <div className="mt-8 space-y-2">
        <input
          required
          name="name"
          autoComplete="name"
          className={field}
          placeholder="Your full name"
          aria-label="Your full name"
        />

        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className={field}
          placeholder="Your email address"
          aria-label="Email address"
        />

        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          className={field}
          placeholder="Your phone number (optional)"
          aria-label="Phone number"
        />

        <textarea
          rows={3}
          name="message"
          className={`${field} resize-none`}
          placeholder="How can we help you?"
          aria-label="Your message"
        />
      </div>

      <button
        type="submit"
        className="group mt-8 flex w-full items-center justify-between bg-[#29251f] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-[#a98b61]"
      >
        <span>Send your enquiry</span>
        <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>

      {sent && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          role="status"
          className="mt-5 text-center text-xs tracking-wide text-[#8b704e]"
        >
          Thank you. Your enquiry has been received.
        </motion.p>
      )}

      <p className="mt-6 text-center text-[10px] tracking-wide text-[#a49a8e]">
        YOUR PRIVACY IS ALWAYS RESPECTED
      </p>
    </motion.form>
  );
}
