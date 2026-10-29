import React from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaStar } from "react-icons/fa";

function Testimonials() {
  const reviews = [
    {
      name: "Sarah Khan",
      text: "Amazing service! My house looks spotless. Highly recommended.",
      date: "2 weeks ago",
      rating: 5,
    },
    {
      name: "John Smith",
      text: "Very professional team. On time and excellent cleaning quality.",
      date: "1 month ago",
      rating: 5,
    },
    {
      name: "Ali Ahmed",
      text: "Affordable and reliable service. Will book again for sure!",
      date: "3 months ago",
      rating: 5,
    },
  ];

  // Helper to render stars
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* TITLE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center gap-3 mb-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Clients Say
            </h2>
          </div>
          <div className="flex justify-center items-center gap-2 mt-3">
            <span className="text-gray-700 font-medium">Excellent</span>
            <div className="flex text-lg">{renderStars(5)}</div>
            <span className="text-gray-500 text-sm">
              Based on Google Reviews
            </span>
          </div>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition duration-300 text-left flex flex-col h-full"
            >
              {/* Card Header: User Info & Google Icon */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  {/* User Avatar Placeholder */}
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">{item.date}</p>
                  </div>
                </div>
                <FaGoogle className="text-blue-500 text-xl" />
              </div>

              {/* Stars */}
              <div className="flex mb-3 text-sm">
                {renderStars(item.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                "{item.text}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA (Optional Link to actual Google Reviews) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <a
            href="https://www.google.com/search?kgmid=%2Fg%2F11njr4nbkh&hl=en-PK&q=Capital%20Cleaning%20%26%20Maintenance%20Services&shem=epsd1%2Cesd2e%2Cltae%2Crimspwouoe%2Csdpie&shndl=30&source=sh%2Fx%2Floc%2Fosrp%2Fm5%2F1&kgs=1771ff6de7af2727" // Add your actual Google Maps review link here
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 font-semibold px-6 py-2.5 rounded-full hover:bg-blue-100 transition"
          >
            <FaGoogle /> Read all reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
