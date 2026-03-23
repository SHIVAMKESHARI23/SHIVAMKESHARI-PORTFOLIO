import { motion } from "framer-motion";
import { FaCode, FaRocket, FaDownload } from "react-icons/fa";

import meImg from "../assets/me.png";

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen mx-auto flex items-center justify-center pt-28 pb-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 w-full relative z-10">

        <div className="flex flex-col items-start flex-1 w-full relative">

          <h1 className="text-white font-black text-[38px] min-[400px]:text-[45px] sm:text-[55px] md:text-[65px] lg:text-[75px] leading-[1.1] mb-2 drop-shadow-2xl">
            Hi, I'm <br className="hidden lg:block" />
            <span className="text-[#8b5cf6] drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              Shivam Keshari
            </span>
          </h1>

          <h2 className="text-[#a78bfa] font-bold text-[22px] sm:text-[28px] lg:text-[34px] mb-6 tracking-wide drop-shadow-md">
            Software Engineer
          </h2>

          <p className="text-[#dfd9ff] font-medium text-[15px] sm:text-[16px] lg:text-[18px] leading-[28px] max-w-2xl mb-8">
            Passionate Full Stack Developer with expertise in modern web technologies. I specialize in creating scalable, high-performance applications using React, Node.js, and cloud technologies. With a keen eye for design and user experience, I transform complex business requirements into elegant, efficient solutions that drive growth and innovation.
          </p>

          {/* Buttons row */}
          <div className="flex flex-wrap gap-4 mb-10 w-full">
            <button onClick={() => document.getElementById('contact').scrollIntoView()} className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-7 py-3 rounded-lg font-bold transition-colors shadow-lg shadow-purple-500/20">
              Get In Touch
            </button>
            <a href="/shivam.pdf" download className="flex items-center gap-2 border-2 border-[#8b5cf6] text-[#dfd9ff] hover:bg-[#8b5cf6] hover:text-white px-7 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-purple-500/30">
              <FaDownload /> Download CV
            </a>
          </div>

        </div>

        {/* User Photo Placeholder */}
        <div className="flex-1 flex justify-center lg:justify-end items-center mt-6 lg:mt-0 w-full">
          <div className="relative w-[250px] h-[250px] min-[400px]:w-[280px] min-[400px]:h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] rounded-full p-2 bg-gradient-to-tr from-[#8b5cf6] to-[#f43f5e] shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full rounded-full bg-[#100d25] flex justify-center items-center overflow-hidden border-[6px] border-[#100d25]">
              <img src={meImg} alt="Profile" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;
