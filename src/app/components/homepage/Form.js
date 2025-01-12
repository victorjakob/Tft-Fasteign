"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Form() {
  const [inView, setInView] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Message sent!");
  };

  // Check if the form is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.6 }
    );

    const formElement = document.getElementById("contact-form");
    if (formElement) {
      observer.observe(formElement);
    }

    return () => {
      if (formElement) observer.unobserve(formElement);
    };
  }, []);

  return (
    <motion.section
      id="contact-form"
      className="text-main py-8 lg:py-16 px-4 mx-auto max-w-[80%]"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="mb-4 text-4xl tracking-tight font-bold text-center">
        Sendu okkur fyrirspurn
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center dark:text-gray-400 sm:text-xl">
        Einhverjar spurningar? við erum hér fyrir þig
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
        {/* Name Field */}
        <div>
          <input
            type="text"
            id="name"
            className={`block p-3 w-full text-sm bg-gray-50 text-gray-900 rounded-lg border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } shadow-sm focus:ring-blue-500 focus:border-blue-500 appearance-none outline-none`}
            placeholder="Nafn"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}

        <div>
          <input
            type="email"
            id="email"
            className={`block p-3 w-full text-sm bg-gray-50 text-gray-900 rounded-lg border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } shadow-sm focus:ring-blue-500 focus:border-blue-500 appearance-none outline-none`}
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Message Field */}

        <div>
          <textarea
            id="message"
            rows="6"
            className={`block p-3 w-full text-sm bg-gray-50 text-gray-900 rounded-lg border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } shadow-sm focus:ring-blue-500 focus:border-blue-500 appearance-none outline-none`}
            placeholder="Skilaboð..."
            {...register("message", {
              required: "Message is required",
            })}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="py-1 border text-main tracking-widest w-full font-extralight text-lg rounded-md hover:bg-slate-950 hover:bg-opacity-30"
        >
          SENDA SKILABOÐ
        </button>
      </form>
    </motion.section>
  );
}
