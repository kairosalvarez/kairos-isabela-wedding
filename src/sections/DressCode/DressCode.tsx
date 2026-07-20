"use client";

import Image from "next/image";
import { Crown, Shirt, Sparkles } from "lucide-react";

import AnimatedSection from "@/components/motion/AnimatedSection";
import Divider from "@/components/ui/Divider";
import SectionTitle from "@/components/ui/SectionTitle";
import { wedding } from "@/data/wedding";

function ColorCircle({ color }: { color: string }) {
  return (
    <div
      className="
        h-14
        w-14
        rounded-full
        border
        border-white/50
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
      "
      style={{ backgroundColor: color }}
    />
  );
}

export default function DressCode() {
  return (
    <section className="relative snap-section overflow-hidden">
      {/* Fondo */}
      <Image
        src="/images/fondo 4.jpg"
        alt="Dress Code"
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
            subtitle="Código de vestimenta"
            title={wedding.dressCode.title}
          />

          <div className="my-8">
            <Divider />
          </div>

          {/* Iconos */}
          <div
            className="
              mt-6
              flex
              items-center
              justify-center
              gap-12
              text-[var(--primary)]
            "
          >
            <Shirt size={34} strokeWidth={1.8} />
            <Crown size={30} strokeWidth={1.8} />
            <Sparkles size={30} strokeWidth={1.8} />
          </div>

          {/* Elegante */}
          <h3
            style={{
              fontFamily: "var(--font-title)",
              fontStyle: "italic",
            }}
            className="
              mt-10
              text-5xl
              text-[var(--primary)]
            "
          >
            {wedding.dressCode.attire}
          </h3>

          {/* Descripción */}
          <p
            className="
              mt-12
              w-full
              max-w-sm
              px-6
              text-lg
              leading-8
              text-center
              text-balance
              text-[var(--text)]
            "
          >
            {wedding.dressCode.description}
          </p>

          {/* Colores sugeridos */}
          <div className="mt-16 w-full max-w-sm">
            <div
              className="
                mb-8
                flex
                items-center
                justify-center
                gap-4
              "
            >
              <div className="h-px flex-1 bg-[var(--gold)]/50" />

              <span
                className="
                  whitespace-nowrap
                  text-sm
                  uppercase
                  tracking-[0.35em]
                  text-[var(--gold)]
                "
              >
                Colores sugeridos
              </span>

              <div className="h-px flex-1 bg-[var(--gold)]/50" />
            </div>

            <div
              className="
                grid
                grid-cols-3
                justify-items-center
                gap-x-8
                gap-y-8
              "
            >
              {wedding.dressCode.palette.map((color) => (
                <ColorCircle
                  key={color}
                  color={color}
                />
              ))}
            </div>
          </div>

          {/* Nota */}
          <p
            className="
              mt-16
              max-w-xs
              text-center
              text-lg
              leading-8
              text-[var(--gold)]
            "
          >
            <strong>Por favor,</strong> evita vestir de blanco
            o tonos marfil.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}