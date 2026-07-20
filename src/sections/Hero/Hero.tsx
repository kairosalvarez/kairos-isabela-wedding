"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { wedding } from "@/data/wedding";
import ScrollIndicator from "@/components/motion/ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative h-dvh w-full overflow-hidden select-none">
      {/* Imagen de fondo */}
      <Image
        src="/images/fondo.jpg"
        alt={`${wedding.couple.groom} e ${wedding.couple.bride}`}
        fill
        priority
        quality={100}
        className="object-cover object-[center_68%]"
      />

      {/* Overlay principal */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40" />

      {/* Luz central */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_70%)]
        "
      />

      {/* Contenido */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          flex-col
          items-center
          justify-center
          px-8
          text-center
          text-white
        "
      >
        {/* Fecha */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="
            mb-14
            font-body
            text-sm
            uppercase
            tracking-[0.28em]
            text-white/95
          "
        >
          {wedding.date.day} • {wedding.date.month} • {wedding.date.year}
        </motion.p>

        {/* Nombres */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: "easeOut",
          }}
        >
          {/* Kairos */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="
              font-title
              italic
              text-6xl
              md:text-7xl
              font-semibold
              leading-none
              tracking-[0.04em]
              drop-shadow-lg
            "
          >
            {wedding.couple.groom}
          </motion.h1>

          {/* e */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            className="
              my-4
              font-title
              italic
              text-4xl
              md:text-5xl
              font-medium
              leading-none
              text-[#E8D3A8]
            "
          >
            e
          </motion.div>

          {/* Isabela */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
            className="
              font-title
              italic
              text-6xl
              md:text-7xl
              font-semibold
              leading-none
              tracking-[0.04em]
              drop-shadow-lg
            "
          >
            {wedding.couple.bride}
          </motion.h1>
        </motion.div>

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.2,
          }}
          className="
            mt-12
            font-body
            text-sm
            uppercase
            tracking-[0.30em]
            text-white/90
          "
        >
          Nos casamos
        </motion.p>

        {/* Indicador */}
        <ScrollIndicator />
      </div>
    </section>
  );
}