import AppWindowWrapper from "@/components/desk/AppWindowWrapper";
import { SafariConfig } from "./Config";

interface Props {
  id: number;
}

const App = ({ id }: Props) => {
  return (
    <AppWindowWrapper id={id} config={SafariConfig}>
      Safari App
    </AppWindowWrapper>
  );
};

export default App;
