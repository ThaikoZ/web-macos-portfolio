import WindowWrapper from "@/components/desktop/WindowWrapper";
import { TrashConfig } from "./Config";

interface Props {
  id: number;
}

const App = ({ id }: Props) => {
  return (
    <WindowWrapper id={id} config={TrashConfig}>
      Trash App
    </WindowWrapper>
  );
};

export default App;
