import { RefObject, useEffect, useRef, useState } from "react";

import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "react-modal";
// import { X } from "lucide-react";
import {  useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

interface Blog {
  videoUrl: string;
  _id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

Modal.setAppElement("#root");

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  };
  const [loading, setLoading] = useState(true);
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
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    axios
      .get("https://abcdeserver.onrender.com/api/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Error fetching blogs:", err))
      .finally(()=>setLoading(false))
      
  }, []);

  const handleReadMore = async (id: string) => {
    try {
      const res = await axios.get(`https://abcdeserver.onrender.com/api/blogs/${id}`);
      setSelectedBlog(res.data);
      setModalIsOpen(true);
    } catch (error) {
      console.error("Error fetching full blog:", error);
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB");
  };

  return (

    <>
    
    <Navbar
        overviewRef={overviewRef as RefObject<HTMLDivElement>}
        productRef={productRef as RefObject<HTMLDivElement>}
        solutionRef={solutionRef as RefObject<HTMLDivElement>}
        contactRef={contactRef as RefObject<HTMLDivElement>}
      />
    
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
          Latest Blog Posts
        </h2>
        {loading ? (
            <p className="text-center text-gray-500">Loading Blogs...</p>
          ) : (
        <div className="flex flex-col gap-12">
          {blogs.map((post) => (
            <motion.div
              key={post._id}
              className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.01 }}
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full md:w-1/3 h-64 object-cover"
              />
              <div className="p-6 flex flex-col justify-between md:w-2/3">
                <div>
                  <p className="text-blue-500 text-sm font-semibold">
                    {formatDate(post.date)}
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-900 mt-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 mt-3 line-clamp-3">
                    {post.description}
                  </p>
                </div>
                <motion.button
                  onClick={() => handleReadMore(post._id)}
                  whileHover={{ scale: 1.05 }}
                  className="mt-4 text-blue-500 font-semibold hover:underline self-start"
                >
                  Read More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
          )
        }
        
      </div>

      {/* Modal for Full Blog View */}
      <AnimatePresence>
  {modalIsOpen && (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Blog Modal"
      className="w-full md:w-[90%] lg:w-[60%] max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-xl p-6 relative mx-auto mt-15 outline-none"
      // overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      ariaHideApp={false}
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {selectedBlog && (
          <>
            <div className="mt-2">
              {selectedBlog.imageUrl && (
                <img
                  src={selectedBlog.imageUrl}
                  alt={selectedBlog.title}
                  className="w-full h-64 object-cover rounded mb-4"
                />
              )}

              <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedBlog.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{formatDate(selectedBlog.date)}</p>

              {selectedBlog.videoUrl && (
                <video
                  controls
                  className="w-full h-auto rounded mb-4"
                  src={selectedBlog.videoUrl}
                >
                  Your browser does not support the video tag.
                </video>
              )}

              <p className="text-gray-800 whitespace-pre-wrap leading-relaxed mb-6">
                {selectedBlog.description}
              </p>

              {/* Close button at bottom */}
              <div className="flex justify-end">
                <button
                  onClick={() => setModalIsOpen(false)}
                  className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </Modal>
  )}
</AnimatePresence>
    </section>
    <Footer parentcompanyRef={parentcompanyRef as RefObject<HTMLDivElement>} />
    </>
  );
};

export default BlogList;
