import { FaWhatsapp } from "react-icons/fa";
import {
  trackWhatsAppConversion,
  trackCallConversion,
  trackEmailConversion,
} from "../utils/googleAds";

function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold">Capital Cleaning & Maintenance</h3>

        <p className="text-gray-400 mt-3 leading-7">
          Professional cleaning and maintenance services in Islamabad and
          Rawalpindi. We provide sofa cleaning, carpet cleaning, home deep
          cleaning, office cleaning, water tank cleaning, painting, plumbing,
          and electrical services at your doorstep.
        </p>

        <div className="mt-6 text-sm text-gray-400 space-y-2">
          <p>📍 Serving Islamabad, Rawalpindi and nearby areas</p>
          <p>🧹 Expert Sofa Cleaning & Deep Cleaning Services</p>
          <p>🛠️ Complete Home & Commercial Maintenance Solutions</p>
          <p>
            ⚡ Reliable Service | Affordable Pricing | Customer Satisfaction
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="tel:+923137332085"
            onClick={trackCallConversion}
            className="hover:text-blue-400 transition"
          >
            📞 Call Now
          </a>

          <a
            href="mailto:capitalcleaningservices4@gmail.com"
            onClick={() => {
              trackEmailConversion();
            }}
            className="hover:text-blue-400 transition"
          >
            📧 Email Us
          </a>
          <a
            href="https://wa.me/923137332085"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsAppConversion}
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <FaWhatsapp className="text-xl" />
            WhatsApp Booking
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-8">
          Sofa Cleaning Islamabad | Carpet Cleaning Rawalpindi | Home Deep
          Cleaning | Office Cleaning | Water Tank Cleaning
        </p>

        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Capital Cleaning & Maintenance.
            Professional Cleaning & Maintenance Services in Islamabad &
            Rawalpindi. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
