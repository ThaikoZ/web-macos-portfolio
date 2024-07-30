import { BatteryFullIcon } from "@/assets/icons/utility";
import Button from "../new/ui/Button";
import { Dropdown } from "../ui/Dropdown/Dropdown";
import { batteryMenu } from "@/apps/bateryMenu";

const BatteryButton = () => {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button Icon={<BatteryFullIcon width={24} />} />
      </Dropdown.Trigger>
      <Dropdown.Menu className="">
        {batteryMenu.map((item, index) => (
          <Dropdown.Content key={index} item={item} />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default BatteryButton;
