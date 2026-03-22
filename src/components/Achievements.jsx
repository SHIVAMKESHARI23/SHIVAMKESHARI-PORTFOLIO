import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";

const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    y: direction === "up" ? 50 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

const Achievements = () => {
  const achievements = [
    {
      tag: "🏆 1st Position",
      title: "Academic Excellence",
      description: "1st Position in Programming Quiz",
    },
    {
      tag: "🏅 Top 10",
      title: "Hackathon Participant",
      description: "Secured a Top 10 position among 50 teams in Hackathon.",
    },
  ];

  return (
    <>
      {/* 🔥 Heading */}
      <div className="text-center">
        <h2 className="text-white font-extrabold text-[40px] md:text-[50px]">
          Achievements
        </h2>

        {/* Gradient underline */}
        <div className="w-24 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-[#915eff] to-pink-500"></div>
      </div>

      {/* 🔥 Cards */}
      <div className="mt-12 flex flex-col gap-8">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.3, 0.75)}
            className="w-full"
          >
            <Tilt options={{ max: 15, scale: 1.02, speed: 300 }}>
              <div className="relative bg-[#0f0b1f]/80 backdrop-blur-lg border border-[#915eff]/20 rounded-3xl p-6 overflow-hidden hover:shadow-[0_0_30px_#915eff30] transition-all duration-300">

                {/* 🏆 Background Trophy */}
                <div className="absolute right-5 top-10 text-[120px] opacity-5 select-none">
                  🏆
                </div>

                {/* Tag */}
                <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[#4facfe] to-[#915eff] text-white text-sm font-semibold mb-4">
                  {item.tag}
                </div>

                {/* Title */}
                <h3 className="text-white text-[22px] font-bold mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#aaa6c3] text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");