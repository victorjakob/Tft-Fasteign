"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WeAre() {
  const team = [
    {
      image: "/gunnar.jpeg",
      name: "Gunnar Bachmann",
      title: "Viðskiptafræðingur – Eigandi",
    },
    {
      image: "/thordur.jpeg",
      name: "Þórður Bachmann",
      title: "Viðskiptafræðingur - Sérfræðingur",
    },
    {
      image: "/gisli.jpeg",
      name: "Gísli Hrafn Gunnarsson",
      title: "Bókari - Stjörnuspekingur",
    },
  ];

  return (
    <div className="w-full bg-white py-24">
      <div className="mx-auto w-[80%]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center text-4xl font-extralight tracking-tight text-main lg:text-5xl"
        >
          Við erum MiniMax
        </motion.h2>

        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-6 h-64 w-64 overflow-hidden rounded-full md:h-72 md:w-72">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-3 text-2xl font-medium text-main">
                {member.name}
              </h3>
              <p className="text-lg text-gray-600">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
