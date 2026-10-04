import Hero from "../components/Hero";
import ServicesPage from "./ServicesPage";
import Testimonials from "../components/Testimonials";
import SEO from "../components/seo/SEO";

function Home() {
  return (
    <>
      <SEO
        title="Cleaning & Maintenance Services in Islamabad & Rawalpindi | Capital Cleaning"
        description="Capital Cleaning & Maintenance provides professional cleaning, pest control and maintenance services in Islamabad & Rawalpindi, including deep cleaning, sofa cleaning, carpet cleaning, mattress cleaning, water tank cleaning, termite control, cockroach control and bed bug control."
        keywords="cleaning services Islamabad, cleaning services Rawalpindi, cleaning and maintenance services Islamabad, cleaning and maintenance services Rawalpindi, home deep cleaning Islamabad, home deep cleaning Rawalpindi, office cleaning Islamabad, sofa cleaning Islamabad, carpet cleaning Islamabad, mattress cleaning Islamabad, water tank cleaning Islamabad, pest control Islamabad, pest control Rawalpindi, termite control Islamabad, cockroach control Islamabad, bed bug control Islamabad, plumbing services Islamabad"
        url="https://capitalcleaning.site/"
      />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <ServicesPage />

      {/* Internal Service Links */}
      {/* <section className="bg-blue-50 px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 md:text-3xl">
            Our Professional Services
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            <a
              href="/service/home-deep-cleaning"
              className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
            >
              Home Deep Cleaning
            </a>

            <a
              href="/service/sofa-cleaning"
              className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
            >
              Sofa Cleaning
            </a>

            <a
              href="/service/carpet-cleaning"
              className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
            >
              Carpet Cleaning
            </a>

            <a
              href="/service/mattress-cleaning"
              className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
            >
              Mattress Cleaning
            </a>

            <a
              href="/service/water-tank-cleaning"
              className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
            >
              Water Tank Cleaning
            </a>

            <a
              href="/service/termite-control"
              className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
            >
              Termite Control
            </a>

            <a
              href="/service/cockroach-control"
              className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
            >
              Cockroach Control
            </a>

            <a
              href="/service/bed-bug-control"
              className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
            >
              Bed Bug Control
            </a>

            <a
              href="/services"
              className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
            >
              View All Services
            </a>

            <a
              href="/contact"
              className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section> */}

      {/* SEO Content */}
      <section className="bg-white px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Cleaning & Maintenance Services in Islamabad & Rawalpindi
          </h2>

          <div className="space-y-5 text-base leading-8 text-gray-600 md:text-lg">
            <p>
              Capital Cleaning & Maintenance provides professional cleaning,
              pest control and maintenance services in Islamabad and Rawalpindi
              for homes, apartments, offices and commercial properties. Our
              services are designed to help customers maintain clean, hygienic,
              comfortable and well-maintained spaces with reliable service and
              professional workmanship.
            </p>

            <p>
              Our cleaning services include{" "}
              <a
                href="/service/home-deep-cleaning"
                className="font-medium text-blue-700 hover:underline"
              >
                home deep cleaning
              </a>
              , office cleaning,{" "}
              <a
                href="/service/sofa-cleaning"
                className="font-medium text-blue-700 hover:underline"
              >
                sofa cleaning
              </a>
              ,{" "}
              <a
                href="/service/carpet-cleaning"
                className="font-medium text-blue-700 hover:underline"
              >
                carpet cleaning
              </a>
              ,{" "}
              <a
                href="/service/mattress-cleaning"
                className="font-medium text-blue-700 hover:underline"
              >
                mattress cleaning
              </a>{" "}
              and{" "}
              <a
                href="/service/water-tank-cleaning"
                className="font-medium text-blue-700 hover:underline"
              >
                water tank cleaning
              </a>
              . Whether you need complete home deep cleaning or a specific
              cleaning service, we can assist with your requirements and arrange
              a convenient service time.
            </p>

            <p>
              We also provide professional pest control services in Islamabad
              and Rawalpindi, including{" "}
              <a
                href="/service/termite-control"
                className="font-medium text-blue-700 hover:underline"
              >
                termite control
              </a>
              ,{" "}
              <a
                href="/service/cockroach-control"
                className="font-medium text-blue-700 hover:underline"
              >
                cockroach control
              </a>{" "}
              and{" "}
              <a
                href="/service/bed-bug-control"
                className="font-medium text-blue-700 hover:underline"
              >
                bed bug control
              </a>
              . Our pest control services are available for residential and
              commercial properties and are designed to help control common pest
              infestations in affected areas.
            </p>

            <p>
              In addition to cleaning and pest control, we provide maintenance
              services in Islamabad and Rawalpindi, including professional
              plumbing services. Our maintenance services are available for
              homes, apartments, offices and commercial properties.
            </p>

            <p>
              Our sofa cleaning, carpet cleaning and mattress cleaning services
              help remove accumulated dust, stains and unpleasant odors. Our
              home deep cleaning service covers important areas of your property
              according to the required cleaning work. We also provide
              underground and overhead water tank cleaning using suitable
              professional equipment.
            </p>

            <p>
              For offices and workplaces, our office cleaning services help
              maintain a cleaner and more organized working environment. Our
              maintenance services can also assist with common plumbing
              requirements for residential and commercial properties.
            </p>

            <p>
              If you are looking for cleaning, pest control or maintenance
              services in Islamabad or Rawalpindi, Capital Cleaning &
              Maintenance is ready to assist. Visit our{" "}
              <a
                href="/services"
                className="font-medium text-blue-700 hover:underline"
              >
                services page
              </a>{" "}
              to explore available services or{" "}
              <a
                href="/contact"
                className="font-medium text-blue-700 hover:underline"
              >
                contact us
              </a>{" "}
              to discuss your requirements, get a quotation and book a
              convenient service time.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </>
  );
}

export default Home;
