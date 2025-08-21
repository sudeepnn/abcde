import { useRef, useEffect, RefObject } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const CourseEnrollment = () => {
  const courses = [
    {
      title: "Complete Package",
      description: "A full learning experience with a dedicated board and live interactive sessions.",
      features: ["Dedicated Board", "Live Interactive Sessions", "Guided Learning"],
      price: "₹4,999",
      originalPrice: "₹6,999",
      discount: "28% OFF",
      image: "/images/completecourse.jpg",
      enrollLink: "#",
    },
    {
      title: "Already Have a Board",
      description: "Designed for learners who already have a board but need structured live sessions.",
      features: ["Live Interactive Sessions", "Flexible Learning","Personal Assistant Support"],
      price: "₹2,999",
      originalPrice: "₹4,499",
      discount: "33% OFF",
      image: "/images/training.jpg",
      enrollLink: "#",
    },
    {
      title: "Self-Study",
      description: "Perfect for independent learners, includes a board and study materials.",
      features: ["Dedicated Board", "Comprehensive Study Docs", "Personal Assistant Support"],
      price: "₹3,999",
      originalPrice: "₹5,499",
      discount: "27% OFF",
      image: "/images/livesession.jpg",
      enrollLink: "#",
    },
  ];

  const overviewRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
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
          : contactRef;

      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Scroll to the top when no specific section is provided
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Navbar
        overviewRef={overviewRef as RefObject<HTMLDivElement>}
        productRef={productRef as RefObject<HTMLDivElement>}
        solutionRef={solutionRef as RefObject<HTMLDivElement>}
        contactRef={contactRef as RefObject<HTMLDivElement>}
      />
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Choose Your Course
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300"
              >
                <img src={course.image} alt={course.title} className="w-full h-56 object-cover" />
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-semibold text-gray-900">{course.title}</h3>
                  <p className="text-gray-600 mt-3">{course.description}</p>
                  <ul className="mt-4 text-gray-700 text-sm space-y-2">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        ✅ {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center space-x-2">
                    <p className="text-2xl font-bold text-blue-600">{course.price}</p>
                    <p className="text-gray-500 line-through">{course.originalPrice}</p>
                    <span className="text-green-600 font-semibold">{course.discount}</span>
                  </div>
                  <a
                    href={course.enrollLink}
                    className="mt-6 inline-block w-full text-center bg-blue-500 text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CourseEnrollment;
