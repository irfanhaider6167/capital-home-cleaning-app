import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const whatsappLink =
    "https://wa.me/923137332085?text=Hi%20I%20want%20to%20book%20a%20cleaning%20service";

  return (
    <div className="min-h-screen bg-[#F9FBFF] px-4 py-12">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#111827]">
          About{" "}
          <span className="text-[#1D4ED8]">Capital Cleaning & Maintenance</span>
        </h1>

        <p className="text-gray-500 mt-4 text-lg">
          Professional cleaning & maintenance services you can trust
        </p>
      </motion.div>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white shadow-lg rounded-3xl p-8 md:p-12 border border-gray-100"
      >
        {/* WHO WE ARE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-[#111827] mb-4">Who We Are</h2>

          <p className="text-gray-600 leading-relaxed">
            Capital Cleaning & Maintenance is a professional service provider in
            Pakistan, offering high-quality home, office, and deep cleaning
            along with maintenance solutions like plumbing, electrical work, AC
            services, and painting. Our goal is to deliver a clean, safe, and
            comfortable environment using trained staff and modern tools.
          </p>
        </motion.div>

        {/* MISSION / VISION */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5 }}
            className="bg-[#F3F6FF] border border-gray-100 p-6 rounded-2xl shadow-sm"
          >
            <h3 className="text-xl font-semibold text-[#1D4ED8] mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 text-sm">
              To provide reliable, affordable, and high-quality cleaning and
              maintenance services that improve everyday living and working
              spaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#F3F6FF] border border-gray-100 p-6 rounded-2xl shadow-sm"
          >
            <h3 className="text-xl font-semibold text-[#1D4ED8] mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600 text-sm">
              To become one of Pakistan’s most trusted service providers by
              maintaining professional standards, innovation, and customer
              satisfaction.
            </p>
          </motion.div>
        </div>

        {/* WHY CHOOSE US */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] text-white p-8 rounded-2xl shadow-md"
        >
          <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>

          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <p>✔ Trained & Verified Staff</p>
            <p>✔ Affordable & Transparent Pricing</p>
            <p>✔ Same Day Service Available</p>
            <p>✔ Advanced Tools & Equipment</p>
            <p>✔ 100% Customer Satisfaction</p>
            <p>✔ Easy WhatsApp Booking</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-center mt-10"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1D4ED8] text-white px-8 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            Book a Service 🚀
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
