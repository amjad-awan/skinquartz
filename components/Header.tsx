
"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import AnnouncementBar from "./AnnouncementBar";

const left: string[] = [
  "Laser Hair Removal",
  "Body Sculpting",
  "Facials",
];

const right: string[] = [
  "Lymphatic Drainage",
  "Skin Peels",
  "Health & Wellbeing",
];

const allLinks = [...left, ...right];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!sticky && latest >= 1000) {
      setSticky(true);
      setOpen(false);
    } else if (sticky && latest < 240) {
      setSticky(false);
    }
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Premium desktop navigation link
 const NavLink = ({ label }: { label: string }) => (
  <a
    href="#"
    className={`group relative inline-block py-2 text-[10px] tracking-[0.18em] uppercase transition-colors duration-300 ${
      sticky
        ? "text-white/85 hover:text-[#c4a77f]"
        : "text-[#39342e] hover:text-[#ad916b]"
    }`}
  >
    <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 inline-block">
      {label}
    </span>

    <span
      className={`absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 ${
        sticky ? "bg-[#c4a77f]" : "bg-[#ad916b]"
      }`}
    />
  </a>
);

  const renderNavigation = () => (
  <nav
  className={`relative flex items-center justify-between md:justify-center px-4 md:px-8 py-3 border-b transition-colors duration-500 ${
    sticky
      ? "bg-[#29251f] border-white/10"
      : "bg-white border-neutral-100"
  }`}
  aria-label="Main"
>
      {/* Left Navigation */}
      <ul className="hidden md:flex flex-1 justify-end gap-7 lg:gap-9 pr-8 lg:pr-10">
        {left.map((label) => (
          <li key={label}>
            <NavLink label={label} />
          </li>
        ))}
      </ul>

      {/* Logo */}
      <a
        href="/"
        aria-label="The Skin Quartz Clinic"
        className="group flex items-center justify-center shrink-0"
      >
      <Image
  src={sticky ? "/images/light-logo.png" : "/images/logo.png"}
  alt="The Skin Quartz Clinic"
  width={140}
  height={70}
  priority
  className="w-auto h-12 md:h-14 object-contain transition-all duration-500 group-hover:scale-[1.04] group-hover:opacity-80"
/>
      </a>

      {/* Right Navigation */}
      <ul className="hidden md:flex flex-1 gap-7 lg:gap-9 pl-8 lg:pl-10">
        {right.map((label) => (
          <li key={label}>
            <NavLink label={label} />
          </li>
        ))}
      </ul>

      {/* Animated Mobile Toggle */}
      <button
        type="button"
        className="md:hidden relative z-[60] w-11 h-11 flex flex-col items-center justify-center gap-[6px] rounded-full border border-[#e8e1d8] bg-[#faf8f4] hover:border-[#ad916b] hover:bg-[#f2ede5] transition-all duration-300"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <motion.span
          animate={{
            rotate: open ? 45 : 0,
            y: open ? 4 : 0,
            width: open ? 19 : 20,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="block h-px bg-[#39342e]"
        />

        <motion.span
          animate={{
            opacity: open ? 0 : 1,
            x: open ? 8 : 0,
            scaleX: open ? 0 : 1,
          }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          className="block w-4 h-px bg-[#ad916b]"
        />

        <motion.span
          animate={{
            rotate: open ? -45 : 0,
            y: open ? -10 : 0,
            width: open ? 19 : 20,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="block h-px bg-[#39342e]"
        />
      </button>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="md:hidden absolute top-full inset-x-0 bg-[#faf8f4] border-t border-[#e8e1d8] shadow-[0_15px_35px_rgba(0,0,0,0.08)] overflow-hidden"
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <div className="px-7 pt-8 pb-9">
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#ad916b] mb-7">
            Explore The Clinic
          </p>

          <ul className="space-y-0">
            {allLinks.map((label, i) => (
              <motion.li
                key={label}
                initial={false}
                animate={{
                  opacity: open ? 1 : 0,
                  x: open ? 0 : -12,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.3,
                  delay: open ? i * 0.045 : 0,
                }}
                className="border-b border-[#e8e1d8]"
              >
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between py-4 text-[11px] tracking-[0.16em] uppercase text-[#39342e] hover:text-[#ad916b] transition-colors duration-300"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {label}
                  </span>

                  <motion.span
                    initial={false}
                    className="text-[#ad916b] text-lg font-light"
                    whileHover={{ x: 4 }}
                  >
                    →
                  </motion.span>
                </a>
              </motion.li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 flex items-center justify-center w-full bg-[#ad916b] text-white py-4 text-[10px] tracking-[0.22em] uppercase hover:bg-[#927650] transition-colors duration-300"
          >
            Book Your Consultation
          </a>
        </div>
      </motion.div>
    </nav>
  );

  return (
    <>
      {/* Original Header */}
      <header className="relative z-40 bg-white">
        <AnnouncementBar />
        {renderNavigation()}
      </header>

      {/* Floating Sticky Navbar */}
      <motion.header
        initial={false}
        animate={{
          y: sticky ? "0%" : "-110%",
          opacity: sticky ? 1 : 0,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
className="fixed top-0 left-0 right-0 z-[100] bg-[#29251f] shadow-[0_4px_25px_rgba(0,0,0,0.18)]"        style={{
          pointerEvents: sticky ? "auto" : "none",
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
        }}
      >
        {renderNavigation()}
      </motion.header>
    </>
  );
}
