import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
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

      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="text-center max-w-xl">
          <h1 className="text-7xl font-extrabold text-blue-600">404</h1>

          <h2 className="text-3xl font-bold mt-4 text-gray-900">
            Page Not Found
          </h2>

          <p className="mt-4 text-gray-600">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <FaHome />
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
