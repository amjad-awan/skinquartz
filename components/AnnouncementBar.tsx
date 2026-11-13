
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export default function AnnouncementBar() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-[#29251f] text-white px-4 md:px-8 py-3">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-3">

        {/* Left CTA */}
        <Link
          href="#contact"
          className="shrink-0 bg-[#ad916b] text-white px-4 md:px-7 py-3 text-[9px] md:text-[10px] tracking-[0.2em] uppercase hover:bg-[#c4a77f] transition-colors duration-300"
        >
          Book Now
        </Link>

        {/* Center Announcement */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden md:flex flex-col items-center text-center"
        >
          <span className="font-serif italic text-[19px] lg:text-[21px] text-[#e8ddd0] tracking-wide">
            Your Skin Deserves Something Special
          </span>

          <span className="text-[8px] uppercase tracking-[0.3em] text-white/45 mt-1">
            Discover The Skin Quartz Experience
          </span>
        </motion.div>

        {/* Mobile Message */}
        <span className="md:hidden flex-1 text-center font-serif italic text-[13px] text-[#e8ddd0]">
          A More Personal Kind of Care
        </span>

        {/* Right CTA */}
        <Link
          href="#contact"
          className="shrink-0 border border-[#ad916b] text-[#d5bd9e] px-4 md:px-7 py-3 text-[9px] md:text-[10px] tracking-[0.2em] uppercase hover:bg-[#ad916b] hover:text-white transition-all duration-300"
        >
          Start With Us
        </Link>

      </div>
    </div>
  );
}
