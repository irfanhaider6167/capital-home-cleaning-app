import React from "react";
import { motion } from "framer-motion";
import { trackWhatsAppConversion } from "../utils/googleAds";

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
        className="max-w-5xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#111827]">
          About{" "}
          <span className="text-[#1D4ED8]">Capital Cleaning & Maintenance</span>
        </h1>

        <p className="text-gray-600 mt-5 text-lg leading-relaxed">
          Professional Sofa Cleaning, Deep Cleaning & Maintenance Services in
          Islamabad and Rawalpindi. We provide reliable cleaning solutions for
          homes, offices, apartments and commercial properties.
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
          <h2 className="text-3xl font-bold text-[#111827] mb-5">Who We Are</h2>

          <p className="text-gray-600 leading-relaxed">
            Capital Cleaning & Maintenance is a trusted professional cleaning
            company serving Islamabad and Rawalpindi. We specialize in sofa
            cleaning, carpet cleaning, mattress cleaning, kitchen cleaning,
            washroom cleaning, home deep cleaning, office cleaning and water
            tank cleaning services.
            <br />
            <br />
            Our experienced cleaning team uses professional equipment and
            advanced cleaning methods to remove dirt, stains, dust and bacteria,
            providing fresh and hygienic environments for homes, offices and
            commercial spaces.
            <br />
            <br />
            We proudly serve customers in areas including Bahria Town, DHA
            Islamabad, DHA Rawalpindi, F-6, F-7, F-8, F-10, F-11, E-11, G-10,
            G-11, I-8, Gulberg Islamabad and surrounding areas.
          </p>
        </motion.div>

        {/* SERVICES */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-[#111827] mb-5">
            Our Cleaning & Maintenance Services
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Sofa Cleaning",
              "Carpet Cleaning",
              "Mattress Cleaning",
              "Home Deep Cleaning",
              "Kitchen Cleaning",
              "Washroom Cleaning",
              "Water Tank Cleaning",
              "Office Cleaning",
              "Painting & Maintenance",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#F3F6FF] p-4 rounded-xl text-gray-700 shadow-sm"
              >
                ✔ {service}
              </div>
            ))}
          </div>
        </div>

        {/* MISSION VISION */}

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-[#F3F6FF] p-6 rounded-2xl shadow-sm"
          >
            <h3 className="text-xl font-bold text-[#1D4ED8] mb-3">
              Our Mission
            </h3>

            <p className="text-gray-600">
              To provide professional and affordable cleaning solutions in
              Islamabad and Rawalpindi while maintaining high quality,
              reliability and customer satisfaction.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-[#F3F6FF] p-6 rounded-2xl shadow-sm"
          >
            <h3 className="text-xl font-bold text-[#1D4ED8] mb-3">
              Our Vision
            </h3>

            <p className="text-gray-600">
              To become one of the most trusted cleaning and maintenance service
              providers in Islamabad and Rawalpindi through excellent service
              quality and professional standards.
            </p>
          </motion.div>
        </div>

        {/* WHY CHOOSE US */}

        <div className="bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-5">
            Why Choose Capital Cleaning & Maintenance?
          </h3>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <p>✔ Experienced Cleaning Professionals</p>
            <p>✔ Modern Cleaning Equipment</p>
            <p>✔ Residential & Commercial Cleaning</p>
            <p>✔ Islamabad & Rawalpindi Coverage</p>
            <p>✔ Transparent & Affordable Pricing</p>
            <p>✔ Quick WhatsApp Booking Support</p>
          </div>
        </div>

        {/* CTA */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-center mt-10"
        >
          <a
            href={whatsappLink}
            onClick={trackWhatsAppConversion}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1D4ED8] text-white px-10 py-4 rounded-xl shadow-md hover:bg-blue-700 transition font-semibold"
          >
            Book Your Cleaning Service Today 🚀
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
