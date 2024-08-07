import { songs } from "@/apps/Music/data/musicPlayerList";
import { settingsSelector } from "@/store/systemSettingsSlice";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Song } from "@/apps/Music/types/song";
import { createContext } from "react";

export interface AudioContextProps {
  currentSong: Song;
  isPlaying: boolean;
  playSong: () => void;
  nextSong: () => void;
}

export const AudioContext = createContext<AudioContextProps | undefined>(
  undefined
);

export const AudioProvider = ({ children }: PropsWithChildren) => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { soundRange } = useSelector(settingsSelector);

  const currentSong = songs[index];

  const nextSong = () => {
    setIndex((index) => (index === songs.length - 1 ? 0 : index + 1));
  };

  const playSong = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setPlaying((prev) => !prev);
    }
  };

  useEffect(() => {
    const newVolume = soundRange / 100;
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  }, [soundRange]);

  return (
    <AudioContext.Provider
      value={{ currentSong, isPlaying, playSong, nextSong }}
    >
      {children}
      <audio
        ref={audioRef}
        src={currentSong.src}
        onEnded={nextSong}
        autoPlay={isPlaying}
      />
    </AudioContext.Provider>
  );
};
