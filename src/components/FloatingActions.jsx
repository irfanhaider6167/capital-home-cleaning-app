import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import {
  trackWhatsAppConversion,
  trackCallConversion,
} from "../utils/googleAds";
import { CITY_CONFIG } from "../config/cityConfig";

function FloatingActions() {
  const location = useLocation();

  // URL check karke active city config select karein
  const isLahore = location.pathname.startsWith("/lahore");
  const config = isLahore ? CITY_CONFIG.lahore : CITY_CONFIG.isb_rwp;

  const whatsappMessage = encodeURIComponent(
    `Hi, I need cleaning service in ${config.cityName}`,
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end"
    >
      {/* CALL NOW */}
      <motion.a
        href={`tel:${config.phone.replace(/[^0-9+]/g, "")}`}
        onClick={trackCallConversion}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}
        className="relative bg-[#2563EB] text-white p-4 rounded-full shadow-xl"
        aria-label={`Call ${config.cityName} team`}
      >
        <span className="absolute inset-0 rounded-full bg-blue-500 opacity-40 animate-ping"></span>
        <FaPhoneAlt size={20} />
      </motion.a>

      {/* WHATSAPP */}
      <motion.a
        href={`${config.whatsappLink}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        onClick={trackWhatsAppConversion}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2.8,
        }}
        className="relative bg-green-500 text-white p-4 rounded-full shadow-xl"
        aria-label={`WhatsApp ${config.cityName} team`}
      >
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-40 animate-ping"></span>
        <FaWhatsapp size={22} />
      </motion.a>
    </motion.div>
  );
}

export default FloatingActions;
