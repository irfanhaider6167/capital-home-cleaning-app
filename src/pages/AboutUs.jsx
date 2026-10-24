import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { trackWhatsAppConversion } from "../utils/googleAds";
import { CITY_CONFIG } from "../config/cityConfig";

const AboutUs = () => {
  const location = useLocation();

  // URL check karke active city config set karein
  const isLahore = location.pathname.startsWith("/lahore");
  const cityInfo = isLahore ? CITY_CONFIG.lahore : CITY_CONFIG.isb_rwp;

  const whatsappLink = `${cityInfo.whatsappLink}?text=${encodeURIComponent(
    `Hi, I want to book Capital Cleaning and Maintenance services in ${cityInfo.cityName}`,
  )}`;

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
      name: "Solar Panel Cleaning",
      slug: "solar-panel-cleaning",
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
          About Capital Cleaning & Maintenance | Lahore, Islamabad & Rawalpindi
        </title>

        <meta
          name="description"
          content="Learn about Capital Cleaning & Maintenance. We provide professional cleaning and maintenance services in Lahore, Islamabad & Rawalpindi, including home deep cleaning, sofa, carpet, mattress, water tank, and solar panel cleaning, painting, plumbing, and electrical services."
        />

        <meta
          name="keywords"
          content="About Capital Cleaning, cleaning company Lahore, cleaning company Islamabad, cleaning company Rawalpindi, maintenance services Lahore, maintenance services Islamabad, maintenance services Rawalpindi, sofa cleaning Lahore, carpet cleaning Lahore, home deep cleaning Lahore, mattress cleaning Lahore, water tank cleaning Lahore, solar panel cleaning Lahore, painting services, plumbing services, electrical services"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href={`https://capitalcleaning.site${location.pathname}`}
        />

        <meta
          property="og:title"
          content="About Capital Cleaning & Maintenance"
        />

        <meta
          property="og:description"
          content="Professional cleaning and maintenance services in Lahore, Islamabad & Rawalpindi."
        />

        <meta
          property="og:url"
          content={`https://capitalcleaning.site${location.pathname}`}
        />

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
            Professional Cleaning & Maintenance Services in Lahore, Islamabad,
            and Rawalpindi. We provide reliable solutions for homes, apartments,
            offices, and commercial properties.
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
              Capital Cleaning & Maintenance is a premier service company
              serving Lahore, Islamabad, and Rawalpindi. We provide professional
              cleaning and maintenance solutions for homes, apartments, offices,
              and commercial properties.
              <br />
              <br />
              Our cleaning services include sofa cleaning, carpet cleaning,
              mattress cleaning, kitchen cleaning, washroom cleaning, home deep
              cleaning, office cleaning, solar panel cleaning, and water tank
              cleaning. We use modern equipment and eco-friendly techniques to
              ensure clean, hygienic, and comfortable spaces.
              <br />
              <br />
              In addition, our maintenance services offer comprehensive
              painting, plumbing, and electrical solutions tailored for
              residential and commercial spaces.
              <br />
              <br />
              We proudly serve customers across major locations including DHA
              Lahore, Gulberg, Bahria Town Lahore, Bahria Town Rawalpindi, DHA
              Islamabad, F & G Sectors, I-8, Gulberg Islamabad, and surrounding
              areas.
            </p>
          </motion.div>

          {/* Services */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#111827] mb-5">
              Our Cleaning & Maintenance Services
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              {services.map((service, index) => {
                const targetPath = isLahore
                  ? `/lahore/service/${service.slug}`
                  : `/service/${service.slug}`;

                return service.slug ? (
                  <Link
                    key={index}
                    to={targetPath}
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
                );
              })}
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
                To provide reliable, high-quality, and affordable cleaning and
                maintenance solutions across Lahore, Islamabad, and Rawalpindi
                while ensuring complete customer satisfaction and convenience.
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
                To be the most trusted and preferred service provider in Lahore,
                Islamabad, and Rawalpindi by delivering top-tier cleaning and
                maintenance services with professional standards.
              </p>
            </motion.div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-5">
              Why Choose Capital Cleaning & Maintenance?
            </h3>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <p>✔ Trained & Vetted Service Professionals</p>
              <p>✔ Advanced Cleaning Equipment & Methods</p>
              <p>✔ Residential & Commercial Deep Cleaning</p>
              <p>✔ Painting, Plumbing & Electrical Services</p>
              <p>✔ Full Lahore, Islamabad & Rawalpindi Coverage</p>
              <p>✔ Transparent & Affordable Pricing</p>
              <p>✔ Dedicated Support & Quick Response</p>
              <p>✔ Instant WhatsApp Booking Support</p>
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
