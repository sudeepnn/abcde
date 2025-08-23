import { useState } from "react";
import {   Link } from "react-router-dom";



const Footer: React.FC = ({  }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter an email");
      return;
    }

    setLoading(true); // Show loading indicator

    try {
      const response = await fetch("https://api.abcde.help/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setEmail(""); // Clear input field
      } else {
        setMessage(data.error || "Something went wrong");
      }
    } catch (error) {
      setMessage("Network error, please try again.");
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  return (
    <>
    <footer className="bg-white text-gray-900 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Column 1: Brand & About */}
        <div>
          <Link to="/" className="flex items-center ">
            <img
              src="/images/mainlogo.png"
              alt="ABCDE Logo"
              className="w-40 mb-4 "
            />
            
          </Link>
          <p className="text-gray-600 text-sm">
            ABCDE is an open-source electronics platform that empowers
            everyone to innovate, design, and build electronic solutions effortlessly.
          </p>

          {/* Email Contacts */}
          <div className="mt-4 space-y-2">
            <a href="mailto:aiml.abcde@gmail.com" className="text-gray-600 text-sm hover:underline flex items-center gap-2">
              ✉️ aiml.abcde@gmail.com
            </a>
        
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Explore</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/open-source-projects" className="text-gray-600 hover:text-black transition">
                Open Source Project
              </Link>
            </li>
            <li>
              <Link to="/industrial-application" className="text-gray-600 hover:text-black transition">
                Industrial Application
              </Link>
            </li>
            <li>
              <Link to="/community" className="text-gray-600 hover:text-black transition">
                Community
              </Link>
            </li>
            <li>
              <Link to="/documentation" className="text-gray-600 hover:text-black transition">
                Documentation
              </Link>
            </li>
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
          <p className="text-gray-600 text-sm mb-4">
            Get the latest updates and insights directly to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-l-md focus:outline-none"
              disabled={loading} // Disable input while loading
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition flex items-center"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                  ></path>
                </svg>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
          {message && <p className="mt-2 text-sm text-red-600">{message}</p>}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-600 text-sm">
        <p>© 2025 ABCDE. All rights reserved.</p>
      </div>
    </footer>
    


    </>
    
  );
};

export default Footer;
