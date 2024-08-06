import Tooltip from "@/components/Tooltip";
import AppIcon from "./assets/icons/MusicIcon";

const size = 56;

const Icon = () => {
  return (
    <Tooltip hint="Music">
      <AppIcon width={size} height={size} />
    </Tooltip>
  );
};

export default Icon;
