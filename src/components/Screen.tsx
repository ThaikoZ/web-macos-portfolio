import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFullscreen } from "@/store/reducers/systemSettingsSlice";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
import { PropsWithChildren } from "react";
import { RootState } from "@/store/store";

const Screen = ({ children }: PropsWithChildren) => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const displayRange = useSelector(
    (state: RootState) => state.systemSettings.displayRange
  );

  useEffect(() => {
    const handleFullscreenChange = () => {
      dispatch(setFullscreen(!!document.fullscreenElement));
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (document.exitFullscreen) {
          document.exitFullscreen();
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

  const displayOpacity = 0.7 * (1 - displayRange / 100);

  return (
    <div
      className={cn(
        "h-full bg-cover bg-center bg-no-repeat bg-wallpaper transition-bg",
        theme
      )}
    >
      <div
        className="relative top-0 left-0 w-full h-full pointer-events-none z-10"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${displayOpacity})`,
        }}
      >
        <div className="pointer-events-auto z-0">{children}</div>
      </div>
    </div>
  );
};

export default Screen;
