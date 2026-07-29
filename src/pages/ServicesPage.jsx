import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { trackWhatsAppConversion } from "../utils/googleAds";

import {
  FaHome,
  FaBuilding,
  FaWater,
  FaCouch,
  FaPaintBrush,
  FaWrench,
  FaBolt,
  FaBed,
} from "react-icons/fa";

import { FaRug } from "react-icons/fa6";

/* =========================
      IMAGE SLIDER
========================= */

function ImageSlider({ images, service }) {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden rounded-t-3xl h-44">
      <motion.div
        className="flex h-full"
        animate={{
          x: `-${index * 100}%`,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 cursor-pointer"
            onClick={() => navigate(`/service/${service.slug}`)}
          >
            <img
              src={img}
              alt={`${service.title} in Islamabad and Rawalpindi`}
              className="w-full h-44 object-cover"
            />
          </div>
        ))}
      </motion.div>

      <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
        Before / After
      </div>
    </div>
  );
}

/* =========================
        SERVICES
========================= */

function ServicesPage() {
  const whatsappLink =
    "https://wa.me/923137332085?text=Hi%20I%20want%20to%20book%20Capital%20Cleaning%20service";

  const services = [
    {
      slug: "home-deep-cleaning",
      title: "Home Deep Cleaning Islamabad & Rawalpindi",
      desc: "Capital Cleaning & Maintenance provides professional Home Deep Cleaning services in Islamabad & Rawalpindi, offering complete cleaning solutions for kitchens, washrooms, floors, furniture, and residential properties.",
      icon: <FaHome />,
      images: [
        "/images/house-cleaning-b-final.jpg",
        "/images/house-cleaning-a-final.jpg",
      ],
    },

    {
      slug: "office-cleaning",
      title: "Office Cleaning Islamabad & Rawalpindi",
      desc: "Capital Cleaning & Maintenance provides professional Office Cleaning services in Islamabad & Rawalpindi, creating clean, organized, and hygienic workplaces with reliable commercial cleaning solutions.",
      icon: <FaBuilding />,
      images: [
        "/images/office-cleaning-b-final.jpg",
        "/images/office-cleaning-a-final.jpg",
      ],
    },

    {
      slug: "sofa-cleaning",
      title: "Sofa Cleaning Islamabad & Rawalpindi",
      desc: "Capital Cleaning & Maintenance provides professional Sofa Cleaning services in Islamabad & Rawalpindi, removing stains, dust, dirt, and bad odors to restore freshness and hygiene to your sofas.",
      icon: <FaCouch />,
      images: ["/images/sofa-before.webp", "/images/sofa-after.webp"],
    },

    {
      slug: "mattress-cleaning",
      title: "Mattress Cleaning Islamabad & Rawalpindi",
      desc: "Capital Cleaning & Maintenance provides professional Mattress Cleaning services in Islamabad & Rawalpindi, removing dust, stains, allergens, and odors for a cleaner and healthier sleeping environment.",
      icon: <FaBed />,
      images: ["/images/mattress-before.webp", "/images/mattress-after.webp"],
    },
    {
      slug: "carpet-cleaning",
      title: "Carpet Cleaning Islamabad & Rawalpindi",
      desc: "Capital Cleaning & Maintenance provides professional Carpet Cleaning services in Islamabad & Rawalpindi, removing deep stains, dust, allergens, and odors to make carpets fresh, clean, and hygienic.",
      icon: <FaRug />,
      images: ["/images/carpet-before.webp", "/images/carpet-after.webp"],
    },

    {
      slug: "water-tank-cleaning",
      title: "Water Tank Cleaning Islamabad & Rawalpindi",
      desc: "Capital Cleaning & Maintenance provides professional Water Tank Cleaning services in Islamabad & Rawalpindi, removing dirt, sludge, bacteria, and contamination from underground and overhead water tanks.",
      icon: <FaWater />,
      images: [
        "/images/water-tank-before.webp",
        "/images/water-tank-after.webp",
      ],
    },

    {
      slug: "painting",
      title: "Home Painting Islamabad & Rawalpindi",
      desc: "Capital Cleaning & Maintenance provides professional Painting services in Islamabad & Rawalpindi, delivering quality painting solutions for homes and offices with smooth finishing and reliable workmanship.",
      icon: <FaPaintBrush />,
      images: ["/images/paint-b-final.jpg", "/images/paint-a-final.jpg"],
    },

    {
      slug: "plumbing",
      title: "Plumbing Services Islamabad & Rawalpindi",
      desc: "Capital Cleaning & Maintenance provides professional Plumbing services in Islamabad & Rawalpindi, including leakage repair, pipe installation, bathroom fittings, and maintenance solutions for homes and offices.",
      icon: <FaWrench />,
      images: [
        "/images/plumbring-b-final.jpg",
        "/images/plumbring-a-final.jpg",
      ],
    },

    {
      slug: "electrical",
      title: "Electrical Services Islamabad & Rawalpindi",
      desc: "Capital Cleaning & Maintenance provides professional Electrical services in Islamabad & Rawalpindi, offering wiring, repair, installation, lighting, and maintenance solutions for homes and offices.",
      icon: <FaBolt />,
      images: [
        "/images/electrition-b-final.jpg",
        "/images/electrition-a-final.webp",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#EFF6FF] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-12 text-[#111827]">
          Our
          <span className="text-blue-600">Services</span>
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                scale: 1.04,
              }}
              transition={{
                duration: 0.5,
              }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100"
            >
              <ImageSlider images={service.images} service={service} />

              <div className="p-5 text-center">
                <div className="text-blue-600 text-3xl flex justify-center mb-3">
                  {service.icon}
                </div>

                <h3 className="font-bold text-lg text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  {service.desc}
                </p>

                <a
                  href={whatsappLink}
                  onClick={trackWhatsAppConversion}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
                >
                  Whatsapp Booking 🚀
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
