import Window from "@/components/desk/Window";
import { AppConfig } from "@/types/app";

interface AppWindowWrapperProps {
  config: AppConfig;
  children: React.ReactNode;
}

const AppWindowWrapper = ({ config, children }: AppWindowWrapperProps) => {
  return <Window config={config}>{children}</Window>;
};

export default AppWindowWrapper;
