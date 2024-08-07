import WindowWrapper from "@/components/desktop/WindowWrapper";
import { MusicConfig } from "./Config";

interface Props {
  id: number;
}

const App = ({ id }: Props) => {
  return (
    <WindowWrapper id={id} config={MusicConfig}>
      Music App
    </WindowWrapper>
  );
};

export default App;
