import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";

// ✅ Fixed imports
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaCode, FaServer, FaBootstrap, FaPhp, FaGitAlt, FaNetworkWired } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiMysql } from "react-icons/si";

// ================= Animations =================
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
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// ================= Skill Card =================
const SkillCard = ({ name, icon: Icon, hex, percentage, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className="w-full max-w-[280px] sm:w-[280px]"
  >
    <div className="bg-[#1e2133]/80 backdrop-blur-sm border border-[#30364d] rounded-2xl p-6 flex flex-col items-center justify-center min-h-[160px] shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300">

      {/* Icon */}
      <div className="text-4xl mb-4" style={{ color: hex }}>
        <Icon />
      </div>

      {/* Skill Name */}
      <h3 className="text-white text-[16px] font-bold text-center mb-6">
        {name}
      </h3>

      {/* Progress Bar */}
      <div className="w-full flex items-center gap-3">
        <div className="flex-1 bg-[#2b3042] h-2 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: percentage }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-full rounded-full"
            style={{ backgroundColor: hex }}
          />
        </div>
        <span className="text-[12px] font-bold" style={{ color: hex }}>
          {percentage}
        </span>
      </div>
    </div>
  </motion.div>
);

// ================= Main Component =================
const Skills = () => {
  const skillsList = [
    { name: "React", icon: FaReact, hex: "#61DAFB", percentage: "90%" },
    { name: "Node.js", icon: FaNodeJs, hex: "#68A063", percentage: "85%" },
    { name: "JavaScript", icon: SiJavascript, hex: "#F7DF1E", percentage: "95%" },
    { name: "HTML5", icon: FaHtml5, hex: "#E34F26", percentage: "95%" },
    { name: "CSS3", icon: FaCss3Alt, hex: "#1572B6", percentage: "90%" },
    { name: "Tailwind CSS", icon: SiTailwindcss, hex: "#38B2AC", percentage: "85%" },
    { name: "Bootstrap", icon: FaBootstrap, hex: "#7952B3", percentage: "85%" },

    { name: "MongoDB", icon: SiMongodb, hex: "#47A248", percentage: "80%" },
    { name: "MySQL", icon: SiMysql, hex: "#00758F", percentage: "80%" },

    { name: "Express.js", icon: FaServer, hex: "#ffffff", percentage: "85%" },

    { name: "PHP", icon: FaPhp, hex: "#777BB4", percentage: "75%" },

    { name: "Python", icon: FaPython, hex: "#3776AB", percentage: "75%" },
    { name: "C++", icon: FaCode, hex: "#00599C", percentage: "85%" },

    { name: "Git", icon: FaGitAlt, hex: "#F1502F", percentage: "85%" },
    { name: "REST API", icon: FaNetworkWired, hex: "#00C853", percentage: "80%" },
  ];

  return (
    <>
      {/* Heading */}
      <motion.div variants={textVariant(0.1)}>

        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Skills & Tech
        </h2>
      </motion.div>

      {/* Skills Grid */}
      <div className="mt-14 flex flex-wrap gap-7 justify-center sm:justify-start">
        {skillsList.map((skill, index) => (
          <SkillCard key={skill.name} index={index} {...skill} />
        ))}
      </div>
    </>
  );
};

// ================= Export =================
export default SectionWrapper(Skills, "skills");