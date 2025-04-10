import { useEffect, useState } from "react";

import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "react-modal";
// import { X } from "lucide-react";
import { Link } from "react-router-dom";

interface Blog {
  videoUrl: string;
  _id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

Modal.setAppElement("#root");

const BlogSection = () => {
  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  };
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://abcdeserver.onrender.com/api/blogs/latest")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => console.error("Error fetching blogs:", err));
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
          Latest Insights from ABCDE
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
  {blogs.map((post) => (
    <motion.div
      key={post._id}
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-sm w-full sm:w-[300px]"
      whileHover={{ scale: 1.03 }}
    >
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />

      <div className="p-6">
        <p className="text-blue-500 text-sm font-semibold">{formatDate(post.date)}</p>
        <h3 className="text-2xl font-semibold text-gray-900 mt-2">{post.title}</h3>
        <p className="text-gray-700 mt-3 line-clamp-2">{post.description}</p>

        <motion.button
          onClick={() => handleReadMore(post._id)}
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-4 text-blue-500 font-semibold hover:underline"
        >
          Read More →
        </motion.button>
      </div>
    </motion.div>
  ))}
</div>

        <div className="py-3 mt-4 flex items-center justify-center">
        <Link to="/blogs">
          <button className="cursor-pointer px-5 py-2 border border-black rounded-lg font-semibold transition-colors duration-300 hover:bg-black hover:text-white">
            Explore more
          </button>
          </Link>
        </div>
      </div>

      {/* Modern full-width modal */}
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
  );
};

export default BlogSection;
