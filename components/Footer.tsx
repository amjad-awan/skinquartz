"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Our Treatments", href: "/treatments" },
  { label: "Virtual Consultation", href: "/virtual-consultation" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "News & Articles", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-[#29251f] text-white overflow-hidden">
      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-20 pb-14">
        {/* Brand */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#ad916b] mb-5">
            The Skin Quartz Clinic
          </p>

          <Link href="/" className="inline-block group">
            <span className="font-serif text-[100px] sm:text-[140px] md:text-[180px] leading-[0.8] tracking-[-0.08em] text-[#f8f6f1] transition-colors duration-500 group-hover:text-[#c4a77f]">
              SQ
            </span>
          </Link>

          <div className="w-16 h-px bg-[#ad916b] mx-auto mt-9 mb-6" />

          <p className="font-serif italic text-xl md:text-2xl text-white/70">
            A more personal approach to skin.
          </p>
        </motion.div>

        <div className="h-px bg-white/15 mb-14" />

        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Contact */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-[#c4a77f] mb-7">
              How to Reach Us
            </h3>

            <div className="space-y-6 text-[13px] leading-7 text-white/65">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#ad916b] mt-1 shrink-0" />
                <p>
                  18 Cavendish St,
                  <br />
                  Manchester M1 5EL
                </p>
              </div>

              <a
                href="mailto:info@skinquartz.com"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <Mail size={16} className="text-[#ad916b] shrink-0" />
                <span>info@skinquartz.com</span>
              </a>

              <a
                href="tel:03331234567"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <Phone size={16} className="text-[#ad916b] shrink-0" />
                <span>0333 123 4567</span>
              </a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-[#c4a77f] mb-7">
              Explore
            </h3>

            <ul className="space-y-3">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/65 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Information */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-[#c4a77f] mb-7">
              Information
            </h3>

            <ul className="space-y-3">
              {footerLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/65 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Payments */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-[#c4a77f] mb-7">
              Connect With Us
            </h3>

            <p className="text-[13px] leading-7 text-white/65 mb-5">
              Follow our latest updates, treatments and clinic news.
            </p>

            <div className="flex items-center gap-3 mb-10">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[10px] tracking-wider text-white/70 hover:border-[#ad916b] hover:text-[#ad916b] transition-colors"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[10px] tracking-wider text-white/70 hover:border-[#ad916b] hover:text-[#ad916b] transition-colors"
              >
                FB
              </a>
            </div>

            <h3 className="text-[10px] tracking-[0.25em] uppercase text-[#c4a77f] mb-5">
              Secure Payments
            </h3>

            <div className="flex flex-wrap items-center gap-2">
              {["VISA", "Mastercard", "AMEX", "PayPal"].map((method) => (
                <span
                  key={method}
                  className="px-3 py-2 border border-white/15 rounded-sm text-[10px] tracking-wide text-white/70"
                >
                  {method}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/15">
  <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-7 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
    <p className="text-[10px] tracking-wide text-white/40">
      © {new Date().getFullYear()} The Skin Quartz Clinic. All rights
      reserved.
    </p>

    <p className="text-[10px] text-white/40 leading-6 max-w-xl text-center">
      This site is protected by reCAPTCHA and the Google Privacy Policy
      and Terms of Service apply.
    </p>

    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[#c4a77f] hover:text-white transition-colors duration-300"
    >
      <span>Back to Top</span>
      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
        ↑
      </span>
    </button>
  </div>
</div>
    </footer>
  );
}
