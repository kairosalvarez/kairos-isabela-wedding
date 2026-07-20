"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import AnimatedSection from "@/components/motion/AnimatedSection";
import { wedding } from "@/data/wedding";

export default function Photo() {
  return (
    <AnimatedSection>
      <section className="px-5 py-16 bg-[var(--background)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl shadow-black/20"
        >
          {/* Fotografía */}
          <div className="relative aspect-[4/6] w-full">
            <Image
              src="/images/couple.jpg"
              alt={`${wedding.couple.groom} e ${wedding.couple.bride}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 430px"
              priority={false}
            />

            {/* Overlay suave */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Borde interior */}
            <div className="absolute inset-3 rounded-[1.7rem] border border-white/15" />

            {/* Texto inferior */}
            <div className="absolute inset-x-0 bottom-12 z-10 flex flex-col items-center text-center px-6">
              <h2
                style={{
                  fontFamily: "var(--font-title)",
                  fontStyle: "italic",
                }}
                className="text-5xl md:text-6xl font-semibold leading-none tracking-wide text-white drop-shadow-lg"
              >
                {wedding.couple.groom}
              </h2>

              <span
                style={{
                  fontFamily: "var(--font-title)",
                  fontStyle: "italic",
                }}
                className="my-3 text-4xl font-medium leading-none text-[#E8D3A8] opacity-95"
              >
                e
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-title)",
                  fontStyle: "italic",
                }}
                className="text-5xl md:text-6xl font-semibold leading-none tracking-wide text-white drop-shadow-lg"
              >
                {wedding.couple.bride}
              </h2>
            </div>
          </div>
        </motion.div>
      </section>
    </AnimatedSection>
  );
}