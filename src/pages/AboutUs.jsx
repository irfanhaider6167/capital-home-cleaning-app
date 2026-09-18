import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { trackWhatsAppConversion } from "../utils/googleAds";

const AboutUs = () => {
  const whatsappLink =
    "https://wa.me/923137332085?text=Hi%20I%20want%20to%20book%20Capital%20Cleaning%20and%20Maintenance%20services";

  const services = [
    {
      name: "Home Deep Cleaning",
      slug: "home-deep-cleaning",
    },
    {
      name: "Office Cleaning",
      slug: "office-cleaning",
    },
    {
      name: "Sofa Cleaning",
      slug: "sofa-cleaning",
    },
    {
      name: "Carpet Cleaning",
      slug: "carpet-cleaning",
    },
    {
      name: "Mattress Cleaning",
      slug: "mattress-cleaning",
    },
    {
      name: "Kitchen Cleaning",
      slug: null,
    },
    {
      name: "Washroom Cleaning",
      slug: null,
    },
    {
      name: "Water Tank Cleaning",
      slug: "water-tank-cleaning",
    },
    {
      name: "Pest Control",
      slug: "pest-control",
    },
    {
      name: "Bed Bug Control",
      slug: "bed-bug-control",
    },
    {
      name: "Termite Control",
      slug: "termite-control",
    },
    {
      name: "Cockroach Control",
      slug: "cockroach-control",
    },
    {
      name: "Painting Services",
      slug: "painting",
    },
    {
      name: "Plumbing Services",
      slug: "plumbing",
    },
    {
      name: "Electrical Services",
      slug: "electrical",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          About Capital Cleaning & Maintenance | Cleaning, Pest Control &
          Maintenance Services Islamabad & Rawalpindi
        </title>

        <meta
          name="description"
          content="Learn about Capital Cleaning & Maintenance. We provide professional cleaning, pest control and maintenance services in Islamabad & Rawalpindi, including home deep cleaning, sofa, carpet, mattress and water tank cleaning, bed bug, termite and cockroach control, painting, plumbing and electrical services."
        />

        <meta
          name="keywords"
          content="About Capital Cleaning, cleaning company Islamabad, cleaning company Rawalpindi, pest control Islamabad, pest control Rawalpindi, maintenance services Islamabad, maintenance services Rawalpindi, sofa cleaning Islamabad, carpet cleaning Islamabad, home deep cleaning Islamabad, mattress cleaning Islamabad, water tank cleaning Islamabad, bed bug control Islamabad, termite control Islamabad, cockroach control Islamabad, painting services Islamabad, plumbing services Islamabad, electrical services Islamabad"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://capitalcleaning.site/about" />

        <meta
          property="og:title"
          content="About Capital Cleaning & Maintenance"
        />

        <meta
          property="og:description"
          content="Professional cleaning, pest control and maintenance services in Islamabad & Rawalpindi."
        />

        <meta property="og:url" content="https://capitalcleaning.site/about" />

        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-[#F9FBFF] px-4 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#111827]">
            About{" "}
            <span className="text-[#1D4ED8]">
              Capital Cleaning & Maintenance
            </span>
          </h1>

          <p className="text-gray-600 mt-5 text-lg leading-relaxed">
            Professional Cleaning, Pest Control & Maintenance Services in
            Islamabad and Rawalpindi. We provide reliable solutions for homes,
            apartments, offices and commercial properties.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto bg-white shadow-lg rounded-3xl p-8 md:p-12 border border-gray-100"
        >
          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold text-[#111827] mb-5">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Capital Cleaning & Maintenance is a professional service company
              serving Islamabad and Rawalpindi. We provide cleaning, pest
              control and maintenance solutions for homes, apartments, offices
              and commercial properties.
              <br />
              <br />
              Our cleaning services include sofa cleaning, carpet cleaning,
              mattress cleaning, kitchen cleaning, washroom cleaning, home deep
              cleaning, office cleaning and water tank cleaning. We use
              professional equipment and suitable cleaning methods to help
              maintain clean, hygienic and comfortable spaces.
              <br />
              <br />
              We also provide professional pest control services including bed
              bug control, termite control and cockroach control. In addition,
              our maintenance services include painting, plumbing and electrical
              solutions for residential and commercial properties.
              <br />
              <br />
              We proudly serve customers across Islamabad and Rawalpindi,
              including Bahria Town, DHA Islamabad, DHA Rawalpindi, F-6, F-7,
              F-8, F-10, F-11, E-11, G-10, G-11, I-8, Gulberg Islamabad and
              surrounding areas.
            </p>
          </motion.div>

          {/* Services */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#111827] mb-5">
              Our Cleaning, Pest Control & Maintenance Services
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              {services.map((service, index) =>
                service.slug ? (
                  <Link
                    key={index}
                    to={`/service/${service.slug}`}
                    className="group bg-[#F3F6FF] p-4 rounded-xl text-gray-700 shadow-sm border border-transparent hover:border-blue-200 hover:bg-blue-50 hover:shadow-md transition-all duration-300 flex items-center justify-between gap-3"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">✔</span>

                      <span className="group-hover:text-[#1D4ED8] group-hover:font-semibold transition">
                        {service.name}
                      </span>
                    </span>

                    <span className="text-[#1D4ED8] opacity-0 group-hover:opacity-100 transition-all duration-300">
                      →
                    </span>
                  </Link>
                ) : (
                  <div
                    key={index}
                    className="bg-[#F3F6FF] p-4 rounded-xl text-gray-700 shadow-sm flex items-center gap-2"
                  >
                    <span className="text-green-600 font-bold">✔</span>
                    <span>{service.name}</span>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="bg-[#F3F6FF] p-6 rounded-2xl shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#1D4ED8] mb-3">
                Our Mission
              </h3>

              <p className="text-gray-600">
                To provide reliable and professional cleaning, pest control and
                maintenance solutions in Islamabad and Rawalpindi while
                maintaining quality, convenience and customer satisfaction.
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
                To become a trusted service provider in Islamabad and Rawalpindi
                by delivering dependable cleaning, pest control and maintenance
                services with professional standards.
              </p>
            </motion.div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-5">
              Why Choose Capital Cleaning & Maintenance?
            </h3>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <p>✔ Experienced Service Professionals</p>
              <p>✔ Professional Cleaning Equipment</p>
              <p>✔ Cleaning & Pest Control Services</p>
              <p>✔ Painting, Plumbing & Electrical Services</p>
              <p>✔ Residential & Commercial Services</p>
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
              Book Your Service Today 🚀
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutUs;
