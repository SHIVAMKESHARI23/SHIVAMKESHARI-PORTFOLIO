import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";

const textVariant = (delay) => {
  return {
    hidden: { y: -50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", duration: 1.25, delay: delay },
    },
  };
};

const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { type, delay, duration, ease: "easeOut" },
    },
  };
};

const ExperienceCard = () => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.2, 0.75)}
      className="relative w-full max-w-2xl p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
    >
      {/* Card Content */}
      <div className="bg-[#0f0b2a] rounded-2xl p-8 relative overflow-hidden">

        {/* Glow Circle */}
        <div className="absolute right-6 top-20 w-16 h-16 rounded-full border-2 border-purple-500 opacity-60 blur-sm"></div>

        {/* Title */}
        <h3 className="text-purple-400 text-[24px] font-bold">
          DSA with CPP– Intensive Training 🎓
        </h3>

        {/* Subtitle */}
        <p className="text-gray-400 mt-2 text-[16px]">
          Self-Paced Learning
        </p>

        {/* Stats */}
        <div className="mt-8 flex flex-col gap-6">

          <div>
            <h2 className="text-pink-400 text-[36px] font-extrabold">
              200+
            </h2>
            <p className="text-gray-400 text-[14px]">
              Problems Solved 💼
            </p>
          </div>

          <div>
            <h2 className="text-pink-400 text-[36px] font-extrabold">
              3+
            </h2>
            <p className="text-gray-400 text-[14px]">
              Platforms 🚀
            </p>
          </div>

        </div>

        {/* Description */}
        <p className="text-gray-300 mt-8 leading-[28px] text-[15px]">
          Completed comprehensive Data Structures and Algorithms training focused on CPP implementation.
          Solved 200+ algorithmic problems across LeetCode ,TakeYouForward and GeeksforGeeks platforms,
          mastering arrays, linked lists, trees, graphs, dynamic programming, and advanced problem-solving techniques.
        </p>

      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)} className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5">
        <div>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">About Me</h2>
        </div>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-[#dfd9ff] text-[17px] max-w-3xl leading-[30px]"
      >
        I am a passionate Computer Science student with a strong interest in full-stack web development and problem-solving. I enjoy building scalable applications and continuously improving my skills in modern technologies. My goal is to contribute to impactful projects and grow as a software developer.
      </motion.p>

      <div className="mt-12 flex flex-wrap gap-8">
        <ExperienceCard />
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");