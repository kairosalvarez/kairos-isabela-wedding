"use client";

import Image from "next/image";

import AnimatedSection from "@/components/motion/AnimatedSection";
import { wedding } from "@/data/wedding";

export default function Footer() {
  return (
    <section className="relative snap-section overflow-hidden">
      {/* Fondo */}
      <Image
        src="/images/fondo 7.jpg"
        alt="Cierre de la invitación"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#faf7f2]/82" />

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

            px-10
            md:px-8

            pt-24
            pb-40

            text-center
          "
        >
          {/* Subtítulo */}
          <p
            className="
              font-body
              text-xs
              uppercase
              tracking-[0.45em]
              text-[var(--gold)]
            "
          >
            {wedding.footer.signature}
          </p>

          {/* Título */}
<h2
  className="
    mt-8

    max-w-[320px]
    md:max-w-lg

    mx-auto
    px-2

    font-title
    italic
    text-4xl
    md:text-5xl
    font-semibold

    leading-[1.25]

    text-[var(--primary)]
  "
>
  Con la bendición
  <br />
  de Dios
</h2>

          {/* Mensaje */}
          <p
            className="
              mt-10

              max-w-[300px]
              md:max-w-md

              mx-auto

              text-lg
              leading-9

              text-[var(--text)]
            "
          >
            {wedding.footer.message}
          </p>

          {/* Detalle */}
          <div className="my-10">
            <span className="text-2xl text-[var(--gold)]">✦</span>
          </div>

          {/* Nombres */}
          <div className="leading-none">
            <h1
              className="
                font-title
                italic

                text-7xl
                md:text-8xl

                font-semibold
                tracking-[0.02em]

                text-[var(--primary)]
              "
            >
              {wedding.couple.groom}
            </h1>

            <p
              className="
                my-4

                font-title
                italic

                text-5xl

                text-[var(--gold)]
              "
            >
              e
            </p>

            <h1
              className="
                font-title
                italic

                text-7xl
                md:text-8xl

                font-semibold
                tracking-[0.02em]

                text-[var(--primary)]
              "
            >
              {wedding.couple.bride}
            </h1>
          </div>

          {/* Separador */}
          <div className="my-10 flex items-center gap-4">
            <div className="h-px w-12 bg-[var(--gold)]/40" />
            <span className="text-xl text-[var(--gold)]">✦</span>
            <div className="h-px w-12 bg-[var(--gold)]/40" />
          </div>

          {/* Fecha */}
          <p
            className="
              font-body
              text-sm
              uppercase
              tracking-[0.40em]
              text-[var(--gold)]
            "
          >
            {wedding.date.full}
          </p>

          {/* Mensaje final */}
          <p
            className="
              mt-8

              max-w-[280px]

              text-base
              leading-8

              text-[var(--text)]
              opacity-70
            "
          >
            Gracias por acompañarnos en el comienzo de nuestra historia.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}