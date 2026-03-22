import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";

// ICONS
import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaCode,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

// ANIMATIONS
const variants = {
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay: 0.1 },
  },
};

const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x:
        direction === "left"
          ? 100
          : direction === "right"
            ? -100
            : 0,
      y:
        direction === "up"
          ? 100
          : direction === "down"
            ? -100
            : 0,
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

// PROJECT CARD
const ProjectCard = ({
  index,
  name,
  description,
  details,
  tags,
  source_code_link,
  live_link,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="h-full"
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-[#151030] p-5 rounded-2xl sm:w-[360px] w-full border border-gray-800 shadow-2xl hover:shadow-[#915eff]/20 transition-all duration-300 h-full flex flex-col justify-between"
      >
        <div>
          {/* TOP BOX */}
          <div className="relative w-full h-[200px]">
            {image ? (
              <img
                src={image}
                alt={`${name} project`}
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-600 via-[#151030] to-indigo-900 rounded-2xl flex justify-center items-center shadow-inner">
                <span className="text-white/40 text-2xl font-black text-center px-4">
                  {name}
                </span>
              </div>
            )}

            {/* BUTTONS */}
            <div className="absolute inset-0 flex justify-end m-3 gap-2">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-black/60 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-[#915eff] transition-colors"
              >
                <span className="text-white text-xs font-bold">Repo</span>
              </div>

              <div
                onClick={() => window.open(live_link, "_blank")}
                className="bg-black/60 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-pink-500 transition-colors"
              >
                <span className="text-white text-xs font-bold">Live</span>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px] line-clamp-1">
              {name}
            </h3>

            <p className="mt-2 text-[#dfd9ff] text-[14px] leading-relaxed mb-3 line-clamp-3">
              {description}
            </p>

            <ul className="list-disc list-inside text-[#dfd9ff] text-[13px] space-y-1 mb-4">
              {details.map((detail, idx) => (
                <li key={idx} className="line-clamp-2">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* TAGS */}
        <div className="mt-5 flex flex-wrap gap-[8px]">
          {tags.map((tag, i) => (
            <div
              key={i}
              className="flex items-center gap-[6px] px-[10px] py-[5px] rounded-full border"
              style={{
                borderColor: `${tag.color}4D`,
                backgroundColor: `${tag.color}1A`,
              }}
            >
              <span
                className="text-[14px]"
                style={{ color: tag.color }}
              >
                {tag.icon}
              </span>
              <span
                className="text-[12px] font-medium tracking-wider"
                style={{ color: tag.color }}
              >
                {tag.name}
              </span>
            </div>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// MAIN COMPONENT
const Projects = () => {
  const projects = [
    {
      name: "WanderLust",
      image: "./WanderLust/image.png",
      description:
        "A full-stack hotel discovery web app using the MERN stack.",
      details: [
        "Search hotels by location",
        "Add and view reviews",
        "User authentication & authorization",
      ],
      tags: [
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
      ],
      source_code_link: "https://github.com/SHIVAMKESHARI23/Wander_LUST",
      live_link: "https://wander-lust-qrw2.onrender.com/listings",
    },
    {
      name: "Startups Ecosystem Tracker",
      image: "./startupecosystem/image.png",
      description:
        "A PHP & MySQL-based platform to manage and explore startup data.",
      details: [
        "Browse startups by category",
        "Dynamic UI with JavaScript",
        "Hosted on InfinityFree",
      ],
      tags: [
        { name: "PHP", icon: <FaCode />, color: "#777BB4" },
        { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
      ],
      source_code_link: "https://github.com/SHIVAMKESHARI23/Startups-Ecosystem-Tracker-",
      live_link: "https://startupecosystemtracker.infinityfreeapp.com/?i=2",
    },
    {
      name: "Quiz Builder",
      image: "./Quiz-Builder/page1.png",
      description:
        "A MERN stack app for creating and attempting quizzes.",
      details: [
        "Create quizzes",
        "Real-time results",
        "User authentication",
      ],
      tags: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
        { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      ],
      source_code_link: "https://github.com/SHIVAMKESHARI23/Quiz-builder",
      live_link: "https://quiz-builder-cfeaq6j7v-shivam-kesharis-projects.vercel.app",
    },
    {
      name: "Weather Paglu",
      image: "./weatherpaglu/image.png",
      description:
        "A real-time weather app using OpenWeather API with dynamic UI.",
      details: [
        "Shows temperature & humidity",
        "Live weather updates",
        "Responsive UI with Tailwind CSS",
      ],
      tags: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
        { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
      ],
      source_code_link: "https://github.com/SHIVAMKESHARI23/Weather-Paglu",
      live_link: "https://weather-paglu.onrender.com/",
    },
  ];

  return (
    <>
      <motion.div variants={variants}>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[#dfd9ff] text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples of my work.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 items-stretch">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-5">
        <p className="text-[#dfd9ff] text-[16px]">
          Want to see more projects?
        </p>

        <button
          onClick={() =>
            window.open("https://github.com/SHIVAMKESHARI23", "_blank")
          }
          className="flex items-center gap-2 px-6 py-3 border border-[#915eff] rounded-lg text-[#915eff] hover:bg-[#915eff] hover:text-white transition-all duration-300 font-medium"
        >
          <FaGithub size={20} /> View All on GitHub
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");