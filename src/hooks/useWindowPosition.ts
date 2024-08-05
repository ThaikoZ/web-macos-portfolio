import useMouse from "@/hooks/useMouse";
import { Position } from "@/types/window";
import { useEffect, useState } from "react";

const NAVBAR_HEIGHT = 27;

const useWindowPosition = (initialPosition: Position, isMoving: boolean) => {
  const [position, setPosition] = useState(initialPosition);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const mouse = useMouse();

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

  useEffect(() => {
    if (!isMoving) updateOffset();
    else updateWindowPosition();
  }, [mouse.x, mouse.y]);

  return { position, setPosition };
};

export default useWindowPosition;
