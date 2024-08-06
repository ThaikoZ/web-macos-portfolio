import Tooltip from "@/components/Tooltip";
import LightAppIcon from "./assets/icons/LightAppIcon";
import { useTheme } from "@/hooks/useTheme";
import { DARK_MODE } from "@/constants/theme";
import DarkAppIcon from "./assets/icons/DarkAppIcon";

const size = 48;

const Icon = () => {
  const { theme } = useTheme();
  return (
    <Tooltip hint="Trash">
      {theme === DARK_MODE ? (
        <DarkAppIcon width={size} height={size} />
      ) : (
        <LightAppIcon width={size} height={size} />
      )}
    </Tooltip>
  );
};

export default Icon;
