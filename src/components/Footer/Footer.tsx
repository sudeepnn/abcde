

const Footer = () => {
  return (
    <>
        <footer className="bg-white text-gray-900 py-12 border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
    
    {/* Column 1: Brand & About */}
    <div>
      <img src="/images/logo-dark.png" alt="ABCDE Logo" className="w-40 mb-4" />
      <p className="text-gray-600 text-sm">
        ABCDE is an open-source electronics platform that empowers everyone to innovate, design, and build electronic solutions effortlessly.
      </p>
    </div>

    {/* Column 2: Quick Links */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Explore</h4>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-600 hover:text-black transition">For Professionals</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black transition">For Education</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black transition">For Makers</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black transition">Community</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black transition">Documentation</a></li>
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