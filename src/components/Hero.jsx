import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { trackWhatsAppConversion } from "../utils/googleAds";

function Hero() {
  const whatsappLink =
    "https://wa.me/923137332085?text=Hi%20I%20need%20Capital%20Cleaning%20and%20Maintenance%20services";

  const slides = [
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
      title: "Home Deep Cleaning",
      highlight: "Islamabad & Rawalpindi",
      desc: "Thorough home deep cleaning using professional equipment and quality solutions.",
      image: "/images/deep-cleaning-a-final.webp",
    },
    {
      title: "Office Cleaning",
      highlight: "Islamabad & Rawalpindi",
      desc: "Reliable cleaning solutions for offices, workplaces and commercial spaces.",
      image: "/images/office-cleaning-a-final.jpg",
    },
    {
      title: "Mattress Cleaning",
      highlight: "Islamabad & Rawalpindi",
      desc: "Professional mattress cleaning to remove stains, dust and unpleasant odors.",
      image: "/images/mattress-after.webp",
    },
    {
      title: "Water Tank Cleaning",
      highlight: "Islamabad & Rawalpindi",
      desc: "Professional cleaning for underground and overhead water tanks.",
      image: "/images/water-tank-after.webp",
    },
    {
      title: "Pest Control Services",
      highlight: "Islamabad & Rawalpindi",
      desc: "Professional pest control solutions to help protect your home or business from common pest infestations.",
      image: "/images/pest-control-after.webp",
    },
    {
      title: "Painting Services",
      highlight: "Islamabad & Rawalpindi",
      desc: "Professional interior and exterior painting for homes and commercial spaces.",
      image: "/images/paint-a-final.jpg",
    },
    {
      title: "Plumbing Services",
      highlight: "Islamabad & Rawalpindi",
      desc: "Professional plumbing repair, installation and maintenance services.",
      image: "/images/plumbring-a-final.jpg",
    },
    {
      title: "Electrical Services",
      highlight: "Islamabad & Rawalpindi",
      desc: "Reliable electrical installation, repair and maintenance solutions.",
      image: "/images/electrition-a-final.webp",
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

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 md:grid-cols-2 md:gap-14 md:py-20 lg:py-8">
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-4xl">
            Cleaning, Pest Control & Maintenance Services in{" "}
            <span className="text-blue-600">Islamabad & Rawalpindi</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 md:mx-0">
            Capital Cleaning & Maintenance provides reliable professional
            cleaning, pest control and maintenance services for homes,
            apartments, offices and commercial spaces. From home deep cleaning,
            sofa and carpet cleaning to pest control, painting, plumbing and
            electrical services, our team provides practical solutions for your
            property maintenance needs.
          </p>

          {/* Trust Points */}
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-gray-700 md:justify-start">
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

        {/* RIGHT SLIDER */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-gray-200">
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
                  className="h-[380px] w-full object-cover sm:h-[430px] lg:h-[500px]"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Slide Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    Capital Cleaning & Maintenance
                  </span>

                  <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                    {slides[current].title}
                  </h2>

                  <p className="mt-1 font-semibold text-blue-200">
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
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg transition hover:bg-blue-600 hover:text-white"
            >
              ❮
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next service"
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg transition hover:bg-blue-600 hover:text-white"
            >
              ❯
            </button>

            {/* Slider Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Show ${slide.title}`}
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
