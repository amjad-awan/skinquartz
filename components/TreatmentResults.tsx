
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const results = [
  {
    title: "Underarm Treatment",
    category: "Hair Reduction",
    image:
      "https://milanlasernormal.com/static/Underarm_Top-Bottom-dc71bf844f543b25ec96147ab65844f9.jpg",
  },
  {
    title: "Leg Treatment",
    category: "Smooth Skin",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format%3Dauto%2Cw%3D768%2Ch%3D1135%2Cfit%3Dcrop/ALATEyDymOOy4cMo/dlaczego-warto-wykonaci-depilacjei-laserowai-w-og-cosmetology-IU6wrwvU2xrLNI6y.png",
  },
  {
    title: "Underarm Treatment",
    category: "Visible Reduction",
    image:
      "https://cdn.prod.website-files.com/6615ae04538be69b7fd78da5/6744dd4ebdca1e9793063585_672a6849d33f8e2803e7eb23_Motus%20armpit%201.webp",
  },
  {
    title: "Treatment Results",
    category: "Before & After",
    image:
      "https://www.firstbeauty.com.tw/archive/image/edcontent6/qqwwee.jpg",
  },
];

export default function TreatmentResults() {
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
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#9a805f]">
              The Art of Smooth Skin
            </span>
            <span className="h-px w-9 bg-[#ad916b]" />
          </div>

          <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#29251f] sm:text-5xl">
            Treatment
            <span className="italic text-[#a98b61]"> Results.</span>
          </h2>

          <p className="mt-5 font-serif text-sm italic leading-7 text-[#81786e]">
            Discover examples of laser hair reduction across different
            treatment areas.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: 30 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: shouldReduceMotion ? 0 : index * 0.12,
              }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#eae3d9]">
                <Image
                  src={result.image}
                  alt={`${result.title} laser hair removal before and after example`}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.2em] text-white">
                  {result.category}
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 border-b border-[#ded7cc] py-4">
                <h3 className="font-serif text-sm text-[#29251f] sm:text-base">
                  {result.title}
                </h3>
                <span className="text-xs text-[#ad916b]">0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="mx-auto max-w-lg text-xs leading-7 text-[#92877b]">
            Results vary depending on individual skin type, hair colour,
            treatment area and number of sessions. A consultation helps
            determine a suitable treatment plan.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-4 bg-[#29251f] px-8 py-4 text-[10px] uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#a98b61]"
          >
            Begin Your Journey
            <span>→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
