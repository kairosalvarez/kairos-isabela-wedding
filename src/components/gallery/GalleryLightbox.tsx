"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { GalleryImage } from "@/data/gallery";

interface GalleryLightboxProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function GalleryLightbox({
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}: GalleryLightboxProps) {
  useEffect(() => {
    if (currentIndex === null) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrevious();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, onClose, onPrevious, onNext]);

  if (currentIndex === null) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-3xl text-white transition hover:bg-white/20"
        >
          ‹
        </button>

        <motion.div
          key={images[currentIndex].id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl"
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={1600}
            height={2200}
            priority
            className="max-h-[90vh] w-full rounded-3xl object-contain"
          />
        </motion.div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-3xl text-white transition hover:bg-white/20"
        >
          ›
        </button>

        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full bg-white/10 px-4 py-2 text-xl text-white transition hover:bg-white/20"
        >
          ✕
        </button>
      </motion.div>
    </AnimatePresence>
  );
}