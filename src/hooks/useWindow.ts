import { useCallback, useEffect, useState } from "react";
import useMove from "./useMove";
import useResize from "./useResize";
import { Position, Size, WindowState } from "@/types/window";
import useDoubleClick from "./useDoubleClick";

const useWindow = (
  initialSize: Size,
  initialPosition: Position,
  initialIsResizable: boolean
) => {
  const [size, setSize] = useState<Size>(initialSize);
  const [position, setPosition] = useState<Position>(initialPosition);
  const [isResizable, setResizable] = useState(initialIsResizable);
  const [isFullscreen, setFullscreen] = useState(false);
  const [isMinimized, setMinimized] = useState(false);
  const [previousState, setPreviousState] = useState<WindowState>({
    size,
    position,
  });
  const [isTransitioning, setTransitioning] = useState(false);

  const {
    handleMouseDownMove,
    handleMouseUpMove,
    handleMouseMove: handleMoveMouseMove,
    isMoving,
  } = useMove(position, setPosition, isFullscreen);

  const {
    handleMouseDownResize,
    handleMouseUpResize,
    handleMouseMove: handleResizeMouseMove,
    isResizing,
  } = useResize(
    size,
    setSize,
    position,
    setPosition,
    isResizable,
    isFullscreen
  );

  const handleDoubleClick = useDoubleClick(() => toggleFullscreen(), 300);

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
    setTimeout(() => setTransitioning(false), 300);
    setFullscreen((prev) => !prev);
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
    setTimeout(() => setTransitioning(false), 300);
    setMinimized((prev) => !prev);
  }, [isMinimized, position, size, previousState]);

  useEffect(() => {
    if (isResizing || isMoving) {
      window.addEventListener("mousemove", handleResizeMouseMove);
      window.addEventListener("mousemove", handleMoveMouseMove);
      window.addEventListener(
        "mouseup",
        isResizing ? handleMouseUpResize : handleMouseUpMove
      );
    } else {
      window.removeEventListener("mousemove", handleResizeMouseMove);
      window.removeEventListener("mousemove", handleMoveMouseMove);
      window.removeEventListener("mouseup", handleMouseUpResize);
      window.removeEventListener("mouseup", handleMouseUpMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleResizeMouseMove);
      window.removeEventListener("mousemove", handleMoveMouseMove);
      window.removeEventListener("mouseup", handleMouseUpResize);
      window.removeEventListener("mouseup", handleMouseUpMove);
    };
  }, [
    isResizing,
    isMoving,
    handleResizeMouseMove,
    handleMoveMouseMove,
    handleMouseUpResize,
    handleMouseUpMove,
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
    handleDoubleClickFullscreen: handleDoubleClick,
    isTransitioning,
    toggleMinimize,
  };
};

export default useWindow;
