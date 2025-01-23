"use client";

import { motion } from "framer-motion";
import Form from "./Form";

export default function Contact() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fixed Background */}
      <div
        className="absolute inset-0 -z-10 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/home/sumarhus-design.jpg')", // Path to your image
        }}
      ></div>

      {/* Scrollable Content */}
      <div className="relative h-full flex flex-col bg-black bg-opacity-30 items-center justify-center">
        <motion.div
          className="max-w-lg w-full p-4 bg-black bg-opacity-40  rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Form />
        </motion.div>
      </div>
    </div>
  );
}
