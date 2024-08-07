import WindowWrapper from "@/components/desktop/WindowWrapper";
import { SafariConfig } from "./Config";

interface Props {
  id: number;
}

const App = ({ id }: Props) => {
  return (
    <WindowWrapper id={id} config={SafariConfig}>
      Safari App
    </WindowWrapper>
  );
};

export default App;
