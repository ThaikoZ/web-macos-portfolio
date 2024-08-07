import AppWindowWrapper from "@/components/desk/AppWindowWrapper";
import { MusicConfig } from "./Config";

interface Props {
  id: number;
}

const App = ({ id }: Props) => {
  return (
    <AppWindowWrapper id={id} config={MusicConfig}>
      Music App
    </AppWindowWrapper>
  );
};

export default App;
