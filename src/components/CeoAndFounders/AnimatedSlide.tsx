

import type { ReactNode } from "react"
import { motion, type MotionValue, useTransform } from "framer-motion"

interface AnimatedSlideProps {
  slide: ReactNode
  index: number
  totalSlides: number
  scrollYProgress: MotionValue<number>
}

export function AnimatedSlide({ slide, index, totalSlides, scrollYProgress }: AnimatedSlideProps) {
  const slideStart = index / totalSlides
  const slideEnd = (index + 1) / totalSlides

  const x = useTransform(scrollYProgress, [slideStart, slideEnd], ["100%", "0%"])

  return (
    <motion.div style={{ x }} className="absolute inset-0 w-full h-full">
      {slide}
    </motion.div>
  )
}
