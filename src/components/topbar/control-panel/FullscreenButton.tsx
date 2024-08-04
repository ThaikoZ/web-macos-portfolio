import React from "react";
import { EnterFullScreenIcon, ExitFullScreenIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "@/store/store";
import { toggleFullscreen } from "@/store/reducers/systemSettingsSlice";
import CardContainer from "./CardContainer";

const FullscreenButton: React.FC = () => {
  const dispatch = useDispatch();
  const { isFullscreen } = useSelector((state: Store) => state.systemSettings);

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
