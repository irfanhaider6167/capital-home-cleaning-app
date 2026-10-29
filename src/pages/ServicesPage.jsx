import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { trackWhatsAppConversion } from "../utils/googleAds";
import { CITY_CONFIG } from "../config/cityConfig";
import SEO from "../components/seo/SEO"; // Import SEO component

import {
  FaHome,
  FaBuilding,
  FaWater,
  FaCouch,
  FaPaintBrush,
  FaWrench,
  FaBolt,
  FaBed,
  FaSolarPanel,
} from "react-icons/fa";

import { FaRug } from "react-icons/fa6";

/* =========================
      IMAGE SLIDER
========================= */

function ImageSlider({ images, service, isLahore }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  const targetPath = isLahore
    ? `/lahore/service/${service.slug}`
    : `/service/${service.slug}`;

  return (
    <div className="relative overflow-hidden rounded-t-3xl h-44 group">
      <Link
        to={targetPath}
        aria-label={`View ${service.title}`}
        className="block h-full"
      >
        <motion.div
          className="flex h-full"
          animate={{
            x: `-${index * 100}%`,
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
        >
          {images.map((img, i) => (
            <div key={i} className="w-full flex-shrink-0 relative">
              <img
                src={img}
                alt={`${service.title} in ${isLahore ? "Lahore" : "Islamabad and Rawalpindi"}`}
                loading="lazy"
                className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          ))}
        </motion.div>
      </Link>

      <div className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full pointer-events-none shadow-sm">
        Before / After
      </div>
    </div>
  );
}

/* =========================
        SERVICES
========================= */

function ServicesPage() {
  const location = useLocation();

  // Determine active city config based on URL
  const isLahore = location.pathname.startsWith("/lahore");
  const cityInfo = isLahore ? CITY_CONFIG.lahore : CITY_CONFIG.isb_rwp;

  const whatsappLink = (serviceTitle) =>
    `${cityInfo.whatsappLink}?text=${encodeURIComponent(
      `Hi, I want to book ${serviceTitle} service in ${cityInfo.cityName}`,
    )}`;

  const services = [
    {
      slug: "home-deep-cleaning",
      title: "Home Deep Cleaning",
      desc: `Capital Cleaning & Maintenance provides professional Home Deep Cleaning services in ${cityInfo.cityName}, offering complete cleaning solutions for kitchens, washrooms, floors, furniture, and residential properties.`,
      icon: <FaHome />,
      images: [
        "/images/house-cleaning-b-final.jpg",
        "/images/house-cleaning-a-final.jpg",
      ],
    },
    {
      slug: "office-cleaning",
      title: "Office Cleaning",
      desc: `Capital Cleaning & Maintenance provides professional Office Cleaning services in ${cityInfo.cityName}, creating clean, organized, and hygienic workplaces with reliable commercial cleaning solutions.`,
      icon: <FaBuilding />,
      images: [
        "/images/office-cleaning-b-final.jpg",
        "/images/office-cleaning-a-final.jpg",
      ],
    },
    {
      slug: "sofa-cleaning",
      title: "Sofa Cleaning",
      desc: `Capital Cleaning & Maintenance provides professional Sofa Cleaning services in ${cityInfo.cityName}, removing stains, dust, dirt, and bad odors to restore freshness and hygiene to your sofas.`,
      icon: <FaCouch />,
      images: ["/images/sofa-before.webp", "/images/sofa-after.webp"],
    },
    {
      slug: "mattress-cleaning",
      title: "Mattress Cleaning",
      desc: `Capital Cleaning & Maintenance provides professional Mattress Cleaning services in ${cityInfo.cityName}, removing dust, stains, allergens, and odors for a cleaner and healthier sleeping environment.`,
      icon: <FaBed />,
      images: ["/images/mattress-before.webp", "/images/mattress-after.webp"],
    },
    {
      slug: "carpet-cleaning",
      title: "Carpet Cleaning",
      desc: `Capital Cleaning & Maintenance provides professional Carpet Cleaning services in ${cityInfo.cityName}, removing deep stains, dust, allergens, and odors to make carpets fresh, clean, and hygienic.`,
      icon: <FaRug />,
      images: ["/images/carpet-before.webp", "/images/carpet-after.webp"],
    },
    {
      slug: "water-tank-cleaning",
      title: "Water Tank Cleaning",
      desc: `Capital Cleaning & Maintenance provides professional Water Tank Cleaning services in ${cityInfo.cityName}, removing dirt, sludge, bacteria, and contamination from underground and overhead water tanks.`,
      icon: <FaWater />,
      images: [
        "/images/water-tank-before.webp",
        "/images/water-tank-after.webp",
      ],
    },
    {
      slug: "solar-panel-cleaning",
      title: "Solar Panel Cleaning",
      desc: `Capital Cleaning & Maintenance provides professional Solar Panel Cleaning services in ${cityInfo.cityName}, removing dust, dirt, bird droppings, and other buildup from residential and commercial solar panels to help maintain their performance and efficiency.`,
      icon: <FaSolarPanel />,
      images: [
        "/images/solar-panel-cleaning-before.webp",
        "/images/solar-panel-cleaning-after.webp",
      ],
    },
    {
      slug: "painting",
      title: "Painting Services",
      desc: `Capital Cleaning & Maintenance provides professional Painting services in ${cityInfo.cityName}, delivering quality painting solutions for homes and offices with smooth finishing and reliable workmanship.`,
      icon: <FaPaintBrush />,
      images: ["/images/paint-b-final.jpg", "/images/paint-a-final.jpg"],
    },
    {
      slug: "plumbing",
      title: "Plumbing Services",
      desc: `Capital Cleaning & Maintenance provides professional Plumbing services in ${cityInfo.cityName}, including leakage repair, pipe installation, bathroom fittings, and maintenance solutions for homes and offices.`,
      icon: <FaWrench />,
      images: [
        "/images/plumbring-b-final.jpg",
        "/images/plumbring-a-final.jpg",
      ],
    },
    {
      slug: "electrical",
      title: "Electrical Services",
      desc: `Capital Cleaning & Maintenance provides professional Electrical services in ${cityInfo.cityName}, offering wiring, repair, installation, lighting, and maintenance solutions for homes and offices.`,
      icon: <FaBolt />,
      images: [
        "/images/electrition-b-final.jpg",
        "/images/electrition-a-final.webp",
      ],
    },
  ];

  return (
    <>
      {/* ONLY render SEO when the page is explicitly on /services or /lahore/services 
          (Not when it's just rendered as a section inside Home.jsx) */}
      {(location.pathname === "/services" ||
        location.pathname === "/lahore/services") && (
        <SEO
          title={`Our Services in ${cityInfo.cityName} | Capital Cleaning & Maintenance`}
          description={`Explore professional cleaning and maintenance services in ${cityInfo.cityName} including home deep cleaning, sofa cleaning, water tank cleaning, painting, plumbing, and electrical services.`}
          keywords={`cleaning services ${cityInfo.cityName}, maintenance services ${cityInfo.cityName}, deep cleaning, sofa cleaning, painting, plumbing`}
          url={`https://capitalcleaning.site${location.pathname}`}
        />
      )}

      <section className="py-16 md:py-20 bg-gradient-to-b from-[#EFF6FF] to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
              What We Offer
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#111827]">
              Our Professional <span className="text-blue-600">Services</span>{" "}
              in {cityInfo.cityName}
            </h1>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const targetPath = isLahore
                ? `/lahore/service/${service.slug}`
                : `/service/${service.slug}`;

              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-50 transition-all duration-300 flex flex-col h-full group"
                >
                  {/* CLICKABLE SERVICE IMAGE */}
                  <ImageSlider
                    images={service.images}
                    service={service}
                    isLahore={isLahore}
                  />

                  <div className="p-6 md:p-8 flex flex-col flex-grow text-center">
                    <div className="text-blue-600 text-4xl flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>

                    {/* SERVICE TITLE LINK */}
                    <h3 className="font-bold text-xl text-gray-900 mb-3">
                      <Link
                        to={targetPath}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {service.title}
                      </Link>
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                      {service.desc}
                    </p>

                    {/* WHATSAPP BOOKING */}
                    <div className="mt-6 flex flex-col gap-3">
                      <a
                        href={whatsappLink(service.title)}
                        onClick={trackWhatsAppConversion}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-blue-600 text-white font-semibold py-3.5 rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Book Now 🚀
                      </a>

                      <Link
                        to={targetPath}
                        className="text-gray-500 text-sm font-medium hover:text-blue-600 transition-colors py-2"
                      >
                        View Details &rarr;
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* SERVICES PAGE INTERNAL LINK (Only show if rendered inside Home) */}
          {location.pathname !== "/services" &&
            location.pathname !== "/lahore/services" && (
              <div className="mt-16 text-center">
                <Link
                  to={isLahore ? "/lahore/services" : "/services"}
                  className="inline-flex items-center justify-center bg-white border-2 border-blue-600 text-blue-600 px-8 py-3.5 rounded-xl font-bold hover:bg-blue-600 hover:text-white hover:shadow-lg transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            )}
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
