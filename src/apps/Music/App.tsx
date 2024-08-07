import Window from "@/components/desktop/Window";
import { MusicConfig } from "./Config";

interface Props {
  id: number;
}

const App = ({ id }: Props) => {
  const { defaultSize, title, isResizable, defaultPosition } = MusicConfig;

  return (
    <Window
      id={id}
      defaultSize={defaultSize}
      title={title}
      isResizable={isResizable}
      defaultPosition={defaultPosition}
    >
      Music Apple
    </Window>
  );
};

export default App;
