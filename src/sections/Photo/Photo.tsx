"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";

import AnimatedSection from "@/components/motion/AnimatedSection";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";

import { gallery } from "@/data/gallery";

export default function Photo() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleClose = useCallback(() => {
    setCurrentIndex(null);
  }, []);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? gallery.length - 1 : prev - 1;
    });
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev === null) return null;
      return prev === gallery.length - 1 ? 0 : prev + 1;
    });
  }, []);

  return (
    <AnimatedSection>
      <section className="relative flex min-h-screen items-center overflow-hidden py-8">
        {/* Fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/fondo%209.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

        {/* Contenido */}
        <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex w-full flex-col items-center text-center"
          >
            <h2
              style={{
                fontFamily: "var(--font-title)",
              }}
              className="text-5xl font-light tracking-wide text-white"
            >
              Galería
            </h2>

            <div className="mt-4 mb-5 h-px w-20 bg-white/30" />

            <p className="max-w-[290px] text-center text-sm leading-7 text-white/75">
              Un recorrido por algunos de nuestros recuerdos y momentos más
              especiales.
            </p>
          </motion.div>

          <GalleryGrid
            images={gallery}
            onSelect={setCurrentIndex}
          />
        </div>

        <GalleryLightbox
          images={gallery}
          currentIndex={currentIndex}
          onClose={handleClose}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </section>
    </AnimatedSection>
  );
}