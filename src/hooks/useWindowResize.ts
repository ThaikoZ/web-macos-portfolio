import useMouse from "@/hooks/useMouse";
import { Position, Size } from "@/types/window";
import { useEffect, useState } from "react";

const useWindowResize = (initialSize: Size, initialPosition: Position) => {
  const [size, setSize] = useState<Size>(initialSize);
  const [position, setPosition] = useState<Position>(initialPosition);
  const [isResizing, setResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState<null | string>(null);
  const mouse = useMouse();

  const handleMouseDown = (direction: string) => {
    setResizeDirection(direction);
    setResizing(true);
  };

  const handleMouseUp = () => {
    setResizing(false);
    setResizeDirection(null);
  };

  const handleMouseMove = () => {
    if (!isResizing || !resizeDirection) return;

    const newSize = { ...size };
    const newPosition = { ...position };

    if (resizeDirection.includes("right")) {
      newSize.width = mouse.x - position.x;
    }
    if (resizeDirection.includes("left")) {
      const newWidth = mouse.x - position.x + size.width;
      newSize.width = newWidth;
      newPosition.x = mouse.x;
    }
    if (resizeDirection.includes("bottom")) {
      newSize.height = mouse.y - position.y;
    }
    if (resizeDirection.includes("top")) {
      const newHeight = mouse.y - position.y + size.height;
      newSize.height = newHeight;
      newPosition.y = mouse.y;
    }

    setSize(newSize);
    setPosition(newPosition);
  };

  useEffect(() => {
    if (isResizing) {
      console.log("MOUSE", mouse);
      console.log("POSITION", position);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing, resizeDirection, mouse.x, mouse.y]);

  return {
    size,
    position,
    handleMouseDown,
    isResizing,
  };
};

export default useWindowResize;
