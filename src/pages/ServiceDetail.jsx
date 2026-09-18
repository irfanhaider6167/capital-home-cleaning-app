import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import { services } from "../data/servicesData";
import { trackWhatsAppConversion } from "../utils/googleAds";
import SEO from "../components/seo/SEO";

function ServiceDetail() {
  const { slug } = useParams();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">Service Not Found</h1>
      </div>
    );
  }

  // Pest Control services
  const pestControlSlugs = [
    "pest-control",
    "bed-bug-control",
    "termite-control",
    "cockroach-control",
  ];

  // Cleaning services
  const cleaningSlugs = [
    "home-deep-cleaning",
    "office-cleaning",
    "sofa-cleaning",
    "carpet-cleaning",
    "mattress-cleaning",
    "water-tank-cleaning",
  ];

  // Correct wording for Before / After sections
  const processLabel = pestControlSlugs.includes(slug)
    ? "Treatment"
    : cleaningSlugs.includes(slug)
      ? "Cleaning"
      : "Service";

  // Pest Control Sub-services
  const pestSubServices = services.filter((item) =>
    ["bed-bug-control", "termite-control", "cockroach-control"].includes(
      item.slug,
    ),
  );

  // ==========================================
  // PEST CONTROL MAIN PAGE
  // ONLY 3 SUB-SERVICE CARDS
  // ==========================================
  if (slug === "pest-control") {
    return (
      <>
        <SEO
          title="Pest Control Islamabad & Rawalpindi | Capital Cleaning & Maintenance"
          description={service.desc}
          keywords="pest control Islamabad, pest control Rawalpindi, bed bug control Islamabad, termite control Islamabad, cockroach control Islamabad"
          url="https://capitalcleaning.site/service/pest-control"
          image={`https://capitalcleaning.site${service.hero}`}
        />

        <section className="bg-[#F9FBFF] min-h-screen py-5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Pest Control Services
              </h1>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pestSubServices.map((subService) => (
                <Link
                  key={subService.slug}
                  to={`/service/${subService.slug}`}
                  className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                >
                  <div className="overflow-hidden">
                    <img
                      src={subService.hero}
                      alt={`${subService.title} in Islamabad and Rawalpindi`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-7">
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                      {subService.title}
                    </h2>

                    <p className="mt-4 text-gray-600 leading-7">
                      {subService.desc}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold">
                      View Service
                      <FaArrowRight className="text-sm group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  // ==========================================
  // OTHER SERVICE DETAIL PAGES
  // ==========================================

  const relatedServices = services
    .filter(
      (item) =>
        item.slug !== slug &&
        !["bed-bug-control", "termite-control", "cockroach-control"].includes(
          item.slug,
        ),
    )
    .slice(0, 6);

  // WhatsApp booking link
  const whatsappLink = `https://wa.me/923137332085?text=${encodeURIComponent(
    `Hi, I want to book ${service.title}`,
  )}`;

  return (
    <>
      <SEO
        title={`${service.title} Islamabad & Rawalpindi | Capital Cleaning & Maintenance`}
        description={service.desc}
        keywords={`${service.title} Islamabad, ${service.title} Rawalpindi, ${service.title} Islamabad & Rawalpindi, Capital Cleaning & Maintenance`}
        url={`https://capitalcleaning.site/service/${service.slug}`}
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
              alt={`${service.title} in Islamabad and Rawalpindi`}
              className="w-full h-[450px] object-cover"
            />
          </motion.div>

          {/* TITLE */}
          <div className="mt-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {service.title}
            </h1>

            <p className="mt-5 text-lg text-gray-600 leading-8">
              {service.desc}
            </p>
          </div>

          {/* SERVICE AREA */}
          <div className="mt-10 bg-white rounded-3xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600" />
              Service Areas
            </h2>

            <p className="text-gray-600 leading-7">
              Capital Cleaning & Maintenance provides professional{" "}
              {service.title} services in Islamabad and Rawalpindi including
              Bahria Town, DHA Islamabad, DHA Rawalpindi, F-6, F-7, F-8, F-10,
              F-11, E-11, G-10, G-11, I-8, Gulberg and surrounding areas.
            </p>
          </div>

          {/* BEFORE & AFTER */}
          <div className="grid md:grid-cols-2 gap-10 mt-14">
            {/* BEFORE */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Before {processLabel}</h2>

              <img
                src={service.before}
                alt={`${service.title} before ${processLabel.toLowerCase()} in Islamabad and Rawalpindi`}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* AFTER */}
            <div>
              <h2 className="text-2xl font-bold mb-4">After {processLabel}</h2>

              <img
                src={service.after}
                alt={`${service.title} after ${processLabel.toLowerCase()} in Islamabad and Rawalpindi`}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* FEATURES */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">
              What's Included in Our Service
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
                  Related Services
                </h2>

                <p className="mt-3 text-gray-600">
                  Explore our other professional cleaning and maintenance
                  services in Islamabad & Rawalpindi.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedServices.map((relatedService) => (
                  <Link
                    key={relatedService.slug}
                    to={`/service/${relatedService.slug}`}
                    className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={relatedService.hero}
                        alt={`${relatedService.title} in Islamabad and Rawalpindi`}
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

          {/* CTA */}
          <div className="mt-20 bg-blue-600 rounded-3xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold">
              Need Professional {service.title}?
            </h2>

            <p className="mt-3 text-blue-100">
              Contact Capital Cleaning & Maintenance today and book your
              professional {service.title} service in Islamabad & Rawalpindi.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppConversion}
              className="inline-flex items-center gap-3 mt-8 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              <FaWhatsapp className="text-2xl" />
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceDetail;
