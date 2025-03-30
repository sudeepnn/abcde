import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  overviewRef: React.RefObject<HTMLDivElement>;
  productRef: React.RefObject<HTMLDivElement>;
  solutionRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({
  overviewRef,
  productRef,
  solutionRef,
  contactRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>, section: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: section } });
    } else {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white bg-opacity-80 backdrop-blur-lg shadow-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-16">
        {/* Left - Logo */}
        <Link to="/" className="flex items-center group">
  <img 
    src="/images/mainlogo.jpg" 
    alt="ABCDE Logo" 
    className="h-10 w-auto group-hover:hidden"
  />
  <img 
    src="/images/mainlogo1.jpg" 
    alt="Hovered ABCDE Logo" 
    className="h-10 w-auto hidden group-hover:block"
  />
</Link>


        {/* Center - Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="cursor-pointer flex items-center gap-2 text-black text-lg font-semibold tracking-wide focus:outline-none"
        >
          <Menu size={24} />
          Menu
        </button>

        {/* Right - Contact Button */}
        <button
          onClick={() => handleScroll(contactRef, "contact")}
          className="cursor-pointer px-4 py-2 border-1 border-black-500 text-black-500 text-md font-semibold rounded-4xl transition duration-300 hover:bg-black hover:text-white"
        >
          Contact
        </button>
      </div>

      {/* Overlay and Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blurred Overlay */}
            <motion.div
              className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-10 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              onClick={() => setIsOpen(false)}
            ></motion.div>

            {/* Navbar Dropdown */}
            <motion.div
              className="fixed top-0 left-0 w-full min-h-[40vh] sm:min-h-[50vh] md:min-h-fit bg-white text-black shadow-lg z-50 flex flex-col items-center py-8 px-4"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer absolute top-5 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-black"
              >
                <X size={28} />
                <span className="text-lg font-medium">Close</span>
              </button>

              {/* Menu Items */}
              <div className="mt-16 text-3xl font-bold tracking-wider flex flex-col sm:flex-row sm:gap-10 gap-6 text-center">
                <button onClick={() => handleScroll(overviewRef, "overview")} className="cursor-pointer hover:opacity-80 transition">
                  HOME
                </button>
                <button onClick={() => handleScroll(productRef, "product")} className="cursor-pointer hover:opacity-80 transition">
                  PRODUCT
                </button>
                <button onClick={() => handleScroll(solutionRef, "solution")} className="cursor-pointer hover:opacity-80 transition">
                  SOLUTION
                </button>
                <Link to="/documentation" className="hover:opacity-80 transition">
                  DOCUMENTATION
                </Link>
                <button onClick={() => handleScroll(contactRef, "contact")} className="cursor-pointer hover:opacity-80 transition">
                  CONTACT
                </button>
              </div>

              {/* Social Icons */}
              <div className="flex flex-col items-center gap-4 mt-6">
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-black transition">
                    <i className="fab fa-facebook text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-black transition">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-black transition">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-black transition">
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                </div>

                {/* Footer Links */}
                <div className="text-sm flex flex-wrap justify-center gap-4 mt-4">
                  <p className="hover:underline cursor-pointer">PRIVACY POLICY</p>
                  <p className="hover:underline cursor-pointer">TERMS & CONDITIONS</p>
                  <a href="mailto:aiml.abcde@gmail.com" className="hover:underline cursor-pointer flex items-center gap-2">
                    ✉️ EMAIL
                  </a>
                  <p className="hover:underline cursor-pointer flex items-center gap-2">
                    📞 PHONE
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
