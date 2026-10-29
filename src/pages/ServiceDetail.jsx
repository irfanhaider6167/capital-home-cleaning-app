import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";
import { useParams, Link, useLocation } from "react-router-dom";
import { services } from "../data/servicesData";
import {
  trackWhatsAppConversion,
  trackCallConversion,
} from "../utils/googleAds";
import SEO from "../components/seo/SEO";
import { CITY_CONFIG } from "../config/cityConfig";

function ServiceDetail() {
  const { slug } = useParams();
  const location = useLocation();

  // Determine active city config based on URL
  const isLahore = location.pathname.startsWith("/lahore");
  const cityInfo = isLahore ? CITY_CONFIG.lahore : CITY_CONFIG.isb_rwp;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Service Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The service you are looking for does not exist.
        </p>
        <Link
          to={isLahore ? "/lahore/services" : "/services"}
          className="text-blue-600 font-semibold hover:underline"
        >
          &larr; Back to Services
        </Link>
      </div>
    );
  }

  const cleaningSlugs = [
    "home-deep-cleaning",
    "office-cleaning",
    "sofa-cleaning",
    "carpet-cleaning",
    "mattress-cleaning",
    "water-tank-cleaning",
    "solar-panel-cleaning",
  ];

  const processLabel = cleaningSlugs.includes(slug) ? "Cleaning" : "Service";

  const relatedServices = services
    .filter((item) => item.slug !== slug)
    .slice(0, 6);

  const whatsappLink = `${cityInfo.whatsappLink}?text=${encodeURIComponent(
    `Hi, I want to book ${service.title} in ${cityInfo.cityName}`,
  )}`;

  return (
    <>
      <SEO
        title={`${service.title} in ${cityInfo.cityName} | Capital Cleaning & Maintenance`}
        description={`Best ${service.title} services in ${cityInfo.cityName}. Fast response, professional staff & affordable pricing.`}
        keywords={`${service.title} ${cityInfo.cityName}, professional ${service.title.toLowerCase()}, top ${service.title.toLowerCase()} company`}
        url={`https://capitalcleaning.site${location.pathname}`}
        image={`https://capitalcleaning.site${service.hero}`}
      />

      <section className="bg-[#F9FBFF] min-h-screen py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl"
          >
            <img
              src={service.hero}
              alt={`${service.title} in ${cityInfo.cityName}`}
              className="w-full h-[300px] md:h-[450px] object-cover"
            />
          </motion.div>

          {/* TITLE & CITY BADGE */}
          <div className="mt-8 md:mt-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              📍 Service Location: {cityInfo.cityName}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
              {service.title} Services in{" "}
              <span className="text-blue-600">{cityInfo.cityName}</span>
            </h1>

            <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 leading-relaxed md:leading-8 max-w-4xl">
              {service.desc}
            </p>
          </div>

          {/* DYNAMIC SERVICE AREA */}
          <div className="mt-8 md:mt-10 bg-white rounded-2xl shadow-sm p-6 border-l-4 border-blue-600">
            <h2 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2 text-gray-900">
              <FaMapMarkerAlt className="text-blue-600" />
              Service Areas in {cityInfo.cityName}
            </h2>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed md:leading-7">
              Capital Cleaning & Maintenance provides top-quality{" "}
              <span className="font-semibold">{service.title}</span> services
              across{" "}
              <span className="font-bold text-gray-800">
                {cityInfo.cityName}
              </span>
              , covering {cityInfo.areas}.
            </p>
          </div>

          {/* BEFORE & AFTER */}
          {service.before && service.after && (
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 mt-12 md:mt-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm uppercase tracking-wide">
                    Before
                  </span>
                  {processLabel}
                </h2>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <img
                    src={service.before}
                    alt={`${service.title} before ${processLabel.toLowerCase()} in ${cityInfo.cityName}`}
                    className="w-full h-64 md:h-80 object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-sm uppercase tracking-wide">
                    After
                  </span>
                  {processLabel}
                </h2>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <img
                    src={service.after}
                    alt={`${service.title} after ${processLabel.toLowerCase()} in ${cityInfo.cityName}`}
                    className="w-full h-64 md:h-80 object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              </motion.div>
            </div>
          )}

          {/* FEATURES */}
          {service.features && service.features.length > 0 && (
            <div className="mt-16 md:mt-20">
              <div className="mb-8 md:mb-10 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  What's Included in Our {cityInfo.cityName} Service
                </h2>
                <div className="w-20 h-1 bg-blue-600 mt-4 mx-auto md:mx-0 rounded-full"></div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-md p-4 md:p-5 flex items-start gap-3 transition border border-gray-50"
                  >
                    <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium text-sm md:text-base">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* DYNAMIC CTA BANNER */}
          <div className="mt-16 md:mt-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl md:rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              Need Professional {service.title}{" "}
              <br className="hidden md:block" /> in {cityInfo.cityName}?
            </h2>
            <p className="mt-4 text-blue-100 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Get in touch with our {cityInfo.cityName} team for instant
              booking, free estimates, and professional doorstep services today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-10">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppConversion}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-6 md:px-8 py-3.5 rounded-xl font-bold hover:bg-gray-50 hover:shadow-lg transition-all w-full sm:w-auto"
              >
                <FaWhatsapp className="text-2xl text-green-500" />
                WhatsApp {cityInfo.cityName}
              </a>

              <a
                href={`tel:${cityInfo.phone.replace(/[^0-9+]/g, "")}`}
                onClick={trackCallConversion}
                className="inline-flex items-center justify-center gap-2 bg-blue-900/50 text-white px-6 md:px-8 py-3.5 rounded-xl font-bold hover:bg-blue-900 border border-blue-500/30 transition-all w-full sm:w-auto"
              >
                <FaPhoneAlt className="text-lg text-blue-300" />
                Call: {cityInfo.phone}
              </a>
            </div>
          </div>

          {/* RELATED SERVICES */}
          {relatedServices.length > 0 && (
            <div className="mt-20 md:mt-28">
              <div className="text-center mb-10 md:mb-14">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  Other Services in {cityInfo.cityName}
                </h2>
                <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                  Explore our other professional cleaning and maintenance
                  solutions available across {cityInfo.cityName}.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {relatedServices.map((relatedService) => (
                  <Link
                    key={relatedService.slug}
                    to={
                      isLahore
                        ? `/lahore/service/${relatedService.slug}`
                        : `/service/${relatedService.slug}`
                    }
                    className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    <div className="overflow-hidden relative h-48 md:h-52">
                      <img
                        src={relatedService.hero}
                        alt={`${relatedService.title} in ${cityInfo.cityName}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {relatedService.title}
                      </h3>
                      <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-3 flex-grow">
                        {relatedService.desc}
                      </p>
                      <div className="mt-5 flex items-center gap-2 text-blue-600 font-semibold text-sm">
                        View Service Details
                        <FaArrowRight className="group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default ServiceDetail;
