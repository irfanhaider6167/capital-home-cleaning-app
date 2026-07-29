import Hero from "../components/Hero";
import ServicesPage from "./ServicesPage";
import Testimonials from "../components/Testimonials";
import SEO from "../components/seo/SEO";

function Home() {
  return (
    <>
      <SEO
        title="Capital Cleaning & Maintenance | Cleaning Services in Islamabad & Rawalpindi"
        description="Professional Home Deep Cleaning, Sofa Cleaning, Carpet Cleaning, Mattress Cleaning, Water Tank Cleaning, Office Cleaning, Painting and Electrical Services in Islamabad & Rawalpindi."
        keywords="Cleaning Services Islamabad, Cleaning Services Rawalpindi, Sofa Cleaning Islamabad, Carpet Cleaning, Home Deep Cleaning, Water Tank Cleaning, Office Cleaning"
        url="https://capitalcleaning.site/"
      />

      <Hero />
      <ServicesPage />
      <Testimonials />
    </>
  );
}

export default Home;
