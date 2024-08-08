import { useCallback, useEffect, useState } from "react";
import useMove from "./useMove";
import useResize from "./useResize";
import { Position, Size, WindowState } from "@/types/window";
import useDoubleClick from "./useDoubleClick";
import useDesk from "./useDesk";
import { AppConfig } from "@/types/app";
import { checkIfWindowIsMinimized } from "@/utils/window";
import { DEFAULT_START_POSITION, DEFAULT_START_SIZE } from "@/constants/system";

const useWindow = (
  initialSize: Size,
  initialPosition: Position,
  initialIsResizable: boolean,
  config: AppConfig
) => {
  const [size, setSize] = useState<Size>(DEFAULT_START_SIZE);
  const [position, setPosition] = useState<Position>(DEFAULT_START_POSITION);
  const [isResizable, setResizable] = useState(initialIsResizable);
  const [isFullscreen, setFullscreen] = useState(false);
  const [previousState, setPreviousState] = useState<WindowState>({
    size: initialSize,
    position: initialPosition,
  });
  const [isTransitioning, setTransitioning] = useState(false);
  const [isOpening, setOpening] = useState(true);

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

  const { minimizeWindow, minimizedWindows } = useDesk();
  const isMinimized = checkIfWindowIsMinimized(minimizedWindows, config);

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
    setFullscreen((prev) => !prev);
    setTimeout(() => setTransitioning(false), 300);
  }, [isFullscreen, position, size, previousState, isResizable]);

  const toggleMinimize = useCallback(() => {
    setTransitioning(true);
    if (isMinimized) {
      setSize(previousState.size);
      setPosition(previousState.position);
    } else {
      const state = { size, position };
      console.log(state);
      setPreviousState(state);
      setSize(DEFAULT_START_SIZE);
      setPosition(DEFAULT_START_POSITION);
    }
    setTimeout(() => {
      setTransitioning(false);
      minimizeWindow(config);
    }, 300);
  }, [isMinimized, position, size, previousState, config, minimizeWindow]);

  useEffect(() => {
    if (isOpening) {
      setTransitioning(true);
      // console.log(previousState);
      setSize(previousState.size);
      setPosition(previousState.position);

      setTimeout(() => {
        setTransitioning(false);
        setOpening(false);
      }, 300);
    }
  }, [isOpening, previousState]);

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
