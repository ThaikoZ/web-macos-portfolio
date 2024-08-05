import Tooltip from "@/components/Tooltip";
import TrashLight from "./assets/icons/TrashLight";
import { useTheme } from "@/hooks/useTheme";
import { DARK_MODE } from "@/constants/theme";
import TrashDark from "./assets/icons/TrashDark";

const size = 50;

const TrashAppIcon = () => {
  const { theme } = useTheme();
  return (
    <Tooltip hint="Trash">
      {theme === DARK_MODE ? (
        <TrashDark width={size} height={size} />
      ) : (
        <TrashLight width={size} height={size} />
      )}
    </Tooltip>
  );
};

export default TrashAppIcon;
