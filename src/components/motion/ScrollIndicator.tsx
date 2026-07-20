"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  const handleScroll = () => {
    const nextSection = document.querySelector("main section:nth-of-type(2)");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleScroll}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1.5,
        duration: 1,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="
        absolute
        bottom-10
        left-1/2
        -translate-x-1/2
        flex
        flex-col
        items-center
        gap-3
        text-white/90
        cursor-pointer
        select-none
      "
    >
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="h-12 w-px bg-white/70"
      />

      <span
        className="
          text-xs
          uppercase
          tracking-[0.35em]
        "
      >
        DESLIZAR
      </span>
    </motion.button>
  );
}