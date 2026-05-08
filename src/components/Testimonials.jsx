import { motion } from "framer-motion";

function Testimonials() {
  const reviews = [
    {
      name: "Sarah Khan",
      text: "Amazing service! My house looks spotless. Highly recommended.",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "John Smith",
      text: "Very professional team. On time and excellent cleaning quality.",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Ali Ahmed",
      text: "Affordable and reliable service. Will book again for sure!",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-[#111827]"
        >
          What Our Clients Say
        </motion.h2>

        <p className="text-gray-500 mt-2">Real feedback from happy customers</p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#EFF6FF] p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <p className="text-yellow-500 text-lg">{item.rating}</p>

              <p className="text-gray-700 mt-3 italic">"{item.text}"</p>

              <h4 className="mt-4 font-semibold text-[#111827]">
                - {item.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
