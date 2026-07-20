"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type Props = {
  children: React.ReactNode;
};

export default function AnimatedSection({ children }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}