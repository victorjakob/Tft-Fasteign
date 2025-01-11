"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Form from "./Form";

export default function Contact() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div
      className=" relative w-full h-screen bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/home/sumarhus-design.jpg')", // Path to your image
      }}
    >
      {/* Overlay Content (optional, remove if not needed) */}
      <div className="space-y-20 absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <Form />
      </div>
    </div>
  );
}
