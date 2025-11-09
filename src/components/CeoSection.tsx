import { motion, type Variants } from "framer-motion";

const CeoSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="mx-auto max-w-6xl flex flex-col gap-10 px-4 py-8 mt-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="text-4xl md:text-6xl font-bold p-2" variants={containerVariants}>
        <motion.p variants={textVariants}>Lived the chaos.</motion.p>
        <motion.p variants={textVariants}>Solved the gaps.</motion.p>
        <motion.p variants={textVariants}>Built naicos.</motion.p>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row gap-6 justify-between max-w-6xl mx-auto p-4 md:p-6 rounded-2xl border border-gray-200 shadow-sm bg-white/80 backdrop-blur-sm"
        variants={cardVariants}
        whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.img
          src="https://lightsteelblue-hyena-752200.hostingersite.com/wp-content/uploads/2025/11/sarvarta.jpg"
          width={250}
          height={250}
          alt="Sarvartha Kanchan"
          className="rounded-xl object-cover w-full md:w-64 h-64 md:h-auto"
          variants={imageVariants}
        />

        <motion.div
          className="flex-1 flex flex-col justify-center gap-3 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-semibold text-slate-900"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Sarvartha Kanchan
          </motion.h3>

          <motion.span
            className="text-sm md:text-base text-slate-500 font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Founder & CEO
          </motion.span>

          <motion.p
            className="mt-2 text-base md:text-lg text-slate-700 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            The future of commerce isn't going to be built on fragmented tools, manual ops, or endless dashboards. It's
            Going To Be built on intelligence - intelligence that's native, not stitched on!
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CeoSection;
