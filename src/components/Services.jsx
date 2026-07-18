import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBuilding,
  FaWater,
  FaTools,
  FaCouch,
  FaPaintBrush,
  FaWrench,
  FaBolt,
} from "react-icons/fa";
import { FaRug } from "react-icons/fa6";

/* =========================
   IMAGE SLIDER COMPONENT
========================= */

function ImageSlider({ images, service }) {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

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
      <motion.div
        className="flex h-full w-full"
        animate={{ x: `-${index * 100}%` }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="w-full h-44 flex-shrink-0 cursor-pointer"
            onClick={() => navigate(`/service/${service.slug}`)}
          >
            <img
              src={img}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>

      <motion.div
        key={index}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`absolute top-2 left-2 text-white text-xs px-3 py-1 rounded-full shadow-lg ${colors[index]}`}
      >
        {labels[index]}
      </motion.div>

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
    "https://wa.me/923137332085?text=Hi%20I%20want%20Capital%20Cleaning%20service";

  const cleaningServices = [
    {
      slug: "home-deep-cleaning",
      title: "Home Deep Cleaning",
      desc: "Capital Cleaning & Maintenance provides professional Home Deep Cleaning services in Islamabad & Rawalpindi, leaving every home fresh, spotless, and hygienic.",
      icon: <FaHome />,
      images: [
        "/images/house-cleaning-b-final.jpg",
        "/images/house-cleaning-a-final.jpg",
      ],
    },
    {
      slug: "office-cleaning",
      title: "Office Cleaning",
      desc: "Capital Cleaning & Maintenance provides professional Office Cleaning services in Islamabad & Rawalpindi, creating clean, organized, and productive workplaces..",
      icon: <FaBuilding />,
      images: [
        "/images/office-cleaning-b-final.jpg",
        "/images/office-cleaning-a-final.jpg",
      ],
    },
    {
      slug: "sofa-cleaning",
      title: "Sofa Cleaning",
      desc: "Capital Cleaning & Maintenance provides professional Sofa Cleaning services in Islamabad & Rawalpindi, removing stains, dust, and odors for a fresh, hygienic sofa.",
      icon: <FaCouch />,
      images: ["/images/sofa-before.webp", "/images/sofa-after.webp"],
    },
    {
      slug: "carpet-cleaning",
      title: "Carpet Cleaning",
      desc: "Capital Cleaning & Maintenance provides professional Carpet Cleaning services in Islamabad & Rawalpindi, removing stains, dust, allergens, and odors for fresh, clean carpets.",
      icon: <FaRug />,
      images: ["/images/carpet-before.webp", "/images/carpet-after.webp"],
    },
    {
      slug: "water-tank-cleaning",
      title: "Water Tank Cleaning",
      desc: "Capital Cleaning & Maintenance provides professional Water Tank Cleaning services in Islamabad & Rawalpindi, removing dirt, bacteria, and contaminants for clean, safe water.",
      icon: <FaWater />,
      images: [
        "/images/water-tank-before.webp",
        "/images/water-tank-after.webp",
      ],
    },
  ];

  const maintenanceServices = [
    {
      slug: "painting",
      title: "Painting",
      desc: "Capital Cleaning & Maintenance provides professional Painting services in Islamabad & Rawalpindi with premium finishes for homes and offices.",
      icon: <FaPaintBrush />,
      images: ["/images/paint-b-final.jpg", "/images/paint-a-final.jpg"],
    },
    {
      slug: "plumbring",
      title: "Plumbring",
      desc: "Capital Cleaning & Maintenance provides professional Plumbring services in Islamabad & Rawalpindi for leak repairs, pipe installation, and maintenance.",
      icon: <FaWrench />,
      images: [
        "/images/plumbring-b-final.jpg",
        "/images/plumbring-a-final.jpg",
      ],
    },
    {
      slug: "electrical",
      title: "Electrical",
      desc: "Capital Cleaning & Maintenance provides professional Electrical services in Islamabad & Rawalpindi for wiring, repairs, installations, and maintenance.",
      icon: <FaBolt />,
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
  const renderCard = (service, index) => (
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
      <ImageSlider images={service.images} service={service} />

      <div className="p-5 text-center">
        <div className="text-3xl text-[#2563EB] flex justify-center mb-2">
          {service.icon}
        </div>

        <h3 className="font-semibold text-lg">{service.title}</h3>

        <p className="text-gray-600 text-sm mt-1">{service.desc}</p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block bg-[#2563EB] text-white px-4 py-2 rounded-xl text-sm shadow-md hover:bg-blue-700 transition"
        >
          Book Now
        </a>
      </div>
    </motion.div>
  );

  return (
    <section className="py-16 bg-gradient-to-b from-[#EFF6FF] to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
          Our <span className="text-[#2563EB]">Services</span>
        </h2>

        {/* Cleaning Services */}

        <h3 className="mt-10 text-left text-2xl font-semibold">
          Cleaning Services 🧼
        </h3>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {cleaningServices.map((service, index) => renderCard(service, index))}
        </div>

        {/* Maintenance Services */}

        <h3 className="mt-14 text-left text-2xl font-semibold">
          Maintenance Services 🛠️
        </h3>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {maintenanceServices.map((service, index) =>
            renderCard(service, index),
          )}
        </div>
      </div>
    </section>
  );
}

export default Services;
