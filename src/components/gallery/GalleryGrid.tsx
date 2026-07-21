"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { GalleryImage } from "@/data/gallery";

interface GalleryGridProps {
  images: GalleryImage[];
  onSelect: (index: number) => void;
}

export default function GalleryGrid({
  images,
  onSelect,
}: GalleryGridProps) {
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-3 gap-3">
        {images.map((image, index) => (
          <motion.button
            key={image.id}
            type="button"
            onClick={() => onSelect(index)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              delay: index * 0.03,
            }}
            whileHover={{
              y: -4,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="group"
          >
            <div
              className={`relative overflow-hidden rounded-[22px] border border-white/20 shadow-lg transition-all duration-300 group-hover:border-[#C4A46B] ${
                index % 5 === 0
                  ? "aspect-[4/6]"
                  : index % 3 === 0
                  ? "aspect-square"
                  : "aspect-[4/5]"
              } w-[92px]`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="92px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}