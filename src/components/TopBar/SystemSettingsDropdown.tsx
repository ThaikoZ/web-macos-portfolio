import { Dropdown } from "../Oldui/Dropdown/Dropdown";
import Button from "../Oldui/Button";
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
