import sarvarth from "../../assets/sarvarta.webp";
import vineet from "../../assets/vineet.webp";
import piyush from "../../assets/Piyush.png";
import surbhiSinha from "../../assets/SurbhiSinha.png";
const testimonials = [
  {
    quote: `The future of commerce isn't going to be built on fragmented tools, manual ops, or endless dashboards.It's Going To Be built on intelligence-intelligence that's native, not stitched on!`,
    name: "Sarvartha Kanchan",
    designation: "FOUNDER & CEO",
    src: sarvarth,
  },
  {
    quote:
      "naicos is the engine of agentic commerce - empowering brands to sell, scale, and self-optimize across every digital channel with native AI.It's not just software - it's a self-evolving commerce brain!",
    name: "Vineet Agarwal",
    designation: "co-FOUNDER & CTO",
    src: vineet,
  },

  {
    quote: `We Are On A Mission To empower the next million sellers in a multichannel commerce landscape with one AI-powered platform that provides autonomy, enhances decisions, and DELIVERs PROFITABLE growth.`,
    name: "Piyush Vaish",
    designation: "co-FOUNDER & COO",
    src: piyush,
  },
  {
    quote: `Technology transforms lives when it's built with empathy and a clear understanding of the end-user needs.naicos profoundly embodies this philosophy.We are building for everyone - from large retailers to small-town sellers.`,
    name: "Surbhi Sinha",
    designation: "Co-Founder & CAO",
    src: surbhiSinha,
  },
];
export function SlideTwo() {
  return (
    <div className="flex items-center justify-between w-full h-full bg-white px-12 gap-12">
      {/* <AnimatedTestimonials testimonials={testimonials} autoplay={false}/> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="group relative rounded-xl overflow-hidden "
            tabIndex={0}
            role="button"
            aria-label={`Testimonial from ${t.name}`}
          >
            {/* image / placeholder */}
            <div className="w-full h-64 sm:h-56 md:h-64 lg:h-56">
              <img src={t.src} alt={t.name} className="w-full h-full object-cover block" />
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 flex flex-col items-center py-2 text-sm text-gray-800 shadow-sm opacity-100 group-hover:opacity-0 transition-opacity duration-250">
                <div className="font-medium text-lg">{t.name}</div>
                {t.designation && <div className="text-sm text-gray-600 uppercase">{t.designation}</div>}
            </div>
            {/* overlay: blurred/darkened layer, transitions on hover/focus */}
            <div
              className="pointer-events-none absolute inset-0 bg-black/0 backdrop-blur-0 transition-all duration-300 ease-out group-hover:bg-black/40 group-hover:backdrop-blur-sm group-focus:bg-black/40 group-focus:backdrop-blur-sm"
              aria-hidden
            />

            {/* content that appears on hover/focus */}
            <div className="absolute inset-0 flex items-center justify-center px-4 py-6">
              <div className="pointer-events-none w-full max-w-sm mx-auto">
              <div
                className="  rounded-md px-2 py-2 opacity-0 translate-y-2 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0"
                aria-hidden
              >
                <p className="text-center text-gray-50 text-sm leading-relaxed capitalize">
                “{t.quote}”
                </p>
              </div>
              </div>
            </div>

            {/* subtle bottom info band for non-hover state (optional) */}
            <div className="absolute left-4 right-4 bottom-4">
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const EmptySlide = ()=>{
  return <></>
}