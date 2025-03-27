import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ProductSectionProps {
  frontImage: string;
  backImage: string;
  name: string;
  description: string;
  maker: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ frontImage, backImage, name, description, maker }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileFlipped, setIsMobileFlipped] = useState(false);

  // Auto flip every 2 minutes on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth <= 768) {
        setIsMobileFlipped((prev) => !prev);
      }
    },2000); // 2 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Product</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Product Image with Flip Animation */}
          <div className="relative w-full flex justify-center">
            <div
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setIsHovered(true)} // Flip on hover
              onMouseLeave={() => setIsHovered(false)} // Reset flip on mouse leave
            >
              <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: isHovered || isMobileFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Image */}
                <motion.img
                  src={frontImage}
                  alt={name}
                  className="absolute w-full h-full object-cover rounded-2xl"
                  style={{ backfaceVisibility: "hidden" }}
                />

                {/* Back Image */}
                <motion.img
                  src={backImage}
                  alt={`${name} Back`}
                  className="absolute w-full h-full object-cover rounded-2xl"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Right: Product Details */}
          <div>
            {/* Maker Tag */}
            <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md mb-4 inline-block">
              {maker}
            </span>

            {/* Product Name & Description */}
            <h2 className="text-3xl font-semibold text-gray-900">{name}</h2>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed text-justify">{description}</p>

            {/* Buy Now Button */}
            <motion.button
  whileHover={{ }}
  whileTap={{ scale: 0.95 }}
  className="mt-6 px-6 py-2 border-2 border-blue-500 text-blue-500 text-lg font-semibold rounded-4xl shadow-md bg-white transition duration-300 hover:bg-blue-500 hover:text-white"
>
  Buy Now
</motion.button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
