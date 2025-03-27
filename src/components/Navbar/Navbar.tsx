import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";


interface NavbarProps {
  overviewRef: React.RefObject<HTMLDivElement>;
  productRef: React.RefObject<HTMLDivElement>;
  solutionRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({ overviewRef, productRef, solutionRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
const location = useLocation();
  const handleScroll = (ref: React.RefObject<HTMLDivElement>,section: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: section } });
    } else {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close menu after clicking (for mobile view)
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            ABCDe Chip
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <button onClick={() => handleScroll(overviewRef, "overview")} className="hover:scale-110 transition-all duration-300 text-black">
              Overview
            </button>
            <button onClick={() => handleScroll(productRef, "product")} className="hover:scale-110 transition-all duration-300 text-black">
              Products
            </button>
            <button onClick={() => handleScroll(solutionRef, "solution")} className="hover:scale-110 transition-all duration-300 text-black">
              Solution
            </button>
            <Link to="/documentation" className="hover:scale-110 transition-all duration-300 text-black">
              Documentation
            </Link>
            <button onClick={() => handleScroll(contactRef, "contact")} className="hover:scale-110 transition-all duration-300 text-black">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-transparent backdrop-blur-md shadow-lg absolute w-full left-0 top-16 p-4">
          <button onClick={() => handleScroll(overviewRef, "overview")} className="block py-3 px-6 text-black hover:bg-gray-700 rounded">
            Overview
          </button>
          <button onClick={() => handleScroll(productRef, "product")} className="block py-3 px-6 text-black hover:bg-gray-700 rounded">
            Products
          </button>
          <button onClick={() => handleScroll(solutionRef, "solution")} className="block py-3 px-6 text-black hover:bg-gray-700 rounded">
            Solution
          </button>
          <Link to="/documentation" className="block py-3 px-6 text-black hover:bg-gray-700 rounded">
            Documentation
          </Link>
          <button onClick={() => handleScroll(contactRef, "contact")} className="block py-3 px-6 text-black hover:bg-gray-700 rounded">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
