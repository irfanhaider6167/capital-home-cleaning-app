import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if we are in the Lahore section
  const isLahore = location.pathname.startsWith("/lahore");

  // Base path for navigation links
  const basePath = isLahore ? "/lahore" : "";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

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
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/40"
          : "bg-gradient-to-r from-[#EFF6FF] via-white to-[#DBEAFE] backdrop-blur-md"
      }`}
      aria-label="Main navigation"
    >
      <div className="px-4 py-4 md:py-6 h-16 md:h-20 flex justify-between items-center max-w-7xl mx-auto">
        {/* PREMIUM LOGO - LINKS TO HOMEPAGE */}
        <NavLink
          to={basePath || "/"}
          aria-label="Capital Cleaning & Maintenance - Home"
          className="flex flex-col items-center leading-none"
        >
          <h2 className="text-2xl md:text-3xl font-black text-[#1D4ED8] tracking-[2px] leading-none">
            CAPITAL
          </h2>

          <div className="flex items-center justify-center gap-2 mt-1">
            <div className="w-6 h-[2px] bg-[#1D4ED8] rounded-full"></div>

            <p
              className="text-[10px] md:text-xs font-extrabold tracking-[4px] md:tracking-[5px] leading-none
              bg-gradient-to-r from-[#1D4ED8] via-[#3B82F6] to-[#60A5FA]
              text-transparent bg-clip-text"
            >
              C&M
            </p>

            <div className="w-6 h-[2px] bg-[#1D4ED8] rounded-full"></div>
          </div>
        </NavLink>

        {/* DESKTOP MENU */}
        <ul className="hidden md:!flex gap-8 items-center text-sm lg:text-base">
          <li>
            <NavLink to={basePath || "/"} className={linkStyle} end>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to={`${basePath}/services`} className={linkStyle}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to={`${basePath}/about`} className={linkStyle}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to={`${basePath}/contact`} className={linkStyle}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="md:hidden text-2xl p-2 focus:outline-none transition-colors duration-300 text-[#1D4ED8] hover:text-blue-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-navigation"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-6 py-4 space-y-4 shadow-xl text-base font-medium">
          <NavLink
            to={basePath || "/"}
            end
            className={({ isActive }) =>
              `block transition-colors ${isActive ? "text-blue-700 font-bold" : "text-gray-600 hover:text-blue-700"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to={`${basePath}/services`}
            className={({ isActive }) =>
              `block transition-colors ${isActive ? "text-blue-700 font-bold" : "text-gray-600 hover:text-blue-700"}`
            }
          >
            Services
          </NavLink>

          <NavLink
            to={`${basePath}/about`}
            className={({ isActive }) =>
              `block transition-colors ${isActive ? "text-blue-700 font-bold" : "text-gray-600 hover:text-blue-700"}`
            }
          >
            About
          </NavLink>

          <NavLink
            to={`${basePath}/contact`}
            className={({ isActive }) =>
              `block transition-colors ${isActive ? "text-blue-700 font-bold" : "text-gray-600 hover:text-blue-700"}`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
