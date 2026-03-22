import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { FaGraduationCap } from "react-icons/fa";
import { MapPin, Calendar } from "lucide-react";

const textVariant = (delay) => {
  return {
    hidden: { y: -50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", duration: 1.25, delay: 0.1 } },
  };
};

const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: { x: direction === "left" ? 100 : direction === "right" ? -100 : 0, y: direction === "up" ? 100 : direction === "down" ? -100 : 0, opacity: 0 },
    show: { x: 0, y: 0, opacity: 1, transition: { type: type, delay: delay, duration: duration, ease: "easeOut" } },
  };
};

const EducationCard = ({ degree, branch, location, date, grade, desc, index }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="relative pl-8 md:pl-0">

    {/* Timeline line and dot for mobile, dot for desktop */}
    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-purple-600 border-4 border-[#050816] z-10 flex items-center justify-center top-6 shadow-[0_0_15px_rgba(145,94,255,0.6)]">
      <FaGraduationCap className="text-white text-xl" />
    </div>
    <div className="md:hidden absolute left-0 w-8 h-8 rounded-full bg-purple-600 border-4 border-[#050816] z-10 flex items-center justify-center top-6 shadow-[0_0_15px_rgba(145,94,255,0.6)]">
      <FaGraduationCap className="text-white text-sm" />
    </div>

    {/* Content Card */}
    <div className={`flex flex-col md:flex-row justify-between items-center w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>

      {/* Empty space for alternating layout */}
      <div className="hidden md:block w-5/12"></div>

      <div className="w-full md:w-5/12 mb-8">
        <div className="bg-[#151030] p-6 lg:p-8 rounded-2xl border border-gray-800 shadow-xl hover:shadow-[#915eff]/20 transition-all duration-300">

          <h3 className="text-white font-bold text-[24px] mb-2">{degree}</h3>
          <p className="text-[#915eff] text-[16px] font-semibold mb-4">{branch}</p>

          <div className="flex flex-col gap-2 mb-4 text-[#dfd9ff] text-[14px]">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-gray-400" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-gray-400" />
              <span>{date}</span>
            </div>
            <p className="font-bold text-green-400 mt-1">{grade}</p>
          </div>

          <p className="text-[#dfd9ff] text-[14px] leading-relaxed">
            {desc}
          </p>
        </div>
      </div>

    </div>
  </motion.div>
);

const Education = () => {
  const educations = [
    {
      degree: "Bachelor of Technology",
      branch: "Computer Science and Engineering",
      location: "Lovely Professional University, Phagwara, Punjab",
      date: "Since Aug 2023",
      grade: "CGPA: 7.6",
      desc: "Currently pursuing B.Tech in Computer Science and Engineering with focus on software development, data structures, algorithms, and modern programming technologies."
    },
    {
      degree: "Intermediate (XII)",
      branch: "Science Stream (PCM)",
      location: "KENDRIYA VIDYALAYA, AFS BEGUMPET, Hyderabad, Telangana",
      date: "Completed 2023",
      grade: "Percentage: 72",
      desc: "Completed higher secondary education with a strong foundation in Physics, Chemistry, and Mathematics."
    },
    {
      degree: "Matriculation (X)",
      branch: "General Sciences",
      location: "KENDRIYA VIDYALAYA, AFS BEGUMPET, Hyderabad, Telangana",
      date: "Completed 2021",
      grade: "Percentage: 76",
      desc: "Completed secondary education with distinct performance in Science and Mathematics."
    }
  ];

  return (
    <>
      <motion.div variants={textVariant(0.1)} className="mb-16">

        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Education</h2>
      </motion.div>

      <div className="relative w-full max-w-5xl mx-auto flex flex-col">
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-purple-600 via-indigo-600 to-transparent z-0"></div>

        {educations.map((edu, index) => (
          <EducationCard key={`edu-${index}`} index={index} {...edu} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
