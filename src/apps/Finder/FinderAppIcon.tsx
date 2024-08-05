import Tooltip from "@/components/Tooltip";
import FinderIcon from "./assets/icons/FinderIcon";

const size = 60;

const FinderAppIcon = () => {
  return (
    <Tooltip hint="Finder">
      <FinderIcon width={size} height={size} />
    </Tooltip>
  );
};

export default FinderAppIcon;
