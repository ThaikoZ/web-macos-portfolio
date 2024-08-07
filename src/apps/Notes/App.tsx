import WindowWrapper from "@/components/desktop/WindowWrapper";
import { NotesConfig } from "./Config";

interface Props {
  id: number;
}

const App = ({ id }: Props) => {
  return (
    <WindowWrapper id={id} config={NotesConfig}>
      Notes App
    </WindowWrapper>
  );
};

export default App;
