import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = ({ isActive }) =>
    `relative transition font-medium ${
      isActive ? "text-[#1D4ED8]" : "text-gray-600"
    } hover:text-[#1D4ED8]`;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm border-b border-gray-100" : "bg-white/95"
      }`}
    >
      <div className="px-2 py-6 h-10 flex justify-between items-center max-w-7xl mx-auto">
        {/* LOGO (compact height reduced) */}
        <div className="flex items-center">
          <img
            src="/favicon-transparent-512.png"
            alt="logo"
            className="h-10 w-auto object-contain"
            style={{ imageRendering: "crisp-edges" }}
          />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:!flex gap-6 items-center text-sm">
          <li>
            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={linkStyle}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkStyle}>
              Contact
            </NavLink>
          </li>

          <NavLink
            to="/booking"
            className="bg-[#1D4ED8] text-white px-4 py-1.5 rounded-lg text-sm hover:bg-blue-700 transition shadow-sm"
          >
            Book Now
          </NavLink>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-6 py-4 space-y-3 shadow-md text-sm">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-600 hover:text-blue-700"
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block text-gray-600 hover:text-blue-700"
          >
            Services
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block text-gray-600 hover:text-blue-700"
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-gray-600 hover:text-blue-700"
          >
            Contact
          </NavLink>

          <button className="w-full bg-[#1D4ED8] text-white py-2 rounded-lg shadow-sm">
            Book Now
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
