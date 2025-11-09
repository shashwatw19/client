"use client"

import { type ReactNode, useRef } from "react"
import { useScroll } from "framer-motion"
import { AnimatedSlide } from "./AnimatedSlide"


interface OverlappingScrollSliderProps {
  slides: ReactNode[]
}

export function OverlappingScrollSlider({ slides }: OverlappingScrollSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const totalSlides = slides.length
  const containerHeight = totalSlides * 100

  return (
    <div ref={containerRef} className="relative w-full max-w-7xl mx-auto" style={{ height: `${containerHeight}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <AnimatedSlide
            key={index}
            slide={slide}
            index={index}
            totalSlides={totalSlides}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  )
}
