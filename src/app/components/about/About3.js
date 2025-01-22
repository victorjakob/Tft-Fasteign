"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About3() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col-reverse items-center gap-8 md:gap-12 lg:flex-row lg:items-start">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:flex-1"
        >
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[500px]">
            <Image
              src="/meeting.jpg"
              alt="Professional office environment"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-[85%] space-y-4 md:w-full md:space-y-6 lg:flex-1"
        >
          <h1 className="text-3xl font-light leading-tight tracking-tighter sm:text-4xl md:text-5xl">
            Fagleg þjónusta í fyrirrúmi
          </h1>
          <p className="text-base leading-relaxed text-gray-700 sm:text-lg lg:leading-loose">
            Félagið Minimax ehf var stofnað í febrúar 2003. Það hefur aðsetur í
            dag að Engihjalla 8, Kópavogi. Starfsmenn félagsins eru þrír.
          </p>
          <p className="text-base leading-relaxed text-gray-700 sm:text-lg lg:leading-loose">
            Starfsmenn félagsins hafa mikla reynslu af hvers konar reksti og
            hafa stýrt fjölmörgum félögum áður en þeir hófu störf hjá Minimax
            ehf. Sú reynsla auk kunnáttu og reynslu af bókhaldi, reikningshaldi
            og skattamálum hefur verið viðskiptavinum félagsins mikil stoð í
            þeirra rekstri.
          </p>

          <p className="text-base leading-relaxed text-gray-700 sm:text-lg lg:leading-loose">
            Viðskiptavinir félagsins eru í margs konar rekstri. Má þar til dæmis
            nefna smásölu og heildsölu, landbúnað, ferðaþjónustu,
            fasteignafélög, iðnfyrirtæki, listgreinar, heilbrigðisþjónustu,
            bygginga- og verktakaiðnaði, húsfélög og félagasamtök.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
