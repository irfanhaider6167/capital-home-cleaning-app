import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  trackWhatsAppConversion,
  trackCallConversion,
  trackEmailConversion,
} from "../utils/googleAds";

function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Business Name */}
        <h3 className="text-2xl font-bold">Capital Cleaning & Maintenance</h3>

        {/* Business Description */}
        <p className="text-gray-400 mt-3 leading-7">
          Professional cleaning, pest control and maintenance services in
          Islamabad and Rawalpindi. We provide reliable solutions for homes,
          apartments, offices and commercial properties.
        </p>

        {/* Service Highlights */}
        <div className="mt-6 text-sm text-gray-400 space-y-2">
          <p>📍 Serving Islamabad & Rawalpindi</p>
          <p>🧹 Professional Cleaning & Deep Cleaning Services</p>
          <p>🐜 Professional Pest Control Services</p>
          <p>🛠️ Home & Commercial Maintenance Solutions</p>
        </div>

        {/* Internal Service Links */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h4>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm">
            <Link
              to="/service/home-deep-cleaning"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Home Deep Cleaning
            </Link>

            <Link
              to="/service/office-cleaning"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Office Cleaning
            </Link>

            <Link
              to="/service/sofa-cleaning"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Sofa Cleaning
            </Link>

            <Link
              to="/service/carpet-cleaning"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Carpet Cleaning
            </Link>

            <Link
              to="/service/mattress-cleaning"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Mattress Cleaning
            </Link>

            <Link
              to="/service/water-tank-cleaning"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Water Tank Cleaning
            </Link>

            <Link
              to="/service/pest-control"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Pest Control
            </Link>

            <Link
              to="/service/bed-bug-control"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Bed Bug Control
            </Link>

            <Link
              to="/service/termite-control"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Termite Control
            </Link>

            <Link
              to="/service/cockroach-control"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Cockroach Control
            </Link>

            <Link
              to="/service/painting"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Painting
            </Link>

            <Link
              to="/service/plumbing"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Plumbing
            </Link>

            <Link
              to="/service/electrical"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Electrical
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="tel:+923137332085"
            onClick={trackCallConversion}
            className="hover:text-blue-400 transition"
          >
            📞 Call Now
          </a>

          <a
            href="mailto:capitalcleaningservices4@gmail.com"
            onClick={trackEmailConversion}
            className="hover:text-blue-400 transition"
          >
            📧 Email Us
          </a>

          <a
            href="https://wa.me/923137332085"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsAppConversion}
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <FaWhatsapp className="text-xl" />
            WhatsApp Booking
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Capital Cleaning & Maintenance.
            Professional Cleaning, Pest Control & Maintenance Services in
            Islamabad & Rawalpindi. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
