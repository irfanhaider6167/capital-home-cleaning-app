import React from "react";
import { motion } from "framer-motion";
import BookingForm from "../components/BookingForm";

const ContactUs = () => {
  const whatsappLink =
    "https://wa.me/923137332085?text=Hi%20I%20want%20Cleaning%20and%20Maintenance%20service%20from%20Capital%20Cleaning%20and%20Maintenance";

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-10 sm:py-14">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto text-center mb-10"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Book Professional{" "}
          <span className="text-blue-600">Cleaning & Maintenance</span> Service
        </h1>

        <p className="text-gray-500 mt-3 text-sm sm:text-lg">
          Capital Cleaning & Maintenance — Fast, reliable & affordable services
          at your doorstep
        </p>

        {/* WhatsApp CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 bg-green-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-600 transition"
        >
          Book on WhatsApp 💬
        </a>
      </motion.div>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8 bg-white shadow-lg rounded-2xl p-5 sm:p-8 border border-gray-100"
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between">
          {/* CONTACT INFO */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5">
              Get in Touch with Us
            </h3>

            <div className="space-y-4">
              {/* LOCATION */}
              <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                <span className="text-blue-600 text-lg">📍</span>
                <div>
                  <p className="font-medium text-sm">Office Location</p>
                  <p className="text-xs text-gray-500">
                    G-11, Islamabad, Pakistan
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <a
                href="tel:+923137332085"
                className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition"
              >
                <span className="text-blue-600 text-lg">📞</span>
                <div>
                  <p className="font-medium text-sm">Call / WhatsApp</p>
                  <p className="text-xs text-gray-500">+92 313 7332085</p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:capitalcleaningservices4@gmail.com"
                className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition"
              >
                <span className="text-blue-600 text-lg">📧</span>
                <div>
                  <p className="font-medium text-sm">Email Support</p>
                  <p className="text-xs text-gray-500">
                    capitalcleaningservices4@gmail.com
                  </p>
                </div>
              </a>

              {/* HOURS */}
              <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                <span className="text-blue-600 text-lg">⏰</span>
                <div>
                  <p className="font-medium text-sm">Working Hours</p>
                  <p className="text-xs text-gray-500">9:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* WHY US */}
          <div className="mt-8 bg-blue-600 text-white p-5 rounded-xl shadow-md">
            <h4 className="font-semibold mb-3 text-base sm:text-lg">
              Why Capital Cleaning & Maintenance?
            </h4>

            <ul className="space-y-2 text-sm">
              <li>✔ Professional Cleaning & Maintenance Experts</li>
              <li>✔ Affordable Monthly & One-Time Services</li>
              <li>✔ Same Day Response Available</li>
              <li>✔ 100% Customer Satisfaction Guarantee</li>
            </ul>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-xl shadow-md sm:p-6 border border-gray-100">
          <BookingForm />
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
