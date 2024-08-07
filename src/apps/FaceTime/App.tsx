import WindowWrapper from "@/components/desktop/WindowWrapper";
import { FaceTimeConfig } from "./Config";

interface Props {
  id: number;
}

const App = ({ id }: Props) => {
  return (
    <WindowWrapper id={id} config={FaceTimeConfig}>
      FaceTime App
    </WindowWrapper>
  );
};

export default App;
