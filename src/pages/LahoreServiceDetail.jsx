import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import { services } from "../data/servicesData";
import { trackWhatsAppConversion } from "../utils/googleAds";
import SEO from "../components/seo/SEO";
import { CITY_CONFIG } from "../config/cityConfig";

function LahoreServiceDetail() {
  const { slug } = useParams();
  const lahoreConfig = CITY_CONFIG.lahore;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">Service Not Found</h1>
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

  const lahoreWhatsappLink = `${lahoreConfig.whatsappLink}?text=${encodeURIComponent(
    `Hi, I want to book ${service.title} in Lahore`,
  )}`;

  return (
    <>
      <SEO
        title={`${service.title} Lahore | Capital Cleaning & Maintenance`}
        description={`Best ${service.title} services in Lahore. Fast response, professional staff & affordable pricing across DHA, Gulberg, Bahria Town Lahore & all main sectors.`}
        keywords={`${service.title} Lahore, sofa cleaning Lahore, home deep cleaning Lahore, carpet cleaning Lahore`}
        url={`https://capitalcleaning.site/lahore/service/${service.slug}`}
        image={`https://capitalcleaning.site${service.hero}`}
      />

      <section className="bg-[#F9FBFF] min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src={service.hero}
              alt={`${service.title} in Lahore`}
              className="w-full h-[450px] object-cover"
            />
          </motion.div>

          {/* TITLE & CITY BADGE */}
          <div className="mt-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
              📍 Service Location: Lahore
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
              {service.title} Services in Lahore
            </h1>

            <p className="mt-5 text-lg text-gray-600 leading-8">
              {service.desc}
            </p>
          </div>

          {/* LAHORE SERVICE AREA */}
          <div className="mt-10 bg-white rounded-3xl shadow-md p-6 border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-gray-900">
              <FaMapMarkerAlt className="text-blue-600" />
              Service Areas in Lahore
            </h2>

            <p className="text-gray-600 leading-7">
              Capital Cleaning & Maintenance provides top-quality{" "}
              {service.title} services across **Lahore**, covering{" "}
              {lahoreConfig.areas}.
            </p>
          </div>

          {/* BEFORE & AFTER */}
          <div className="grid md:grid-cols-2 gap-10 mt-14">
            <div>
              <h2 className="text-2xl font-bold mb-4">Before {processLabel}</h2>
              <img
                src={service.before}
                alt={`${service.title} before ${processLabel.toLowerCase()} in Lahore`}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">After {processLabel}</h2>
              <img
                src={service.after}
                alt={`${service.title} after ${processLabel.toLowerCase()} in Lahore`}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* FEATURES */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">
              What's Included in Our Lahore Service
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-3 hover:shadow-xl transition"
                >
                  <FaCheckCircle className="text-green-600 text-xl" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RELATED SERVICES */}
          {relatedServices.length > 0 && (
            <div className="mt-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Other Services in Lahore
                </h2>
                <p className="mt-3 text-gray-600">
                  Explore our other professional cleaning services available in
                  Lahore.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedServices.map((relatedService) => (
                  <Link
                    key={relatedService.slug}
                    to={`/lahore/service/${relatedService.slug}`}
                    className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={relatedService.hero}
                        alt={`${relatedService.title} in Lahore`}
                        className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                        {relatedService.title}
                      </h3>
                      <p className="mt-3 text-gray-600 leading-7 line-clamp-3">
                        {relatedService.desc}
                      </p>
                      <div className="mt-5 flex items-center gap-2 text-blue-600 font-semibold">
                        View Service
                        <FaArrowRight className="text-sm group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* LAHORE CTA BANNER */}
          <div className="mt-20 bg-blue-600 rounded-3xl p-10 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold">
              Need Professional {service.title} in Lahore?
            </h2>
            <p className="mt-3 text-blue-100 max-w-xl mx-auto">
              Get in touch with our Lahore team for instant booking, free
              estimates, and doorstep services.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a
                href={lahoreWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppConversion}
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition shadow-md w-full sm:w-auto justify-center"
              >
                <FaWhatsapp className="text-2xl text-green-500" />
                WhatsApp Lahore Team
              </a>

              <a
                href={`tel:${lahoreConfig.phone}`}
                className="inline-flex items-center gap-3 bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-900 transition shadow-md w-full sm:w-auto justify-center"
              >
                <FaPhoneAlt className="text-lg" />
                Call Lahore: {lahoreConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LahoreServiceDetail;
