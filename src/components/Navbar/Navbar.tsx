import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // If using React Router

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <Link to="/" className=" hover:text-gray-300 transition-colors duration-300">
              Overview
            </Link>
            <Link to="/products" className=" hover:text-gray-300 transition-colors duration-300">
              Products
            </Link>
            <Link to="/solution" className=" hover:text-gray-300 transition-colors duration-300">
              Solution
            </Link>
            <Link to="/documentation" className=" hover:text-gray-300 transition-colors duration-300">
              Documentation
            </Link>
            <Link to="/contact" className=" hover:text-gray-300 transition-colors duration-300">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md shadow-lg absolute w-full left-0 top-16 p-4">
          <Link to="/" className="block py-3 px-6 text-white hover:bg-gray-700 rounded" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/features" className="block py-3 px-6 text-white hover:bg-gray-700 rounded" onClick={() => setIsOpen(false)}>
            Features
          </Link>
          <Link to="/pricing" className="block py-3 px-6 text-white hover:bg-gray-700 rounded" onClick={() => setIsOpen(false)}>
            Pricing
          </Link>
          <Link to="/contact" className="block py-3 px-6 text-white hover:bg-gray-700 rounded" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
