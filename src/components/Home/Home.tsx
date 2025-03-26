import  { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Overview from "../overview/Overview";
import Solution from "../Solution/Solution";
import Footer from "../Footer/Footer";

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["ABCDE", "Any Body Can Design Electronics"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <div>
      {/* Hero Section with Video Background */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          autoPlay
          loop
          muted
          playsInline
          src="/bgvideo1.mp4"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 "></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <AnimatePresence mode="wait">
            <motion.h1
              key={texts[textIndex]}
              className="text-5xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              {texts[textIndex]}
            </motion.h1>
          </AnimatePresence>

          <p className="mt-4 text-lg font-[200]">
            Empowering Everyone to Design in Electronics
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <section className="bg-white py-16 text-center">
        <h3 className="text-3xl font-bold mb-8 poppins-regular text-gray-900">
          Why Choose ABCDE?
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
          {/* Card 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-2 text-gray-900">User-Friendly</h4>
            <p className="text-gray-700">
              Designed for all levels, ABCDE is easy to use with simple plug-and-play functionality.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-2 text-gray-900">High Performance</h4>
            <p className="text-gray-700">
              Delivers fast processing and efficient power management for seamless projects.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-2 text-gray-900">Open for All</h4>
            <p className="text-gray-700">
              A fully open-source chip, allowing customization and flexibility for any application.
            </p>
          </div>
        </div>
      </section>
    </div>


      {/* Overview Section */}
      <Overview></Overview>
      <Solution></Solution>
      <Footer/>
    </>
  );
};

export default Home;
