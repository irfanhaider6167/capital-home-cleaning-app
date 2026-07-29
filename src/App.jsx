import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import FloatingActions from "./components/FloatingActions";
import ServiceDetail from "./pages/ServiceDetail";

// 🔥 LAZY LOADED PAGES
const Home = lazy(() => import("./pages/Home"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ContactUs = lazy(() => import("./pages/ContectUs"));
const AboutUs = lazy(() => import("./pages/AboutUs"));

function App() {
  return (
    <>
      <Navbar />

      {/* 🔥 SUSPENSE WRAPPER */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-[60vh]">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
        <div className="pt-10 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:slug" element={<ServiceDetail />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
      </Suspense>

      <FloatingActions />
      <Footer />
    </>
  );
}

export default App;
