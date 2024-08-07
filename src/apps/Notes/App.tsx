import AppWindowWrapper from "@/components/desk/AppWindowWrapper";
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
