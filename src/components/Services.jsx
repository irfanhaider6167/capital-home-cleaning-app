import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaHome, FaBuilding, FaBroom, FaTools } from "react-icons/fa";

/* =========================
   IMAGE SLIDER COMPONENT
========================= */
function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  const labels = ["Before", "After"];
  const colors = ["bg-red-600", "bg-green-600"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden rounded-t-3xl h-44">
      {/* SLIDER */}
      <motion.div
        className="flex w-full h-full"
        animate={{ x: `-${index * 100}%` }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            // src={img}
            src={`${import.meta.env.BASE_URL}${img}`}
            className="w-full h-44 object-cover flex-shrink-0"
          />
        ))}
      </motion.div>

      {/* 🔥 BEFORE / AFTER LABEL */}
      <motion.div
        key={index}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`absolute top-2 left-2 text-white text-xs px-3 py-1 rounded-full shadow-lg ${colors[index]}`}
      >
        {labels[index]}
      </motion.div>

      {/* DOT INDICATOR */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === i ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* =========================
        SERVICES
========================= */
function Services() {
  const whatsappLink =
    "https://wa.me/923137332085?text=Hi%20I%20want%20Capital%20Cleaning%20and%20Maintenance%20service";

  const cleaningServices = [
    {
      title: "House Cleaning",
      desc: "Complete home cleaning with trained professionals.",
      icon: <FaHome />,
      images: [
        // "/images/house-cleaning-b-final.jpg",
        `${import.meta.env.BASE_URL + "images/house-cleaning-b-final.jpg"}`,
        `${import.meta.env.BASE_URL + "images/house-cleaning-a-final.jpg"}`,
        // "/images/house-cleaning-a-final.jpg",
      ],
    },
    {
      title: "Deep Cleaning",
      desc: "Deep and detailed cleaning for every corner.",
      icon: <FaBroom />,
      images: [
        "/images/deep-cleaning-b-final.webp",
        "/images/deep-cleaning-a-final.webp",
      ],
    },
    {
      title: "Office Cleaning",
      desc: "Clean and productive workspace.",
      icon: <FaBuilding />,
      images: [
        "/images/office-cleaning-b-final.jpg",
        "/images/office-cleaning-a-final.jpg",
      ],
    },
  ];

  const maintenanceServices = [
    {
      title: "Painting",
      desc: "Wall painting & finishing",
      icon: <FaTools />,
      images: ["/images/paint-b-final.jpg", "/images/paint-a-final.jpg"],
    },
    {
      title: "Plumbing",
      desc: "Leak fixing & pipe work",
      icon: <FaTools />,
      images: [
        "/images/plumbring-b-final.jpg",
        "/images/plumbring-a-final.jpg",
      ],
    },
    {
      title: "Electrical",
      desc: "Wiring & repair work",
      icon: <FaTools />,
      images: [
        "/images/electrition-b-final.jpg",
        "/images/electrition-a-final.webp",
      ],
    },
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
      },
    }),
  };

  const renderCard = (service, index) => {
    return (
      <motion.div
        key={index}
        custom={index}
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition"
      >
        {/* IMAGE SLIDER */}
        <ImageSlider images={service.images} />

        {/* CONTENT */}
        <div className="p-5 text-center">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-3xl text-[#2563EB] flex justify-center mb-2"
          >
            {service.icon}
          </motion.div>

          <h3 className="font-semibold text-lg">{service.title}</h3>
          <p className="text-gray-600 text-sm mt-1">{service.desc}</p>

          <motion.a
            href={whatsappLink}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 block bg-[#2563EB] text-white px-4 py-2 rounded-xl text-sm shadow-md hover:bg-blue-700 transition"
          >
            Book Now
          </motion.a>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#EFF6FF] to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-[#111827]"
        >
          Our <span className="text-[#2563EB]">Services</span>
        </motion.h2>

        {/* CLEANING */}
        <h3 className="mt-10 text-left text-2xl font-semibold">
          Cleaning Services 🧼
        </h3>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {cleaningServices.map((s, i) => renderCard(s, i))}
        </div>

        {/* MAINTENANCE */}
        <h3 className="mt-14 text-left text-2xl font-semibold">
          Maintenance Services 🛠️
        </h3>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {maintenanceServices.map((s, i) => renderCard(s, i))}
        </div>
      </div>
    </section>
  );
}

export default Services;
