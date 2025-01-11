"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  // Variants for the motion animation
  const variants = {
    hidden: { opacity: 0, scale: 0, y: 80 }, // Start smaller, lower, and invisible
    visible: {
      opacity: 1,
      scale: 1,
      y: 0, // Final position
      transition: { duration: 0.8, ease: "easeOut" }, // Smooth easing
    },
  };

  const imgVariants = {
    hidden: { opacity: 0, scale: 0 }, // Start smaller, lower, and invisible
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }, // Smooth easing
    },
  };

  // Individual refs for each element
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const refImage = useRef(null);

  // Check if elements are in view
  const inView1 = useInView(ref1, { once: true });
  const inView2 = useInView(ref2, { once: true });
  const inView3 = useInView(ref3, { once: true });
  const inViewImage = useInView(refImage, { once: true });

  return (
    <div className="py-20">
      <div
        className=" container mx-auto flex flex-col md:flex-row 
      items-start justify-between px-6 md:px-12"
      >
        {/* Left Section: Texts */}
        <div className="tracking-widest  italic md:w-1/2 md:space-y-12 lg:space-y-16 my-auto text-left">
          {/* First Element */}
          <motion.div
            ref={ref1}
            className="border-l p-4 border-current
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-main"
            variants={variants}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
          >
            Skandinavísk og stílhrein hönnun
          </motion.div>

          {/* Second Element */}
          <motion.div
            ref={ref2}
            className=" border-l p-4 border-current
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-main lg:ml-14"
            variants={variants}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
          >
            Vistvæn timburhús
          </motion.div>

          {/* Third Element */}
          <motion.div
            ref={ref3}
            className="border-l p-4 border-current
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-main lg:ml-28"
            variants={variants}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
          >
            Tilbúin til uppsetningar
          </motion.div>
        </div>

        {/* Right Section: Image */}
        <motion.div
          ref={refImage}
          className="w-72 h-72 md:w-96 md:h-96 lg:w-[490px] lg:h-[490px] rounded-full object-cover border border-black -mb-16"
          variants={imgVariants}
          initial="hidden"
          animate={inViewImage ? "visible" : "hidden"}
        >
          <img
            src="/home/sumarhus-design.jpg" // Replace with your image path
            alt="Circular Image"
            className="w-full h-full rounded-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
