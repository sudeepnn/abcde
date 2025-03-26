import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-black overflow-hidden">
      {/* Center ABCDE Text */}
      <motion.h1
        className="absolute text-5xl font-bold text-white"
        initial={{ opacity: 0.5, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        ABCDE
      </motion.h1>

      {/* Falling Meteors */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-6 bg-blue-500 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth - window.innerWidth / 2,
            y: -100,
            opacity: 0.8,
          }}
          animate={{
            y: [Math.random() * 100, window.innerHeight],
            opacity: [1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            delay: Math.random(),
          }}
        />
      ))}
    </div>
  );
};

export default Preloader;
