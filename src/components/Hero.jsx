import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Hero() {
  const whatsappLink =
    "https://wa.me/923137332085?text=Hi%20I%20need%20Capital%20Cleaning%20and%20Maintenance%20services";

  // ✅ FIXED IMAGE PATHS (PUBLIC FOLDER)
  const slides = [
    {
      title: "Professional Sofa Cleaning in",
      highlight: "Islamabad",
      desc: "Expert sofa cleaning services in Islamabad & Rawalpindi with deep stain removal and fast service.",
      image: "/images/house-cleaning-a-final.jpg",
    },
    {
      title: "Office Cleaning Services in",
      highlight: "Rawalpindi",
      desc: "Keep your office clean, hygienic and productive with our professional cleaning staff.",
      image: "/images/office-cleaning-a-final.jpg",
    },
    {
      title: "Deep Cleaning & Maintenance in",
      highlight: "Pakistan",
      desc: "Complete home deep cleaning, AC maintenance and hygiene services at affordable prices.",
      image: "/images/maintenance.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#EFF6FF] via-white to-[#DBEAFE] min-h-screen flex items-center"
      aria-label="Cleaning Services Islamabad Rawalpindi Hero Section"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-[-120px] left-[-100px] w-[350px] h-[350px] bg-blue-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-indigo-300/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center relative z-10">
        {/* IMAGE */}
        <div className="relative flex justify-center order-1 md:order-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-lg"
            >
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl border border-blue-100">
                <img
                  src={slides[current].image}
                  alt={`${slides[current].title} ${slides[current].highlight} cleaning service`}
                  className="rounded-2xl w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* TEXT */}
        <div className="order-2 md:order-1 text-center md:text-left">
          {/* SEO H1 */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#111827] leading-tight">
            Best Cleaning Services in{" "}
            <span className="text-[#2563EB]">Islamabad & Rawalpindi</span>
          </h1>

          <p className="mt-5 text-gray-600 text-lg max-w-xl">
            Capital Cleaning & Maintenance offers sofa cleaning, carpet
            cleaning, deep cleaning, and office cleaning services in Islamabad &
            Rawalpindi.
          </p>

          {/* SLIDES TITLE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.5 }}
              className="mt-6"
            >
              <h2 className="text-xl md:text-2xl font-bold">
                {slides[current].title}{" "}
                <span className="text-[#2563EB]">
                  {slides[current].highlight}
                </span>
              </h2>

              <p className="text-gray-600 mt-2">{slides[current].desc}</p>
            </motion.div>
          </AnimatePresence>

          {/* LOCAL SEO KEYWORDS */}
          <p className="text-xs text-gray-400 mt-4">
            Sofa cleaning Islamabad, carpet cleaning Rawalpindi, deep cleaning
            services Pakistan
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2563EB] text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Get Free Quote
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#2563EB] text-[#2563EB] px-6 py-3 rounded-xl font-semibold hover:bg-[#2563EB] hover:text-white transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
