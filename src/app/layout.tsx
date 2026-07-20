import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const titleFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-title",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const bodyFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kairos e Isabela | Invitación de Boda",
  description:
    "Nos encantaría que nos acompañaras en este día tan especial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${titleFont.variable} ${bodyFont.variable}`}
    >
      <body className="min-h-dvh font-body bg-[var(--background)]">
        {children}
      </body>
    </html>
  );
}
