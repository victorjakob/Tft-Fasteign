"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Bókhald og reikningshald",
    image: "/book1.jpg",
    description:
      "Fagleg og nákvæm bókhaldsþjónusta fyrir fyrirtæki af öllum stærðum. Við sjáum um bókhaldið svo þú getir einbeitt þér að rekstrinum.",
  },
  {
    title: "Ráðgjöf varðandi skattamál",
    image: "/book4.jpg",
    description:
      "Sérfræðiráðgjöf í skattamálum fyrir einstaklinga og fyrirtæki. Við hjálpum þér að hámarksnýta skattaumhverfið á löglegan hátt.",
  },
  {
    title: "Fjármálaráðgjöf og rekstrargreiningar",
    image: "/book2.jpg",
    description:
      "Ítarlegar rekstrargreiningar og fjármálaráðgjöf til að bæta arðsemi og rekstur fyrirtækja.",
  },
  {
    title: "Ráðgjöf varðandi lífeyrismál",
    image: "/book5.jpg",
    description:
      "Heildstæð ráðgjöf um lífeyrismál og framtíðartryggingar. Við hjálpum þér að skipuleggja fjárhagslega framtíð þína.",
  },
  {
    title: "Ráðningarráðgjöf út frá stjörnukortalestri",
    image: "/book6.jpg",
    description:
      "Einstök nálgun á ráðningar þar sem við notum stjörnukort til að finna fullkomna samsvörun starfsmanns og fyrirtækis.",
  },
];

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: index * 0.3 }}
      className="flex w-full flex-col md:w-[calc(50%-24px)] lg:w-[calc(33.333%-32px)]"
    >
      <div className="relative mb-6 h-64 w-full overflow-hidden rounded-2xl">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <h3 className="font-libre-bodoni mb-4 text-2xl font-light tracking-wide text-main">
        {service.title}
      </h3>

      <p className="mb-6 text-gray-600">{service.description}</p>

      <Link
        href="/contact"
        className="self-start border border-main px-8 py-2.5 text-sm text-main transition-all duration-300 hover:bg-main hover:text-white"
      >
        Fyrirspurn
      </Link>
    </motion.div>
  );
};

export default function Services() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
