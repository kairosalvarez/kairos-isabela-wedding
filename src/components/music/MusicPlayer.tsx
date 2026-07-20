"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.35;
    audioRef.current.loop = true;
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      await audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/boda.mp3"
      />

      <motion.button
        onClick={toggleMusic}
        whileTap={{ scale: 0.92 }}
        animate={
          playing
            ? {
                rotate: 360,
              }
            : {}
        }
        transition={
          playing
            ? {
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }
            : {}
        }
        className="
          fixed
          top-6
          right-6

          z-[999]

          flex
          h-14
          w-14

          items-center
          justify-center

          rounded-full

          border
          border-white/30

          bg-white/20

          backdrop-blur-md

          shadow-xl

          transition-all

          hover:scale-105
        "
      >
        {playing ? (
          <Pause
            size={20}
            color="#6F233A"
          />
        ) : (
          <Play
            size={20}
            color="#6F233A"
          />
        )}
      </motion.button>
    </>
  );
}