"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="py-16 pt-40s opacity-90">
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
              className="w-full tracking-widest bg-[#2c73e5] text-white py-3 px-6 rounded-md hover:bg-[#2054a8] transition duration-200 font-medium"
            >
              SENDA
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
