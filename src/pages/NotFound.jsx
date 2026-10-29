import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

export default function NotFound() {
  const location = useLocation();

  // Check if the user was trying to access a Lahore page
  const isLahore = location.pathname.startsWith("/lahore");

  // Set the correct home path dynamically
  const homePath = isLahore ? "/lahore" : "/";

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Capital Cleaning & Maintenance</title>
        <meta
          name="description"
          content="The page you are looking for could not be found."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-[80vh] flex items-center justify-center bg-[#F9FBFF] px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg w-full bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-gray-100"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
            className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 drop-shadow-sm mb-4"
          >
            404
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-bold mt-4 text-gray-900">
            Page Not Found
          </h2>

          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
            Oops! The page you are looking for doesn't exist, has been moved, or
            is temporarily unavailable.
          </p>

          <Link
            to={homePath}
            className="inline-flex items-center justify-center gap-3 mt-8 bg-blue-600 text-white px-8 py-3.5 rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all duration-300 font-semibold text-lg w-full sm:w-auto"
          >
            <FaHome className="text-xl" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </>
  );
}
