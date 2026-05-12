import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Hero() {
  const whatsappLink =
    "https://wa.me/923137332085?text=Hi%20I%20need%20Capital%20Cleaning%20and%20Maintenance%20services";

  const slides = [
    {
      title: "Professional Home Cleaning",
      highlight: "Services",
      desc: "Reliable and affordable home cleaning services with trained staff and same-day availability.",
      image: "/house-cleaning-a-final.jpg",
    },
    {
      title: "Office & Commercial",
      highlight: "Cleaning",
      desc: "Keep your workspace fresh, hygienic, and productive with our expert commercial cleaning solutions.",
      image: "/office-cleaning-a-final.jpg",
    },
    {
      title: "Maintenance &",
      highlight: "Deep Cleaning",
      desc: "Professional AC maintenance and deep cleaning services for homes and businesses.",
      image: "/maintenance.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slider);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#EFF6FF] via-white to-[#DBEAFE] min-h-screen flex items-center">
      {/* BACKGROUND BLUR */}
      <div className="absolute top-[-120px] left-[-100px] w-[350px] h-[350px] bg-blue-300/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-indigo-300/30 rounded-full blur-3xl"></div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center relative z-10">
        {/* IMAGE FIRST ON MOBILE */}
        <div className="relative flex justify-center order-1 md:order-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.85, rotate: 5 }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-lg"
            >
              {/* GLOW */}
              <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full scale-110"></div>

              {/* CARD */}
              <div className="relative bg-white p-3 md:p-4 rounded-[25px] md:rounded-[35px] shadow-2xl border border-blue-100">
                <img
                  src={`${import.meta.env.BASE_URL}images/${slides[current].image}`}
                  alt="Cleaning Service"
                  className="rounded-[20px] md:rounded-[25px] w-full h-[320px] sm:h-[400px] md:h-[500px] object-cover"
                />

                {/* FLOATING BOX */}
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute -bottom-5 left-4 md:left-6 bg-white shadow-2xl px-4 md:px-6 py-3 md:py-4 rounded-2xl border border-blue-100"
                >
                  <p className="text-[#2563EB] font-bold text-base md:text-lg">
                    ⭐ Trusted Professionals
                  </p>

                  <p className="text-gray-500 text-xs md:text-sm mt-1">
                    Fast • Reliable • Affordable
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* TEXT CONTENT */}
        <div className="order-2 md:order-1 text-center md:text-left">
          {/* BRAND */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#2563EB] font-semibold uppercase tracking-[3px] mb-4 text-sm md:text-base"
          >
            Capital Cleaning & Maintenance
          </motion.p>

          {/* TEXT SLIDER */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-[#111827]">
                {slides[current].title}{" "}
                <span className="text-[#2563EB]">
                  {slides[current].highlight}
                </span>
              </h1>

              <p className="mt-5 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
                {slides[current].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* FEATURES */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mt-8"
          >
            <div className="bg-white shadow-lg px-4 md:px-5 py-2 md:py-3 rounded-2xl border border-blue-100 text-sm md:text-base">
              ✔ Skilled Staff
            </div>

            <div className="bg-white shadow-lg px-4 md:px-5 py-2 md:py-3 rounded-2xl border border-blue-100 text-sm md:text-base">
              ✔ Same Day Service
            </div>

            <div className="bg-white shadow-lg px-4 md:px-5 py-2 md:py-3 rounded-2xl border border-blue-100 text-sm md:text-base">
              ✔ Affordable Prices
            </div>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 mt-10"
          >
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2563EB] hover:bg-blue-700 text-white px-6 md:px-7 py-3 md:py-4 rounded-2xl font-semibold shadow-xl transition text-sm md:text-base"
            >
              Get Free Quote
            </motion.a>

            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#2563EB] text-[#2563EB] px-6 md:px-7 py-3 md:py-4 rounded-2xl font-semibold hover:bg-[#2563EB] hover:text-white transition text-sm md:text-base"
            >
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* DOTS */}
          <div className="flex justify-center md:justify-start gap-3 mt-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  current === index ? "w-10 bg-[#2563EB]" : "w-3 bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
