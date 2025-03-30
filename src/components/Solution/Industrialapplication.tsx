import { Github } from "lucide-react";
import { useRef, useEffect, RefObject } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Industrialapplication = () => {
  const projects = [
    {
      title: "Arduino Weather Station",
      description: "A real-time weather monitoring system using Arduino and sensors.",
      github: "https://github.com/user/arduino-weather-station",
    },
    {
      title: "Raspberry Pi Smart Home",
      description: "An IoT-based smart home automation system using Raspberry Pi.",
      github: "https://github.com/user/raspberrypi-smart-home",
    },
    {
      title: "ESP32 Robot Car",
      description: "An autonomous robot car controlled via Wi-Fi using ESP32.",
      github: "https://github.com/user/esp32-robot-car",
    },
    {
      title: "PCB Design for Power Supply",
      description: "An open-source PCB design for a regulated power supply.",
      github: "https://github.com/user/pcb-power-supply",
    },
  ];

  const overviewRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const parentcompanyRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
      if (location.state?.scrollTo) {
        const sectionRef =
          location.state.scrollTo === "overview"
            ? overviewRef
            : location.state.scrollTo === "product"
            ? productRef
            : location.state.scrollTo === "solution"
            ? solutionRef
            : location.state.scrollTo === "parentcompany"
          ? parentcompanyRef
            : contactRef;
    
        setTimeout(() => {
          sectionRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }, [location]);


  return (
    <>
        <Navbar overviewRef={overviewRef as RefObject<HTMLDivElement>} 
         productRef={productRef as RefObject<HTMLDivElement>}
         solutionRef={solutionRef as RefObject<HTMLDivElement>}
         contactRef={contactRef as RefObject<HTMLDivElement>}
         />
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Industrial Applications
        </h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col sm:flex-row justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 sm:mt-0 bg-black text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-800 transition"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer parentcompanyRef={parentcompanyRef as RefObject<HTMLDivElement>}/>
    </>
  );
};

export default Industrialapplication;
