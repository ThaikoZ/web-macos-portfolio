import { ReactNode, useRef } from "react";
import { App } from "@/types/app";
import { convertToPixels } from "@/utils/convertToPixels";
import { Cross2Icon, MinusIcon, SizeIcon } from "@radix-ui/react-icons";
import useWindow from "@/hooks/useWindow";
import { useDispatch, useSelector } from "react-redux";
import { closeWindow, setActiveWindow } from "@/store/reducers/windowSlice";
import WindowButton from "./WindowButton";
import { Store } from "@/store/store";
import { cn } from "@/utils/cn";

interface Props extends App {
  id: number;
  children: ReactNode;
}

const Window = ({
  id,
  title = "macOS Window",
  children,
  defalutSize,
  defaultPosition = {
    x: (window.screen.width - defalutSize.width) / 2,
    y: (window.screen.height - defalutSize.height) / 2 - 150,
  },
  isResizable = false,
}: Props) => {
  const dispatch = useDispatch();
  const { activeWindow, openedWindows } = useSelector(
    (state: Store) => state.window
  );

  const initialPosition = {
    x: defaultPosition.x + openedWindows.length * 35,
    y: defaultPosition.y + openedWindows.length * 30,
  };

  const ref = useRef<HTMLDivElement>(null);
  const { size, position, handleMouseDownResize, handleMouseDownMove } =
    useWindow(defalutSize, initialPosition, isResizable);

  const handleClose = () => dispatch(closeWindow(id));
  const handleMinimize = () => console.log("Minimized Window");
  const handleFullscreen = () => console.log("Fullscreened Window");
  const handleActivateWindow = () => dispatch(setActiveWindow(id));

  return (
    <div
      ref={ref}
      className={cn(
        "fixed min-w-60 min-h-32 window-border w-fit h-fit rounded-xl before:rounded-xl after:rounded-xl bg-window-background pointer-events-auto",
        {
          "!shadow-none": activeWindow.id !== id,
          "z-10 shadow-window": activeWindow.id === id,
        }
      )}
      style={{
        width: convertToPixels(size.width),
        height: convertToPixels(size.height),
        left: convertToPixels(position.x),
        top: convertToPixels(position.y),
      }}
      onMouseDown={handleActivateWindow}
    >
      <div
        onMouseDown={handleMouseDownMove}
        className={cn(
          "flex items-center py-1 px-2.5 w-full bg-window-bar-background h-7 font-bold text-window-bar-text rounded-tl-xl rounded-tr-xl !shadow-sm overflow-hidden text-[14px]",
          { "text-window-bar-text-inactive": activeWindow.id !== id }
        )}
      >
        <div className="absolute flex gap-2 window-icons">
          <WindowButton
            inactive={activeWindow.id !== id}
            onClick={handleClose}
            className="bg-window-btn-close"
            icon={<Cross2Icon className="icon-hidden-on-default" />}
          />
          <WindowButton
            inactive={activeWindow.id !== id}
            onClick={handleMinimize}
            className="bg-window-btn-minimize"
            icon={<MinusIcon className="icon-hidden-on-default" />}
          />
          <WindowButton
            inactive={activeWindow.id !== id}
            onClick={handleFullscreen}
            className="bg-window-btn-fullscreen"
            icon={<SizeIcon className="icon-hidden-on-default" />}
          />
        </div>
        <div className="flex items-center justify-center w-full pointer-events-none">
          {title}
        </div>
      </div>
      <div className="p-2">{children}</div>
      {isResizable && (
        <>
          <div
            className="resize-handle top-left"
            onMouseDown={() => handleMouseDownResize("top-left")}
          />
          <div
            className="resize-handle top-right"
            onMouseDown={() => handleMouseDownResize("top-right")}
          />
          <div
            className="resize-handle bottom-left"
            onMouseDown={() => handleMouseDownResize("bottom-left")}
          />
          <div
            className="resize-handle bottom-right"
            onMouseDown={() => handleMouseDownResize("bottom-right")}
          />
          <div
            className="resize-handle top"
            onMouseDown={() => handleMouseDownResize("top")}
          />
          <div
            className="resize-handle bottom"
            onMouseDown={() => handleMouseDownResize("bottom")}
          />
          <div
            className="resize-handle left"
            onMouseDown={() => handleMouseDownResize("left")}
          />
          <div
            className="resize-handle right"
            onMouseDown={() => handleMouseDownResize("right")}
          />
        </>
      )}
    </div>
  );
};

export default Window;
