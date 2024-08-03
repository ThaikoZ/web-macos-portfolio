import Tooltip from "@/components/Tooltip";
import TrashLight from "./assets/icons/TrashLight";
import { useTheme } from "@/hooks/useTheme";
import { DARK_MODE } from "@/constants/theme";
import TrashDark from "./assets/icons/TrashDark";

const TrashAppIcon = () => {
  const { theme } = useTheme();
  return (
    <Tooltip hint="Trash">
      <div>{theme === DARK_MODE ? <TrashDark /> : <TrashLight />}</div>
    </Tooltip>
  );
};

export default TrashAppIcon;
