import Window from "@/components/desktop/Window";
import { TrashConfig } from "./Config";

interface Props {
  id: number;
}

const App = ({ id }: Props) => {
  const { defaultSize, title, isResizable, defaultPosition } = TrashConfig;

  return (
    <Window
      id={id}
      defaultSize={defaultSize}
      title={title}
      isResizable={isResizable}
      defaultPosition={defaultPosition}
    >
      <div className="">Trash</div>
    </Window>
  );
};

export default App;
