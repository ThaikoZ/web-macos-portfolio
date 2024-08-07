// components/desktop/WindowWrapper.js

import Window from "@/components/desktop/Window";
import { AppConfig } from "@/types/app";

interface WindowWrapperProps {
  id: number;
  config: AppConfig;
  children: React.ReactNode;
}

const WindowWrapper = ({ id, config, children }: WindowWrapperProps) => {
  const { defaultSize, title, isResizable, defaultPosition } = config;

  return (
    <Window
      id={id}
      defaultSize={defaultSize}
      title={title}
      isResizable={isResizable}
      defaultPosition={defaultPosition}
    >
      {children}
    </Window>
  );
};

export default WindowWrapper;
