function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* BRAND */}
        <h3 className="text-2xl font-bold">Capital Cleaning & Maintenance</h3>

        <p className="text-gray-400 mt-2">
          Professional & Reliable Cleaning & Maintenance Services
        </p>

        {/* INFO */}
        <div className="mt-6 text-sm text-gray-400 space-y-1">
          <p>📍 Available in Islamabad & Surroundings</p>
          <p>📞 Fast Response Support</p>
          <p>⚡ 100% Customer Satisfaction Guaranteed</p>
        </div>

        {/* CONTACT QUICK LINKS */}
        <div className="mt-6 flex justify-center gap-6 text-sm">
          <a
            href="tel:+923137332085"
            className="hover:text-blue-400 transition"
          >
            📞 Call Now
          </a>

          <a
            href="mailto:support@capitalcleaning.pk"
            className="hover:text-blue-400 transition"
          >
            📧 Email
          </a>
        </div>

        {/* DIVIDER */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Capital Cleaning & Maintenance. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
