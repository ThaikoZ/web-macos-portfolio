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
  const {
    handleDoubleClickFullscreen,
    toggleFullscreen,
    size,
    position,
    isFullscreen,
    handleMouseDownResize,
    handleMouseDownMove,
    isTransitioning,
    toggleMinimize,
  } = useWindow(defalutSize, initialPosition, isResizable);

  const handleClose = () => {
    console.log("closeing window");
    dispatch(closeWindow(id));
  };
  const handleMinimize = () => toggleMinimize();
  const handleFullscreen = () => toggleFullscreen();
  const handleActivateWindow = () => dispatch(setActiveWindow(id));

  return (
    <div
      ref={ref}
      className={cn(
        "fixed min-w-80 min-h-52 window-border w-fit h-fit rounded-xl before:rounded-xl after:rounded-xl bg-window-background pointer-events-auto",
        {
          "z-10 !shadow-window-active": activeWindow.id === id,
        },
        { "fullscreen-transition": isTransitioning }
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
        onClick={handleDoubleClickFullscreen}
        className={cn(
          "flex items-center py-1 px-2.5 w-full bg-window-bar-background h-7 font-bold text-window-bar-text rounded-tl-xl rounded-tr-xl !shadow-sm overflow-hidden text-[14px]",
          { "text-window-bar-text-inactive": activeWindow.id !== id }
        )}
      >
        <div className="group fixed flex gap-2 window-icons">
          <WindowButton
            inactive={activeWindow.id !== id}
            onClick={handleClose}
            className="bg-window-btn-close group-hover:bg-window-btn-close"
            icon={<Cross2Icon className="icon-hidden-on-default" width={9} />}
          />
          <WindowButton
            inactive={activeWindow.id !== id}
            onClick={handleMinimize}
            className="bg-window-btn-minimize group-hover:bg-window-btn-minimize"
            icon={<MinusIcon className="icon-hidden-on-default" width={9} />}
          />
          <WindowButton
            inactive={activeWindow.id !== id}
            disabled={!isResizable}
            onClick={handleFullscreen}
            className="bg-window-btn-fullscreen group-hover:bg-window-btn-fullscreen"
            icon={
              <SizeIcon
                className="icon-hidden-on-default rotate-90"
                width={9}
              />
            }
          />
        </div>
        <div className="flex items-center justify-center w-full pointer-events-none">
          {title}
        </div>
      </div>
      <div>{children}</div>
      {isResizable && !isFullscreen && (
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
