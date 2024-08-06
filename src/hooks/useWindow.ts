import { useCallback, useEffect, useState } from "react";
import useMouse from "@/hooks/useMouse";
import { Position, Size } from "@/types/window";
import useDoubleClick from "./useDoubleClick";

const NAVBAR_HEIGHT = 27;

interface WindowState {
  size: Size;
  position: Position;
}

const useWindow = (
  initialSize: Size,
  initialPosition: Position,
  initialIsResizable: boolean
) => {
  const [size, setSize] = useState<Size>(initialSize);
  const [position, setPosition] = useState<Position>(initialPosition);
  const [isResizable, setResizable] = useState(initialIsResizable);
  const [isResizing, setResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState<null | string>(null);
  const [isMoving, setMoving] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isFullscreen, setFullscreen] = useState(false);
  const [isMinimized, setMinimized] = useState(false);
  const [previousState, setPreviousState] = useState<WindowState>({
    size,
    position,
  });
  const [isTransitioning, setTransitioning] = useState(false);
  const mouse = useMouse();
  const handleDoubleClickFullscreen = useDoubleClick(() => toggleFullscreen());

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

  const handleMouseDownMove = () => {
    if (!isFullscreen) {
      const newOffset = {
        x: mouse.x - position.x,
        y: mouse.y - position.y - NAVBAR_HEIGHT,
      };
      setOffset(newOffset);
      setMoving(true);
    }
  };

  const handleMouseUpMove = () => {
    setMoving(false);
  };

  const toggleFullscreen = useCallback(() => {
    if (!isResizable && !isFullscreen) return;

    setTransitioning(true);
    if (isFullscreen) {
      setSize(previousState.size);
      setPosition(previousState.position);
      setResizable(true);
    } else {
      setPreviousState({ size, position });
      setResizable(false);
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setPosition({
        x: 0,
        y: 0,
      });
    }
    setFullscreen((prev) => !prev);

    setTimeout(() => setTransitioning(false), 300);
  }, [isFullscreen, position, size, previousState, isResizable]);

  const toggleMinimize = useCallback(() => {
    setTransitioning(true);
    if (isMinimized) {
      setSize(previousState.size);
      setPosition(previousState.position);
    } else {
      setPreviousState({ size, position });
      setSize({ width: 0, height: 0 });
      setPosition({
        x: (window.screen.width - size.width) / 2,
        y: window.screen.height,
      });
    }
    setMinimized((prev) => !prev);

    setTimeout(() => setTransitioning(false), 300);
  }, [isMinimized, position, size, previousState]);

  const handleMouseMove = useCallback(() => {
    if (isResizing && resizeDirection && isResizable && !isFullscreen) {
      const newSize = { ...size };
      const newPosition = { ...position };

      if (resizeDirection.includes("right")) {
        newSize.width = mouse.x - position.x;
      }
      if (resizeDirection.includes("left")) {
        const newWidth = position.x - mouse.x + size.width;
        newSize.width = newWidth;
        newPosition.x = mouse.x;
      }
      if (resizeDirection.includes("bottom")) {
        newSize.height = mouse.y - position.y;
      }
      if (resizeDirection.includes("top")) {
        if (mouse.y >= NAVBAR_HEIGHT) {
          const newHeight = position.y - mouse.y + size.height;
          newSize.height = newHeight;
          newPosition.y = mouse.y;
        }
      }

      setSize(newSize);
      setPosition(newPosition);
    }

    if (isMoving && !isFullscreen) {
      const newPosition = {
        x: mouse.x - offset.x,
        y:
          mouse.y - NAVBAR_HEIGHT < NAVBAR_HEIGHT + offset.y
            ? NAVBAR_HEIGHT
            : mouse.y - offset.y - NAVBAR_HEIGHT,
      };

      setPosition(newPosition);
    }
  }, [
    isResizing,
    resizeDirection,
    size,
    position,
    mouse,
    isMoving,
    offset,
    isResizable,
    isFullscreen,
  ]);

  useEffect(() => {
    if (isResizing || isMoving) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener(
        "mouseup",
        isResizing ? handleMouseUpResize : handleMouseUpMove
      );
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUpResize);
      window.removeEventListener("mouseup", handleMouseUpMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUpResize);
      window.removeEventListener("mouseup", handleMouseUpMove);
    };
  }, [
    isResizing,
    isMoving,
    resizeDirection,
    mouse,
    handleMouseMove,
    isResizable,
    handleMouseUpResize,
    isFullscreen,
  ]);

  return {
    size,
    position,
    handleMouseDownResize,
    handleMouseDownMove,
    isResizing,
    isMoving,
    toggleFullscreen,
    isFullscreen,
    handleDoubleClickFullscreen,
    isTransitioning,
    toggleMinimize,
  };
};

export default useWindow;
