import { songs } from "@/apps/AppleMusic/data/musicPlayerList";
import { Song } from "@/apps/AppleMusic/types/song";
import { Store } from "@/store/store";
import {
  createContext,
  useRef,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import { useSelector } from "react-redux";

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
  const soundRange = useSelector(
    (state: Store) => state.systemSettings.soundRange
  );

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
