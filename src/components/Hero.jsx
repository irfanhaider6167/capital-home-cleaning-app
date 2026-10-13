import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { trackWhatsAppConversion } from "../utils/googleAds";

function Hero() {
  const whatsappLink =
    "https://wa.me/923137332085?text=Hi%20I%20need%20Capital%20Cleaning%20and%20Maintenance%20services";

  const slides = [
    {
      title: "Home Deep Cleaning",
      highlight: "Islamabad & Rawalpindi",
      desc: "Professional home deep cleaning using quality solutions and professional equipment.",
      image: "/images/deep-cleaning-a-final.webp",
    },
    {
      title: "Sofa Cleaning",
      highlight: "Islamabad & Rawalpindi",
      desc: "Professional sofa cleaning to remove stains, dust and unpleasant odors.",
      image: "/images/sofa-after.webp",
    },
    {
      title: "Carpet Cleaning",
      highlight: "Islamabad & Rawalpindi",
      desc: "Deep carpet cleaning to refresh your carpets and improve indoor hygiene.",
      image: "/images/carpet-after.webp",
    },
    {
      title: "Mattress Cleaning",
      highlight: "Islamabad & Rawalpindi",
      desc: "Professional mattress cleaning to remove dust, stains and unpleasant odors.",
      image: "/images/mattress-after.webp",
    },
    {
      title: "Water Tank Cleaning",
      highlight: "Islamabad & Rawalpindi",
      desc: "Professional cleaning for underground and overhead water tanks.",
      image: "/images/water-tank-after.webp",
    },
    {
      title: "Solar Panel Cleaning",
      highlight: "Islamabad & Rawalpindi",
      desc: "Professional cleaning for solar panels to maintain their performance and efficiency.",
      image: "/images/solar-panel-cleaning-after.webp",
    },
    {
      title: "Office Cleaning",
      highlight: "Islamabad & Rawalpindi",
      desc: "Reliable cleaning solutions for offices, workplaces and commercial spaces.",
      image: "/images/office-cleaning-a-final.jpg",
    },
    {
      title: "Pest Control Services",
      highlight: "Islamabad & Rawalpindi",
      desc: "Professional termite control, cockroach control and bed bug control for homes and businesses.",
      image: "/images/pest-control-after.webp",
    },
    {
      title: "Plumbing Services",
      highlight: "Islamabad & Rawalpindi",
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
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Decorative Background */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-8 sm:gap-12 sm:px-6 sm:py-16 md:grid-cols-2 md:gap-14 md:py-20 lg:py-8">
        {/* RIGHT SLIDER - TOP ON MOBILE, RIGHT ON DESKTOP */}
        <div className="relative order-1 min-w-0 md:order-2">
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200 sm:rounded-3xl">
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
                  alt={`${slides[current].title} in Islamabad and Rawalpindi`}
                  fetchPriority={current === 0 ? "high" : "auto"}
                  className="h-[280px] w-full object-cover sm:h-[430px] lg:h-[500px]"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Slide Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 pb-10 sm:p-8 sm:pb-12">
                  <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white sm:text-xs">
                    Capital Cleaning & Maintenance
                  </span>

                  <h2 className="mt-3 text-xl font-bold text-white sm:text-3xl">
                    {slides[current].title}
                  </h2>

                  <p className="mt-1 text-sm font-semibold text-blue-200 sm:text-base">
                    {slides[current].highlight}
                  </p>

                  <p className="mt-2 max-w-lg text-sm leading-6 text-gray-200 sm:text-base">
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

        {/* LEFT CONTENT - BELOW SLIDER ON MOBILE, LEFT ON DESKTOP */}
        <div className="order-2 min-w-0 text-center md:order-1 md:text-left">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-4xl">
            Cleaning & Maintenance Services in{" "}
            <span className="text-blue-600">Islamabad & Rawalpindi</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8 md:mx-0">
            Capital Cleaning & Maintenance provides professional cleaning, pest
            control and maintenance services in Islamabad & Rawalpindi for
            homes, apartments, offices and commercial spaces. Our services
            include home deep cleaning, sofa cleaning, carpet cleaning, mattress
            cleaning, water tank cleaning, solar panel cleaning, termite
            control, cockroach control, bed bug control and plumbing services.
          </p>

          {/* Trust Points */}
          <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm font-medium text-gray-700 md:justify-start">
            <span className="flex items-center gap-2">
              <span className="text-blue-600">✓</span>
              Professional Team
            </span>

            <span className="flex items-center gap-2">
              <span className="text-blue-600">✓</span>
              Quality Service
            </span>

            <span className="flex items-center gap-2">
              <span className="text-blue-600">✓</span>
              Islamabad & Rawalpindi
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppConversion}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Get a Free Quote
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppConversion}
              className="inline-flex items-center justify-center rounded-xl border-2 border-blue-600 bg-white px-7 py-3.5 font-semibold text-blue-600 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white"
            >
              Book Now
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Quick response • Easy booking • Professional service
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
