import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

interface NavbarProps {
  parentcompanyRef: React.RefObject<HTMLDivElement>;
  
}
const Footer:React.FC<NavbarProps> = ({parentcompanyRef}) => {

  // const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
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
    // setIsOpen(false);
  };
  return (
    <>
        <footer className="bg-white text-gray-900 py-12 border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
    
    {/* Column 1: Brand & About */}
    <div>
    <Link to="/" className="flex items-center group">
  <img 
    src="/images/mainlogo.jpg" 
    alt="ABCDE Logo" 
    className="w-40 mb-4 group-hover:hidden"
  />
  <img 
    src="/images/mainlogo1.jpg" 
    alt="Hovered ABCDE Logo" 
    className="w-40 mb-4 hidden group-hover:block"
  />
</Link>

  {/* <img src="/images/mainlogo.jpg" alt="ABCDE Logo" className="w-40 mb-4" /> */}
  <p className="text-gray-600 text-sm">
    ABCDE is an open-source electronics platform that empowers everyone to innovate, design, and build electronic solutions effortlessly.
  </p>

  {/* Email Contacts */}
  <div className="mt-4 space-y-2">
    <a href="mailto:aiml.abcde@gmail.com" className="text-gray-600 text-sm hover:underline flex items-center gap-2">
      ✉️ aiml.abcde@gmail.com
    </a>
    <a href="mailto:info@sims-esdm.com" className="text-gray-600 text-sm hover:underline flex items-center gap-2">
      ✉️ info@sims-esdm.com
    </a>
    {/* <a href="mailto:contact@abcde.com" className="text-gray-600 text-sm hover:underline flex items-center gap-2">
      ✉️ contact@abcde.com
    </a> */}
  </div>
</div>


    {/* Column 2: Quick Links */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Explore</h4>
      <ul className="space-y-2">
      
        <li><button onClick={() => handleScroll(parentcompanyRef, "parentcompany")} className="cursor-pointer text-gray-600 hover:text-black transition">
      About Parent company
                </button></li>

                <li><Link to="/open-source-projects" className="text-gray-600 hover:text-black transition">
                Open Source Project
                </Link></li>
                <li><Link to="/industrial-application" className="text-gray-600 hover:text-black transition">
                Industrial Application
                </Link></li>
                <li><Link to="/documentation" className="text-gray-600 hover:text-black transition">
                Community
                </Link></li>
        
        <li><Link to="/documentation" className="text-gray-600 hover:text-black transition">
        Documentation
                </Link></li>
        
      </ul>
    </div>

    {/* Column 3: Social Media */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
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
    </div>

    {/* Column 4: Newsletter Signup */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h4>
      <p className="text-gray-600 text-sm mb-4">Get the latest updates and insights directly to your inbox.</p>
      <form className="flex">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="w-full px-4 py-2 text-black border border-gray-300 rounded-l-md focus:outline-none"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition">
          Subscribe
        </button>
      </form>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-600 text-sm">
    <p>© 2025 ABCDE. All rights reserved.</p>
  </div>
</footer>


    </>
  )
}

export default Footer