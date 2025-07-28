"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccessModal(true);
        setFormData({ name: "", email: "", message: "" }); // Reset form data
      } else {
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setShowErrorModal(true);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  return (
    <section className="py-16 pt-40 opacity-90">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-background rounded-lg p-8 shadow-xl"
        >
          <h2 className="text-3xl font-medium text-main text-center mb-8">
            Hafðu Samband
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-main text-sm font-medium mb-2"
              >
                Nafn
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-[#bbbaba] border border-gray-700 text-main focus:outline-none focus:border-[#957F54] transition duration-200"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-main text-sm font-medium mb-2"
              >
                Netfang
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-[#bbbaba] border border-gray-700 text-main focus:outline-none focus:border-[#957F54] transition duration-200"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-main text-sm font-medium mb-2"
              >
                Skilaboð
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 rounded-md bg-[#bbbaba] border border-gray-700 text-main focus:outline-none focus:border-[#957F54] transition duration-200 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full tracking-widest py-3 px-6 rounded-md transition duration-200 font-medium bg-[#2c73e5] text-white hover:bg-[#2054a8] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "SENDA"}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closeSuccessModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg p-8 max-w-md mx-4 text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Skilaboð sent!
              </h3>
              <p className="text-gray-600 mb-6">
                Takk fyrir að hafa samband. Við munum svara þér eins fljótt og
                mögulegt er.
              </p>
              <button
                onClick={closeSuccessModal}
                className="bg-[#2c73e5] text-white px-6 py-2 rounded-md hover:bg-[#2054a8] transition duration-200"
              >
                Loka
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Modal */}
      <AnimatePresence>
        {showErrorModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closeErrorModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg p-8 max-w-md mx-4 text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Vandamál kom upp
              </h3>
              <p className="text-gray-600 mb-6">
                Hafðu samband beint í email:{" "}
                <a
                  href="mailto:info@tftfasteign.is"
                  className="text-[#2c73e5] hover:underline"
                >
                  info@tftfasteign.is
                </a>
              </p>
              <button
                onClick={closeErrorModal}
                className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition duration-200"
              >
                Loka
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
