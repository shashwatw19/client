import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import catalogScreen from "../assets/prodcut_cat_new.jpeg";
import pricing from "../assets/pricing_new.jpeg";
import fulfillment from "../assets/fulfilment_new.jpeg";
import growth from "../assets/growth_new.jpeg";
import { Link } from "react-router";
import aiCatalog from "../assets/ai_studio_new.jpeg";
type Section = {
  id: string;
  title: string;
  body: string;
  // placeholder for image url; pass your own when using the component
  image?: string;
};

const DEFAULT_SECTIONS: Section[] = [
  {
    id: "/company",
    title: "AI STUDIO",
    body: `YOUR AI CREATIVES POWERHOUSE.
No need to hire a agency or go around photo studios / content creators for getting your catalog built. You can now create a search engine optimized professional listing right at your desk.`,
    image: aiCatalog,
  },

  {
    id: "/catalog",
    title: "CATALOG",
    body: `CATALOG THAT CLICKS.
Now Create, Enrich and Transform Catalogs without any external help. An affordable tool which maintains your product information data and transforms it into platform required templates.`,
    image: catalogScreen,
  },
  {
    id: "/pricing",
    title: "PRICING",
    body: `PRICING THAT PERFORMS.
AI driven price recommendations with competitive price benchmarking, helps you get higher sales and better conversions. Also get AI-powered price recommendations, and insights on top selling products.
`,
    image: pricing,
  },
  {
    id: "/fulfillment",
    title: "FULFILMENT",
    body: `FULFILMENT THAT FLOWS.
One platform for your B2C & B2B shipping needs. Connected to all service providers, let's you setup your own rate card, and powered by AI agents for seamless deliveries, with pre and post shipping management
`,
    image: fulfillment,
  },
  {
    id: "/growth",
    title: "GROWTH & MARKETING",
    body: `THE GROWTH AMPLIFIER.
Enabled through WhatsApp and integrated with product information management and fulfilment system, it ensures to keep customers updated on order’s lifecycle. Send personalized promotions via custom campaigns.
`,
    image: growth,
  },
];

export const FeaturesTabs: React.FC<{ sections?: Section[]; className?: string }> = ({
  sections = DEFAULT_SECTIONS,
  className,
}) => {
  const [active, setActive] = useState<number>(0);
  const shouldReduceMotion = useReducedMotion();

  // framer-motion variants
  const container: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.06,
        when: "beforeChildren",
        duration: shouldReduceMotion ? 0 : 0.45,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0 : 0.42, ease: "easeOut" } },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 12, scale: 0.995 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: shouldReduceMotion ? 0 : 0.45, ease: "easeOut" } },
    exit: { opacity: 0, y: -8, transition: { duration: shouldReduceMotion ? 0 : 0.32 } },
  };

  return (
    <motion.section
      className={`w-full max-w-5xl mx-auto px-4 mt-60 ${className ?? ""}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={container}
      aria-label="Solutions tabs"
    >
      <div className="text-center my-12 md:my-16 lg:my-20">
        <h2 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-linear-to-r from-black via-gray-800 to-gray-700">
          Your Complete Commerce Stack
        </h2>
      </div>

      <div className="flex md:flex-row flex-col-reverse max-w-5xl items-start p-2 gap-6 ">
        <motion.div className="space-y-4" variants={item}>
          <div className="space-y-4">
            {sections.map((s, i) => {
              const isOpen = i === active;
              return (
                <motion.div key={s.id} variants={item} className="w-full">
                  <motion.button
                    onClick={() => setActive(i)}
                    aria-expanded={isOpen}
                    className={`w-full text-left rounded-xl border transition-shadow duration-200 focus:outline-none
                      ${isOpen ? "border-[#38b6ff] shadow-lg bg-white" : "border-gray-200 bg-white "}`}
                    whileHover={shouldReduceMotion ? {} : { y: -3 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.995 }}
                  >
                    <div className="px-6 py-4 flex items-center justify-between">
                      <span className="text-lg font-semibold">{s.title}</span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: shouldReduceMotion ? 0 : 0.36, ease: "easeInOut" }}
                          className="px-6 overflow-hidden"
                        >
                          <div className="py-4">
                            <p className="text-sm text-gray-600">{s.body}</p>
                          </div>

                          <div className="pb-4">
                            <Link to={s.id}>
                              <button
                                className="w-full bg-[#38b6ff] text-white font-semibold py-3 rounded-b-xl"
                                aria-label={`Learn more about ${s.title}`}
                              >
                                Know More
                              </button>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT: image/visual placeholder with smooth cross-fade */}
        <motion.div className="w-full flex items-center justify-center md:justify-end" variants={item}>
          <div className="relative rounded-2xl overflow-hidden bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={sections[active]?.id ?? active}
                variants={imageVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
                className="w-full h-96 md:h-[550px] flex items-center justify-center bg-white"
              >
                <img
                  src={sections[active]?.image && sections[active].image}
                  alt={sections[active].title}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturesTabs;
