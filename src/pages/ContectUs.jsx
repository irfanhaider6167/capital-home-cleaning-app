import React from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import {
  trackWhatsAppConversion,
  trackCallConversion,
  trackEmailConversion,
} from "../utils/googleAds";
import SEO from "../components/seo/SEO";

const ContactUs = () => {
  const whatsappLink =
    "https://wa.me/923137332085?text=Hi%20I%20want%20Cleaning%20and%20Maintenance%20service%20from%20Capital%20Cleaning%20and%20Maintenance";

  return (
    <>
      <SEO
        title="Contact Us | Capital Cleaning & Maintenance Islamabad & Rawalpindi"
        description="Contact Capital Cleaning & Maintenance for Sofa Cleaning, Carpet Cleaning, Home Deep Cleaning, Office Cleaning, Water Tank Cleaning, Painting, Plumbing and Electrical Services in Islamabad & Rawalpindi."
        keywords="Contact Cleaning Services Islamabad, Sofa Cleaning Islamabad, Carpet Cleaning Rawalpindi, Deep Cleaning, Water Tank Cleaning"
        url="https://capitalcleaning.site/contact"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50 px-4 py-12">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Professional Cleaning & Maintenance Services
          </h1>

          <p className="text-blue-600 font-semibold mt-2 text-lg">
            Islamabad & Rawalpindi
          </p>

          <p className="text-gray-600 mt-5 text-lg leading-8">
            Capital Cleaning & Maintenance provides professional Sofa Cleaning,
            Carpet Cleaning, Mattress Cleaning, Home Deep Cleaning, Office
            Cleaning, Water Tank Cleaning, Painting, Plumbing and Electrical
            Services with affordable pricing and guaranteed customer
            satisfaction.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppConversion}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-3 transition"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp Now
            </a>

            <a
              href="tel:+923137332085"
              onClick={trackCallConversion}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-3 transition"
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </div>
        </motion.div>

        {/* CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 bg-white rounded-3xl shadow-xl p-8"
        >
          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                <FaMapMarkerAlt className="text-blue-600 mt-1 text-xl" />

                <div>
                  <h3 className="font-semibold text-lg mb-3">Service Areas</h3>

                  <div className="grid sm:grid-cols-2 gap-4 text-gray-600">
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">
                        Islamabad
                      </h4>

                      <ul className="space-y-1 text-sm">
                        <li>✓ F-6</li>
                        <li>✓ F-7</li>
                        <li>✓ F-8</li>
                        <li>✓ F-10</li>
                        <li>✓ F-11</li>
                        <li>✓ G-9</li>
                        <li>✓ G-10</li>
                        <li>✓ G-11</li>
                        <li>✓ G-13</li>
                        <li>✓ E-11</li>
                        <li>✓ I-8</li>
                        <li>✓ I-9</li>
                        <li>✓ DHA Islamabad</li>
                        <li>✓ Bahria Enclave</li>
                        <li>✓ Bani Gala</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">
                        Rawalpindi
                      </h4>

                      <ul className="space-y-1 text-sm">
                        <li>✓ Bahria Town</li>
                        <li>✓ DHA Phase 1–5</li>
                        <li>✓ Askari 10</li>
                        <li>✓ Askari 14</li>
                        <li>✓ Gulraiz Housing Scheme</li>
                        <li>✓ Chaklala Scheme</li>
                        <li>✓ Satellite Town</li>
                        <li>✓ Saddar</li>
                        <li>✓ Westridge</li>
                        <li>✓ Lalazar</li>
                        <li>✓ Peshawar Road</li>
                        <li>✓ Adyala Road</li>
                        <li>✓ Commercial Market</li>
                        <li>✓ Gulistan Colony</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="tel:+923137332085"
                onClick={trackCallConversion}
                className="flex items-start gap-4 bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition"
              >
                <FaPhoneAlt className="text-blue-600 mt-1 text-xl" />

                <div>
                  <h3 className="font-semibold">Phone Number</h3>

                  <p className="text-gray-600">+92 313 7332085</p>
                </div>
              </a>

              <a
                href="mailto:capitalcleaningservices4@gmail.com"
                onClick={trackEmailConversion}
                className="flex items-start gap-4 bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition"
              >
                <FaEnvelope className="text-blue-600 mt-1 text-xl" />

                <div>
                  <h3 className="font-semibold">Email Address</h3>

                  <p className="text-gray-600 break-all">
                    capitalcleaningservices4@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                <FaClock className="text-blue-600 mt-1 text-xl" />

                <div>
                  <h3 className="font-semibold">Working Hours</h3>

                  <p className="text-gray-600">Monday - Sunday</p>

                  <p className="text-gray-600">9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* WHY US */}
            <div className="mt-8 bg-blue-600 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">
                Why Choose Capital Cleaning & Maintenance?
              </h3>

              <ul className="space-y-3">
                <li>✔ Experienced Cleaning Professionals</li>
                <li>✔ Same Day Service Available</li>
                <li>✔ Affordable Prices</li>
                <li>✔ Eco-Friendly Cleaning Products</li>
                <li>✔ 100% Customer Satisfaction</li>
                <li>✔ Residential & Commercial Services</li>
              </ul>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Services
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Home Deep Cleaning",
                  "Office Cleaning",
                  "Sofa Cleaning",
                  "Carpet Cleaning",
                  "Mattress Cleaning",
                  "Water Tank Cleaning",
                  "Painting",
                  "Plumbing",
                  "Electrical",
                ].map((service) => (
                  <div
                    key={service}
                    className="bg-blue-50 rounded-xl p-4 font-medium text-gray-700 hover:bg-blue-100 transition"
                  >
                    ✓ {service}
                  </div>
                ))}
              </div>

              {/* GOOGLE MAP */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Our Service Area
                </h3>

                <iframe
                  title="Capital Cleaning & Maintenance"
                  src="https://maps.google.com/maps?q=G-11%20Islamabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-72 rounded-2xl border"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold">
                Need Immediate Cleaning Service?
              </h2>

              <p className="mt-3 text-blue-100">
                Contact our expert team today for professional cleaning and
                maintenance services anywhere in Islamabad & Rawalpindi.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppConversion}
                  className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-xl font-semibold flex items-center gap-3 transition"
                >
                  <FaWhatsapp className="text-xl" />
                  Chat on WhatsApp
                </a>

                <a
                  href="tel:+923137332085"
                  onClick={trackCallConversion}
                  className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold flex items-center gap-3 transition"
                >
                  <FaPhoneAlt />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactUs;
