import Window from "@/components/desktop/Window";
import { SafariiConfig } from "./Config";

interface Props {
  id: number;
}

const App = ({ id }: Props) => {
  const { defaultSize, title, isResizable, defaultPosition } = SafariiConfig;

  return (
    <Window
      id={id}
      defaultSize={defaultSize}
      title={title}
      isResizable={isResizable}
      defaultPosition={defaultPosition}
    >
      Safarii
    </Window>
  );
};

export default App;
