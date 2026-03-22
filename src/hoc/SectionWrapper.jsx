import { motion } from "framer-motion";

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren || 0.1,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

const SectionWrapper = (Component, idName) => {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto relative z-0 px-6 sm:px-16 py-10 sm:py-16"
        id={idName}
      >
        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;
