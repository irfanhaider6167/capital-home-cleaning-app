import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect, useState, lazy, Suspense } from "react";
import FloatingActions from "./components/FloatingActions";
import BookingForm from "./components/BookingForm";

// 🔥 LAZY LOADED PAGES
const Home = lazy(() => import("./pages/Home"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ContactUs = lazy(() => import("./pages/ContectUs"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Admin = lazy(() => import("./pages/Admin"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const login = localStorage.getItem("adminLogin");
    if (login === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const ProtectedAdmin = () => {
    return isLoggedIn ? <Admin /> : <Navigate to="/admin-login" />;
  };

  return (
    <>
      <Toaster />
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
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/booking" element={<BookingForm />} />

            <Route
              path="/admin-login"
              element={<AdminLogin setIsLoggedIn={setIsLoggedIn} />}
            />

            <Route path="/admin" element={<ProtectedAdmin />} />
          </Routes>
        </div>
      </Suspense>

      <FloatingActions />
      <Footer />
    </>
  );
}

export default App;
