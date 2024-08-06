import Tooltip from "@/components/Tooltip";
import AppIcon from "./assets/icons/AppIcon";

const size = 56;

const Icon = () => {
  return (
    <Tooltip hint="Finder">
      <AppIcon width={size} height={size} />
    </Tooltip>
  );
};

export default Icon;
