import Window from "@/components/desktop/Window";
import { TrashConfig } from "./trashConfig";

interface Props {
  id: number;
}

const TrashApp = ({ id }: Props) => {
  const { defalutSize, title, isResizable, defaultPosition } = TrashConfig;

  return (
    <Window
      id={id}
      defalutSize={defalutSize}
      title={title}
      isResizable={isResizable}
      defaultPosition={defaultPosition}
    >
      <div className="">Trash</div>
    </Window>
  );
};

export default TrashApp;
