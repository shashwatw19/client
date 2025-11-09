// ...existing code...
import { motion } from "framer-motion";
import {  type JSX } from "react";








export  function FeatureHeroSection(){
  return (
    <div className="w-full flex justify-center py-10 px-4">
      {/* outer white rounded frame */}
      <div className="w-full max-w-6xl bg-white rounded-[38px] p-8 md:p-12">
        {/* inner black card */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.9, 0.2, 1] }}
          whileHover={{ scale: 1.006 }}
          className="w-full bg-black text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-stretch gap-6"
        >
          {/* left area: large title + CTA */}
          <div className="md:w-2/3 w-full flex flex-col justify-start md:justify-center gap-8">
            <div
              className="font-bold leading-[0.86] tracking-tight text-white uppercase"
              style={{
              // reduced size for a less overpowering hero
              fontSize: "clamp(1.6rem, 5.5vw, 4rem)",
              lineHeight: 0.86,
              letterSpacing: "-0.02em",
              WebkitFontSmoothing: "antialiased",
              }}
            >
              
              INDIA'S FIRST
              <br />
              HOME GROWN <br/> PIM
            </div>

            <div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center bg-white text-black font-semibold rounded-full px-8 py-3 shadow-md hover:shadow-lg transition"
                aria-label="Get started"
              >
                GET STARTED
              </motion.button>
            </div>
          </div>

          {/* right area: descriptive text bottom-right */}
          <div className="md:w-1/3 w-full flex flex-col justify-end items-end gap-3">
           
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.5 }}
              className="text-right max-w-xs md:max-w-88"
            >
              <p className="text-sm md:text-base text-white/90 font-semibold">
                India's first Product Information Management
              </p>
              <p className="mt-2 text-sm md:text-base text-white/80 capitalize">
                system built to power e-commerce growth worldwide.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}



type FeatureSectionCardWhiteProps = {
  title: string
  description: string;
  ctaLabel: string;
  onCta?: () => void;
};

const container = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export function FeatureSectionCardWhite({
  title = "",
  description = "",
  ctaLabel = "",
  onCta,
}: FeatureSectionCardWhiteProps): JSX.Element {
  return (
    <section className="w-full flex justify-center px-4 py-8">
      <div className="w-full max-w-7xl bg-white rounded-[36px] p-6 md:p-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
        >
          {/* LEFT: logos + media + short description */}
          <motion.div variants={item} className="flex flex-col justify-around items-start gap-6">
            <video
              src="/assets/hero-demo.mp4"
              controls
              preload="metadata"
              className="w-full max-w-sm md:max-w-[350px] rounded-lg "
              style={{ height: "auto", maxHeight: 520, aspectRatio: "16/9" }}
              aria-label="Product demo video"
            />
            <p className="text-zinc-700 text-lg md:text-xl font-semibold max-w-xl capitalize">
              {description}
            </p>
          </motion.div>

          {/* RIGHT: huge headline + CTA */}
          <motion.div variants={item} className="flex flex-col justify-between items-end">
            <div className="w-full flex justify-end">
              <div
                className="text-black font-extrabold leading-[0.85] tracking-tight text-right whitespace-pre-line uppercase"
                style={{
                  fontSize: "clamp(2.2rem, 6.5vw, 5.8rem)",
                  lineHeight: 0.85,
                  letterSpacing: "-0.02em",
                  fontFamily: "inherit",
                }}
              >
               {title}
              </div>
            </div>

            <div className="w-full flex justify-end mt-6">
              <button
                onClick={onCta}
                className="bg-black text-white rounded-full px-8 py-3 text-base font-semibold shadow hover:brightness-95 transition transform active:scale-[0.99]"
                aria-label={ctaLabel}
              >
                {ctaLabel}
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}




type SmartImageryHeroProps = {
  title: string;
  description: string;
  ctaLabel: string;
  videoSrc?: string;

};


export function FeatureSectionCardBlack({
  title = "",
  description = "",
  ctaLabel = "",
  videoSrc,
}: SmartImageryHeroProps): JSX.Element {
  return (
    <div className={"w-full flex justify-center py-8 px-4"}>
      {/* outer white frame */}
      <div className="w-full max-w-7xl bg-white rounded-[36px] p-6 md:p-10">
        {/* inner black card - use grid for stable three-column layout */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full bg-black text-white rounded-2xl p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch overflow-hidden"
        >
          {/* LEFT: title + CTA (center vertically) */}
          <div className="md:col-span-1 flex flex-col justify-center gap-6">
            <h1
              className="font-extrabold leading-[0.78] tracking-tight uppercase"
              style={{
                fontSize: "clamp(2.2rem, 6.5vw, 5.8rem)",
                lineHeight: 0.78,
                letterSpacing: "-0.02em",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              {title.split("\n").map((l, i) => (
                <span key={i} className="block">
                  {l}
                </span>
              ))}
            </h1>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-[40%] items-center justify-center bg-white text-black font-bold rounded-full px-8 py-3 "
              aria-label={ctaLabel}
            >
              {ctaLabel}
            </motion.button>
          </div>

         

          {/* RIGHT: subtitle - keep bottom/right alignment and stable space */}
          <div className="md:col-span-1 flex flex-col justify-center items-end">
             <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06, duration: 0.45 }}
              className="w-full flex  justify-end"
            >
              <div className="w-full max-w-[280px] md:max-w-[350px] rounded-lg overflow-hidden shadow-md bg-neutral-800">
                <video
                  src={videoSrc}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto block object-cover"
                  style={{ aspectRatio: "16/9", maxHeight: 520 }}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.48 }}
              className="text-right max-w-xs md:max-w-[20rem]"
            >
              <p className="text-lg md:text-xl text-white/90 font-semibold max-w-xl capitalize">{description}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
