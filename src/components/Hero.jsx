import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Hero() {
  const slides = [
    {
      title: "Home Deep Cleaning",
      highlight: "Lahore, Islamabad & Rawalpindi",
      desc: "Professional home deep cleaning using quality solutions and professional equipment.",
      image: "/images/deep-cleaning-a-final.webp",
    },
    {
      title: "Sofa Cleaning",
      highlight: "Lahore, Islamabad & Rawalpindi",
      desc: "Professional sofa cleaning to remove stains, dust and unpleasant odors.",
      image: "/images/sofa-after.webp",
    },
    {
      title: "Carpet Cleaning",
      highlight: "Lahore, Islamabad & Rawalpindi",
      desc: "Deep carpet cleaning to refresh your carpets and improve indoor hygiene.",
      image: "/images/carpet-after.webp",
    },
    {
      title: "Mattress Cleaning",
      highlight: "Lahore, Islamabad & Rawalpindi",
      desc: "Professional mattress cleaning to remove dust, stains and unpleasant odors.",
      image: "/images/mattress-after.webp",
    },
    {
      title: "Water Tank Cleaning",
      highlight: "Lahore, Islamabad & Rawalpindi",
      desc: "Professional cleaning for underground and overhead water tanks.",
      image: "/images/water-tank-after.webp",
    },
    {
      title: "Solar Panel Cleaning",
      highlight: "Lahore, Islamabad & Rawalpindi",
      desc: "Professional cleaning for solar panels to maintain their performance and efficiency.",
      image: "/images/solar-panel-cleaning-after.webp",
    },
    {
      title: "Office Cleaning",
      highlight: "Lahore, Islamabad & Rawalpindi",
      desc: "Reliable cleaning solutions for offices, workplaces and commercial spaces.",
      image: "/images/office-cleaning-a-final.jpg",
    },
    {
      title: "Plumbing Services",
      highlight: "Lahore, Islamabad & Rawalpindi",
      desc: "Professional plumbing repair, installation and maintenance services.",
      image: "/images/plumbring-a-final.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Decorative Background */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl" />

      <div className="relative z-10 w-full">
        {/* RIGHT SLIDER - TOP ON MOBILE, RIGHT ON DESKTOP */}
        <div className="relative order-1 min-w-0 w-full">
          <div className="relative w-full overflow-hidden rounded-none bg-white shadow-none ring-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
                className="relative"
              >
                <img
                  src={slides[current].image}
                  alt={`${slides[current].title} in Lahore, Islamabad and Rawalpindi`}
                  fetchPriority={current === 0 ? "high" : "auto"}
                  className="block h-[280px] w-full object-cover sm:h-[430px] lg:h-[500px]"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Slide Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 pb-10 text-center sm:p-8 sm:pb-12">
                  <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white sm:text-xs">
                    Capital Cleaning & Maintenance
                  </span>

                  <h2 className="mt-3 text-xl font-bold text-white sm:text-3xl">
                    {slides[current].title}
                  </h2>

                  <p className="mt-1 text-sm font-semibold text-blue-200 sm:text-base">
                    {slides[current].highlight}
                  </p>

                  <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-gray-200 sm:text-base">
                    {slides[current].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Previous Button */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous service"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/50 text-gray-800 shadow-lg transition hover:bg-blue-600 hover:text-white sm:left-4 sm:h-10 sm:w-10"
            >
              ❮
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next service"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/50 text-gray-800 shadow-lg transition hover:bg-blue-600 hover:text-white sm:right-4 sm:h-10 sm:w-10"
            >
              ❯
            </button>

            {/* Slider Indicators */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 sm:bottom-4">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Show ${slide.title}`}
                  aria-current={current === index ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-8 bg-white"
                      : "w-2 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
