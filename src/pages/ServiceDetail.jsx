import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { services } from "../data/servicesData";
import { trackWhatsAppConversion } from "../utils/googleAds";

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

  const whatsappLink = `https://wa.me/923137332085?text=${encodeURIComponent(
    `Hi, I want to book ${service.title}`,
  )}`;

  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Image */}
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src={service.hero}
            alt={service.title}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Title */}
        <div className="mt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {service.title}
          </h1>

          <p className="mt-5 text-lg text-gray-600 leading-8">{service.desc}</p>
        </div>

        {/* Before / After */}
        <div className="grid md:grid-cols-2 gap-10 mt-14">
          <div>
            <h2 className="text-2xl font-bold mb-4">Before Cleaning</h2>

            <img
              src={service.before}
              alt={`${service.title} Before`}
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">After Cleaning</h2>

            <img
              src={service.after}
              alt={`${service.title} After`}
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">What's Included</h2>

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

        {/* CTA */}
        <div className="mt-20 bg-blue-600 rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold">
            Need Professional {service.title}?
          </h2>

          <p className="mt-3 text-blue-100">
            Contact our expert team today and book your service in just one
            click.
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
  );
}

export default ServiceDetail;
