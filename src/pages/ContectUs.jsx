// src/pages/ContactUs.jsx

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import {
  trackWhatsAppConversion,
  trackCallConversion,
  trackEmailConversion,
} from "../utils/googleAds";

import SEO from "../components/seo/SEO";
import { CITY_CONFIG } from "../config/cityConfig";

const ContactUs = () => {
  const location = useLocation();

  // Active City Config load karein
  const isLahore = location.pathname.startsWith("/lahore");
  const cityInfo = isLahore ? CITY_CONFIG.lahore : CITY_CONFIG.isb_rwp;

  const whatsappLink = `${cityInfo.whatsappLink}?text=${encodeURIComponent(
    `Hi, I want Cleaning and Maintenance service from Capital Cleaning and Maintenance in ${cityInfo.cityName}`,
  )}`;

  // Services List
  const services = useMemo(
    () => [
      { title: "Home Deep Cleaning", slug: "home-deep-cleaning" },
      { title: "Office Cleaning", slug: "office-cleaning" },
      { title: "Sofa Cleaning", slug: "sofa-cleaning" },
      { title: "Carpet Cleaning", slug: "carpet-cleaning" },
      { title: "Mattress Cleaning", slug: "mattress-cleaning" },
      { title: "Water Tank Cleaning", slug: "water-tank-cleaning" },
      { title: "Solar Panel Cleaning", slug: "solar-panel-cleaning" },
      { title: "Painting", slug: "painting" },
      { title: "Plumbing", slug: "plumbing" },
      { title: "Electrical", slug: "electrical" },
    ],
    [],
  );

  // Service Areas Data Array
  const serviceAreas = [
    {
      city: "Lahore",
      areas: [
        "DHA Lahore (Ph 1-9)",
        "Gulberg",
        "Bahria Town",
        "Johar Town",
        "Model Town",
        "Askari",
        "Cantt",
        "Lake City",
      ],
    },
    {
      city: "Islamabad",
      areas: [
        "F-6 / F-7 / F-8",
        "F-10 / F-11",
        "G-9 / G-10 / G-11",
        "E-11 / G-13",
        "I-8 / I-9",
        "DHA Islamabad",
        "Gulberg Greens",
      ],
    },
    {
      city: "Rawalpindi",
      areas: [
        "Bahria Town (Ph 1-8)",
        "DHA Phase 1–5",
        "Askari 10 / 14",
        "Chaklala Scheme",
        "Satellite Town",
        "Saddar & Westridge",
        "Adyala Road",
      ],
    },
  ];

  // ==============================
  // DYNAMIC MAP CONFIGURATION
  // ==============================
  // Note: Standard iframe allows only 1 pin.
  // We place the pin at G-11 (for Isb/Rwp) and Zoom out (z=11) to show both cities.
  const mapQuery = isLahore ? "Lahore" : "G-11%20Islamabad";
  const mapZoom = isLahore ? "12" : "11";
  const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&t=&z=${mapZoom}&ie=UTF8&iwloc=&output=embed`;

  // Determine which areas to show based on the current city view
  const displayAreas = isLahore
    ? serviceAreas.filter((area) => area.city === "Lahore")
    : serviceAreas.filter((area) => area.city !== "Lahore");

  return (
    <>
      <SEO
        title={`Contact Us | Capital Cleaning & Maintenance ${cityInfo.cityName}`}
        description={`Contact Capital Cleaning & Maintenance for Professional Services including Home Deep Cleaning, Sofa Cleaning, Painting, Plumbing, and more in ${cityInfo.cityName}.`}
        keywords={`Contact Cleaning Services ${cityInfo.cityName}, Cleaning Services Islamabad, Cleaning Services Rawalpindi, Home Deep Cleaning Lahore, Sofa Cleaning`}
        url={`https://capitalcleaning.site${location.pathname}`}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50 px-4 py-12">
        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Capital Cleaning & Maintenance Services
          </h1>
          <p className="text-blue-600 font-semibold mt-2 text-lg">
            {cityInfo.cityName}
          </p>
          <p className="text-gray-600 mt-5 text-lg leading-8">
            Providing top-tier Home Deep Cleaning, Office Cleaning, Sofa
            Cleaning, Carpet Cleaning, Water Tank Cleaning, Solar Panel
            Cleaning, Painting, Plumbing, and Electrical Services in{" "}
            {cityInfo.cityName}.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppConversion}
              aria-label="Contact us on WhatsApp"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-3 transition"
            >
              <FaWhatsapp className="text-xl" /> WhatsApp Now
            </a>
            <a
              href={`tel:${cityInfo.phone.replace(/[^0-9+]/g, "")}`}
              onClick={trackCallConversion}
              aria-label="Call us directly"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-3 transition"
            >
              <FaPhoneAlt /> Call: {cityInfo.phone}
            </a>
          </div>
        </motion.div>

        {/* CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 bg-white rounded-3xl shadow-xl p-6 md:p-8"
        >
          {/* LEFT COLUMN: Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-5">
              {/* Service Areas Array Mapping (DYNAMIC BASED ON CITY) */}
              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                <FaMapMarkerAlt className="text-blue-600 mt-1 text-xl flex-shrink-0" />
                <div className="w-full">
                  <h3 className="font-semibold text-lg mb-3">Service Areas</h3>
                  <div
                    className={`grid ${isLahore ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2"} gap-4 text-gray-600`}
                  >
                    {displayAreas.map((region) => (
                      <div key={region.city}>
                        <h4 className="font-semibold text-blue-600 mb-2">
                          {region.city}
                        </h4>
                        <ul className="space-y-1 text-sm">
                          {region.areas.map((area, index) => (
                            <li key={index}>✓ {area}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phone Info */}
              <a
                href={`tel:${cityInfo.phone.replace(/[^0-9+]/g, "")}`}
                onClick={trackCallConversion}
                className="flex items-start gap-4 bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition"
              >
                <FaPhoneAlt className="text-blue-600 mt-1 text-xl flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Phone Number</h3>
                  <p className="text-gray-600">{cityInfo.phone}</p>
                </div>
              </a>

              {/* Email Info */}
              <a
                href="mailto:capitalcleaningservices4@gmail.com"
                onClick={trackEmailConversion}
                className="flex items-start gap-4 bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition"
              >
                <FaEnvelope className="text-blue-600 mt-1 text-xl flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Email Address</h3>
                  <p className="text-gray-600 break-all">
                    capitalcleaningservices4@gmail.com
                  </p>
                </div>
              </a>

              {/* Working Hours */}
              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                <FaClock className="text-blue-600 mt-1 text-xl flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Working Hours</h3>
                  <p className="text-gray-600">Monday - Sunday</p>
                  <p className="text-gray-600">9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mt-8 bg-blue-600 text-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-2 text-blue-50">
                <li>✔ Experienced Cleaning Professionals</li>
                <li>✔ Same Day Service Available</li>
                <li>✔ Affordable & Transparent Pricing</li>
                <li>✔ Eco-Friendly Cleaning Products</li>
                <li>✔ Residential & Commercial Services</li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: Services & Map */}
          <div className="flex flex-col h-full">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service) => {
                  const targetPath = isLahore
                    ? `/lahore/service/${service.slug}`
                    : `/service/${service.slug}`;

                  return (
                    <Link
                      key={service.slug}
                      to={targetPath}
                      className="group bg-blue-50 rounded-xl p-4 font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition flex items-center justify-between"
                    >
                      <span className="truncate">✓ {service.title}</span>
                      <FaArrowRight className="text-blue-500 text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Google Map Section */}
            <div className="mt-8 flex-grow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Our Service Area
              </h3>
              <iframe
                title={`Capital Cleaning & Maintenance Service Area - ${cityInfo.cityName}`}
                src={mapSrc}
                className="w-full h-64 md:h-72 rounded-2xl border shadow-sm"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold">
                Need Professional Service?
              </h2>
              <p className="mt-2 text-blue-100">
                Contact our expert team today for cleaning and maintenance
                services in {cityInfo.cityName}.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppConversion}
                  className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition"
                >
                  <FaWhatsapp className="text-xl" /> Chat on WhatsApp
                </a>
                <a
                  href={`tel:${cityInfo.phone.replace(/[^0-9+]/g, "")}`}
                  onClick={trackCallConversion}
                  className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition"
                >
                  <FaPhoneAlt /> Call Now
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactUs;
