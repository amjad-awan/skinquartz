
"use client";

import { motion, useReducedMotion } from "framer-motion";

const why = [
  "Personalised treatment plans tailored to your skin and hair type.",
  "Professional practitioners with a focus on comfort and care.",
  "A welcoming, discreet and relaxing treatment environment.",
  "Modern laser technology for effective, long-term hair reduction.",
  "Convenient Manchester city-centre location.",
];

export default function WhyChoose() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 25 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.75, ease: "easeOut" as const },
      };

  return (
    <section className="relative overflow-hidden bg-[#f8f6f1] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">

        {/* Why choose */}
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

          <motion.div {...reveal}>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#ad916b]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#9a805f]">
                The Skin Quartz Difference
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-[1.15] tracking-tight text-[#29251f] sm:text-5xl">
              Why Choose
              <br />
              <span className="italic text-[#a98b61]">Skin Quartz?</span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#81786e]">
              Your treatment experience should feel as exceptional as the
              results. Discover a more considered approach to laser hair
              removal in Manchester.
            </p>
          </motion.div>

          <div className="border-t border-[#ded7cc]">
            {why.map((item, index) => (
              <motion.div
                key={item}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, x: 20 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                }}
                className="group flex gap-6 border-b border-[#ded7cc] py-6"
              >
                <span className="pt-1 font-serif text-sm italic text-[#ad916b]">
                  0{index + 1}
                </span>

                <p className="max-w-lg text-sm leading-7 text-[#5f574e] transition-colors duration-300 group-hover:text-[#a98b61]">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Location section */}
        <motion.div
          {...reveal}
          className="mt-24 border-t border-[#ded7cc] pt-16 sm:mt-32 sm:pt-20"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">

            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-9 bg-[#ad916b]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#9a805f]">
                  Find Us in Manchester
                </span>
              </div>

              <h2 className="font-serif text-3xl leading-[1.2] tracking-tight text-[#29251f] sm:text-4xl">
                Your Destination for
                <br />
                <span className="italic text-[#a98b61]">
                  Laser Hair Removal.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-8 text-[#81786e]">
              <p>
                Conveniently located in Manchester, Skin Quartz welcomes
                clients from Deansgate, Spinningfields, Castlefield, Salford,
                MediaCity, Trafford, Didsbury, Cheshire and across Greater
                Manchester looking for professional laser hair removal
                treatments.
              </p>

              <p>
                Unlike shaving and waxing, laser hair removal targets the
                hair follicle to provide longer-lasting hair reduction,
                helping many clients reduce the need for regular maintenance.
              </p>

              <p className="border-l border-[#ad916b] pl-5 text-[#5f574e]">
                Explore our specialist treatments:
              </p>

              <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:gap-8">
                <a
                  href="/full-body-laser-hair-removal-manchester"
                  className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[#29251f]"
                >
                  Full Body Laser Hair Removal
                  <span className="text-[#ad916b] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="/facial-laser-hair-removal-manchester"
                  className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[#29251f]"
                >
                  Facial Laser Hair Removal
                  <span className="text-[#ad916b] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
