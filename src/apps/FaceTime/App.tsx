import AppWindowWrapper from "@/components/desk/AppWindowWrapper";
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
