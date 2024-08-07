import AppWindowWrapper from "@/components/desktop/AppWindowWrapper";
import { FaceTimeConfig } from "./Config";

interface Props {
  id: number;
}

const App = ({ id }: Props) => {
  return (
    <AppWindowWrapper id={id} config={FaceTimeConfig}>
      FaceTime App
    </AppWindowWrapper>
  );
};

export default App;
