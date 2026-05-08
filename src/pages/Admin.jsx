import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

function Admin() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");

  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  });

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "bookings"), (snapshot) => {
      const bookings = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(bookings);
    });

    return () => unsub();
  }, []);

  // 🔥 TOAST FUNCTION
  const showToast = (type, message) => {
    setToast({ show: true, type, message });

    setTimeout(() => {
      setToast({ show: false, type: "", message: "" });
    }, 3000);
  };

  const toggleStatus = async (id, currentStatus) => {
    try {
      const newStatus = currentStatus === "Pending" ? "Done" : "Pending";

      await updateDoc(doc(db, "bookings", id), {
        status: newStatus,
      });

      showToast("success", "Status updated successfully!");
    } catch (err) {
      console.error(err);
      showToast("error", "Failed to update status!");
    }
  };

  const handleDelete = async (id) => {
    // 🔥 CONFIRMATION DIALOG
    const confirmDelete = window.confirm(
      "⚠️ Are you sure you want to delete this booking?",
    );

    if (!confirmDelete) {
      showToast("error", "Delete cancelled!");
      return;
    }

    try {
      await deleteDoc(doc(db, "bookings", id));

      showToast("success", "Booking deleted successfully!");
    } catch (err) {
      console.error(err);
      showToast("error", "Failed to delete booking!");
    }
  };

  const filteredData =
    filter === "All" ? data : data.filter((item) => item.status === filter);

  return (
    <div className="p-6 bg-gray-50 min-h-screen relative">
      {/* 🔥 TOAST UI */}
      {toast.show && (
        <div
          className={`fixed top-5 right-5 z-50 px-5 py-3 rounded-lg text-white font-medium shadow-xl ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toast.message}
        </div>
      )}

      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

      {/* FILTER */}
      <div className="flex gap-3 mb-6">
        {["All", "Pending", "Done"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded font-semibold ${
              filter === type
                ? "bg-gray-800 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* DATA */}
      <div className="grid gap-4">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-white border rounded-lg shadow flex justify-between items-center"
          >
            {/* INFO */}
            <div>
              <p className="text-lg font-bold">{item.name}</p>
              <p>{item.phone}</p>
              <p>{item.service}</p>
              <p>{item.date}</p>

              <span
                className={`inline-block mt-2 px-3 py-1 text-sm font-bold rounded-full ${
                  item.status === "Done"
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {item.status}
              </span>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-3">
              <button
                onClick={() => toggleStatus(item.id, item.status)}
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Toggle
              </button>

              <button
                onClick={() => handleDelete(item.id)}
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
