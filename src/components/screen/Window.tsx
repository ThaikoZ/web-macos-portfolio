import {
  DEFAULT_WINDOW_HEIGHT,
  DEFAULT_WINDOW_WIDTH,
} from "@/constants/system";
import useMouse from "@/hooks/useMouse";
import { closeApp, setActiveWindow } from "@/store/reducers/windowSlice";
import { RootState } from "@/store/store";
import { App } from "@/types/app";
import { Position, Size } from "@/types/window";
import { cn } from "@/utils/cn";
import { convertToPixels } from "@/utils/convertToPixels";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const NAVBAR_HEIGHT = 27;

interface Props extends App {
  children: ReactNode;
}

const Window = ({
  title = "macOS Window",
  children,
  defalutSize,
  defaultPosition = {
    x: (window.screen.width - DEFAULT_WINDOW_WIDTH) / 2,
    y: (window.screen.height - DEFAULT_WINDOW_HEIGHT) / 2 - 100,
  },
}: Props) => {
  const [size] = useState<Size>(defalutSize);
  const [position, setPosition] = useState<Position>(defaultPosition);
  const [offset, setOffset] = useState<Position>({ x: 0, y: 0 });
  const [isMovable, setMovable] = useState(false);
  const { activeWindowTitle } = useSelector((state: RootState) => state.window);
  const dispatch = useDispatch();
  const mouse = useMouse();
  const ref = useRef<HTMLDivElement>(null);

  const handleClose = () => dispatch(closeApp(title));
  const handleMinimize = () => console.log("Minimized Window");
  const handleFullscreen = () => console.log("Fullscreened Window");

  useEffect(() => {
    if (ref.current) {
      ref.current.style.left = convertToPixels(position.x);
      ref.current.style.top = convertToPixels(position.y);
    }
  }, [position]);

  useEffect(() => {
    const updateOffset = () => {
      const newOffset = {
        x: mouse.x - position.x,
        y: mouse.y - position.y - NAVBAR_HEIGHT,
      };
      setOffset(newOffset);
    };

    const updateWindowPosition = () => {
      const newPosition = {
        x: mouse.x - offset.x,
        y: mouse.y - offset.y - NAVBAR_HEIGHT,
      };
      setPosition(newPosition);
    };

    if (!isMovable) updateOffset();
    else updateWindowPosition();
  }, [mouse]);

  const handleClickDownMoveArea = () => setMovable(true);
  const handleClickUpMoveArea = () => setMovable(false);

  const handleActivate = () => {
    if (activeWindowTitle !== title) dispatch(setActiveWindow(title));
  };

  return (
    <div
      ref={ref}
      className={cn(
        "fixed min-w-14 min-h-14 window-border w-fit h-fit rounded-xl before:rounded-xl after:rounded-xl  bg-window-background "
      )}
      style={{ width: size.width, height: size.height }}
      onMouseDown={handleActivate}
    >
      <div
        onMouseDown={handleClickDownMoveArea}
        onMouseUp={handleClickUpMoveArea}
        className="flex items-center py-1 px-2.5 w-full bg-window-bar-background h-7 font-bold text-window-bar-text rounded-tl-xl rounded-tr-xl !shadow-sm overflow-hidden text-[14px]"
      >
        <div className="absolute flex gap-2">
          <span
            className="w-3 h-3 border-[1px] border-window-btn-border bg-window-btn-close rounded-full"
            onClick={handleClose}
          ></span>
          <span
            className="w-3 h-3 border-[1px] border-window-btn-border bg-window-btn-minimize rounded-full"
            onClick={handleMinimize}
          ></span>
          <span
            className="w-3 h-3 border-[1px] border-window-btn-border bg-window-btn-fullscreen rounded-full"
            onClick={handleFullscreen}
          ></span>
        </div>
        <div className="flex items-center justify-center w-full pointer-events-none ">
          {title}
        </div>
      </div>
      <div className={cn("p-2")}>{children}</div>
    </div>
  );
};

export default Window;
