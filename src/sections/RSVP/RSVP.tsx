"use client";

import Image from "next/image";
import { MessageCircleHeart } from "lucide-react";

import AnimatedSection from "@/components/motion/AnimatedSection";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { wedding } from "@/data/wedding";

export default function RSVP() {
  const message = encodeURIComponent(
    `Hola, somos invitados de la boda de Kairos e Isabela y queremos confirmar nuestra asistencia.`
  );

  const whatsappUrl = `https://wa.me/${wedding.rsvp.phone}?text=${message}`;

  return (
    <section className="relative snap-section overflow-hidden">
      {/* Fondo */}
      <Image
        src="/images/fondo 6.jpg"
        alt="Confirmación de asistencia"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#faf7f2]/85" />

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
          {/* Título */}
          <SectionTitle
            subtitle="Tu presencia hará este día aún más especial"
            title="¿Nos acompañas?"
          />

          {/* Icono */}
          <div
            className="
              mt-16
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-[var(--gold)]
              bg-white/40
              backdrop-blur-sm
            "
          >
            <MessageCircleHeart
              size={28}
              color="var(--primary)"
              strokeWidth={1.8}
            />
          </div>

          {/* Texto */}
          <p
            className="
              mt-16
              max-w-sm
              px-6
              text-lg
              leading-8
              text-[var(--text)]
            "
          >
            Tu presencia es muy importante para nosotros.

            <br />
            <br />

            Agradecemos confirmar tu asistencia antes del{" "}
            <strong>{wedding.rsvp.deadline}</strong>.
          </p>

          {/* Botón */}
          <div className="mt-14 w-full max-w-[320px]">
    <Button href={whatsappUrl}>
        Confirmar asistencia
    </Button>
</div>

          {/* Cierre */}
          <p
            className="
              mt-12
              max-w-xs
              text-lg
              leading-8
              text-[var(--text)]
              opacity-80
            "
          >
            Estamos deseando celebrar
            <br />
            este día contigo.
          </p>

          {/* Nombres */}
          <div className="mt-8">
            <h3
              style={{
                fontFamily: "var(--font-title)",
              }}
              className="
                text-[3.6rem]
                leading-none
                font-normal
                text-[var(--primary)]
              "
            >
              Kairos
              <span
                className="
                  mx-2
                  text-[var(--gold)]
                "
              >
                &
              </span>
              Isabela
            </h3>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}