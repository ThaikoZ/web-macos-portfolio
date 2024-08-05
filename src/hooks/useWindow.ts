import { useCallback, useEffect, useState } from "react";
import useMouse from "@/hooks/useMouse";
import { Position, Size } from "@/types/window";

const NAVBAR_HEIGHT = 27;
const DOUBLE_CLICK_DELAY = 200;

interface WindowState {
  size: Size;
  position: Position;
}

const useWindow = (
  initialSize: Size,
  initialPosition: Position,
  initialIsResizable: boolean
) => {
  const [isResizable, setResizable] = useState(initialIsResizable);
  const [size, setSize] = useState<Size>(initialSize);
  const [position, setPosition] = useState<Position>(initialPosition);
  const [isResizing, setResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState<null | string>(null);
  const [isMoving, setMoving] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isFullscreen, setFullscreen] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [previousState, setPreviousState] = useState<WindowState>({
    size,
    position,
  });
  const [isTransitioning, setTransitioning] = useState(false);
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
        height: window.innerHeight - NAVBAR_HEIGHT,
      });
      setPosition({
        x: 0,
        y: NAVBAR_HEIGHT,
      });
    }
    setFullscreen((prev) => !prev);

    setTimeout(() => setTransitioning(false), 300);
  }, [isFullscreen, position, size, previousState]);

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
        const newHeight = position.y - mouse.y + size.height;
        newSize.height = newHeight;
        newPosition.y = mouse.y;
      }

      setSize(newSize);
      setPosition(newPosition);
    }

    if (isMoving && !isFullscreen) {
      const newPosition = {
        x: mouse.x - offset.x,
        y: mouse.y - offset.y - NAVBAR_HEIGHT,
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

  const handleDoubleClick = useCallback(() => {
    const currentTime = Date.now();
    const timeDifference = currentTime - lastClickTime;

    if (timeDifference < DOUBLE_CLICK_DELAY) {
      toggleFullscreen();
    }

    // Update the last click time
    setLastClickTime(currentTime);
  }, [lastClickTime, toggleFullscreen]);

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
    handleDoubleClick,
    isTransitioning,
  };
};

export default useWindow;
