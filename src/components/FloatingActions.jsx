import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function FloatingActions() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end"
    >
      {/* CALL NOW */}
      <motion.a
        href="tel:+923137332085"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}
        className="relative bg-[#2563EB] text-white p-4 rounded-full shadow-xl"
      >
        {/* pulse ring */}
        <span className="absolute inset-0 rounded-full bg-blue-500 opacity-40 animate-ping"></span>

        <FaPhoneAlt size={20} />
      </motion.a>

      {/* WHATSAPP */}
      <motion.a
        href="https://wa.me/923137332085?text=Hi%20I%20need%20cleaning%20service"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2.8,
        }}
        className="relative bg-green-500 text-white p-4 rounded-full shadow-xl"
      >
        {/* pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-40 animate-ping"></span>

        <FaWhatsapp size={22} />
      </motion.a>
    </motion.div>
  );
}

export default FloatingActions;
