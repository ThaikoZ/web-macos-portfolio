import { AudioContextProps, AudioContext } from "@/providers/AudioProvider";
import { useContext } from "react";

const useAudio = (): AudioContextProps => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};

export default useAudio;
