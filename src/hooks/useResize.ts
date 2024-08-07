import { useState, useCallback } from "react";
import useMouse from "@/hooks/useMouse";
import {
  MIN_WINDOW_HEIGHT,
  MIN_WINDOW_WIDTH,
  NAVBAR_HEIGHT,
} from "@/constants/system";
import { Position, Size } from "@/types/window";

const useResize = (
  size: Size,
  setSize: (size: Size) => void,
  position: Position,
  setPosition: (position: Position) => void,
  isResizable: boolean,
  isFullscreen: boolean
) => {
  const [isResizing, setResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState<null | string>(null);
  const mouse = useMouse();

  const handleMouseDownResize = (direction: string) => {
    if (isResizable && !isFullscreen) {
      setResizeDirection(direction);
      setResizing(true);
    }
  };

  const handleMouseUpResize = useCallback(() => {
    if (isResizable) {
      setResizing(false);
      setResizeDirection(null);
    }
  }, [isResizable]);

  const handleMouseMove = useCallback(() => {
    if (isResizing && resizeDirection && isResizable && !isFullscreen) {
      const newSize = { ...size };
      const newPosition = { ...position };

      if (resizeDirection.includes("right")) {
        newSize.width = mouse.x - position.x;
      }
      if (resizeDirection.includes("left")) {
        const newWidth = position.x - mouse.x + size.width;
        newSize.width = Math.max(newWidth, MIN_WINDOW_WIDTH);
        newPosition.x = newSize.width > MIN_WINDOW_WIDTH ? mouse.x : position.x;
      }

      if (resizeDirection.includes("bottom")) {
        newSize.height = mouse.y - position.y;
      }
      if (resizeDirection.includes("top")) {
        if (mouse.y >= NAVBAR_HEIGHT) {
          newSize.height = Math.max(
            size.height + position.y - mouse.y,
            MIN_WINDOW_HEIGHT
          );
          newPosition.y =
            newSize.height > MIN_WINDOW_HEIGHT ? mouse.y : position.y;
        } else {
          newSize.height = Math.max(
            size.height + position.y - NAVBAR_HEIGHT,
            MIN_WINDOW_HEIGHT
          );
          newPosition.y =
            newSize.height > MIN_WINDOW_HEIGHT ? NAVBAR_HEIGHT : position.y;
        }
      }

      setSize(newSize);
      setPosition(newPosition);
    }
  }, [
    isResizing,
    resizeDirection,
    size,
    position,
    mouse,
    isResizable,
    isFullscreen,
  ]);

  return {
    handleMouseDownResize,
    handleMouseUpResize,
    handleMouseMove,
    isResizing,
  };
};

export default useResize;
