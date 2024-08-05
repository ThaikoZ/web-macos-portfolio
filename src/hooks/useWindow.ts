import useMouse from "@/hooks/useMouse";
import { Position, Size } from "@/types/window";
import { useCallback, useEffect, useState } from "react";

const NAVBAR_HEIGHT = 27;

const useWindow = (
  initialSize: Size,
  initialPosition: Position,
  isResizable: boolean
) => {
  const [size, setSize] = useState<Size>(initialSize);
  const [position, setPosition] = useState<Position>(initialPosition);
  const [isResizing, setResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState<null | string>(null);
  const [isMoving, setMoving] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const mouse = useMouse();

  const handleMouseDownResize = (direction: string) => {
    if (isResizable) {
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
    const newOffset = {
      x: mouse.x - position.x,
      y: mouse.y - position.y - NAVBAR_HEIGHT,
    };
    setOffset(newOffset);
    setMoving(true);
  };

  const handleMouseUpMove = () => {
    setMoving(false);
  };

  const handleMouseMove = useCallback(() => {
    if (isResizing && resizeDirection && isResizable) {
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

    if (isMoving) {
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
  ]);

  return {
    size,
    position,
    handleMouseDownResize,
    handleMouseDownMove,
    isResizing,
    isMoving,
  };
};

export default useWindow;
