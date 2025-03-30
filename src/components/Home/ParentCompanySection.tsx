import { useState, useEffect } from "react";

const companyDetails = [
//   {
//     title: "VLSI Design",
//     description: "Providing industry-leading VLSI design solutions for advanced chip development.",
//     image: "/images/processor.png",
//   },
  {
    title: "Embedded Systems",
    description: "Designing cutting-edge embedded solutions for automation and smart devices.",
    image: "/images/embed.png",
  },
  {
    title: "Automation",
    description: "Innovative automation technologies for industrial and home applications.",
    image: "/images/automation.png",
  },
  {
    title: "Robotics",
    description: "Cutting-edge robotics solutions for automation, precision control, and intelligent machine interactions.",
    image: "/images/wireless.png",
  },
];

const ParentCompanySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect screen size to adjust layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % companyDetails.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Parent Company Logo */}
        <img src="/images/simslogo.jpg" alt="Parent Company Logo" className="mx-auto w-40 h-auto mb-6" />

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Our Parent Company</h2>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
          Our parent company, <span className="font-semibold text-gray-800">Silicon Microsystems</span>, has been at the forefront of the electronic industry and electronic technology for the last decades. Specializing in cutting-edge innovations, Silicon Microsystems is committed to excellence, growth, and creating a better future.
        </p>

        {/* Card Slider */}
        <div className="relative max-w-4xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.33)}%)`,
              gap: isMobile ? "0px" : "1rem",
            }}
          >
            {/* Ensure Infinite Loop */}
            {[...companyDetails, ...companyDetails].map((detail, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm text-center border border-gray-300 flex-shrink-0"
                style={{
                  minWidth: isMobile ? "100%" : "32%",
                  marginRight: isMobile ? "0px" : "1rem",
                }}
              >
                <img src={detail.image} alt={detail.title} className="mx-auto w-14 h-14 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{detail.title}</h3>
                <p className="text-gray-600">{detail.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visit Website Button */}
        <div className="mt-10">
          <a
            href="https://www.simsindia.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-6 py-2 text-white text-lg font-semibold rounded-4xl shadow-md bg-orange-500 transition duration-300"
          >
            Visit Silicon Microsystems
          </a>
        </div>
      </div>
    </section>
  );
};

export default ParentCompanySection;
