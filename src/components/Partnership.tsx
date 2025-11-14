import productImg from '../assets/product.webp'
import { cn } from '../lib/utils'
import partner1 from '../assets/partner1.avif'
import partner2 from '../assets/partner2.jpeg'
import partner3 from '../assets/partner3.jpeg'
import partner4 from '../assets/partner4.jpeg'
import partner5 from "../assets/partner5.jpeg"
import partner6 from "../assets/partner6.jpeg"
import partner7 from "../assets/parnter7.jpeg"
import partner8 from "../assets/partner8.jpeg"
import partner9 from "../assets/partner9.jpeg"
import partner10 from "../assets/partner10.jpeg"
import partner11 from '../assets/partner11.jpeg'
import parnter12 from "../assets/partner12.jpeg"
import partner13 from "../assets/partner13.jpeg"

import { useState , useEffect ,useRef} from 'react'

const Partnership = () => {
  return (
    <div className="relative  w-full flex flex-col items-center justify-center overflow-hidden">
      <PartneredWith />
      <TalkToExpert />
     
    </div>
  )
}

export const TalkToExpert = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(node) // animate once; remove this line to animate every time
          }
        })
      },
      { threshold: 0.25 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`flex items-center gap-10 p-10 rounded-xl z-50 my-20 bg-[#38b6ff] backdrop-blur-3xl relative transform transition-transform will-change-transform mt-20 mb-10 ${
        inView ? "talk-in" : "opacity-0 translate-y-6 scale-[0.995]"
      }`}
    >
      <div className="w-65">
        <img src={productImg} className="max-w-60 w-full" />
      </div>
      <div>
        <h2 className="text-4xl max-w-sm font-bold ">
          Discover How Naicos Can Simplify and Scale Your Operations
        </h2>
      </div>
      <div>
        <button className="px-4 py-2 bg-white text-[#38b6ff] rounded-md text-lg  transition-all font-semibold active:scale-105 hover:scale-105 duration-100 ">
          Talk to an Expert
        </button>
      </div>

    </div>
  )
}
export const PartneredWith = () => {
  const images = [partner1, partner2, partner3, partner4 , 
    partner5,partner6,partner7,partner8,partner9,partner10,partner11,parnter12,partner13 , 
    partner1, partner2, partner3, partner4 , 
    partner5,partner6,partner7,partner8,partner9,partner10,partner11,parnter12,partner13]
  const duplicated = [...images, ...images]

  return (
    <div className="flex flex-col items-center justify-center p-2 bg-white ">
      <h1 className="text-zinc-800 text-3xl font-bold my-10 capitalize">
        Working with leading brand and retailers
      </h1>

      <div className="w-full md:w-6xl  overflow-hidden relative marquee-wrap">
        <div className="marquee flex items-center gap-6">
          <style>
          {`
          .marquee-wrap {
            overflow: hidden;
            position: relative;
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
            mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          }
          .marquee {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            will-change: transform;
            animation: marqueeAnim 24s linear infinite;
          }
          .marquee:hover {
            animation-play-state: paused;
          }
          .marquee__item {
            max-height: 5rem;
            margin: 0 0.5rem;
            object-fit: contain;
            flex-shrink: 0;
            opacity: 0.95;
            transition: opacity 300ms ease;
          }
          .marquee__item:hover {
            opacity: 1;
          }
          @keyframes marqueeAnim {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          `}
          </style>

          {duplicated.map((img, index) => (
            <img
              key={index}
              src={img}
              className="marquee__item"
              alt={`partner-${index}`}
            />
          ))}
        </div>
      </div>

      
   
    </div>
  )
}





interface Logo {
  name: string;
  src: string;
}

const logos: Logo[] = [
  { name: "TechCorp", src: partner1},
  { name: "DataFlow", src: partner2},
  { name: "CloudSync", src: partner3},
  { name: "DevTools", src: partner4},
  { name: "AppNest", src:  partner5},
  { name: "CodeBase", src:  partner6},
  { name: "NetWorks", src:  partner7},
  { name: "ByteLab", src:  partner8},
  { name: "ByteLab", src:  partner9},
  { name: "ByteLab", src:  partner10},
  { name: "ByteLab", src:  partner11},
  { name: "ByteLab", src:  parnter12},
  { name: "ByteLab", src:  partner13},
];

export const InfiniteLogoScroll = () => {
  return (
    <section className="w-full py-16 bg-muted/30">
      <div className="container mx-auto px-4">
      
        
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
          
          {/* Scrolling container */}
          <div className="flex w-fit animate-scroll hover:[animation-play-state:paused]">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className={cn(
                  "flex items-center justify-center mx-8 shrink-0",
                  "transition-all duration-300 hover:scale-110"
                )}
              >
                <div className="flex items-center gap-3 px-6 py-4 rounded-lg bg-card border border-border shadow-sm">
                  <img className='' src={logo.src}/>
                 
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className={cn(
                  "flex items-center justify-center mx-8 shrink-0",
                  "transition-all duration-300 hover:scale-110"
                )}
              >
                <div className="flex items-center gap-3 px-6 py-4 rounded-lg bg-card border border-border shadow-sm">
                  <img className="text-4xl" src={logo.src}/>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-center mt-8 text-sm text-muted-foreground">
          Hover to pause • Seamless infinite scroll
        </p>
      </div>
    </section>
  );
};

export default Partnership
