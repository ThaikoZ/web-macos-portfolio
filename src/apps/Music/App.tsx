import Window from "@/components/desktop/Window";
import { MusicConfig } from "./Config";

interface Props {
  id: number;
}

const App = ({ id }: Props) => {
  const { defalutSize, title, isResizable, defaultPosition } = MusicConfig;

  return (
    <Window
      id={id}
      defalutSize={defalutSize}
      title={title}
      isResizable={isResizable}
      defaultPosition={defaultPosition}
    >
      Music Apple
    </Window>
  );
};

export default App;
