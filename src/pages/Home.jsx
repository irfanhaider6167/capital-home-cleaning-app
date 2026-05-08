import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import BookingForm from "../components/BookingForm";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <BookingForm />
      <Testimonials />
    </>
  );
}

export default Home;
