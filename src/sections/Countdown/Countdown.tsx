"use client";

import Image from "next/image";

import AnimatedSection from "@/components/motion/AnimatedSection";
import Divider from "@/components/ui/Divider";
import { useCountdown } from "@/hooks/useCountdown";

const weddingDate = new Date("2026-08-22T17:00:00");

function TimeCard({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-[28px]
        border
        border-white/10
        bg-white/8
        px-8
        py-7
        backdrop-blur-md
        shadow-2xl
        shadow-black/20
      "
    >
      <span
        className="
          text-6xl
          font-bold
          leading-none
          tracking-tight
          text-[#F8F4ED]
        "
      >
        {String(value).padStart(2, "0")}
      </span>

      <span
        className="
          mt-3
          text-xs
          font-medium
          uppercase
          tracking-[0.40em]
          text-[#E5C58A]
        "
      >
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const { days, hours, minutes, seconds } =
    useCountdown(weddingDate);

  return (
    <section className="relative snap-section overflow-hidden">
      {/* Fondo */}
      <Image
        src="/images/fondo 3.jpg"
        alt="Cuenta regresiva"
        fill
        className="object-cover"
        priority={false}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/55" />

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
            py-28
            text-center
          "
        >
          {/* Encabezado */}
          <div className="space-y-5">
            <p
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.45em]
                text-[#E5C58A]
              "
            >
              Cada segundo nos acerca
            </p>

            <h2
              className="
                text-5xl
                font-bold
                leading-[1.15]
                tracking-tight
                text-[#F8F4ED]
              "
            >
              Cuenta
              <br />
              Regresiva
            </h2>
          </div>

          <div className="my-8">
            <Divider />
          </div>

          {/* Contadores */}
          <div
            className="
              mt-4
              grid
              max-w-md
              grid-cols-2
              gap-8
            "
          >
            <TimeCard value={days} label="Días" />
            <TimeCard value={hours} label="Horas" />
            <TimeCard value={minutes} label="Minutos" />
            <TimeCard value={seconds} label="Segundos" />
          </div>

          {/* Texto inferior */}
          <p
            className="
              mt-16
              max-w-md
              text-xl
              font-light
              leading-[2.2rem]
              text-[#F2EEE8]
            "
          >
            Cada instante nos acerca al momento
            <br />
            de decir{" "}
            <strong className="font-semibold text-[#E5C58A]">
              "Sí, acepto".
            </strong>
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}