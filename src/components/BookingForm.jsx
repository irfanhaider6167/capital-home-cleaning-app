import { useState } from "react";
import { motion } from "framer-motion";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    service: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showToast = (type, message) => {
    setToast({ show: true, type, message });

    setTimeout(() => {
      setToast({ show: false, type: "", message: "" });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔥 prevent double submit bug
    if (loading) return;

    setLoading(true);

    try {
      await addDoc(collection(db, "bookings"), {
        ...formData,
        status: "Pending",
        createdAt: new Date(),
      });

      setFormData({
        name: "",
        phone: "",
        address: "",
        service: "",
        date: "",
      });

      showToast("success", "Booking submitted successfully!");
    } catch (err) {
      console.error(err);
      showToast("error", "Failed to submit booking. Try again!");
    } finally {
      // 🔥 ALWAYS RESET (MOST IMPORTANT FIX)
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-[#EFF6FF] relative">
      {/* TOAST */}
      {toast.show && (
        <div
          className={`fixed top-5 right-5 z-50 px-5 py-3 rounded-lg text-white font-medium shadow-xl ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* FIX: use animate instead of whileInView */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-[#111827]"
        >
          Book a <span className="text-[#2563EB]">Service</span>
        </motion.h2>

        <p className="text-gray-500 mt-2">
          Capital Cleaning & Maintenance Booking System
        </p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 bg-white/80 backdrop-blur-xl border shadow-2xl p-8 rounded-3xl space-y-4"
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-xl border"
            required
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-3 rounded-xl border"
            required
          />

          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full p-3 rounded-xl border"
            required
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border"
            required
          >
            <option value="">Select Service</option>
            <option>House Cleaning</option>
            <option>Office Cleaning</option>
            <option>Deep Cleaning</option>
            <option>Maintenance</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border"
            required
          />

          {/* BUTTON SAFE STATE */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold text-white transition ${
              loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-[#2563EB] hover:opacity-90"
            }`}
          >
            {loading ? "Submitting..." : "Book Now 🚀"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default BookingForm;
