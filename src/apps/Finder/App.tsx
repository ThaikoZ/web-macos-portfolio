import WindowWrapper from "@/components/desktop/WindowWrapper";
import { FinderConfig } from "./Config";

interface Props {
  id: number;
}

const FinderApp = ({ id }: Props) => {
  return (
    <WindowWrapper id={id} config={FinderConfig}>
      Finder App
    </WindowWrapper>
  );
};

export default FinderApp;
