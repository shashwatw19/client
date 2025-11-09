import React, { useRef } from 'react'
import { useMotionValueEvent, useScroll } from 'motion/react'
import { motion } from 'motion/react'
import { cn } from '../lib/utils'

export const StickyScroll = ({
  contentClassName,
}: {
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const containerRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })
  const content = [
    {
      title: 'Catalog',
      description:
        'All-in-one catalog manager with AI image generation and export-ready catalogs for every platform.',
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="https://lightsteelblue-hyena-752200.hostingersite.com/wp-content/uploads/2025/11/db1-483x1024.webp"
            width={250}
            height={250}
            className="object-contain"
            alt="pricing demo"
          />
        </div>
      ),
    },
    {
      title: 'Pricing',
      description:
        'Competitive price comparison, AI-driven price recommendations, and insights on top-selling products.',
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="https://lightsteelblue-hyena-752200.hostingersite.com/wp-content/uploads/2025/11/db2-483x1024.webp"
            width={250}
            height={250}
            className="object-contain"
            alt="pricing demo"
          />
        </div>
      ),
    },
    {
      title: 'Fulfillment',
      description:
        'Seamless fulfillment integrations, bring-your-own rate cards, and AI assistance for delivery optimization.',
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="https://lightsteelblue-hyena-752200.hostingersite.com/wp-content/uploads/2025/11/db3-483x1024.webp"
            width={250}
            height={250}
            className="object-contain"
            alt="pricing demo"
          />
        </div>
      ),
    },
    {
      title: 'Marketing',
      description:
        'Growth mantra, a simplified crm for customer connect, run custom campaigns, and enable whatsapp order checkout',
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="https://lightsteelblue-hyena-752200.hostingersite.com/wp-content/uploads/2025/11/db4-483x1024.webp"
            width={250}
            height={250}
            className="object-contain"
            alt="pricing demo"
          />
        </div>
      ),
    },
  ]

  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint)
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index
        }
        return acc
      },
      0
    )
    setActiveCard(closestBreakpointIndex)
  })

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <BackgroundBlobVariant2 />
      <div className="flex justify-center px-10 py-20">
        <div className="relative flex w-full max-w-5xl space-x-10 mx-auto">
          <motion.div
            className="relative w-full max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {content.map((item, index) => (
              <div
                key={item.title + index}
                className="min-h-[45vh] flex flex-col justify-center"
              >
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-5xl font-bold text-slate-900 leading-tight"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-xl mt-10 max-w-sm text-slate-700 leading-relaxed"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
          </motion.div>
          <motion.div
            className={cn(
              'sticky top-30 hidden h-[800px] w-100 lg:block ',
              contentClassName
            )}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          >
            <div className="h-full w-full overflow-hidden rounded-md">
              {content[activeCard].content ?? null}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export function BackgroundBlobVariant2() {
  return (
    <>
      <motion.div
        className="absolute top-1 left-4/5 transform -translate-x-1/2 -translate-y-1/2 h-[400px] w-1/2 bg-blue-500 rounded-full filter blur-[120px] opacity-50 z-0"
        initial={{ scale: 0.4 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.1,
          type: 'spring',
          ease: 'easeOut',
          stiffness: 100,
        }}
      />
      <motion.div
        className="absolute top-3/3 left-4/5 transform -translate-x-1/2 -translate-y-1/2 h-[400px] w-1/2 bg-blue-500 rounded-full filter blur-[120px] opacity-50 z-0"
        initial={{ scale: 0.4 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.1,
          type: 'spring',
          ease: 'easeOut',
          stiffness: 100,
        }}
      />
    </>
  )
}
