import { Dropdown } from "../ui/Dropdown/Dropdown";
import Button from "../ui/Button";
import { AppleLogoIcon } from "@/assets/icons/utility";
import { systemMenu } from "@/apps/systemMenu";

const SystemSettingsButton = () => {
  return (
    <Dropdown id="appleMenu">
      <Dropdown.Trigger>
        <Button Icon={<AppleLogoIcon />} />
      </Dropdown.Trigger>
      <Dropdown.Menu>
        {systemMenu.map((item, index) => (
          <Dropdown.Content key={index} item={item} />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SystemSettingsButton;
