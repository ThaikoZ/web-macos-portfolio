import { ReactNode, useRef } from "react";
import { AppConfig } from "@/types/app";
import { convertToPixels } from "@/utils/convertToPixels";
import { Cross2Icon, MinusIcon, SizeIcon } from "@radix-ui/react-icons";
import useWindow from "@/hooks/useWindow";
import WindowButton from "./WindowButton";
import { cn } from "@/utils/cn";
import { MIN_WINDOW_HEIGHT, MIN_WINDOW_WIDTH } from "@/constants/system";
import useDesk from "@/hooks/useDesk";

interface Props {
  config: AppConfig;
  children: ReactNode;
}

const Window = ({ config, children }: Props) => {
  const { activeWindow, openedWindows, closeWindow, setActiveWindow } =
    useDesk();

  const initialPosition = {
    x:
      (window.screen.width - config.defaultSize.width) / 2 +
      openedWindows.length * 35,
    y:
      (window.screen.height - config.defaultSize.height) / 2 -
      150 +
      openedWindows.length * 30,
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
  } = useWindow(
    config.defaultSize,
    initialPosition,
    config.isResizable,
    config
  );

  const isActive = activeWindow.title === config.title;

  const handleClose = () => closeWindow(config);
  const handleMinimize = () => toggleMinimize();
  const handleFullscreen = () => toggleFullscreen();
  const handleActivateWindow = () => setActiveWindow(config);

  return (
    <div
      ref={ref}
      className={cn(
        "fixed window-border w-fit h-fit rounded-xl before:rounded-xl after:rounded-xl bg-window-background pointer-events-auto overflow-hidden",
        {
          "z-10 !shadow-window-active": activeWindow.title === config.title,
        },
        { "fullscreen-transition": isTransitioning }
      )}
      style={{
        minHeight: MIN_WINDOW_HEIGHT,
        minWidth: MIN_WINDOW_WIDTH,
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
          "flex items-center py-1 px-2.5 w-full bg-window-bar-background h-7 font-bold text-window-bar-text rounded-tl-xl rounded-tr-xl !shadow-sm overflow-hidden text-[14px] z-20",
          { "text-window-bar-text-inactive": !isActive }
        )}
      >
        <div className="group fixed flex gap-2 window-icons">
          <WindowButton
            inactive={!isActive}
            onClick={handleClose}
            className="bg-window-btn-close group-hover:bg-window-btn-close"
            icon={<Cross2Icon className="icon-hidden-on-default" width={9} />}
          />
          <WindowButton
            inactive={!isActive}
            onClick={handleMinimize}
            disabled={isFullscreen}
            className="bg-window-btn-minimize group-hover:bg-window-btn-minimize"
            icon={<MinusIcon className="icon-hidden-on-default" width={9} />}
          />
          <WindowButton
            inactive={!isActive}
            disabled={!config.isResizable}
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
        <div className="flex items-center justify-center w-full  pointer-events-none">
          {config.title}
        </div>
      </div>
      <div className="w-full h-full">{children}</div>
      {config.isResizable && !isFullscreen && (
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
