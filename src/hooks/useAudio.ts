import { useContext } from "react";
import { AudioContext, AudioContextProps } from "providers/AudioProvider";

const useAudio = (): AudioContextProps => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};

export default useAudio;
