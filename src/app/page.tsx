import MobileContainer from "@/components/layout/MobileContainer";
import MusicPlayer from "@/components/music/MusicPlayer";

import { Ceremony } from "@/sections/Ceremony";
import { Countdown } from "@/sections/Countdown";
import { DressCode } from "@/sections/DressCode";
import { Footer } from "@/sections/Footer";
import { Gifts } from "@/sections/Gifts";
import { Hero } from "@/sections/Hero";
import { Photo } from "@/sections/Photo";
import { RSVP } from "@/sections/RSVP";

export default function Home() {
  return (
    <>
      {/* Reproductor de música */}
      <MusicPlayer />

      <MobileContainer>
        <Hero />
        <Photo />
        <Ceremony />
        <Countdown />
        <DressCode />
        <Gifts />
        <RSVP />
        <Footer />
      </MobileContainer>
    </>
  );
}