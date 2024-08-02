import { batteryMenu } from "../../apps/batteryMenu";
import { BatteryFullIcon } from "../../assets/icons/utility";
import Button from "../ui/Button";
import Dropdown from "../ui/DropdownMenu";

const BatteryButton = () => {
  return (
    <Dropdown
      trigger={<Button icon={<BatteryFullIcon width={24} />} />}
      menu={batteryMenu}
    />
  );
};

export default BatteryButton;
