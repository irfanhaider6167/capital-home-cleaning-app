import Hero from "../components/Hero";
import ServicesPage from "./ServicesPage";
import Testimonials from "../components/Testimonials";
import SEO from "../components/seo/SEO";

function Home() {
  return (
    <>
      <SEO
        title="Capital Cleaning | Cleaning Services in Islamabad & Rawalpindi"
        description="Professional cleaning services in Islamabad & Rawalpindi, including home deep cleaning, sofa, carpet, mattress and water tank cleaning."
        keywords="cleaning services Islamabad, cleaning services Rawalpindi, home deep cleaning Islamabad, sofa cleaning Islamabad, carpet cleaning Islamabad, water tank cleaning Islamabad"
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
            Professional Cleaning Services in Islamabad & Rawalpindi
          </h2>

          <div className="space-y-5 text-base leading-8 text-gray-600 md:text-lg">
            <p>
              Capital Cleaning provides professional cleaning services in
              Islamabad and Rawalpindi for homes, apartments, offices and
              commercial spaces. Our experienced team focuses on reliable
              service, detailed cleaning and customer satisfaction. We use
              professional equipment and suitable cleaning methods to deliver
              quality results for every cleaning job.
            </p>

            <p>
              Our main services include home deep cleaning, sofa cleaning,
              carpet cleaning, mattress cleaning and water tank cleaning. We
              also provide office cleaning and selected home maintenance
              services. Whether you need a complete home deep cleaning service
              or a specific cleaning solution, our team is ready to assist you
              according to your requirements.
            </p>

            <p>
              Our sofa and carpet cleaning services help remove accumulated
              dust, stains and unpleasant odors, while our mattress cleaning
              service helps maintain a cleaner and more comfortable sleeping
              environment. We also provide underground and overhead water tank
              cleaning using professional cleaning equipment.
            </p>

            <p>
              For businesses and workplaces, our office cleaning services help
              maintain a clean, organized and professional environment. We serve
              customers across Islamabad and Rawalpindi with a focus on
              dependable service, professional workmanship and convenient
              booking.
            </p>

            <p>
              If you are looking for reliable cleaning services in Islamabad or
              Rawalpindi, Capital Cleaning is ready to help. Contact us today to
              discuss your cleaning requirements, get a quotation and book a
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
