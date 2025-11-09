import productDashBoard from "../assets/Screenshot 2025-11-05 232626.png";

import { motion } from "motion/react";
// import { PointerHighlight } from "../components/PointerHighLight";
import { HoverEffect } from "../components/CardHoverEffect";
import { TalkToExpert } from "../components/Partnership";
import Sarvarth from "../assets/sarvarta.webp";
import Vineet from "../assets/Vineet.png";
import Niteshkumar from "../assets/NiteshKumar.png";
import SurbhiSinha from "../assets/SurbhiSinha.png";
import Sudheendra from "../assets/Sudheendra.png";
import Piyush from "../assets/Piyush.png";
import Mahesh from "../assets/Mahesh.png";

import { Qualities } from "../components/Qualities";

// import img2 from "../assets/vineet.webp"
export const projects = [
  {
    title: "Sarvartha Kanchan",
    position : "Founder & CEO",
    description: "An eminent retail business leader with 20+years of experience in SCM and platform businesses.",
    image: { src: Sarvarth },
  },
  {
    title: "Vineet Agarwal",
    position : "Co-Founder & CTO",
    description: `A technocrat with 20+ years of scalable technology and product experience in building large-scale platforms across SCM & Finance.`,
    image: { src: Vineet },
  },
  {
    title: "Piyush Vaish",
    position : "CO-Founder & COO",
    description: "Seasoned professional with 20+ years of experience in integration and infrastructure management",
    image: { src: Piyush },
  },
  {
    title: "Surbhi Sinha",
    position : "CO-Founder & CAO",
    description: "",
    image: { src: SurbhiSinha },
  },
  {
    title: "Mahesh Hegde", 
    position : "Head of Business - Unified Fulfilment Platform",
    description:
      "Suppy chain leader with more than 15+ years of experience in Product and Process design, improvement and management",
    image: { src: Mahesh },
  },
  {
    title: "Nitesh Sahay",
    position : "VP - Business",
    description:
      "An achivement Oriented professional with over 20 years of rich experience in eCommerce fulfillment services and operations exellence",
    image: { src: Niteshkumar },
  },
  {
    title: "Sudheendra B N",
    position : "Head of Business - Unified Seller Platform",
    description: "A no-nonsense thought leader with a proven ability to design systems to scale from 'zero to one'",
    image: { src: Sudheendra },
  },
  {
    title: "Roobin Meena",
    position : "Head of business - Unified Fulfillment Platform",
    description:
      "A supply chain fulfillment subject matter expert, with over 15 years of experience in product, design and planning",
    image : {src : Niteshkumar}
  },
];

export function CompanySection() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center gap-10 justify-center">
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-900 md:text-4xl lg:text-7xl ">
          {"We Enable Ecommerce".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 "
        >
          From first click to final delivery, we power every step of your online selling journey with intelligent
          automation
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            aria-label="Explore current openings"
            className="mt-1 inline-flex items-center justify-center rounded-lg bg-linear-to-r from-slate-700 to-slate-900 capitalize px-6 py-3 text-sm md:text-base lg:text-lg font-semibold text-white "
          >
            Book A Demo
          </button>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <img
              src={productDashBoard}
              alt="Landing page preview"
              className="h-auto w-full object-cover"
              height={1000}
              width={1000}
            />
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col gap-2 items-start max-w-7xl ">
        <div className="mx-auto max-w-7xl w-full  text-2xl font-bold text-slate-900 md:text-3xl lg:text-5xl p-5">
          Rooted in Hope, Built for Your <span className="text-[#38b6ff]">Success</span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="p-5 text-xl font-normal"
        >
          We're driven by one mission; our customers success. Guided by Honesty, Ownership, Perseverance, Excellence,
          and Empathy.we build solutions that help you win.
        </motion.p>
        <div className="mx-auto">
          <Qualities />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="w-full  font-bold leading-tight tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 mt-10"
        >
          Built by a <span className="inline-block text-[#38b6ff]">Team</span>{" "}
          <span className="block sm:inline">Who's Been There</span>
        </motion.h2>

        {/* <OverlappingScrollSlider slides={slides}/> */}
        <HoverEffect items={projects} />
      </div>
      <div className="max-w-7xl w-full">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-7xl w-full text-2xl font-bold text-slate-900 md:text-3xl lg:text-5xl p-5"
        >
          {"Powering the AI Revolution in E-Commerce Together".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.06, ease: "easeInOut" }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
        <div className="mx-auto w-full max-w-4xl flex flex-col items-center gap-4 mt-12 py-8 px-6 bg-linear-to-r rounded-2xl border-neutral-200 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 dark:border-neutral-700">
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-200 text-center capitalize">
            Join the crew changing the game
          </p>

          <button
            aria-label="Explore current openings"
            className="mt-1 inline-flex items-center justify-center rounded-lg bg-linear-to-r bg-[#38b6ff] capitalize px-6 py-3 text-sm md:text-base lg:text-lg font-semibold text-white "
          >
            Explore current openings
          </button>
        </div>
        <div className="mx-auto max-w-5xl ">
          <TalkToExpert />
        </div>
      </div>
    </div>
  );
}
