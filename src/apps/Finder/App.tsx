import AppWindowWrapper from "@/components/desktop/AppWindowWrapper";
import { FinderConfig } from "./Config";

interface Props {
  id: number;
}

const FinderApp = ({ id }: Props) => {
  return (
    <AppWindowWrapper id={id} config={FinderConfig}>
      Finder App
    </AppWindowWrapper>
  );
};

export default FinderApp;
