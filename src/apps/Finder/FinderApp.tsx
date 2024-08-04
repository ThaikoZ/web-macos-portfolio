import Window from "@/components/desktop/Window";
import { FinderConfig } from "./finderConfig";

interface Props {
  id: number;
}

const FinderApp = ({ id }: Props) => {
  const { defalutSize, title, isResizable, defaultPosition } = FinderConfig;

  return (
    <Window
      id={id}
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
