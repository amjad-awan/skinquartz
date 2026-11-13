
"use client";

import { motion, useReducedMotion } from "framer-motion";

const areas = [
  {
    number: "01",
    title: "Facial Areas",
    subtitle: "Refined precision",
    description:
      "Target unwanted facial hair with treatments designed for delicate and smaller areas.",
    items: ["Upper lip", "Chin", "Cheeks", "Sideburns", "Neck"],
  },
  {
    number: "02",
    title: "Body Areas",
    subtitle: "Smoother by design",
    description:
      "Enjoy a more convenient approach to reducing unwanted hair across larger areas.",
    items: ["Full legs", "Arms", "Underarms", "Back", "Chest & abdomen"],
  },
  {
    number: "03",
    title: "Intimate Areas",
    subtitle: "Personalised care",
    description:
      "Explore tailored treatment options for intimate areas in a professional setting.",
    items: ["Bikini line", "Extended bikini", "Brazilian"],
  },
];

export default function TreatmentAreas() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#f8f6f1] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section heading */}
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
              Personalised Treatment Areas
            </span>
            <span className="h-px w-9 bg-[#ad916b]" />
          </div>

          <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#29251f] sm:text-5xl">
            Treatments Designed
            <br />
            <span className="italic text-[#a98b61]">Around You.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#81786e]">
            From delicate facial areas to larger body treatments, discover
            laser hair reduction options tailored to your individual needs.
          </p>
        </motion.div>

        {/* Treatment cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {areas.map((area, index) => (
            <motion.article
              key={area.number}
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: 35 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: shouldReduceMotion ? 0 : index * 0.15,
              }}
              className="group relative flex flex-col border border-[#e4dbcf] bg-[#fcfaf6] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#b49a76] hover:shadow-[0_18px_45px_rgba(60,45,25,0.06)] sm:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl italic text-[#c0a783]">
                  {area.number}
                </span>

                <span className="h-px w-12 bg-[#d8c9b5] transition-all duration-500 group-hover:w-20 group-hover:bg-[#ad916b]" />
              </div>

              <p className="mt-9 text-[9px] uppercase tracking-[0.25em] text-[#a18a6b]">
                {area.subtitle}
              </p>

              <h3 className="mt-3 font-serif text-2xl text-[#29251f]">
                {area.title}
              </h3>

              <p className="mt-4 min-h-[76px] text-xs leading-7 text-[#81786e]">
                {area.description}
              </p>

              <div className="my-7 h-px bg-[#e5ddd2]" />

              <p className="mb-4 text-[9px] font-medium uppercase tracking-[0.2em] text-[#a18a6b]">
                Treatment options
              </p>

              <ul className="space-y-4">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-xs text-[#5f574e]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#b49a76]" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-9 flex items-center justify-between border-t border-[#e5ddd2] pt-5 text-[9px] uppercase tracking-[0.18em] text-[#29251f] transition-colors hover:text-[#a98b61]"
              >
                Enquire About Treatment
                <span className="text-base text-[#ad916b] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.article>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-10 max-w-2xl text-center text-[11px] leading-7 text-[#92877b]"
        >
          Treatment suitability depends on individual skin and hair
          characteristics. Speak with our team to discuss the areas you
          would like to treat.
        </motion.p>

      </div>
    </section>
  );
}
