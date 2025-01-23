"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false); // Track success state

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
        setSuccess(true); // Set success state
        setResponseMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form data

        // Revert success state after 3 seconds
        setTimeout(() => {
          setSuccess(false);
          setResponseMessage(""); // Clear the response message
        }, 3000);
      } else {
        setResponseMessage(
          data.error || "Failed to send the message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("An error occurred. Please try again later.");
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
              disabled={loading || success} // Disable when loading or success
              className={`w-full tracking-widest py-3 px-6 rounded-md transition duration-200 font-medium ${
                success
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-[#2c73e5] text-white hover:bg-[#2054a8]"
              }`}
            >
              {loading ? "Sending..." : success ? "Success" : "SENDA"}
            </button>

            {responseMessage && (
              <p
                className={`text-center text-sm mt-4 ${
                  success ? "text-green-500" : "text-main"
                }`}
              >
                {responseMessage}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
