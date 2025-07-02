"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const fadeInVariant = (direction) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
});

const bounceInVariant = (delay) => ({
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      delay,
    },
  },
});

export default function Qualities() {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (src) => setFullscreenImage(src);
  const closeFullscreen = () => setFullscreenImage(null);

  // Add this useEffect to handle Esc key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeFullscreen();
      }
    };

    // Attach the event listener
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [fullscreenImage]);

  return (
    <section className="py-16 bg-[#FCF8ED] overflow-hidden">
      <div className="container mx-auto px-4 lg:max-w-6xl space-y-16">
        {/* First Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Image Section */}
          <motion.div
            className="relative w-full max-w-[80%] md:w-7/12 aspect-video overflow-hidden"
            variants={fadeInVariant("left")}
          >
            <div
              className="group relative w-full h-full cursor-pointer"
              onClick={() => openFullscreen("/sumarhus/inni1.jpg")}
            >
              <Image
                src="/sumarhus/inni1.jpg"
                alt="Inside"
                fill
                className="object-cover transition-transform duration-300 p-5 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="w-full md:w-5/12 text-center md:text-left"
            variants={fadeInVariant("right")}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-second">GÆÐI</h3>
            <ul className="mt-7 text-slate-800 tracking-widest font-normal mb-7 space-y-2">
              <li>Húsin eru öll smíðuð úr vottuðu Sænsku timbri</li>
              <li>Teikningar fylgja</li>
              <li>Smíða-, pípulagninga- og raflagnateikningar</li>
              <li>Húsin geta bæði farið á stöpla eða á steypta plötu</li>
              <li>Einangrun í þaki er 22,5 cm</li>
              <li>Einangrun í útveggjum er 15 cm</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Second Section */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image Section */}
          <motion.div
            className="relative w-full max-w-[80%] md:w-7/12 aspect-square overflow-hidden"
            variants={fadeInVariant("right")}
          >
            <div
              className="group relative w-full h-full cursor-pointer"
              onClick={() => openFullscreen("/home/sumarhus-design.jpg")}
            >
              <Image
                src="/home/sumarhus-design.jpg"
                alt="LANGAVATN"
                fill
                className="object-cover transition-transform duration-300 p-5 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="w-full md:w-5/12 text-center md:text-right"
            variants={fadeInVariant("left")}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-second">
              INNIFALIÐ
            </h3>
            <ul className="mt-7 text-slate-800 tracking-widest font-light mb-7 space-y-2">
              <li>Harðparket á golf</li>
              <li>Klæðning á veggi innanhúss</li>
              <li className="font-bold text-xl"> Eldhús</li>
              <li>Innrétting frá Ikea</li>
              <li>Helluborð</li>
              <li>Bakaraofn</li>
              <li>Vaskur með blöndunartækjum</li>
              <li className="font-bold text-xl"> Baðherbergi</li>
              <li>Flísar</li>
              <li>Sturta og vaskur með blöndunartækjum</li>
              <li>Vaskur með blöndunartækjum</li>
              <li>Innrétting frá Ikea</li>
            </ul>
          </motion.div>
        </motion.div>

        {fullscreenImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            style={{ margin: 0, padding: 0 }}
            onClick={closeFullscreen}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-transparent border-none cursor-pointer"
              onClick={closeFullscreen}
            >
              ×
            </button>

            <Image
              src={fullscreenImage}
              alt="Fullscreen"
              width={800}
              height={600}
              className="object-contain max-w-full max-h-full"
            />
          </div>
        )}

        {/* Additional Section */}
        <div className="text-center border-t border-[#6c5c3b] pt-16">
          <h3 className="text-3xl md:text-4xl font-bold text-second mb-14">
            ÞITT VAL
          </h3>

          <div className="grid text-slate-800 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Veggklæðning",
                description: "Þrjár mismunandi tegundir klæðningar á vegg",
              },
              {
                title: "Gólf",
                description: "Þrjár tegundir af Harðparketi á gólf",
              },
              {
                title: "Kamína",
                description: "Bæta við kamínu? Verð 259 þúsund krónur",
              },
              {
                title: "Pallur",
                description: "Vilt þú fá pall? Verð fer eftir magni",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 border border-[#6c5c3b] shadow-lg rounded-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={bounceInVariant(index * 0.2)}
              >
                <h4 className="text-2xl tracking-widest font-bold mb-4">
                  {item.title}
                </h4>
                <p className="text-[#957F54]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
