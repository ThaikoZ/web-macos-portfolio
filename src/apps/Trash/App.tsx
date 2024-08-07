import AppWindowWrapper from "@/components/desk/AppWindowWrapper";
import { TrashConfig } from "./Config";

interface Props {
  id: number;
}

const App = ({ id }: Props) => {
  return (
    <AppWindowWrapper id={id} config={TrashConfig}>
      Trash App
    </AppWindowWrapper>
  );
};

export default App;
