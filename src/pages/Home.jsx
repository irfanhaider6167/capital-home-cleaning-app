import Hero from "../components/Hero";
import ServicesPage from "./ServicesPage";
import Testimonials from "../components/Testimonials";
import SEO from "../components/seo/SEO";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <SEO
        title="Cleaning & Maintenance Services in Lahore, Islamabad & Rawalpindi | Capital Cleaning"
        description="Capital Cleaning & Maintenance provides professional cleaning and maintenance services in Lahore, Islamabad & Rawalpindi, including deep cleaning, sofa cleaning, carpet cleaning, mattress cleaning, water tank cleaning, solar panel cleaning, painting, plumbing, and electrical services."
        keywords="cleaning services Lahore, cleaning services Islamabad, cleaning services Rawalpindi, cleaning and maintenance services Lahore, home deep cleaning Lahore, office cleaning Lahore, sofa cleaning Lahore, carpet cleaning Lahore, mattress cleaning Lahore, water tank cleaning Lahore, solar panel cleaning Lahore, painting services, plumbing services, electrical services"
        url="https://capitalcleaning.site/"
      />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <ServicesPage />

      {/* Internal Service Links Section */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 md:text-3xl">
            Our Professional Services
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            <Link
              to="/service/home-deep-cleaning"
              className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
            >
              Home Deep Cleaning
            </Link>

            <Link
              to="/service/office-cleaning"
              className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
            >
              Office Cleaning
            </Link>

            <Link
              to="/service/sofa-cleaning"
              className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
            >
              Sofa Cleaning
            </Link>

            <Link
              to="/service/carpet-cleaning"
              className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
            >
              Carpet Cleaning
            </Link>

            <Link
              to="/service/mattress-cleaning"
              className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
            >
              Mattress Cleaning
            </Link>

            <Link
              to="/service/water-tank-cleaning"
              className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
            >
              Water Tank Cleaning
            </Link>

            <Link
              to="/service/solar-panel-cleaning"
              className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
            >
              Solar Panel Cleaning
            </Link>

            <Link
              to="/service/painting"
              className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
            >
              Painting Services
            </Link>

            <Link
              to="/service/plumbing"
              className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
            >
              Plumbing Services
            </Link>

            <Link
              to="/service/electrical"
              className="rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
            >
              Electrical Services
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-white px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Cleaning & Maintenance Services in Lahore, Islamabad & Rawalpindi
          </h2>

          <div className="space-y-5 text-base leading-8 text-gray-600 md:text-lg">
            <p>
              Capital Cleaning & Maintenance provides professional cleaning and
              maintenance services in Lahore, Islamabad, and Rawalpindi for
              homes, apartments, offices, and commercial properties. Our
              services are designed to help customers maintain clean, hygienic,
              comfortable, and well-maintained spaces with reliable service and
              professional workmanship.
            </p>

            <p>
              Our cleaning services include{" "}
              <Link
                to="/service/home-deep-cleaning"
                className="font-medium text-blue-700 hover:underline"
              >
                home deep cleaning
              </Link>
              , office cleaning,{" "}
              <Link
                to="/service/sofa-cleaning"
                className="font-medium text-blue-700 hover:underline"
              >
                sofa cleaning
              </Link>
              ,{" "}
              <Link
                to="/service/carpet-cleaning"
                className="font-medium text-blue-700 hover:underline"
              >
                carpet cleaning
              </Link>
              ,{" "}
              <Link
                to="/service/mattress-cleaning"
                className="font-medium text-blue-700 hover:underline"
              >
                mattress cleaning
              </Link>
              ,{" "}
              <Link
                to="/service/water-tank-cleaning"
                className="font-medium text-blue-700 hover:underline"
              >
                water tank cleaning
              </Link>
              , and{" "}
              <Link
                to="/service/solar-panel-cleaning"
                className="font-medium text-blue-700 hover:underline"
              >
                solar panel cleaning
              </Link>
              . Whether you need complete home deep cleaning or a specific
              service, we can assist with your requirements and arrange a
              convenient service time.
            </p>

            <p>
              In addition to deep cleaning, we provide specialized maintenance
              services in Lahore, Islamabad, and Rawalpindi, including{" "}
              <Link
                to="/service/painting"
                className="font-medium text-blue-700 hover:underline"
              >
                home & office painting
              </Link>
              ,{" "}
              <Link
                to="/service/plumbing"
                className="font-medium text-blue-700 hover:underline"
              >
                plumbing repairs & fittings
              </Link>
              , and{" "}
              <Link
                to="/service/electrical"
                className="font-medium text-blue-700 hover:underline"
              >
                electrical solutions
              </Link>
              . Our maintenance services ensure your property remains functional
              and well-maintained.
            </p>

            <p>
              Our sofa cleaning, carpet cleaning, and mattress cleaning services
              help remove accumulated dust, stains, and unpleasant odors. Our
              home deep cleaning service covers key areas of your property
              according to the required work. We also provide underground and
              overhead water tank cleaning using professional sanitization
              equipment.
            </p>

            <p>
              For offices and corporate workplaces, our commercial office
              cleaning services help maintain a cleaner and more productive
              environment. Our skilled technicians also handle essential
              plumbing, electrical, and painting requirements for residential
              and commercial spaces.
            </p>

            <p>
              If you are looking for top-rated cleaning or maintenance services
              in Lahore, Islamabad, or Rawalpindi, Capital Cleaning &
              Maintenance is ready to assist. Visit our{" "}
              <Link
                to="/services"
                className="font-medium text-blue-700 hover:underline"
              >
                services page
              </Link>{" "}
              to explore available services or{" "}
              <Link
                to="/contact"
                className="font-medium text-blue-700 hover:underline"
              >
                contact us
              </Link>{" "}
              to discuss your requirements, get a quotation, and book a
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
