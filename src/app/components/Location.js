"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section className="pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-8 rounded-lg bg-background p-8 md:grid-cols-2"
        >
          <div className="h-[400px] w-full overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1787.5132740553195!2d-21.85818489999999!3d64.10981519999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d6735b5b6a54db%3A0xea55745367827c1f!2sStudio%20E8!5e1!3m2!1sen!2sis!4v1736613372641!5m2!1sen!2sis"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>

          <div className="text-main">
            <h2 className="mb-8 text-3xl font-medium">
              Kíktu til okkar í kaffi
            </h2>

            <div className="space-y-6">
              <p className="text-lg">
                Hringdu eða sendu okkur skilaboð áður en þú kemur
              </p>
              <div className="space-y-2">
                <p>Sími: 547 2211</p>
                <p>Netfang: fyrirspurn@minimax.is</p>
                <p>
                  <br /> Studio E8 <br /> Engihjalli 8 <br /> 200 Kópavogur
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
