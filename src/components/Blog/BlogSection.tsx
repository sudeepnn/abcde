import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Revolutionizing Chip Design with ABCDE",
    date: "March 27, 2025",
    description: "Discover how ABCDE is empowering engineers and enthusiasts to design electronic chips effortlessly.",
    image: "/images/product-front.png",
  },
  {
    id: 2,
    title: "The Future of Open-Source Electronic Chips",
    date: "March 20, 2025",
    description: "Open-source chip design is gaining momentum. How does ABCDE fit into this innovation?",
    image: "/images/product-front.png",
  },
  {
    id: 3,
    title: "Simplifying Semiconductor Prototyping",
    date: "March 15, 2025",
    description: "ABCDE's mission is to make chip prototyping easier and more accessible for everyone.",
    image: "/images/product-front.png",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
          Latest Insights from ABCDE
        </h2>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              
              <div className="p-6">
                <p className="text-blue-500 text-sm font-semibold">{post.date}</p>
                <h3 className="text-2xl font-semibold text-gray-900 mt-2">{post.title}</h3>
                <p className="text-gray-700 mt-3">{post.description}</p>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="inline-block mt-4 text-blue-500 font-semibold hover:underline"
                >
                  Read More →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
