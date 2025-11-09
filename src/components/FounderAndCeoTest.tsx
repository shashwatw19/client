
import sarvarth from "../assets/sarvarta.webp";
import vineet from "../assets/vineet.webp";
import piyush from "../assets/Piyush.png";
import surbhiSinha from "../assets/SurbhiSinha.png";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

export type Founder = {
  id: string;
  name: string;
  designation?: string;
  quote?: string;
  src?: string; // optional image url
};
const Founders = [
  {
    id : "1",
    quote: `The future of commerce isn't going to be built on fragmented tools, manual ops, or endless dashboards.It's Going To Be built on intelligence-intelligence that's native, not stitched on!`,
    name: "Sarvartha Kanchan",
    designation: "FOUNDER & CEO",
    src: sarvarth,
  },
  {
    id : "2",
    quote:
      "naicos is the engine of agentic commerce - empowering brands to sell, scale, and self-optimize across every digital channel with native AI.It's not just software - it's a self-evolving commerce brain!",
    name: "Vineet Agarwal",
    designation: "co-FOUNDER & CTO",
    src: vineet,
  },

  {
    id : "3",
    quote: `We ARE ON A Mission To empower the next million sellers in a multichannel commerce landscape with one AI-powered platform that provides autonomy, enhances decisions, and DELIVERs PROFITABLE growth.`,
    name: "Piyush Vaish",
    designation: "co-FOUNDER & COO",
    src: piyush,
  },
  {
    id : "4",
    quote: `Technology transforms lives when it's built with empathy and a clear understanding of the end-user needs.naicos profoundly embodies this philosophy.We are building for everyone - from large retailers to small-town sellers.`,
    name: "Surbhi Sinha",
    designation: "Co-Founder & CAO",
    src: surbhiSinha,
  },
];


export const FoundersGrid: React.FC<{ founders?: Founder[]; className?: string }> = ({
  founders = Founders,
  className,
}) => {
  return (
    <section className={`w-full max-w-7xl mx-auto px-4 py-10 ${className ?? ""}`} aria-label="Our Founders - Grid">
      <h3 className="text-2xl md:text-3xl font-extrabold mb-6">Our Founders</h3>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.06 }}
      >
        {founders.map((f) => (
          <motion.article
            key={f.id}
            className="group relative rounded-2xl overflow-hidden bg-gray-50 shadow-sm border border-gray-100"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Image area (placeholder if no image) */}
            <div
              className="w-full h-56 sm:h-44 md:h-48 lg:h-40 bg-center bg-cover"
              style={{
                backgroundImage: f.src
                  ? `url(${f.src})`
                  : `linear-gradient(135deg,#eef2ff 0%, #fef3ff 100%)`,
              }}
            />

            {/* Name bar */}
            <div className="px-4 py-3">
              <div className="text-lg font-semibold text-gray-900">{f.name}</div>
            </div>

            {/* Overlay revealed on hover */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-300 rounded-2xl"
                aria-hidden
              />
              <div className="relative px-4 py-6 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-center max-w-xs text-white">
                {f.designation && <div className="font-medium mb-2">{f.designation}</div>}
                {f.quote && <p className="text-sm leading-relaxed">{f.quote}</p>}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export const FoundersCarousel: React.FC<{ founders?: Founder[]; className?: string }> = ({
  founders = Founders,
  className,
}) => {
  const scroller = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scroller.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.75);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className={`w-full max-w-6xl mx-auto px-4 py-10 ${className ?? ""}`} aria-label="Our Founders - Carousel">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-extrabold">Meet the Founders</h3>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Previous founders"
            className="p-2 rounded-md bg-white border shadow-sm hover:shadow-md"
          >
            ◀
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Next founders"
            className="p-2 rounded-md bg-white border shadow-sm hover:shadow-md"
          >
            ▶
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-2"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {founders.map((f, idx) => (
          <motion.article
            key={f.id}
            className="snap-start flex-shrink-0 w-[84%] sm:w-[48%] md:w-[40%] lg:w-[32%] bg-white rounded-2xl border border-gray-100 shadow-sm"
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(16,24,40,0.12)" }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            <div className="flex items-stretch">
              <div className="w-1/3 bg-gray-100 rounded-l-2xl flex items-center justify-center">
                {/* placeholder square image */}
                <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-pink-50 flex items-center justify-center">
                  <span className="text-sm text-gray-500">{f.name.split(" ")[0]}</span>
                </div>
              </div>

              <div className="w-2/3 p-4 flex flex-col justify-between">
                <div>
                  <div className="text-base font-semibold text-gray-900">{f.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{f.designation}</div>
                </div>

                <motion.p
                  className="mt-3 text-sm text-gray-600"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06 }}
                >
                  {f.quote}
                </motion.p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};


export const FoundersStack: React.FC<{ founders?: Founder[]; className?: string }> = ({
  founders = Founders,
  className,
}) => {
  const [open, setOpen] = useState<string | null>(founders[0]?.id ?? null);

  return (
    <section className={`w-full max-w-4xl mx-auto px-4 py-10 ${className ?? ""}`} aria-label="Our Founders - Stack">
      <h3 className="text-2xl font-extrabold mb-6">Founders & Leadership</h3>

      <div className="space-y-4">
        {founders.map((f) => {
          const isOpen = open === f.id;
          return (
            <article key={f.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
              <div className="flex items-center gap-4 p-4">
                <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center text-sm text-gray-600">
                  {f.name.split(" ")[0]}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{f.name}</div>
                      <div className="text-sm text-gray-500">{f.designation}</div>
                    </div>

                    <button
                      onClick={() => setOpen(isOpen ? null : f.id)}
                      aria-expanded={isOpen}
                      className="text-sm text-indigo-600 px-3 py-2 rounded hover:bg-indigo-50"
                    >
                      {isOpen ? "Hide" : "Read Quote"}
                    </button>
                  </div>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.36, ease: "easeInOut" }}
                    className="px-4 pb-4"
                  >
                    <div className="text-sm text-gray-700 leading-relaxed">{f.quote}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
};



