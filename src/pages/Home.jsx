import React, { useMemo } from "react";
import Hero from "../components/Hero";
import ServicesPage from "./ServicesPage";
import Testimonials from "../components/Testimonials";
import SEO from "../components/seo/SEO";
import { Link, useLocation } from "react-router-dom";
import { CITY_CONFIG } from "../config/cityConfig";

function Home() {
  const location = useLocation();

  // Active City Config load karein
  const isLahore = location.pathname.startsWith("/lahore");
  const cityInfo = isLahore ? CITY_CONFIG.lahore : CITY_CONFIG.isb_rwp;

  const services = useMemo(
    () => [
      { title: "Home Deep Cleaning", slug: "home-deep-cleaning" },
      { title: "Office Cleaning", slug: "office-cleaning" },
      { title: "Sofa Cleaning", slug: "sofa-cleaning" },
      { title: "Carpet Cleaning", slug: "carpet-cleaning" },
      { title: "Mattress Cleaning", slug: "mattress-cleaning" },
      { title: "Water Tank Cleaning", slug: "water-tank-cleaning" },
      { title: "Solar Panel Cleaning", slug: "solar-panel-cleaning" },
      { title: "Painting Services", slug: "painting" },
      { title: "Plumbing Services", slug: "plumbing" },
      { title: "Electrical Services", slug: "electrical" },
    ],
    [],
  );

  // Helper function for dynamic routing
  const getServicePath = (slug) => {
    return isLahore ? `/lahore/service/${slug}` : `/service/${slug}`;
  };

  return (
    <>
      <SEO
        title={`Cleaning & Maintenance Services in ${cityInfo.cityName} | Capital Cleaning`}
        description={`Capital Cleaning & Maintenance provides professional cleaning and maintenance services in ${cityInfo.cityName}, including deep cleaning, sofa cleaning, carpet cleaning, mattress cleaning, water tank cleaning, solar panel cleaning, painting, plumbing, and electrical services.`}
        keywords={`cleaning services ${cityInfo.cityName}, cleaning and maintenance services ${cityInfo.cityName}, home deep cleaning ${cityInfo.cityName}, office cleaning ${cityInfo.cityName}, sofa cleaning ${cityInfo.cityName}, carpet cleaning ${cityInfo.cityName}, mattress cleaning ${cityInfo.cityName}, water tank cleaning ${cityInfo.cityName}, solar panel cleaning ${cityInfo.cityName}, painting services, plumbing services, electrical services`}
        url={`https://capitalcleaning.site${location.pathname}`}
      />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <ServicesPage />

      {/* Internal Service Links Section */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 md:text-3xl">
            Our Professional Services in {cityInfo.cityName}
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={getServicePath(service.slug)}
                className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}

export default Home;
