import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils/cn";
import { setFullscreen } from "@/store/reducers/systemSettingsSlice";
import { PropsWithChildren, useEffect } from "react";
import { useDispatch } from "react-redux";
import Blackout from "./Blackout";

const Screen = ({ children }: PropsWithChildren) => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleFullscreenChange = () => {
      dispatch(setFullscreen(!!document.fullscreenElement));
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (document.fullscreenElement) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }
      } else if (event.key === "F11") {
        event.preventDefault();
        if (document.fullscreenElement) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        } else {
          const elem = document.documentElement;
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          }
        }
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch]);

  return (
    <div
      className={cn(
        "h-full bg-cover bg-center bg-no-repeat bg-wallpaper transition-bg",
        theme
      )}
    >
      <Blackout />
      <div className="pointer-events-auto flex flex-col justify-between h-full select-none">
        {children}
      </div>
    </div>
  );
};

export default Screen;
