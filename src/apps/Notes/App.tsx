import AppWindowWrapper from "@/components/desktop/AppWindowWrapper";
import { NotesConfig } from "./Config";

interface Props {
  id: number;
}

const App = ({ id }: Props) => {
  return (
    <AppWindowWrapper id={id} config={NotesConfig}>
      Notes App
    </AppWindowWrapper>
  );
};

export default App;
