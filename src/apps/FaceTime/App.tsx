import Window from "@/components/desktop/Window";
import { FaceTimeConfig } from "./Config";

interface Props {
  id: number;
}

const App = ({ id }: Props) => {
  const { defaultSize, title, isResizable, defaultPosition } = FaceTimeConfig;

  return (
    <Window
      id={id}
      defaultSize={defaultSize}
      title={title}
      isResizable={isResizable}
      defaultPosition={defaultPosition}
    >
      FaceTime
    </Window>
  );
};

export default App;
