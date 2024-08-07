import { useState, useCallback } from "react";
import useMouse from "@/hooks/useMouse";
import { Position } from "@/types/window";

const NAVBAR_HEIGHT = 27;

const useMove = (
  position: Position,
  setPosition: (position: Position) => void,
  isFullscreen: boolean
) => {
  const [isMoving, setMoving] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const mouse = useMouse();

  const handleMouseDownMove = () => {
    if (!isMoving && !isFullscreen) {
      const newOffset = {
        x: mouse.x - position.x,
        y: mouse.y - position.y - NAVBAR_HEIGHT,
      };
      setOffset(newOffset);
      setMoving(true);
    }
  };

  const handleMouseUpMove = () => setMoving(false);

  const handleMouseMove = useCallback(() => {
    if (isMoving && !isFullscreen) {
      const newPosition = {
        x: mouse.x - offset.x,
        y: Math.max(mouse.y - NAVBAR_HEIGHT - offset.y, NAVBAR_HEIGHT),
      };
      setPosition(newPosition);
    }
  }, [isMoving, mouse, offset, setPosition, isFullscreen]);

  return {
    handleMouseDownMove,
    handleMouseUpMove,
    handleMouseMove,
    isMoving,
  };
};

export default useMove;
