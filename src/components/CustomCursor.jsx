import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16, // center the 32x32px circle
      y: mousePosition.y - 16,
    },
  };

  return (
    <motion.div
      variants={variants}
      animate="default"
      transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999]"
      style={{
        background: "rgba(145, 94, 255, 0.5)",
        boxShadow: "0 0 20px 10px rgba(145, 94, 255, 0.4)",
        filter: "blur(2px)",
      }}
    />
  );
};

export default CustomCursor;
