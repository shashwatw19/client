import { motion, type Variants } from 'motion/react'
import homeScreen from "../assets/home_new.jpeg"

const Features = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-around gap-6 md:gap-12 px-4 py-8 my-15"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.img
        src={homeScreen}
        width={280}
        height={280}
        alt="feature"
        variants={imageVariants}
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ type: 'spring', stiffness: 300 }}
      />

      <motion.div
        className="w-full md:w-1/2 flex flex-col gap-4 items-start md:items-start"
        variants={containerVariants}
      >
        <motion.h5
          className="text-sm md:text-xl uppercase tracking-wider font-bold text-[#38b6ff]"
          variants={itemVariants}
        >
          Native AI commerce operating system
        </motion.h5>

        <motion.h3
          className="text-xl md:text-4xl l font-bold leading-tight text-foreground text-black"
          variants={itemVariants}
        >
          Most AI tools just assist
        </motion.h3>

        <motion.h2
          className="text-2xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground"
          variants={itemVariants}
        >
          Agentic AI goes a step further - IT ACTS!
        </motion.h2>

        <motion.p
          className="text-sm md:text-base text-muted-foreground max-w-prose"
          variants={itemVariants}
        >
          With Agentic AI, Naicos makes catalogs intelligent, pricing smarter,
          fulfilment seamless, and growth automatic.
        </motion.p>

        <motion.div className="mt-4 text-left" variants={itemVariants}>
          <motion.button
            className="font-semibold px-6 py-3 text-md text-white rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md bg-[#38b6ff]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Book a Demo
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Features
