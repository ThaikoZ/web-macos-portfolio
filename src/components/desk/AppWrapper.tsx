import Window from "@/components/desk/Window";
import { AppConfig } from "@/types/app";

interface AppWrapperProps {
  config: AppConfig;
  children: React.ReactNode;
}

const AppWrapper = ({ config, children }: AppWrapperProps) => {
  return <Window config={config}>{children}</Window>;
};

export default AppWrapper;
