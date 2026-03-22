import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { FaExternalLinkAlt } from "react-icons/fa";

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
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
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

const CertificationCard = ({ index, title, description, image, certificate_link }) => {
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
                alt={`${title} certificate`}
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-600 via-[#151030] to-indigo-900 rounded-2xl flex justify-center items-center shadow-inner">
                <span className="text-white/40 text-2xl font-black text-center px-4">
                  {title}
                </span>
              </div>
            )}

          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px] line-clamp-2">
              {title}
            </h3>
            <p className="mt-2 text-[#dfd9ff] text-[14px] leading-relaxed mb-3">
              {description}
            </p>
          </div>
        </div>

        {/* BOTTOM FULL BUTTON */}
        {certificate_link && certificate_link !== "#" && (
          <div className="mt-4">
            <button
              onClick={() => window.open(certificate_link, "_blank")}
              className="w-full py-2 px-4 rounded-lg bg-[#915eff]/10 text-[#915eff] border border-[#915eff]/50 hover:bg-[#915eff] hover:text-white transition-colors duration-300 font-medium text-sm text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              View Certificate <FaExternalLinkAlt size={12} />
            </button>
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const Certifications = () => {
  const certifications = [
    {
      title: "Cloud Computing",
      description: "Studied core cloud concepts such as virtualization, cloud architecture, and service models (IaaS, PaaS, SaaS).",
      image: "./certficates/nptel.png",
      certificate_link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S94750069004251973.pdf"
    },
    {
      title: "Computer Programming",
      description: "Learned core programming concepts including logic building, problem-solving, and coding fundamentals.",
      image: "./certficates/cpp.png",
      certificate_link: "https://lpucolab438.examly.io/certificate/U2FsdGVkX18wn%2B9fQw%2Bll8gAS7xbvaNlkfv%2BsIhq8hg%3D"
    },
    {
      title: "SQL (Intermediate)",
      description: "Learned database querying, joins, indexing, and data manipulation using SQL.",
      image: "./certficates/hackerranksql.png",
      certificate_link: "https://drive.google.com/file/d/13etM5u75aHkDqsBnnlPjCqqBC9evGIDc/view"
    },
    {
      title: "ChatGPT Made Easy: AI Essentials for Beginners",
      description: "Learned fundamentals of AI and ChatGPT, including prompt engineering and practical use cases for productivity.",
      image: "./certficates/chatgpt.png",
      certificate_link: "https://shorturl.at/tHiRi"
    },
    {
      title: "Mastering Generative AI & Generative AI Tools",
      description: "Gained hands-on experience with generative AI tools, building AI-powered solutions and understanding core concepts.",
      image: "./certficates/mastergenerative.png",
      certificate_link: "https://shorturl.at/GmW9Q"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      description: "Learned networking fundamentals including protocols, IP addressing, DNS, and how the internet works.",
      image: "./certficates/bitsandbites.png",
      certificate_link: "https://tinyurl.com/46f9shwx"
    },
    {
      title: "Fundamentals of Network Communication",
      description: "Covered essential networking concepts including data transmission, protocols, and communication models.",
      image: "./certficates/fundamental.png",
      certificate_link: "https://shorturl.at/ESp4T"
    },
    {
      title: "Build Generative AI Apps and Solutions with No-Code Tools",
      description: "Built AI applications using no-code platforms, focusing on automation and real-world AI integrations.",
      image: "./certficates/buildgenrative.png",
      certificate_link: "https://www.udemy.com/certificate/UC-5f8dcdac-531b-4d7b-9500-0008d0f830fa/"
    },
    {
      title: "Problem Solving (Intermediate)",
      description: "Strengthened problem-solving skills using algorithms, data structures, and efficient coding techniques.",
      image: "./certficates/hackerrankproblem.png",
      certificate_link: "https://drive.google.com/file/d/1XIctKN4hU3t-P7dvS6_PGjsjJFLi38I_/view"
    },
    {
      title: "Peer-to-Peer Protocols and Local Area Networks",
      description: "Explored LAN technologies and peer-to-peer communication models used in modern networking systems.",
      image: "./certficates/peertopeer.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/verify/PZMRGQGPE3LP"
    },
    {
      title: "Mastering Data Structures and Algorithms",
      description: "Learned advanced DSA concepts including trees, graphs, dynamic programming, and optimization techniques.",
      image: "./certficates/masteringdsa.png",
      certificate_link: "https://drive.google.com/file/d/1eTG0YdZ9BTIwdq_30uR42YJpI3h1X2pD/view?usp=sharing"
    },
    {
      title: "Java Programming",
      description: "Developed strong foundation in Java, covering OOP concepts, syntax, and application development.",
      image: "./certficates/javanecolab.png",
      certificate_link: "https://lpucolab438.examly.io/certificate/U2FsdGVkX18szb1kbNbc7gHVcfZ4BaStUa4wimiK930%3D"
    },
  ];

  return (
    <>
      <motion.div variants={variants}>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Certifications
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[#dfd9ff] text-[17px] max-w-3xl leading-[30px]"
        >
          A collection of my recent certifications that reflect my dedication to continuous learning.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 items-stretch">
        {certifications.map((item, index) => (
          <CertificationCard key={`certification-${index}`} index={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
