import { motion } from "framer-motion";

function Hero() {
  const whatsappLink =
    "https://wa.me/923137332085?text=Hi%20I%20need%20Capital%20Cleaning%20and%20Maintenance%20services";

  return (
    <section className="bg-[#EFF6FF] pt-10 pb-0">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* LEFT CONTENT */}
        <div className="flex-1">
          {/* BRAND NAME */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#2563EB] font-semibold mb-2"
          >
            Capital Cleaning & Maintenance
          </motion.p>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold leading-tight text-[#111827]"
          >
            Professional Cleaning & Maintenance{" "}
            <span className="text-[#2563EB]">Services You Can Trust</span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-gray-600 text-lg"
          >
            We provide reliable, affordable, and high-quality cleaning &
            maintenance services for homes, offices, and commercial spaces. Your
            satisfaction is our top priority.
          </motion.p>

          {/* TRUST LINE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-sm text-gray-500"
          >
            ✔ Skilled Staff &nbsp; • &nbsp; ✔ Same Day Service &nbsp; • &nbsp; ✔
            100% Satisfaction Guarantee
          </motion.p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6">
            {/* GET QUOTE */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2563EB] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
            >
              Get Free Quote
            </motion.a>

            {/* WHATSAPP */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="border border-[#2563EB] text-[#2563EB] px-6 py-3 rounded-xl font-semibold hover:bg-[#2563EB] hover:text-white transition"
            >
              Chat on WhatsApp
            </motion.a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <img
            src="/hero-final.jpg"
            alt="Capital Cleaning and Maintenance Service"
            className="rounded-2xl shadow-xl border border-gray-200"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
