import React, { useMemo } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import {
  trackWhatsAppConversion,
  trackCallConversion,
  trackEmailConversion,
} from "../utils/googleAds";
import { CITY_CONFIG } from "../config/cityConfig";

function Footer() {
  const location = useLocation();

  // Determine active city config based on URL path
  const isLahore = location.pathname.startsWith("/lahore");
  const cityInfo = isLahore ? CITY_CONFIG.lahore : CITY_CONFIG.isb_rwp;

  const whatsappLink = `${cityInfo.whatsappLink}?text=${encodeURIComponent(
    `Hi, I want Cleaning and Maintenance service from Capital Cleaning and Maintenance in ${cityInfo.cityName}`,
  )}`;

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

  // Helper function for dynamic routing
  const getServicePath = (slug) => {
    return isLahore ? `/lahore/service/${slug}` : `/service/${slug}`;
  };

  return (
    <footer className="bg-[#111827] text-white py-12 mt-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Column 1: Business Info */}
          <div>
            <h3 className="text-2xl font-bold text-white tracking-wide">
              Capital Cleaning <br />
              <span className="text-blue-500 text-lg">& Maintenance</span>
            </h3>
            <p className="text-gray-400 mt-4 leading-relaxed text-sm">
              Professional cleaning and maintenance services in{" "}
              {cityInfo.cityName}. We provide reliable solutions for homes,
              apartments, offices, and commercial properties.
            </p>
            <div className="mt-5 space-y-2 text-sm text-gray-400">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <FaMapMarkerAlt className="text-blue-500" /> Serving{" "}
                {cityInfo.cityName}
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold text-white mb-4 border-b-2 border-blue-500 pb-1 inline-block">
              Our Services
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-left">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={getServicePath(service.slug)}
                  className="text-gray-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-300"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold text-white mb-4 border-b-2 border-blue-500 pb-1 inline-block">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm w-full max-w-[200px] mx-auto md:mx-0">
              <a
                href={`tel:${cityInfo.phone.replace(/[^0-9+]/g, "")}`}
                onClick={trackCallConversion}
                className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition duration-300 w-full"
              >
                <FaPhoneAlt className="text-blue-400" />
                <span>{cityInfo.phone}</span>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppConversion}
                className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg hover:bg-green-600 transition duration-300 w-full"
              >
                <FaWhatsapp className="text-green-400 text-lg" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="mailto:capitalcleaningservices4@gmail.com"
                onClick={trackEmailConversion}
                className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition duration-300 w-full"
              >
                <FaEnvelope className="text-gray-400" />
                <span className="truncate">Email Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Capital Cleaning & Maintenance. All
            Rights Reserved.
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Professional Cleaning & Maintenance Services in {cityInfo.cityName}.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
