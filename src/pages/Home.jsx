import Hero from "../components/Hero";
import ServicesPage from "./ServicesPage";
import Testimonials from "../components/Testimonials";
import SEO from "../components/seo/SEO";

function Home() {
  return (
    <>
      <SEO
        title="Cleaning, Pest Control & Maintenance Services in Islamabad & Rawalpindi | Capital Cleaning"
        description="Capital Cleaning & Maintenance provides professional cleaning, pest control and maintenance services in Islamabad & Rawalpindi, including home deep cleaning, office cleaning, sofa, carpet, mattress, water tank, bed bug, termite, cockroach control, painting, plumbing and electrical services."
        keywords="cleaning services Islamabad, cleaning services Rawalpindi, pest control Islamabad, pest control Rawalpindi, maintenance services Islamabad, maintenance services Rawalpindi, home deep cleaning Islamabad, home deep cleaning Rawalpindi, office cleaning Islamabad, sofa cleaning Islamabad, carpet cleaning Islamabad, mattress cleaning Islamabad, water tank cleaning Islamabad, bed bug control Islamabad, termite control Islamabad, cockroach control Islamabad, painting services Islamabad, plumbing services Islamabad, electrical services Islamabad"
        url="https://capitalcleaning.site/"
      />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <ServicesPage />

      {/* SEO Content */}
      <section className="bg-white px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Capital Cleaning, Pest Control & Maintenance Services in Islamabad &
            Rawalpindi
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
              Our cleaning services include home deep cleaning, office cleaning,
              sofa cleaning, carpet cleaning, mattress cleaning and water tank
              cleaning. Whether you need a complete home deep cleaning service
              or a specific cleaning solution, our team can assist with your
              requirements and arrange a convenient service time.
            </p>

            <p>
              We also provide professional pest control services in Islamabad
              and Rawalpindi, including bed bug control, termite control and
              cockroach control. Our pest control services are available for
              residential and commercial properties and are designed to help
              control common pest infestations in affected areas.
            </p>

            <p>
              In addition to cleaning and pest control, we provide maintenance
              services in Islamabad and Rawalpindi, including painting, plumbing
              and electrical services. These services are available for homes,
              apartments, offices and commercial properties to help customers
              maintain functional, safe and well-maintained spaces.
            </p>

            <p>
              Our sofa, carpet and mattress cleaning services help remove
              accumulated dust, stains and unpleasant odors, while our home deep
              cleaning service covers important areas of your property according
              to the required cleaning work. We also provide underground and
              overhead water tank cleaning using suitable professional
              equipment.
            </p>

            <p>
              For offices and workplaces, our office cleaning services help
              maintain a cleaner and more organized working environment. Our
              maintenance services can also assist with common painting,
              plumbing and electrical requirements for residential and
              commercial properties.
            </p>

            <p>
              If you are looking for cleaning, pest control or maintenance
              services in Islamabad or Rawalpindi, Capital Cleaning &
              Maintenance is ready to assist. Contact us to discuss your
              requirements, get a quotation and book a convenient service time.
            </p>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}

export default Home;
