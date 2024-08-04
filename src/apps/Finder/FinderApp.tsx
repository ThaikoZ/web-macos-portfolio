import Window from "@/components/screen/Window";
import { FinderConfig } from "./finderConfig";

const FinderApp = () => {
  const { defalutSize, title, isResizable, defaultPosition } = FinderConfig;

  return (
    <Window
      defalutSize={defalutSize}
      title={title}
      isResizable={isResizable}
      defaultPosition={defaultPosition}
    >
      Finder App
    </Window>
  );
};

export default FinderApp;
