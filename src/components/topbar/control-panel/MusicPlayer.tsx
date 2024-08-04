import { PauseIcon, PlayIcon } from "@/assets/icons/utility/MusicIcons";
import useAudio from "@/hooks/useAudio";
import { cn } from "@/utils/cn";

const MusicPlayer = () => {
  const { currentSong, isPlaying, playSong, nextSong } = useAudio();

  return (
    <div className="px-1.5 py-1.5 flex justify-between ">
      <div className="flex items-center gap-3 ">
        <div
          className={cn("h-14 w-14 rounded-lg overflow-hidden bg-cover")}
          style={{ backgroundImage: currentSong.cover }}
        ></div>
        <div className="flex flex-col gap-0 font-bold">
          <span className="">{currentSong.title}</span>
          <span className="font-semibold text-sm opacity-50">
            {currentSong.artist}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 me-2 mt-1">
        <div onClick={playSong}>
          {isPlaying ? (
            <PauseIcon className="w-6 h-6 " />
          ) : (
            <PlayIcon className="w-5 h-5 " />
          )}
        </div>
        <div onClick={nextSong}>
          <PlayIcon className="w-[18px] h-[18px] " />
          <PlayIcon className="absolute right-6 bottom-[36px] w-[18px] h-[18px] " />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
