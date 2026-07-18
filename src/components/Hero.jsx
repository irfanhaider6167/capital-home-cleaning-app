import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Hero() {
  const whatsappLink =
    "https://wa.me/923137332085?text=Hi%20I%20need%20Capital%20Cleaning%20and%20Maintenance%20services";

  const slides = [
    {
      title: "Professional Sofa Cleaning",
      highlight: "Islamabad & Rawalpindi",
      desc: "Deep stain removal, odor elimination and fabric-safe sofa cleaning.",
      image: "/images/sofa-after.webp",
    },
    {
      title: "Professional Carpet Cleaning",
      highlight: "Islamabad & Rawalpindi",
      desc: "Deep carpet cleaning with stain and dust removal.",
      image: "/images/carpet-after.webp",
    },
    {
      title: "Home Deep Cleaning",
      highlight: "Islamabad & Rawalpindi",
      desc: "Complete home deep cleaning with eco-friendly solutions.",
      image: "/images/deep-cleaning-a-final.webp",
    },
    {
      title: "Office Cleaning",
      highlight: "Islamabad & Rawalpindi",
      desc: "Professional office cleaning for clean workplaces.",
      image: "/images/office-cleaning-a-final.jpg",
    },
    {
      title: "Water Tank Cleaning",
      highlight: "Islamabad & Rawalpindi",
      desc: "Professional underground and overhead water tank cleaning.",
      image: "/images/water-tank-after.webp",
    },
    {
      title: "Painting Services",
      highlight: "Islamabad & Rawalpindi",
      desc: "Premium interior and exterior painting services.",
      image: "/images/paint-a-final.jpg",
    },
    {
      title: "Plumbring Services",
      highlight: "Islamabad & Rawalpindi",
      desc: "Professional plumbring repairs and installations.",
      image: "/images/plumbring-a-final.jpg",
    },
    {
      title: "Electrical Services",
      highlight: "Islamabad & Rawalpindi",
      desc: "Safe electrical wiring, repair and maintenance.",
      image: "/images/electrition-a-final.webp",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#EFF6FF] via-white to-[#DBEAFE] min-h-screen flex items-center">
      {/* Background Blur */}
      <div className="absolute top-[-150px] left-[-120px] w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-150px] right-[-120px] w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
            Best Cleaning Services in{" "}
            <span className="text-blue-600">Islamabad & Rawalpindi</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
            Capital Cleaning & Maintenance offers professional cleaning and
            maintenance services in Islamabad and Rawalpindi, including sofa
            cleaning, carpet cleaning, home deep cleaning, office cleaning,
            water tank cleaning, painting, plumbing, and electrical services.
            Our trained team provides reliable, affordable, and high-quality
            solutions to keep your home and workplace clean, safe, and
            well-maintained.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Get Free Quote
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}

        {/* IMAGE WITH TEXT OVERLAY */}

        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="w-full h-[400px] object-cover rounded-3xl"
              />

              {/* DARK OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* TEXT OVER IMAGE */}

              <div className="absolute bottom-10 left-8 right-8 text-white">
                <motion.h2
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold"
                >
                  {slides[current].title}
                </motion.h2>

                <motion.p
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-blue-200 font-semibold text-lg mt-2"
                >
                  {slides[current].highlight}
                </motion.p>

                <motion.p
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-3 text-gray-200"
                >
                  {slides[current].desc}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* LEFT BUTTON */}

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 
    bg-white/90 w-11 h-11 rounded-full shadow-lg 
    hover:bg-blue-600 hover:text-white transition"
          >
            ❮
          </button>

          {/* RIGHT BUTTON */}

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 
    bg-white/90 w-11 h-11 rounded-full shadow-lg 
    hover:bg-blue-600 hover:text-white transition"
          >
            ❯
          </button>

          {/* DOTS */}

          <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`rounded-full transition-all ${
                  current === index ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
