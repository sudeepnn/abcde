import { useEffect, useState, useRef, RefObject } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Overview from "../overview/Overview";
import Solution from "../Solution/Solution";
import Footer from "../Footer/Footer";
import { User, Zap, Code2 } from "lucide-react";
import FlipCard from "./Productfilp";
import BlogSection from "../Blog/BlogSection";
import { Link, useLocation } from "react-router-dom";



const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["ABCDE©", "Any Buddy Can Design Electronics"];
  const overviewRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionRef =
        location.state.scrollTo === "overview"
          ? overviewRef
          : location.state.scrollTo === "product"
            ? productRef
            : location.state.scrollTo === "solution"
              ? solutionRef
                : contactRef;

      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <>
      {/* Navbar with overviewRef for smooth scrolling */}
      <Navbar overviewRef={overviewRef as RefObject<HTMLDivElement>}
        productRef={productRef as RefObject<HTMLDivElement>}
        solutionRef={solutionRef as RefObject<HTMLDivElement>}
        contactRef={contactRef as RefObject<HTMLDivElement>}
      />

      {/* Hero Section with Video Background */}
      <div ref={overviewRef}>
      <div className="relative w-full h-screen overflow-hidden" >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          autoPlay
          loop
          muted
          playsInline
          src="/GREEN.mp4"
        />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <AnimatePresence mode="wait">
            <motion.h1
              key={texts[textIndex]}
              className="text-5xl font-bold relative inline-block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              {texts[textIndex] === "ABCDE©" ? (
                <>
                  ABCD
                  <span className="relative inline-block">
                    E
                    <span className="absolute top-[-0.2rem] right-[-1rem] text-xl">©</span>
                  </span>
                </>
              ) : (
                texts[textIndex]
              )}
            </motion.h1>
          </AnimatePresence>

          <p className="mt-4 text-lg font-[200]">
            Empowering Everyone to Design in Electronics
          </p>
          <button
            onClick={() => solutionRef.current?.scrollIntoView({ behavior: "smooth" })}
            className="cursor-pointer my-2 px-6 py-2 border-1 text-black-500 text-md font-semibold rounded-4xl transition duration-300 hover:bg-white hover:text-black"
          >
            Explore
          </button>
        </div>
      </div>
      </div>

      {/* Overview Section */}
      
        <Overview />
      

      {/* Flip Card - Centered and Styled */}
      <div className="flex justify-center py-10" ref={productRef}>
        <FlipCard
          frontImage="/images/product-front.png"
          backImage="/images/product-back.png"
          name="ABCDE Chip"
          description="A powerful and user-friendly open-source chip designed for seamless integration. 
          Experience high performance, flexibility, and efficiency in one small package. Built for makers, 
          engineers, and hobbyists, ABCDE revolutionizes electronic design."
          maker="TechMakers Inc."
        />
      </div>




      {/* Why Choose ABCDE Section */}
      <section className="bg-white py-16 text-center">
        <h3 className="text-3xl font-bold mb-8 poppins-regular text-gray-900">
          Why Choose ABCDE?
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
          {/* Card 1 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
              Easy to Use
            </span>
            <User className="w-12 h-12 text-blue-500 mb-3 mx-auto" />
            <h4 className="text-xl font-bold mb-2 text-gray-900">User-Friendly</h4>
            <p className="text-gray-700">
              Designed for all levels, ABCDE is easy to use with simple plug-and-play functionality.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <span className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
              High Speed
            </span>
            <Zap className="w-12 h-12 text-green-500 mb-3 mx-auto" />
            <h4 className="text-xl font-bold mb-2 text-gray-900">High Performance</h4>
            <p className="text-gray-700">
              Delivers fast processing and efficient power management for seamless projects.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <span className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
              Open Source
            </span>
            <Code2 className="w-12 h-12 text-purple-500 mb-3 mx-auto" />
            <h4 className="text-xl font-bold mb-2 text-gray-900">Open for All</h4>
            <p className="text-gray-700">
              A fully open-source chip, allowing customization and flexibility for any application.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <div ref={solutionRef}>

        <Solution />
      </div>

      {/* Blog Section */}
      <BlogSection />

{/* {community} */}
      

    <div className="relative bg-white py-20 overflow-hidden text-center">
      {/* Faded Background Text */}
      <h1 className="absolute inset-0 text-[25vw] sm:text-[20vw] md:text-[18vw] lg:text-[16vw] font-extrabold text-gray-200 opacity-20 flex justify-center items-center select-none pointer-events-none">
  ABCDE
</h1>

      {/* Foreground Content */}
      <h2 className="text-2xl font-semibold mb-2">Have a Question?</h2>
      <p className="text-gray-600 mb-4">Join the community and get answers from Admins.</p>
      <Link to="/community">
      <button
        
        className="cursor-pointer px-5 py-2 border border-black rounded-lg font-semibold transition-colors duration-300 hover:bg-black hover:text-white"
      >
        Ask a Question
      </button></Link>
    </div>

      {/* Footer */}
      <Footer
      />
    </>
  );
};

export default Home;
