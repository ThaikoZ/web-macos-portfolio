import {
  DEFAULT_RESIZE_THICKNESS,
  DEFAULT_WINDOW_HEIGHT,
  DEFAULT_WINDOW_WIDTH,
} from "@/constants/system";
import useMouse from "@/hooks/useMouse";
import { Position, Size, WindowInterface } from "@/types/window";
import { cn } from "@/utils/cn";
import { convertToPixels } from "@/utils/convertToPixels";
import { useEffect, useRef, useState } from "react";

const handleClose = () => console.log("Close Window");
const handleMinimize = () => console.log("Minimized Window");
const handleFullscreen = () => console.log("Fullscreened Window");

const NAVBAR_HEIGHT = 27;

const Window = ({
  title = "macOS Window",
  children,
  defalutSize = {
    width: 500,
    height: 300,
  },
  defaultPosition = {
    x: (window.screen.width - DEFAULT_WINDOW_WIDTH) / 2,
    y: (window.screen.height - DEFAULT_WINDOW_HEIGHT) / 2 - 100,
  },
  isResizable = true,
}: WindowInterface) => {
  const [size, setSize] = useState<Size>(defalutSize);
  const [position, setPosition] = useState<Position>(defaultPosition);
  const [offset, setOffset] = useState<Position>({ x: 0, y: 0 });
  const [isMovable, setMovable] = useState(false);
  const [resizeMode, setResizeMode] = useState(false);

  const mouse = useMouse();
  const ref = useRef<HTMLDivElement>(null);

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

    const checkResizability = () => {
      const isWithinRange = (min: number, value: number, max: number) =>
        value >= min && value <= max;

      const MARGIN = DEFAULT_RESIZE_THICKNESS / 2;
      const CORNER_MARGIN = MARGIN * 2.5;
      const x = offset.x;
      const y = offset.y;
      const width = size.width;
      const height = size.height;

      if (
        isWithinRange(width - CORNER_MARGIN, x, width) &&
        isWithinRange(0, y, CORNER_MARGIN)
      )
        return 1;
      else if (
        isWithinRange(width - CORNER_MARGIN, x, width) &&
        isWithinRange(height - CORNER_MARGIN, y, height)
      )
        return 3;
      else if (
        isWithinRange(0, x, CORNER_MARGIN) &&
        isWithinRange(height - CORNER_MARGIN, y, height)
      )
        return 5;
      else if (
        isWithinRange(0, x, CORNER_MARGIN) &&
        isWithinRange(0, y, CORNER_MARGIN)
      )
        return 7;
      else if (
        isWithinRange(CORNER_MARGIN, x, width - CORNER_MARGIN) &&
        isWithinRange(-MARGIN, y, MARGIN)
      )
        return 0;
      else if (
        isWithinRange(width - MARGIN, x, width) &&
        isWithinRange(CORNER_MARGIN, y, height - CORNER_MARGIN)
      )
        return 2;
      else if (
        isWithinRange(CORNER_MARGIN, x, width - CORNER_MARGIN) &&
        isWithinRange(height - MARGIN, y, height)
      )
        return 4;
      else if (
        isWithinRange(0, x, MARGIN) &&
        isWithinRange(CORNER_MARGIN, y, height - CORNER_MARGIN)
      )
        return 6;
      return -1;
    };

    const updateResize = () => {
      const resizeDirection: number = checkResizability();
      const html = document.getElementsByTagName("html")[0];
      switch (resizeDirection) {
        case 0:
          html.className = "!cursor-n-resize";
          break;
        case 1:
          html.className = "!cursor-ne-resize";
          break;
        case 2:
          html.className = "!cursor-e-resize";
          break;
        case 3:
          html.className = "!cursor-se-resize";
          break;
        case 4:
          html.className = "!cursor-s-resize";
          break;
        case 5:
          html.className = "!cursor-sw-resize";
          break;
        case 6:
          html.className = "!cursor-w-resize";
          break;
        case 7:
          html.className = "!cursor-nw-resize";
          break;
        default:
          html.className = "!cursor-default";
          break;
      }
    };

    const resizeWindow = () => {
      const MIN_WIDTH = 100;
      const MIN_HEIGHT = 100;

      const resizeDirection = checkResizability();
      let newWidth = size.width;
      let newHeight = size.height;
      let newX = position.x;
      let newY = position.y;

      if (resizeMode) {
        switch (resizeDirection) {
          case 0:
            newHeight = size.height - (mouse.y - position.y);
            newY = mouse.y;
            if (newHeight < MIN_HEIGHT) {
              newHeight = MIN_HEIGHT;
              newY = position.y + size.height - MIN_HEIGHT;
            }
            break;
          case 1: // Top-right corner resize
            newWidth = mouse.x - position.x;
            newHeight = size.height - (mouse.y - position.y);
            newY = mouse.y;
            if (newWidth < MIN_WIDTH) newWidth = MIN_WIDTH;
            if (newHeight < MIN_HEIGHT) {
              newHeight = MIN_HEIGHT;
              newY = position.y + size.height - MIN_HEIGHT;
            }
            break;
          case 2: // Right resize
            newWidth = mouse.x - position.x;
            if (newWidth < MIN_WIDTH) newWidth = MIN_WIDTH;
            break;
          case 3: // Bottom-right corner resize
            newWidth = mouse.x - position.x;
            newHeight = mouse.y - position.y;
            if (newWidth < MIN_WIDTH) newWidth = MIN_WIDTH;
            if (newHeight < MIN_HEIGHT) newHeight = MIN_HEIGHT;
            break;
          case 4: // Bottom resize
            newHeight = mouse.y - position.y;
            if (newHeight < MIN_HEIGHT) newHeight = MIN_HEIGHT;
            break;
          case 5: // Bottom-left corner resize
            newWidth = size.width - (mouse.x - position.x);
            newHeight = mouse.y - position.y;
            newX = mouse.x;
            if (newWidth < MIN_WIDTH) {
              newWidth = MIN_WIDTH;
              newX = position.x + size.width - MIN_WIDTH;
            }
            if (newHeight < MIN_HEIGHT) newHeight = MIN_HEIGHT;
            break;
          case 6: // Left resize
            newWidth = size.width - (mouse.x - position.x);
            newX = mouse.x;
            if (newWidth < MIN_WIDTH) {
              newWidth = MIN_WIDTH;
              newX = position.x + size.width - MIN_WIDTH;
            }
            break;
          case 7: // Top-left corner resize
            newWidth = size.width - (mouse.x - position.x);
            newHeight = size.height - (mouse.y - position.y);
            newX = mouse.x;
            newY = mouse.y;
            if (newWidth < MIN_WIDTH) {
              newWidth = MIN_WIDTH;
              newX = position.x + size.width - MIN_WIDTH;
            }
            if (newHeight < MIN_HEIGHT) {
              newHeight = MIN_HEIGHT;
              newY = position.y + size.height - MIN_HEIGHT;
            }
            break;
          default:
            break;
        }

        setSize({ width: newWidth, height: newHeight });
        setPosition({ x: newX, y: newY });
      }
    };

    if (!isMovable) updateOffset();
    else updateWindowPosition();
  }, [mouse]);

  const handleClickDownMoveArea = () => setMovable(true);
  const handleClickUpMoveArea = () => setMovable(false);

  return (
    <div
      ref={ref}
      className={cn(
        "fixed min-w-14 min-h-14 window-border w-fit h-fit rounded-lg before:rounded-lg after:rounded-lg overflow-hidden "
      )}
      style={{ width: size.width, height: size.height }}
      autoFocus
    >
      <div
        onMouseDown={handleClickDownMoveArea}
        onMouseUp={handleClickUpMoveArea}
        className="flex items-center py-1 px-3 w-full bg-black/20 text-white font-bold"
      >
        <div className="flex gap-1">
          <span onClick={handleClose}>o</span>
          <span onClick={handleMinimize}>o</span>
          <span onClick={handleFullscreen}>o</span>
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
