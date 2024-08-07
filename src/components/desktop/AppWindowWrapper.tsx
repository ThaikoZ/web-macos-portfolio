import Window from "@/components/desktop/Window";
import { AppConfig } from "@/types/app";

interface AppWindowWrapperProps {
  id: number;
  config: AppConfig;
  children: React.ReactNode;
}

const AppWindowWrapper = ({ id, config, children }: AppWindowWrapperProps) => {
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

export default AppWindowWrapper;
