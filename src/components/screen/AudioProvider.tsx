import { RootState } from "@/store/store";
import {
  createContext,
  useRef,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import { useSelector } from "react-redux";

interface Song {
  title: string;
  artist: string;
  cover: string;
  href: string;
  src: string;
}

const songs: Song[] = [
  {
    title: "Czekam na stacji",
    artist: "TEN TONYE",
    cover: "url(/src/apps/AppleMusic/assets/covers/czekam-na-stacji.jpg)",
    href: "https://open.spotify.com/album/5hrNeUJXxNkzdHIOam255C?si=VihngdacQmmo6RbwVLfbdw",
    src: "/src/apps/AppleMusic/assets/songs/czekam-na-stacji.mp3",
  },
  {
    title: "KRUKI I WRONY",
    artist: "TEN TONYE",
    cover: "url(/src/apps/AppleMusic/assets/covers/kruki-i-wrony.jpg)",
    href: "https://open.spotify.com/album/1DDqzg8Zbvpj8tVhrK3LBx?si=8-BnCadRSOeZ-KVce6eWcw",
    src: "/src/apps/AppleMusic/assets/songs/kruki-i-wrony.mp3",
  },
  {
    title: "Plaża POLAROID",
    artist: "TEN TONYE",
    cover: "url(/src/apps/AppleMusic/assets/covers/plaza-polaroid.jpg)",
    href: "https://open.spotify.com/album/7y9mfqbtBp1A19PJUshv0Y?si=Hv5HY0gwSVSDMA60QyiY1w",
    src: "/src/apps/AppleMusic/assets/songs/plaza-polaroid.mp3",
  },
  {
    title: "Czekaj na mnie",
    artist: "TEN TONYE / smxk / Gabriel...",
    cover: "url(/src/apps/AppleMusic/assets/covers/czekaj-na-mnie.jpg)",
    href: "https://open.spotify.com/album/1elNf5L7f0fqKCHYi2Vof0?si=IuQM8-04QXO-FCH-PrCD8Q",
    src: "/src/apps/AppleMusic/assets/songs/czekaj-na-mnie.mp3",
  },
];

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
    (state: RootState) => state.systemSettings.soundRange
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
