
"use client";

import { motion, useReducedMotion } from "framer-motion";

const reviews = [
  {
    name: "Sajida Mansur",
    review:
      "Lovely clinic, friendly practitioners and great results. Highly recommend.",
  },
  {
    name: "Maddie Parlonhe",
    review:
      "Such a welcoming experience from start to finish. The team made me feel comfortable and explained everything clearly.",
  },
  {
    name: "Sarah Thompson",
    review:
      "Beautiful clinic with a relaxing atmosphere. The staff are professional, knowledgeable and genuinely lovely.",
  },
  {
    name: "Emma Williams",
    review:
      "Really happy with my treatment so far. Everything was explained properly and the whole experience was smooth and comfortable.",
  },
  {
    name: "Olivia Bennett",
    review:
      "The team are so friendly and attentive. I felt at ease throughout my appointment and would definitely recommend the clinic.",
  },
  {
    name: "Hannah Mitchell",
    review:
      "Fantastic service and a lovely environment. The practitioner took time to answer all my questions.",
  },
  {
    name: "Jessica Brown",
    review:
      "A wonderful experience. Booking was easy, the clinic was spotless and the staff were incredibly welcoming.",
  },
  {
    name: "Amelia Clarke",
    review:
      "Very professional service with a personal touch. I really appreciated how comfortable and relaxed they made me feel.",
  },
];

export default function Reviews() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 35 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-[#f4ece9] py-20 px-5 overflow-hidden">

      {/* Decorative Background Text */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-4 bottom-0 font-serif italic text-7xl md:text-9xl text-white/80 select-none pointer-events-none"
      >
        Reviews
      </motion.span>

      <div className="relative max-w-4xl mx-auto grid sm:grid-cols-2 gap-5 md:pl-40">

        {reviews.map((review, i) => (
          <motion.figure
            key={review.name}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: shouldReduceMotion ? 0 : i * 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={shouldReduceMotion ? {} : {
              y: -7,
              transition: { duration: 0.3 },
            }}
            className="bg-white p-6 md:p-7 text-xs shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <figcaption className="font-medium text-sm">
              {review.name}
            </figcaption>

            {/* Animated Stars */}
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
              className="text-amber-500 my-3 text-base tracking-widest"
              aria-label="5 stars"
            >
              ★★★★★
            </motion.p>

            <blockquote className="text-muted leading-relaxed">
              {review.review}
            </blockquote>
          </motion.figure>
        ))}

      </div>

      {/* Reviews Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative text-center mt-10"
      >
        <motion.a
          href="#"
          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
          className="btn-dark inline-block"
        >
          See all reviews
        </motion.a>
      </motion.div>

    </section>
  );
}
