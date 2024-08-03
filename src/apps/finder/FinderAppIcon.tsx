import Tooltip from "@/components/Tooltip";
import FinderIcon from "./assets/icons/FinderIcon";

const FinderAppIcon = () => {
  return (
    <Tooltip hint="Finder">
      <div>
        <FinderIcon />
      </div>
    </Tooltip>
  );
};

export default FinderAppIcon;
