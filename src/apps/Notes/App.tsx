import Window from "@/components/desktop/Window";
import { NotesConfig } from "./Config";

interface Props {
  id: number;
}

const App = ({ id }: Props) => {
  const { defaultSize, title, isResizable, defaultPosition } = NotesConfig;

  return (
    <Window
      id={id}
      defaultSize={defaultSize}
      title={title}
      isResizable={isResizable}
      defaultPosition={defaultPosition}
    >
      Notes
    </Window>
  );
};

export default App;
