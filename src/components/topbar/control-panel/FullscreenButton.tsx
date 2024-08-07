import {
  settingsSelector,
  toggleFullscreen,
} from "@/store/systemSettingsSlice";
import { EnterFullScreenIcon, ExitFullScreenIcon } from "@radix-ui/react-icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CardContainer from "./CardContainer";

const FullscreenButton: React.FC = () => {
  const dispatch = useDispatch();
  const { isFullscreen } = useSelector(settingsSelector);

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
    <CardContainer onClick={handleToggleFullscreen}>
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
    </CardContainer>
  );
};

export default FullscreenButton;
