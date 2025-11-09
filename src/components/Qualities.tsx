import React from "react";
import { motion, type Variants } from "framer-motion";

const qualities = [
  {
    name: "Honesty",
    description:
      "We stay humble, learn from mistakes, and complement our shortcomings.",
  },
  {
    name: "Ownership",
    description:
      "We own outcomes — good or bad — and act to improve continuously.",
  },
  {
    name: "Perseverance",
    description:
      "We have the grit to solve hard problems; we iterate until they're solved.",
  },
  {
    name: "Empathy",
    description:
      "A customer's pain is our pain — we focus on practical solutions.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      when: "beforeChildren",
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.36, ease: [0.2, 0.9, 0.2, 1] as any },
  },
};

export const Qualities: React.FC = () => {
return (
    <section className="bg-black text-white py-14 md:py-16 rounded-lg max-w-7xl w-full mx-auto mt-10">
        <div className="max-w-7xl mx-auto px-4">
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {qualities.map((q) => (
                    <motion.article
                        key={q.name}
                        variants={cardVariants}
                        whileHover={{ y: -6, scale: 1.02 }}
                        className="relative bg-linear-to-br from-slate-900/80 to-slate-900/60 rounded-xl p-6 flex flex-col gap-3 items-start
                                             border border-transparent hover:border-slate-700 shadow-[0_6px_18px_rgba(2,6,23,0.6)] transition-transform duration-280 ease-[cubic-bezier(.2,.9,.2,1)] min-h-48"
                    >
                        <div className="flex items-center gap-3 w-full">
                            <h3 className="text-white text-xl md:text-3xl lg:text-3xl font-bold leading-tight">
                                {q.name}
                            </h3>
                        </div>

                        <p className="text-slate-300 text-base md:text-normal leading-relaxed mt-2">
                            {q.description}
                        </p>
                    </motion.article>
                ))}
            </motion.div>
        </div>
    </section>
);
};

export default Qualities;


