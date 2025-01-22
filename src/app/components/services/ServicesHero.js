"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <div className="relative my-20 bg-background pt-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h1 className="font-libre-bodoni text-4xl font-light tracking-wide text-main md:text-5xl lg:text-6xl">
            Við leysum þetta fyrir þig
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-[70%] space-y-6 text-center text-lg leading-relaxed text-gray-700"
        >
          <p>
            Starfsmenn félagsins hafa mikla reynslu af hvers konar reksti og
            hafa stýrt fjölmörgum félögum áður en þeir hófu störf hjá Minimax
            ehf. Sú reynsla auk kunnáttu og reynslu af bókhaldi, reikningshaldi
            og skattamálum hefur verið viðskiptavinum félagsins mikil stoð í
            þeirra rekstri.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
