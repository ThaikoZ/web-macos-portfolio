import Tooltip from "@/components/Tooltip";
import { DARK_MODE } from "@/constants/theme";
import { settingsSelector } from "@/store/systemSettingsSlice";
import { useSelector } from "react-redux";
import DarkAppIcon from "./assets/icons/DarkAppIcon";
import LightAppIcon from "./assets/icons/LightAppIcon";

const ICON_SIZE = 48;

const ThemeIcon = ({ theme }: { theme: string }) => {
  if (theme === DARK_MODE)
    return <DarkAppIcon width={ICON_SIZE} height={ICON_SIZE} />;
  return <LightAppIcon width={ICON_SIZE} height={ICON_SIZE} />;
};

const Icon = () => {
  const { theme } = useSelector(settingsSelector);

  return (
    <Tooltip hint="Trash">
      <ThemeIcon theme={theme} />
    </Tooltip>
  );
};

export default Icon;
