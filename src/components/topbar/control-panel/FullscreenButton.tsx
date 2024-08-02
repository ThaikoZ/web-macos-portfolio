import React from "react";
import { EnterFullScreenIcon, ExitFullScreenIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { toggleFullscreen } from "@/store/reducers/systemSettingsSlice";

const FullscreenButton: React.FC = () => {
  const dispatch = useDispatch();
  const { isFullscreen } = useSelector(
    (state: RootState) => state.systemSettings
  );

  const handleToggleFullscreen = () => {
    if (isFullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    } else {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
    }
    dispatch(toggleFullscreen());
  };

  return (
    <div
      className="flex flex-col justify-center items-center text-center gap-1.5 text-sm font-medium"
      onClick={handleToggleFullscreen}
    >
      {isFullscreen ? (
        <>
          <ExitFullScreenIcon width={26} height={26} />
          <span>
            Exit
            <br />
            Fullscreen
          </span>
        </>
      ) : (
        <>
          <EnterFullScreenIcon width={26} height={26} />
          <span>
            Enter
            <br />
            Fullscreen
          </span>
        </>
      )}
    </div>
  );
};

export default FullscreenButton;
