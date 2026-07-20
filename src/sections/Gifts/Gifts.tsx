"use client";

import Image from "next/image";
import { Gift } from "lucide-react";

import AnimatedSection from "@/components/motion/AnimatedSection";
import Divider from "@/components/ui/Divider";
import SectionTitle from "@/components/ui/SectionTitle";
import { wedding } from "@/data/wedding";

export default function Gifts() {
  return (
    <section className="relative snap-section overflow-hidden">
      {/* Fondo */}
      <Image
        src="/images/fondo 5.jpg"
        alt="Lluvia de sobres"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#faf7f2]/90" />

      <AnimatedSection>
        <div
          className="
            relative
            z-10
            flex
            min-h-dvh
            flex-col
            items-center
            justify-center
            px-8
            py-32
            text-center
          "
        >
          <SectionTitle
            subtitle="Con mucho cariño"
            title={wedding.gifts.title}
          />

          <div className="my-8">
            <Divider />
          </div>

          {/* Icono */}
          <div
            className="
              mt-4
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              border-[1.5px]
              border
              border-[var(--gold)]
              bg-white/40
              backdrop-blur-sm
            "
          >
            <Gift
              size={38}
              color="var(--primary)"
              strokeWidth={1.8}
            />
          </div>

          {/* Texto */}
          <p
            className="
              mt-12
              max-w-sm
              px-5
              text-lg
              leading-9
              text-center
              text-[var(--text)]
            "
          >
            {wedding.gifts.description}
          </p>

          {/* Separador */}
          <div
            className="
              mt-12
              flex
              items-center
              justify-center
              gap-4
              w-full
              max-w-xs
            "
          >
            <div className="h-px flex-1 bg-[var(--gold)]/40" />
            <span className="text-[var(--gold)] text-lg">✦</span>
            <div className="h-px flex-1 bg-[var(--gold)]/40" />
          </div>

          {/* Mensaje final */}
          <p
            style={{
              fontFamily: "var(--font-title)",
              fontStyle: "italic",
            }}
            className="
              mt-8
              text-4xl
              text-[var(--gold)]
            "
          >
            Gracias por acompañarnos
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}