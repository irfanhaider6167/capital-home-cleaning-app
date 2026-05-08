import { motion } from "framer-motion";
import { FaHome, FaBuilding, FaBroom, FaTools } from "react-icons/fa";

function Services() {
  const whatsappLink =
    "https://wa.me/923137332085?text=Hi%20I%20want%20Capital%20Cleaning%20and%20Maintenance%20service";

  // CLEANING CATEGORY
  const cleaningServices = [
    {
      title: "House Cleaning",
      desc: "Complete home cleaning with trained professionals.",
      icon: <FaHome />,
      before: "/house-cleaning-b-final.jpg",
      after: "/house-cleaning-a-final.jpg",
    },
    {
      title: "Deep Cleaning",
      desc: "Deep and detailed cleaning for every corner.",
      icon: <FaBroom />,
      before: "/deep-cleaning-b-final.webp",
      after: "/deep-cleaning-a-final.webp",
    },
    {
      title: "Office Cleaning",
      desc: "Clean and productive workspace.",
      icon: <FaBuilding />,
      before: "/office-cleaning-b-final.jpg",
      after: "/office-cleaning-a-final.jpg",
    },
  ];

  // MAINTENANCE CATEGORY
  const maintenanceServices = [
    {
      title: "Painting",
      desc: "Wall painting & finishing",
      icon: <FaTools />,
      before: "/paint-b-final.jpg",
      after: "/paint-a-final.jpg",
    },
    {
      title: "Plumbing",
      desc: "Leak fixing & pipe work",
      icon: <FaTools />,
      before: "/plumbring-b-final.jpg",
      after: "/plumbring-a-final.jpg",
    },
    {
      title: "Electrical",
      desc: "Wiring & repair work",
      icon: <FaTools />,
      before: "/electrition-b-final.jpg",
      after: "/electrition-a-final.webp",
    },
    {
      title: "AC",
      desc: "AC installation & repair work",
      icon: <FaTools />,
      before: "/ac-b-final.webp",
      after: "/ac-a-final.webp",
    },
  ];

  const renderCard = (service, index) => {
    return (
      <motion.div
        key={index}
        whileHover={{ y: -10 }}
        className="bg-white rounded-2xl overflow-hidden shadow-md border"
      >
        {/* BEFORE */}
        <div className="relative h-40">
          <img
            src={service.before}
            alt="before"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            Before
          </div>
        </div>

        {/* AFTER */}
        <div className="relative h-40">
          <img
            src={service.after}
            alt="after"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
            After
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5 text-center">
          <div className="text-3xl text-[#2563EB] mb-2 flex justify-center">
            {service.icon}
          </div>

          <h3 className="font-semibold">{service.title}</h3>
          <p className="text-gray-600 text-sm">{service.desc}</p>

          {/* CTA ONLY */}
          <a
            href={whatsappLink}
            target="_blank"
            className="mt-4 block bg-[#2563EB] text-white px-4 py-2 rounded-lg text-sm"
          >
            Book Now
          </a>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-10 bg-[#EFF6FF]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
          Our <span className="text-[#2563EB]">Services</span>
        </h2>

        {/* CLEANING */}
        <h3 className="mt-7 pl-5 text-left text-2xl font-semibold">
          Cleaning Services 🧼
        </h3>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {cleaningServices.map((s, i) => renderCard(s, i))}
        </div>

        {/* MAINTENANCE */}
        <h3 className="mt-10 text-left pl-5 text-2xl font-semibold">
          Maintenance Services 🛠️
        </h3>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {maintenanceServices.map((s, i) => renderCard(s, i))}
        </div>
      </div>
    </section>
  );
}

export default Services;
