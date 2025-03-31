import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsExiting(true), 2000); // Preloader waits for 2 seconds
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center  bg-white z-50"
      animate={isExiting ? { y: "-100vh" } : { borderRadius: "0 0 10% 10%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Logo */}
      <motion.img
        src="/images/mainlogo.jpg" // Replace with the correct path to your logo
        alt="Logo"
        className="m-3 h-20 mb-4"
        initial={{ scale: 1, opacity: 1 }}
        animate={isExiting ? { scale: 0.5, opacity: 0 } : { scale: 1.2 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* ABCDE Text */}
      {/* <motion.h1
        className="text-5xl font-bold text-black my-2"
        initial={{ opacity: 1, scale: 1 }}
        animate={isExiting ? { scale: 1 } : { scale: 2 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        ABCDE
      </motion.h1> */}

      {/* Tagline */}
      <motion.p
        className="mt-2 text-lg text-gray-600 font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={isExiting ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      >
        Any Body Can Design Electronics
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
