"use client";

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";

const SoundtrackContext = createContext<any>(null);

export const SoundtrackProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();

    const audio = audioRef.current;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener("timeupdate", updateProgress);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  const playTrack = (trackPath: string) => {
    if (!audioRef.current) return;

    if (
      audioRef.current.src !==
      window.location.origin + trackPath
    ) {
      audioRef.current.src = trackPath;
      setProgress(0);
    }

    audioRef.current.play();
    setIsPlaying(true);
    setCurrentTrack(trackPath);
  };

  const stopTrack = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <SoundtrackContext.Provider
      value={{
        isPlaying,
        currentTrack,
        playTrack,
        stopTrack,
        progress,
      }}
    >
      {children}
    </SoundtrackContext.Provider>
  );
};

export const useSoundtrack = () => useContext(SoundtrackContext);