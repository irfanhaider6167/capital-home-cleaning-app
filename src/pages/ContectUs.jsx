// src/pages/ContactUs.jsx

import React from "react";
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

  // ==============================
  // Services List (Pest Control Removed, Solar Added)
  // ==============================
  const services = [
    {
      title: "Home Deep Cleaning",
      slug: "home-deep-cleaning",
    },
    {
      title: "Office Cleaning",
      slug: "office-cleaning",
    },
    {
      title: "Sofa Cleaning",
      slug: "sofa-cleaning",
    },
    {
      title: "Carpet Cleaning",
      slug: "carpet-cleaning",
    },
    {
      title: "Mattress Cleaning",
      slug: "mattress-cleaning",
    },
    {
      title: "Water Tank Cleaning",
      slug: "water-tank-cleaning",
    },
    {
      title: "Solar Panel Cleaning",
      slug: "solar-panel-cleaning",
    },
    {
      title: "Painting",
      slug: "painting",
    },
    {
      title: "Plumbing",
      slug: "plumbing",
    },
    {
      title: "Electrical",
      slug: "electrical",
    },
  ];

  return (
    <>
      {/* ==============================
          SEO
      ============================== */}
      <SEO
        title={`Contact Us | Capital Cleaning & Maintenance ${cityInfo.cityName}`}
        description={`Contact Capital Cleaning & Maintenance for Home Deep Cleaning, Office Cleaning, Sofa Cleaning, Carpet Cleaning, Mattress Cleaning, Water Tank Cleaning, Solar Panel Cleaning, Painting, Plumbing and Electrical Services in ${cityInfo.cityName}.`}
        keywords={`Contact Cleaning Services Lahore, Cleaning Services Islamabad, Cleaning Services Rawalpindi, Home Deep Cleaning Lahore, Sofa Cleaning Lahore, Carpet Cleaning Lahore, Water Tank Cleaning Lahore, Solar Panel Cleaning`}
        url={`https://capitalcleaning.site${location.pathname}`}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50 px-4 py-12">
        {/* ==============================
            HERO
        ============================== */}
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
            Capital Cleaning & Maintenance provides professional Home Deep
            Cleaning, Office Cleaning, Sofa Cleaning, Carpet Cleaning, Mattress
            Cleaning, Water Tank Cleaning, Solar Panel Cleaning, Painting,
            Plumbing, and Electrical Services in Lahore, Islamabad & Rawalpindi.
          </p>

          {/* Hero Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppConversion}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-3 transition"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp Now
            </a>

            {/* Call */}
            <a
              href={`tel:${cityInfo.phone.replace(/[^0-9+]/g, "")}`}
              onClick={trackCallConversion}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-3 transition"
            >
              <FaPhoneAlt />
              Call: {cityInfo.phone}
            </a>
          </div>
        </motion.div>

        {/* ==============================
            CONTACT CARD
        ============================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 bg-white rounded-3xl shadow-xl p-8"
        >
          {/* ==============================
              LEFT SIDE
          ============================== */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-5">
              {/* ==============================
                  SERVICE AREAS
              ============================== */}
              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                <FaMapMarkerAlt className="text-blue-600 mt-1 text-xl flex-shrink-0" />

                <div className="w-full">
                  <h3 className="font-semibold text-lg mb-3">Service Areas</h3>

                  <div className="grid sm:grid-cols-3 gap-4 text-gray-600">
                    {/* Lahore */}
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">
                        Lahore
                      </h4>

                      <ul className="space-y-1 text-sm">
                        <li>✓ DHA Lahore (Ph 1-9)</li>
                        <li>✓ Gulberg</li>
                        <li>✓ Bahria Town</li>
                        <li>✓ Johar Town</li>
                        <li>✓ Model Town</li>
                        <li>✓ Askari</li>
                        <li>✓ Cantt</li>
                        <li>✓ Lake City</li>
                      </ul>
                    </div>

                    {/* Islamabad */}
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">
                        Islamabad
                      </h4>

                      <ul className="space-y-1 text-sm">
                        <li>✓ F-6 / F-7 / F-8</li>
                        <li>✓ F-10 / F-11</li>
                        <li>✓ G-9 / G-10 / G-11</li>
                        <li>✓ E-11 / G-13</li>
                        <li>✓ I-8 / I-9</li>
                        <li>✓ DHA Islamabad</li>
                        <li>✓ Gulberg Greens</li>
                      </ul>
                    </div>

                    {/* Rawalpindi */}
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">
                        Rawalpindi
                      </h4>

                      <ul className="space-y-1 text-sm">
                        <li>✓ Bahria Town (Ph 1-8)</li>
                        <li>✓ DHA Phase 1–5</li>
                        <li>✓ Askari 10 / 14</li>
                        <li>✓ Chaklala Scheme</li>
                        <li>✓ Satellite Town</li>
                        <li>✓ Saddar & Westridge</li>
                        <li>✓ Adyala Road</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* ==============================
                  PHONE
              ============================== */}
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

              {/* ==============================
                  EMAIL
              ============================== */}
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

              {/* ==============================
                  WORKING HOURS
              ============================== */}
              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                <FaClock className="text-blue-600 mt-1 text-xl flex-shrink-0" />

                <div>
                  <h3 className="font-semibold">Working Hours</h3>

                  <p className="text-gray-600">Monday - Sunday</p>

                  <p className="text-gray-600">9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* ==============================
                WHY CHOOSE US
            ============================== */}
            <div className="mt-8 bg-blue-600 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">
                Why Choose Capital Cleaning & Maintenance?
              </h3>

              <ul className="space-y-3">
                <li>✔ Experienced Cleaning Professionals</li>
                <li>✔ Same Day Service Available</li>
                <li>✔ Affordable & Transparent Pricing</li>
                <li>✔ Eco-Friendly Cleaning Products</li>
                <li>✔ Residential & Commercial Services</li>
                <li>✔ Serving Lahore, Islamabad & Rawalpindi</li>
              </ul>
            </div>
          </div>

          {/* ==============================
              RIGHT SIDE
          ============================== */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Services
              </h2>

              {/* ==============================
                  INTERNAL SERVICE LINKS
              ============================== */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      <span>✓ {service.title}</span>

                      <FaArrowRight className="text-blue-500 text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                    </Link>
                  );
                })}
              </div>

              {/* ==============================
                  GOOGLE MAP
              ============================== */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Our Service Area
                </h3>

                <iframe
                  title="Capital Cleaning & Maintenance Service Area"
                  src="https://maps.google.com/maps?q=G-11%20Islamabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-72 rounded-2xl border"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* ==============================
                CTA
            ============================== */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold">Need Professional Service?</h2>

              <p className="mt-3 text-blue-100">
                Contact our expert team today for professional cleaning and
                maintenance services in {cityInfo.cityName}.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {/* WhatsApp */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppConversion}
                  className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-xl font-semibold flex items-center gap-3 transition"
                >
                  <FaWhatsapp className="text-xl" />
                  Chat on WhatsApp
                </a>

                {/* Phone */}
                <a
                  href={`tel:${cityInfo.phone.replace(/[^0-9+]/g, "")}`}
                  onClick={trackCallConversion}
                  className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold flex items-center gap-3 transition"
                >
                  <FaPhoneAlt />
                  Call Now
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
