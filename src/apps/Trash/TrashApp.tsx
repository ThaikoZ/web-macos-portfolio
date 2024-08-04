import Window from "@/components/screen/Window";
import { TrashConfig } from "./trashConfig";

const TrashApp = () => {
  const { defalutSize, title, isResizable, defaultPosition } = TrashConfig;

  return (
    <Window
      defalutSize={defalutSize}
      title={title}
      isResizable={isResizable}
      defaultPosition={defaultPosition}
    >
      Trash App
    </Window>
  );
};

export default TrashApp;
