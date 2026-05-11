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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
${
  scrolled
    ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/40"
    : "bg-gradient-to-r from-[#EFF6FF] via-white to-[#DBEAFE] backdrop-blur-md"
}`}
    >
      <div className="px-2 py-6 h-10 flex justify-between items-center max-w-7xl mx-auto">
        {/* PREMIUM LOGO */}
        <div className="flex flex-col items-center leading-none">
          <h2 className="text-2xl md:text-3xl font-black text-[#1D4ED8] tracking-[2px] leading-none">
            CAPITAL
          </h2>

          <div className="flex items-center justify-center gap-2 mt-0.5">
            <div className="w-6 h-[2px] bg-[#1D4ED8] rounded-full"></div>

            <p
              className="text-xs md:text-sm font-extrabold tracking-[5px] leading-none 
      bg-gradient-to-r from-[#1D4ED8] via-[#3B82F6] to-[#60A5FA] 
      text-transparent bg-clip-text"
            >
              C&M
            </p>

            <div className="w-6 h-[2px] bg-[#1D4ED8] rounded-full"></div>
          </div>
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
        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-3xl transition-colors duration-300 text-[#1D4ED8] hover:text-blue-700"
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
