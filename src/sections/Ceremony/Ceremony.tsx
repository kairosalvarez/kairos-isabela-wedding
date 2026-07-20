"use client";

import Image from "next/image";
import {
  CalendarDays,
  Church,
  Clock3,
  MapPin,
} from "lucide-react";

import AnimatedSection from "@/components/motion/AnimatedSection";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import SectionTitle from "@/components/ui/SectionTitle";
import { wedding } from "@/data/wedding";

export default function Ceremony() {
  return (
    <section className="relative snap-section overflow-hidden">
      {/* Fondo */}
      <Image
        src="/images/fondo 2.jpg"
        alt="Ceremonia"
        fill
        priority={false}
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#faf7f2]/90" />

      {/* Luz suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20" />

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
            py-24
            text-center
          "
        >
          <SectionTitle
            subtitle="Celebremos juntos"
            title="Ceremonia"
          />

          <div className="my-6">
            <Divider />
          </div>

          <div className="max-w-md space-y-10">

            {/* Iglesia */}
            <div className="flex flex-col items-center gap-4">
              <Church
                size={38}
                color="var(--primary)"
                strokeWidth={1.8}
              />

              <h3
                style={{
                  fontFamily: "var(--font-title)",
                  fontStyle: "italic",
                }}
                className="
                  text-3xl
                  leading-tight
                  text-[var(--primary)]
                "
              >
                {wedding.ceremony.church}
              </h3>
            </div>

            {/* Fecha */}
            <div className="flex items-center justify-center gap-4">
              <CalendarDays
                size={22}
                color="var(--gold)"
              />

              <p className="text-lg">
                {wedding.date.full}
              </p>
            </div>

            {/* Hora */}
            <div className="flex items-center justify-center gap-4">
              <Clock3
                size={22}
                color="var(--gold)"
              />

              <p className="text-lg">
                {wedding.ceremony.hour}
              </p>
            </div>

            {/* Dirección */}
            <div className="flex items-center justify-center gap-4">
              <MapPin
                size={22}
                color="var(--gold)"
              />

              <p className="text-lg leading-relaxed">
                {wedding.ceremony.address}
              </p>
            </div>

          </div>

          <div className="mt-12 w-full flex justify-center">
  <Button
  href={wedding.ceremony.maps}
  className="w-72"
>
  Ver ubicación
</Button>
</div>
        </div>
      </AnimatedSection>
    </section>
  );
}