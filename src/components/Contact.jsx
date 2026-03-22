import { useState, useRef } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // ✅ UPDATED SUBMIT FUNCTION (Web3Forms API)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY, // 🔑 PUT YOUR KEY HERE
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("❌ Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Network error!");
    }

    setLoading(false);
  };

  const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden pb-10">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#100d25] p-8 rounded-2xl shadow-lg border border-white/10"
      >
        <p className="sm:text-[18px] text-[14px] text-[#dfd9ff] uppercase tracking-wider">
          Get in touch
        </p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Contact
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-[#151030] py-4 px-6 placeholder:text-[#dfd9ff] text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915eff]"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-[#151030] py-4 px-6 placeholder:text-[#dfd9ff] text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915eff]"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-[#151030] py-4 px-6 placeholder:text-[#dfd9ff] text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915eff]"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-[#915eff] hover:bg-[#7e4ee0] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl transition-colors"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex flex-col justify-center items-start lg:pl-10"
      >
        <h3 className="text-white font-bold text-[30px] mb-8">
          Or Reach Out Directly
        </h3>

        <div className="flex flex-col gap-6">
          <a
            href="https://www.linkedin.com/in/shivam-k23/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 text-[#dfd9ff] hover:text-[#915eff] transition-colors text-[18px]"
          >
            <div className="w-12 h-12 rounded-full bg-[#151030] flex items-center justify-center text-2xl">
              <FaLinkedin />
            </div>
            LinkedIn Profile
          </a>

          <a
            href="https://github.com/SHIVAMKESHARI23"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 text-[#dfd9ff] hover:text-[#915eff] transition-colors text-[18px]"
          >
            <div className="w-12 h-12 rounded-full bg-[#151030] flex items-center justify-center text-2xl">
              <FaGithub />
            </div>
            GitHub Profile
          </a>

          <a
            href="https://www.instagram.com/shivamkeshari2006"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 text-[#dfd9ff] hover:text-[#915eff] transition-colors text-[18px]"
          >
            <div className="w-12 h-12 rounded-full bg-[#151030] flex items-center justify-center text-2xl">
              <FaInstagram />
            </div>
            Instagram Profile
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");  